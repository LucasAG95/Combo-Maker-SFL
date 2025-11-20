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
let estacao = 'Spring';
function selecionandoEstacao() {
    estacao = document.getElementById('estacaoSelect').value;
    buffsAdicionadosCrops();//dps mudar qual chamar
};
document.getElementById('estacaoSelect').addEventListener('change', selecionandoEstacao);

//=======================================================================================================================================================================

let modoDeCalularCrops = `manual`; //valor da opção inicial
function selecionarModoDeCalculo() {
    modoDeCalularCrops = document.getElementById(`tipo-de-calculo-crop`).value;
    buffsAdicionadosCrops();

};
document.getElementById('tipo-de-calculo-crop').addEventListener('change', selecionarModoDeCalculo);

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
    buffsAdicionadosCrops();
    mudarIdioma();

}
document.getElementById('pack-gems').addEventListener('change', valoresDasGems);