const mostrarResultadoMinerios = document.getElementById('saida-dos-minerios');

const idiomaTabelaMinerios = {
    portugues: {
        //titulo tabela
        ferramenta: 'Ferramenta',
        estoque: 'Estoque',
        recursoObtido: 'Recurso Obtido',
        mediaPorNode: 'Média por node',
        tempoDeRessurgimento: 'Tempo de<br>Ressurgimento',
        calculoPorFerramenta: 'Qtd. que vai minerar',
        calculoPorRodada: 'Rodadas que vai minerar',
        calculoPorHora: 'Horas que vai minerar',
        tempoTotal: 'Tempo Total',
        mediaDeCliclos: 'Média de<br>Ciclos',
        botaoSalvar: 'Salvar',
        ferramentasUsadas: 'Ferramentas Usadas',
        gastoTotal: 'Gasto Total',
        qtdDeRecursosAdquirida: 'Qtd. Adquirida',
        custoPorUnidade: 'Custo por uni.',
        valorDeVendaMarket: 'Valor de Venda <br> Market P2P',
        qtdRestanteParaVenda: 'Qtd Restante<br>para Venda',
        lucroNoMarket: 'Lucro no Market P2P<br>Taxa',

        //cards tabela
        mediaDeRecursosGastos: 'Média de Recursos Gastos',
        custoDosRecursos: 'Custo dos Recursos<br>Convertidos em Flower',
        mediaDeRestockECusto: 'Média de Restock<br>Custo do Restock',
        mediaDeLucroNoDia: 'Média de Lucro no Dia',
        mediaDeLucroSemanal: 'Média de Lucro Semanal'
    },
    ingles: {
        //titulo tabela
        ferramenta: 'Tool',
        estoque: 'Stock',
        recursoObtido: 'Resource Obtained',
        mediaPorNode: 'Average per node',
        tempoDeRessurgimento: 'Respawn<br>Time',
        calculoPorFerramenta: 'Amount you will mine',
        calculoPorRodada: 'Rounds you will mine',
        calculoPorHora: 'Hours you will mine',
        tempoTotal: 'Total Time',
        mediaDeCliclos: 'Average<br>Cycle',
        botaoSalvar: 'Save',
        ferramentasUsadas: 'Tools Used',
        gastoTotal: 'Total Cost',
        qtdDeRecursosAdquirida: 'Quantity Acquired',
        custoPorUnidade: 'Cost per unit',
        valorDeVendaMarket: 'Selling Price<br>P2P Market',
        qtdRestanteParaVenda: 'Remaining Quantity<br>for Sale',
        lucroNoMarket: 'Profit on P2P Market<br>Fee',

        //cards tabela
        mediaDeRecursosGastos: 'Average Resources Spent',
        custoDosRecursos: 'Cost of the Resources<br>Converted into Flower',
        mediaDeRestockECusto: 'Average Restock<br>Restock Cost',
        mediaDeLucroNoDia: 'Average Profit per Day',
        mediaDeLucroSemanal: 'Weekly Average Profit'
    },
    espanhol: {
        //titulo tabela
        ferramenta: 'Herramienta',
        estoque: 'Inventario',
        recursoObtido: 'Recurso Obtenido',
        mediaPorNode: 'Promedio por nodo',
        tempoDeRessurgimento: 'Tiempo de<br>Reaparición',
        calculoPorFerramenta: 'Cantidad que minarás',
        calculoPorRodada: 'Rondas que minarás',
        calculoPorHora: 'Horas que minarás',
        tempoTotal: 'Tiempo Total',
        mediaDeCliclos: 'Promedio<br>Ciclo',
        botaoSalvar: 'Guardar',
        ferramentasUsadas: 'Herramientas Usadas',
        gastoTotal: 'Costo Total',
        qtdDeRecursosAdquirida: 'Cantidad Adquirida',
        custoPorUnidade: 'Costo por unidad',
        valorDeVendaMarket: 'Precio de Venta<br>Mercado P2P',
        qtdRestanteParaVenda: 'Cantidad Restante<br>para Vender',
        lucroNoMarket: 'Ganancia en el Mercado P2P<br>Tarifa',

        //cards tabela
        mediaDeRecursosGastos: 'Promedio de Recursos Gastados',
        custoDosRecursos: 'Costo de los Recursos<br>Convertidos en Flower',
        mediaDeRestockECusto: 'Promedio de Reabastecimiento<br>Costo de Reabastecimiento',
        mediaDeLucroNoDia: 'Ganancia Promedio por Día',
        mediaDeLucroSemanal: 'Ganancia Promedio Semanal'
    },
    chines: {
        //titulo tabela
        ferramenta: '工具',
        estoque: '库存',
        recursoObtido: '获得的资源',
        mediaPorNode: '每个节点的平均值',
        tempoDeRessurgimento: '刷新时间<br>',
        calculoPorFerramenta: '你将开采的数量',
        calculoPorRodada: '你将开采的轮数',
        calculoPorHora: '你将开采的小时数',
        tempoTotal: '总时间',
        mediaDeCliclos: '平均<br>周期',
        botaoSalvar: '保存',
        ferramentasUsadas: '使用的工具',
        gastoTotal: '总成本',
        qtdDeRecursosAdquirida: '获得的数量',
        custoPorUnidade: '每单位成本',
        valorDeVendaMarket: '销售价格<br>P2P 市场',
        qtdRestanteParaVenda: '剩余可出售数量',
        lucroNoMarket: 'P2P 市场利润<br>（含手续费）',

        //cards tabela
        mediaDeRecursosGastos: '消耗资源平均值',
        custoDosRecursos: '转换为 Flower 的资源成本',
        mediaDeRestockECusto: '补给平均值<br>补给成本',
        mediaDeLucroNoDia: '每日平均利润',
        mediaDeLucroSemanal: '每周平均利润'
    }

}

