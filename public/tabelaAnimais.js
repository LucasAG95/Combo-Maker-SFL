const mostrarResultadoGalinhas = document.getElementById('saida-das-galinhas');
const mostrarResultadoVacas = document.getElementById('saida-das-vacas');
const mostrarResultadoOvelhas = document.getElementById('saida-das-ovelhas');

const idiomaTabelaAnimais = {
    portugues: {
        //todos animais
        level: 'Level',
        xpTotal: 'XP Total',
        xpNecessarioProProximoLevel: 'XP Necessário',
        mediaDeXpComCarinho: 'Média de XP<br>com Carinho',
        xpRestanteDoLevelAnterior: 'XP restante do<br>Level Anterior',
        comidaNecessaria: 'Comida Necessária<br>XP Obtido',
        xpPorUnidadeDeComida: 'XP por Unidade',
        salvar: 'Salvar',
        custoMedioPorDiaEmComida: 'Custo Médio<br>diário em Comida',
        lucroTotal: 'Lucro Total',
        taxa: 'Taxa',
        vendaDaSemana: 'Bounties<br>da Semana ',

        cardLucroTotalPorDia: 'Lucro<br>por Dia',
        cardCustoSemanalDaComida: 'Custo Semanal<br>da Comida',
        cardLucroSemanal: 'Lucro<br>Semanal',

        avisoDaVendaDeAnimaisPt1: 'Você só possui',
        avisoDaVendaDeAnimaisPt3: 'para vender. Arrumei para você, mas preencha corretamente se não quiser me ver novamente! 😅',
        

        //exclusivo galinhas
        mediaDeRecursosPorGalinha: 'Recursos<br>por Galinha',
        galinhasQueVaiCriar: 'Inserir galinhas',
        mediaDePenasEOvosPorDia: 'Média de Penas<br>e Ovos por Dia',
        valorPorGalinha: 'Valor por Galinha',
        galinhasQueVaiVender: 'Galinhas à venda',
        rendimentoPorGalinha: 'Lucro por<br>Galinha',

        cardMediaSemanalDeOvosEPenas: 'Média Semanal<br>de Ovos e Penas',
        cardVendaDeGalinhas: 'Venda de<br>Galinhas',
        cardLucroSemanalMaisGalinha: 'Lucro Semanal<br>+ Galinhas',

        avisoDaVendaDeGalinhasPt2: 'galinha(s) com level',

        //exclusivo vacas
        mediaDeRecursosPorVaca: 'Recursos<br>por Vaca',
        vacasQueVaiCriar: 'Inserir vacas',
        mediaDeLeiteECouroPorDia: 'Média de Leite<br>e Couro por Dia',
        valorPorVaca: 'Valor por Vaca',
        vacasQueVaiVender: 'Vacas à venda',
        rendimentoPorVaca: 'Lucro por<br>Vaca',

        cardMediaSemanalDeLeiteECouro: 'Média Semanal<br>de Leite e Couro',
        cardVendaDeVacas: 'Venda de<br>Vacas',
        cardLucroSemanalMaisVacas: 'Lucro Semanal<br>+ Vacas',

        avisoDaVendaDeVacasPt2: 'vaca(s) com level',

        //exclusivo ovelhas
        mediaDeRecursosPorOvelha: 'Recursos<br>por Ovelha',
        ovelhasQueVaiCriar: 'Inserir ovelhas',
        mediaDeLaEMerinoPorDia: 'Média de Lã e<br>Lã Merino por Dia',
        valorPorOvelha: 'Valor por Ovelha',
        ovelhasQueVaiVender: 'Ovelhas à venda',
        rendimentoPorOvelha: 'Lucro por<br>Ovelha',

        cardMediaSemanalDeLaEMerino: 'Média Semanal<br>de Lã e Lã Merino',
        cardVendaDeOvelhas: 'Venda de<br>Ovelhas',
        cardLucroSemanalMaisOvelhas: 'Lucro Semanal<br>+ Ovelhas',

        avisoDaVendaDeOvelhasPt2: 'ovelha(s) com level',

    },
    ingles: {
        //todos animais
        level: 'Level',
        xpTotal: 'Total XP',
        xpNecessarioProProximoLevel: 'XP Required',
        mediaDeXpComCarinho: 'Average XP<br>with Affection',
        xpRestanteDoLevelAnterior: 'Remaining XP<br>Previous Level',
        comidaNecessaria: 'Required Food<br>XP Obtained',
        xpPorUnidadeDeComida: 'XP per Unit',
        salvar: 'Save',
        custoMedioPorDiaEmComida: 'Average Daily<br>Food Cost',
        lucroTotal: 'Total Profit',
        taxa: 'Fee',
        vendaDaSemana: 'Weekly<br>Bounties',

        cardLucroTotalPorDia: 'Profit<br>per Day',
        cardCustoSemanalDaComida: 'Weekly<br>Food Cost',
        cardLucroSemanal: 'Weekly<br>Profit',

        avisoDaVendaDeAnimaisPt1: 'You only have',
        avisoDaVendaDeAnimaisPt3: 'to sell. I fixed it for you, but fill it in correctly if you don’t want to see me again! 😅',

        //exclusivo galinhas
        mediaDeRecursosPorGalinha: 'Resources<br>per Chicken',
        galinhasQueVaiCriar: 'Enter Chickens',
        mediaDePenasEOvosPorDia: 'Average Feathers<br>and Eggs per Day',
        valorPorGalinha: 'Value per Chicken',
        galinhasQueVaiVender: 'Chickens to Sell',
        rendimentoPorGalinha: 'Profit per<br>Chicken',

        cardMediaSemanalDeOvosEPenas: 'Weekly Average<br>of Eggs and Feathers',
        cardVendaDeGalinhas: 'Chicken<br>Sales',
        cardLucroSemanalMaisGalinha: 'Weekly Profit<br>+ Chickens',

        avisoDaVendaDeGalinhasPt2: 'chicken(s) at level',

        //exclusivo vacas
        mediaDeRecursosPorVaca: 'Resources<br>per Cow',
        vacasQueVaiCriar: 'Enter Cows',
        mediaDeLeiteECouroPorDia: 'Average Milk<br>and Leather per Day',
        valorPorVaca: 'Value per Cow',
        vacasQueVaiVender: 'Cows to Sell',
        rendimentoPorVaca: 'Profit per<br>Cow',

        cardMediaSemanalDeLeiteECouro: 'Weekly Average<br>of Milk and Leather',
        cardVendaDeVacas: 'Cow<br>Sales',
        cardLucroSemanalMaisVacas: 'Weekly Profit<br>+ Cows',

        avisoDaVendaDeVacasPt2: 'cow(s) at level',

        // sheep only
        mediaDeRecursosPorOvelha: 'Resources<br>per Sheep',
        ovelhasQueVaiCriar: 'Enter Sheep',
        mediaDeLaEMerinoPorDia: 'Average Wool<br>and Merino Wool per Day',
        valorPorOvelha: 'Value per Sheep',
        ovelhasQueVaiVender: 'Sheep to Sell',
        rendimentoPorOvelha: 'Profit per<br>Sheep',

        cardMediaSemanalDeLaEMerino: 'Weekly Average<br>of Wool and Merino Wool',
        cardVendaDeOvelhas: 'Sheep<br>Sales',
        cardLucroSemanalMaisOvelhas: 'Weekly Profit<br>+ Sheep',

        avisoDaVendaDeOvelhasPt2: 'sheep with level',

    }
}

