const tituloAjuda = {
    portugues: {
        comoFunciona: 'Como funciona essa tabela?',

        //titulos principais das tabelas
        tituloTabelaCrops: '❓ Guia da Tabela de Crops',
        tituloTabelaCropsM: '❓ Guia da Tabela de Crop Machine',
        tituloTabelaFrutas: '❓ Guia da Tabela de Frutas',
        tituloTabelaGH: '❓ Guia da Tabela de Greenhouse',

        //titulos das infos primarias
        informacaoPrimaria: '==================== INFORMAÇÕES PRIMÁRIAS ====================',
        modoDeCalcular: 'Modo de calcular',
        restock: 'Restock',
        QtdDeCropPlots: 'Qtd. de Crop Plots',
        salvar: 'Salvar',
        limparCrops: 'Limpar Crops',

        plotsCropMachine: 'Plots da Crop Machine',
        oilGastoPorHora: 'Oil gasto por Hora',
        limparCM: 'Limpar CM',

        suasArvoresDuram: 'Suas árvores frutíferas duram',
        qtdDeFrutaPlots: 'Qtd. de Canteiros de Frutas',
        limparFrutas: 'Limpar Frutas',

        qtdDeGHPlots: 'Quantidade de Plots da Greenhouse',
        limparGH: 'Limpar GH',

        //titulo das colunas
        colunasDaTabela: '===================== COLUNAS DA TABELA =====================',
        cropEstoque: 'Crop / Estoque',
        custoDaSemente: 'Custo da Semente',
        mediaPorPlotTempoDaCrop: 'Média por Plot / Tempo da Crop',
        inserirSementesSalvar: 'Inserir Sementes ou Ciclos / Salvar',
        sementesUsadasTotalDeCrops: 'Sementes Usadas / Total de Crops',
        tempoTotal: 'Tempo Total',
        valorDeVendaDaBetty: 'Valor de Venda da Crop na Betty',
        valorNoMarketP2P: 'Valor no Market P2P',
        melhorOpcao: 'Melhor Opção de Venda',
        lucroTotalNaBetty: 'Lucro Total Vendendo na Betty',
        lucroTotalNoMarket: 'Lucro Total no Market P2P',
        lucroPorHora: 'Lucro Por Hora (Betty vs Market)',

        inserirSementesSalvarCM: 'Inserir Sementes, Ciclos ou Estoque / Salvar',

        frutaEstoque: 'Fruta / Estoque',
        mediaPorColetaTempoDaFruta: 'Média por Coleta / Tempo da Fruta',
        sementesUsadasTotalDeFrutas: 'Sementes Usadas / Total de Frutas',
        machadosUsadosMadeirasGanhas: 'Machados Usados / Madeiras Obtidas',
        valorDeVendaDaFrutaNaBetty: 'Valor de Venda da Fruta na Betty',

        tempoTotalGHOilGasto: 'Tempo Total / Oil Gasto',
    },
    ingles: {
        comoFunciona: 'How does this table work?',

        //titulos principais das tabelas
        tituloTabelaCrops: '❓ Crops Table Guide',
        tituloTabelaCropsM: '❓ Crop Machine Table Guide',
        tituloTabelaFrutas: '❓ Fruits Table Guide',
        tituloTabelaGH: '❓ Greenhouse Table Guide',

        //titulos das infos primarias
        informacaoPrimaria: '==================== PRIMARY INFORMATION ====================',
        modoDeCalcular: 'Calculation Mode',
        restock: 'Restock',
        QtdDeCropPlots: 'Number of Crop Plots',
        salvar: 'Save',
        limparCrops: 'Clear Crops',

        plotsCropMachine: 'Crop Machine Plots',
        oilGastoPorHora: 'Oil Consumption per Hour',
        limparCM: 'Clear CM',

        suasArvoresDuram: 'Your fruit trees last for',
        qtdDeFrutaPlots: 'Number of Fruit Patches',
        limparFrutas: 'Clear Fruits',

        qtdDeGHPlots: 'Number of Greenhouse Plots',
        limparGH: 'Clear GH',

        //titulo das colunas
        colunasDaTabela: '===================== TABLE COLUMNS =====================',
        cropEstoque: 'Crop / Stock',
        custoDaSemente: 'Seed Cost',
        mediaPorPlotTempoDaCrop: 'Average per Plot / Crop Time',
        inserirSementesSalvar: 'Enter Seeds or Cycles / Save',
        sementesUsadasTotalDeCrops: 'Seeds Used / Total Crops',
        tempoTotal: 'Total Time',
        valorDeVendaDaBetty: 'Crop Selling Price at Betty',
        valorNoMarketP2P: 'P2P Market Price',
        melhorOpcao: 'Best Selling Option',
        lucroTotalNaBetty: 'Total Profit Selling at Betty',
        lucroTotalNoMarket: 'Total Profit on the P2P Market',
        lucroPorHora: 'Profit per Hour (Betty vs Market)',

        inserirSementesSalvarCM: 'Enter Seeds, Cycles or Stock / Save',

        frutaEstoque: 'Fruit / Stock',
        mediaPorColetaTempoDaFruta: 'Average per Harvest / Fruit Time',
        sementesUsadasTotalDeFrutas: 'Seeds Used / Total Fruits',
        machadosUsadosMadeirasGanhas: 'Axes Used / Wood Obtained',
        valorDeVendaDaFrutaNaBetty: 'Fruit Selling Price at Betty',

        tempoTotalGHOilGasto: 'Total Time / Oil Spent',
    }
};

