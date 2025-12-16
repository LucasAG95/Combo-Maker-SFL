const mostrarResultadoCrops = document.getElementById('saida-das-crops');
const mostrarResultadoCropMachine = document.getElementById('saida-das-crops-cm');
const mostrarResultadoFrutas = document.getElementById('saida-das-frutas');
const mostrarResultadoGreenhouse = document.getElementById('saida-da-greenhouse');

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
        calculoPorEstoque: 'Qtd. Estoque que vai Plantar',

        //exclusivo Frutas
        frutas: 'Frutas',
        vendaDaFruta: 'Venda da Fruta',
        mediaPorColeta: 'Média por Coleta',
        tempoDaFruta: 'Tempo da Fruta',
        totalDeFrutas: 'Total de Frutas',
        machadosUsados: 'Machados Usados',
        madeiraGanha: 'Madeiras Ganhas',
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
        calculoPorEstoque: 'Amount of Stock You Will Plant',

        //exclusivo Frutas
        frutas: 'Fruits',
        vendaDaFruta: 'Fruit Sale',
        mediaPorColeta: 'Average per Harvest',
        tempoDaFruta: 'Fruit Time',
        totalDeFrutas: 'Total Fruits',
        machadosUsados: 'Axes Used',
        madeiraGanha: 'Wood Gained',

    },
};