//variaveis para aparecer em resumo do combo!
let resultadoComboGalinhasPorDia = 0;
let resultadoComboGalinhasSemanal = 0;

let resultadoComboVacasPorDia = 0;
let resultadoComboVacasSemanal = 0;

let resultadoComboOvelhasPorDia = 0;
let resultadoComboOvelhasSemanal = 0;


function tabelaGalinhas() {
    mostrarResultadoGalinhas.innerHTML = '';

    const idiomaSelecionadoAnimais = idiomaTabelaAnimais[idioma];
    
    let tabelaTituloGalinhas = `
        <tr>   
            <th>${idiomaSelecionadoAnimais.level}<br>${idiomaSelecionadoAnimais.xpNecessarioProProximoLevel}</th>
            <th>${idiomaSelecionadoAnimais.xpRestanteDoLevelAnterior}</th>
            <th>${idiomaSelecionadoAnimais.mediaDeXpComCarinho}</th>
            <th>${idiomaSelecionadoAnimais.comidaNecessaria}</th>
            <th>${idiomaSelecionadoAnimais.mediaDeRecursosPorGalinha}</th>
            <th>${idiomaSelecionadoAnimais.rendimentoPorGalinha}</th>
            <th>${idiomaSelecionadoAnimais.galinhasQueVaiCriar}<br><button onclick="galinhasColocadas()">${idiomaSelecionadoAnimais.salvar}</button></th>
            <th>${idiomaSelecionadoAnimais.custoMedioPorDiaEmComida}</th>
            <th>${idiomaSelecionadoAnimais.mediaDePenasEOvosPorDia}</th>
            <th>${idiomaSelecionadoAnimais.lucroTotal}<br>${idiomaSelecionadoAnimais.taxa}: ${(taxa * 100).toFixed(2)}%</th>
            <th>${idiomaSelecionadoAnimais.vendaDaSemana}</th>
            <th>${idiomaSelecionadoAnimais.galinhasQueVaiVender}<br><button onclick="galinhasColocadas()">${idiomaSelecionadoAnimais.salvar}</button></th>
        </tr>`

    // tabela principal continua igual - mudar class tabela minerios
    let tabelaGalinhas = `
    <table class="tabela-animais"> 
            <thead>
                ${tabelaTituloGalinhas}
            </thead>
        <tbody>
    `;

    //preço dos recursos da galinha
    let precoOvo = Number(mapaDosValoresDoMarket['egg'].valor)
    let precoPena = Number(mapaDosValoresDoMarket['feather'].valor)

    //somador de todos valores pra colocar nos cards das Galinhas
    let totalGastoComComidaGalinhas = 0;
    let totalDeOvosPorDia = 0;
    let totalDePenasPorDia = 0;
    let lucroTotalPorDiaDasGalinhas = 0;
    let totalDeGalinhasAVenda = 0;
    let totalDeCoinsComAsGalinhas = 0;
    let totalDeLucroSemanalDosOvosEPenas = 0;
    let totalDeLucroComAGalinha = 0;
    let totalGastoComComidaSemanal = 0;
    let totalDeOvosSemanal = 0;
    let totalDePenasSemanal = 0;
    let totalGanhoPorDiaComOvosEPenas = 0;
    let totalGanhoSemanalComOvosEPenas = 0;

    animais.galinhas.forEach(galinha => {

        //peguei no chat gpt, no caso isso tira o numero que esta no id da comida, exemplo: hay3 vira hay, assim ficando mais facil mostrar a imagem na tabela
        const comidaBase = galinha.idComida.replace(/\d+/g, '');

        // quando a skill é escolhida, muda a imagem para deixar claro que houve a troca
        let mudarImagemMixedGrain = comidaBase === 'mixedGrain' && mapaDeTodasSkillsComTier['kaleMix'].possui ? 'kaleMix' : comidaBase;

        //comida necessaria para subir de level!
        let totalComidaUsada = galinha.comidaNecessaria;
        let textoComidaUsada = totalComidaUsada === 0 ? 0 : totalComidaUsada.toFixed(2);

        //xp recebido comendo quando necessário!
        let xpRecebidoDaComida = galinha.xpGanhoComendo;
        let textoXpRecebidoDaComida = totalComidaUsada === 0 ? '' : `<br><img src="./icones/xp.png" class="crop-img">${xpRecebidoDaComida}`;

        //condição para mostrar se o animal esta no level 15 ou nao, caso não esteja, isso será um 0, caso chegue, sera 15!
        let level15OuMenos = galinha.level - galinha.levelAnterior > 0 ? 0 : 15;

        //calculo para mostrar o lucro medio por animal subindo de level!
        let lucroPorLevelDaGalinha = (((galinha.eggFinal * mapaDosValoresDoMarket['egg'].valor) +
            (galinha.featherFinal * mapaDosValoresDoMarket['feather'].valor)) * 
            (1 - taxa)) - (totalComidaUsada * galinha.custoDaComida);

        //isso é para dar um lucro media semanal melhor, de acordo com o level da galinha, pois se for um level muito baixo, n tem como criar a semana toda, entao se chega no levekl antes dos 7 dias, multiplica pelo numero abaixo, caso contrario, multiplica por 7
        let usarParaMediaDaSemana = Number(vinteQuatroHoras * 7) >= (Number(galinha.tempo * galinha.level)) ? Number(galinha.level * (galinha.tempo / vinteQuatroHoras)) : 7;

        //Média de recursos ganhos e comidas gastas por dia durante a semana!
        let mediaDeOvosNoDia = (vinteQuatroHoras / galinha.tempo) * galinha.mediaDeOvosDoLevel;
        let mediaDePenasNoDia = (vinteQuatroHoras / galinha.tempo) * galinha.mediaDePenasDoLevel;
        let gastoComComida = (vinteQuatroHoras / galinha.tempo) * galinha.mediaDeGastoComComida;

        //texto para colocar natabela mostrando os resultados acima, e caso seja 0, fica vazio!
        let textoMediaDeOvosNoDia = galinha.qtdUsada > 0 ? `<img src="./animais/egg.png" class="crop-img">${mediaDeOvosNoDia.toFixed(2)}` : '';
        let textoMediaDePenasNoDia = galinha.qtdUsada > 0 ? `<img src="./animais/feather.png" class="crop-img">${mediaDePenasNoDia.toFixed(2)}` : '';
        let textoGastoComComida = galinha.qtdUsada > 0 ? `<img src="./icones/flower.png" class="crop-img">${gastoComComida.toFixed(4)}` : '';
        
        //Valor ganho com os recursos das galinhas colocadas menos a taxa, e no lucroFlower retira o custo da comida, trazendo o resultado final
        let ganhoComOvosEPenas = Number(((precoOvo * mediaDeOvosNoDia) + (precoPena * mediaDePenasNoDia)) * (1 - taxa));
        let lucroFlower = galinha.qtdUsada == 0 || ilha === 'Basic' ? 0 : Number(ganhoComOvosEPenas - gastoComComida);
        
        //lucroFlowerComGalinha pega o valor de coins da galinha e multiplica por quantas tem pra vender na semana, dps divide pela quantidade de galinhas que vai criar ate aqle nivel para te dar a média
        let galinhasVendidas = (galinha.vendida || 0) < galinha.qtdDeAnimaisQuePodeVender ? galinha.vendida : galinha.qtdDeAnimaisQuePodeVender;
        let lucroFlowerComGalinha = Number((galinhasVendidas * galinha.coinsFinal) / flowerEmCoins) || 0;

        
        let lucroSemanal = Number(lucroFlower * usarParaMediaDaSemana);
        let lucroSemanalComGalinha = Number((lucroFlower * usarParaMediaDaSemana) + lucroFlowerComGalinha);
        
        //textos personalizados que vão dentro da tabela!
        let textoLucroFlower = lucroFlower != 0 ? `<img src="./icones/flower.png" class="crop-img">${lucroFlower.toFixed(4)}` : '';

        let textoVendaPorLevelCoins = Number(galinha.qtdDeAnimaisQuePodeVender) > 0 && galinha.level - galinha.levelAnterior != 0 ? 
            `<img src="./animais/galinha.png" class="crop-img">${Number(galinha.qtdDeAnimaisQuePodeVender)}<br><img src="./icones/coins.png" class="crop-img">${galinha.coinsFinal}` : '';
        
        //Responsavel pela venda das galinhas e preenchimentos corretos!
        if (galinha.vendida > galinha.qtdDeAnimaisQuePodeVender) {
            galinha.vendida = galinha.qtdDeAnimaisQuePodeVender;
            alert(`${idiomaSelecionadoAnimais.avisoDaVendaDeAnimaisPt1} ${galinha.qtdDeAnimaisQuePodeVender} ${idiomaSelecionadoAnimais.avisoDaVendaDeGalinhasPt2} ${galinha.level} ${idiomaSelecionadoAnimais.avisoDaVendaDeAnimaisPt3}`)
        }
        let inputVendaGalinhas = galinha.qtdDeAnimaisQuePodeVender > 0 ? `<input type="number" placeholder="" data-name="${galinha.levelAnterior}" class="quantidade-input galinhas-venda-input" value="${galinha.vendida}">` : '';

        tabelaGalinhas += `
        <tr>
            <td><img src="./animais/galinha.png" class="crop-img">${galinha.levelAnterior} ➜ ${galinha.level}<br><img src="./icones/subirXP.png" class="crop-img">${galinha.xpTotalDoLevel - galinha.xpTotalAnterior}</td>
            <td><img src="./icones/xp.png" class="crop-img">${galinha.xpExcedente}</td>
            <td><img src="./animais/brush.png" class="crop-img">${galinha.xpAdquiridoComCarinho} xp</td>
            <td><img src="./animais/${mudarImagemMixedGrain}.png" class="crop-img">${textoComidaUsada}${textoXpRecebidoDaComida}</td>
            <td><img src="./animais/egg.png" class="crop-img">${(galinha.eggFinal).toFixed(2)}<br><img src="./animais/feather.png" class="crop-img">${(galinha.featherFinal).toFixed(2)}</td>
            <td><img src="./animais/galinha.png" class="crop-img">${galinha.levelAnterior} ➜ ${galinha.level}<br><img src="./icones/flower.png" class="crop-img">${lucroPorLevelDaGalinha.toFixed(4)}</td>
            <td><input type="number" placeholder="" data-name="${galinha.levelAnterior}" class="quantidade-input galinhas-input" value="${galinha.qtdUsada}"></td>
            <td><img src="./animais/galinha.png" class="crop-img">${level15OuMenos} ➜ ${galinha.level}<br>${textoGastoComComida}</td>
            <td>${textoMediaDeOvosNoDia}<br>${textoMediaDePenasNoDia}</td>
            <td>${textoLucroFlower}</td>
            <td>${textoVendaPorLevelCoins}</td>
            <td>${inputVendaGalinhas}</td>
        </tr>
        `;

        totalGastoComComidaGalinhas += gastoComComida * (usarParaMediaDaSemana / 7);
        totalDeOvosPorDia += mediaDeOvosNoDia * (usarParaMediaDaSemana / 7);
        totalDePenasPorDia += mediaDePenasNoDia * (usarParaMediaDaSemana / 7);
        lucroTotalPorDiaDasGalinhas += lucroFlower * (usarParaMediaDaSemana / 7);
        totalDeGalinhasAVenda += galinhasVendidas || 0;
        totalDeCoinsComAsGalinhas += Number(galinha.coinsFinal * galinhasVendidas) || 0;
        totalDeLucroSemanalDosOvosEPenas += lucroSemanal;
        totalDeLucroComAGalinha += lucroSemanalComGalinha || 0;
        totalGastoComComidaSemanal += (gastoComComida * usarParaMediaDaSemana);
        totalDeOvosSemanal += (mediaDeOvosNoDia * usarParaMediaDaSemana);
        totalDePenasSemanal +=(mediaDePenasNoDia * usarParaMediaDaSemana);
        totalGanhoPorDiaComOvosEPenas += ganhoComOvosEPenas * (usarParaMediaDaSemana / 7);
        totalGanhoSemanalComOvosEPenas += (ganhoComOvosEPenas * usarParaMediaDaSemana);

    });
    tabelaGalinhas += `</tbody></table>`;

    let cardResultadosGalinhas = `
        <div class="cards-totais-crops">

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.mediaDePenasEOvosPorDia}</h3>
                <p>
                    <img src="./animais/egg.png" class="crop-img">${totalDeOvosPorDia.toFixed(2)} + 
                    <img src="./animais/feather.png" class="crop-img">${totalDePenasPorDia.toFixed(2)} = 
                    <img src="./icones/flower.png" class="crop-img">${totalGanhoPorDiaComOvosEPenas.toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.custoMedioPorDiaEmComida}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalGastoComComidaGalinhas.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalGastoComComidaGalinhas * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardLucroTotalPorDia}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroTotalPorDiaDasGalinhas.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(lucroTotalPorDiaDasGalinhas * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardMediaSemanalDeOvosEPenas}</h3>
                <p>
                    <img src="./animais/egg.png" class="crop-img">${totalDeOvosSemanal.toFixed(0)} + 
                    <img src="./animais/feather.png" class="crop-img">${totalDePenasSemanal.toFixed(0)} = 
                    <img src="./icones/flower.png" class="crop-img">${totalGanhoSemanalComOvosEPenas.toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardCustoSemanalDaComida}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalGastoComComidaSemanal.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalGastoComComidaSemanal * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardLucroSemanal}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalDeLucroSemanalDosOvosEPenas.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalDeLucroSemanalDosOvosEPenas * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardVendaDeGalinhas}</h3>
                <p>
                    <img src="./animais/galinha.png" class="crop-img">${totalDeGalinhasAVenda} ➜
                    <img src="./icones/coins.png" class="crop-img">${totalDeCoinsComAsGalinhas} ~ 
                    <img src="./icones/flower.png" class="crop-img">${(totalDeCoinsComAsGalinhas / flowerEmCoins).toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardLucroSemanalMaisGalinha}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalDeLucroComAGalinha.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalDeLucroComAGalinha * precoDoFlower).toFixed(2)}
                </p>
            </div>

        </div>
        `;

    // renderiza tudo
    mostrarResultadoGalinhas.innerHTML = `
        <div class="tabelas-em-ordem">
            ${cardResultadosGalinhas}
            ${tabelaGalinhas}
        </div>
    `;

    //mandar para resultado do combo total
    resultadoComboGalinhasPorDia = lucroTotalPorDiaDasGalinhas;
    resultadoComboGalinhasSemanal = totalDeLucroSemanalDosOvosEPenas;
    cardResultadoTotalDosCombosJuntos();
};

