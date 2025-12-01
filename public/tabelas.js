const mostrarResultadoCrops = document.getElementById('saida-das-crops');
const mostrarResultadoMinerios = document.getElementById('saida-dos-minerios');

function tabelaDeCrops() {
    mostrarResultadoCrops.innerHTML = '';

    //texto para colocar se a pessoa qrer ver o calculo por ciclo ou por semente
    let textoPlantarSementesPT = 'Sementes que vai Plantar';
    let textoPlantarSementesEN = 'Number of Seeds You Will Plant';
    if (document.getElementById('tipo-de-calculo-crop').value === 'manual') {
        textoPlantarSementesPT = 'Sementes que vai Plantar';
        textoPlantarSementesEN = 'Number of Seeds You Will Plant';
    } else if (document.getElementById('tipo-de-calculo-crop').value === 'rodada') {
        textoPlantarSementesPT = 'Qtd. Ciclos que vai Plantar';
        textoPlantarSementesEN = 'Number of Cycles You Will Plant';
    }

    //idioma da tabelas
    let tabelaPortugues = `
        <tr>
            <th>Crop<br>Estoque</th>
            <th>Custo da Semente<br>Venda da Crop</th>
            <th>Média por Plot<br>Tempo da Crop</th>
            <th>${textoPlantarSementesPT} <br><button onclick="sementesPlantadas()">Salvar</button></th>
            <th>Tempo Total</th>
            <th>Sementes Usadas<br>Total de Crops</th>      
            <th>Lucro<br>em Coins</th>
            <th>Valor de Venda <br> Market P2P</th>
            <th>Lucro no Market P2P<br>Taxa: ${(taxa * 100).toFixed(2)}%</th>
        </tr>`
    let tabelaIngles =  `
        <tr>   
            <th>Crop<br>Stock</th>
            <th>Seed Cost<br>Crop Sale</th>
            <th>Average per Plot<br>Crop Time</th>
            <th>${textoPlantarSementesEN} <br><button onclick="sementesPlantadas()">Save</button></th>
            <th>Total Time</th>
            <th>Seeds Used<br>Total Crops</th>      
            <th>Profit<br>in Coins</th>
            <th>Sale Value <br> Market P2P</th>
            <th>Profit on Market P2P<br>Fee: ${(taxa * 100).toFixed(2)}%</th>
        </tr>`
    
    //selecionando a tabela que vai usar!
    let tabelaCropEscolhida = tabelaPortugues;
    if (idioma === 'portugues') {
        tabelaCropEscolhida = tabelaPortugues;
    } else if (idioma === 'ingles') {
        tabelaCropEscolhida = tabelaIngles;
    };

    // tabela principal continua igual
    let tabelaCrops = `
    <table class="tabela-crops">
            <thead>
                ${tabelaCropEscolhida}
            </thead>
        <tbody>
    `;

    //acumuladores para mostrar resultado total!
    let tempoTotalDoCombo = 0;
    let lucroTotalDoComboCoins = 0;
    let lucroTotalDoComboFlower = 0;
    let restockDoCombo = 0;

    crops.forEach(crop => {
        if (!crop.estacao.includes(estacao)) return;

        //quantidade
        let sementesUsadas = Number(crop.qtdSementeUsadas) || Number(0);
        let qtdPorPlot = Number(crop.quantidade);
        let qtdTotal = Number(crop.colheitaTotal) || Number(0);

        //tempo
        let tempoDaCrop = Number(crop.tempoFinal);
        let tempoTotalDaCrop = Number(crop.tempoTotal) || Number(0);

        //coins individual
        let custoPorSemente = Number(crop.custoPorSemente) < 0.1 ? Number(crop.custoPorSemente).toFixed(3) : Number(crop.custoPorSemente).toFixed(2);;
        let vendaPorCrop = Number(crop.vendaPorCrop) < 0.1 ? Number(crop.vendaPorCrop).toFixed(3) : Number(crop.vendaPorCrop).toFixed(2);
        //coins calculos para resultado final
        let custoTotal = Number(sementesUsadas * custoPorSemente);
        let vendaTotal = Number(vendaPorCrop * qtdTotal);
        let lucroCoins = vendaTotal - custoTotal;

        //Resultado em Flower
        let valorPorCropEmFlower = Number(crop.valorDoMarket);
        let GastoComSementeEmFlower = Number(((1 / flowerEmCoins) * custoPorSemente) * sementesUsadas);
        let lucroFlower = crop.seedsPlantadas == 0 || ilha === 'Basic' ? 0 : Number((valorPorCropEmFlower * qtdTotal) * (1 - taxa) - GastoComSementeEmFlower);
        
        //estoque
        let estoque = Number(crop.estoqueTotal);
        let qtdDeRestock = (sementesUsadas / estoque);

        tabelaCrops += `
        <tr>
            <td><img src="./crops/${crop.name}.png" class="crop-img">${crop.name} <br> <img src="./icones/reestock.png" class="crop-img">${estoque}</td>
            <td><img src="./icones/coins.png" class="crop-img">${custoPorSemente}<br><img src="./icones/coins.png" class="crop-img">${vendaPorCrop}</td>
            <td><img src="./crops/${crop.name}.png" class="crop-img">${qtdPorPlot.toFixed(2)}<br><img src="./icones/tempo.png" class="crop-img">${formatarTempo(tempoDaCrop)}</td>
            <td><input type="number" placeholder="" data-name="${crop.name}" class="quantidade-input sementes-input" value="${crop.seedsPlantadas}"></td>
            <td><img src="./icones/tempo.png" class="crop-img">${formatarTempo(tempoTotalDaCrop)}</td>
            <td><img src="./crops/seed${crop.name}.png" class="crop-img">${sementesUsadas}<br><img src="./crops/${crop.name}.png" class="crop-img">${qtdTotal.toFixed(2)}</td>
            <td><img src="./icones/coins.png" class="crop-img">${lucroCoins.toFixed(2)}</td>
            <td><img src="./crops/${crop.name}.png" class="crop-img"><br><img src="./icones/flower.png" class="crop-img">${valorPorCropEmFlower.toFixed(5)}</td>
            <td><img src="./crops/${crop.name}.png" class="crop-img"><br><img src="./icones/flower.png" class="crop-img">${lucroFlower.toFixed(5)}</td>
        </tr>
        `;

        //somando os acumuladores - resultados que vao aparecer no card
        tempoTotalDoCombo += tempoTotalDaCrop;
        lucroTotalDoComboCoins += lucroCoins;
        lucroTotalDoComboFlower += lucroFlower;
        if (qtdDeRestock > restockDoCombo) restockDoCombo = qtdDeRestock;

    });
    tabelaCrops += `</tbody></table>`;

    //=====================================================================================================================================================================
    
    //ver o gasto com restock, cada restock de semente é 15 gems
    let gemsGastasComRestock = restockDoCombo * 15;

    //calculo dos valores de restock do combo montado e seu desconto no lucro
    let custoRestockDoComboFlower = Number(gemsGastasComRestock * precoDaGemEmFlower);
    let custoRestockDoComboDolar = Number(gemsGastasComRestock * precoPorGem);
    lucroTotalDoComboFlower -= custoRestockDoComboFlower;

    //média em de restock e seu custo em 24h e desconto no lucro medio em 24h
    let mediaRestock24h = (vinteQuatroHoras / tempoTotalDoCombo) * restockDoCombo || 0;
    let mediaGemsGastasRestock24h = mediaRestock24h * 15;
    let mediaCustoRestock24hFlower = Number(mediaGemsGastasRestock24h * precoDaGemEmFlower);
    let mediaCustoRestock24hDolar = Number(mediaGemsGastasRestock24h * precoPorGem)
    let lucroDoComboEm24h = ((vinteQuatroHoras / tempoTotalDoCombo) * lucroTotalDoComboFlower);
    let lucroDoComboSemanal = lucroDoComboEm24h * 7;
    
    //idioma dos Cards
    let idiomaCardTempoTotal = idioma === 'portugues' ? 'Tempo Total' : 'Total Time';
    let idiomaCardQtdRestock = idioma === 'portugues' ? 'Média de Restock' : 'Average Restock';
    let idiomaCardCustoRestock = idioma === 'portugues' ? 'Gasto com Restocks' : 'Average Cost of Restocks';
    let idiomaCardLucroDoCombo = idioma === 'portugues' ? 'Lucro do Combo' : 'Combo Profit';
    let idiomaCardQtdRestock24h = idioma === 'portugues' ? 'Restock em 24h' : 'Average Restock in 24h';
    let idiomaCardCustoRestock24h = idioma === 'portugues' ? 'Custo em Restock (24h)' : 'Restock Cost (24h)';
    let idiomaCardLucroEm24h = idioma === 'portugues' ? 'Média de Lucro em 24h' : 'Average Profit in 24h';
    let idiomaCardLucroSemanal = idioma === 'portugues' ? 'Média de Lucro Semanal' : 'Weekly Average Profit';

    let cardResultados = `
        <div class="cards-totais-crops">

            <div class="card-total-crops">
                <h3><img src="./icones/tempo.png" class="crop-img">${idiomaCardTempoTotal}</h3>
                <p>${formatarTempoTotalDoDia(tempoTotalDoCombo)}</p>
            </div>
            <h1>-</h1> 
            <div class="card-total-crops">
                <h3>${idiomaCardQtdRestock}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${restockDoCombo.toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${gemsGastasComRestock.toFixed(2)}</p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaCardCustoRestock}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${custoRestockDoComboFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${custoRestockDoComboDolar.toFixed(2)}
                </p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaCardLucroDoCombo}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroTotalDoComboFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${Number(lucroTotalDoComboFlower * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1> 
            <div class="card-total-crops">
                <h3>${idiomaCardQtdRestock24h}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${mediaRestock24h.toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${mediaGemsGastasRestock24h.toFixed(2)}</p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaCardCustoRestock24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${mediaCustoRestock24hFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${mediaCustoRestock24hDolar.toFixed(2)}
                </p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaCardLucroEm24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoComboEm24h.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${Number(lucroDoComboEm24h * precoDoFlower).toFixed(2)}    
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaCardLucroSemanal}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoComboSemanal.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${Number(lucroDoComboSemanal * precoDoFlower).toFixed(2)}    
                </p>
            </div>

        </div>
        `;

    //=====================================================================================================================================================================

    // renderiza tudo
    mostrarResultadoCrops.innerHTML = `
        <div class="tabelas-em-ordem">
            ${cardResultados}
            ${tabelaCrops}
        </div>
    `;
};

