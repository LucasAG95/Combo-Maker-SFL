const mostrarResultadoCrops = document.getElementById('saida-das-crops');
const mostrarResultadoCropMachine = document.getElementById('saida-das-crops-cm');

const idiomaTabelaCrops = {
    portugues: {
        //titulo tabela
        crop: 'Crops',
        estoque: 'Estoque',
        custoDaSemente: 'Custo da Semente',
        vendaDaCrop: 'Venda da Crop',
        mediaPorPlot: 'Média por Plot',
        tempoDaCrop: 'Tempo da Crop',
        calculoPorSemente: 'Sementes que vai Plantar',
        calculoPorCiclo: 'Qtd. Ciclos que vai Plantar',
        botaoSalvar: 'Salvar',
        tempoTotal: 'Tempo Total',
        sementesUsadas: 'Sementes Usadas',
        totalDeCrops: 'Total de Crops',
        lucroEmCoins: 'Lucro em Coins',
        valorDeVendaNoMarket: 'Valor de Venda <br> Market P2P',
        lucroVendendoNoMarket: 'Lucro no Market P2P<br>Taxa',

        //cards da tabela
        cardTempoTotal: 'Tempo Total',
        cardQtdRestock: 'Média de Restock',
        cardCustoRestock: 'Gasto com Restocks',
        cardLucroDoCombo: 'Lucro do Combo',
        cardQtdRestock24h: 'Restock em 24h',
        cardCustoRestock24h: 'Custo em Restock (24h)',
        cardLucroEm24h: 'Média de Lucro em 24h',
        cardLucroSemanal: 'Média de Lucro Semanal',

        //exlcusivo CM
        oilGasto: 'Oil Gasto',
        oilUsado: 'Oil Usado',
    },
    ingles: {
        //titulo tabela
        crop: 'Crops',
        estoque: 'Stock',
        custoDaSemente: 'Seed Cost',
        vendaDaCrop: 'Crop Sale',
        mediaPorPlot: 'Average per Plot',
        tempoDaCrop: 'Crop Time',
        calculoPorSemente: 'Number of Seeds You Will Plant',
        calculoPorCiclo: 'Number of Cycles You Will Plant',
        botaoSalvar: 'Save',
        tempoTotal: 'Total Time',
        sementesUsadas: 'Seeds Used',
        totalDeCrops: 'Total Crops',
        lucroEmCoins: 'Profit in Coins',
        valorDeVendaNoMarket: 'Market P2P<br>Selling Price',
        lucroVendendoNoMarket: 'Profit on Market P2P<br>Fee',

        //cards da tabela
        cardTempoTotal: 'Total Time',
        cardQtdRestock: 'Average Restock',
        cardCustoRestock: 'Average Cost of Restocks',
        cardLucroDoCombo: 'Combo Profit',
        cardQtdRestock24h: 'Average Restock in 24h',
        cardCustoRestock24h: 'Restock Cost (24h)',
        cardLucroEm24h: 'Average Profit in 24h',
        cardLucroSemanal: 'Weekly Average Profit',

        //exlcusivo CM
        oilGasto: 'Oil Spent',
        oilUsado: 'Oil Used',
    },
};