function tabelaVacas() {
    mostrarResultadoVacas.innerHTML = '';

    const idiomaSelecionadoAnimais = idiomaTabelaAnimais[idioma];
    
    let tabelaTituloVacas = `
        <tr>   
            <th>${idiomaSelecionadoAnimais.level}<br>${idiomaSelecionadoAnimais.xpNecessarioProProximoLevel}</th>
            <th>${idiomaSelecionadoAnimais.xpRestanteDoLevelAnterior}</th>
            <th>${idiomaSelecionadoAnimais.mediaDeXpComCarinho}</th>
            <th>${idiomaSelecionadoAnimais.comidaNecessaria}</th>
            <th>${idiomaSelecionadoAnimais.mediaDeRecursosPorVaca}</th>
            <th>${idiomaSelecionadoAnimais.rendimentoPorVaca}</th>
            <th>${idiomaSelecionadoAnimais.vacasQueVaiCriar}<br><button onclick="vacasColocadas()">${idiomaSelecionadoAnimais.salvar}</button></th>
            <th>${idiomaSelecionadoAnimais.custoMedioPorDiaEmComida}</th>
            <th>${idiomaSelecionadoAnimais.mediaDeLeiteECouroPorDia}</th>
            <th>${idiomaSelecionadoAnimais.lucroTotal}<br>${idiomaSelecionadoAnimais.taxa}: ${(taxa * 100).toFixed(2)}%</th>
            <th>${idiomaSelecionadoAnimais.vendaDaSemana}</th>
            <th>${idiomaSelecionadoAnimais.vacasQueVaiVender}<br><button onclick="vacasColocadas()">${idiomaSelecionadoAnimais.salvar}</button></th>
        </tr>`;

    // tabela principal continua igual - mudar class tabela minerios
    let tabelaVacas = `
    <table class="tabela-animais"> 
            <thead>
                ${tabelaTituloVacas}
            </thead>
        <tbody>
    `;

    //preço dos recursos da galinha
    let precoLeite = Number(mapaDosValoresDoMarket['milk'].valor)
    let precoCouro = Number(mapaDosValoresDoMarket['leather'].valor)

    //somador de todos valores pra colocar nos cards das Vacas
    let totalGastoComComidaVacas = 0;
    let totalDeLeitePorDia = 0;
    let totalDeCouroPorDia = 0;
    let lucroTotalPorDiaDasVacas = 0;
    let totalDeVacasAVenda = 0;
    let totalDeCoinsComAsVacas = 0;
    let totalDeLucroSemanalDosLeitesECouro = 0;
    let totalDeLucroComAVaca = 0;
    let totalGastoComComidaSemanalDaVaca = 0;
    let totalDeLeiteSemanal = 0;
    let totalDeCouroSemanal = 0;
    let totalGanhoPorDiaComLeiteECouro = 0;
    let totalGanhoSemanalComLeiteECouro = 0;

    animais.vacas.forEach(vaca => {

        //peguei no chat gpt, no caso isso tira o numero que esta no id da comida, exemplo: hay3 vira hay, assim ficando mais facil mostrar a imagem na tabela
        const comidaBase = vaca.idComida.replace(/\d+/g, '');

        // quando a skill é escolhida, muda a imagem para deixar claro que houve a troca
        let mudarImagemMixedGrain = comidaBase === 'mixedGrain' && mapaDeTodasSkillsComTier['kaleMix'].possui ? 'kaleMix' : comidaBase;

        //comida necessaria para subir de level!
        let totalComidaUsada = vaca.comidaNecessaria;
        let textoComidaUsada = totalComidaUsada === 0 ? 0 : totalComidaUsada.toFixed(2);

        //xp recebido comendo quando necessário!
        let xpRecebidoDaComida = vaca.xpGanhoComendo;
        let textoXpRecebidoDaComida = totalComidaUsada === 0 ? '' : `<br><img src="./icones/xp.png" class="crop-img">${xpRecebidoDaComida}`;

        //condição para mostrar se o animal esta no level 15 ou nao, caso não esteja, isso será um 0, caso chegue, sera 15!
        let level15OuMenos = vaca.level - vaca.levelAnterior > 0 ? 0 : 15;

        //calculo para mostrar o lucro medio por animal subindo de level!
        let lucroPorLevelDaVaca = (((vaca.milkFinal * mapaDosValoresDoMarket['milk'].valor) +
            (vaca.leatherFinal * mapaDosValoresDoMarket['leather'].valor)) * 
            (1 - taxa)) - (totalComidaUsada * vaca.custoDaComida);

        //isso é para dar um lucro media semanal melhor, de acordo com o level da galinha, pois se for um level muito baixo, n tem como criar a semana toda, entao se chega no levekl antes dos 7 dias, multiplica pelo numero abaixo, caso contrario, multiplica por 7
        let usarParaMediaDaSemana = Number(vinteQuatroHoras * 7) >= (Number(vaca.tempo * vaca.level)) ? Number(vaca.level * (vaca.tempo / vinteQuatroHoras)) : 7;

        //Média de recursos ganhos e comidas gastas por dia durante a semana!
        let mediaDeLeiteNoDia = (vinteQuatroHoras / vaca.tempo) * vaca.mediaDeLeiteDoLevel;
        let mediaDeCouroNoDia = (vinteQuatroHoras / vaca.tempo) * vaca.mediaDeCouroDoLevel;
        let gastoComComida = (vinteQuatroHoras / vaca.tempo) * vaca.mediaDeGastoComComida;

        //texto para colocar natabela mostrando os resultados acima, e caso seja 0, fica vazio!
        let textoMediaDeLeiteNoDia = vaca.qtdUsada > 0 ? `<img src="./animais/milk.png" class="crop-img">${mediaDeLeiteNoDia.toFixed(2)}` : '';
        let textoMediaDeCouroNoDia = vaca.qtdUsada > 0 ? `<img src="./animais/leather.png" class="crop-img">${mediaDeCouroNoDia.toFixed(2)}` : '';
        let textoGastoComComida = vaca.qtdUsada > 0 ? `<img src="./icones/flower.png" class="crop-img">${gastoComComida.toFixed(4)}` : '';
        
        //Valor ganho com os recursos das galinhas colocadas menos a taxa, e no lucroFlower retira o custo da comida, trazendo o resultado final
        let ganhoComLeiteECouro = Number(((precoLeite * mediaDeLeiteNoDia) + (precoCouro * mediaDeCouroNoDia)) * (1 - taxa));
        let lucroFlower = vaca.qtdUsada == 0 || ilha === 'Basic' ? 0 : Number(ganhoComLeiteECouro - gastoComComida);
        
        //lucroFlowerComGalinha pega o valor de coins da galinha e multiplica por quantas tem pra vender na semana, dps divide pela quantidade de galinhas que vai criar ate aqle nivel para te dar a média
        let vacasVendidas = (vaca.vendida || 0) < vaca.qtdDeAnimaisQuePodeVender ? vaca.vendida : vaca.qtdDeAnimaisQuePodeVender;
        let lucroFlowerComVaca = Number((vacasVendidas * vaca.coinsFinal) / flowerEmCoins) || 0;

        let lucroSemanal = Number(lucroFlower * usarParaMediaDaSemana);
        let lucroSemanalComVaca = Number((lucroFlower * usarParaMediaDaSemana) + lucroFlowerComVaca);
        
        //textos personalizados que vão dentro da tabela!
        let textoLucroFlower = lucroFlower != 0 ? `<img src="./icones/flower.png" class="crop-img">${lucroFlower.toFixed(4)}` : '';

        let textoVendaPorLevelCoins = Number(vaca.qtdDeAnimaisQuePodeVender) > 0 && vaca.level - vaca.levelAnterior != 0 ? 
            `<img src="./animais/vaca.png" class="crop-img">${Number(vaca.qtdDeAnimaisQuePodeVender)}<br><img src="./icones/coins.png" class="crop-img">${vaca.coinsFinal}` : '';
        
        //Responsavel pela venda das galinhas e preenchimentos corretos!
        if (vaca.vendida > vaca.qtdDeAnimaisQuePodeVender) {
            vaca.vendida = vaca.qtdDeAnimaisQuePodeVender;
            alert(`${idiomaSelecionadoAnimais.avisoDaVendaDeAnimaisPt1} ${vaca.qtdDeAnimaisQuePodeVender} ${idiomaSelecionadoAnimais.avisoDaVendaDeGalinhasPt2} ${vaca.level} ${idiomaSelecionadoAnimais.avisoDaVendaDeAnimaisPt3}`)
        }
        let inputVendaVacas = vaca.qtdDeAnimaisQuePodeVender > 0 ? `<input type="number" placeholder="" data-name="${vaca.levelAnterior}" class="quantidade-input vacas-venda-input" value="${vaca.vendida}">` : '';

        tabelaVacas += `
        <tr>
            <td><img src="./animais/vaca.png" class="crop-img">${vaca.levelAnterior} ➜ ${vaca.level}<br><img src="./icones/subirXP.png" class="crop-img">${vaca.xpTotalDoLevel - vaca.xpTotalAnterior}</td>
            <td><img src="./icones/xp.png" class="crop-img">${vaca.xpExcedente}</td>
            <td><img src="./animais/brush.png" class="crop-img">${vaca.xpAdquiridoComCarinho} xp</td>
            <td><img src="./animais/${mudarImagemMixedGrain}.png" class="crop-img">${textoComidaUsada}${textoXpRecebidoDaComida}</td>
            <td><img src="./animais/milk.png" class="crop-img">${(vaca.milkFinal).toFixed(2)}<br><img src="./animais/leather.png" class="crop-img">${(vaca.leatherFinal).toFixed(2)}</td>
            <td><img src="./animais/vaca.png" class="crop-img">${vaca.levelAnterior} ➜ ${vaca.level}<br><img src="./icones/flower.png" class="crop-img">${lucroPorLevelDaVaca.toFixed(4)}</td>
            <td><input type="number" placeholder="" data-name="${vaca.levelAnterior}" class="quantidade-input vacas-input" value="${vaca.qtdUsada}"></td>
            <td><img src="./animais/vaca.png" class="crop-img">${level15OuMenos} ➜ ${vaca.level}<br>${textoGastoComComida}</td>
            <td>${textoMediaDeLeiteNoDia}<br>${textoMediaDeCouroNoDia}</td>
            <td>${textoLucroFlower}</td>
            <td>${textoVendaPorLevelCoins}</td>
            <td>${inputVendaVacas}</td>
        </tr>
        `;

        totalGastoComComidaVacas += gastoComComida * (usarParaMediaDaSemana / 7);
        totalDeLeitePorDia += mediaDeLeiteNoDia * (usarParaMediaDaSemana / 7);
        totalDeCouroPorDia += mediaDeCouroNoDia * (usarParaMediaDaSemana / 7);
        lucroTotalPorDiaDasVacas += lucroFlower * (usarParaMediaDaSemana / 7);
        totalDeVacasAVenda += vacasVendidas || 0;
        totalDeCoinsComAsVacas += Number(vaca.coinsFinal * vacasVendidas) || 0;
        totalDeLucroSemanalDosLeitesECouro += lucroSemanal;
        totalDeLucroComAVaca += lucroSemanalComVaca || 0;
        totalGastoComComidaSemanalDaVaca += (gastoComComida * usarParaMediaDaSemana);
        totalDeLeiteSemanal += (mediaDeLeiteNoDia * usarParaMediaDaSemana);
        totalDeCouroSemanal +=(mediaDeCouroNoDia * usarParaMediaDaSemana);
        totalGanhoPorDiaComLeiteECouro += ganhoComLeiteECouro * (usarParaMediaDaSemana / 7);
        totalGanhoSemanalComLeiteECouro += (ganhoComLeiteECouro * usarParaMediaDaSemana);

    });
    tabelaVacas += `</tbody></table>`;

    let cardResultadosVacas = `
        <div class="cards-totais-crops">

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.mediaDeLeiteECouroPorDia}</h3>
                <p>
                    <img src="./animais/milk.png" class="crop-img">${totalDeLeitePorDia.toFixed(2)} + 
                    <img src="./animais/leather.png" class="crop-img">${totalDeCouroPorDia.toFixed(2)} = 
                    <img src="./icones/flower.png" class="crop-img">${totalGanhoPorDiaComLeiteECouro.toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.custoMedioPorDiaEmComida}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalGastoComComidaVacas.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalGastoComComidaVacas * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardLucroTotalPorDia}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroTotalPorDiaDasVacas.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(lucroTotalPorDiaDasVacas * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardMediaSemanalDeLeiteECouro}</h3>
                <p>
                    <img src="./animais/milk.png" class="crop-img">${totalDeLeiteSemanal.toFixed(0)} + 
                    <img src="./animais/leather.png" class="crop-img">${totalDeCouroSemanal.toFixed(0)} = 
                    <img src="./icones/flower.png" class="crop-img">${totalGanhoSemanalComLeiteECouro.toFixed(0)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardCustoSemanalDaComida}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalGastoComComidaSemanalDaVaca.toFixed(0)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalGastoComComidaSemanalDaVaca * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardLucroSemanal}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalDeLucroSemanalDosLeitesECouro.toFixed(0)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalDeLucroSemanalDosLeitesECouro * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardVendaDeVacas}</h3>
                <p>
                    <img src="./animais/vaca.png" class="crop-img">${totalDeVacasAVenda} ➜
                    <img src="./icones/coins.png" class="crop-img">${totalDeCoinsComAsVacas} ~ 
                    <img src="./icones/flower.png" class="crop-img">${(totalDeCoinsComAsVacas / flowerEmCoins).toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardLucroSemanalMaisVacas}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalDeLucroComAVaca.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalDeLucroComAVaca * precoDoFlower).toFixed(2)}
                </p>
            </div>

        </div>
        `;

    // renderiza tudo
    mostrarResultadoVacas.innerHTML = `
        <div class="tabelas-em-ordem">
            ${cardResultadosVacas}
            ${tabelaVacas}
        </div>
    `;

    //mandar para resultado do combo total
    resultadoComboVacasPorDia = lucroTotalPorDiaDasVacas;
    resultadoComboVacasSemanal = totalDeLucroSemanalDosLeitesECouro;
    cardResultadoTotalDosCombosJuntos();

};

