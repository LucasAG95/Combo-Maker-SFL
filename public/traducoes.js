//Pontos totais em skills
function mudarIdioma() {

    if (idioma === 'portugues') {

        //preço do flower e por gems
        document.getElementById('valor-do-flower').innerHTML = `
            <img src="icones/flower.png" class="crop-img">Valor do Flower: <img src="icones/usdc.png" class="crop-img">$${Number(precoDoFlower).toFixed(4)} | 
            <img src="icones/gem.png" class="crop-img">Custo por Gem: <img src="icones/usdc.png" class="crop-img">$${Number(precoPorGem).toFixed(4)} ~ <img src="icones/flower.png" class="crop-img">${precoDaGemEmFlower.toFixed(4)}`

        //titulos dos selects e inputs
        document.getElementById('donoDaFarm').innerHTML = donoDaFarm === '' ? '' : ` ➜ Dono da Farm: ${donoDaFarm}`;
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
        document.getElementById('tab-sprout-mix').innerHTML = `* Ao selecionar qualquer crop, ela ganhará +0.2 por plot, mas lembre-se de que fertilizantes são buffs temporários e você usa um por semente. Ao selecionar, o sistema vai assumir que você usará o fertilizante em todas as sementes da crop escolhida, então selecione com cuidado para não obter resultados irreais!`;
        document.getElementById('tab-rapid-root').innerHTML = `* Ao selecionar qualquer crop, ela terá seu tempo reduzido pela metade, mas lembre-se de que fertilizantes são buffs temporários e você usa um por semente. Ao selecionar, o sistema vai assumir que você usará o fertilizante em todas as sementes da crop escolhida, então selecione com cuidado para não obter resultados irreais!`;
        document.getElementById('buffs-temporarios').innerHTML = 'Buffs Temporários'; //Mudando o titulo da aba de Buffs Temporarios!
        document.getElementById('total-valor-em-shrines').innerHTML = 'Buffs Temporários'; //Mudando o titulo da sub-aba de Buffs Temporarios!


        document.getElementById('qtdDeArvores').innerHTML = 'Quantidade de Árvores:';
        document.getElementById('qtdDePedras').innerHTML = 'Quantidade de Pedras:';
        document.getElementById('qtdDeFerros').innerHTML = 'Quantidade de Ferros:';
        document.getElementById('qtdDeOuros').innerHTML = 'Quantidade de Ouros:';
        document.getElementById('qtdDeCrimstones').innerHTML = 'Quantidade de Crimstones:';
        document.getElementById('qtdDeOils').innerHTML = 'Quantidade de Oils:';

        document.getElementById('modoDeCalcularMinerios').innerHTML = 'Calcular os Minerios:';

        //textos que vao dentro das opções
        document.getElementById('tipo-de-calculo-crop').options[0].innerHTML = 'Quantidade de Sementes';
        document.getElementById('tipo-de-calculo-crop').options[1].innerHTML = 'Quantidade de Ciclos';

        document.getElementById('estacaoSelect').options[0].innerHTML = 'Primavera';
        document.getElementById('estacaoSelect').options[1].innerHTML = 'Verão';
        document.getElementById('estacaoSelect').options[2].innerHTML = 'Outono';
        document.getElementById('estacaoSelect').options[3].innerHTML = 'Inverno';

        document.getElementById('tipo-de-calculo-mineral').options[0].innerHTML = 'Por Hora';
        document.getElementById('tipo-de-calculo-mineral').options[1].innerHTML = 'Por Rodada';
        document.getElementById('tipo-de-calculo-mineral').options[2].innerHTML = 'Por Ferramenta';
        

        //atualizações feitas
        document.getElementById('avisos-atualizacoes').innerHTML = 'Atualizações Feitas'; //titulo da aba
        document.getElementById('atualizacao-feita').innerHTML = `Ultima Atualização — v0.1.6`; //subtitulo
        document.getElementById('v015').innerHTML = `v0.1.5 ➜ Nesta atualização, corrigimos o problema em que o VIP não atualizava corretamente quando o jogador selecionava que não o possuía. Também ajustamos o desconto de gems nas crops, que estava sendo aplicado duas vezes e resultava em valores incorretos.<br><br>
            Como novidade, adicionamos — ainda em fase de testes — parte do sistema de minérios, permitindo visualizar seus gastos e o possível lucro obtido!<br><br>
            Aproveitem e enviem seu feedback. Caso encontrem algo errado ou tenham sugestões de melhoria, podem me reportar no fórum do Discord ou me marcar no Discord do SunflowerLand: LucasAG95.`; 
        document.getElementById('v016').innerHTML = `v0.1.6 ➜ Quando o idioma era alterado para inglês, a tabela de minérios não estava sendo atualizada corretamente no cálculo por hora. Esse problema foi corrigido e agora está funcionando corretamente!`

    } else if (idioma === 'ingles') {

        //preço do flower e por gems
        document.getElementById('valor-do-flower').innerHTML = `
            <img src="icones/flower.png" class="crop-img">Value of Flower: <img src="icones/usdc.png" class="crop-img">$${precoDoFlower.toFixed(4)} | 
            <img src="icones/gem.png" class="crop-img">Cost per Gem: <img src="icones/usdc.png" class="crop-img">$${precoPorGem.toFixed(4)} ~ <img src="icones/flower.png" class="crop-img">${precoDaGemEmFlower.toFixed(4)}`

        //titulos dos selects e inputs
        document.getElementById('donoDaFarm').innerHTML = donoDaFarm === '' ? '' : ` ➜ Farm Owner: ${donoDaFarm}`;
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
        document.getElementById('mensagemDeAviso').innerHTML = '* Both the "Combo Profit" and the "Average Profit in 24h" already show the final result, with all costs deducted (fees, seed costs, and gems).'; //Mudando o titulo para mensagem de aviso sobre o lucro e descontos!
        document.getElementById('tab-sprout-mix').innerHTML = `* When selecting any crop, it will gain +0.2 per plot, but remember that fertilizers are temporary buffs and you use one per seed. When you select it, the system will assume you’ll use the fertilizer on every seed of the chosen crop, so choose carefully to avoid unrealistic results!`;
        document.getElementById('tab-rapid-root').innerHTML = `* When selecting any crop, its time will be reduced by half, but remember that fertilizers are temporary buffs and you use one per seed. When you select it, the system will assume you’re using it on every seed of the chosen crop, so choose carefully to avoid unrealistic results!`;
        document.getElementById('buffs-temporarios').innerHTML = 'Temporary Buffs';
        document.getElementById('total-valor-em-shrines').innerHTML = 'Temporary Buffs';

        document.getElementById('qtdDeArvores').innerHTML = 'Number of Trees:';
        document.getElementById('qtdDePedras').innerHTML = 'Number of Stones:';
        document.getElementById('qtdDeFerros').innerHTML = 'Number of Irons:';
        document.getElementById('qtdDeOuros').innerHTML = 'Number of Golds:';
        document.getElementById('qtdDeCrimstones').innerHTML = 'Number of Crimstones:';
        document.getElementById('qtdDeOils').innerHTML = 'Number of Oils:';

        document.getElementById('modoDeCalcularMinerios').innerHTML = 'Calculate the Minerals:';

        //textos que vao dentro das opções
        document.getElementById('tipo-de-calculo-crop').options[0].innerHTML = 'Quantity of Seeds';
        document.getElementById('tipo-de-calculo-crop').options[1].innerHTML = 'Number of Cycles';

        document.getElementById('estacaoSelect').options[0].innerHTML = 'Spring';
        document.getElementById('estacaoSelect').options[1].innerHTML = 'Summer';
        document.getElementById('estacaoSelect').options[2].innerHTML = 'Autumn';
        document.getElementById('estacaoSelect').options[3].innerHTML = 'Winter';

        document.getElementById('tipo-de-calculo-mineral').options[0].innerHTML = 'Per Hour';
        document.getElementById('tipo-de-calculo-mineral').options[1].innerHTML = 'Per Round';
        document.getElementById('tipo-de-calculo-mineral').options[2].innerHTML = 'Per Tool';

        //atualizações feitas
        document.getElementById('avisos-atualizacoes').innerHTML = 'Updates Made';
        document.getElementById('atualizacao-feita').innerHTML = `Latest Update — v0.1.6`
        document.getElementById('v015').innerHTML = `In this update, we fixed the issue where the VIP was not updating correctly when the player selected that they didn’t have it. We also adjusted the gem discount on crops, which was being applied twice and resulting in incorrect values.<br><br>
            As a new feature — still in testing — we added part of the mining system, allowing you to view your expenses and potential profit!<br><br>
            Enjoy and share your feedback. If you find anything wrong or have suggestions for improvement, you can report it on the Discord forum or tag me on the SunflowerLand Discord: LucasAG95.<br>`; 
        document.getElementById('v016').innerHTML = `v0.1.6 ➜ When switching the language to English, the mining table was not updating correctly in the per-hour calculation. This issue has been fixed and is now working properly!`

    }
    pontosGastosEmSkills();
    chamadorDeDesbloquearSkills();
    valorTotalEmNfts();
    tabelaMinerios();
};