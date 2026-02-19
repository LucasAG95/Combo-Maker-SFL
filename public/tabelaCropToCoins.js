const mostrarResultadoCropToCoins = document.getElementById('saida-das-crop-to-coins');

// Estado da ordenação e dados
let dadosOriginais = [];
let ordenacaoAtual = {
    coluna: null,
    direcao: 'asc' // 'asc' ou 'desc'
};

function cropToCoins() {
    dadosOriginais = [...crops, ...fruits, ...fruitsLunares, ...greenhouse];
    renderizarTabelaCropToCoins(dadosOriginais);
}

function ordenarDados(coluna) {
    // Se clicar na mesma coluna, inverte a direção
    if (ordenacaoAtual.coluna === coluna) {
        ordenacaoAtual.direcao = ordenacaoAtual.direcao === 'asc' ? 'desc' : 'asc';
    } else {
        ordenacaoAtual.coluna = coluna;
        ordenacaoAtual.direcao = 'asc';
    }

    let umFlowerEmCoinsPadrao = 320;
    
    const dadosOrdenados = [...dadosOriginais].sort((a, b) => {
        let valorA, valorB;

        switch(coluna) {
            case 0: // Nome
                valorA = a.name.toLowerCase();
                valorB = b.name.toLowerCase();
                break;
            case 1: // Valor de Venda por Coins
                valorA = a.vendaPorCrop || a.vendaPorFruta;
                valorB = b.vendaPorCrop || b.vendaPorFruta;
                break;
            case 2: // Valor do Market
                valorA = a.valorDoMarket;
                valorB = b.valorDoMarket;
                break;
            case 3: // Coins ganhas a cada 1 Flower
                valorA = (1 / a.valorDoMarket) * (a.vendaPorCrop || a.vendaPorFruta);
                valorB = (1 / b.valorDoMarket) * (b.vendaPorCrop || b.vendaPorFruta);
                break;
            case 4: // Porcentagem
                const coinsA = (1 / a.valorDoMarket) * (a.vendaPorCrop || a.vendaPorFruta);
                const coinsB = (1 / b.valorDoMarket) * (b.vendaPorCrop || b.vendaPorFruta);
                valorA = ((coinsA / umFlowerEmCoinsPadrao) - 1) * 100;
                valorB = ((coinsB / umFlowerEmCoinsPadrao) - 1) * 100;
                break;
        }

        // Comparação
        if (typeof valorA === 'string') {
            return ordenacaoAtual.direcao === 'asc' 
                ? valorA.localeCompare(valorB)
                : valorB.localeCompare(valorA);
        } else {
            return ordenacaoAtual.direcao === 'asc' 
                ? valorA - valorB
                : valorB - valorA;
        }
    });

    renderizarTabelaCropToCoins(dadosOrdenados);
}

function renderizarTabelaCropToCoins(dados) {
    let umFlowerEmCoinsPadrao = 320;
    let traducaoTabelaCropToCoins = traducaoCropToCoins[idioma];

    // Função para adicionar classe ativa
    const getClasseAtiva = (coluna) => {
        let classes = 'th-ordenavel';
        if (ordenacaoAtual.coluna === coluna) {
            classes += ' ativo ' + ordenacaoAtual.direcao;
        }
        return classes;
    };

    let tabelaTituloCropToCoins = `
        <tr>   
            <th class="${getClasseAtiva(0)}" data-coluna="0">
                ${traducaoTabelaCropToCoins.cropEFrutas}</th>
            <th class="${getClasseAtiva(1)}" data-coluna="1">
                ${traducaoTabelaCropToCoins.valorDeVendaPorCoins}
            </th>
            <th class="${getClasseAtiva(2)}" data-coluna="2">
                ${traducaoTabelaCropToCoins.valorDoMarket}
            </th>
            <th class="${getClasseAtiva(3)}" data-coluna="3">
                ${traducaoTabelaCropToCoins.coinsGanhasPorFlower}
            </th>
            <th class="${getClasseAtiva(4)}" data-coluna="4">
                ${traducaoTabelaCropToCoins.porcentagem}<br>${imgFlower} 1 ➜ ${imgCoins} 320
            </th>
        </tr>`;

    let tabelaCropToCoins = `
    <table class="tabela-crops">
        <thead>
            ${tabelaTituloCropToCoins}
        </thead>
        <tbody>
    `;

    dados.forEach(crop => {
        let valorEmCoinsDaCrop = crop.vendaPorCrop || crop.vendaPorFruta;
        let coinsGanhasPorFlower = (1 / crop.valorDoMarket) * valorEmCoinsDaCrop;
        let porcentagemDasCoins = ((coinsGanhasPorFlower / umFlowerEmCoinsPadrao)) * 100 < 100 ? (((coinsGanhasPorFlower / umFlowerEmCoinsPadrao) - 1) * 100).toFixed(2) : `+${(((coinsGanhasPorFlower / umFlowerEmCoinsPadrao) - 1) * 100).toFixed(2)}`

        let imgCrop = sprite(crop.name);

        tabelaCropToCoins += `
        <tr>
            <td>${imgCrop} ${crop.name}</td>
            <td>${imgCoins} ${valorEmCoinsDaCrop.toFixed(2)}</td>
            <td>${imgFlower} ${crop.valorDoMarket.toFixed(6)}</td>
            <td>${imgCoins} ${coinsGanhasPorFlower.toFixed(2)}</td>
            <td>${porcentagemDasCoins}%</td>
        </tr>
        `;
    });

    tabelaCropToCoins += `</tbody></table>`;

    mostrarResultadoCropToCoins.innerHTML = `
        <div class="tabelas-em-ordem">
            ${tabelaCropToCoins}      
        </div>
    `;

    // Adicionar event listeners aos cabeçalhos
    const headers = mostrarResultadoCropToCoins.querySelectorAll('.th-ordenavel');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const coluna = parseInt(this.getAttribute('data-coluna'));
            ordenarDados(coluna);
        });
    });
}

let traducaoCropToCoins = {
    portugues: {
        cropEFrutas: 'Crops e Frutas',
        valorDeVendaPorCoins: 'Valor de Venda<br>por Coins',
        valorDoMarket: 'Valor do Market P2P',
        coinsGanhasPorFlower: 'Coins ganhas<br>a cada 1 Flower',
        porcentagem: 'Porcentagem',
    },
    ingles: {
        cropEFrutas: 'Crops and Fruits',
        valorDeVendaPorCoins: 'Sale Value<br>in Coins',
        valorDoMarket: 'P2P Market Value',
        coinsGanhasPorFlower: 'Coins Earned<br>per 1 Flower',
        porcentagem: 'Percentage',
    }
};