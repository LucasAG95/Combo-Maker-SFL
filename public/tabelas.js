const mostrarResultadoCrops = document.getElementById('saida-das-crops');

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
            <td><input type="number" placeholder="" data-name="${crop.name}" class="quantidade-input" value="${crop.seedsPlantadas}"></td>
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
    let lucroDoComboEm24h = ((vinteQuatroHoras / tempoTotalDoCombo) * lucroTotalDoComboFlower) - mediaCustoRestock24hFlower || 0;
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
        <div class="cards-totais">

            <div class="card-total">
                <h3><img src="./icones/tempo.png" class="crop-img">${idiomaCardTempoTotal}</h3>
                <p>${formatarTempoTotalDoDia(tempoTotalDoCombo)}</p>
            </div>
            <h1>-</h1> 
            <div class="card-total">
                <h3>${idiomaCardQtdRestock}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${restockDoCombo.toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${gemsGastasComRestock.toFixed(2)}</p>
            </div>

            <div class="card-total">
                <h3>${idiomaCardCustoRestock}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${custoRestockDoComboFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${custoRestockDoComboDolar.toFixed(2)}
                </p>
            </div>

            <div class="card-total">
                <h3>${idiomaCardLucroDoCombo}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroTotalDoComboFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${Number(lucroTotalDoComboFlower * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1> 
            <div class="card-total">
                <h3>${idiomaCardQtdRestock24h}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${mediaRestock24h.toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${mediaGemsGastasRestock24h.toFixed(2)}</p>
            </div>

            <div class="card-total">
                <h3>${idiomaCardCustoRestock24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${mediaCustoRestock24hFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${mediaCustoRestock24hDolar.toFixed(2)}
                </p>
            </div>

            <div class="card-total">
                <h3>${idiomaCardLucroEm24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoComboEm24h.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${Number(lucroDoComboEm24h * precoDoFlower).toFixed(2)}    
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total">
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