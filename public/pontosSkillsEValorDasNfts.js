//Pontos totais em skills
function mudarIdioma() {

    if (idioma === 'portugues') {

        //preço do flower e por gems
        document.getElementById('valor-do-flower').innerHTML = `
            <img src="icones/flower.png" class="crop-img">Valor do Flower: <img src="icones/usdc.png" class="crop-img">$${Number(precoDoFlower).toFixed(4)} | 
            <img src="icones/gem.png" class="crop-img">Custo por Gem: <img src="icones/usdc.png" class="crop-img">$${Number(precoPorGem).toFixed(4)} ~ <img src="icones/flower.png" class="crop-img">${precoDaGemEmFlower.toFixed(4)}`

        //titulos dos selects e inputs
        document.getElementById('selecione-idioma').innerHTML = 'Language:'; //Mudando o titulo aonde escolhe o idioma!
        document.getElementById('labelNumeroFarm').innerHTML = 'Inserir Farm:'; //Mudando o titulo aonde insere a farm!
        document.getElementById('procurarFarm').innerHTML = 'Pesquisar'; //Mudando o titulo do botao de pesquisa a farm!
        document.getElementById('ilhaAtual').innerHTML = 'Tipo de Ilha:'; //Mudando o titulo da ilha atual que esta ou deseja estar!
        document.getElementById('texto-estacao').innerHTML = 'Estação:'; //Mudando o titulo da Estação atual que esta ou deseja estar!
        document.getElementById('flowerPorCoins').innerHTML = 'Flower por coins:'; //Mudando o titulo de flower por coins!
        document.getElementById('modoDeCalcularCrops').innerHTML = 'Modo de calcular as Crops:'; //Mudando o titulo do modo de escolher como calcular as crops!
        document.getElementById('cropPlotsQuePossui').innerHTML = 'Qtd. de Crop Plots'; //Mudando o titulo aonde vai inserir quantos plots possui!
        document.getElementById('salvarInfos').innerHTML = 'Salvar'; //Mudando o titulo do botao de salvar infos!
        document.getElementById('pacoteDeGems').innerHTML = 'Pacote de Gemas:'; //Mudando o titulo para escolher o pacato de gems!
        document.getElementById('mensagemDeAviso').innerHTML = '* Tanto o "Lucro do Combo" quanto a "Média de Lucro em 24h" já mostram o resultado final, com todos os custos descontados (taxas, custo das sementes e gems).'; //Mudando o titulo para mensagem de aviso sobre o lucro e descontos!

        //textos que vao dentro das opções
        document.getElementById('tipo-de-calculo-crop').options[0].innerHTML = 'Quantidade de Sementes';
        document.getElementById('tipo-de-calculo-crop').options[1].innerHTML = 'Quantidade de Ciclos';

        document.getElementById('estacaoSelect').options[0].innerHTML = 'Primavera';
        document.getElementById('estacaoSelect').options[1].innerHTML = 'Verão';
        document.getElementById('estacaoSelect').options[2].innerHTML = 'Outono';
        document.getElementById('estacaoSelect').options[3].innerHTML = 'Inverno';

    } else if (idioma === 'ingles') {

        //preço do flower e por gems
        document.getElementById('valor-do-flower').innerHTML = `
            <img src="icones/flower.png" class="crop-img">Value of Flower: <img src="icones/usdc.png" class="crop-img">$${precoDoFlower.toFixed(4)} | 
            <img src="icones/gem.png" class="crop-img">Cost per Gem: <img src="icones/usdc.png" class="crop-img">$${precoPorGem.toFixed(4)} ~ <img src="icones/flower.png" class="crop-img">${precoDaGemEmFlower.toFixed(4)}`

        //titulos dos selects e inputs
        document.getElementById('selecione-idioma').innerHTML = 'Idioma:'
        document.getElementById('labelNumeroFarm').innerHTML = 'Enter Farm:';
        document.getElementById('procurarFarm').innerHTML = 'Search';
        document.getElementById('ilhaAtual').innerHTML = 'Island Type:';
        document.getElementById('texto-estacao').innerHTML = 'Season:';
        document.getElementById('flowerPorCoins').innerHTML = 'Flower per coins:';
        document.getElementById('modoDeCalcularCrops').innerHTML = 'Crop Calculation Mode:';
        document.getElementById('cropPlotsQuePossui').innerHTML = 'Number of Crop Plots';
        document.getElementById('salvarInfos').innerHTML = 'Save';
        document.getElementById('pacoteDeGems').innerHTML = 'Gem Pack:';
        document.getElementById('mensagemDeAviso').innerHTML = 'Both the "Combo Profit" and the "Average Profit in 24h" already show the final result, with all costs deducted (fees, seed costs, and gems).'; //Mudando o titulo para mensagem de aviso sobre o lucro e descontos!


        //textos que vao dentro das opções
        document.getElementById('tipo-de-calculo-crop').options[0].innerHTML = 'Quantity of Seeds';
        document.getElementById('tipo-de-calculo-crop').options[1].innerHTML = 'Number of Cycles';

        document.getElementById('estacaoSelect').options[0].innerHTML = 'Spring';
        document.getElementById('estacaoSelect').options[1].innerHTML = 'Summer';
        document.getElementById('estacaoSelect').options[2].innerHTML = 'Autumn';
        document.getElementById('estacaoSelect').options[3].innerHTML = 'Winter';
    }

};