const descricaoAjuda = {
    portugues: {
        //descrição primarias
        informacaoPrimaria: '',
        modoDeCalcular: 'Selecione o modo que deseja usar para preencher a 4ª coluna.<br>• Por Semente ➜ Informe quantas sementes deseja usar.<br>• Por Ciclo ➜ Informe quantas vezes você irá plantar essa semente em todos os plots.',
        restock: 'Escolha se deseja descontar o custo de restock das sementes no cálculo de lucro nos cards.<br>Obs: Recomendo deixar desativado, pois o 📊 Resultado do Combo Completo já faz esse desconto de forma mais precisa.',
        QtdDeCropPlots: 'Informe quantos plots de crops você possui ou pretende ter na sua farm.',
        salvar: 'Após informar a quantidade de plots, clique em Salvar para guardar essa informação.',
        limparCrops: 'Se quiser limpar o combo de crops que você montou, basta clicar neste botão.',

        modoDeCalcularCM: 'Selecione o modo que deseja usar para preencher a 4ª coluna.<br>• Por Semente ➜ Informe quantas sementes deseja usar.<br>• Por Ciclo ➜ Informe quantas vezes você irá plantar essa semente em todos os plots.<br>• Por Estoque ➜ Informe quantos estoques dessa semente você irá plantar.',
        plotsCropMachine: 'Mostra quantos plots de plantio a Crop Machine possui.',
        oilGastoPorHora: 'Mostra quanto de Oil a Crop Machine consome por hora de uso.',

        suasArvoresDuram: 'Quantidade média de ciclos que uma árvore de frutas dura antes de desaparecer.',
        qtdDeFrutaPlots: 'Informe quantos plots de frutas você tem ou pretende ter na sua farm.',

        limparFrutas: 'Clique neste botão para limpar o combo de frutas que você montou.',

        qtdDeGHPlots: 'Mostra quantos plots de plantio a Greenhouse possui.',
        limparGH: 'Clique neste botão para limpar o combo da Greenhouse que você montou.',

        //descrição das colunas
        colunasDaTabela: '',
        cropEstoque: 'Nome da crop e a quantidade de sementes disponíveis no estoque.',
        custoDaSemente: 'Custo de uma semente em Coins e o valor equivalente convertido para Flower.',
        mediaPorPlotTempoDaCrop: '• Quantidade média de crops colhidas por plot.<br>• Tempo necessário para a crop crescer.',
        inserirSementesSalvar: '• Inserir Sementes ➜ Informe quantas sementes deseja usar.<br>• Inserir Ciclos ➜ Informe quantas vezes essa semente será plantada em todos os plots.<br>• Clique no botão Salvar para realizar o cálculo.',
        sementesUsadasTotalDeCrops: '• Mostra quantas sementes foram usadas após preencher a 4ª coluna.<br>• Também exibe o total de crops colhidas com essas sementes.',
        tempoTotal: 'Tempo necessário para plantar todas as sementes utilizadas.<br>Obs: No modo de cálculo por sementes, o tempo é distribuído entre todos os plots.<br>• Exemplo:<br>&nbsp;&nbsp;Se você tem 10 plots e planta 1 Sunflower, o cálculo fica 1 ÷ 10 = 0,1.<br>&nbsp;&nbsp;Isso significa que o tempo é proporcionalmente reduzido — de 1 minuto para 6 segundos.',
        valorDeVendaDaBetty: 'Preço de venda da crop na loja da Betty (onde as crops são vendidas por Coins) e o valor equivalente dessas Coins convertido para Flower.',
        valorNoMarketP2P: 'Preço médio da crop no mercado entre jogadores (P2P), já com a taxa descontada.',
        melhorOpcao: 'Indica se é mais vantajoso vender na Betty (Coins) ou no Market P2P (Flower).',
        lucroTotalNaBetty: 'Lucro total em Coins ao vender todas as crops na Betty, incluindo o valor equivalente convertido para Flower.',
        lucroTotalNoMarket: 'Lucro total em Flower ao vender todas as crops no Market P2P (com a taxa já descontada).',
        lucroPorHora: '• B = lucro por hora vendendo na Betty (valor em Coins convertido para Flower).<br>• M = lucro por hora vendendo no Market P2P (com taxa já descontada).',

        inserirSementesSalvarCM: '• Inserir Sementes ➜ Informe quantas sementes deseja usar.<br>• Inserir Ciclos ➜ Informe quantas vezes você irá plantar essa semente em todos os plots.<br>• Inserir Estoque ➜ Informe quantas vezes você irá plantar todo o estoque dessa semente.<br>• Clique no botão Salvar para realizar o cálculo.',

        frutaEstoque: 'Nome da fruta e a quantidade de sementes disponíveis no estoque.',
        mediaPorColetaTempoDaFruta: '• Quantidade média de frutas colhidas por coleta.<br>• Tempo necessário para realizar a coleta da fruta (não é o tempo total de duração da árvore).',
        sementesUsadasTotalDeFrutas: '• Mostra quantas sementes foram usadas após preencher a 4ª coluna.<br>• Também exibe o total de frutas colhidas com essas sementes.',
        machadosUsadosMadeirasGanhas: '• Mostra quantos machados, em média, serão usados para cortar as árvores de fruta.<br>• Também mostra quantas madeiras, em média, são obtidas ao cortar essas árvores.',
        valorDeVendaDaFrutaNaBetty: 'Preço de venda da fruta na loja da Betty (onde as frutas são vendidas por Coins) e o valor equivalente dessas Coins convertido para Flower.',
        tempoTotalFrutas: `Tempo necessário para plantar todas as sementes utilizadas.<br>
            Obs: No modo de cálculo por sementes, o tempo é distribuído entre todos os plots.<br>
            • Exemplo:<br>
            &nbsp;&nbsp;Tomate → 2h (120 min)<br>
            &nbsp;&nbsp;120 ÷ 15 plots = 8 minutos.`,
        valorNoMarketP2PFrutas: 'Preço médio da fruta no mercado entre jogadores (P2P), já com a taxa descontada.',
        lucroTotalNaBettyFrutas: 'Lucro total em Coins ao vender todas as frutas na Betty, incluindo o valor equivalente convertido para Flower.',
        lucroTotalNoMarketFrutas: 'Lucro total em Flower ao vender todas as frutas no Market P2P (com a taxa já descontada).',

        tempoTotalGHOilGasto: `Tempo necessário para plantar todas as sementes utilizadas.<br>
            Obs: No modo de cálculo por sementes, o tempo é distribuído entre todos os plots.<br>
            • Exemplo:<br>
            &nbsp;&nbsp;Uva → 12h (720 min)<br>
            &nbsp;&nbsp;720 ÷ 4 plots = 180 minutos (3 horas).<br><br>
            Total de Oil gasto com as Sementes Usadas`,
    },
    ingles: {
        //descrição primarias
        informacaoPrimaria: '',
        modoDeCalcular: 'Select the mode you want to use to fill the 4th column.<br>• By Seeds ➜ Enter how many seeds you want to use.<br>• By Cycles ➜ Enter how many times you will plant this seed across all plots.',
        restock: 'Choose whether to include the seed restock cost in the profit calculation shown in the cards.<br>Note: It is recommended to leave this disabled, since the 📊 Full Combo Result already subtracts it more accurately.',
        QtdDeCropPlots: 'Enter how many crop plots you currently have or plan to have on your farm.',
        salvar: 'After entering the number of plots, click Save to store this information.',
        limparCrops: 'If you want to clear the crop combo you created, simply click this button.',

        modoDeCalcularCM: 'Select the mode you want to use to fill the 4th column.<br>• By Seeds ➜ Enter how many seeds you want to use.<br>• By Cycles ➜ Enter how many times you will plant this seed across all plots.<br>• By Stock ➜ Enter how many times you will plant the full stock of this seed.',
        plotsCropMachine: 'Shows how many planting plots the Crop Machine has.',
        oilGastoPorHora: 'Shows how much Oil the Crop Machine consumes per hour of use.',

        suasArvoresDuram: 'Average number of cycles a fruit tree lasts before disappearing.',
        qtdDeFrutaPlots: 'Enter how many fruit plots you have or plan to have on your farm.',

        limparFrutas: 'Click this button to clear the fruit combo you created.',

        qtdDeGHPlots: 'Shows the number of Greenhouse planting plots.',
        limparGH: 'Click this button to clear your Greenhouse combo.',

        //descrição das colunas
        colunasDaTabela: '',
        cropEstoque: 'Crop name and the number of seeds available in stock.',
        custoDaSemente: 'Cost of one seed in Coins and its equivalent value converted to Flower.',
        mediaPorPlotTempoDaCrop: '• Average number of crops harvested per plot.<br>• Time required for the crop to grow.',
        inserirSementesSalvar: '• Enter Seeds ➜ Enter how many seeds you want to use.<br>• Enter Cycles ➜ Enter how many times this seed will be planted across all plots.<br>• Click the Save button to perform the calculation.',
        sementesUsadasTotalDeCrops: '• Shows how many seeds were used after filling the 4th column.<br>• Also displays the total number of crops harvested from those seeds.',
        tempoTotal: 'Time required to plant all seeds used.<br>Note: In Seed Calculation Mode, the time is distributed across all plots.<br>• Example:<br>&nbsp;&nbsp;If you have 10 plots and plant 1 Sunflower, the calculation becomes 1 ÷ 10 = 0.1.<br>&nbsp;&nbsp;This means the time is proportionally reduced — from 1 minute to 6 seconds.',
        valorDeVendaDaBetty: "Selling price of the crop at Betty's shop (where crops are sold for Coins) and the equivalent value of those Coins converted to Flower.",
        valorNoMarketP2P: 'Average crop price on the player-to-player market (P2P), with the marketplace fee already deducted.',
        melhorOpcao: 'Indicates whether it is more profitable to sell at Betty (Coins) or on the P2P Market (Flower).',
        lucroTotalNaBetty: 'Total profit in Coins when selling all crops to Betty, including the equivalent value converted to Flower.',
        lucroTotalNoMarket: 'Total profit in Flower when selling all crops on the P2P Market (with the fee already deducted).',
        lucroPorHora: '• B = profit per hour when selling to Betty (Coins converted to Flower).<br>• M = profit per hour when selling on the P2P Market (fee already deducted).',

        inserirSementesSalvarCM: '• Enter Seeds ➜ Enter how many seeds you want to use.<br>• Enter Cycles ➜ Enter how many times you will plant this seed across all plots.<br>• Enter Stock ➜ Enter how many times you will plant the full stock of this seed.<br>• Click the Save button to perform the calculation.',

        frutaEstoque: 'Name of the fruit and the number of seeds available in stock.',
        mediaPorColetaTempoDaFruta: '• Average number of fruits collected per harvest.<br>• Time required to harvest the fruit (this is not the total duration of the tree).',
        sementesUsadasTotalDeFrutas: '• Shows how many seeds were used after filling in the 4th column.<br>• Also displays the total number of fruits harvested with those seeds.',
        machadosUsadosMadeirasGanhas: '• Shows the average number of axes used to cut the fruit trees.<br>• Also shows the average amount of wood obtained by cutting those trees.',
        valorDeVendaDaFrutaNaBetty: "Selling price of the fruit at Betty's shop (where fruits are sold for Coins) and the equivalent value of those Coins converted to Flower.",
        tempoTotalFrutas: `Total time required to plant all seeds used.<br>
            Note: In seed calculation mode, the time is distributed across all plots.<br>
            • Example:<br>
            &nbsp;&nbsp;Tomato → 2h (120 min)<br>
            &nbsp;&nbsp;120 ÷ 15 plots = 8 minutes.`,
        valorNoMarketP2PFrutas: 'Average fruit price in the player-to-player market (P2P), with the fee already deducted.',
        lucroTotalNaBettyFrutas: 'Total profit in Coins when selling all fruits to Betty, including the equivalent value converted to Flower.',
        lucroTotalNoMarketFrutas: 'Total profit in Flower when selling all fruits on the P2P Market (with the fee already deducted).',

        tempoTotalGHOilGasto: `Total time required to plant all seeds used.<br>
            Note: In seed calculation mode, the time is distributed across all plots.<br>
            • Example:<br>
            &nbsp;&nbsp;Grape → 12h (720 min)<br>
            &nbsp;&nbsp;720 ÷ 4 plots = 180 minutes (3 hours).<br><br>
            Total Oil spent for the seeds used`,
    }
};


