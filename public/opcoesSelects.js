//Idioma
let idioma = 'ingles';
function selecionandoIdioma() {
    idioma = document.getElementById('opcao-idioma').value;
    chamadorDeBuffs();
    mudarIdioma();
}
document.getElementById('opcao-idioma').addEventListener('change', selecionandoIdioma);

//=======================================================================================================================================================================

//Estação
let estacao = 'spring';
function selecionandoEstacao() {
    estacao = document.getElementById('estacaoSelect').value;
    chamadorDeBuffs();//dps mudar qual chamar
};
document.getElementById('estacaoSelect').addEventListener('change', selecionandoEstacao);

//=======================================================================================================================================================================

//valor da opção inicial
let modoDeCalularCrops = `manual`;
let calcularRestockCrops = 'sim';

let modoDeCalularCropsNaCM = `manual`;
let calcularRestockCM = 'sim';

let modoDeCalularCropsFruta = `manual`;
let calcularRestockFrutas = 'sim';

let modoDeCalcularGreenhouse = `manual`;
let calcularRestockGreenhouse = 'sim';

let modoDeCalcularMinerios = 'hora';
let calcularRestockMinerios = 'sim';

let modoDeResultadoDoCombo = 'diario';

function selecionarModoDeCalculo() {

    modoDeCalularCrops = document.getElementById(`tipo-de-calculo-crop`).value;
    calcularRestockCrops = document.getElementById(`descontar-restock-crops`).value;

    modoDeCalularCropsNaCM = document.getElementById(`tipo-de-calculo-crop-cm`).value;
    calcularRestockCM = document.getElementById(`descontar-restock-cm`).value;

    modoDeCalularCropsFruta = document.getElementById(`tipo-de-calculo-fruta`).value;
    calcularRestockFrutas = document.getElementById(`descontar-restock-frutas`).value;

    modoDeCalcularGreenhouse = document.getElementById(`tipo-de-calculo-greenhouse`).value;
    calcularRestockGreenhouse = document.getElementById(`descontar-restock-greenhouse`).value;
    
    modoDeCalcularMinerios = document.getElementById(`tipo-de-calculo-mineral`).value;
    calcularRestockMinerios = document.getElementById(`descontar-restock-minerais`).value;

    //para mostrar o resultado do combo que você montou!
    modoDeResultadoDoCombo = document.getElementById('visualizar-resultado-do-combo').value;
    
    chamadorDeBuffs();

};
document.getElementById('tipo-de-calculo-crop').addEventListener('change', selecionarModoDeCalculo);
document.getElementById('descontar-restock-crops').addEventListener('change', selecionarModoDeCalculo);

document.getElementById('tipo-de-calculo-crop-cm').addEventListener('change', selecionarModoDeCalculo);
document.getElementById('descontar-restock-cm').addEventListener('change', selecionarModoDeCalculo);

document.getElementById('tipo-de-calculo-fruta').addEventListener('change', selecionarModoDeCalculo);
document.getElementById('descontar-restock-frutas').addEventListener('change', selecionarModoDeCalculo);

document.getElementById('tipo-de-calculo-greenhouse').addEventListener('change', selecionarModoDeCalculo);
document.getElementById('descontar-restock-greenhouse').addEventListener('change', selecionarModoDeCalculo);

document.getElementById('tipo-de-calculo-mineral').addEventListener('change', selecionarModoDeCalculo);
document.getElementById('descontar-restock-minerais').addEventListener('change', selecionarModoDeCalculo);

document.getElementById('visualizar-resultado-do-combo').addEventListener('change',selecionarModoDeCalculo);

//=======================================================================================================================================================================

//Responsavel por dar valor a cada Gem dependendo do pack
let precoPorGem = 0.9 / 100; //valor do primeiro pack dividido pelas gems
let precoDaGemEmFlower;
function valoresDasGems() {
    let packGemsSelecionado = document.getElementById('pack-gems').value;
    let quantidadeGems = parseFloat(packGemsSelecionado.split('-')[0]); // Pega a primeira parte antes do '-'
    let custoDoPack = parseFloat(packGemsSelecionado.split('-')[1]); // Pega tudo depois do '-'
    precoPorGem = custoDoPack / quantidadeGems;
    //conversao do valor de cada gem pra flower
    precoDaGemEmFlower = precoPorGem / precoDoFlower;
    console.log(precoDaGemEmFlower + `esse é o valor`);

    //funções chamadas
    chamadorDeBuffs();
    mudarIdioma();

}
document.getElementById('pack-gems').addEventListener('change', valoresDasGems);

//=============================================================================================================================================

//Script para o botao de copiar a wallet do site
const copyBtn = document.getElementById('copy-wallet');
const walletAddress = document.getElementById('wallet-address');
const tooltip = document.getElementById('copy-tooltip');

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(walletAddress.textContent);

    // mostra o aviso
    tooltip.classList.add('show');

    // esconde após 1.5s
    setTimeout(() => {
      tooltip.classList.remove('show');
    }, 1500);
});


