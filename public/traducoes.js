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
        ${imgFlower} ${opcaoDeIdiomas.valorDoFlower}: ${imgUsdc} $${Number(precoDoFlower).toFixed(4)} | 
        ${imgGem} ${opcaoDeIdiomas.custoPorGem}: ${imgUsdc} $${Number(precoPorGem).toFixed(4)} ~ ${imgFlower} ${precoDaGemEmFlower.toFixed(4)}`

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
    document.getElementById('recursos-comprados-market').innerHTML = `${opcaoDeIdiomas.recursosCompradosNoMarket}:`

    //informações Crop Machine
    document.getElementById('cropPlotsQuePossuiCM').innerHTML = `${opcaoDeIdiomas.quantidadeDePlotsCM} ➜ ${plotsCM}`;
    document.getElementById('oilGastoPorHora').innerHTML = `${opcaoDeIdiomas.quantidadeDeOilPorHora} ➜ ${imgOil} ${oilPorHora.toFixed(2)}`;
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
    document.getElementById('precoRacao').innerHTML = `${opcaoDeIdiomas.precoRacao} ➜ ${imgKernelBlend} ${Number(mapaDosValoresDoMarket['corn'].valor).toFixed(4)} | 
        ${imgHay} ${Number(mapaDosValoresDoMarket['wheat'].valor).toFixed(4)} | 
        ${imgNutriBarley} ${Number(mapaDosValoresDoMarket['barley'].valor).toFixed(4)} | 
        ${imgMixedGrain} ${Number(mapaDosValoresDoMarket['corn'].valor + mapaDosValoresDoMarket['wheat'].valor + mapaDosValoresDoMarket['barley'].valor).toFixed(4)} |
        ${imgKaleMix} ${Number(mapaDosValoresDoMarket['kale'].valor * 3).toFixed(4)} |
        ${imgOmnifeed} ${Number(precoDaGemEmFlower).toFixed(4)}`
    document.getElementById('comida-do-level-0-ao-3').innerHTML = `${opcaoDeIdiomas.comidaUsadaAteLevel3}:`;
    document.getElementById('comida-do-level-4-ao-6').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel4ao6}:`;
    document.getElementById('comida-do-level-7-ao-10').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel7ao10}:`;
    document.getElementById('comida-do-level-11-ao-15').innerHTML = `${opcaoDeIdiomas.comidaUsadaDoLevel11ao15}:`;
    document.getElementById('ferramentas-de-carinho').innerHTML = `${opcaoDeIdiomas.ferramentaDeCarinho}:`;
    document.getElementById('carinhos-feitos').innerHTML = `${opcaoDeIdiomas.tituloUsoDeCarinhos}:`;
    document.getElementById('qtd-carinho-feito').options[0].innerHTML = `${opcaoDeIdiomas.UsoDeUmCarinho}`;
    document.getElementById('qtd-carinho-feito').options[1].innerHTML = `${opcaoDeIdiomas.UsoDeDoisCarinhos}`;

    //Galinhas
    document.getElementById('tempoDasGalinhas').innerHTML = `${opcaoDeIdiomas.tempoDaGalinha}: ${imgTempo} ${formatarTempo(animais.galinhas[0].tempo)}`;
    document.getElementById('valorDoOvo').innerHTML = `${opcaoDeIdiomas.valorDoOvo} ${imgOvo} ➜ ${imgFlower} ${Number(mapaDosValoresDoMarket['egg'].valor).toFixed(5)}`;
    document.getElementById('valorDaPena').innerHTML = `${opcaoDeIdiomas.valorDaPena} ${imgPena} ➜ ${imgFlower} ${Number(mapaDosValoresDoMarket['feather'].valor).toFixed(5)}`;
    document.getElementById('limparInfosGalinhas').innerHTML = `${opcaoDeIdiomas.limparGalinhas}`;

    //Vacas
    document.getElementById('tempoDasVacas').innerHTML = `${opcaoDeIdiomas.tempoDaVaca}: ${imgTempo} ${formatarTempo(animais.vacas[0].tempo)}`;
    document.getElementById('valorDoLeite').innerHTML = `${opcaoDeIdiomas.valorDoLeite} ${imgLeite} ➜ ${imgFlower} ${Number(mapaDosValoresDoMarket['milk'].valor).toFixed(5)}`;
    document.getElementById('valorDoCouro').innerHTML = `${opcaoDeIdiomas.valorDoCouro} ${imgCouro} ➜ ${imgFlower} ${Number(mapaDosValoresDoMarket['leather'].valor).toFixed(5)}`;
    document.getElementById('limparInfosVacas').innerHTML = `${opcaoDeIdiomas.limparVacas}`;

    //Ovelhas
    document.getElementById('tempoDasOvelhas').innerHTML = `${opcaoDeIdiomas.tempoDaOvelha}: ${imgTempo} ${formatarTempo(animais.ovelhas[0].tempo)}`;
    document.getElementById('valorDaLa').innerHTML = `${opcaoDeIdiomas.valorDaLa} ${imgLa} ➜ ${imgFlower} ${Number(mapaDosValoresDoMarket['wool'].valor).toFixed(5)}`;
    document.getElementById('valorDaLaMerino').innerHTML = `${opcaoDeIdiomas.valorDaLaMerino} ${imgMerino} ➜ ${imgFlower} ${Number(mapaDosValoresDoMarket['merinoWool'].valor).toFixed(5)}`;
    document.getElementById('limparInfosOvelhas').innerHTML = `${opcaoDeIdiomas.limparOvelhas}`;

    //NFTs, Skills e Buffs Temporarios
    document.getElementById('buffs-temporarios').innerHTML = `${opcaoDeIdiomas.abaBuffsTemporarios}`;
    document.getElementById('total-valor-em-shrines').innerHTML = `${opcaoDeIdiomas.tituloDentroDaAbaBuffsTemporarios}`;

    //Avisos
    document.getElementById('aviso-de-manter-horas').innerHTML = `* ${opcaoDeIdiomas.avisoCalculosMinerais}`
    document.getElementById('tab-sprout-mix').innerHTML = `* ${opcaoDeIdiomas.avisoSproutMix}`;
    document.getElementById('tab-rapid-root').innerHTML = `* ${opcaoDeIdiomas.avisoRapidRoot}`;
    document.getElementById('aviso-crop-to-coins').innerHTML = `${opcaoDeIdiomas.avisoCropToCoins}`;
    document.getElementById('buds-não-marcam-automaticamente').innerHTML = `* ${opcaoDeIdiomas.avisoDeBuds}`;

    //Resultado Total do combo montado
    document.getElementById('accordionResultadoComboCompleto').innerHTML = `${opcaoDeIdiomas.tituloAccordionCombo}`
    document.getElementById('verResultadoSemanalOuDiario').innerHTML = `${opcaoDeIdiomas.modoDeVerResultadoCombo}`
    document.getElementById('visualizar-resultado-do-combo').options[0].innerHTML = `${opcaoDeIdiomas.diario}`;
    document.getElementById('visualizar-resultado-do-combo').options[1].innerHTML = `${opcaoDeIdiomas.semanal}`;

    //Atualizações feitas
    const atualizacoesFeitas = idiomaDasAtualizacoes[idioma];
    document.getElementById('avisos-atualizacoes').innerHTML = `${atualizacoesFeitas.nomeDaAbaAtualizacao}`; 
    document.getElementById('atualizacao-feita').innerHTML = `${atualizacoesFeitas.ultimaAtualizacao} — v1.0.3`;
    document.getElementById('v5').innerHTML = `${atualizacoesFeitas.atualizacaoV031}`;
    document.getElementById('v4').innerHTML = `${atualizacoesFeitas.atualizacaoV100}`;
    document.getElementById('v3').innerHTML = `${atualizacoesFeitas.atualizacaoV101}`;
    document.getElementById('v2').innerHTML = `${atualizacoesFeitas.atualizacaoV102}`;
    document.getElementById('v1').innerHTML = `${atualizacoesFeitas.atualizacaoV103}`;


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
        modoDeCalcularCrops: 'Modo de calcular',
        calcularCropPorSemente: 'Por Semente',
        calcularCropPorRodada: 'Por Ciclo',
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
        recursosCompradosNoMarket: 'Comprado no Market',

        //dados CM
        modoDeCalcularCropsCM: 'Modo de Calcular',
        quantidadeDePlotsCM: 'Plots da Crop Machine',
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

        comidaUsadaAteLevel3: 'Comida do Level 0 ao 3',
        comidaUsadaDoLevel4ao6: 'Comida do Level 4 ao 6',
        comidaUsadaDoLevel7ao10: 'Comida do Level 7 ao 10',
        comidaUsadaDoLevel11ao15: 'Comida do Level 11 ao 15',

        ferramentaDeCarinho: 'Ferr. Carinho',
        tituloUsoDeCarinhos: 'Carinhos Realizados',
        UsoDeUmCarinho: '1 Carinho',
        UsoDeDoisCarinhos: '2 Carinhos',


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
        avisoDeBuds: 'Selecione os Buds que você possui ou deseja possuir, pois no momento eles ainda não são marcados automaticamente ao preencher sua farm! Suas seleções ficam salvas ao recarregar ou acessar o site novamente!',

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
        modoDeCalcularCrops: 'Calculation Mode',
        calcularCropPorSemente: 'Per Seed',
        calcularCropPorRodada: 'Per Cycle',
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
        recursosCompradosNoMarket: 'Bought from Market',

        //dados CM
        modoDeCalcularCropsCM: 'Calculation Mode',
        quantidadeDePlotsCM: 'Crop Machine Plots',
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
        comidaUsadaAteLevel3: 'Food from Level 0 to 3',
        comidaUsadaDoLevel4ao6: 'Food from Level 4 to 6',
        comidaUsadaDoLevel7ao10: 'Food from Level 7 to 10',
        comidaUsadaDoLevel11ao15: 'Food from Level 11 to 15',
        ferramentaDeCarinho: 'Affection Tools',
        tituloUsoDeCarinhos: 'Affections Given',
        UsoDeUmCarinho: '1 Affection',
        UsoDeDoisCarinhos: '2 Affections',
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
        avisoDeBuds: 'Select the Buds you own or wish to own, as they are not automatically selected when filling in your farm at the moment! Your selections will be saved when you refresh or revisit the site!',

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

        atualizacaoV027: `v0.2.7 – Data da atualização: 23/01/2026<br><br>

            • Ajuste nos cálculos de lucro dos animais<br>
            • Como no jogo não é possível fornecer apenas a quantidade exata de comida para completar um level,
            agora o sistema calcula o XP excedente que passa para o próximo level — em alguns casos, não sendo
            necessário usar comida no level seguinte!<br>
            Obs: o XP ganho com carinhos é uma média e pode variar dentro do jogo.<br><br>

            • Atualização visual na exibição dos preços das comidas<br>
            • Novo método para selecionar a comida usada em cada level (agora via checkboxes)<br>
            • Adição das ferramentas de carinho, permitindo simulações mais realistas (caso você não possua todas)<br>
            • Adição da opção de quantas vezes o carinho é feito por ciclo (1 ou 2 vezes)<br>
            • Alterar a comida dos levels agora afeta todos os animais, assim como as opções de carinho<br>
            • Todas as configurações agora são salvas automaticamente ao recarregar a página<br><br>

            • Como muitas mudanças foram feitas de uma só vez no sistema dos animais, é possível que existam
            pequenos bugs. Caso encontre algum, clique no ícone do Discord e reporte no fórum 😉<br>`,

        atualizacaoV028: `v0.2.8 – Data da atualização: 02/02/2026<br><br>
            • Adicionado as NFTs da nova temporada.`,

        atualizacaoV029: `v0.2.9 – Data da atualização: 03/02/2026<br><br>
            • Correção nos cálculos de minérios: havia um erro em que, ao selecionar NFTs que mineram gratuitamente, o recurso ainda era considerado com custo.<br>
            • Adicionada uma nova aba em Minérios, exibindo o lucro por recurso e a porcentagem de lucro (já com a taxa descontada).<br>
            • Caso encontrem qualquer erro, avisem no fórum do Discord — basta clicar no ícone do Discord no canto superior direito.`,

        atualizacaoV030: `v0.3.0 – Data da atualização: 09/02/2026<br><br>
            • Adicionada a coluna Lucro por hora nas crops.<br>
            • As sub-abas de Frutas e Greenhouse exigem, por enquanto, que você preencha o que irá plantar, pois ainda preciso recalcular tudo individualmente e isso está mais complexo do que eu gostaria no momento.<br>
            • Na Greenhouse, o Lucro por Hora só aparecerá se você selecionar a opção de cálculo por ciclo.<br>
            • Essa coluna é um teste para você observar quais crops estão dando mais retorno no momento. O restock não é descontado! Ela serve principalmente para visualizar a sequência de lucro das crops e ajudar na decisão do que plantar.`,

        atualizacaoV031: `v0.3.1 – Data da atualização: 10/02/2026<br><br>
            • Adicionados checkboxes na aba de <b>Minerals</b>, permitindo selecionar quais recursos você compra no Market e ver como isso impacta os cálculos das outras ferramentas.<br>
            • O valor de lucro total não foi alterado, pois o cálculo já considerava a compra de recursos necessários para produzir outras ferramentas. A novidade é que agora você pode visualizar claramente se vale mais a pena comprar o recurso ou produzi-lo.<br>
            • Atenção: ao marcar um recurso como comprado, outros recursos podem sofrer alterações e até se tornarem positivos para farmar.<br>
                &nbsp;&nbsp;Exemplo: madeira e pedra estavam negativas, sendo melhor comprá-las do que minerar. Ao marcar a madeira como comprada, o status da pedra mudou para positivo. Ou seja, comprando madeira, passa a valer a pena minerar pedra em vez de comprar.<br>
            • Não sei se a explicação ficou perfeita, mas espero que ajude vocês! 😊`,
        
        atualizacaoV100: `
            v1.0.0 – Data da atualização: 19/02/2026<br><br>

            • O site ficou temporariamente fora do ar após atingir o limite de requests da Vercel.  
            Analisei o problema e as principais causas poderiam ser a grande quantidade de imagens carregadas e o número excessivo de chamadas à API.  
            Para corrigir isso, reduzi drasticamente as requisições de imagens (melhorando cache e carregamento) e movi a API para outro local.  
            Espero que essas mudanças impeçam o site de cair novamente — infelizmente não tenho recursos para arcar com custos extras caso o limite seja ultrapassado.<br><br>

            • Adquiri um domínio próprio para facilitar o acesso e a memorização do link.  
            Agora basta digitar <strong>sflhub.xyz</strong> para acessar o site.<br><br>

            • Ainda estou monitorando para garantir que tudo esteja funcionando corretamente.  
            Se encontrar qualquer problema, por favor me avise pelo Discord através do fórum (ícone no canto superior direito do site).
            `,
        
        atualizacaoV101: `
            v1.0.1 – Atualizado em 20/02/2026<br><br>

            • Atualização da logo e melhorias visuais gerais na interface do site.<br>
            • Correção de imagens que não estavam sendo exibidas corretamente ou apareciam cortadas.`,
        
        atualizacaoV102: `
            v1.0.2 – Atualizado em 27/02/2026<br><br>

            • Adição dos Buds ao site!<br><br>
            • Agora você pode selecionar qual ou quais Buds possui e escolher a aura de cada um.<br><br>
            • Ao preencher sua farm, o Bud não será marcado automaticamente. Você deve selecioná-lo manualmente, porém a escolha ficará salva mesmo após recarregar a página, não sendo necessário marcar novamente.<br><br>
            • Os Buds possuem diversas variáveis para funcionamento, além de existirem vários tipos. Caso encontre qualquer informação incorreta ou erro no cálculo, informe no fórum do Discord. Basta clicar no ícone do Discord no canto superior direito para ser direcionado à página!
        `,

        atualizacaoV103: `
            v1.0.3 – Atualizado em 09/03/2026<br><br>

            • Ajustes visuais para facilitar a identificação de onde cada informação da tabela pertence.<br><br>
            • Mudança na forma de cálculo ao escolher "Por Sementes". Agora o sistema calcula o tempo médio total com base na quantidade de sementes e plots.<br>
                A opção "Por Ciclo" continua funcionando da mesma forma de antes.<br><br>
            • Ao visualizar o valor da Crop no Market P2P, o preço já aparece com a taxa descontada, de acordo com sua farm ou com as opções selecionadas.<br><br>
            • Adição da coluna "Vendendo na Betty", que mostra o lucro em Coins. Nessa coluna, o valor em Coins também é convertido para Flower, permitindo visualizar quanto Flower equivaleria a esse valor.<br><br>
            • Adição da coluna "Melhor Opção de Venda", que indica se é mais vantajoso vender a Crop por Coins (Betty) ou por Flower no Market.<br><br>
            • Adição da coluna "Lucro por Hora Betty vs Market", para ajudar você a visualizar qual Crop gera mais lucro por hora e facilitar suas decisões de plantio.<br>
                Obs: O cálculo não desconta o custo de Gems.<br><br>
            • Detalhe importante: o valor da Betty exibido em "Lucro por Hora Betty vs Market" representa o lucro em Coins convertido para Flower.<br>
                B = valor recebido vendendo na Betty.<br>
                M = valor recebido vendendo no Market P2P.<br><br>
            • Adição de um menu de Ajuda nas tabelas de Crops. Ainda está em fase de testes, mas espero que ajude vocês!<br><br>
            • Como várias melhorias foram feitas de uma vez, pode ser que eu tenha esquecido de mencionar alguma. Espero que essa atualização ajude vocês a entender melhor o site!<br>
                Se tudo correr bem, pretendo adicionar mais menus de ajuda no site para explicar outras partes que possam gerar dúvidas.
            `,
            

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

        atualizacaoV027: `v0.2.7 – Update date: 01/23/2026<br><br>

            • Adjustments to animal profit calculations<br>
            • Since in the game it’s not possible to feed only the exact amount needed to complete a level,
            the system now calculates the excess XP that carries over to the next level — in some cases,
            no food is required in the following level!<br>
            Note: XP gained from petting is an average and may vary in-game.<br><br>

            • Visual update to how food prices are displayed<br>
            • New method for selecting the food used per level (now via checkboxes)<br>
            • Added petting tools, allowing for more realistic simulations (in case you don’t own all of them)<br>
            • Added the option to choose how many times the animal is petted per cycle (1 or 2 times)<br>
            • Changing the food for levels now affects all animals, as well as the petting options<br>
            • All settings are now automatically saved when reloading the page<br><br>

            • Since many changes were made at once to the animal system, there may be minor bugs.
            If you find any, click the Discord icon and report it on the forum 😉<br>`,

        atualizacaoV028: `v0.2.8 – Data da atualização: 02/02/2026<br><br>
            • Added the NFTs from the new season.`,

        atualizacaoV029: `v0.2.9 – Update date: 03/02/2026<br><br>
            • Fixed mineral calculations: there was an issue where resources were still being charged when selecting NFTs that provide free mining.<br>
            • Added a new Minerals tab, showing profit per resource and profit percentage (fees already deducted).<br>
            • If you find any issues, please report them on the Discord forum — just click the Discord icon in the top-right corner.`,

        atualizacaoV030: `v0.3.0 – Update date: 09/02/2026<br><br>
            • Added the Profit per hour column for crops.<br>
            • The Fruits and Greenhouse sub-tabs currently require you to fill in what you plan to plant, as I still need to recalculate everything individually and it is more complex than I would like at the moment.<br>
            • In the Greenhouse, Profit per Hour will only appear if you select the option to calculate by cycle.<br>
            • This column is a test to help you observe which crops are giving the best returns at the moment. Restock is not deducted! It mainly helps you visualize the profit sequence of crops and decide which ones to plant.
            `,

        atualizacaoV031: `v0.3.1 – Update date: 10/02/2026<br><br>
            • Added checkboxes to the <b>Minerals</b> tab, allowing you to select which resources you buy from the Market and see how this impacts calculations across other tools.<br>
            • The total profit value remains unchanged, as the calculation already accounted for cases where resources needed to be bought to craft other tools. What’s new is that you can now clearly see whether buying a resource is more profitable than producing it yourself.<br>
            • Important: when you mark a resource as bought, other resources may change and can even become profitable to farm.<br>
                &nbsp;&nbsp;Example: wood and stone were negative, meaning it was better to buy them than to mine them. After marking wood as bought, stone became positive. In other words, by buying wood, it becomes worth mining stone instead of purchasing it.<br>
            • Not sure if the explanation is perfect, but I hope this helps! 😊`,

        atualizacaoV100: `
            v1.0.0 – Update Date: 02/19/2026<br><br>

            • The website was temporarily offline after reaching Vercel's request limit.  
            After investigating, the main causes were likely the high number of image loads and excessive API calls.  
            To fix this, I significantly reduced image requests (improving caching and loading behavior) and moved the API to a different location.  
            I hope these changes prevent the site from going down again — unfortunately, I don’t have the budget to cover extra costs if the limit is exceeded.<br><br>

            • I also purchased a custom domain to make access easier and more memorable.  
            You can now simply type <strong>sflhub.xyz</strong> to access the website.<br><br>

            • I’m still monitoring everything to ensure stability.  
            If you notice any issues, please let me know on Discord through the forum (click the Discord icon in the top-right corner of the site).
            `,
            
        atualizacaoV101: `
            v1.0.1 – Updated on 02/20/2026<br><br>

            • Updated the logo and implemented overall visual improvements to the website interface.<br>
            • Fixed images that were not displaying correctly or were appearing cropped.`,

        atualizacaoV102: `
            v1.0.2 – Updated on 02/27/2026<br><br>

            • Buds have been added to the site!<br><br>
            • You can now select which Buds you own and choose the aura for each one.<br><br>
            • When filling in your farm, the Bud will not be selected automatically. You must select it manually, but your choice will be saved even after refreshing the page, so you won’t need to select it again.<br><br>
            • Buds have several variables that affect how they work, and there are multiple types available. If you find any incorrect information or calculation errors, please report them on the Discord forum. Just click the Discord icon in the top-right corner to be redirected to the page!
            `,

        atualizacaoV103: `
            v1.0.3 – Updated on 09/03/2026<br><br>

            • Visual adjustments to make it easier to identify where each piece of information in the table belongs.<br><br>
            • Changes to the calculation method when selecting "By Seeds". The system now calculates the average total time based on the number of seeds and plots.<br>
                The "By Cycle" option continues to work the same way as before.<br><br>
            • When viewing the Crop price in the P2P Market, the value already appears with the market fee deducted according to your farm or the options you selected.<br><br>
            • Added the "Selling to Betty" column, which shows the profit in Coins. In this column, the Coins value is also converted to Flower so you can see how much Flower those Coins would be worth.<br><br>
            • Added the "Best Selling Option" column, which indicates whether it is more profitable to sell the Crop for Coins (Betty) or for Flower in the Market.<br><br>
            • Added the "Profit per Hour Betty vs Market" column, allowing you to see which Crop generates more profit per hour and helping you make better planting decisions.<br>
                Note: This calculation does not include the cost of Gems.<br><br>
            • Important detail: the Betty value shown in "Profit per Hour Betty vs Market" represents the profit in Coins converted to Flower.<br>
                B = value received when selling to Betty.<br>
                M = value received when selling on the P2P Market.<br><br>
            • Added a Help menu to the Crops tables. It is still being tested, but I hope it works well!<br><br>
            • Since many improvements were made at once, I may have forgotten to mention something. I hope this update helps you better understand the site!<br>
                If everything goes well, I plan to add more help menus across the site to explain other confusing features.
            `,

    }
};