function tabelaOvelhas() {
    mostrarResultadoOvelhas.innerHTML = '';

    const idiomaSelecionadoAnimais = idiomaTabelaAnimais[idioma];
    
    let tabelaTituloOvelhas = `
        <tr>   
            <th>${idiomaSelecionadoAnimais.level}<br>${idiomaSelecionadoAnimais.xpNecessarioProProximoLevel}</th>
            <th>${idiomaSelecionadoAnimais.xpRestanteDoLevelAnterior}</th>
            <th>${idiomaSelecionadoAnimais.mediaDeXpComCarinho}</th>
            <th>${idiomaSelecionadoAnimais.comidaNecessaria}</th>
            <th>${idiomaSelecionadoAnimais.mediaDeRecursosPorOvelha}</th>
            <th>${idiomaSelecionadoAnimais.rendimentoPorOvelha}</th>
            <th>${idiomaSelecionadoAnimais.ovelhasQueVaiCriar}<br><button onclick="ovelhasColocadas()">${idiomaSelecionadoAnimais.salvar}</button></th>
            <th>${idiomaSelecionadoAnimais.custoMedioPorDiaEmComida}</th>
            <th>${idiomaSelecionadoAnimais.mediaDeLaEMerinoPorDia}</th>
            <th>${idiomaSelecionadoAnimais.lucroTotal}<br>${idiomaSelecionadoAnimais.taxa}: ${(taxa * 100).toFixed(2)}%</th>
            <th>${idiomaSelecionadoAnimais.vendaDaSemana}</th>
            <th>${idiomaSelecionadoAnimais.ovelhasQueVaiVender}<br><button onclick="ovelhasColocadas()">${idiomaSelecionadoAnimais.salvar}</button></th>
        </tr>`;

    // tabela principal continua igual - mudar class tabela minerios
    let tabelaOvelhas = `
    <table class="tabela-animais"> 
            <thead>
                ${tabelaTituloOvelhas}
            </thead>
        <tbody>
    `;

    //preço dos recursos da galinha
    let precoLa = Number(mapaDosValoresDoMarket['wool'].valor)
    let precoLaMerino = Number(mapaDosValoresDoMarket['merinoWool'].valor)

    //somador de todos valores pra colocar nos cards das Vacas
    let totalGastoComComidaOvelhas = 0;
    let totalDeLaPorDia = 0;
    let totalDeLaMerinoPorDia = 0;
    let lucroTotalPorDiaDasOvelhas = 0;
    let totalDeOvelhasAVenda = 0;
    let totalDeCoinsComAsOvelhas = 0;
    let totalDeLucroSemanalDasLasEMerinos = 0;
    let totalDeLucroComAOvelha = 0;
    let totalGastoComComidaSemanalDaOvelha = 0;
    let totalDeLaSemanal = 0;
    let totalDeLaMerinoSemanal = 0;
    let totalGanhoPorDiaComLasEMerinos = 0;
    let totalGanhoSemanalComLasEMerinos = 0;

    animais.ovelhas.forEach(ovelha => {

        //peguei no chat gpt, no caso isso tira o numero que esta no id da comida, exemplo: hay3 vira hay, assim ficando mais facil mostrar a imagem na tabela
        const comidaBase = ovelha.idComida.replace(/\d+/g, '');

        // quando a skill é escolhida, muda a imagem para deixar claro que houve a troca
        let mudarImagemMixedGrain = comidaBase === 'mixedGrain' && mapaDeTodasSkillsComTier['kaleMix'].possui ? 'kaleMix' : comidaBase;

        //comida necessaria para subir de level!
        let totalComidaUsada = ovelha.comidaNecessaria;
        let textoComidaUsada = totalComidaUsada === 0 ? 0 : totalComidaUsada.toFixed(2);

        //xp recebido comendo quando necessário!
        let xpRecebidoDaComida = ovelha.xpGanhoComendo;
        let textoXpRecebidoDaComida = totalComidaUsada === 0 ? '' : `<br><img src="./icones/xp.png" class="crop-img">${xpRecebidoDaComida}`;

        //condição para mostrar se o animal esta no level 15 ou nao, caso não esteja, isso será um 0, caso chegue, sera 15!
        let level15OuMenos = ovelha.level - ovelha.levelAnterior > 0 ? 0 : 15;

        //calculo para mostrar o lucro medio por animal subindo de level!
        let lucroPorLevelDaOvelha = (((ovelha.woolFinal * mapaDosValoresDoMarket['wool'].valor) +
            (ovelha.merinoWoolFinal * mapaDosValoresDoMarket['merinoWool'].valor)) * 
            (1 - taxa)) - (totalComidaUsada * ovelha.custoDaComida);

        //isso é para dar um lucro media semanal melhor, de acordo com o level da galinha, pois se for um level muito baixo, n tem como criar a semana toda, entao se chega no levekl antes dos 7 dias, multiplica pelo numero abaixo, caso contrario, multiplica por 7
        let usarParaMediaDaSemana = Number(vinteQuatroHoras * 7) >= (Number(ovelha.tempo * ovelha.level)) ? Number(ovelha.level * (ovelha.tempo / vinteQuatroHoras)) : 7;

        //Média de recursos ganhos e comidas gastas por dia durante a semana!
        let mediaDeLaNoDia = (vinteQuatroHoras / ovelha.tempo) * ovelha.mediaDeLaDoLevel;
        let mediaDeLaMerinoNoDia = (vinteQuatroHoras / ovelha.tempo) * ovelha.mediaDeLaMerinoDoLevel;
        let gastoComComida = (vinteQuatroHoras / ovelha.tempo) * ovelha.mediaDeGastoComComida;

        //texto para colocar natabela mostrando os resultados acima, e caso seja 0, fica vazio!
        let textoMediaDeLaNoDia = ovelha.qtdUsada > 0 ? `<img src="./animais/wool.png" class="crop-img">${mediaDeLaNoDia.toFixed(2)}` : '';
        let textoMediaDeLaMerinoNoDia = ovelha.qtdUsada > 0 ? `<img src="./animais/merinoWool.png" class="crop-img">${mediaDeLaMerinoNoDia.toFixed(2)}` : '';
        let textoGastoComComida = ovelha.qtdUsada > 0 ? `<img src="./icones/flower.png" class="crop-img">${gastoComComida.toFixed(4)}` : '';
        
        //Valor ganho com os recursos das galinhas colocadas menos a taxa, e no lucroFlower retira o custo da comida, trazendo o resultado final
        let ganhoComLasEMerinos = Number(((precoLa * mediaDeLaNoDia) + (precoLaMerino * mediaDeLaMerinoNoDia)) * (1 - taxa));
        let lucroFlower = ovelha.qtdUsada == 0 || ilha === 'Basic' ? 0 : Number(ganhoComLasEMerinos - gastoComComida);
        
        //lucroFlowerComGalinha pega o valor de coins da galinha e multiplica por quantas tem pra vender na semana, dps divide pela quantidade de galinhas que vai criar ate aqle nivel para te dar a média
        let ovelhasVendidas = (ovelha.vendida || 0) < ovelha.qtdDeAnimaisQuePodeVender ? ovelha.vendida : ovelha.qtdDeAnimaisQuePodeVender;
        let lucroFlowerComOvelha = Number((ovelhasVendidas * ovelha.coinsFinal) / flowerEmCoins) || 0;

        let lucroSemanal = Number(lucroFlower * usarParaMediaDaSemana);
        let lucroSemanalComOvelha = Number((lucroFlower * usarParaMediaDaSemana) + lucroFlowerComOvelha);
        
        //textos personalizados que vão dentro da tabela!
        let textoLucroFlower = lucroFlower != 0 ? `<img src="./icones/flower.png" class="crop-img">${lucroFlower.toFixed(4)}` : '';

        let textoVendaPorLevelCoins = Number(ovelha.qtdDeAnimaisQuePodeVender) > 0 && ovelha.level - ovelha.levelAnterior != 0 ? 
            `<img src="./animais/ovelha.png" class="crop-img">${Number(ovelha.qtdDeAnimaisQuePodeVender)}<br><img src="./icones/coins.png" class="crop-img">${ovelha.coinsFinal}` : '';
        
        //Responsavel pela venda das galinhas e preenchimentos corretos!
        if (ovelha.vendida > ovelha.qtdDeAnimaisQuePodeVender) {
            ovelha.vendida = ovelha.qtdDeAnimaisQuePodeVender;
            alert(`${idiomaSelecionadoAnimais.avisoDaVendaDeAnimaisPt1} ${ovelha.qtdDeAnimaisQuePodeVender} ${idiomaSelecionadoAnimais.avisoDaVendaDeGalinhasPt2} ${ovelha.level} ${idiomaSelecionadoAnimais.avisoDaVendaDeAnimaisPt3}`)
        }
        let inputVendaOvelhas = ovelha.qtdDeAnimaisQuePodeVender > 0 ? `<input type="number" placeholder="" data-name="${ovelha.levelAnterior}" class="quantidade-input ovelhas-venda-input" value="${ovelha.vendida}">` : '';

        tabelaOvelhas += `
        <tr>
            <td><img src="./animais/ovelha.png" class="crop-img">${ovelha.levelAnterior} ➜ ${ovelha.level}<br><img src="./icones/subirXP.png" class="crop-img">${ovelha.xpTotalDoLevel - ovelha.xpTotalAnterior}</td>
            <td><img src="./icones/xp.png" class="crop-img">${ovelha.xpExcedente}</td>
            <td><img src="./animais/brush.png" class="crop-img">${ovelha.xpAdquiridoComCarinho} xp</td>
            <td><img src="./animais/${mudarImagemMixedGrain}.png" class="crop-img">${textoComidaUsada}${textoXpRecebidoDaComida}</td>
            <td><img src="./animais/wool.png" class="crop-img">${(ovelha.woolFinal).toFixed(2)}<br><img src="./animais/merinoWool.png" class="crop-img">${(ovelha.merinoWoolFinal).toFixed(2)}</td>
            <td><img src="./animais/ovelha.png" class="crop-img">${ovelha.levelAnterior} ➜ ${ovelha.level}<br><img src="./icones/flower.png" class="crop-img">${lucroPorLevelDaOvelha.toFixed(4)}</td>
            <td><input type="number" placeholder="" data-name="${ovelha.levelAnterior}" class="quantidade-input ovelhas-input" value="${ovelha.qtdUsada}"></td>
            <td><img src="./animais/ovelha.png" class="crop-img">${level15OuMenos} ➜ ${ovelha.level}<br>${textoGastoComComida}</td>
            <td>${textoMediaDeLaNoDia}<br>${textoMediaDeLaMerinoNoDia}</td>
            <td>${textoLucroFlower}</td>
            <td>${textoVendaPorLevelCoins}</td>
            <td>${inputVendaOvelhas}</td>
        </tr>
        `;

        totalGastoComComidaOvelhas += gastoComComida * (usarParaMediaDaSemana / 7);
        totalDeLaPorDia += mediaDeLaNoDia * (usarParaMediaDaSemana / 7);
        totalDeLaMerinoPorDia += mediaDeLaMerinoNoDia * (usarParaMediaDaSemana / 7);
        lucroTotalPorDiaDasOvelhas += lucroFlower * (usarParaMediaDaSemana / 7);
        totalDeOvelhasAVenda += ovelhasVendidas || 0;
        totalDeCoinsComAsOvelhas += Number(ovelha.coinsFinal * ovelhasVendidas) || 0;
        totalDeLucroSemanalDasLasEMerinos += lucroSemanal;
        totalDeLucroComAOvelha += lucroSemanalComOvelha || 0;
        totalGastoComComidaSemanalDaOvelha += (gastoComComida * usarParaMediaDaSemana);
        totalDeLaSemanal += (mediaDeLaNoDia * usarParaMediaDaSemana);
        totalDeLaMerinoSemanal +=(mediaDeLaMerinoNoDia * usarParaMediaDaSemana);
        totalGanhoPorDiaComLasEMerinos += ganhoComLasEMerinos * (usarParaMediaDaSemana / 7);
        totalGanhoSemanalComLasEMerinos += (ganhoComLasEMerinos * usarParaMediaDaSemana);

    });
    tabelaOvelhas += `</tbody></table>`;

    let cardResultadosOvelhas = `
        <div class="cards-totais-crops">

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.mediaDeLaEMerinoPorDia}</h3>
                <p>
                    <img src="./animais/wool.png" class="crop-img">${totalDeLaPorDia.toFixed(2)} + 
                    <img src="./animais/merinoWool.png" class="crop-img">${totalDeLaMerinoPorDia.toFixed(2)} = 
                    <img src="./icones/flower.png" class="crop-img">${totalGanhoPorDiaComLasEMerinos.toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.custoMedioPorDiaEmComida}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalGastoComComidaOvelhas.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalGastoComComidaOvelhas * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardLucroTotalPorDia}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${lucroTotalPorDiaDasOvelhas.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(lucroTotalPorDiaDasOvelhas * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardMediaSemanalDeLaEMerino}</h3>
                <p>
                    <img src="./animais/wool.png" class="crop-img">${totalDeLaSemanal.toFixed(0)} + 
                    <img src="./animais/merinoWool.png" class="crop-img">${totalDeLaMerinoSemanal.toFixed(0)} = 
                    <img src="./icones/flower.png" class="crop-img">${totalGanhoSemanalComLasEMerinos.toFixed(0)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardCustoSemanalDaComida}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalGastoComComidaSemanalDaOvelha.toFixed(0)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalGastoComComidaSemanalDaOvelha * precoDoFlower).toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardLucroSemanal}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalDeLucroSemanalDasLasEMerinos.toFixed(0)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalDeLucroSemanalDasLasEMerinos * precoDoFlower).toFixed(2)}
                </p>
            </div>
            <h1>-</h1>
            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardVendaDeOvelhas}</h3>
                <p>
                    <img src="./animais/ovelha.png" class="crop-img">${totalDeOvelhasAVenda} ➜
                    <img src="./icones/coins.png" class="crop-img">${totalDeCoinsComAsOvelhas} ~ 
                    <img src="./icones/flower.png" class="crop-img">${(totalDeCoinsComAsOvelhas / flowerEmCoins).toFixed(2)}
                </p>
            </div>

            <div class="card-total-animal">
                <h3>${idiomaSelecionadoAnimais.cardLucroSemanalMaisOvelhas}</h3>
                <p>
                    <img src="./icones/flower.png" class="crop-img">${totalDeLucroComAOvelha.toFixed(2)} ~ 
                    <img src="./icones/usdc.png" class="crop-img">${(totalDeLucroComAOvelha * precoDoFlower).toFixed(2)}
                </p>
            </div>

        </div>
        `;

    // renderiza tudo
    mostrarResultadoOvelhas.innerHTML = `
        <div class="tabelas-em-ordem">
            ${cardResultadosOvelhas}
            ${tabelaOvelhas}
        </div>
    `;

    //mandar para resultado do combo total
    resultadoComboOvelhasPorDia = lucroTotalPorDiaDasOvelhas;
    resultadoComboOvelhasSemanal = totalDeLucroSemanalDasLasEMerinos;
    cardResultadoTotalDosCombosJuntos();
};