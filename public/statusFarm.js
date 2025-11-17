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

function ilhaPrestigioAtual() { // Função central que lê o <select>, calcula a taxa e atualiza a UI
    ilha = document.getElementById('ilhaSelect').value; //ela pega o <select id="ilhaSelect"> no HTML e guarda o valor escolhido dentro de ilha.
    if (ilha === 'Basic') {
        taxa = 'Não pode vender';
    } else if (ilha === 'Petal') {
        taxa = 0.5;
    } else if (ilha === 'Desert') {
        taxa = 0.2
    } else if (ilha === 'Vulcano') {
        taxa = 0.15
    };
    buffsAdicionadosCrops();
};
//registra um ouvinte de evento no <select id="ilhaSelect">.
document.getElementById('ilhaSelect').addEventListener('change', ilhaPrestigioAtual);
document.getElementById('ilhaSelect').addEventListener('change', sePossuiVipOuNao); //para que quando eu mude de ilha ele chame a função para mudar autimaticamente o vip e mostrar o resultado corretamente
console.log(ilha)

//================================================================================================================================================

//Se a pessoa possui VIP ou não e desconto que recebe na taxa
let vip = 'Sim';
let desconto = 1;

function sePossuiVipOuNao() {
    vip = document.getElementById('vipSelect').value;
    if (vip === 'Sim' && ilha !== 'Basic') {
        desconto = 0.5;
    } else {
        desconto = 1;
    }
    ilhaPrestigioAtual();
}
document.getElementById('vipSelect').addEventListener('change', sePossuiVipOuNao);