function tabelaMinerios() {
    mostrarResultadoMinerios.innerHTML = '';

    let idiomaDoTextoMinerais = idiomaTabelaMinerios[idioma];

    //texto para colocar se a pessoa qrer ver o calculo por ciclo ou por semente
    let textoDeComoVaiMinerar = idiomaDoTextoMinerais.calculoPorFerramenta;
    let textoDoTituloTempoOuRodadas = idiomaDoTextoMinerais.tempoTotal;

    if (document.getElementById('tipo-de-calculo-mineral').value === 'manual') {
        textoDeComoVaiMinerar = idiomaDoTextoMinerais.calculoPorFerramenta;
        textoDoTituloTempoOuRodadas = idiomaDoTextoMinerais.tempoTotal;

    } else if (document.getElementById('tipo-de-calculo-mineral').value === 'rodada') {
        textoDeComoVaiMinerar = idiomaDoTextoMinerais.calculoPorRodada;
        textoDoTituloTempoOuRodadas = idiomaDoTextoMinerais.tempoTotal;

    } else if (document.getElementById('tipo-de-calculo-mineral').value === 'hora') {
        textoDeComoVaiMinerar = idiomaDoTextoMinerais.calculoPorHora;
        textoDoTituloTempoOuRodadas = idiomaDoTextoMinerais.mediaDeCliclos;
    }
    
    let tabelaTituloMinerios = `
        <tr>   
            <th>${idiomaDoTextoMinerais.ferramenta}<br>${idiomaDoTextoMinerais.estoque}</th>
            <th>${idiomaDoTextoMinerais.recursoObtido}<br>${idiomaDoTextoMinerais.mediaPorNode}</th>
            <th>${idiomaDoTextoMinerais.tempoDeRessurgimento}</th>
            <th>${textoDeComoVaiMinerar} <br><button onclick="ferramentasUsadas()">${idiomaDoTextoMinerais.botaoSalvar}</button></th>
            <th>${textoDoTituloTempoOuRodadas}</th>
            <th>${idiomaDoTextoMinerais.ferramentasUsadas}<br>${idiomaDoTextoMinerais.gastoTotal}</th>
            <th>${idiomaDoTextoMinerais.qtdDeRecursosAdquirida}<br>${idiomaDoTextoMinerais.custoPorUnidade}</th>
            <th>${idiomaDoTextoMinerais.valorDeVendaMarket}</th>
            <th>${idiomaDoTextoMinerais.qtdRestanteParaVenda}</th>
            <th>${idiomaDoTextoMinerais.lucroNoMarket}: ${(taxa * 100).toFixed(2)}%</th>
        </tr>`

    // tabela principal continua igual
    let tabelaMinerios = `
    <table class="tabela-minerios">
            <thead>
                ${tabelaTituloMinerios}
            </thead>
        <tbody>
    `;


    let restockDoCombo = 0;
    let ganhoDoCombo = 0;

    ferramentas.forEach(ferramenta => {

        //variaveis para mostrar dados dos recursos que a ferramenta faz! Vai mudar!
        let recurso = mapaDeMinerals[ferramenta.recursoObtido].id;
        let nomeDoRecurso = mapaDeMinerals[ferramenta.recursoObtido].name;
        let tempoDeRessurgimento = mapaDeMinerals[ferramenta.recursoObtido].tempoFinal;
        let qtdPorNode = mapaDeMinerals[ferramenta.recursoObtido].mediaPorNode;
        let valorDoRecurso = mapaDeMinerals[ferramenta.recursoObtido].valorDoMarket;
        let tempoTotal = mapaDeMinerals[ferramenta.recursoObtido].tempoTotal;
        let qtdRecursoFarmado = mapaDeMinerals[ferramenta.recursoObtido].totalDoRecurso;
        let valorMedioPorRecurso = mapaDeMinerals[ferramenta.recursoObtido].mediaDeCustoFlower;
        let qtdRecursoGasto = mapaDeMinerals[ferramenta.recursoObtido][`${ferramenta.recursoObtido}Gastas`];
        let recursoRestante = (qtdRecursoFarmado - qtdRecursoGasto) || 0;
        let lucroNoMarket = recursoRestante > 0 ? (recursoRestante * valorDoRecurso) * (1 - taxa) : recursoRestante * valorDoRecurso;

        let tempoOuRodadas; //Caso a pessoa preencha os dados por hora, vai mostrar quantas radadas fara nesse tempo, caso contrario mostrará quantas horas será gasta!
        if (textoDeComoVaiMinerar === idiomaDoTextoMinerais.calculoPorHora) {
            tempoOuRodadas = `<img src="./icones/ciclo.png" class="crop-img">${Number(tempoTotal.toFixed(2)) || 0}`;
        } else {
            tempoOuRodadas = `<img src="./icones/tempo.png" class="crop-img">${formatarTempo(tempoTotal || 0)}`;
        }

        //variaveis das ferramentas
        let ferramentasUsadas = Number(ferramenta.quantidade.toFixed(2)) || '';
        let ferramentaCustoEmCoins = ferramenta.custoEmCoins * ferramentasUsadas;
        let ferramentaCustoEmFlower = ferramentaCustoEmCoins / flowerEmCoins;
        
        let qtdDeRestock = ferramentasUsadas / ferramenta.estoqueFinal;
        ganhoDoCombo += lucroNoMarket;

        tabelaMinerios += `
        <tr>
            <td><img src="./minerais/${ferramenta.id}.png" class="crop-img">${ferramenta.name} <br> <img src="./icones/reestock.png" class="crop-img">${ferramenta.estoqueFinal}</td>
            <td><img src="./minerais/${recurso}.png" class="crop-img">${nomeDoRecurso}<br>${qtdPorNode.toFixed(3)}</td>
            <td><img src="./icones/tempo.png" class="crop-img">${formatarTempo(tempoDeRessurgimento)}</td>
            <td><input type="number" placeholder="" data-name="${ferramenta.id}" class="quantidade-input minerios-input" value="${ferramenta.qtdUsada}"></td>
            <td>${tempoOuRodadas}</td>
            <td><img src="./minerais/${ferramenta.id}.png" class="crop-img">${ferramentasUsadas}<br><img src="./icones/flower.png" class="crop-img">${ferramentaCustoEmFlower.toFixed(4)}</td>
            <td><img src="./minerais/${recurso}.png" class="crop-img">${Number(qtdRecursoFarmado.toFixed(2)) || ''}<br><img src="./icones/flower.png" class="crop-img">${(valorMedioPorRecurso.toFixed(4) || '')}</td>
            <td><img src="./minerais/${recurso}.png" class="crop-img"><br><img src="./icones/flower.png" class="crop-img">${valorDoRecurso.toFixed(4)}</td>
            <td><img src="./minerais/${recurso}.png" class="crop-img">${recursoRestante.toFixed(2)}</td>
            <td><img src="./minerais/${recurso}.png" class="crop-img"><br><img src="./icones/flower.png" class="crop-img">${lucroNoMarket.toFixed(4)}</td>
        </tr>
        `;

        if (qtdDeRestock > restockDoCombo) restockDoCombo = qtdDeRestock;

    });
    tabelaMinerios += `</tbody></table>`;

    //=====================================================================================================================================================================


    let tabelaTitulosFerramentas2 = `
        <tr>   
            <th>${idiomaDoTextoMinerais.ferramenta}<br>${idiomaDoTextoMinerais.estoque}</th>
            <th>${idiomaDoTextoMinerais.calculoPorFerramenta} <br><button onclick="ferramentasUsadas()">${idiomaDoTextoMinerais.botaoSalvar}</button></th>
            <th>${idiomaDoTextoMinerais.ferramentasUsadas}<br>${idiomaDoTextoMinerais.gastoTotal}</th>
        </tr>`
    
    let tabelaFerramentas2 = `
    <table class="tabela-minerios-secundaria">
            <thead>
                ${tabelaTitulosFerramentas2}
            </thead>
        <tbody>
    `;

    ferramentasSecundarias.forEach(ferramenta => { 

        //variaveis das ferramentas
        let ferramentasUsadas = Number(ferramenta.quantidade) || '';
        let ferramentaCustoEmCoins = ferramenta.custoEmCoins * ferramentasUsadas;
        let ferramentaCustoEmFlower = ferramentaCustoEmCoins / flowerEmCoins;

        let qtdDeRestock = ferramentasUsadas / ferramenta.estoqueFinal;

        tabelaFerramentas2 += `
        <tr>
            <td><img src="./minerais/${ferramenta.id}.png" class="crop-img">${ferramenta.name} <br> <img src="./icones/reestock.png" class="crop-img">${ferramenta.estoqueFinal}</td>
            <td><input type="number" placeholder="" data-name="${ferramenta.id}" class="quantidade-input minerios-input" value="${ferramenta.qtdUsada}"></td>
            <td><img src="./minerais/${ferramenta.id}.png" class="crop-img">${ferramentasUsadas}<br><img src="./icones/flower.png" class="crop-img">${ferramentaCustoEmFlower.toFixed(4)}</td>
        </tr>
        `;

        if (qtdDeRestock > restockDoCombo) restockDoCombo = qtdDeRestock;
    });

    //=====================================================================================================================================================================

    let gemsGastasComRestock = restockDoCombo * 10;
    let custoRestockDoComboFlower = Number(gemsGastasComRestock * precoDaGemEmFlower);
    let custoRestockDoComboDolar = Number(gemsGastasComRestock * precoPorGem);

    //mostrar minerais gastos ao criar ferramentas!
    let coinsGasta = Number(mapaDeMinerals.coinsGastas) || 0;
    let madeiraGasta = Number(mapaDeMinerals['wood'].woodGastas) || 0;
    let pedraGasta = Number(mapaDeMinerals['stone'].stoneGastas) || 0;
    let ferroGasto = Number(mapaDeMinerals['iron'].ironGastas) || 0;
    let ouroGasto = Number(mapaDeMinerals['gold'].goldGastas) || 0;
    let crimGasta = Number(mapaDeMinerals['crimstone'].crimstoneGastas) || 0;
    let oilGasto = Number(mapaDeMinerals['oil'].oilGastas) || 0;
    let couroGasto = Number(mapaDeMinerals.leatherGastas) || 0;
    let woolGasta = Number(mapaDeMinerals.woolGastas) || 0;

    let custoMedioEmFlower = (coinsGasta / flowerEmCoins) + 
        (madeiraGasta * mapaDeMinerals['wood'].mediaDeCustoFlower) +
        (pedraGasta * mapaDeMinerals['stone'].mediaDeCustoFlower) +
        (ferroGasto * mapaDeMinerals['iron'].mediaDeCustoFlower) +
        (ouroGasto * mapaDeMinerals['gold'].mediaDeCustoFlower) +
        (crimGasta * mapaDeMinerals['crimstone'].mediaDeCustoFlower) +
        (oilGasto * mapaDeMinerals['oil'].mediaDeCustoFlower) +
        (couroGasto * mapaDosValoresDoMarket['leather'].valor) +
        (woolGasta * mapaDosValoresDoMarket['wool'].valor);

    //como ja é vendido só os recursos que sobram ao fazer as outras ferramentas, eu só desconto esses 3 abaixo que seria "valor do Market"
    let lucroDoCombo = ganhoDoCombo - custoRestockDoComboFlower -
        ((coinsGasta / flowerEmCoins) + (couroGasto * mapaDosValoresDoMarket['leather'].valor) + (woolGasta * mapaDosValoresDoMarket['wool'].valor));


    let cardResultados = `
        <div class="cards-totais-minerais">

            <div class="card-total-mineral">
                <h3>${idiomaDoTextoMinerais.mediaDeRecursosGastos}</h3>
                <p>
                    <img src="./icones/coins.png" class="crop-img">${coinsGasta.toFixed(2)} |
                    <img src="./minerais/wood.png" class="crop-img">${madeiraGasta.toFixed(2)} | 
                    <img src="./minerais/stone.png" class="crop-img">${pedraGasta.toFixed(2)}<br>
                    <img src="./minerais/iron.png" class="crop-img">${ferroGasto.toFixed(2)} |
                    <img src="./minerais/gold.png" class="crop-img">${ouroGasto.toFixed(2)} | 
                    <img src="./minerais/crimstone.png" class="crop-img">${crimGasta.toFixed(2)}<br>
                    <img src="./minerais/oil.png" class="crop-img">${oilGasto.toFixed(2)} | 
                    <img src="./animais/leather.png" class="crop-img">${couroGasto.toFixed(2)} | 
                    <img src="./animais/wool.png" class="crop-img">${woolGasta.toFixed(2)}<br>
                </p>
            </div>

            <div class="card-total-mineral">
                <h3>${idiomaDoTextoMinerais.custoDosRecursos}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${custoMedioEmFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img"> ${(custoMedioEmFlower * precoDoFlower).toFixed(2)}
                </p>
            </div>
            
            <div class="card-total-mineral">
                <h3>${idiomaDoTextoMinerais.mediaDeRestockECusto}</h3>
                <p>
                    <img src="./icones/reestock.png" class="crop-img">${restockDoCombo.toFixed(2)} ➜ 
                    <img src="./icones/gem.png" class="crop-img">${gemsGastasComRestock.toFixed(2)}<br>
                    <img src="./icones/flower.png" class="crop-img"> ${custoRestockDoComboFlower.toFixed(2)} ~
                    <img src="./icones/usdc.png" class="crop-img"> ${custoRestockDoComboDolar.toFixed(2)}
                </p>
            </div>

            <div class="card-total-mineral">
                <h3>${idiomaDoTextoMinerais.mediaDeLucroNoDia}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoCombo.toFixed(2)} ~
                    <img src="./icones/usdc.png" class="crop-img">${(lucroDoCombo * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <h1>➜</h1> 
            
            <div class="card-total-mineral">
                <h3>${idiomaDoTextoMinerais.mediaDeLucroSemanal}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${(lucroDoCombo * 7).toFixed(2)} ~
                    <img src="./icones/usdc.png" class="crop-img">${((lucroDoCombo * precoDoFlower) * 7).toFixed(2)}
                </p>
            </div>
            
        </div>
        `;

    // renderiza tudo
    mostrarResultadoMinerios.innerHTML = `
        <div class="tabelas-em-ordem">
            ${cardResultados}
            ${tabelaMinerios}
            ${tabelaFerramentas2}
        </div>
    `;
};