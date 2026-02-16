// pages/api/proxy.js

export default async function handler(req, res) {
  const { url } = req.query;

  // 🔹 CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (!url) {
    return res.status(400).json({
      error: "Parâmetro 'url' não informado"
    });
  }

  try {
    console.log("🌎 Buscando da API original:", url);

    const upstreamRes = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    if (!upstreamRes.ok) {
      return res.status(upstreamRes.status).json({
        error: "Erro na API upstream",
        status: upstreamRes.status
      });
    }

    const data = await upstreamRes.json();

    // 🔥 Cache na CDN da Vercel (15 minutos)
    res.setHeader(
      "Cache-Control",
      "s-maxage=900, stale-while-revalidate"
    );

    return res.status(200).json(data);

  } catch (err) {
    console.error("Erro no proxy:", err);

    return res.status(502).json({
      error: "Erro ao chamar API upstream",
      details: err.message
    });
  }
}
