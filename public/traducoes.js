//Vai mudar os textos no html de acordo com idioma selecionado!
function mudarIdioma() {

    const opcaoDeIdiomas = idiomaEscolhido[idioma];
    
    //primeiras informações da farm!
    document.getElementById('donoDaFarm').innerHTML = donoDaFarm === '' ? '' : ` ➜ ${opcaoDeIdiomas.tituloDonoDaFarm}: ${donoDaFarm}`;
    document.getElementById('labelNumeroFarm').innerHTML = `${opcaoDeIdiomas.inserirFarm}:`;    
    document.getElementById('procurarFarm').innerHTML = `${opcaoDeIdiomas.pesquisar}`;
    document.getElementById('ilhaAtual').innerHTML = `${opcaoDeIdiomas.tipoDeIlha}:`; 
    document.getElementById('flowerPorCoins').innerHTML = `${opcaoDeIdiomas.flowerPorCoins}:`;
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
    document.getElementById('salvarInfos').innerHTML = `${opcaoDeIdiomas.botaoSalvarInfos}`;

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

    //informações Crop Machine
    document.getElementById('cropPlotsQuePossuiCM').innerHTML = `${opcaoDeIdiomas.quantidadeDePlotsCM} ➜ ${plotsCM}`;
    document.getElementById('oilGastoPorHora').innerHTML = `${opcaoDeIdiomas.quantidadeDeOilPorHora} ➜ <img src="./minerais/oil.png" class="crop-img">${oilPorHora.toFixed(2)}`;
    document.getElementById('modoDeCalcularCropsCM').innerHTML = `${opcaoDeIdiomas.modoDeCalcularCropsCM}:`
    document.getElementById('tipo-de-calculo-crop-cm').options[0].innerHTML = `${opcaoDeIdiomas.calcularCMPorSemente}`;
    document.getElementById('tipo-de-calculo-crop-cm').options[1].innerHTML = `${opcaoDeIdiomas.calcularCMPorRodada}`;
    document.getElementById('tipo-de-calculo-crop-cm').options[2].innerHTML = `${opcaoDeIdiomas.calcularCMPorEstoque}`;

    //NFTs, Skills e Buffs Temporarios
    document.getElementById('buffs-temporarios').innerHTML = `${opcaoDeIdiomas.abaBuffsTemporarios}`;
    document.getElementById('total-valor-em-shrines').innerHTML = `${opcaoDeIdiomas.tituloDentroDaAbaBuffsTemporarios}`;

    //Avisos
    document.getElementById('aviso-de-manter-horas').innerHTML = `* ${opcaoDeIdiomas.avisoCalculosMinerais}`
    document.getElementById('tab-sprout-mix').innerHTML = `* ${opcaoDeIdiomas.avisoSproutMix}`;
    document.getElementById('tab-rapid-root').innerHTML = `* ${opcaoDeIdiomas.avisoRapidRoot}`;

    //Atualizações feitas
    const atualizacoesFeitas = idiomaDasAtualizacoes[idioma];
    document.getElementById('avisos-atualizacoes').innerHTML = `${atualizacoesFeitas.nomeDaAbaAtualizacao}`; 
    document.getElementById('atualizacao-feita').innerHTML = `${atualizacoesFeitas.ultimaAtualizacao} — v0.1.9`;
    document.getElementById('v015').innerHTML = `${atualizacoesFeitas.atualizacaoV015}`;
    document.getElementById('v016').innerHTML = `${atualizacoesFeitas.atualizacaoV016}`;
    document.getElementById('v017').innerHTML = `${atualizacoesFeitas.atualizacaoV017}`;
    document.getElementById('v018').innerHTML = `${atualizacoesFeitas.atualizacaoV018}`;
    document.getElementById('v019').innerHTML = `${atualizacoesFeitas.atualizacaoV019}`;


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
        
        //dados das Crops
        modoDeCalcularCrops: 'Modo de calcular as Crops',
        calcularCropPorSemente: 'Quantidade de Sementes',
        calcularCropPorRodada: 'Quantidade de Ciclos',
        plotsQuePossui: 'Qtd. de Crop Plots',
        botaoSalvarInfos: 'Salvar',

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

        //dados CM
        modoDeCalcularCropsCM: 'Modo de Calcular',
        quantidadeDePlotsCM: 'Plots Crop Machine',
        quantidadeDeOilPorHora: 'Oil gasto por Hora',
        calcularCMPorSemente: 'Por Semente',
        calcularCMPorRodada: 'Por Ciclo',
        calcularCMPorEstoque: 'Por Estoque',

        //nome das abas de NFTs/Skills quando precisa de tradução
        abaBuffsTemporarios: 'Buffs Temporários',
        tituloDentroDaAbaBuffsTemporarios: 'Buffs Temporários', //tirar talvez

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
        
        //dados das Crops
        modoDeCalcularCrops: 'Crop Calculation Mode',
        calcularCropPorSemente: 'Quantity of Seeds',
        calcularCropPorRodada: 'Number of Cycles',
        plotsQuePossui: 'Number of Crop Plots',
        botaoSalvarInfos: 'Save',

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

        //dados CM
        modoDeCalcularCropsCM: 'Calculation Mode',
        quantidadeDePlotsCM: 'Plots Crop Machine',
        quantidadeDeOilPorHora: 'Oil consumed per hour',
        calcularCMPorSemente: 'Per Seed',
        calcularCMPorRodada: 'Per Cycle',
        calcularCMPorEstoque: 'By Stock',

        //nome das abas de NFTs/Skills quando precisa de tradução
        abaBuffsTemporarios: 'Temporary Buffs',
        tituloDentroDaAbaBuffsTemporarios: 'Temporary Buffs',

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

    }
}