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
        lucroPorRecurso: 'Lucro por<br>recurso',

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
        lucroPorRecurso: 'Profit per<br>resource',

        //cards tabela
        mediaDeRecursosGastos: 'Average Resources Spent',
        custoDosRecursos: 'Cost of the Resources<br>Converted into Flower',
        mediaDeRestockECusto: 'Average Restock<br>Restock Cost',
        mediaDeLucroNoDia: 'Average Profit per Day',
        mediaDeLucroSemanal: 'Weekly Average Profit'
    },
}

//variaveis para aparecer em resumo do combo!
let resultadoComboMinerais = 0;
let resultadoRestockDasFerramentas24h = 0;

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
            <th>${idiomaDoTextoMinerais.lucroPorRecurso}</th>
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
        let textoValorDoRecurso = valorDoRecurso === 0 ? 
            `` : `${sprite(recurso, 'minerais')}<br>${imgFlower} ${valorDoRecurso.toFixed(4)}`;

        let tempoTotal = mapaDeMinerals[ferramenta.recursoObtido].tempoTotal;
        let qtdRecursoFarmado = mapaDeMinerals[ferramenta.recursoObtido].totalDoRecurso;
        let valorMedioPorRecurso = mapaDeMinerals[ferramenta.recursoObtido].mediaDeCustoFlower;
        let qtdRecursoGasto = mapaDeMinerals[ferramenta.recursoObtido][`${ferramenta.recursoObtido}Gastas`];
        let recursoRestante = (qtdRecursoFarmado - qtdRecursoGasto) || 0;
        let textoRecursoRestante = valorDoRecurso === 0 ? 
            `` : `${sprite(recurso, 'minerais')} ${recursoRestante.toFixed(2)}`;

        let lucroNoMarket = recursoRestante > 0 ? (recursoRestante * valorDoRecurso) * (1 - taxa) : recursoRestante * valorDoRecurso;
        let textoLucroNoMarket = lucroNoMarket === 0 ? 
            `` : `${sprite(recurso, 'minerais')}<br>${imgFlower} ${lucroNoMarket.toFixed(4)}`;

        let lucroPorRecurso = ((valorDoRecurso - valorMedioPorRecurso) * (1 - taxa));
        let textoLucroPorRecurso = valorDoRecurso === 0 ? 
            ``: `${imgFlower} ${lucroPorRecurso.toFixed(4)}`

        let porcentagemPorRecurso = (((lucroPorRecurso * (1 - taxa)) / valorMedioPorRecurso) * 100);
        let textoPorcentagemPorRecurso = textoLucroPorRecurso === '' ? 
            `` : `${sprite(recurso, 'minerais')} ${porcentagemPorRecurso.toFixed(0)}%`;

        let tempoOuRodadas; //Caso a pessoa preencha os dados por hora, vai mostrar quantas radadas fara nesse tempo, caso contrario mostrará quantas horas será gasta!
        if (textoDeComoVaiMinerar === idiomaDoTextoMinerais.calculoPorHora) {
            tempoOuRodadas = `${imgCilo} ${Number(tempoTotal.toFixed(2)) || 0}`;
        } else {
            tempoOuRodadas = `${imgTempo} ${formatarTempo(tempoTotal || 0)}`;
        }

        //variaveis das ferramentas
        let ferramentasUsadas = Number(ferramenta.quantidade.toFixed(2)) || 0;
        let ferramentaCustoEmCoins = ferramenta.custoEmCoins * ferramentasUsadas;
        let ferramentaCustoEmFlower = ferramentaCustoEmCoins / flowerEmCoins;
        
        let qtdDeRestock = ferramentasUsadas / ferramenta.estoqueFinal;
        ganhoDoCombo += lucroNoMarket;

        //colocar imagens na tabela
        let imgFerramenta = sprite(ferramenta.id, 'minerais');
        let imgRecurso = sprite(recurso, 'minerais');

        tabelaMinerios += `
        <tr>
            <td>${imgFerramenta} ${ferramenta.name} <br> ${imgRestock} ${ferramenta.estoqueFinal}</td>
            <td>${imgRecurso} ${nomeDoRecurso}<br>${qtdPorNode.toFixed(3)}</td>
            <td>${imgTempo} ${formatarTempo(tempoDeRessurgimento)}</td>
            <td><input type="number" placeholder="" data-name="${ferramenta.id}" class="quantidade-input minerios-input" value="${ferramenta.qtdUsada}"></td>
            <td>${tempoOuRodadas}</td>
            <td>${imgFerramenta} ${ferramentasUsadas}<br>${imgFlower} ${ferramentaCustoEmFlower.toFixed(4)}</td>
            <td>${imgRecurso} ${Number(qtdRecursoFarmado.toFixed(2)) || ''}<br>${imgFlower} ${(valorMedioPorRecurso.toFixed(4) || '')}</td>
            <td>${textoValorDoRecurso}</td>
            <td>${textoPorcentagemPorRecurso}<br>${textoLucroPorRecurso}</td>
            <td>${textoRecursoRestante}</td>
            <td>${textoLucroNoMarket}</td>
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
        let ferramentasUsadas = Number(ferramenta.quantidade) || 0;
        let ferramentaCustoEmCoins = ferramenta.custoEmCoins * ferramentasUsadas;
        let ferramentaCustoEmFlower = ferramentaCustoEmCoins / flowerEmCoins;

        let qtdDeRestock = ferramentasUsadas / ferramenta.estoqueFinal;

        //colocar imagens na tabela
        let imgFerramenta = sprite(ferramenta.id, 'minerais');

        tabelaFerramentas2 += `
        <tr>
            <td>${imgFerramenta} ${ferramenta.name} <br> ${imgRestock} ${ferramenta.estoqueFinal}</td>
            <td><input type="number" placeholder="" data-name="${ferramenta.id}" class="quantidade-input minerios-input" value="${ferramenta.qtdUsada}"></td>
            <td>${imgFerramenta} ${ferramentasUsadas}<br>${imgFlower} ${ferramentaCustoEmFlower.toFixed(4)}</td>
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
    let lucroDoCombo = calcularRestockMinerios === 'sim' ? 
        ganhoDoCombo - custoRestockDoComboFlower - ((coinsGasta / flowerEmCoins) + (couroGasto * mapaDosValoresDoMarket['leather'].valor) + (woolGasta * mapaDosValoresDoMarket['wool'].valor)) :
        ganhoDoCombo - ((coinsGasta / flowerEmCoins) + (couroGasto * mapaDosValoresDoMarket['leather'].valor) + (woolGasta * mapaDosValoresDoMarket['wool'].valor))
    
    //textos para os cards de restock
    let cardRestockECusto = calcularRestockMinerios === 'sim' ?
        `<div class="card-total-mineral">
            <h3>${idiomaDoTextoMinerais.mediaDeRestockECusto}</h3>
            <p>
                ${imgRestock} ${restockDoCombo.toFixed(2)} ➜ 
                ${imgGem} ${gemsGastasComRestock.toFixed(2)}<br>
                ${imgFlower} ${custoRestockDoComboFlower.toFixed(2)} ~
                ${imgUsdc} ${custoRestockDoComboDolar.toFixed(2)}
            </p>
        </div>` : '';


    let cardResultados = `
        <div class="cards-totais-minerais">

            <div class="card-total-mineral">
                <h3>${idiomaDoTextoMinerais.mediaDeRecursosGastos}</h3>
                <p>
                    ${imgCoins} ${coinsGasta.toFixed(2)} |
                    ${imgMadeira} ${madeiraGasta.toFixed(2)} | 
                    ${imgPedra} ${pedraGasta.toFixed(2)} |
                    ${imgFerro} ${ferroGasto.toFixed(2)} <br>
                    ${imgOuro} ${ouroGasto.toFixed(2)} |
                    ${imgCrim} ${crimGasta.toFixed(2)} |
                    ${imgOil} ${oilGasto.toFixed(2)} | 
                    ${imgCouro} ${couroGasto.toFixed(2)} | 
                    ${imgLa} ${woolGasta.toFixed(2)}
                </p>
            </div>
            
            ${cardRestockECusto}

            <div class="card-total-mineral">
                <h3>${idiomaDoTextoMinerais.mediaDeLucroNoDia}</h3>
                <p>
                    ${imgFlower} ${lucroDoCombo.toFixed(2)} ~
                    ${imgUsdc} ${(lucroDoCombo * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <h1>➜</h1> 
            
            <div class="card-total-mineral">
                <h3>${idiomaDoTextoMinerais.mediaDeLucroSemanal}</h3>
                <p>
                    ${imgFlower} ${(lucroDoCombo * 7).toFixed(2)} ~
                    ${imgUsdc} ${((lucroDoCombo * precoDoFlower) * 7).toFixed(2)}
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

    //isso é para colocar valor na variavel que vai na função de lucro total do combo
    resultadoComboMinerais = ganhoDoCombo - ((coinsGasta / flowerEmCoins) + (couroGasto * mapaDosValoresDoMarket['leather'].valor) + (woolGasta * mapaDosValoresDoMarket['wool'].valor));
    resultadoRestockDasFerramentas24h = restockDoCombo;

    cardResultadoTotalDosCombosJuntos();
};