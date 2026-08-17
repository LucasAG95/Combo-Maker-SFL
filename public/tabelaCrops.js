// ========================================================================================================================
// 1. CAPTURA DE ELEMENTOS DO DOM (Onde as tabelas serão desenhadas na tela)
// ========================================================================================================================
const mostrarResultadoCrops = document.getElementById('saida-das-crops');
const mostrarResultadoCropMachine = document.getElementById('saida-das-crops-cm');
const mostrarResultadoFrutas = document.getElementById('saida-das-frutas');
const mostrarResultadoGreenhouse = document.getElementById('saida-da-greenhouse');

// ========================================================================================================================
// 2. DICIONÁRIO DE TRADUÇÕES DA TABELA
// ========================================================================================================================
const idiomaTabelaCrops = {
    portugues: {
        // Títulos das colunas
        crop: 'Crops',
        estoque: 'Estoque',
        custoDaSemente: 'Custo da Semente',
        vendaDaCropNaBetty: 'Valor de Venda<br>da Crop na Betty',
        mediaPorPlot: 'Média por Plot',
        tempoDaCrop: 'Tempo da Crop',
        calculoPorSemente: 'Inserir Sementes',
        calculoPorCiclo: 'Inserir Ciclos',
        botaoSalvar: 'Salvar',
        tempoTotal: 'Tempo Total',
        sementesUsadas: 'Sementes Usadas',
        totalDeCrops: 'Total de Crops',
        lucroEmCoins: 'Lucro Total<br>Vendendo na Betty',
        valorDeVendaNoMarket: 'Valor no Market P2P<br>Taxa Retirada:',
        lucroVendendoNoMarket: 'Lucro Total<br>no Market P2P',
        lucroPorHora: 'Lucro Por Hora<br>Betty vs Market',
        melhorOpcao: 'Melhor Opção<br>de Venda',

        // Cards de Resumo
        cardTempoTotal: 'Tempo Total',
        cardQtdRestock: 'Média de Restock',
        cardCustoRestock: 'Gasto com Restocks',
        cardLucroDoCombo: 'Lucro do Combo',
        cardQtdRestock24h: 'Restock em 24h',
        cardCustoRestock24h: 'Custo em Restock (24h)',
        cardLucroEm24h: 'Média de Lucro em 24h',
        cardLucroSemanal: 'Média de Lucro Semanal',

        // Textos Exclusivos (CM, Frutas, Greenhouse)
        oilGasto: 'Oil Gasto',
        oilUsado: 'Oil Usado',
        calculoPorEstoque: 'Inserir Estoque',
        frutas: 'Frutas',
        vendaDaFrutaNaBetty: 'Valor de Venda<br>da Fruta na Betty',
        mediaPorColeta: 'Média por Coleta',
        tempoDaFruta: 'Tempo da Fruta',
        totalDeFrutas: 'Total de Frutas',
        machadosUsados: 'Machados Usados',
        madeiraGanha: 'Madeiras Ganhas',
        opcaoCiclo: 'Selecione<br>opção por ciclo',
    },
    ingles: {
        // (Traduções em inglês mantidas idênticas ao seu original)
        crop: 'Crops',
        estoque: 'Stock',
        custoDaSemente: 'Seed Cost',
        vendaDaCropNaBetty: 'Crop Selling<br>Price at Betty',
        mediaPorPlot: 'Average per Plot',
        tempoDaCrop: 'Crop Time',
        calculoPorSemente: 'Enter Seeds',
        calculoPorCiclo: 'Enter Cycles',
        botaoSalvar: 'Save',
        tempoTotal: 'Total Time',
        sementesUsadas: 'Seeds Used',
        totalDeCrops: 'Total Crops',
        lucroEmCoins: 'Total Profit<br>at Betty',
        valorDeVendaNoMarket: 'P2P Market Value<br>Withdrawal Fee:',
        lucroVendendoNoMarket: 'Total Profit<br>P2P Market',
        lucroPorHora: 'Hourly Profit<br>Betty vs Market',
        melhorOpcao: 'Best Selling<br>Option',
        cardTempoTotal: 'Total Time',
        cardQtdRestock: 'Average Restock',
        cardCustoRestock: 'Average Cost of Restocks',
        cardLucroDoCombo: 'Combo Profit',
        cardQtdRestock24h: 'Average Restock in 24h',
        cardCustoRestock24h: 'Restock Cost (24h)',
        cardLucroEm24h: 'Average Profit in 24h',
        cardLucroSemanal: 'Weekly Average Profit',
        oilGasto: 'Oil Spent',
        oilUsado: 'Oil Used',
        calculoPorEstoque: 'Enter Stock',
        frutas: 'Fruits',
        vendaDaFrutaNaBetty: 'Fruit Selling<br>Price at Betty',
        mediaPorColeta: 'Average per Harvest',
        tempoDaFruta: 'Fruit Time',
        totalDeFrutas: 'Total Fruits',
        machadosUsados: 'Axes Used',
        madeiraGanha: 'Wood Gained',
        opcaoCiclo: 'Select the<br>option by cycle',
    },
};

// ========================================================================================================================
// 3. VARIÁVEIS GLOBAIS DE RESULTADO (Alimentam o resumo geral no final da página)
// ========================================================================================================================
let resultadoRestockDasSementes24h = 0;
let resultadoComboCrop = 0;
let resultadoTempoTotalCrop = 0;
let resultadoComboCropMachine = 0;
let resultadoTempoTotalCropMachine = 0;
let resultadoComboFruta = 0;
let resultadoTempoTotalFrutas = 0;
let resultadoComboGreenhouse = 0;
let resultadoTempoTotalGreenhouse = 0;

