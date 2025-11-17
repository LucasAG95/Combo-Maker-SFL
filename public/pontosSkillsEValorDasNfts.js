//Pontos totais em skills
function mudarIdioma() {

    
    if (idioma === 'portugues') {
        document.getElementById('selecione-idioma').innerHTML = 'Language:'; //Mudando o titulo aonde escolhe o idioma!
        document.getElementById('labelNumeroFarm').innerHTML = 'Inserir Farm:'; //Mudando o titulo aonde insere a farm!
        document.getElementById('procurarFarm').innerHTML = 'Pesquisar'; //Mudando o titulo do botao de pesquisa a farm!
        document.getElementById('ilhaAtual').innerHTML = 'Tipo de Ilha:'; //Mudando o titulo da ilha atual que esta ou deseja estar!
        document.getElementById('texto-estacao').innerHTML = 'Estação:'; //Mudando o titulo da Estação atual que esta ou deseja estar!
        document.getElementById('flowerPorCoins').innerHTML = 'Flower por coins:'; //Mudando o titulo de flower por coins!
        document.getElementById('modoDeCalcularCrops').innerHTML = 'Modo de calcular as Crops:'; //Mudando o titulo do modo de escolher como calcular as crops!
        document.getElementById('cropPlotsQuePossui').innerHTML = 'Qtd. de Crop Plots'; //Mudando o titulo aonde vai inserir quantos plots possui!
        document.getElementById('salvarInfos').innerHTML = 'Salvar'; //Mudando o titulo do botao de salvar infos!

        //textos que vao dentro das opções
        document.getElementById('tipo-de-calculo-crop').options[0].innerHTML = 'Quantidade de Sementes';
        document.getElementById('tipo-de-calculo-crop').options[1].innerHTML = 'Quantidade de Ciclos';

        document.getElementById('estacaoSelect').options[0].innerHTML = 'Primavera';
        document.getElementById('estacaoSelect').options[1].innerHTML = 'Verão';
        document.getElementById('estacaoSelect').options[2].innerHTML = 'Outono';
        document.getElementById('estacaoSelect').options[3].innerHTML = 'Inverno';

    } else if (idioma === 'ingles') {
        document.getElementById('selecione-idioma').innerHTML = 'Idioma:'
        document.getElementById('labelNumeroFarm').innerHTML = 'Enter Farm:';
        document.getElementById('procurarFarm').innerHTML = 'Search';
        document.getElementById('ilhaAtual').innerHTML = 'Island Type:';
        document.getElementById('texto-estacao').innerHTML = 'Season:';
        document.getElementById('flowerPorCoins').innerHTML = 'Flower per coins:';
        document.getElementById('modoDeCalcularCrops').innerHTML = 'Crop Calculation Mode:';
        document.getElementById('cropPlotsQuePossui').innerHTML = 'Number of Crop Plots';
        document.getElementById('salvarInfos').innerHTML = 'Save';

        //textos que vao dentro das opções
        document.getElementById('tipo-de-calculo-crop').options[0].innerHTML = 'Quantity of Seeds';
        document.getElementById('tipo-de-calculo-crop').options[1].innerHTML = 'Number of Cycles';

        document.getElementById('estacaoSelect').options[0].innerHTML = 'Spring';
        document.getElementById('estacaoSelect').options[1].innerHTML = 'Summer';
        document.getElementById('estacaoSelect').options[2].innerHTML = 'Autumn';
        document.getElementById('estacaoSelect').options[3].innerHTML = 'Winter';
    }

};