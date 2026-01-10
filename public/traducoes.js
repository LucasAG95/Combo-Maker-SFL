//Vai mudar os textos no html de acordo com idioma selecionado!
function mudarIdioma() {

    const opcaoDeIdiomas = idiomaEscolhido[idioma];
    
    //primeiras informações da farm!
    document.getElementById('donoDaFarm').innerHTML = donoDaFarm === '' ? '' : ` ➜ ${opcaoDeIdiomas.tituloDonoDaFarm}: ${donoDaFarm}`;
    document.getElementById('labelNumeroFarm').innerHTML = `${opcaoDeIdiomas.inserirFarm}:`;    
    document.getElementById('procurarFarm').innerHTML = `${opcaoDeIdiomas.pesquisar}`;
    document.getElementById('ilhaAtual').innerHTML = `${opcaoDeIdiomas.tipoDeIlha}:`; 
    document.getElementById('flowerPorCoins').innerHTML = `${opcaoDeIdiomas.flowerPorCoins}:`;
    document.getElementById('salvarInfos').innerHTML = `${opcaoDeIdiomas.botaoSalvarInfos}`;
    document.getElementById('pacoteDeGems').innerHTML = `${opcaoDeIdiomas.pacoteDeGems}:`; 
    document.getElementById('texto-estacao').innerHTML = `${opcaoDeIdiomas.estacao}:`; 
    document.getElementById('estacaoSelect').options[0].innerHTML = `${opcaoDeIdiomas.primavera}`;
    document.getElementById('estacaoSelect').options[1].innerHTML = `${opcaoDeIdiomas.verao}`;
    document.getElementById('estacaoSelect').options[2].innerHTML = `${opcaoDeIdiomas.outono}`;
    document.getElementById('estacaoSelect').options[3].innerHTML = `${opcaoDeIdiomas.inverno}`;
    document.getElementById('valor-do-flower').innerHTML = `
        <img src="icones/flower.png" class="crop-img">${opcaoDeIdiomas.valorDoFlower}: <img src="icones/usdc.png" class="crop-img">$${Number(precoDoFlower).toFixed(4)} | 
        <img src="icones/gem.png" class="crop-img">${opcaoDeIdiomas.custoPorGem}: <img src="icones/usdc.png" class="crop-img">$${Number(precoPorGem).toFixed(4)} ~ <img src="icones/flower.png" class="crop-img">${precoDaGemEmFlower.toFixed(4)}`

    //informações das Crops
    document.getElementById('modoDeCalcularCrops').innerHTML = `${opcaoDeIdiomas.modoDeCalcularCrops}:`; 
    document.getElementById('tipo-de-calculo-crop').options[0].innerHTML = `${opcaoDeIdiomas.calcularCropPorSemente}`;
    document.getElementById('tipo-de-calculo-crop').options[1].innerHTML = `${opcaoDeIdiomas.calcularCropPorRodada}`;
    document.getElementById('cropPlotsQuePossui').innerHTML = `${opcaoDeIdiomas.plotsQuePossui}:`;
    document.getElementById('salvarInfosCrops').innerHTML = `${opcaoDeIdiomas.botaoSalvarInfos}`;
    document.getElementById('limparInfosCrops').innerHTML = `${opcaoDeIdiomas.botaoLimparCrops}`;

    //informações dos Minerios
    document.getElementById('modoDeCalcularMinerios').innerHTML = `${opcaoDeIdiomas.modoDeCalcularMinerios}:`;
    document.getElementById('tipo-de-calculo-mineral').options[0].innerHTML = `${opcaoDeIdiomas.calcularMineriosPorHora}`;
    document.getElementById('tipo-de-calculo-mineral').options[1].innerHTML = `${opcaoDeIdiomas.calcularMineriosPorRodada}`;
    document.getElementById('tipo-de-calculo-mineral').options[2].innerHTML = `${opcaoDeIdiomas.calcularMineriosPorFerramenta}`;
    document.getElementById('qtdDeArvores').innerHTML = `${opcaoDeIdiomas.qtdDeArvores}:`;
    document.getElementById('qtdDePedras').innerHTML = `${opcaoDeIdiomas.qtdDePedras}:`;
    document.getElementById('qtdDeFerros').innerHTML = `${opcaoDeIdiomas.qtdDeFerros}:`;
    document.getElementById('qtdDeOuros').innerHTML = `${opcaoDeIdiomas.qtdDeOuros}:`;
    document.getElementById('qtdDeCrimstones').innerHTML = `${opcaoDeIdiomas.qtdDeCrimstones}:`;
    document.getElementById('qtdDeOils').innerHTML = `${opcaoDeIdiomas.qtdDeOils}:`;
    document.getElementById('salvarInfosMinerais').innerHTML = `${opcaoDeIdiomas.botaoSalvarInfos}`;
    document.getElementById('limparInfosMinerais').innerHTML = `${opcaoDeIdiomas.botaoLimparMinerais}`;

    //informações Crop Machine
    document.getElementById('cropPlotsQuePossuiCM').innerHTML = `${opcaoDeIdiomas.quantidadeDePlotsCM} ➜ ${plotsCM}`;
    document.getElementById('oilGastoPorHora').innerHTML = `${opcaoDeIdiomas.quantidadeDeOilPorHora} ➜ <img src="./minerais/oil.png" class="crop-img">${oilPorHora.toFixed(2)}`;
    document.getElementById('modoDeCalcularCropsCM').innerHTML = `${opcaoDeIdiomas.modoDeCalcularCropsCM}:`
    document.getElementById('tipo-de-calculo-crop-cm').options[0].innerHTML = `${opcaoDeIdiomas.calcularCMPorSemente}`;
    document.getElementById('tipo-de-calculo-crop-cm').options[1].innerHTML = `${opcaoDeIdiomas.calcularCMPorRodada}`;
    document.getElementById('tipo-de-calculo-crop-cm').options[2].innerHTML = `${opcaoDeIdiomas.calcularCMPorEstoque}`;
    document.getElementById('limparInfosCM').innerHTML = `${opcaoDeIdiomas.botaoLimparCM}`;

    //informações Frutas
    document.getElementById('frutaTabName').innerHTML = `${opcaoDeIdiomas.subTabFrutaNome}`;
    document.getElementById('fruitPlotsQuePossui').innerHTML = `${opcaoDeIdiomas.plotsFrutasQuePossui}`;
    document.getElementById('rodadasQuePossuiUmaFrutifera').innerHTML = `${opcaoDeIdiomas.rodadasQueDuramAsFrutiferas}: ${frutiferasDuram} ${opcaoDeIdiomas.rodadas}`
    document.getElementById('modoDeCalcularFrutas').innerHTML = `${opcaoDeIdiomas.modoDeCalcularFrutas}:`;
    document.getElementById('tipo-de-calculo-fruta').options[0].innerHTML = `${opcaoDeIdiomas.calcularFrutaPorSemente}`;
    document.getElementById('tipo-de-calculo-fruta').options[1].innerHTML = `${opcaoDeIdiomas.calcularFrutaPorRodada}`;
    document.getElementById('salvarInfosFrutas').innerHTML = `${opcaoDeIdiomas.botaoSalvarInfos}`;
    document.getElementById('limparInfosFrutas').innerHTML = `${opcaoDeIdiomas.botaoLimparFrutas}`;

    //informações Greenhouse
    document.getElementById('plotsQuePossuiGH').innerHTML = `${opcaoDeIdiomas.plotsQuePossuiGH} ➜ ${plotsGH}`;
    document.getElementById('modoDeCalcularGreenhouse').innerHTML = `${opcaoDeIdiomas.modoDeCalcularCropsGH}:`
    document.getElementById('tipo-de-calculo-greenhouse').options[0].innerHTML = `${opcaoDeIdiomas.calcularGHPorSemente}`;
    document.getElementById('tipo-de-calculo-greenhouse').options[1].innerHTML = `${opcaoDeIdiomas.calcularGHPorRodada}`;
    document.getElementById('limparInfosGreenhouse').innerHTML = `${opcaoDeIdiomas.botaoLimparGH}`;

    //Todos Restocks
    document.getElementById('descontar-restock-crops').options[0].innerHTML = `${opcaoDeIdiomas.descontarCustoRestock}`;
    document.getElementById('descontar-restock-crops').options[1].innerHTML = `${opcaoDeIdiomas.naoDescontarCusto}`;
    document.getElementById('descontar-restock-cm').options[0].innerHTML = `${opcaoDeIdiomas.descontarCustoRestock}`;
    document.getElementById('descontar-restock-cm').options[1].innerHTML = `${opcaoDeIdiomas.naoDescontarCusto}`;
    document.getElementById('descontar-restock-frutas').options[0].innerHTML = `${opcaoDeIdiomas.descontarCustoRestock}`;
    document.getElementById('descontar-restock-frutas').options[1].innerHTML = `${opcaoDeIdiomas.naoDescontarCusto}`;
    document.getElementById('descontar-restock-greenhouse').options[0].innerHTML = `${opcaoDeIdiomas.descontarCustoRestock}`;
    document.getElementById('descontar-restock-greenhouse').options[1].innerHTML = `${opcaoDeIdiomas.naoDescontarCusto}`;
    document.getElementById('descontar-restock-minerais').options[0].innerHTML = `${opcaoDeIdiomas.descontarCustoRestock}`;
    document.getElementById('descontar-restock-minerais').options[1].innerHTML = `${opcaoDeIdiomas.naoDescontarCusto}`;

    //Animais
    document.getElementById('subGalinhas').innerHTML = `${opcaoDeIdiomas.galinhas}`;
    document.getElementById('subVacas').innerHTML = `${opcaoDeIdiomas.vacas}`;
    document.getElementById('subOvelhas').innerHTML = `${opcaoDeIdiomas.ovelhas}`;

    //Galinhas
    document.getElementById('precoRacao').innerHTML = `(${opcaoDeIdiomas.precoRacao} ➜ <img src="./animais/kernelBlend.png" class="crop-img">${Number(mapaDosValoresDoMarket['corn'].valor).toFixed(4)} | 
        <img src="./animais/hay.png" class="crop-img">${Number(mapaDosValoresDoMarket['wheat'].valor).toFixed(4)} | 
        <img src="./animais/nutriBarley.png" class="crop-img">${Number(mapaDosValoresDoMarket['barley'].valor).toFixed(4)} | 
        <img src="./animais/mixedGrain.png" class="crop-img">${Number(mapaDosValoresDoMarket['corn'].valor + mapaDosValoresDoMarket['wheat'].valor + mapaDosValoresDoMarket['barley'].valor).toFixed(4)} |
        <img src="./animais/kaleMix.png" class="crop-img">${Number(mapaDosValoresDoMarket['kale'].valor * 3).toFixed(4)} |
        <img src="./animais/omnifeed.png" class="crop-img">${Number(precoDaGemEmFlower).toFixed(4)})`

    document.getElementById('comidaUsadaAteLevel3').innerHTML = `${opcaoDeIdiomas.comidaUsadaAteLevel3}:`;
    document.getElementById('comidaUsadaDoLevel4ao6').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel4ao6}:`;
    document.getElementById('comidaUsadaDoLevel7ao10').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel7ao10}:`;
    document.getElementById('comidaUsadaDoLevel11ao15').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel11ao15}:`;
    
    document.getElementById('tempoDasGalinhas').innerHTML = `(${opcaoDeIdiomas.tempoDaGalinha}: <img src="./icones/tempo.png" class="crop-img">${formatarTempo(animais.galinhas[0].tempo)})`;
    document.getElementById('valorDoOvo').innerHTML = `(${opcaoDeIdiomas.valorDoOvo} <img src="./animais/egg.png" class="crop-img"> ➜ <img src="./icones/flower.png" class="crop-img">${Number(mapaDosValoresDoMarket['egg'].valor).toFixed(5)})`;
    document.getElementById('valorDaPena').innerHTML = `(${opcaoDeIdiomas.valorDaPena} <img src="./animais/feather.png" class="crop-img"> ➜ <img src="./icones/flower.png" class="crop-img">${Number(mapaDosValoresDoMarket['feather'].valor).toFixed(5)})`;
    document.getElementById('limparInfosGalinhas').innerHTML = `${opcaoDeIdiomas.limparGalinhas}`;

    //Vacas
    document.getElementById('precoRacaoVaca').innerHTML = `(${opcaoDeIdiomas.precoRacao} ➜ <img src="./animais/kernelBlend.png" class="crop-img">${Number(mapaDosValoresDoMarket['corn'].valor).toFixed(4)} | 
        <img src="./animais/hay.png" class="crop-img">${Number(mapaDosValoresDoMarket['wheat'].valor).toFixed(4)} | 
        <img src="./animais/nutriBarley.png" class="crop-img">${Number(mapaDosValoresDoMarket['barley'].valor).toFixed(4)} | 
        <img src="./animais/mixedGrain.png" class="crop-img">${Number(mapaDosValoresDoMarket['corn'].valor + mapaDosValoresDoMarket['wheat'].valor + mapaDosValoresDoMarket['barley'].valor).toFixed(4)} |
        <img src="./animais/kaleMix.png" class="crop-img">${Number(mapaDosValoresDoMarket['kale'].valor * 3).toFixed(4)} |
        <img src="./animais/omnifeed.png" class="crop-img">${Number(precoDaGemEmFlower).toFixed(4)})`

    document.getElementById('comidaVacaAteLevel3').innerHTML = `${opcaoDeIdiomas.comidaUsadaAteLevel3}:`;
    document.getElementById('comidaVacaDoLevel4ao6').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel4ao6}:`;
    document.getElementById('comidaVacaDoLevel7ao10').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel7ao10}:`;
    document.getElementById('comidaVacaDoLevel11ao15').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel11ao15}:`;
    
    document.getElementById('tempoDasVacas').innerHTML = `(${opcaoDeIdiomas.tempoDaVaca}: <img src="./icones/tempo.png" class="crop-img">${formatarTempo(animais.vacas[0].tempo)})`;
    document.getElementById('valorDoLeite').innerHTML = `(${opcaoDeIdiomas.valorDoLeite} <img src="./animais/milk.png" class="crop-img"> ➜ <img src="./icones/flower.png" class="crop-img">${Number(mapaDosValoresDoMarket['milk'].valor).toFixed(5)})`;
    document.getElementById('valorDoCouro').innerHTML = `(${opcaoDeIdiomas.valorDoCouro} <img src="./animais/leather.png" class="crop-img"> ➜ <img src="./icones/flower.png" class="crop-img">${Number(mapaDosValoresDoMarket['leather'].valor).toFixed(5)})`;
    document.getElementById('limparInfosVacas').innerHTML = `${opcaoDeIdiomas.limparVacas}`;

    //Ovelhas
    document.getElementById('precoRacaoOvelha').innerHTML = `(${opcaoDeIdiomas.precoRacao} ➜ <img src="./animais/kernelBlend.png" class="crop-img">${Number(mapaDosValoresDoMarket['corn'].valor).toFixed(4)} | 
        <img src="./animais/hay.png" class="crop-img">${Number(mapaDosValoresDoMarket['wheat'].valor).toFixed(4)} | 
        <img src="./animais/nutriBarley.png" class="crop-img">${Number(mapaDosValoresDoMarket['barley'].valor).toFixed(4)} | 
        <img src="./animais/mixedGrain.png" class="crop-img">${Number(mapaDosValoresDoMarket['corn'].valor + mapaDosValoresDoMarket['wheat'].valor + mapaDosValoresDoMarket['barley'].valor).toFixed(4)} |
        <img src="./animais/kaleMix.png" class="crop-img">${Number(mapaDosValoresDoMarket['kale'].valor * 3).toFixed(4)} |
        <img src="./animais/omnifeed.png" class="crop-img">${Number(precoDaGemEmFlower).toFixed(4)})`

    document.getElementById('comidaOvelhaAteLevel3').innerHTML = `${opcaoDeIdiomas.comidaUsadaAteLevel3}:`;
    document.getElementById('comidaOvelhaDoLevel4ao6').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel4ao6}:`;
    document.getElementById('comidaOvelhaDoLevel7ao10').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel7ao10}:`;
    document.getElementById('comidaOvelhaDoLevel11ao15').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel11ao15}:`;
    
    document.getElementById('tempoDasOvelhas').innerHTML = `(${opcaoDeIdiomas.tempoDaOvelha}: <img src="./icones/tempo.png" class="crop-img">${formatarTempo(animais.ovelhas[0].tempo)})`;
    document.getElementById('valorDaLa').innerHTML = `(${opcaoDeIdiomas.valorDaLa} <img src="./animais/wool.png" class="crop-img"> ➜ <img src="./icones/flower.png" class="crop-img">${Number(mapaDosValoresDoMarket['wool'].valor).toFixed(5)})`;
    document.getElementById('valorDaLaMerino').innerHTML = `(${opcaoDeIdiomas.valorDaLaMerino} <img src="./animais/merinoWool.png" class="crop-img"> ➜ <img src="./icones/flower.png" class="crop-img">${Number(mapaDosValoresDoMarket['merinoWool'].valor).toFixed(5)})`;
    document.getElementById('limparInfosOvelhas').innerHTML = `${opcaoDeIdiomas.limparOvelhas}`;

    //NFTs, Skills e Buffs Temporarios
    document.getElementById('buffs-temporarios').innerHTML = `${opcaoDeIdiomas.abaBuffsTemporarios}`;
    document.getElementById('total-valor-em-shrines').innerHTML = `${opcaoDeIdiomas.tituloDentroDaAbaBuffsTemporarios}`;

    //Avisos
    document.getElementById('aviso-de-manter-horas').innerHTML = `* ${opcaoDeIdiomas.avisoCalculosMinerais}`
    document.getElementById('tab-sprout-mix').innerHTML = `* ${opcaoDeIdiomas.avisoSproutMix}`;
    document.getElementById('tab-rapid-root').innerHTML = `* ${opcaoDeIdiomas.avisoRapidRoot}`;
    document.getElementById('aviso-crop-to-coins').innerHTML = `${opcaoDeIdiomas.avisoCropToCoins}`;

    //Resultado Total do combo montado
    document.getElementById('accordionResultadoComboCompleto').innerHTML = `${opcaoDeIdiomas.tituloAccordionCombo}`
    document.getElementById('verResultadoSemanalOuDiario').innerHTML = `${opcaoDeIdiomas.modoDeVerResultadoCombo}`
    document.getElementById('visualizar-resultado-do-combo').options[0].innerHTML = `${opcaoDeIdiomas.diario}`;
    document.getElementById('visualizar-resultado-do-combo').options[1].innerHTML = `${opcaoDeIdiomas.semanal}`;

    //Atualizações feitas
    const atualizacoesFeitas = idiomaDasAtualizacoes[idioma];
    document.getElementById('avisos-atualizacoes').innerHTML = `${atualizacoesFeitas.nomeDaAbaAtualizacao}`; 
    document.getElementById('atualizacao-feita').innerHTML = `${atualizacoesFeitas.ultimaAtualizacao} — v0.2.6`;
    document.getElementById('v5').innerHTML = `${atualizacoesFeitas.atualizacaoV022}`;
    document.getElementById('v4').innerHTML = `${atualizacoesFeitas.atualizacaoV023}`;
    document.getElementById('v3').innerHTML = `${atualizacoesFeitas.atualizacaoV024}`;
    document.getElementById('v2').innerHTML = `${atualizacoesFeitas.atualizacaoV025}`;
    document.getElementById('v1').innerHTML = `${atualizacoesFeitas.atualizacaoV026}`;


    pontosGastosEmSkills();
    chamadorDeDesbloquearSkills();
    valorTotalEmNfts();
    tabelaMinerios();
};

const idiomaEscolhido = {
    portugues: {
        //dados iniciais
        tituloDonoDaFarm: 'Dono da Farm',
        opcaoIdioma: 'Language',
        inserirFarm: 'Inserir Farm',
        pesquisar: 'Pesquisar',
        tipoDeIlha: 'Tipo de Ilha',
        flowerPorCoins: 'Flower por coins',
        valorDoFlower: 'Valor do Flower',
        pacoteDeGems: 'Pacote de Gemas',
        custoPorGem: 'Custo por Gem',
        estacao: 'Estação',
        primavera: 'Primavera',
        verao: 'Verão',
        outono: 'Outono',
        inverno: 'Inverno',

        //todos restocks
        descontarCustoRestock: 'Descontar custo',
        naoDescontarCusto: 'Não descontar',
        
        //dados das Crops
        modoDeCalcularCrops: 'Modo de calcular as Crops',
        calcularCropPorSemente: 'Quantidade de Sementes',
        calcularCropPorRodada: 'Quantidade de Ciclos',
        plotsQuePossui: 'Qtd. de Crop Plots',
        botaoSalvarInfos: 'Salvar',
        botaoLimparCrops: 'Limpar Crops',

        //dados dos minerais
        modoDeCalcularMinerios: 'Calcular os Minerios',
        calcularMineriosPorFerramenta: 'Por Ferramenta',
        calcularMineriosPorRodada: 'Por Rodada',
        calcularMineriosPorHora: 'Por Hora',
        qtdDeArvores: 'Quantidade de Árvores',
        qtdDePedras: 'Quantidade de Pedras',
        qtdDeFerros: 'Quantidade de Ferros',
        qtdDeOuros: 'Quantidade de Ouros',
        qtdDeCrimstones: 'Quantidade de Crimstones',
        qtdDeOils: 'Quantidade de Oils',
        botaoLimparMinerais: 'Limpar Minerais',

        //dados CM
        modoDeCalcularCropsCM: 'Modo de Calcular',
        quantidadeDePlotsCM: 'Plots Crop Machine',
        quantidadeDeOilPorHora: 'Oil gasto por Hora',
        calcularCMPorSemente: 'Por Semente',
        calcularCMPorRodada: 'Por Ciclo',
        calcularCMPorEstoque: 'Por Estoque',
        botaoLimparCM: 'Limpar CM',

        //dados Frutas
        subTabFrutaNome: 'Frutas',
        plotsFrutasQuePossui: 'Qtd. de Canteiros de Frutas',
        modoDeCalcularFrutas: 'Modo de Calcular',
        calcularFrutaPorSemente: 'Por Semente',
        calcularFrutaPorRodada: 'Por Ciclo',
        rodadasQueDuramAsFrutiferas: 'Suas árvores frutíferas duram',
        rodadas: 'rodadas',
        botaoLimparFrutas: 'Limpar Frutas',

        //dados Greenhouse
        plotsQuePossuiGH: 'Quantidade de Plots da Greenhouse',
        modoDeCalcularCropsGH: 'Modo de Calcular',
        calcularGHPorSemente: 'Por Semente',
        calcularGHPorRodada: 'Por Ciclo',
        botaoLimparGH: 'Limpar GH',

        //dados dos Animais
        precoRacao: 'Preço das Rações',
        galinhas: 'Galinhas',
        vacas: 'Vacas',
        ovelhas: 'Ovelhas',
        tempoDaGalinha: 'Cooldown das Galinhas',
        valorDoOvo: 'Preço do Ovo',
        valorDaPena: 'Preço da Pena',
        limparGalinhas: 'Limpar Galinhas',

        tempoDaVaca: 'Cooldown das Vacas',
        valorDoLeite: 'Preço do Leite',
        valorDoCouro: 'Preço do Couro',
        limparVacas: 'Limpar Vacas',

        tempoDaOvelha: 'Cooldown das Ovelhas',
        valorDaLa: 'Preço da Lã',
        valorDaLaMerino: 'Preço da Lã Merino',
        limparOvelhas: 'Limpar Ovelhas',

        comidaUsadaAteLevel3: 'Até Level 3',
        comidaUsadaDoLevel4ao6: 'Level 4 ao 6',
        comidaUsadaDoLevel7ao10: 'Level 7 ao 10',
        comidaUsadaDoLevel11ao15: 'Level 11 ao 15',

        //dados Crop to Coins
        avisoCropToCoins: '* Aqui você pode comparar quais crops e frutas oferecem as melhores oportunidades de compra em Flower e venda por coins.<br>* Clique na coluna desejada para ordenar os parâmetros em ordem crescente ou decrescente.',

        //nome das abas de NFTs/Skills quando precisa de tradução
        abaBuffsTemporarios: 'Buffs Temporários',
        tituloDentroDaAbaBuffsTemporarios: 'Buffs Temporários', //tirar talvez

        //dados accordion resultado do combo total
        tituloAccordionCombo: '📊 Resultado do Combo Completo',
        modoDeVerResultadoCombo: 'Visualizar resultado:',
        diario: 'Diário',
        semanal: 'Semanal',

        //mensagem de avisos
        avisoCalculosMinerais: 'Se você optar por calcular por ferramenta ou por ciclo, tente manter o Tempo Total em, no máximo, 24 horas para obter resultados mais precisos. Caso ultrapasse esse limite, desconsidere a média de lucro diário e semanal.',
        avisoSproutMix: 'Ao selecionar qualquer crop, ela ganhará +0.2 por plot, mas lembre-se de que fertilizantes são buffs temporários e você usa um por semente. Ao selecionar, o sistema vai assumir que você usará o fertilizante em todas as sementes da crop escolhida, então selecione com cuidado para não obter resultados irreais!',
        avisoRapidRoot: 'Ao selecionar qualquer crop, ela terá seu tempo reduzido pela metade, mas lembre-se de que fertilizantes são buffs temporários e você usa um por semente. Ao selecionar, o sistema vai assumir que você usará o fertilizante em todas as sementes da crop escolhida, então selecione com cuidado para não obter resultados irreais!',
    },
    ingles: {
        //dados iniciais
        tituloDonoDaFarm: 'Farm Owner',
        opcaoIdioma: 'Idioma',
        inserirFarm: 'Enter Farm',
        pesquisar: 'Search',
        tipoDeIlha: 'Island Type',
        flowerPorCoins: 'Flower per coins',
        valorDoFlower: 'Value of Flower',
        pacoteDeGems: 'Gem Pack',
        custoPorGem: 'Cost per Gem',
        estacao: 'Season',
        primavera: 'Spring',
        verao: 'Summer',
        outono: 'Autumn',
        inverno: 'Winter',

        //todos restocks
        descontarCustoRestock: 'Deduct cost',
        naoDescontarCusto: 'Do not deduct',
        
        //dados das Crops
        modoDeCalcularCrops: 'Crop Calculation Mode',
        calcularCropPorSemente: 'Quantity of Seeds',
        calcularCropPorRodada: 'Number of Cycles',
        plotsQuePossui: 'Number of Crop Plots',
        botaoSalvarInfos: 'Save',
        botaoLimparCrops: 'Clear Crops',

        //dados dos minerais
        modoDeCalcularMinerios: 'Calculate the Minerals',
        calcularMineriosPorFerramenta: 'Per Tool',
        calcularMineriosPorRodada: 'Per Round',
        calcularMineriosPorHora: 'Per Hour',
        qtdDeArvores: 'Number of Trees',
        qtdDePedras: 'Number of Stones',
        qtdDeFerros: 'Number of Irons',
        qtdDeOuros: 'Number of Golds',
        qtdDeCrimstones: 'Number of Crimstones',
        qtdDeOils: 'Number of Oils',
        botaoLimparMinerais: 'Clear Minerals',

        //dados CM
        modoDeCalcularCropsCM: 'Calculation Mode',
        quantidadeDePlotsCM: 'Plots Crop Machine',
        quantidadeDeOilPorHora: 'Oil consumed per hour',
        calcularCMPorSemente: 'Per Seed',
        calcularCMPorRodada: 'Per Cycle',
        calcularCMPorEstoque: 'By Stock',
        botaoLimparCM: 'Clear CM',

        //dados Frutas
        subTabFrutaNome: 'Fruits',
        plotsFrutasQuePossui: 'Number of Fruit Patches',
        modoDeCalcularFrutas: 'Calculation Mode',
        calcularFrutaPorSemente: 'Per Seed',
        calcularFrutaPorRodada: 'Per Cycle',
        rodadasQueDuramAsFrutiferas: 'Your fruit trees last for',
        rodadas: 'rounds',
        botaoLimparFrutas: 'Clear Fruits',

        //dados Greenhouse
        plotsQuePossuiGH: 'Number of Greenhouse Plots',
        modoDeCalcularCropsGH: 'Calculation Mode',
        calcularGHPorSemente: 'Per Seed',
        calcularGHPorRodada: 'Per Cycle',
        botaoLimparGH: 'Clear GH',

        //dados Animais
        precoRacao: 'Feed Price',
        galinhas: 'Chickens',
        vacas: 'Cows',
        ovelhas: 'Sheep',
        comidaUsadaAteLevel3: 'Up to Level 3',
        comidaUsadaDoLevel4ao6: 'Level 4 to 6',
        comidaUsadaDoLevel7ao10: 'Level 7 to 10',
        comidaUsadaDoLevel11ao15: 'Level 11 to 15',
        tempoDaGalinha: 'Chicken Cooldown',
        valorDoOvo: 'Egg Price',
        valorDaPena: 'Feather Price',
        limparGalinhas: 'Clear Chickens',
        tempoDaVaca: 'Cow Cooldown',
        valorDoLeite: 'Milk Price',
        valorDoCouro: 'Leather Price',
        limparVacas: 'Clear Cows',
        tempoDaOvelha: 'Sheep Cooldown',
        valorDaLa: 'Wool Price',
        valorDaLaMerino: 'Merino Wool Price',
        limparOvelhas: 'Clear Sheep',



        //dados Crop to Coins
        avisoCropToCoins: '* Here you can compare which crops and fruits offer the best opportunities to buy with Flower and sell for coins.<br>* Click on the desired column to sort the parameters in ascending or descending order.',

        //nome das abas de NFTs/Skills quando precisa de tradução
        abaBuffsTemporarios: 'Temporary Buffs',
        tituloDentroDaAbaBuffsTemporarios: 'Temporary Buffs',

        //dados accordion resultado do combo total
        tituloAccordionCombo: '📊 Full Combo Result',
        modoDeVerResultadoCombo: 'View result:',
        diario: 'Daily',
        semanal: 'Weekly',

        //mensagem de avisos
        avisoCalculosMinerais: 'If you choose to calculate by tool or by cycle, try to keep the Total Time at a maximum of 24 hours to obtain more accurate results. If this limit is exceeded, disregard the daily and weekly profit averages.',
        avisoSproutMix: 'When selecting any crop, it will gain +0.2 per plot, but remember that fertilizers are temporary buffs and you use one per seed. When you select it, the system will assume you’ll use the fertilizer on every seed of the chosen crop, so choose carefully to avoid unrealistic results!',
        avisoRapidRoot: 'When selecting any crop, its time will be reduced by half, but remember that fertilizers are temporary buffs and you use one per seed. When you select it, the system will assume you’re using it on every seed of the chosen crop, so choose carefully to avoid unrealistic results!',
    }


}
        
const idiomaDasAtualizacoes = {
    portugues: {
        nomeDaAbaAtualizacao: 'Atualizações Feitas',
        ultimaAtualizacao: 'Ultima Atualização',
        
        atualizacaoV015: `v0.1.5 ➜ Nesta atualização, corrigimos o problema em que o VIP não atualizava corretamente quando o jogador selecionava que não o possuía. Também ajustamos o desconto de gems nas crops, que estava sendo aplicado duas vezes e resultava em valores incorretos.<br><br>
            Como novidade, adicionamos — ainda em fase de testes — parte do sistema de minérios, permitindo visualizar seus gastos e o possível lucro obtido!<br><br>
            Aproveitem e enviem seu feedback. Caso encontrem algo errado ou tenham sugestões de melhoria, podem me reportar no fórum do Discord ou me marcar no Discord do SunflowerLand: LucasAG95.`,
        
        atualizacaoV016: `v0.1.6 ➜ Quando o idioma era alterado para inglês, a tabela de minérios não estava sendo atualizada corretamente no cálculo por hora. Esse problema foi corrigido e agora está funcionando corretamente!`,
        
        atualizacaoV017: `v0.1.7 ➜ As tabelas de simulação agora estão organizadas em Tabs, permitindo navegar entre elas de forma muito mais rápida e prática. Essa melhoria deixa o uso bem mais fluido e reduz o tempo para alternar entre diferentes cálculos.
            <br>Espero que gostem dessa atualização!`,

        atualizacaoV018: `v0.1.8<br>
            • Correção no cálculo de minerais por ciclos: o aviso de limite de 24 horas estava impedindo o cálculo da madeira quando ultrapassado — esse aviso foi removido!<br>
            • Adicionado um aviso em texto para orientar o usuário a manter os tempos abaixo de 24 horas, caso queira resultados mais precisos.<br>
            • Inclusão das ferramentas secundárias (Rod, Sand Shovel e Sand Drill), permitindo calcular seus custos e exibir de forma mais clara o lucro diário!`,

        atualizacaoV019: `v0.1.9<br>
            • Adicionado Crop Machine ao site.<br>
            • Ajuste nas contas que usam Skills ou NFTs que dão chance do recurso voltar instantaneamente.<br>
            • Adicionado restante das SFTs (Radiant Ray e Gilded Swordfish) que buffam os minerios.<br>
            • Seção com informações sobre mim agora disponível no cabeçalho do site!`,
        
        atualizacaoV020: `v0.2.0<br>
            • Adicionado o cálculo de Frutas ao site.<br>
            • Implementado o salvamento local, armazenando automaticamente sua última configuração — desde o idioma selecionado até o combo montado — sem precisar preencher tudo novamente!<br>
            • Incluído um botão para limpar cada aba, permitindo reiniciar seu combo do zero com apenas um clique.<br>
            • Corrigida a exibição da quantidade correta de Oil e Plots presentes na Crop Machine.<br>
            • Adicionado um timer de 15 minutos para atualizar os preços dos recursos, das NFTs e do Flower.<br>
            • Próximas possíveis atualizações: Adição da Greenhouse e da aba Crop to Coins!`,
        
        atualizacaoV021: `v0.2.1<br>
            • Adicionado o cálculo da Greenhouse ao site.<br>
            • Adicionadas as NFTs Ancient Shovel e Ancient Rod aos wearables de minérios temporariamente, até que as categorias de pesca e escavação sejam implementadas.<br>
            • Próximas possíveis atualizações: adição da aba Crop to Coins e inclusão dos Buds!`,

        atualizacaoV022: `v0.2.2<br>
            • Adicionada a tabela Crop to Coins.<br>
            • Ao clicar em qualquer coluna da aba Crop to Coins, a tabela é ordenada em ordem crescente ou decrescente de acordo com a coluna selecionada.<br>
            • Próxima possível atualização: inclusão dos Buds!`,

        atualizacaoV023: `v0.2.3<br>
            • Adicionado o Resultado do Combo Completo.<br>
            • Aqui você pode visualizar sua média diária ou semanal somando todo o combo que você montou e subtraindo a quantidade de restock, trazendo resultados melhores!`,

        atualizacaoV024: `v0.2.4 - Data da Atualização: 06/01/2026 <br><br>
            • Adicionada a tabela de todos os animais.<br>
            • Skills, Legacys e NFTs dos animais foram adicionados.<br>
            • Agora você pode escolher a comida que deseja dar ao seu animal! Basta selecionar as opções. Caso queira testar o Mixed Grain (que usa couve), selecione também a skill Kale Mix.<br>
            • Adicionado o resultado ao combo completo.<br>
            • Os animais agora ficam salvos mesmo se você fechar a página e abrir novamente depois.<br>
            • Nunca leve os resultados como 100% de certeza, pois sou humano e podem ocorrer erros.<br>
            • Esta parte da tabela foi a mais trabalhosa e mentalmente exaustiva. Apesar de não ter encontrado erros nos testes, ainda pode haver algum. Caso encontre, informe no Discord do fórum — agradeço qualquer feedback!<br>
            • Próxima atualização planejada: Buds.<br>`,
        
        atualizacaoV025: `v0.2.5 - Data da Atualização: 10/01/2026 <br><br>
            • Opção de descontar ou não o custo de Restock.<br>
            • Media de Lucro por animal adicionado!
            • Diminuição no tamanhos dos inputs e de alguns titulos de colunas!`,

        atualizacaoV026: `v0.2.6 - Data da Atualização: 10/01/2026 <br><br>
            • Remodelagem na tabela de animais e lucro individual por level do animal<br>`,

        atualizacaoV027: `• ajustar o card dos minerios que mostra o custo errado`,

    },
    ingles: {
        nomeDaAbaAtualizacao: 'Updates Made',
        ultimaAtualizacao: 'Latest Update',

        atualizacaoV015: `v0.1.5 ➜ In this update, we fixed the issue where the VIP was not updating correctly when the player selected that they didn’t have it. We also adjusted the gem discount on crops, which was being applied twice and resulting in incorrect values.<br><br>
            As a new feature — still in testing — we added part of the mining system, allowing you to view your expenses and potential profit!<br><br>
            Enjoy and share your feedback. If you find anything wrong or have suggestions for improvement, you can report it on the Discord forum or tag me on the SunflowerLand Discord: LucasAG95.<br>`,
        
        atualizacaoV016: `v0.1.6 ➜ When switching the language to English, the mining table was not updating correctly in the per-hour calculation. This issue has been fixed and is now working properly!`,
        
        atualizacaoV017: `v0.1.7 ➜ The simulation tables are now organized into Tabs, allowing you to navigate between them much faster and more easily. This improvement makes the experience much smoother and reduces the time needed to switch between different calculations.
            <br>I hope you enjoy this update!`,

        atualizacaoV018: `v0.1.8<br>
            • Fix in mineral-per-cycle calculations: the 24-hour limit warning was preventing wood from being calculated when exceeded — this warning has been removed!<br>
            • Added a text warning to inform users to keep times below 24 hours if they want more accurate results.<br>
            • Added secondary tools (Rod, Sand Shovel and Sand Drill), allowing you to calculate their costs and better display your daily profit!`,

        atualizacaoV019: `v0.1.9<br>
            • Added Crop Machine to the site.<br>
            • Adjusted calculations that use Skills or NFTs that give a chance for the resource to return instantly.<br>
            • Added the remaining SFTs (Radiant Ray and Gilded Swordfish) that buff the minerals.<br>
            • Section with information about me now available in the site header!`,
        
        atualizacaoV020: `v0.2.0<br>
            • Added Fruit calculations to the site.<br>
            • Implemented local saving, which automatically stores your last configuration — from the selected language to your assembled combo — so you don’t need to fill everything again!<br>
            • Added a button to clear each tab, allowing you to restart your combo from scratch with a single click.<br>
            • Fixed the display of the correct amount of Oil and Plots owned by the Crop Machine.<br>
            • Added a 15-minute timer to update the prices of resources, NFTs, and Flower.<br>
            • Possible upcoming updates: Greenhouse addition and the Crop to Coins tab!`,

        atualizacaoV021: `v0.2.1<br>
            • Added Greenhouse calculations to the site.<br>
            • Temporarily added the Ancient Shovel and Ancient Rod NFTs to the mining wearables, until the fishing and digging categories are implemented.<br>
            • Possible upcoming updates: addition of the Crop to Coins tab and inclusion of Buds!`,

        atualizacaoV022: `v0.2.2<br>
            • Added the Crop to Coins table.<br>
            • Clicking any column in the Crop to Coins tab sorts the table in ascending or descending order based on the selected column.<br>
            • Possible upcoming update: inclusion of Buds!`,

        atualizacaoV023: `v0.2.3<br>
            • Added the Full Combo Result.<br>
            • Here you can view your daily or weekly average by summing the entire combo you built and subtracting the restock amount, providing better results!`,
        
        atualizacaoV024: `v0.2.4 - Update Date: 01/06/2026 <br><br>
            • Added the table with all animals.<br>
            • Animal Skills, Legacies, and NFTs have been added.<br>
            • You can now choose which food you want to give to your animal! Just select the options. If you want to test Mixed Grain (which uses kale), make sure to also select the Kale Mix skill.<br>
            • Added the result to the full combo calculation.<br>
            • Animals are now saved even if you close the page and reopen it later.<br>
            • Never consider the results as 100% accurate, as I am human and errors may occur.<br>
            • This part of the table was the most time-consuming and mentally exhausting to develop. Although no errors were found during testing, some may still exist. If you find any issues, please report them on the forum’s Discord — any feedback is appreciated!<br>
            • Next planned update: Buds.<br>`,
        
        atualizacaoV025: `v0.2.5 - Update Date: 01/10/2026 <br><br>
            • Option to deduct or not deduct the Restock cost.<br>
            • Average profit per animal added!<br>
            • Reduced the size of inputs and some column titles!`,

        atualizacaoV026: `v0.2.6 - Update Date: 01/10/2026 <br><br>
            • Redesign of the animal table and individual profit per animal level<br>`,

    }
};