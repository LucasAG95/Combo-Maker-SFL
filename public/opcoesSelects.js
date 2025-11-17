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
