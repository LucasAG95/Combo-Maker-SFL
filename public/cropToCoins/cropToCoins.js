// ============================================================================
// DECLARAÇÕES — tudo declarado primeiro para evitar TDZ
// ============================================================================

let idiomaTabelaCropToCoins = {
    portugues: {
        recurso: 'Recurso',
        vendaPorCoins: 'Valor de Venda<br>por Coins',
        valorDoMarket: 'Valor no Market P2P',
        coinsAdquiridas: 'Coins Adquiridas<br>a cada 1 Flower',
        porcentagem: 'Porcentagem',
        greenThumb: '+5% de coins ao vender colheitas (Loja de Sementes)',
        coinSwindler: '+10% de coins ao vender colheitas (Loja de Sementes)',
    },
    ingles: {
        recurso: 'Resource',
        vendaPorCoins: 'Sell Value<br>per Coins',
        valorDoMarket: 'Market Value P2P',
        coinsAdquiridas: 'Coins Earned<br>per 1 Flower',
        porcentagem: 'Percentage',
        greenThumb: '+5% more coins when selling crops (Seed Shop)',
        coinSwindler: '+10% coins when selling crops (Seed Shop)',
    }
};

const mostrarCropToCoins = document.getElementById('saida-crop-to-coins');
let ordemAtual = { coluna: 3, direcao: 'desc' };

function tabelaCropsParaCoins() {
    const umFlowerEmCoinsPadrao = 320;
    const idiomaSelecionado = idiomaTabelaCropToCoins[idioma];

    let dados = recursosDoMarketParaCoins.map(recurso => {
        let buffGreenThumb   = document.getElementById('greenThumb-coins').checked   && recurso.tipoDeRecurso === 'crop' ? 1.05 : 1;
        let buffCoinSwindler = document.getElementById('coinSwindler-coins').checked && recurso.tipoDeRecurso === 'crop' ? 1.1  : 1;
        let valorEmCoinsFinal = recurso.valorCoins * buffGreenThumb * buffCoinSwindler;

        let umFlowerCompraQuantos = 1 / recurso.valorMarket;
        let coinsPorFlower = umFlowerCompraQuantos * valorEmCoinsFinal;
        let porcentagem = ((coinsPorFlower / umFlowerEmCoinsPadrao) - 1) * 100;

        return { recurso, valorEmCoinsFinal, coinsPorFlower, porcentagem };
    });

    dados.sort((a, b) => {
        let valA, valB;
        if      (ordemAtual.coluna === 1) { valA = a.valorEmCoinsFinal;   valB = b.valorEmCoinsFinal; }
        else if (ordemAtual.coluna === 2) { valA = a.recurso.valorMarket; valB = b.recurso.valorMarket; }
        else if (ordemAtual.coluna === 3) { valA = a.coinsPorFlower;      valB = b.coinsPorFlower; }
        else if (ordemAtual.coluna === 4) { valA = a.porcentagem;         valB = b.porcentagem; }
        else { return 0; }
        return ordemAtual.direcao === 'asc' ? valA - valB : valB - valA;
    });

    const headers = [
        { label: `${idiomaSelecionado.recurso}`,                                          col: null },
        { label: `${idiomaSelecionado.vendaPorCoins}`,                                    col: 1 },
        { label: `${idiomaSelecionado.valorDoMarket}`,                                    col: 2 },
        { label: `${idiomaSelecionado.coinsAdquiridas}`,                                  col: 3 },
        { label: `${idiomaSelecionado.porcentagem}<br>${imgFlower} 1 ➜ ${imgCoins} 320`, col: 4 },
    ];

    const tabelaTitulo = headers.map(h => {
        if (h.col === null) return `<th>${h.label}</th>`;
        const classe = ordemAtual.coluna === h.col
            ? `th-ordenavel ${ordemAtual.direcao}`
            : 'th-ordenavel';
        return `<th class="${classe}" data-col="${h.col}">${h.label}</th>`;
    }).join('');

    const linhas = dados.map(({ recurso, valorEmCoinsFinal, coinsPorFlower, porcentagem }) => {
        let imgRecurso  = sprite(recurso.name);
        let valorCoins  = recurso.valorCoins  === '' ? '' : `${imgCoins}  ${Number(valorEmCoinsFinal).toFixed(3)}`;
        let valorMarket = recurso.valorMarket === '' ? '' : `${imgFlower} ${Number(recurso.valorMarket).toFixed(6)}`;
        return `
            <tr>
                <td>${imgRecurso} ${recurso.name}</td>
                <td>${valorCoins}</td>
                <td>${valorMarket}</td>
                <td>${imgCoins} ${coinsPorFlower.toFixed(2)}</td>
                <td>${porcentagem.toFixed(2)} %</td>
            </tr>
        `;
    }).join('');

    mostrarCropToCoins.innerHTML = `
        <table class="tabela-crops-coins">
            <thead><tr>${tabelaTitulo}</tr></thead>
            <tbody>${linhas}</tbody>
        </table>
    `;

    mostrarCropToCoins.querySelectorAll('th.th-ordenavel').forEach(th => {
        th.addEventListener('click', () => {
            const col = parseInt(th.dataset.col);
            if (ordemAtual.coluna === col) {
                ordemAtual.direcao = ordemAtual.direcao === 'asc' ? 'desc' : 'asc';
            } else {
                ordemAtual.coluna = col;
                ordemAtual.direcao = 'desc';
            }
            tabelaCropsParaCoins();
        });
    });

    document.getElementById('descricao-greenThumb').innerHTML  = `${idiomaSelecionado.greenThumb}`;
    document.getElementById('descricao-coinSwindler').innerHTML = `${idiomaSelecionado.coinSwindler}`;
}

