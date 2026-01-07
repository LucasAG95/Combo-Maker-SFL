//horas para contas
let vinteQuatroHoras = parseFloat(86_400_000);
let umaHora = parseFloat(3_600_000);

//================================================================================================================================================

//valor de 1 flower em coins
let flowerEmCoins = 1000;
document.getElementById('flower-em-coins').value = 1000;

//plots que a farm possui inicialmente
let plots = parseInt(9);
document.getElementById('plotsPossuidos').value = plots;

//plots que a CM possui!
let plotsCM = parseInt(10);
let oilPorHora = Number(1);

//plots de frutas que a farm possui!
let plotsFrutas = parseInt(1);
document.getElementById('fruitsPlotsPossuidos').value = plotsFrutas;
let frutiferasDuram = parseInt(4);

//Plots que possuem a Greenhouse
let plotsGH = parseInt(4);

//Tempo de sono dos Animais
let sleepGalinhas = parseFloat(86_400_000);
let sleepVacas = parseFloat(86_400_000);
let sleepOvelhas = parseFloat(86_400_000);

//Variaveis dos recursos, são 4 variaveis na msm linha(cada uma é um let), fiz assim para diminuir as linhas e entender qual afeta qual!
let treeTotais = 1,  treeT1,  treeT2,  treeT3;
let stoneTotais = 1, stoneT1, stoneT2, stoneT3;
let ironTotais = 1,  ironT1,  ironT2,  ironT3;
let goldTotais = 1,  goldT1,  goldT2,  goldT3;
let crimstoneTotais = 1;
let oilTotais = 1;

function salvarInformacoes() {
    
    //mostrar o valor inserido do flower em coins ao salvar
    flowerEmCoins = document.getElementById('flower-em-coins').value;
    console.log(flowerEmCoins)
    
    //Crop Plots
    plots = document.getElementById('plotsPossuidos').value;
    if (plots < 9) {
        alert('Não pode colocar menos que 9 plots!');
        plots = 9;
        document.getElementById('plotsPossuidos').value = plots;
    };

    //Plots de Frutas
    plotsFrutas = document.getElementById('fruitsPlotsPossuidos').value;
    
    // WOOD
    mapaDeMinerals['wood'].qtdNodes.t1 = document.getElementById('woodT1').value;
    mapaDeMinerals['wood'].qtdNodes.t2 = document.getElementById('woodT2').value;
    mapaDeMinerals['wood'].qtdNodes.t3 = document.getElementById('woodT3').value;

    // STONE
    mapaDeMinerals['stone'].qtdNodes.t1 = document.getElementById('stoneT1').value;
    mapaDeMinerals['stone'].qtdNodes.t2 = document.getElementById('stoneT2').value;
    mapaDeMinerals['stone'].qtdNodes.t3 = document.getElementById('stoneT3').value;

    // IRON
    mapaDeMinerals['iron'].qtdNodes.t1 = document.getElementById('ironT1').value;
    mapaDeMinerals['iron'].qtdNodes.t2 = document.getElementById('ironT2').value;
    mapaDeMinerals['iron'].qtdNodes.t3 = document.getElementById('ironT3').value;

    // GOLD
    mapaDeMinerals['gold'].qtdNodes.t1 = document.getElementById('goldT1').value;
    mapaDeMinerals['gold'].qtdNodes.t2 = document.getElementById('goldT2').value;
    mapaDeMinerals['gold'].qtdNodes.t3 = document.getElementById('goldT3').value;

    // CRIMSTONE
    mapaDeMinerals['crimstone'].qtdNodes.t1 = document.getElementById('crimstoneRock').value;

    // OIL
    mapaDeMinerals['oil'].qtdNodes.t1 = document.getElementById('oilReserve').value;

    
    //chama as funções para atualizar
    chamadorDeBuffs();
};

//================================================================================================================================================

//Prestigio em que a pessoa está e calculo da taxa
let ilha = 'basic'; // guarda o nome da ilha selecionada
let taxa = 1; // guarda a taxa calculada para a ilha
let vip = 'Sim' //Se a pessoa possui VIP ou não e desconto que recebe na taxa

function ilhaPrestigioAtual() { // Função central que lê o <select>, calcula a taxa e atualiza a UI
    ilha = document.getElementById('ilhaSelect').value; //ela pega o <select id="ilhaSelect"> no HTML e guarda o valor escolhido dentro de ilha.
    if (ilha === 'basic') {
        taxa = 'Não pode vender';
    } else if (ilha === 'petal') {
        taxa = 0.5;
    } else if (ilha === 'desert') {
        taxa = 0.2;
    } else if (ilha === 'volcano') {
        taxa = 0.15;
    };

    vip = document.getElementById('vipSelect').value;
    if (vip === 'Sim') taxa *= 0.5;

    if (mapaDeBuffsTemporarios['tradingShrine'].possui) taxa -= mapaDeBuffsTemporarios['tradingShrine'].taxa[0].buff;
    
    chamadorDeBuffs();
};
//registra um ouvinte de evento no <select id="ilhaSelect">.
document.getElementById('ilhaSelect').addEventListener('change', ilhaPrestigioAtual);
document.getElementById('vipSelect').addEventListener('change', ilhaPrestigioAtual);
console.log(ilha)

//================================================================================================================================================