//===========================================================================================================================================================================

function tabelaMinerios() {
    mostrarResultadoMinerios.innerHTML = '';

    //texto para colocar se a pessoa qrer ver o calculo por ciclo ou por semente
    
    let textoDeComoVaiMinerar = idioma === 'portugues' ? 'Qtd. que vai minerar' : 'Amount you will mine';
    let textoDoTituloTempoOuRodadas = idioma === 'portugues' ? 'Tempo Total' : 'Total Time';

    if (document.getElementById('tipo-de-calculo-mineral').value === 'manual') {
        textoDeComoVaiMinerar = idioma === 'portugues' ? 'Qtd. que vai minerar' : 'Amount you will mine';
        textoDoTituloTempoOuRodadas = idioma === 'portugues' ? 'Tempo Total' : 'Total Time';

    } else if (document.getElementById('tipo-de-calculo-mineral').value === 'rodada') {
        textoDeComoVaiMinerar = idioma === 'portugues' ? 'Rodadas que vai minerar' : 'Rounds you will mine';
        textoDoTituloTempoOuRodadas = idioma === 'portugues' ? 'Tempo Total' : 'Total Time';

    } else if (document.getElementById('tipo-de-calculo-mineral').value === 'hora') {
        textoDeComoVaiMinerar = idioma === 'portugues' ? 'Horas que vai minerar' : 'Hours you will mine';  
        textoDoTituloTempoOuRodadas = idioma === 'portugues' ? 'Média de<br>Ciclos' : 'Average<br>Cycles';    
    }

    //idioma da tabelas
    let tabMinePT = `
        <tr>
            <th>Ferramenta<br>Estoque</th>
            <th>Recurso Obtido<br>Média por node</th>
            <th>Tempo de<br>Ressurgimento</th>
            <th>${textoDeComoVaiMinerar} <br><button onclick="ferramentasUsadas()">Salvar</button></th>
            <th>${textoDoTituloTempoOuRodadas}</th>
            <th>Ferramentas Usadas<br>Gasto Total</th>      
            <th>Qtd. Adquirida<br>Custo por uni.</th>
            <th>Valor de Venda <br> Market P2P</th>
            <th>Qtd Restante<br>para Venda</th>
            <th>Lucro no Market P2P<br>Taxa: ${(taxa * 100).toFixed(2)}%</th>
        </tr>`
    let tabMineEN =  `
        <tr>   
            <th>Tool<br>Stock</th>
            <th>Resource Obtained<br>Average per node</th>
            <th>Respawn<br>Time</th>
            <th>${textoDeComoVaiMinerar} <br><button onclick="ferramentasUsadas()">Save</button></th>
            <th>${textoDoTituloTempoOuRodadas}</th>
            <th>Tools Used<br>Total Cost</th>
            <th>Quantity Acquired<br>Cost per unit</th>
            <th>Selling Price<br>P2P Market</th>
            <th>Remaining Quantity<br>for Sale</th>
            <th>Profit on P2P Market<br>Fee: ${(taxa * 100).toFixed(2)}%</th>
        </tr>`
    
    //selecionando a tabela que vai usar!
    let tabelaMinerioEscolhida = tabMinePT;
    if (idioma === 'portugues') {
        tabelaMinerioEscolhida = tabMinePT;
    } else if (idioma === 'ingles') {
        tabelaMinerioEscolhida = tabMineEN;
    };

    // tabela principal continua igual
    let tabelaMinerios = `
    <table class="tabela-minerios">
            <thead>
                ${tabelaMinerioEscolhida}
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
        if (textoDoTituloTempoOuRodadas === ('Média de<br>Ciclos' || 'Average<br>Cycles')) {
            tempoOuRodadas = `<img src="./icones/ciclo.png" class="crop-img">${Number(tempoTotal.toFixed(2)) || 0}`
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
    

    //idioma dos cards
    let mediaDeRecursosGastos = idioma === 'portugues' ? 'Média de Recursos Gastos' : 'Average Resources Spent';
    let custoDosRecursos = idioma === 'portugues' ? 'Custo dos Recursos<br>Convertidos em Flower' : 'Cost of the Resources<br>Converted into Flower';
    let mediaDeRestockECusto = idioma === 'portugues' ? 'Média de Restock<br>Custo do Restock' : 'Average Restock<br>Restock Cost';
    let mediaDeLucroNoDia = idioma === 'portugues' ? 'Média de Lucro no Dia' : 'Average Profit per Day';
    let mediaDeLucroSemanal = idioma === 'portugues' ? 'Média de Lucro Semanal' : 'Weekly Average Profit';

    let cardResultados = `
        <div class="cards-totais-minerais">

            <div class="card-total-mineral">
                <h3>${mediaDeRecursosGastos}</h3>
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
                <h3>${custoDosRecursos}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${custoMedioEmFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img"> ${(custoMedioEmFlower * precoDoFlower).toFixed(2)}
                </p>
            </div>
            
            <div class="card-total-mineral">
                <h3>${mediaDeRestockECusto}</h3>
                <p>
                    <img src="./icones/reestock.png" class="crop-img">${restockDoCombo.toFixed(2)} ➜ 
                    <img src="./icones/gem.png" class="crop-img">${gemsGastasComRestock.toFixed(2)}<br>
                    <img src="./icones/flower.png" class="crop-img"> ${custoRestockDoComboFlower.toFixed(2)} ~
                    <img src="./icones/usdc.png" class="crop-img"> ${custoRestockDoComboDolar.toFixed(2)}
                </p>
            </div>

            <div class="card-total-mineral">
                <h3>${mediaDeLucroNoDia}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoCombo.toFixed(2)} ~
                    <img src="./icones/usdc.png" class="crop-img">${(lucroDoCombo * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <h1>➜</h1> 
            
            <div class="card-total-mineral">
                <h3>${mediaDeLucroSemanal}</h3>
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
        </div>
    `;
}