function salvarSkillC2C() {
    try {
        const saved = JSON.parse(localStorage.getItem('sfl_c2c_save') || '{}');
        saved.greenThumb   = document.getElementById('greenThumb-coins').checked;
        saved.coinSwindler = document.getElementById('coinSwindler-coins').checked;
        saved.idioma       = document.getElementById('opcao-idioma')?.value || idioma;
        localStorage.setItem('sfl_c2c_save', JSON.stringify(saved));
    } catch (e) {}
}

document.getElementById('greenThumb-coins').addEventListener('change', function () {
    salvarSkillC2C();
    tabelaCropsParaCoins();
});

document.getElementById('coinSwindler-coins').addEventListener('change', function () {
    salvarSkillC2C();
    tabelaCropsParaCoins();
});

document.getElementById('opcao-idioma')?.addEventListener('change', function () {
    salvarSkillC2C();
});

// ============================================================================
// RESTAURAÇÃO — só roda aqui, depois de tudo declarado
// ============================================================================

// 1. Skills — restaura antes da primeira renderização
(function restaurarSkillsC2C() {
    try {
        const saved = JSON.parse(localStorage.getItem('sfl_c2c_save') || '{}');
        const gt = document.getElementById('greenThumb-coins');
        const cs = document.getElementById('coinSwindler-coins');
        if (gt && saved.greenThumb   !== undefined) gt.checked = saved.greenThumb;
        if (cs && saved.coinSwindler !== undefined) cs.checked = saved.coinSwindler;
    } catch (e) {
        console.error('❌ Erro ao restaurar skills C2C:', e);
    }
})();

// 2. Idioma — dispara change DEPOIS que tudo está declarado, sem risco de TDZ
(function restaurarIdiomaC2C() {
    try {
        const savedC2C     = JSON.parse(localStorage.getItem('sfl_c2c_save') || '{}');
        const idiomaSalvo  = savedC2C.idioma || localStorage.getItem('sfl_idioma');
        if (!idiomaSalvo) return;

        const select = document.getElementById('opcao-idioma');
        if (select && select.value !== idiomaSalvo) {
            select.value = idiomaSalvo;
            if (typeof idioma !== 'undefined') window.idioma = idiomaSalvo;
            select.dispatchEvent(new Event('change', { bubbles: true }));
        }
    } catch (e) {
        console.error('❌ Erro ao restaurar idioma C2C:', e);
    }
})();

// ============================================================================
// RENDERIZAÇÃO INICIAL
// Checkboxes e idioma já restaurados — buffs aplicados corretamente
// Quando a API retornar (recursosMarket.js), chamará tabelaCropsParaCoins()
// novamente com os preços reais e os buffs já ativos
// ============================================================================
tabelaCropsParaCoins();