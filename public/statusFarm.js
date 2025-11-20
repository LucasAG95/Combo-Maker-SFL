//horas para contas
let vinteQuatroHoras = parseFloat(86_400_000);
let umaHora = parseFloat(3_600_000);

//================================================================================================================================================

//valor de 1 flower em coins
let flowerEmCoins = 1000;
document.getElementById('flower-em-coins').value = 1000;

let plots = parseInt(9)
document.getElementById('plotsPossuidos').value = plots; // Isso serve para ja mostrar o valor de plots no html

function salvarInformacoes() {
    plots = document.getElementById('plotsPossuidos').value;
    if (plots < 9) {
        alert('Não pode colocar menos que 9 plots!');
        plots = 9;
        document.getElementById('plotsPossuidos').value = plots;
    };

    //mostrar o valor inserido do flower em coins ao salvar
    flowerEmCoins = document.getElementById('flower-em-coins').value;
    console.log(flowerEmCoins)

    //chama as funções para atualizar
    buffsAdicionadosCrops();
};

//================================================================================================================================================

//Prestigio em que a pessoa está e calculo da taxa
let ilha = 'Basic'; // guarda o nome da ilha selecionada
let taxa = 1; // guarda a taxa calculada para a ilha
let vip = 'Sim'; //Se a pessoa possui VIP ou não e desconto que recebe na taxa

function ilhaPrestigioAtual() { // Função central que lê o <select>, calcula a taxa e atualiza a UI
    ilha = document.getElementById('ilhaSelect').value; //ela pega o <select id="ilhaSelect"> no HTML e guarda o valor escolhido dentro de ilha.
    if (ilha === 'Basic') {
        taxa = 'Não pode vender';
    } else if (ilha === 'Petal') {
        taxa = 0.5;
    } else if (ilha === 'Desert') {
        taxa = 0.2;
    } else if (ilha === 'Vulcano') {
        taxa = 0.15;
    };

    if (vip === 'Sim') taxa *= 0.5;

    if (mapaDeBuffsTemporarios['tradingShrine'].possui) taxa -= mapaDeBuffsTemporarios['tradingShrine'].taxa[0].buff;
    
    buffsAdicionadosCrops();
};
//registra um ouvinte de evento no <select id="ilhaSelect">.
document.getElementById('ilhaSelect').addEventListener('change', ilhaPrestigioAtual);
console.log(ilha)

//================================================================================================================================================