function tabelaDeCrops() {
    mostrarResultadoCrops.innerHTML = '';

    let idiomaDoTextoCrops = idiomaTabelaCrops[idioma];

    //======================================================== CROPS ===================================================================================


    //texto para colocar se a pessoa qrer ver o calculo por ciclo ou por semente
    let textoDefinirModoDeCalcularCrops = idiomaDoTextoCrops.calculoPorSemente;

    if (document.getElementById('tipo-de-calculo-crop').value === 'manual') {
        textoDefinirModoDeCalcularCrops = idiomaDoTextoCrops.calculoPorSemente;
    } else if (document.getElementById('tipo-de-calculo-crop').value === 'rodada') {
        textoDefinirModoDeCalcularCrops = idiomaDoTextoCrops.calculoPorCiclo;
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

    //======================================================== CROP MACHINE ===================================================================================

    //acumuladores para mostrar resultado total da CM!
    let tempoTotalDoComboNaCM = 0;
    let lucroTotalDoComboCoinsNaCM = 0;
    let lucroTotalDoComboFlowerNaCM = 0;
    let restockDoComboCM = 0;
    let oilTotalUsado = 0;

    //texto para colocar se a pessoa qrer ver o calculo por ciclo ou por semente
    let textoDefinirModoDeCalcularCropsCM = idiomaDoTextoCrops.calculoPorSemente;

    if (document.getElementById('tipo-de-calculo-crop-cm').value === 'manual') {
        textoDefinirModoDeCalcularCropsCM = idiomaDoTextoCrops.calculoPorSemente;
    } else if (document.getElementById('tipo-de-calculo-crop-cm').value === 'rodada') {
        textoDefinirModoDeCalcularCropsCM = idiomaDoTextoCrops.calculoPorCiclo;
    } else if (document.getElementById('tipo-de-calculo-crop-cm').value === 'estoque') {
        textoDefinirModoDeCalcularCropsCM = idiomaDoTextoCrops.calculoPorEstoque;
    }

    let tabelaTituloCM = `
        <tr>
            <th>${idiomaDoTextoCrops.crop}<br>${idiomaDoTextoCrops.estoque}</th>
            <th>${idiomaDoTextoCrops.custoDaSemente}<br>${idiomaDoTextoCrops.vendaDaCrop}</th>
            <th>${idiomaDoTextoCrops.mediaPorPlot}<br>${idiomaDoTextoCrops.tempoDaCrop}</th>
            <th>${textoDefinirModoDeCalcularCropsCM} <br><button onclick="sementesPlantadasCM()">${idiomaDoTextoCrops.botaoSalvar}</button></th>
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
    tabelaCropMachine(tabelaCM, cardResultadosCM);

    //============================================================ FRUTAS ==========================================================================================

    //acumuladores para mostrar resultado total da CM!
    let tempoTotalComboFrutas = 0;
    let lucroTotalDoComboFrutasCoins = 0;
    let lucroTotalDoComboFrutasFlower = 0;
    let restockDoComboFrutas = 0;

    //texto para colocar se a pessoa qrer ver o calculo por ciclo ou por semente
    let textoDefinirModoDeCalcularFrutas = idiomaDoTextoCrops.calculoPorSemente;

    if (document.getElementById('tipo-de-calculo-fruta').value === 'manual') {
        textoDefinirModoDeCalcularFrutas = idiomaDoTextoCrops.calculoPorSemente;
    } else if (document.getElementById('tipo-de-calculo-fruta').value === 'rodada') {
        textoDefinirModoDeCalcularFrutas = idiomaDoTextoCrops.calculoPorCiclo;
    }

    let tabelaTituloFrutas = `
        <tr>
            <th>${idiomaDoTextoCrops.frutas}<br>${idiomaDoTextoCrops.estoque}</th>
            <th>${idiomaDoTextoCrops.custoDaSemente}<br>${idiomaDoTextoCrops.vendaDaFruta}</th>
            <th>${idiomaDoTextoCrops.mediaPorColeta}<br>${idiomaDoTextoCrops.tempoDaFruta}</th>
            <th>${textoDefinirModoDeCalcularFrutas} <br><button onclick="sementesPlantadasFrutas()">${idiomaDoTextoCrops.botaoSalvar}</button></th>
            <th>${idiomaDoTextoCrops.sementesUsadas}<br>${idiomaDoTextoCrops.totalDeFrutas}</th>      
            <th>${idiomaDoTextoCrops.tempoTotal}</th>
            <th>${idiomaDoTextoCrops.machadosUsados}<br>${idiomaDoTextoCrops.madeiraGanha}</th>
            <th>${idiomaDoTextoCrops.lucroEmCoins}</th>
            <th>${idiomaDoTextoCrops.valorDeVendaNoMarket}</th>
            <th>${idiomaDoTextoCrops.lucroVendendoNoMarket}: ${(taxa * 100).toFixed(2)}%</th>
        </tr>`

    // tabela principal continua igual
    let tabelaFrutas = `
        <table class="tabela-crops">
                <thead>
                    ${tabelaTituloFrutas}
                </thead>
            <tbody>
        `;

    fruits.forEach(fruta => {
        if (!fruta.estacao.includes(estacao)) return;

        let qtdPorColeta = Number(fruta.quantidade);

        let tempoPorColeta = fruta.tempoFinal;
        let tempoTotal = fruta.tempoTotal;

        let custoPorSemente = Number(fruta.custoPorSemente);
        let vendaDaFruta = Number(fruta.vendaPorFruta);

        let estoqueFinal = Number(fruta.estoqueFinal);

        let valorPorFrutaNoMarket = Number(fruta.valorDoMarket);

        let sementesUsadas = Number(fruta.qtdSementeUsadas);
        let colheitaTotal = Number(fruta.colheitaTotal);

        let machadosUsados = fruta.totalAxe;
        let madeirasGanhas = fruta.totalWood;

        let custoTotalCoins = (custoPorSemente * sementesUsadas) + (mapaDeFerramentas['axe'].custoEmCoins * machadosUsados);
        let vendaTotalCoins = (vendaDaFruta * colheitaTotal) + (((mapaDeMinerals['wood'].valorDoMarket * (1 - taxa)) * madeirasGanhas) * flowerEmCoins);
        let lucroCoins = sementesUsadas > 0 ? vendaTotalCoins - custoTotalCoins : 0;

        let custoTotalFlower = (1 / flowerEmCoins) * custoTotalCoins;
        let vendaTotalFlower = ((colheitaTotal * valorPorFrutaNoMarket) + (mapaDeMinerals['wood'].valorDoMarket * madeirasGanhas)) * (1 - taxa);
        let lucroFlower = sementesUsadas > 0 ? vendaTotalFlower - custoTotalFlower : 0;

        let qtdDeRestock = (sementesUsadas / estoqueFinal);

        tabelaFrutas += `
        <tr>
            <td><img src="./crops/${fruta.name}.png" class="crop-img">${fruta.name} <br> <img src="./icones/reestock.png" class="crop-img">${estoqueFinal}</td>
            <td><img src="./icones/coins.png" class="crop-img">${custoPorSemente.toFixed(2)}<br><img src="./icones/coins.png" class="crop-img">${vendaDaFruta.toFixed(2)}</td>
            <td><img src="./crops/${fruta.name}.png" class="crop-img">${qtdPorColeta.toFixed(2)}<br><img src="./icones/tempo.png" class="crop-img">${formatarTempo(tempoPorColeta)}</td>
            <td><input type="number" placeholder="" data-name="${fruta.name}" class="quantidade-input sementesFrutas-input" value="${fruta.seedsPlantadas}"></td>
            <td><img src="./crops/seed${fruta.name}.png" class="crop-img">${sementesUsadas}<br><img src="./crops/${fruta.name}.png" class="crop-img">${colheitaTotal.toFixed(2)}</td>
            <td><img src="./icones/tempo.png" class="crop-img">${formatarTempo(tempoTotal)}</td>
            <td><img src="./minerais/axe.png" class="crop-img">${machadosUsados}<br><img src="./minerais/wood.png" class="crop-img">${madeirasGanhas}</td>
            <td><img src="./crops/${fruta.name}.png" class="crop-img">+ <img src="./minerais/wood.png" class="crop-img"><br><img src="./icones/coins.png" class="crop-img">${lucroCoins.toFixed(2)}</td>
            <td><img src="./crops/${fruta.name}.png" class="crop-img"><br><img src="./icones/flower.png" class="crop-img">${valorPorFrutaNoMarket.toFixed(5)}</td>
            <td><img src="./crops/${fruta.name}.png" class="crop-img">+ <img src="./minerais/wood.png" class="crop-img"><br><img src="./icones/flower.png" class="crop-img">${lucroFlower.toFixed(5)}</td>
        </tr>
        `;

        tempoTotalComboFrutas += tempoTotal;
        lucroTotalDoComboFrutasCoins += lucroCoins;
        lucroTotalDoComboFrutasFlower += lucroFlower;
        if (qtdDeRestock > restockDoComboFrutas) restockDoComboFrutas = qtdDeRestock;

    });

    //info para os cards
    //ver o gasto com restock, cada restock de semente é 15 gems
    let gemsGastasComRestockFrutas = restockDoComboFrutas * 15;

    //calculo dos valores de restock do combo montado e seu desconto no lucro
    let custoRestockDoComboFlowerFrutas = Number(gemsGastasComRestockFrutas * precoDaGemEmFlower);
    let custoRestockDoComboDolarFrutas = Number(gemsGastasComRestockFrutas * precoPorGem);
    lucroTotalDoComboFrutasFlower -= custoRestockDoComboFlowerFrutas;

    //média em de restock e seu custo em 24h e desconto no lucro medio em 24h
    let mediaRestock24hFrutas = (vinteQuatroHoras / tempoTotalComboFrutas) * restockDoComboFrutas || 0;
    let mediaGemsGastasRestock24hFrutas = mediaRestock24hFrutas * 15;
    let mediaCustoRestock24hFlowerFrutas = Number(mediaGemsGastasRestock24hFrutas * precoDaGemEmFlower);
    let mediaCustoRestock24hDolarFrutas = Number(mediaGemsGastasRestock24hFrutas * precoPorGem);
    let lucroDoComboEm24hFrutas = ((vinteQuatroHoras / tempoTotalComboFrutas) * lucroTotalDoComboFrutasFlower);
    let lucroDoComboSemanalFrutas = lucroDoComboEm24hFrutas * 7;


    let cardResultadosFrutas = `
        <div class="cards-totais-crops">

            <div class="card-total-crops">
                <h3><img src="./icones/tempo.png" class="crop-img">${idiomaDoTextoCrops.cardTempoTotal}</h3>
                <p>${formatarTempoTotalDoDia(tempoTotalComboFrutas)}</p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardQtdRestock}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${restockDoComboFrutas.toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${gemsGastasComRestockFrutas.toFixed(2)}</p>
            </div>

             <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardCustoRestock}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${custoRestockDoComboFlowerFrutas.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${custoRestockDoComboDolarFrutas.toFixed(2)}
                </p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroDoCombo}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroTotalDoComboFrutasFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(lucroTotalDoComboFrutasFlower * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardQtdRestock24h}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${mediaRestock24hFrutas.toFixed(2)} ➜ ${mediaGemsGastasRestock24hFrutas.toFixed(2)}<img src="./icones/gem.png" class="crop-img"></p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardCustoRestock24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${mediaCustoRestock24hFlowerFrutas.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${mediaCustoRestock24hDolarFrutas.toFixed(2)}
                </p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroEm24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoComboEm24hFrutas.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(lucroDoComboEm24hFrutas * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroSemanal}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoComboSemanalFrutas.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(lucroDoComboSemanalFrutas * precoDoFlower).toFixed(2)}
                </p>
            </div>

        </div>
        `;

    tabelaDeFrutas(tabelaFrutas, cardResultadosFrutas);

    //========================================================== GREENHOUSE =================================================================================================

    //acumuladores para mostrar resultado total da GH!
    let tempoTotalComboGH = 0;
    let lucroTotalDoComboGHCoins = 0;
    let lucroTotalDoComboGHFlower = 0;
    let restockDoComboGH = 0;

    //texto para colocar se a pessoa qrer ver o calculo por ciclo ou por semente
    let textoDefinirModoDeCalcularGH = idiomaDoTextoCrops.calculoPorSemente;

    if (document.getElementById('tipo-de-calculo-greenhouse').value === 'manual') {
        textoDefinirModoDeCalcularGH = idiomaDoTextoCrops.calculoPorSemente;
    } else if (document.getElementById('tipo-de-calculo-greenhouse').value === 'rodada') {
        textoDefinirModoDeCalcularGH = idiomaDoTextoCrops.calculoPorCiclo;
    }

    let tabelaTituloGH = `
    <tr>
        <th>${idiomaDoTextoCrops.crop}<br>${idiomaDoTextoCrops.estoque}</th>
        <th>${idiomaDoTextoCrops.custoDaSemente}<br>${idiomaDoTextoCrops.vendaDaCrop}</th>
        <th>${idiomaDoTextoCrops.mediaPorPlot}<br>${idiomaDoTextoCrops.tempoDaCrop}</th>
        <th>${textoDefinirModoDeCalcularGH} <br><button onclick="sementesPlantadasGH()">${idiomaDoTextoCrops.botaoSalvar}</button></th>
        <th>${idiomaDoTextoCrops.sementesUsadas}<br>${idiomaDoTextoCrops.totalDeCrops}</th>      
        <th>${idiomaDoTextoCrops.tempoTotal}<br>${idiomaDoTextoCrops.oilGasto}</th>
        <th>${idiomaDoTextoCrops.lucroEmCoins}</th>
        <th>${idiomaDoTextoCrops.valorDeVendaNoMarket}</th>
        <th>${idiomaDoTextoCrops.lucroVendendoNoMarket}: ${(taxa * 100).toFixed(2)}%</th>
    </tr>`

    // tabela principal continua igual
    let tabelaGreenhouse = `
        <table class="tabela-crops">
                <thead>
                    ${tabelaTituloGH}
                </thead>
            <tbody>
        `;

    greenhouse.forEach(gh => {

        let quantidadeGH = Number(gh.quantidade);
        let sementesUsadas = Number(gh.qtdSementeUsadas);

        let tempoFinal = Number(gh.tempoFinal);

        let custoDaSementeCoins = Number(gh.custoPorSemente);
        let vendaDaCropPorCoins = Number(gh.vendaPorCrop);

        let oilFinal = Number(gh.oilFinal);
        let estoqueFinal = Number(gh.estoqueFinal);

        let colheitaTotal = Number(gh.colheitaTotal);
        let tempoTotal = Number(gh.tempoTotal);
        let oilTotalPorCrop = Number(gh.oilTotal);

        let custoTotal = sementesUsadas * custoDaSementeCoins;
        let vendaTotal = colheitaTotal * vendaDaCropPorCoins;

        let qtdDeRestock = sementesUsadas / estoqueFinal;

        let lucroCoins = sementesUsadas > 0 ? (vendaTotal - custoTotal - (mapaDeMinerals['oil'].mediaDeCustoCoins * oilTotalPorCrop)) : 0;

        let valorPorCropEmFlower = Number(gh.valorDoMarket);

        let GastoComSementeEmFlower = Number(((1 / flowerEmCoins) * custoDaSementeCoins) * sementesUsadas);
        let lucroFlower = gh.seedsPlantadas == 0 || ilha === 'Basic' ? 0 : 
            Number(((valorPorCropEmFlower * colheitaTotal) * (1 - taxa)) - GastoComSementeEmFlower - ((mapaDeMinerals['oil'].mediaDeCustoFlower * oilTotalPorCrop)));


        tabelaGreenhouse += `
        <tr>
            <td><img src="./crops/${gh.name}.png" class="crop-img">${gh.name} <br> <img src="./icones/reestock.png" class="crop-img">${estoqueFinal}</td>
            <td><img src="./icones/coins.png" class="crop-img">${custoDaSementeCoins}<br><img src="./icones/coins.png" class="crop-img">${vendaDaCropPorCoins}</td>
            <td><img src="./crops/${gh.name}.png" class="crop-img">${quantidadeGH.toFixed(2)} (<img src="./minerais/oil.png" class="crop-img">${oilFinal})<br><img src="./icones/tempo.png" class="crop-img">${formatarTempo(tempoFinal)}</td>
            <td><input type="number" placeholder="" data-name="${gh.name}" class="quantidade-input sementesGH-input" value="${gh.seedsPlantadas}"></td>
            <td><img src="./crops/seed${gh.name}.png" class="crop-img">${sementesUsadas}<br><img src="./crops/${gh.name}.png" class="crop-img">${colheitaTotal.toFixed(2)}</td>
            <td><img src="./icones/tempo.png" class="crop-img">${formatarTempo(tempoTotal)}<br><img src="./minerais/oil.png" class="crop-img">${oilTotalPorCrop}</td>
            <td><img src="./crops/${gh.name}.png" class="crop-img"><br><img src="./icones/coins.png" class="crop-img">${lucroCoins.toFixed(2)}</td>
            <td><img src="./crops/${gh.name}.png" class="crop-img"><br><img src="./icones/flower.png" class="crop-img">${valorPorCropEmFlower.toFixed(5)}</td>
            <td><img src="./crops/${gh.name}.png" class="crop-img"><br><img src="./icones/flower.png" class="crop-img">${lucroFlower.toFixed(5)}</td>
        </tr>
        `;

        tempoTotalComboGH += tempoTotal;
        lucroTotalDoComboGHCoins += lucroCoins;
        lucroTotalDoComboGHFlower += lucroFlower;
        if (qtdDeRestock > restockDoComboGH) restockDoComboGH = qtdDeRestock;

    });

    //info para os cards
    //ver o gasto com restock, cada restock de semente é 15 gems
    let gemsGastasComRestockGH = restockDoComboGH * 15;

    //calculo dos valores de restock do combo montado e seu desconto no lucro
    let custoRestockDoComboFlowerGH = Number(gemsGastasComRestockGH * precoDaGemEmFlower);
    let custoRestockDoComboDolarGH = Number(gemsGastasComRestockGH * precoPorGem);
    lucroTotalDoComboGHFlower -= custoRestockDoComboFlowerGH;

    //média em de restock e seu custo em 24h e desconto no lucro medio em 24h
    let mediaRestock24hGH = (vinteQuatroHoras / tempoTotalComboGH) * restockDoComboGH || 0;
    let mediaGemsGastasRestock24hGH = mediaRestock24hGH * 15;
    let mediaCustoRestock24hFlowerGH = Number(mediaGemsGastasRestock24hGH * precoDaGemEmFlower);
    let mediaCustoRestock24hDolarGH = Number(mediaGemsGastasRestock24hGH * precoPorGem);
    let lucroDoComboEm24hGH = ((vinteQuatroHoras / tempoTotalComboGH) * lucroTotalDoComboGHFlower);
    let lucroDoComboSemanalGH = lucroDoComboEm24hGH * 7;


    let cardResultadosGH = `
        <div class="cards-totais-crops">

            <div class="card-total-crops">
                <h3><img src="./icones/tempo.png" class="crop-img">${idiomaDoTextoCrops.cardTempoTotal}</h3>
                <p>${formatarTempoTotalDoDia(tempoTotalComboGH)}</p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardQtdRestock}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${restockDoComboGH.toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${gemsGastasComRestockGH.toFixed(2)}</p>
            </div>

             <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardCustoRestock}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${custoRestockDoComboFlowerGH.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${custoRestockDoComboDolarGH.toFixed(2)}
                </p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroDoCombo}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroTotalDoComboGHFlower.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(lucroTotalDoComboGHFlower * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardQtdRestock24h}</h3>
                <p><img src="./icones/reestock.png" class="crop-img">${mediaRestock24hGH.toFixed(2)} ➜ ${mediaGemsGastasRestock24hGH.toFixed(2)}<img src="./icones/gem.png" class="crop-img"></p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardCustoRestock24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${mediaCustoRestock24hFlowerGH.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${mediaCustoRestock24hDolarGH.toFixed(2)}
                </p>
            </div>

            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroEm24h}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoComboEm24hGH.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(lucroDoComboEm24hGH * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroSemanal}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDoComboSemanalGH.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(lucroDoComboSemanalGH * precoDoFlower).toFixed(2)}
                </p>
            </div>

        </div>
        `;

    tabelaDaGreenhouse(tabelaGreenhouse, cardResultadosGH);
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

//===========================================================================================================================================================================

function tabelaDeFrutas(tabelaFrutas, cardResultadosFrutas) {
    mostrarResultadoFrutas.innerHTML = `
        <div class="tabelas-em-ordem"> 
            ${cardResultadosFrutas}   
            ${tabelaFrutas}    
        </div>
    `
}

//===========================================================================================================================================================================

function tabelaDaGreenhouse(tabelaGreenhouse, cardResultadosGH) {
    mostrarResultadoGreenhouse.innerHTML = `
        <div class="tabelas-em-ordem">
            ${cardResultadosGH} 
            ${tabelaGreenhouse}    
        </div>
    `
};

//===========================================================================================================================================================================