function tabelaDeCrops() {
    mostrarResultadoCrops.innerHTML = '';

    let idiomaDoTextoCrops = idiomaTabelaCrops[idioma];

    //texto para colocar se a pessoa qrer ver o calculo por ciclo ou por semente
    let textoDefinirModoDeCalcularCrops = idiomaDoTextoCrops.calculoPorSemente;

    if (document.getElementById('tipo-de-calculo-crop').value === 'manual') {
        textoDefinirModoDeCalcularCrops = idiomaTabelaCrops[idioma].calculoPorSemente;
    } else if (document.getElementById('tipo-de-calculo-crop').value === 'rodada') {
        textoDefinirModoDeCalcularCrops = idiomaTabelaCrops[idioma].calculoPorCiclo;
    }

    //selecionando a tabela que vai usar!
    let tabelaTituloCrops = `
        <tr>   
            <th>${idiomaDoTextoCrops.crop}<br>${idiomaDoTextoCrops.estoque}</th>
            <th>${idiomaDoTextoCrops.custoDaSemente}<br>${idiomaDoTextoCrops.vendaDaCrop}</th>
            <th>${idiomaDoTextoCrops.mediaPorPlot}<br>${idiomaDoTextoCrops.tempoDaCrop}</th>
            <th>${textoDefinirModoDeCalcularCrops} <br><button onclick="sementesPlantadas()">${idiomaDoTextoCrops.botaoSalvar}</button></th>
            <th>${idiomaDoTextoCrops.sementesUsadas}<br>${idiomaDoTextoCrops.totalDeCrops}</th>
            <th>${idiomaDoTextoCrops.tempoTotal}</th>
            <th>${idiomaDoTextoCrops.lucroEmCoins}</th>
            <th>${idiomaDoTextoCrops.valorDeVendaNoMarket}</th>
            <th>${idiomaDoTextoCrops.lucroVendendoNoMarket}: ${(taxa * 100).toFixed(2)}%</th>
        </tr>`

    // tabela principal continua igual
    let tabelaCrops = `
    <table class="tabela-crops">
            <thead>
                ${tabelaTituloCrops}
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
        let custoPorSemente = Number(crop.custoPorSemente) < 0.1 ? Number(crop.custoPorSemente).toFixed(3) : Number(crop.custoPorSemente).toFixed(2);
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
            <td><img src="./crops/seed${crop.name}.png" class="crop-img">${sementesUsadas}<br><img src="./crops/${crop.name}.png" class="crop-img">${qtdTotal.toFixed(2)}</td>
            <td><img src="./icones/tempo.png" class="crop-img">${formatarTempo(tempoTotalDaCrop)}</td>
            <td><img src="./crops/${crop.name}.png" class="crop-img"><br><img src="./icones/coins.png" class="crop-img">${lucroCoins.toFixed(2)}</td>
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
    
    //info para os cards
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
        
    let cardResultados = `
        <div class="cards-totais-crops">

            <div class="card-total-crops">
                <h3><img src="./icones/tempo.png" class="crop-img">${idiomaDoTextoCrops.cardTempoTotal}</h3>
                <p>${formatarTempoTotalDoDia(tempoTotalDoCombo)}</p>
            </div>
            <h1>-</h1> 
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardQtdRestock}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${restockDoCombo.toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${gemsGastasComRestock.toFixed(2)}</p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardCustoRestock}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${custoRestockDoComboFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${custoRestockDoComboDolar.toFixed(2)}
                </p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroDoCombo}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroTotalDoComboFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${Number(lucroTotalDoComboFlower * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1> 
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardQtdRestock24h}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${mediaRestock24h.toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${mediaGemsGastasRestock24h.toFixed(2)}</p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardCustoRestock24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${mediaCustoRestock24hFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${mediaCustoRestock24hDolar.toFixed(2)}
                </p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroEm24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoComboEm24h.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${Number(lucroDoComboEm24h * precoDoFlower).toFixed(2)}    
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroSemanal}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoComboSemanal.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${Number(lucroDoComboSemanal * precoDoFlower).toFixed(2)}    
                </p>
            </div>

        </div>
        `;

    // renderiza tudo da parte de crops
    mostrarResultadoCrops.innerHTML = `
        <div class="tabelas-em-ordem">
            ${cardResultados}
            ${tabelaCrops}        
        </div>
    `;

    //=====================================================================================================================================================================

    //acumuladores para mostrar resultado total da CM!
    let tempoTotalDoComboNaCM = 0;
    let lucroTotalDoComboCoinsNaCM = 0;
    let lucroTotalDoComboFlowerNaCM = 0;
    let restockDoComboCM = 0;
    let oilTotalUsado = 0;

    let tabelaTituloCM = `
        <tr>
            <th>${idiomaDoTextoCrops.crop}<br>${idiomaDoTextoCrops.estoque}</th>
            <th>${idiomaDoTextoCrops.custoDaSemente}<br>${idiomaDoTextoCrops.vendaDaCrop}</th>
            <th>${idiomaDoTextoCrops.mediaPorPlot}<br>${idiomaDoTextoCrops.tempoDaCrop}</th>
            <th>${idiomaDoTextoCrops.calculoPorCiclo} <br><button onclick="rodadasPlantadasCM()">${idiomaDoTextoCrops.botaoSalvar}</button></th>
            <th>${idiomaDoTextoCrops.sementesUsadas}<br>${idiomaDoTextoCrops.totalDeCrops}</th>      
            <th>${idiomaDoTextoCrops.tempoTotal}<br>${idiomaDoTextoCrops.oilGasto}</th>
            <th>${idiomaDoTextoCrops.lucroEmCoins}</th>
            <th>${idiomaDoTextoCrops.valorDeVendaNoMarket}</th>
            <th>${idiomaDoTextoCrops.lucroVendendoNoMarket}: ${(taxa * 100).toFixed(2)}%</th>
        </tr>`

    // tabela principal continua igual
    let tabelaCM = `
    <table class="tabela-crops">
            <thead>
                ${tabelaTituloCM}
            </thead>
        <tbody>
    `;

    cropMachine.forEach(cropM => {
        if (!cropM.permitido) return;

        let quantidadeCM = Number(cropM.quantidade);
        let sementesUsadasCM = Number(cropM.qtdSementeUsadas) || 0;
        let colheitaTotal = Number(cropM.colheitaTotal) || 0;
        
        let tempoPorCropCM = Number(cropM.tempoFinal);
        let tempoTotalPorCropCM = (cropM.tempoTotal || 0);

        let custoPorSementeCoins = Number(cropM.custoPorSemente) < 0.1 ? Number(cropM.custoPorSemente).toFixed(3) : Number(cropM.custoPorSemente).toFixed(2);
        let vendaDaCropPorCoins = Number(cropM.vendaPorCrop) < 0.1 ? Number(cropM.vendaPorCrop).toFixed(3) : Number(cropM.vendaPorCrop).toFixed(2);
        
        let custoTotal = sementesUsadasCM * custoPorSementeCoins;
        let vendaTotal = colheitaTotal * vendaDaCropPorCoins;

        let oilGasto = (oilPorHora / umaHora) * tempoTotalPorCropCM;
        let lucroCoins = sementesUsadasCM > 0 ? (vendaTotal - custoTotal - (mapaDeMinerals['oil'].mediaDeCustoCoins * oilGasto)) : 0;

        let estoqueTotal = Number(cropM.estoqueTotal);
        let qtdDeRestock = (sementesUsadasCM / estoqueTotal);

        let valorPorCropEmFlower = Number(cropM.valorDoMarket);

        let GastoComSementeEmFlower = Number(((1 / flowerEmCoins) * custoPorSementeCoins) * sementesUsadasCM);
        let lucroFlower = cropM.seedsPlantadas == 0 || ilha === 'Basic' ? 0 : 
            Number(((valorPorCropEmFlower * colheitaTotal) * (1 - taxa)) - GastoComSementeEmFlower - ((mapaDeMinerals['oil'].mediaDeCustoFlower * oilGasto)));

        tabelaCM += `
        <tr>
            <td><img src="./crops/${cropM.name}.png" class="crop-img">${cropM.name} <br> <img src="./icones/reestock.png" class="crop-img">${estoqueTotal}</td>
            <td><img src="./icones/coins.png" class="crop-img">${custoPorSementeCoins}<br><img src="./icones/coins.png" class="crop-img">${vendaDaCropPorCoins}</td>
            <td><img src="./crops/${cropM.name}.png" class="crop-img">${quantidadeCM.toFixed(2)}<br><img src="./icones/tempo.png" class="crop-img">${formatarTempo(tempoPorCropCM)}</td>
            <td><input type="number" placeholder="" data-name="${cropM.name}" class="quantidade-input sementesCM-input" value="${cropM.seedsPlantadas}"></td>
            <td><img src="./crops/seed${cropM.name}.png" class="crop-img">${sementesUsadasCM}<br><img src="./crops/${cropM.name}.png" class="crop-img">${colheitaTotal.toFixed(2)}</td>
            <td><img src="./icones/tempo.png" class="crop-img">${formatarTempo(tempoTotalPorCropCM)}<br><img src="./minerais/oil.png" class="crop-img">${oilGasto.toFixed(2)}</td>
            <td><img src="./crops/${cropM.name}.png" class="crop-img"><br><img src="./icones/coins.png" class="crop-img">${lucroCoins.toFixed(2)}</td>
            <td><img src="./crops/${cropM.name}.png" class="crop-img"><br><img src="./icones/flower.png" class="crop-img">${valorPorCropEmFlower.toFixed(5)}</td>
            <td><img src="./crops/${cropM.name}.png" class="crop-img"><br><img src="./icones/flower.png" class="crop-img">${lucroFlower.toFixed(5)}</td>
        </tr>
        `;

        oilTotalUsado += oilGasto;
        tempoTotalDoComboNaCM += tempoTotalPorCropCM;
        lucroTotalDoComboCoinsNaCM += lucroCoins;
        lucroTotalDoComboFlowerNaCM += lucroFlower;
        if (qtdDeRestock > restockDoComboCM) restockDoComboCM = qtdDeRestock;

    });


    //info para os cards
    //ver o gasto com restock, cada restock de semente é 15 gems
    let gemsGastasComRestockCM = restockDoComboCM * 15;

    //calculo dos valores de restock do combo montado e seu desconto no lucro
    let custoRestockDoComboFlowerCM = Number(gemsGastasComRestockCM * precoDaGemEmFlower);
    let custoRestockDoComboDolarCM = Number(gemsGastasComRestockCM * precoPorGem);
    lucroTotalDoComboFlowerNaCM -= custoRestockDoComboFlowerCM;

    //média em de restock e seu custo em 24h e desconto no lucro medio em 24h
    let mediaRestock24hCM = (vinteQuatroHoras / tempoTotalDoComboNaCM) * restockDoComboCM || 0;
    let mediaGemsGastasRestock24hCM = mediaRestock24hCM * 15;
    let mediaCustoRestock24hFlowerCM = Number(mediaGemsGastasRestock24hCM * precoDaGemEmFlower);
    let mediaCustoRestock24hDolarCM = Number(mediaGemsGastasRestock24hCM * precoPorGem);
    let lucroDoComboEm24hCM = ((vinteQuatroHoras / tempoTotalDoComboNaCM) * lucroTotalDoComboFlowerNaCM);
    let lucroDoComboSemanalCM = lucroDoComboEm24hCM * 7;

    let cardResultadosCM = `
        <div class="cards-totais-crops">

            <div class="card-total-crops">
                <h3><img src="./icones/tempo.png" class="crop-img">${idiomaDoTextoCrops.cardTempoTotal} - <img src="./minerais/oil.png" class="crop-img">${idiomaDoTextoCrops.oilUsado}</h3>
                <p>${formatarTempoTotalDoDia(tempoTotalDoComboNaCM)} - <img src="./minerais/oil.png" class="crop-img">${oilTotalUsado.toFixed(2)}</p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardQtdRestock}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${restockDoComboCM.toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${gemsGastasComRestockCM.toFixed(2)}</p>
            </div>

             <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardCustoRestock}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${custoRestockDoComboFlowerCM.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${custoRestockDoComboDolarCM.toFixed(2)}
                </p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroDoCombo}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroTotalDoComboFlowerNaCM.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${Number(lucroTotalDoComboFlowerNaCM * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardQtdRestock24h}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${mediaRestock24hCM.toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${mediaGemsGastasRestock24hCM.toFixed(2)}</p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardCustoRestock24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${mediaCustoRestock24hFlowerCM.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${mediaCustoRestock24hDolarCM.toFixed(2)}
                </p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroEm24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoComboEm24hCM.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${Number(lucroDoComboEm24hCM * precoDoFlower).toFixed(2)}    
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroSemanal}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoComboSemanalCM.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${Number(lucroDoComboSemanalCM * precoDoFlower).toFixed(2)}    
                </p>
            </div>

        </div>
        `;

    //a conta é feita aqui, mas a funcção abaixo joga o resultado para tabela da crop machine!
    tabelaCropMachine(tabelaCM, cardResultadosCM)
};

//===========================================================================================================================================================================

function tabelaCropMachine(tabelaCM, cardResultadosCM) {
    mostrarResultadoCropMachine.innerHTML = `
        <div class="tabelas-em-ordem">    
            ${cardResultadosCM}    
            ${tabelaCM}
        </div>
    `
}