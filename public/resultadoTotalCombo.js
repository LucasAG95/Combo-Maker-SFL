//Acordion Resultado Combo
document.addEventListener('click', function (e) {
  const header = e.target.closest('.accordion-header-combo');
  if (!header) return;

  const content = header.nextElementSibling;

  header.classList.toggle('active');
  content.classList.toggle('open');
});

const mostrarResultadoDoComboCompleto = document.getElementById('resultado-do-combo-completo');

function cardResultadoTotalDosCombosJuntos() {

    let restock24hSementes = resultadoRestockDasSementes24h;
    let restock24hFerramentas = resultadoRestockDasFerramentas24h;
    let restock24hConjunto = 0;

    //para mostrar quantos restocks foram feitos no total durante o dia! Mediando e Somando Sementes e Ferramentas!
    let qtdDeRestockDoComboEm24h = 0;

    if (restock24hSementes > restock24hFerramentas) {
        qtdDeRestockDoComboEm24h = restock24hSementes;
        restock24hSementes -= restock24hFerramentas;
        restock24hConjunto = restock24hFerramentas;
        restock24hFerramentas = 0;

    } else if (restock24hFerramentas > restock24hSementes) {
        qtdDeRestockDoComboEm24h = restock24hFerramentas;
        restock24hFerramentas -= restock24hSementes;
        restock24hConjunto = restock24hSementes;
        restock24hSementes = 0;

    } else {
        restock24hConjunto = restock24hFerramentas;
        qtdDeRestockDoComboEm24h = restock24hConjunto;
        restock24hFerramentas = 0;
        restock24hSementes = 0;
        
    };

    let gemsGastasRestockSementes = restock24hSementes * 15;
    let gemsGastasRestockFerramentas = restock24hFerramentas * 10;
    let gemsGastasRestockConjunto = restock24hConjunto * 20;
    let totalDeGemsGastasComRestock = gemsGastasRestockConjunto + gemsGastasRestockSementes + gemsGastasRestockFerramentas;
    let custoTotalDeGemsEmFlower = totalDeGemsGastasComRestock * precoDaGemEmFlower;

    console.log(`restock de semente: ${restock24hSementes}`);
    console.log(`restock de ferramentas: ${restock24hFerramentas}`);
    console.log(`restock de conjunto: ${restock24hConjunto}`);

    //fazendo a média de 24h
    let lucroDasCrops24h = ((vinteQuatroHoras / resultadoTempoTotalCrop) * resultadoComboCrop) || 0;
    let lucroDaCropMachine24h = ((vinteQuatroHoras / resultadoTempoTotalCropMachine) * resultadoComboCropMachine) || 0;
    let lucroDasFrutas24h = ((vinteQuatroHoras / resultadoTempoTotalFrutas) * resultadoComboFruta) || 0;
    let lucroDaGreenhouse24h = ((vinteQuatroHoras / resultadoTempoTotalGreenhouse) * resultadoComboGreenhouse) || 0;
    let lucroDaMinerios24h = resultadoComboMinerais || 0;

    let ganhoTotal = Number(lucroDasCrops24h + lucroDaCropMachine24h + lucroDasFrutas24h + lucroDaGreenhouse24h + lucroDaMinerios24h - custoTotalDeGemsEmFlower);

    let idiomaComboTotal = traducoesCardsComboTotal[idioma];

    let cardResultadosTotais24h = `
        <h1>${idiomaComboTotal.mediaDiaria}</h1>

        <div class="cards-totais-crops">

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.crops}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDasCrops24h.toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${(lucroDasCrops24h * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <h1>+</h1>
            
            <div class="card-total-crops">
                <h3>${idiomaComboTotal.cropMachine}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDaCropMachine24h.toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${(lucroDaCropMachine24h * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <h1>+</h1>

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.frutas}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDasFrutas24h.toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${(lucroDasFrutas24h * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <h1>+</h1>

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.greenhouse}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDaGreenhouse24h.toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${(lucroDaGreenhouse24h * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <h1>+</h1>

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.minerais}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroDaMinerios24h.toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${(lucroDaMinerios24h * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <h1>-</h1>

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.restock}</h3>
                <p>
                    <img src="./icones/reestock.png" class="crop-img">${qtdDeRestockDoComboEm24h.toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${totalDeGemsGastasComRestock.toFixed(2)}<br>
                    <img src="./icones/flower.png" class="crop-img">${(totalDeGemsGastasComRestock * precoDaGemEmFlower).toFixed(2)} ~ <img src="./icones/usdc.png" class="crop-img">${(totalDeGemsGastasComRestock * precoPorGem).toFixed(2)}
                </p>
            </div>

            <h1>=</h1>

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.lucroTotal}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${ganhoTotal.toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${(ganhoTotal * precoDoFlower).toFixed(2)}
                </p>
            </div>

        </div>
        `;

    //===================================================================================================================================

    let cardResultadosTotais7d = `
        <h1>${idiomaComboTotal.mediaSemanal}</h1>

        <div class="cards-totais-crops">

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.crops}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${(lucroDasCrops24h * 7).toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${((lucroDasCrops24h * precoDoFlower) * 7).toFixed(2)}
                </p>
            </div>

            <h1>+</h1>
            
            <div class="card-total-crops">
                <h3>${idiomaComboTotal.cropMachine}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${(lucroDaCropMachine24h * 7).toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${((lucroDaCropMachine24h * precoDoFlower) * 7).toFixed(2)}
                </p>
            </div>

            <h1>+</h1>

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.frutas}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${(lucroDasFrutas24h * 7).toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${((lucroDasFrutas24h * precoDoFlower) * 7).toFixed(2)}
                </p>
            </div>

            <h1>+</h1>

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.greenhouse}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${(lucroDaGreenhouse24h * 7).toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${((lucroDaGreenhouse24h * precoDoFlower) * 7).toFixed(2)}
                </p>
            </div>

            <h1>+</h1>

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.minerais}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${(lucroDaMinerios24h * 7).toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${((lucroDaMinerios24h * precoDoFlower) * 7).toFixed(2)}
                </p>
            </div>

            <h1>-</h1>

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.restock}</h3>
                <p>
                    <img src="./icones/reestock.png" class="crop-img">${(qtdDeRestockDoComboEm24h * 7).toFixed(2)} ➜ <img src="./icones/gem.png" class="crop-img">${(totalDeGemsGastasComRestock * 7).toFixed(2)}<br>
                    <img src="./icones/flower.png" class="crop-img">${((totalDeGemsGastasComRestock * precoDaGemEmFlower) * 7).toFixed(2)} ~ <img src="./icones/usdc.png" class="crop-img">${((totalDeGemsGastasComRestock * precoPorGem) * 7).toFixed(2)}
                </p>
            </div>

            <h1>=</h1>

            <div class="card-total-crops">
                <h3>${idiomaComboTotal.lucroTotal}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${(ganhoTotal * 7).toFixed(2)}<br>
                    <img src="./icones/usdc.png" class="crop-img">${((ganhoTotal * precoDoFlower) * 7).toFixed(2)}
                </p>
            </div>

        </div>
        `;

    let resultadoEscolhido = document.getElementById('visualizar-resultado-do-combo').value === 'diario' ? cardResultadosTotais24h : cardResultadosTotais7d;
    
    mostrarResultadoDoComboCompleto.innerHTML = `
        <div class="tabelas-em-ordem">
            ${resultadoEscolhido}
        </div>
    `;
};

traducoesCardsComboTotal = {
    portugues: {
        mediaDiaria: 'Média diária!',
        mediaSemanal: 'Média semanal!',
        crops: 'Crops',
        cropMachine: 'Crop Machine',
        frutas: 'Frutas',
        greenhouse: 'Greenhouse',
        minerais: 'Minerais',
        restock: 'Gasto com Restock',
        lucroTotal: 'Lucro Total',
    },
    ingles: {
        mediaDiaria: 'Daily Average!',
        mediaSemanal: 'Weekly Average!',
        crops: 'Crops',
        cropMachine: 'Crop Machine',
        frutas: 'Fruits',
        greenhouse: 'Greenhouse',
        minerais: 'Minerals',
        restock: 'Restock Cost',
        lucroTotal: 'Total Profit',
    }
};