// ========================================================================================================================
// 4. MOTOR PRINCIPAL DE GERAÇÃO DAS TABELAS
// ========================================================================================================================
function tabelaDeCrops() {
    mostrarResultadoCrops.innerHTML = ''; // Limpa a tabela atual antes de renderizar a nova
    let idiomaDoTextoCrops = idiomaTabelaCrops[idioma];

    // ==========================================
    // SEÇÃO A: TABELA DE CROPS BÁSICAS
    // ==========================================

    // 1. Define o texto do cabeçalho com base no tipo de cálculo selecionado (Semente ou Ciclo)
    let textoDefinirModoDeCalcularCrops = idiomaDoTextoCrops.calculoPorSemente;
    if (document.getElementById('tipo-de-calculo-crop').value === 'manual') {
        textoDefinirModoDeCalcularCrops = idiomaDoTextoCrops.calculoPorSemente;
    } else if (document.getElementById('tipo-de-calculo-crop').value === 'rodada') {
        textoDefinirModoDeCalcularCrops = idiomaDoTextoCrops.calculoPorCiclo;
    }

    // 2. Estrutura do cabeçalho da tabela
    let tabelaTituloCrops = `
        <tr>   
            <th>${idiomaDoTextoCrops.crop}<br>${idiomaDoTextoCrops.estoque}</th>
            <th>${idiomaDoTextoCrops.custoDaSemente}</th>
            <th>${idiomaDoTextoCrops.mediaPorPlot}<br>${idiomaDoTextoCrops.tempoDaCrop}</th>
            <th>${textoDefinirModoDeCalcularCrops} <br><button onclick="sementesPlantadas()">${idiomaDoTextoCrops.botaoSalvar}</button></th>
            <th>${idiomaDoTextoCrops.sementesUsadas}<br>${idiomaDoTextoCrops.totalDeCrops}</th>
            <th>${idiomaDoTextoCrops.tempoTotal}</th>
            <th>${idiomaDoTextoCrops.vendaDaCropNaBetty}</th>
            <th>${idiomaDoTextoCrops.valorDeVendaNoMarket} ${(taxa * 100).toFixed(2)}%</th>
            <th>${idiomaDoTextoCrops.melhorOpcao}</th>
            <th>${idiomaDoTextoCrops.lucroEmCoins}</th>
            <th>${idiomaDoTextoCrops.lucroVendendoNoMarket}</th>
            <th>${idiomaDoTextoCrops.lucroPorHora}</th>
        </tr>`;

    let tabelaCrops = `<table class="tabela-crops"><thead>${tabelaTituloCrops}</thead><tbody>`;

    // 3. Acumuladores exclusivos da seção de Crops
    let tempoTotalDoCombo = 0;
    let lucroTotalDoComboCropCoins = 0;
    let ganhoTotalComComboCropFlower = 0;
    let restockDoCombo = 0;

    // 4. Percorre as Crops e calcula as linhas
    crops.forEach(crop => {
        if (!crop.estacao.includes(estacao)) return; // Ignora se não for a estação correta

        // Variáveis de quantidade e tempo
        let sementesUsadas = Number(crop.qtdSementeUsadas) || 0;
        let qtdPorPlot = Number(crop.quantidade);
        let tempoDaCrop = Number(crop.tempoFinal);
        let qtdTotal = Number(crop.colheitaTotal) || 0;
        let tempoTotalDaCrop = Number(crop.tempoTotal) || 0;

        // Variáveis financeiras (Custo e Venda)
        let custoPorSementeCoins = Number(crop.custoPorSemente);
        let custoPorSementeFlower = (1 / flowerEmCoins) * custoPorSementeCoins;
        let vendaPorCropEmCoins = Number(crop.vendaPorCrop);
        let vendaPorCropEmCoinsConvertidas = (1 / flowerEmCoins) * vendaPorCropEmCoins;
        let valorPorCropEmFlower = Number(crop.valorDoMarket);
        let valorPorCropEmFlowerMenosTaxa = valorPorCropEmFlower * (1 - taxa);
        
        // Lucro em Coins
        let custoTotalCoins = sementesUsadas * custoPorSementeCoins;
        let vendaTotalCoins = vendaPorCropEmCoins * qtdTotal;
        let lucroCoins = vendaTotalCoins - custoTotalCoins;
        let lucroCoinsConvertido = (1 / flowerEmCoins) * lucroCoins;

        // Lucro em Flower
        let custoTotalFlower = ((1 / flowerEmCoins) * custoPorSementeCoins) * sementesUsadas;
        let vendaTotalFlower = valorPorCropEmFlowerMenosTaxa * qtdTotal;
        let lucroFlower = crop.seedsPlantadas == 0 || ilha === 'Basic' ? 0 : vendaTotalFlower - custoTotalFlower;
        
        // Calculos de Estoque e Restock
        let estoque = Number(crop.estoqueTotal);
        let qtdDeRestock = (sementesUsadas / estoque);

        // Lucro Por Hora (Coins e Flower)
        let vendaPorPlotCoins = vendaPorCropEmCoins * qtdPorPlot;
        let lucroPorCicloPlantadoCoins = (vendaPorPlotCoins - custoPorSementeCoins) * plots;
        let lucroPorHoraCoins = (umaHora / tempoDaCrop) * lucroPorCicloPlantadoCoins;
        let lucroPorHoraCoinsConvertido = (1 / flowerEmCoins) * lucroPorHoraCoins;

        let vendaPorPlot = valorPorCropEmFlowerMenosTaxa * qtdPorPlot;
        let lucroPorCicloPlantado = (vendaPorPlot - custoPorSementeFlower) * plots;
        let lucroPorHora = (umaHora / tempoDaCrop) * lucroPorCicloPlantado;

        // Lógica visual: Verifica qual a melhor opção e colore de verde
        let melhorOpcao = valorPorCropEmFlowerMenosTaxa > vendaPorCropEmCoinsConvertidas ? `${imgFlower} Flower` : `${imgCoins} Coins`;
        let tdLucroPorHora = melhorOpcao.includes('Coins')
            ? `<span style="color:#4caf50;font-weight:bold">B ➜ ${imgFlower} ${lucroPorHoraCoinsConvertido.toFixed(4)}</span><br>M ➜ ${imgFlower} ${lucroPorHora.toFixed(4)}`
            : `B ➜ ${imgFlower} ${lucroPorHoraCoinsConvertido.toFixed(4)}<br><span style="color:#4caf50;font-weight:bold">M ➜ ${imgFlower} ${lucroPorHora.toFixed(4)}</span>`;

        let imgCrop = sprite(crop.name);
        let imgSemente = sprite(`seed` + crop.name);
        
        // Injeta a linha HTML
        tabelaCrops += `
        <tr>
            <td>${imgCrop} ${crop.name}<br>${imgRestock} ${estoque}</td>
            <td>${imgCoins} ${custoPorSementeCoins}<br>${imgFlower} ${custoPorSementeFlower.toFixed(6)}</td>
            <td>${imgCrop} ${qtdPorPlot.toFixed(2)}<br>${imgTempo} ${formatarTempo(tempoDaCrop)}</td>
            <td><input type="number" data-name="${crop.name}" class="quantidade-input sementes-input" value="${crop.seedsPlantadas}"></td>
            <td>${imgSemente} ${sementesUsadas}<br>${imgCrop} ${qtdTotal.toFixed(2)}</td>
            <td>${imgTempo} ${formatarTempo(tempoTotalDaCrop)}</td>
            <td>${imgCoins} ${vendaPorCropEmCoins.toFixed(3)}<br>${imgFlower} ${vendaPorCropEmCoinsConvertidas.toFixed(6)}</td>
            <td>${imgCrop}<br>${imgFlower} ${valorPorCropEmFlowerMenosTaxa.toFixed(5)}</td>
            <td>${melhorOpcao}</td>
            <td>${imgCoins} ${lucroCoins.toFixed(2)}<br>${imgFlower} ${lucroCoinsConvertido.toFixed(5)}</td>
            <td>${imgCrop}<br>${imgFlower} ${lucroFlower.toFixed(5)}</td>
            <td>${tdLucroPorHora}</td>
        </tr>`;

        // Soma os totais para os cards
        tempoTotalDoCombo += tempoTotalDaCrop;
        lucroTotalDoComboCropCoins += lucroCoins;
        ganhoTotalComComboCropFlower += lucroFlower;
        if (qtdDeRestock > restockDoCombo) restockDoCombo = qtdDeRestock;
    });
    tabelaCrops += `</tbody></table>`;
    
    // 5. Cálculos dos Cards de Resumo das Crops
    let gemsGastasComRestock = restockDoCombo * 15;
    let custoRestockDoComboFlower = gemsGastasComRestock * precoDaGemEmFlower;
    let custoRestockDoComboDolar = gemsGastasComRestock * precoPorGem;
    let lucroDoComboCropFlower = calcularRestockCrops === 'sim' ? ganhoTotalComComboCropFlower - custoRestockDoComboFlower : ganhoTotalComComboCropFlower;

    let mediaRestock24h = (vinteQuatroHoras / tempoTotalDoCombo) * restockDoCombo || 0;
    let mediaGemsGastasRestock24h = mediaRestock24h * 15;
    let mediaCustoRestock24hFlower = mediaGemsGastasRestock24h * precoDaGemEmFlower;
    let mediaCustoRestock24hDolar = mediaGemsGastasRestock24h * precoPorGem;
    let lucroDoComboEm24h = (vinteQuatroHoras / tempoTotalDoCombo) * lucroDoComboCropFlower;
    let lucroDoComboSemanal = lucroDoComboEm24h * 7;

    let cardRestockECusto = calcularRestockCrops === 'sim' ?
        `<div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardCustoRestock}</h3>
            <p>${imgFlower} ${custoRestockDoComboFlower.toFixed(2)} ~ ${imgUsdc} ${custoRestockDoComboDolar.toFixed(2)}</p>
        </div>
        <div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardQtdRestock}</h3>
            <p>${imgRestock} ${restockDoCombo.toFixed(2)} ➜ ${imgGem} ${gemsGastasComRestock.toFixed(2)}</p>
        </div>` : '';

    let cardRestockECusto24h = calcularRestockCrops === 'sim' ?
        `<div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardQtdRestock24h}</h3>
            <p>${imgRestock} ${mediaRestock24h.toFixed(2)} ➜ ${imgGem} ${mediaGemsGastasRestock24h.toFixed(2)}</p>
        </div>
        <div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardCustoRestock24h}</h3>
            <p>${imgFlower} ${mediaCustoRestock24hFlower.toFixed(2)} ~ ${imgUsdc} ${mediaCustoRestock24hDolar.toFixed(2)}</p>
        </div>` : '';
        
    let cardResultados = `
        <div class="cards-totais-crops">
            <div class="card-total-crops">
                <h3>${imgTempo} ${idiomaDoTextoCrops.cardTempoTotal}</h3>
                <p>${formatarTempoTotalDoDia(tempoTotalDoCombo)}</p>
            </div>
            <h1>-</h1> 
            ${cardRestockECusto}
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroDoCombo}</h3>
                <p>${imgFlower} ${lucroDoComboCropFlower.toFixed(2)} ~ ${imgUsdc} ${Number(lucroDoComboCropFlower * precoDoFlower).toFixed(2)}</p>
            </div>
            <h1>-</h1> 
            ${cardRestockECusto24h}
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroEm24h}</h3>
                <p>${imgFlower} ${lucroDoComboEm24h.toFixed(2)} ~ ${imgUsdc} ${Number(lucroDoComboEm24h * precoDoFlower).toFixed(2)}</p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroSemanal}</h3>
                <p>${imgFlower} ${lucroDoComboSemanal.toFixed(2)} ~ ${imgUsdc} ${Number(lucroDoComboSemanal * precoDoFlower).toFixed(2)}</p>
            </div>
        </div>`;

    // Renderiza a Aba de Crops
    mostrarResultadoCrops.innerHTML = `
        <div class="tabelas-em-ordem">
            ${btnAjuda('crops')}
            ${cardResultados}
            ${tabelaCrops}        
        </div>
    `;

    // Atualiza variáveis globais de resultado
    resultadoComboCrop = ganhoTotalComComboCropFlower;
    resultadoTempoTotalCrop = tempoTotalDoCombo;

    // ==========================================
    // SEÇÃO B: TABELA DA CROP MACHINE
    // ==========================================
    let tempoTotalDoComboNaCM = 0;
    let lucroTotalDoComboCoinsNaCM = 0;
    let ganhoTotalDoComboFlowerNaCM = 0;
    let restockDoComboCM = 0;
    let oilTotalUsado = 0;

    let textoDefinirModoDeCalcularCropsCM = idiomaDoTextoCrops.calculoPorSemente;
    if (document.getElementById('tipo-de-calculo-crop-cm').value === 'manual') textoDefinirModoDeCalcularCropsCM = idiomaDoTextoCrops.calculoPorSemente;
    else if (document.getElementById('tipo-de-calculo-crop-cm').value === 'rodada') textoDefinirModoDeCalcularCropsCM = idiomaDoTextoCrops.calculoPorCiclo;
    else if (document.getElementById('tipo-de-calculo-crop-cm').value === 'estoque') textoDefinirModoDeCalcularCropsCM = idiomaDoTextoCrops.calculoPorEstoque;

    let tabelaTituloCM = `
        <tr>   
            <th>${idiomaDoTextoCrops.crop}<br>${idiomaDoTextoCrops.estoque}</th>
            <th>${idiomaDoTextoCrops.custoDaSemente}</th>
            <th>${idiomaDoTextoCrops.mediaPorPlot}<br>${idiomaDoTextoCrops.tempoDaCrop}</th>
            <th>${textoDefinirModoDeCalcularCropsCM} <br><button onclick="sementesPlantadasCM()">${idiomaDoTextoCrops.botaoSalvar}</button></th>
            <th>${idiomaDoTextoCrops.sementesUsadas}<br>${idiomaDoTextoCrops.totalDeCrops}</th>
            <th>${idiomaDoTextoCrops.tempoTotal}</th>
            <th>${idiomaDoTextoCrops.vendaDaCropNaBetty}</th>
            <th>${idiomaDoTextoCrops.valorDeVendaNoMarket} ${(taxa * 100).toFixed(2)}%</th>
            <th>${idiomaDoTextoCrops.melhorOpcao}</th>
            <th>${idiomaDoTextoCrops.lucroEmCoins}</th>
            <th>${idiomaDoTextoCrops.lucroVendendoNoMarket}</th>
            <th>${idiomaDoTextoCrops.lucroPorHora}</th>
        </tr>`;

    let tabelaCM = `<table class="tabela-crops"><thead>${tabelaTituloCM}</thead><tbody>`;
    let imgOil = sprite('oil', 'minerais');

    cropMachine.forEach(cropM => {
        if (!cropM.permitido) return;

        let sementesUsadas = Number(cropM.qtdSementeUsadas) || 0;
        let qtdPorPlot = Number(cropM.quantidade);
        let tempoDaCrop = Number(cropM.tempoFinal);
        let qtdTotal = Number(cropM.colheitaTotal) || 0;
        let tempoTotalDaCrop = (cropM.tempoTotal || 0);

        // Lógica exclusiva do custo e uso de Oil
        let custoDoOilEmCoins = mapaDeMinerals['oil'].mediaDeCustoCoins;
        let custoDoOilEmFlower = mapaDeMinerals['oil'].mediaDeCustoFlower;
        let oilPorCrop = ((oilPorHora / umaHora) * tempoDaCrop) / plotsCM;
        let custoDoOilPorCropCoins = oilPorCrop * custoDoOilEmCoins;
        let custoDoOilPorCropFlower = oilPorCrop * custoDoOilEmFlower;
        
        let oilGasto = (oilPorHora / umaHora) * tempoTotalDaCrop;
        let custoTotalComOilCoins = oilGasto * custoDoOilEmCoins;
        let custoTotalComOilFlower = oilGasto * custoDoOilEmFlower;
        
        let custoPorSementeCoins = Number(cropM.custoPorSemente);
        let custoPorSementeFlower = (1 / flowerEmCoins) * custoPorSementeCoins;

        let vendaPorCropEmCoins = Number(cropM.vendaPorCrop);
        let vendaPorCropEmCoinsConvertidas = (1 / flowerEmCoins) * vendaPorCropEmCoins;
        let valorPorCropEmFlower = Number(cropM.valorDoMarket);
        let valorPorCropEmFlowerMenosTaxa = valorPorCropEmFlower * (1 - taxa);

        // Lucros deduzindo Custo das Sementes + Custo do Oil
        let custoTotalComSementesCoins = sementesUsadas * custoPorSementeCoins;
        let vendaTotalCoins = qtdTotal * vendaPorCropEmCoins;
        let lucroCoins = vendaTotalCoins - (custoTotalComSementesCoins + custoTotalComOilCoins);
        let lucroCoinsConvertido = (1 / flowerEmCoins) * lucroCoins;

        let custoTotalComSementesFlower = (1 / flowerEmCoins) * (custoPorSementeCoins * sementesUsadas);
        let vendaTotalFlower = valorPorCropEmFlowerMenosTaxa * qtdTotal;
        let lucroFlower = cropM.seedsPlantadas == 0 || ilha === 'Basic' ? 0 : vendaTotalFlower - (custoTotalComSementesFlower + custoTotalComOilFlower);

        let estoque = Number(cropM.estoqueTotal);
        let qtdDeRestock = (sementesUsadas / estoque);

        let vendaPorPlotCoins = vendaPorCropEmCoins * qtdPorPlot;
        let lucroPorCicloPlantadoCoins = ((vendaPorPlotCoins - (custoPorSementeCoins + custoDoOilPorCropCoins)) * plotsCM);
        let lucroPorHoraCoins = (umaHora / tempoDaCrop) * lucroPorCicloPlantadoCoins;
        let lucroPorHoraCoinsConvertido = (1 / flowerEmCoins) * lucroPorHoraCoins;

        let vendaPorPlot = valorPorCropEmFlowerMenosTaxa * qtdPorPlot;
        let lucroPorCicloPlantado = ((vendaPorPlot - (custoPorSementeFlower + custoDoOilPorCropFlower)) * plotsCM);
        let lucroPorHora = (umaHora / tempoDaCrop) * lucroPorCicloPlantado;
        
        let melhorOpcao = valorPorCropEmFlowerMenosTaxa > vendaPorCropEmCoinsConvertidas ? `${imgFlower} Flower` : `${imgCoins} Coins`;
        let tdLucroPorHora = melhorOpcao.includes('Coins')
            ? `<span style="color:#4caf50;font-weight:bold">B ➜ ${imgFlower} ${lucroPorHoraCoinsConvertido.toFixed(4)}</span><br>M ➜ ${imgFlower} ${lucroPorHora.toFixed(4)}`
            : `B ➜ ${imgFlower} ${lucroPorHoraCoinsConvertido.toFixed(4)}<br><span style="color:#4caf50;font-weight:bold">M ➜ ${imgFlower} ${lucroPorHora.toFixed(4)}</span>`;

        let imgCrop = sprite(cropM.name);
        let imgSemente = sprite(`seed` + cropM.name);

        tabelaCM += `
        <tr>
            <td>${imgCrop} ${cropM.name}<br>${imgRestock} ${estoque}</td>
            <td>${imgCoins} ${custoPorSementeCoins}<br>${imgFlower} ${custoPorSementeFlower.toFixed(6)}</td>
            <td>${imgCrop} ${qtdPorPlot.toFixed(2)}<br>${imgTempo} ${formatarTempo(tempoDaCrop)}</td>
            <td><input type="number" data-name="${cropM.name}" class="quantidade-input sementesCM-input" value="${cropM.seedsPlantadas}"></td>
            <td>${imgSemente} ${sementesUsadas}<br>${imgCrop} ${qtdTotal.toFixed(2)}</td>
            <td>${imgTempo} ${formatarTempo(tempoTotalDaCrop)}</td>
            <td>${imgCoins} ${vendaPorCropEmCoins.toFixed(3)}<br>${imgFlower} ${vendaPorCropEmCoinsConvertidas.toFixed(6)}</td>
            <td>${imgCrop}<br>${imgFlower} ${valorPorCropEmFlowerMenosTaxa.toFixed(5)}</td>
            <td>${melhorOpcao}</td>
            <td>${imgCoins} ${lucroCoins.toFixed(2)}<br>${imgFlower} ${lucroCoinsConvertido.toFixed(5)}</td>
            <td>${imgCrop}<br>${imgFlower} ${lucroFlower.toFixed(5)}</td>
            <td>${tdLucroPorHora}</td>
        </tr>`;

        oilTotalUsado += oilGasto;
        tempoTotalDoComboNaCM += tempoTotalDaCrop;
        lucroTotalDoComboCoinsNaCM += lucroCoins;
        ganhoTotalDoComboFlowerNaCM += lucroFlower;
        if (qtdDeRestock > restockDoComboCM) restockDoComboCM = qtdDeRestock;
    });
    tabelaCM += `</tbody></table>`;

    // Cards de Resumo da Crop Machine
    let gemsGastasComRestockCM = restockDoComboCM * 15;
    let custoRestockDoComboFlowerCM = gemsGastasComRestockCM * precoDaGemEmFlower;
    let custoRestockDoComboDolarCM = gemsGastasComRestockCM * precoPorGem;
    let lucroTotalDoComboFlowerNaCM = calcularRestockCM === 'sim' ? ganhoTotalDoComboFlowerNaCM - custoRestockDoComboFlowerCM : ganhoTotalDoComboFlowerNaCM;

    let mediaRestock24hCM = (vinteQuatroHoras / tempoTotalDoComboNaCM) * restockDoComboCM || 0;
    let mediaGemsGastasRestock24hCM = mediaRestock24hCM * 15;
    let mediaCustoRestock24hFlowerCM = mediaGemsGastasRestock24hCM * precoDaGemEmFlower;
    let mediaCustoRestock24hDolarCM = mediaGemsGastasRestock24hCM * precoPorGem;
    let lucroDoComboEm24hCM = (vinteQuatroHoras / tempoTotalDoComboNaCM) * lucroTotalDoComboFlowerNaCM;
    let lucroDoComboSemanalCM = lucroDoComboEm24hCM * 7;

    let cardRestockECustoCM = calcularRestockCM === 'sim' ?
        `<div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardQtdRestock}</h3>
            <p>${imgRestock} ${restockDoComboCM.toFixed(2)} ➜ ${imgGem} ${gemsGastasComRestockCM.toFixed(2)}</p>
        </div>
        <div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardCustoRestock}</h3>
            <p>${imgFlower} ${custoRestockDoComboFlowerCM.toFixed(2)} ~ ${imgUsdc} ${custoRestockDoComboDolarCM.toFixed(2)}</p>
        </div>` : '';

    let cardRestockECusto24hCM = calcularRestockCM === 'sim' ?
        `<div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardQtdRestock24h}</h3>
            <p>${imgRestock} ${mediaRestock24hCM.toFixed(2)} ➜ ${imgGem} ${mediaGemsGastasRestock24hCM.toFixed(2)}</p>
        </div>
        <div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardCustoRestock24h}</h3>
            <p>${imgFlower} ${mediaCustoRestock24hFlowerCM.toFixed(2)} ~ ${imgUsdc} ${mediaCustoRestock24hDolarCM.toFixed(2)}</p>
        </div>` : '';

    let cardResultadosCM = `
        <div class="cards-totais-crops">
            <div class="card-total-crops">
                <h3>${imgTempo} ${idiomaDoTextoCrops.cardTempoTotal} - ${imgOil} ${idiomaDoTextoCrops.oilUsado}</h3>
                <p>${formatarTempoTotalDoDia(tempoTotalDoComboNaCM)} - ${imgOil} ${oilTotalUsado.toFixed(2)}</p>
            </div>
            <h1>-</h1>
            ${cardRestockECustoCM}
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroDoCombo}</h3>
                <p>${imgFlower} ${lucroTotalDoComboFlowerNaCM.toFixed(2)} ~ ${imgUsdc} ${Number(lucroTotalDoComboFlowerNaCM * precoDoFlower).toFixed(2)}</p>
            </div>
            <h1>-</h1>
            ${cardRestockECusto24hCM}
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroEm24h}</h3>
                <p>${imgFlower} ${lucroDoComboEm24hCM.toFixed(2)} ~ ${imgUsdc} ${Number(lucroDoComboEm24hCM * precoDoFlower).toFixed(2)}</p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroSemanal}</h3>
                <p>${imgFlower} ${lucroDoComboSemanalCM.toFixed(2)} ~ ${imgUsdc} ${Number(lucroDoComboSemanalCM * precoDoFlower).toFixed(2)}</p>
            </div>
        </div>`;

    // Dispara a injeção da tabela CM
    tabelaCropMachine(tabelaCM, cardResultadosCM);
    resultadoComboCropMachine = ganhoTotalDoComboFlowerNaCM;
    resultadoTempoTotalCropMachine = tempoTotalDoComboNaCM;

    // ==========================================
    // SEÇÃO C: TABELA DE FRUTAS
    // ==========================================
    let tempoTotalComboFrutas = 0;
    let lucroTotalDoComboFrutasCoins = 0;
    let ganhoTotalDoComboFrutasFlower = 0;
    let restockDoComboFrutas = 0;

    let textoDefinirModoDeCalcularFrutas = idiomaDoTextoCrops.calculoPorSemente;
    if (document.getElementById('tipo-de-calculo-fruta').value === 'manual') textoDefinirModoDeCalcularFrutas = idiomaDoTextoCrops.calculoPorSemente;
    else if (document.getElementById('tipo-de-calculo-fruta').value === 'rodada') textoDefinirModoDeCalcularFrutas = idiomaDoTextoCrops.calculoPorCiclo;

    let tabelaTituloFrutas = `
        <tr>
            <th>${idiomaDoTextoCrops.frutas}<br>${idiomaDoTextoCrops.estoque}</th>
            <th>${idiomaDoTextoCrops.custoDaSemente}</th>
            <th>${idiomaDoTextoCrops.mediaPorColeta}<br>${idiomaDoTextoCrops.tempoDaFruta}</th>
            <th>${textoDefinirModoDeCalcularFrutas} <br><button onclick="sementesPlantadasFrutas()">${idiomaDoTextoCrops.botaoSalvar}</button></th>
            <th>${idiomaDoTextoCrops.sementesUsadas}<br>${idiomaDoTextoCrops.totalDeFrutas}</th>      
            <th>${idiomaDoTextoCrops.tempoTotal}</th>
            <th>${idiomaDoTextoCrops.machadosUsados}<br>${idiomaDoTextoCrops.madeiraGanha}</th>
            <th>${idiomaDoTextoCrops.vendaDaFrutaNaBetty}</th>
            <th>${idiomaDoTextoCrops.valorDeVendaNoMarket} ${(taxa * 100).toFixed(2)}%</th>
            <th>${idiomaDoTextoCrops.melhorOpcao}</th>
            <th>${idiomaDoTextoCrops.lucroEmCoins}</th>
            <th>${idiomaDoTextoCrops.lucroVendendoNoMarket}</th>
            <th>${idiomaDoTextoCrops.lucroPorHora}</th>
        </tr>`;

    let tabelaFrutas = `<table class="tabela-crops"><thead>${tabelaTituloFrutas}</thead><tbody>`;

    fruits.forEach(fruta => {
        if (!fruta.estacao.includes(estacao)) return;

        let sementesUsadas = Number(fruta.qtdSementeUsadas);
        let qtdPorSemente = Number(fruta.quantidade);
        let tempoPorSemente = Number(fruta.tempoFinal);
        
        // Frutas tem colheitas múltiplas baseadas na duração da árvore
        let qtdPorColeta = qtdPorSemente / frutiferasDuram;
        let tempoPorColeta = fruta.tempoFinal / frutiferasDuram;
        let qtdTotal = Number(fruta.colheitaTotal);
        let tempoTotalDaFruta = fruta.tempoTotal;

        // Custos com o Machado (Axe)
        let custoDoMachadoCoins = mapaDeFerramentas['axe'].custoEmCoins;
        let custoDoMachadoConvertidoEmFlower = (1 / flowerEmCoins) * custoDoMachadoCoins;
        let machadoPorSemente = fruta.axe;
        let custoDoMachadoPorSementeCoins = machadoPorSemente * custoDoMachadoCoins;
        let custoDoMachadoPorSementeFlower = machadoPorSemente * custoDoMachadoConvertidoEmFlower;
        let machadosUsados = fruta.totalAxe;
        let custoTotalComMachadosCoins = machadosUsados * custoDoMachadoCoins;
        let custoTotalComMachadosFlower = machadosUsados * custoDoMachadoConvertidoEmFlower;

        // Lucros bônus com Madeira cortada da árvore
        let valorDaMadeiraFlower = (mapaDeMinerals['wood'].valorDoMarket) * (1 - taxa);
        let valorDaMadeiraConvertidaEmCoins = valorDaMadeiraFlower * flowerEmCoins;
        let madeiraPorSemente = fruta.wood;
        let ganhoComMadeiraPorSementeCoins = madeiraPorSemente * valorDaMadeiraConvertidaEmCoins;
        let ganhoComMadeiraPorSementeFlower = madeiraPorSemente * valorDaMadeiraFlower;
        let madeirasGanhas = fruta.totalWood;
        let ganhoTotalComMadeiraCoins = madeirasGanhas * valorDaMadeiraConvertidaEmCoins;
        let ganhoTotalComMadeiraFlower = madeirasGanhas * valorDaMadeiraFlower;

        let custoPorSementeCoins = Number(fruta.custoPorSemente);
        let custoPorSementeFlower = (1 / flowerEmCoins) * custoPorSementeCoins;

        let vendaPorFrutaEmCoins = Number(fruta.vendaPorFruta);
        let vendaPorFrutaEmCoinsConvertidas = (1 / flowerEmCoins) * vendaPorFrutaEmCoins;
        let valorPorFrutaEmFlower = Number(fruta.valorDoMarket);
        let valorPorFrutaEmFlowerMenosTaxa = valorPorFrutaEmFlower * (1 - taxa);

        // Lucros considerando a Madeira ganha e o Machado gasto
        let custoTotalCoins = (sementesUsadas * custoPorSementeCoins) + custoTotalComMachadosCoins;
        let vendaTotalCoins = (qtdTotal * vendaPorFrutaEmCoins) + ganhoTotalComMadeiraCoins;
        let lucroCoins = vendaTotalCoins - custoTotalCoins;
        let lucroCoinsConvertido = (1 / flowerEmCoins) * lucroCoins;

        let custoTotalFlower = (sementesUsadas * custoPorSementeFlower) + custoTotalComMachadosFlower;
        let vendaTotalFlower = (valorPorFrutaEmFlowerMenosTaxa * qtdTotal) + ganhoTotalComMadeiraFlower;
        let lucroFlower = fruta.seedsPlantadas == 0 || ilha === 'Basic' ? 0 : vendaTotalFlower - custoTotalFlower;

        let estoque = Number(fruta.estoqueFinal);
        let qtdDeRestock = (sementesUsadas / estoque);

        let vendaPorSementePlantadaCoins = (vendaPorFrutaEmCoins * qtdPorSemente) + ganhoComMadeiraPorSementeCoins;
        let custoPorSementePlantadaCoins = custoPorSementeCoins + custoDoMachadoPorSementeCoins;
        let lucroPorCicloPlantadoCoins = (vendaPorSementePlantadaCoins - custoPorSementePlantadaCoins) * plotsFrutas;
        let lucroPorHoraCoins = (umaHora / tempoPorSemente) * lucroPorCicloPlantadoCoins;
        let lucroPorHoraCoinsConvertida = (1 / flowerEmCoins) * lucroPorHoraCoins;

        let vendaPorSementePlantada = (valorPorFrutaEmFlowerMenosTaxa * qtdPorSemente) + ganhoComMadeiraPorSementeFlower;
        let custoPorSementePlantada = custoPorSementeFlower + custoDoMachadoPorSementeFlower;
        let lucroPorCicloPlantado = (vendaPorSementePlantada - custoPorSementePlantada) * plotsFrutas;
        let lucroPorHora = (umaHora / tempoPorSemente) * lucroPorCicloPlantado;
        
        let melhorOpcao = valorPorFrutaEmFlowerMenosTaxa > vendaPorFrutaEmCoinsConvertidas ? `${imgFlower} Flower` : `${imgCoins} Coins`;
        let tdLucroPorHora = melhorOpcao.includes('Coins')
            ? `<span style="color:#4caf50;font-weight:bold">B ➜ ${imgFlower} ${lucroPorHoraCoinsConvertida.toFixed(4)}</span><br>M ➜ ${imgFlower} ${lucroPorHora.toFixed(4)}`
            : `B ➜ ${imgFlower} ${lucroPorHoraCoinsConvertida.toFixed(4)}<br><span style="color:#4caf50;font-weight:bold">M ➜ ${imgFlower} ${lucroPorHora.toFixed(4)}</span>`;

        let imgFrutas = sprite(fruta.name);
        let imgSemente = sprite(`seed` + fruta.name);

        tabelaFrutas += `
        <tr>
            <td>${imgFrutas} ${fruta.name}<br>${imgRestock} ${estoque}</td>
            <td>${imgCoins} ${custoPorSementeCoins.toFixed(2)}<br>${imgFlower} ${custoPorSementeFlower.toFixed(6)}</td>
            <td>${imgFrutas} ${qtdPorColeta.toFixed(2)}<br>${imgTempo} ${formatarTempo(tempoPorColeta)}</td>
            <td><input type="number" data-name="${fruta.name}" class="quantidade-input sementesFrutas-input" value="${fruta.seedsPlantadas}"></td>
            <td>${imgSemente} ${sementesUsadas}<br>${imgFrutas} ${qtdTotal.toFixed(2)}</td>
            <td>${imgTempo} ${formatarTempo(tempoTotalDaFruta)}</td>
            <td>${imgMachado} ${machadosUsados}<br>${imgMadeira} ${Number(madeirasGanhas).toFixed(2)}</td>
            <td>${imgCoins} ${vendaPorFrutaEmCoins.toFixed(2)}<br>${imgFlower} ${vendaPorFrutaEmCoinsConvertidas.toFixed(6)}</td>
            <td>${imgFrutas}<br>${imgFlower} ${valorPorFrutaEmFlower.toFixed(5)}</td>
            <td>${melhorOpcao}</td>
            <td>${imgFrutas} + ${imgMadeira}<br>${imgCoins} ${lucroCoins.toFixed(2)}</td>
            <td>${imgFrutas} + ${imgMadeira}<br>${imgFlower} ${lucroFlower.toFixed(5)}</td>
            <td>${tdLucroPorHora}</td>
        </tr>`;

        tempoTotalComboFrutas += tempoTotalDaFruta;
        lucroTotalDoComboFrutasCoins += lucroCoins;
        ganhoTotalDoComboFrutasFlower += lucroFlower;
        if (qtdDeRestock > restockDoComboFrutas) restockDoComboFrutas = qtdDeRestock;
    });
    tabelaFrutas += `</tbody></table>`;

    // Cards de Resumo das Frutas
    let gemsGastasComRestockFrutas = restockDoComboFrutas * 15;
    let custoRestockDoComboFlowerFrutas = gemsGastasComRestockFrutas * precoDaGemEmFlower;
    let custoRestockDoComboDolarFrutas = gemsGastasComRestockFrutas * precoPorGem;
    let lucroTotalDoComboFrutasFlower = calcularRestockFrutas === 'sim' ? ganhoTotalDoComboFrutasFlower - custoRestockDoComboFlowerFrutas : ganhoTotalDoComboFrutasFlower;

    let mediaRestock24hFrutas = (vinteQuatroHoras / tempoTotalComboFrutas) * restockDoComboFrutas || 0;
    let mediaGemsGastasRestock24hFrutas = mediaRestock24hFrutas * 15;
    let mediaCustoRestock24hFlowerFrutas = mediaGemsGastasRestock24hFrutas * precoDaGemEmFlower;
    let mediaCustoRestock24hDolarFrutas = mediaGemsGastasRestock24hFrutas * precoPorGem;
    let lucroDoComboEm24hFrutas = (vinteQuatroHoras / tempoTotalComboFrutas) * lucroTotalDoComboFrutasFlower;
    let lucroDoComboSemanalFrutas = lucroDoComboEm24hFrutas * 7;

    let cardRestockECustoFrutas = calcularRestockFrutas === 'sim' ?
        `<div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardQtdRestock}</h3>
            <p>${imgRestock} ${restockDoComboFrutas.toFixed(2)} ➜ ${imgGem} ${gemsGastasComRestockFrutas.toFixed(2)}</p>
        </div>
        <div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardCustoRestock}</h3>
            <p>${imgFlower} ${custoRestockDoComboFlowerFrutas.toFixed(2)} ~ ${imgUsdc} ${custoRestockDoComboDolarFrutas.toFixed(2)}</p>
        </div>` : '';   

    let cardRestockECusto24hFrutas = calcularRestockFrutas === 'sim' ?
        `<div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardQtdRestock24h}</h3>
            <p>${imgRestock} ${mediaRestock24hFrutas.toFixed(2)} ➜ ${imgGem} ${mediaGemsGastasRestock24hFrutas.toFixed(2)}</p>
        </div>
        <div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardCustoRestock24h}</h3>
            <p>${imgFlower} ${mediaCustoRestock24hFlowerFrutas.toFixed(2)} ~ ${imgUsdc} ${mediaCustoRestock24hDolarFrutas.toFixed(2)}</p>
        </div>` : '';

    let cardResultadosFrutas = `
        <div class="cards-totais-crops">
            <div class="card-total-crops">
                <h3>${imgTempo} ${idiomaDoTextoCrops.cardTempoTotal}</h3>
                <p>${formatarTempoTotalDoDia(tempoTotalComboFrutas)}</p>
            </div>
            <h1>-</h1>
            ${cardRestockECustoFrutas}
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroDoCombo}</h3>
                <p>${imgFlower} ${lucroTotalDoComboFrutasFlower.toFixed(2)} ~ ${imgUsdc} ${(lucroTotalDoComboFrutasFlower * precoDoFlower).toFixed(2)}</p>
            </div>
            <h1>-</h1>
            ${cardRestockECusto24hFrutas}
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroEm24h}</h3>
                <p>${imgFlower} ${lucroDoComboEm24hFrutas.toFixed(2)} ~ ${imgUsdc} ${(lucroDoComboEm24hFrutas * precoDoFlower).toFixed(2)}</p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroSemanal}</h3>
                <p>${imgFlower} ${lucroDoComboSemanalFrutas.toFixed(2)} ~ ${imgUsdc} ${(lucroDoComboSemanalFrutas * precoDoFlower).toFixed(2)}</p>
            </div>
        </div>`;

    // Dispara a injeção da tabela de Frutas
    tabelaDeFrutas(tabelaFrutas, cardResultadosFrutas);
    resultadoComboFruta = ganhoTotalDoComboFrutasFlower;
    resultadoTempoTotalFrutas = tempoTotalComboFrutas;

    // ==========================================
    // SEÇÃO D: TABELA DA GREENHOUSE
    // ==========================================
    let tempoTotalComboGH = 0;
    let lucroTotalDoComboGHCoins = 0;
    let ganhoTotalDoComboGHFlower = 0;
    let restockDoComboGH = 0;

    let textoDefinirModoDeCalcularGH = idiomaDoTextoCrops.calculoPorSemente;
    if (document.getElementById('tipo-de-calculo-greenhouse').value === 'manual') textoDefinirModoDeCalcularGH = idiomaDoTextoCrops.calculoPorSemente;
    else if (document.getElementById('tipo-de-calculo-greenhouse').value === 'rodada') textoDefinirModoDeCalcularGH = idiomaDoTextoCrops.calculoPorCiclo;

    let tabelaTituloGH = `
    <tr>
        <th>${idiomaDoTextoCrops.crop}<br>${idiomaDoTextoCrops.estoque}</th>
        <th>${idiomaDoTextoCrops.custoDaSemente}</th>
        <th>${idiomaDoTextoCrops.mediaPorPlot}<br>${idiomaDoTextoCrops.tempoDaCrop}</th>
        <th>${textoDefinirModoDeCalcularGH} <br><button onclick="sementesPlantadasGH()">${idiomaDoTextoCrops.botaoSalvar}</button></th>
        <th>${idiomaDoTextoCrops.sementesUsadas}<br>${idiomaDoTextoCrops.totalDeCrops}</th>      
        <th>${idiomaDoTextoCrops.tempoTotal}<br>${idiomaDoTextoCrops.oilGasto}</th>
        <th>${idiomaDoTextoCrops.vendaDaCropNaBetty}</th>
        <th>${idiomaDoTextoCrops.valorDeVendaNoMarket} ${(taxa * 100).toFixed(2)}%</th>
        <th>${idiomaDoTextoCrops.melhorOpcao}</th>
        <th>${idiomaDoTextoCrops.lucroEmCoins}</th>
        <th>${idiomaDoTextoCrops.lucroVendendoNoMarket}</th>
        <th>${idiomaDoTextoCrops.lucroPorHora}</th>
    </tr>`;

    let tabelaGreenhouse = `<table class="tabela-crops"><thead>${tabelaTituloGH}</thead><tbody>`;

    greenhouse.forEach(gh => {
        let sementesUsadas = Number(gh.qtdSementeUsadas);
        let qtdPorPlot = Number(gh.quantidade);
        let tempoDaCrop = Number(gh.tempoFinal);
        let qtdTotal = Number(gh.colheitaTotal);
        let tempoTotalDaGH = Number(gh.tempoTotal);
        
        // Oil da Greenhouse
        let custoDoOilEmCoins = mapaDeMinerals['oil'].mediaDeCustoCoins;
        let custoDoOilEmFlower = mapaDeMinerals['oil'].mediaDeCustoFlower;
        let oilPorCrop = Number(gh.oilFinal);
        let custoDoOilPorCropCoins = oilPorCrop * custoDoOilEmCoins;
        let custoDoOilPorCropFlower = oilPorCrop * custoDoOilEmFlower;
        let oilTotal = Number(gh.oilTotal);
        let custoTotalComOilCoins = oilTotal * custoDoOilEmCoins;
        let custoTotalComOilFlower = oilTotal * custoDoOilEmFlower;

        let custoPorSementeCoins = Number(gh.custoPorSemente);
        let custoPorSementeFlower = (1 / flowerEmCoins) * custoPorSementeCoins;

        let vendaPorCropEmCoins = Number(gh.vendaPorCrop);
        let vendaPorCropEmCoinsConvertidas = (1 / flowerEmCoins) * vendaPorCropEmCoins;
        let valorPorCropEmFlower = Number(gh.valorDoMarket);
        let valorPorCropEmFlowerMenosTaxa = valorPorCropEmFlower * (1 - taxa);

        // Subtrai custo de semente e custo do Oil da GH
        let custoTotalComSementesCoins = sementesUsadas * custoPorSementeCoins;
        let vendaTotalCoins = qtdTotal * vendaPorCropEmCoins;
        let lucroCoins = vendaTotalCoins - (custoTotalComSementesCoins + custoTotalComOilCoins);
        let lucroCoinsConvertido = (1 / flowerEmCoins) * lucroCoins;

        let custoTotalComSementesFlower = custoPorSementeFlower * sementesUsadas;
        let vendaTotalFlower = valorPorCropEmFlowerMenosTaxa * qtdTotal;
        let lucroFlower = gh.seedsPlantadas == 0 || ilha === 'Basic' ? 0 : vendaTotalFlower - (custoTotalComSementesFlower + custoTotalComOilFlower);

        let estoque = Number(gh.estoqueFinal);
        let qtdDeRestock = sementesUsadas / estoque;

        let vendaPorPlotCoins = vendaPorCropEmCoins * qtdPorPlot;
        let lucroPorCicloPlantadoCoins = ((vendaPorPlotCoins - (custoPorSementeCoins + custoDoOilPorCropCoins)) * plotsGH);
        let lucroPorHoraCoins = (umaHora / tempoDaCrop) * lucroPorCicloPlantadoCoins;
        let lucroPorHoraCoinsConvertido = (1 / flowerEmCoins) * lucroPorHoraCoins;

        let vendaPorPlot = valorPorCropEmFlowerMenosTaxa * qtdPorPlot;
        let lucroPorCicloPlantado = ((vendaPorPlot - (custoPorSementeFlower + custoDoOilPorCropFlower)) * plotsGH);
        let lucroPorHora = (umaHora / tempoDaCrop) * lucroPorCicloPlantado;

        let melhorOpcao = valorPorCropEmFlowerMenosTaxa > vendaPorCropEmCoinsConvertidas ? `${imgFlower} Flower` : `${imgCoins} Coins`;
        let tdLucroPorHora = melhorOpcao.includes('Coins')
            ? `<span style="color:#4caf50;font-weight:bold">B ➜ ${imgFlower} ${lucroPorHoraCoinsConvertido.toFixed(4)}</span><br>M ➜ ${imgFlower} ${lucroPorHora.toFixed(4)}`
            : `B ➜ ${imgFlower} ${lucroPorHoraCoinsConvertido.toFixed(4)}<br><span style="color:#4caf50;font-weight:bold">M ➜ ${imgFlower} ${lucroPorHora.toFixed(4)}</span>`;

        let imgCropGH = sprite(gh.name);
        let imgSemente = sprite(`seed` + gh.name);
        
        tabelaGreenhouse += `
        <tr>
            <td>${imgCropGH} ${gh.name}<br>${imgRestock} ${estoque}</td>
            <td>${imgCoins} ${custoPorSementeCoins}<br>${imgFlower} ${custoPorSementeFlower.toFixed(5)}</td>
            <td>${imgCropGH} ${qtdPorPlot.toFixed(2)} (${imgOil} ${oilPorCrop})<br>${imgTempo} ${formatarTempo(tempoDaCrop)}</td>
            <td><input type="number" data-name="${gh.name}" class="quantidade-input sementesGH-input" value="${gh.seedsPlantadas}"></td>
            <td>${imgSemente} ${sementesUsadas}<br>${imgCropGH} ${qtdTotal.toFixed(2)}</td>
            <td>${imgTempo} ${formatarTempo(tempoTotalDaGH)}<br>${imgOil} ${oilTotal}</td>
            <td>${imgCoins} ${vendaPorCropEmCoins}<br>${imgFlower} ${vendaPorCropEmCoinsConvertidas.toFixed(4)}</td>
            <td>${imgCropGH}<br>${imgFlower} ${valorPorCropEmFlowerMenosTaxa.toFixed(5)}</td>
            <td>${melhorOpcao}</td>
            <td>${imgCoins} ${lucroCoins.toFixed(2)}<br>${imgFlower} ${lucroCoinsConvertido.toFixed(5)}</td>
            <td>${imgCropGH}<br>${imgFlower} ${lucroFlower.toFixed(5)}</td>
            <td>${tdLucroPorHora}</td>
        </tr>`;

        tempoTotalComboGH += tempoTotalDaGH;
        lucroTotalDoComboGHCoins += lucroCoins;
        ganhoTotalDoComboGHFlower += lucroFlower;
        if (qtdDeRestock > restockDoComboGH) restockDoComboGH = qtdDeRestock;
    });
    tabelaGreenhouse += `</tbody></table>`;

    // Cards de Resumo da Greenhouse
    let gemsGastasComRestockGH = restockDoComboGH * 15;
    let custoRestockDoComboFlowerGH = gemsGastasComRestockGH * precoDaGemEmFlower;
    let custoRestockDoComboDolarGH = gemsGastasComRestockGH * precoPorGem;
    let lucroTotalDoComboGHFlower = calcularRestockGreenhouse === 'sim' ? ganhoTotalDoComboGHFlower - custoRestockDoComboFlowerGH : ganhoTotalDoComboGHFlower;

    let mediaRestock24hGH = (vinteQuatroHoras / tempoTotalComboGH) * restockDoComboGH || 0;
    let mediaGemsGastasRestock24hGH = mediaRestock24hGH * 15;
    let mediaCustoRestock24hFlowerGH = mediaGemsGastasRestock24hGH * precoDaGemEmFlower;
    let mediaCustoRestock24hDolarGH = mediaGemsGastasRestock24hGH * precoPorGem;
    let lucroDoComboEm24hGH = (vinteQuatroHoras / tempoTotalComboGH) * lucroTotalDoComboGHFlower;
    let lucroDoComboSemanalGH = lucroDoComboEm24hGH * 7;

    let cardRestockECustoGreenhouse = calcularRestockGreenhouse === 'sim' ?
        `<div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardQtdRestock}</h3>
            <p>${imgRestock} ${restockDoComboGH.toFixed(2)} ➜ ${imgGem} ${gemsGastasComRestockGH.toFixed(2)}</p>
        </div>
        <div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardCustoRestock}</h3>
            <p>${imgFlower} ${custoRestockDoComboFlowerGH.toFixed(2)} ~ ${imgUsdc} ${custoRestockDoComboDolarGH.toFixed(2)}</p>
        </div>` : '';
        
    let cardRestockECusto24hGreenhouse = calcularRestockGreenhouse === 'sim' ?
        `<div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardQtdRestock24h}</h3>
            <p>${imgRestock} ${mediaRestock24hGH.toFixed(2)} ➜ ${imgGem} ${mediaGemsGastasRestock24hGH.toFixed(2)}</p>
        </div>
        <div class="card-total-crops">
            <h3>${idiomaDoTextoCrops.cardCustoRestock24h}</h3>
            <p>${imgFlower} ${mediaCustoRestock24hFlowerGH.toFixed(2)} ~ ${imgUsdc} ${mediaCustoRestock24hDolarGH.toFixed(2)}</p>
        </div>` : '';

    let cardResultadosGH = `
        <div class="cards-totais-crops">
            <div class="card-total-crops">
                <h3>${imgTempo} ${idiomaDoTextoCrops.cardTempoTotal}</h3>
                <p>${formatarTempoTotalDoDia(tempoTotalComboGH)}</p>
            </div>
            <h1>-</h1>
            ${cardRestockECustoGreenhouse}
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroDoCombo}</h3>
                <p>${imgFlower} ${lucroTotalDoComboGHFlower.toFixed(2)} ~ ${imgUsdc} ${(lucroTotalDoComboGHFlower * precoDoFlower).toFixed(2)}</p>
            </div>
            <h1>-</h1>
            ${cardRestockECusto24hGreenhouse}
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroEm24h}</h3>
                <p>${imgFlower} ${lucroDoComboEm24hGH.toFixed(2)} ~ ${imgUsdc} ${(lucroDoComboEm24hGH * precoDoFlower).toFixed(2)}</p>
            </div>
            <h1>-</h1>
            <div class="card-total-crops">
                <h3>${idiomaDoTextoCrops.cardLucroSemanal}</h3>
                <p>${imgFlower} ${lucroDoComboSemanalGH.toFixed(2)} ~ ${imgUsdc} ${(lucroDoComboSemanalGH * precoDoFlower).toFixed(2)}</p>
            </div>
        </div>`;

    tabelaDaGreenhouse(tabelaGreenhouse, cardResultadosGH);
    resultadoComboGreenhouse = ganhoTotalDoComboGHFlower;
    resultadoTempoTotalGreenhouse = tempoTotalComboGH;

    // ==========================================
    // CÁLCULO GERAL DO RESTOCK DO COMBO INTEIRO
    // ==========================================
    resultadoRestockDasSementes24h = 0;
    if (mediaRestock24h > resultadoRestockDasSementes24h) resultadoRestockDasSementes24h = mediaRestock24h;
    if (mediaRestock24hCM > resultadoRestockDasSementes24h) resultadoRestockDasSementes24h = mediaRestock24hCM;
    if (mediaRestock24hFrutas > resultadoRestockDasSementes24h) resultadoRestockDasSementes24h = mediaRestock24hFrutas;
    if (mediaRestock24hGH > resultadoRestockDasSementes24h) resultadoRestockDasSementes24h = mediaRestock24hGH;

    // Chama o painel que une o total de todas as áreas
    cardResultadoTotalDosCombosJuntos();
};

// ========================================================================================================================
// 5. FUNÇÕES AUXILIARES DE RENDERIZAÇÃO
// ========================================================================================================================
// Injetam os blocos de HTML criados dentro das divs da tela principal

function tabelaCropMachine(tabelaCM, cardResultadosCM) {
    mostrarResultadoCropMachine.innerHTML = `
        <div class="tabelas-em-ordem">
            ${btnAjuda('cropMachine')}
            ${cardResultadosCM}    
            ${tabelaCM}
        </div>
    `;
}

function tabelaDeFrutas(tabelaFrutas, cardResultadosFrutas) {
    mostrarResultadoFrutas.innerHTML = `
        <div class="tabelas-em-ordem">
            ${btnAjuda('frutas')}
            ${cardResultadosFrutas}   
            ${tabelaFrutas}    
        </div>
    `;
}

function tabelaDaGreenhouse(tabelaGreenhouse, cardResultadosGH) {
    mostrarResultadoGreenhouse.innerHTML = `
        <div class="tabelas-em-ordem">
            ${btnAjuda('greenhouse')}
            ${cardResultadosGH} 
            ${tabelaGreenhouse}    
        </div>
    `;
}