// ================= SISTEMA DE MODAL DE AJUDA =================
function textoAjuda() {
    const t = tituloAjuda[idioma];
    const d = descricaoAjuda[idioma];

    return {
        crops: {
            titulo: t.tituloTabelaCrops,
            colunas: [
                { titulo: t.informacaoPrimaria,         desc: d.informacaoPrimaria },
                { titulo: t.modoDeCalcular,             desc: d.modoDeCalcular },
                { titulo: t.restock,                    desc: d.restock },
                { titulo: t.QtdDeCropPlots,             desc: d.QtdDeCropPlots },
                { titulo: t.salvar,                     desc: d.salvar },
                { titulo: t.limparCrops,                desc: d.limparCrops },
                { titulo: t.colunasDaTabela,            desc: d.colunasDaTabela },
                { titulo: t.cropEstoque,                desc: d.cropEstoque },
                { titulo: t.custoDaSemente,             desc: d.custoDaSemente },
                { titulo: t.mediaPorPlotTempoDaCrop,    desc: d.mediaPorPlotTempoDaCrop },
                { titulo: t.inserirSementesSalvar,      desc: d.inserirSementesSalvar },
                { titulo: t.sementesUsadasTotalDeCrops, desc: d.sementesUsadasTotalDeCrops },
                { titulo: t.tempoTotal,                 desc: d.tempoTotal },
                { titulo: t.valorDeVendaDaBetty,        desc: d.valorDeVendaDaBetty },
                { titulo: t.valorNoMarketP2P,           desc: d.valorNoMarketP2P },
                { titulo: t.melhorOpcao,                desc: d.melhorOpcao },
                { titulo: t.lucroTotalNaBetty,          desc: d.lucroTotalNaBetty },
                { titulo: t.lucroTotalNoMarket,         desc: d.lucroTotalNoMarket },
                { titulo: t.lucroPorHora,               desc: d.lucroPorHora },
            ]
        },
        cropMachine: {
            titulo: t.tituloTabelaCropsM,
            colunas: [
                { titulo: t.informacaoPrimaria,         desc: d.informacaoPrimaria },
                { titulo: t.plotsCropMachine,           desc: d.plotsCropMachine },
                { titulo: t.oilGastoPorHora,            desc: d.oilGastoPorHora },
                { titulo: t.modoDeCalcular,             desc: d.modoDeCalcularCM },
                { titulo: t.restock,                    desc: d.restock },
                { titulo: t.salvar,                     desc: d.salvar },
                { titulo: t.limparCM,                   desc: d.limparCrops },
                { titulo: t.colunasDaTabela,            desc: d.colunasDaTabela },
                { titulo: t.cropEstoque,                desc: d.cropEstoque },
                { titulo: t.custoDaSemente,             desc: d.custoDaSemente },
                { titulo: t.mediaPorPlotTempoDaCrop,    desc: d.mediaPorPlotTempoDaCrop },
                { titulo: t.inserirSementesSalvarCM,    desc: d.inserirSementesSalvarCM },
                { titulo: t.sementesUsadasTotalDeCrops, desc: d.sementesUsadasTotalDeCrops },
                { titulo: t.tempoTotal,                 desc: d.tempoTotal },
                { titulo: t.valorDeVendaDaBetty,        desc: d.valorDeVendaDaBetty },
                { titulo: t.valorNoMarketP2P,           desc: d.valorNoMarketP2P },
                { titulo: t.melhorOpcao,                desc: d.melhorOpcao },
                { titulo: t.lucroTotalNaBetty,          desc: d.lucroTotalNaBetty },
                { titulo: t.lucroTotalNoMarket,         desc: d.lucroTotalNoMarket },
                { titulo: t.lucroPorHora,               desc: d.lucroPorHora },
            ]
        },
        frutas: {
            titulo: t.tituloTabelaFrutas,
            colunas: [
                { titulo: t.informacaoPrimaria,           desc: d.informacaoPrimaria },
                { titulo: t.suasArvoresDuram,             desc: d.suasArvoresDuram },
                { titulo: t.modoDeCalcular,               desc: d.modoDeCalcular },
                { titulo: t.restock,                      desc: d.restock },
                { titulo: t.qtdDeFrutaPlots,              desc: d.qtdDeFrutaPlots },
                { titulo: t.salvar,                       desc: d.salvar },
                { titulo: t.limparFrutas,                 desc: d.limparFrutas },
                { titulo: t.colunasDaTabela,              desc: d.colunasDaTabela },
                { titulo: t.frutaEstoque,                 desc: d.frutaEstoque },
                { titulo: t.custoDaSemente,               desc: d.custoDaSemente },
                { titulo: t.mediaPorColetaTempoDaFruta,   desc: d.mediaPorColetaTempoDaFruta },
                { titulo: t.inserirSementesSalvar,        desc: d.inserirSementesSalvar },
                { titulo: t.sementesUsadasTotalDeFrutas,  desc: d.sementesUsadasTotalDeFrutas },
                { titulo: t.tempoTotal,                   desc: d.tempoTotalFrutas },
                { titulo: t.machadosUsadosMadeirasGanhas, desc: d.machadosUsadosMadeirasGanhas },
                { titulo: t.valorDeVendaDaFrutaNaBetty,   desc: d.valorDeVendaDaFrutaNaBetty },
                { titulo: t.valorNoMarketP2P,             desc: d.valorNoMarketP2PFrutas },
                { titulo: t.melhorOpcao,                  desc: d.melhorOpcao },
                { titulo: t.lucroTotalNaBetty,            desc: d.lucroTotalNaBettyFrutas },
                { titulo: t.lucroTotalNoMarket,           desc: d.lucroTotalNoMarketFrutas },
                { titulo: t.lucroPorHora,                 desc: d.lucroPorHora },
            ]
        },
        greenhouse: {
            titulo: t.tituloTabelaGH,
            colunas: [
                { titulo: t.informacaoPrimaria,         desc: d.informacaoPrimaria },
                { titulo: t.qtdDeGHPlots,               desc: d.qtdDeGHPlots },
                { titulo: t.modoDeCalcular,             desc: d.modoDeCalcular },
                { titulo: t.restock,                    desc: d.restock },
                { titulo: t.limparGH,                   desc: d.limparGH },
                { titulo: t.colunasDaTabela,            desc: d.colunasDaTabela },
                { titulo: t.cropEstoque,                desc: d.cropEstoque },
                { titulo: t.custoDaSemente,             desc: d.custoDaSemente },
                { titulo: t.mediaPorPlotTempoDaCrop,    desc: d.mediaPorPlotTempoDaCrop },
                { titulo: t.inserirSementesSalvar,      desc: d.inserirSementesSalvar },
                { titulo: t.sementesUsadasTotalDeCrops, desc: d.sementesUsadasTotalDeCrops },
                { titulo: t.tempoTotalGHOilGasto,       desc: d.tempoTotalGHOilGasto },
                { titulo: t.valorDeVendaDaBetty,        desc: d.valorDeVendaDaBetty },
                { titulo: t.valorNoMarketP2P,           desc: d.valorNoMarketP2P },
                { titulo: t.melhorOpcao,                desc: d.melhorOpcao },
                { titulo: t.lucroTotalNaBetty,          desc: d.lucroTotalNaBetty },
                { titulo: t.lucroTotalNoMarket,         desc: d.lucroTotalNoMarket },
                { titulo: t.lucroPorHora,               desc: d.lucroPorHora },
            ]
        }
    };
}

