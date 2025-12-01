//Idioma
let idioma = 'portugues';
function selecionandoIdioma() {
    idioma = document.getElementById('opcao-idioma').value;
    tabelaDeCrops();
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
let modoDeCalcularMinerios = 'hora';

function selecionarModoDeCalculo() {

    modoDeCalularCrops = document.getElementById(`tipo-de-calculo-crop`).value;
    
    modoDeCalcularMinerios = document.getElementById(`tipo-de-calculo-mineral`).value;
    
    chamadorDeBuffs();

};
document.getElementById('tipo-de-calculo-crop').addEventListener('change', selecionarModoDeCalculo);
document.getElementById('tipo-de-calculo-mineral').addEventListener('change', selecionarModoDeCalculo);

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