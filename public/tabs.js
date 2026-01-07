document.addEventListener("DOMContentLoaded", () => {

  // ======================
  // TABS PRINCIPAIS (Skills / Collectibles / etc)
  // ======================
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });


  // ======================
  // SUBTABS DO TOPO (Skills, Collectibles, Wearables, Buffs)
  // ======================
  document.querySelectorAll(".tab-content").forEach(tab => {

    const buttons = tab.querySelectorAll(".sub-tab-btn");
    const contents = tab.querySelectorAll(".sub-tab-content");

    if (!buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.subTab;

        buttons.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        tab.querySelector(`#${target}`).classList.add("active");
      });
    });
  });


  // ======================
  // TABS SECUNDÁRIAS (Crops / Minerais / Animais)
  // ======================
  document.querySelectorAll(".tab2-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab2;

      document.querySelectorAll(".tab2-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab2-content").forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });


  // ======================
  // SUBTABS DAS TABS SECUNDÁRIAS (Crops / Animais)
  // ======================
  document.querySelectorAll(".tab2-content").forEach(tab => {

    const buttons = tab.querySelectorAll(".subtab-btn");
    const contents = tab.querySelectorAll(".subtab-content");

    if (!buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.subtab;

        buttons.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        tab.querySelector(`#${target}`).classList.add("active");
      });
    });
  });

});