function abrirModalAjuda(tipo) {
    const dados = textoAjuda()[tipo];
    if (!dados) return;

    const overlay = document.createElement('div');
    overlay.className = 'modal-ajuda-overlay';
    overlay.id = 'modal-ajuda-overlay';

    overlay.innerHTML = `
        <div class="modal-ajuda-caixa">
            <button class="modal-ajuda-fechar" onclick="fecharModalAjuda()">✕</button>
            <div class="modal-ajuda-titulo">${dados.titulo}</div>
            <div class="modal-ajuda-lista">
                ${dados.colunas.map(col => `
                    <div class="modal-ajuda-item">
                        <span class="modal-ajuda-item-titulo">📌 ${col.titulo}</span>
                        <span class="modal-ajuda-item-desc">${col.desc}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) fecharModalAjuda();
    });

    document.body.appendChild(overlay);
}

function fecharModalAjuda() {
    const overlay = document.getElementById('modal-ajuda-overlay');
    if (overlay) overlay.remove();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModalAjuda();
});

function btnAjuda(tipo) {
    return `<button class="btn-ajuda-tabela" onclick="abrirModalAjuda('${tipo}')">
                <span class="icone-interrogacao">?</span> ${tituloAjuda[idioma].comoFunciona}
            </button>`;
}

// Chame essa função dentro da sua função de troca de idioma existente
function atualizarBotõesAjuda() {
    document.querySelectorAll('.btn-ajuda-tabela').forEach(btn => {
        const span = btn.querySelector('.icone-interrogacao');
        span.nextSibling.textContent = ' ' + tituloAjuda[idioma].comoFunciona;
    });
}