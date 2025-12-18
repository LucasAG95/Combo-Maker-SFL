let donoDaFarm = '';
//Puxar e marca dados da farm!
function numeroDaFarm() {
    const loader = document.getElementById("loader");
    const botao = document.getElementById("procurarFarm");

    // Pegando valor
    let numeroFarmId = document.getElementById('numeroFarm').value;
    console.log("🔎 Buscando farm ID:", numeroFarmId);

    // Se vazio, não busca
    if (!numeroFarmId) {
        console.error('Por favor, digite o número da farm para pesquisar!');
        return;
    }
    
    // Ativa loading
    let idiomaProLoading = idioma === 'portugues' ? 'Carregando...' : 'Loading...'
    loader.style.display = 'block';
    botao.disabled = true;
    botao.innerText = idiomaProLoading;

    //================ BUSCA DADOS =====================
    fetch(`https://script.google.com/macros/s/AKfycbwl5QWyLTaB1S4GXOQaZhf2NNYLntfWb9wto02fbBaBBKTrud64w3SrpFtqJCv8LZaiag/exec?farmid=${numeroFarmId}`)
        .then(res => res.json())
        .then(data => {
            //=====================================================================================================================================================
            
            // Une todos os collectibles colocados na Land e na Casa em um único objeto. Usa espalhamento com nullish coalescing (?? {}) para evitar erros caso alguma das partes venha undefined, null ou vazia na API.
            const todosCollectiblesColocados = {
                ...(data.farm.home?.collectibles ?? {}),
                ...(data.farm.collectibles ?? {}),
                ...(data.farm.buildings ?? {})
            };

            //infos para marcar skills e NFTs
            const skillsLegacyQuePossui = data.farm.inventory;
            const skillQuePossui = data.farm.bumpkin.skills;
            const collectiblesQuePossui = data.farm.inventory;
            const wearablesQuePossui = data.farm.wardrobe;
            const buffsTemporariosQuePossui = todosCollectiblesColocados;
            
            marcarNftsESkillsQuePossui(skillsLegacyQuePossui, skillQuePossui, collectiblesQuePossui, wearablesQuePossui, buffsTemporariosQuePossui);

            //=====================================================================================================================================================
            
            //preencher quantos plots você possui na farm
            const cropPlotsQuePossui = data.farm.inventory['Crop Plot'];

            //preencher quantos pé de frutas possui
            const frutasQuePossui = data.farm.inventory['Fruit Patch']

            //Preencher quantas Arvores você possui.
            const treeT1QuePossui = data.farm.inventory['Tree'];
            const treeT2QuePossui = data.farm.inventory['Ancient Tree'];
            const treeT3QuePossui = data.farm.inventory['Sacred Tree'];

            const stoneT1QuePossui = data.farm.inventory['Stone Rock'];
            const stoneT2QuePossui = data.farm.inventory['Fused Stone Rock'];
            const stoneT3QuePossui = data.farm.inventory['Reinforced Stone Rock'];

            const ironT1QuePossui = data.farm.inventory['Iron Rock'];
            const ironT2QuePossui = data.farm.inventory['Refined Iron Rock'];
            const ironT3QuePossui = data.farm.inventory['Tempered Iron Rock'];

            const goldT1QuePossui = data.farm.inventory['Gold Rock'];
            const goldT2QuePossui = data.farm.inventory['Pure Gold Rock'];
            const goldT3QuePossui = data.farm.inventory['Prime Gold Rock'];

            const crimstoneQuePossui = data.farm.inventory['Crimstone Rock'];

            const oilQuePossui = data.farm.inventory['Oil Reserve'];


            

            preencherInformacoesDaFarm(cropPlotsQuePossui, frutasQuePossui,
                treeT1QuePossui, treeT2QuePossui, treeT3QuePossui,
                stoneT1QuePossui, stoneT2QuePossui, stoneT3QuePossui,
                ironT1QuePossui, ironT2QuePossui, ironT3QuePossui,
                goldT1QuePossui, goldT2QuePossui, goldT3QuePossui,
                crimstoneQuePossui, oilQuePossui);

            //=====================================================================================================================================================
            
            //trocar a ilha em que esta automaticamente
            ilha = data.farm.island.type;
            document.getElementById('ilhaSelect').value = data.farm.island.type;
            ilhaPrestigioAtual();

            //=====================================================================================================================================================
            
            //mostrar de quem é a farm!
            donoDaFarm = data.farm.username;
            mudarIdioma();

            //=====================================================================================================================================================

            //mudar a estação automaticamente para a q esta no game!
            document.getElementById('estacaoSelect').value = data.farm.season.season;
            selecionandoEstacao();

        })
        .catch(err => {
            console.error('Erro ao puxar a API da farm:', err);

        })
        .finally(() => {
            // DESLIGA O LOADING sempre, mesmo se der erro
            let idiomaPósPesquisar = idioma === 'portugues' ? 'Pesquisar' : 'Search';
            loader.style.display = 'none';
            botao.disabled = false;
            botao.innerText = idiomaPósPesquisar;
        });

    //funções no qual a API vai fazer suas marcações de acordo com a farm pesquisada!
    function marcarNftsESkillsQuePossui(skillsLegacyQuePossui, skillQuePossui, collectiblesQuePossui, wearablesQuePossui, buffsTemporariosQuePossui) {
        skillsLegacy.forEach(legacy => {
            let checkbox = document.getElementById(legacy.idName);
            if (skillsLegacyQuePossui[legacy.name]) {
                checkbox.checked = true;
                legacy.possui = true;
            } else {
                checkbox.checked = false;
                legacy.possui = false;
            };      
        });

        todasSkillsComTier.forEach(skill => {
            let checkbox = document.getElementById(skill.idName);
            if (skillQuePossui[skill.name]) {
                checkbox.checked = true;
                skill.possui = true;
            } else {
                checkbox.checked = false;
                skill.possui = false;
            };    
        });

        todosCollectibles.forEach(collectibles => {
            let checkbox = document.getElementById(collectibles.idName);
            if (collectiblesQuePossui[collectibles.name]) {
                checkbox.checked = true;
                collectibles.possui = true;
            } else {
                checkbox.checked = false;
                collectibles.possui = false;
            };    
        });

        todosWearables.forEach(wearables => {
            let checkbox = document.getElementById(wearables.idName);
            if (wearablesQuePossui[wearables.name] ||
                wearablesQuePossui[wearables.fac1] ||
                wearablesQuePossui[wearables.fac2] ||
                wearablesQuePossui[wearables.fac3] ||
                wearablesQuePossui[wearables.fac4]
            ) {
                checkbox.checked = true;
                wearables.possui = true;
            } else {
                checkbox.checked = false;
                wearables.possui = false;
            };    
        });

        todosTemporarios.forEach(temporarios => {
            let checkbox = document.getElementById(temporarios.idName);
            if (buffsTemporariosQuePossui[temporarios.name]) {
                checkbox.checked = true;
                temporarios.possui = true;
            } else {
                checkbox.checked = false;
                temporarios.possui = false;
            };    
        });
        
        chamadorDeBuffs();
        chamadorDeDesbloquearSkills();
        ativarBonusDasNftsESkills();
        nftsDeTierQuePossuemBuffDoAntecessor();
        pontosGastosEmSkills();
        valorTotalEmNfts();
    }

    function preencherInformacoesDaFarm(cropPlotsQuePossui, frutasQuePossui,
        treeT1QuePossui, treeT2QuePossui, treeT3QuePossui,
        stoneT1QuePossui, stoneT2QuePossui, stoneT3QuePossui,
        ironT1QuePossui, ironT2QuePossui, ironT3QuePossui,
        goldT1QuePossui, goldT2QuePossui, goldT3QuePossui,
        crimstoneQuePossui, oilQuePossui) {
        
        //Crop Plots
        plots = cropPlotsQuePossui;
        document.getElementById('plotsPossuidos').value = cropPlotsQuePossui;

        //Canteiro de Frutas
        plotsFrutas = frutasQuePossui;
        document.getElementById('fruitsPlotsPossuidos').value = frutasQuePossui;

        //Arvores - Wood
        mapaDeMinerals['wood'].qtdNodes.t1 = treeT1QuePossui;
        document.getElementById('woodT1').value = mapaDeMinerals['wood'].qtdNodes.t1;

        mapaDeMinerals['wood'].qtdNodes.t2 = treeT2QuePossui;
        document.getElementById('woodT2').value = mapaDeMinerals['wood'].qtdNodes.t2;

        mapaDeMinerals['wood'].qtdNodes.t3 = treeT3QuePossui;
        document.getElementById('woodT3').value = mapaDeMinerals['wood'].qtdNodes.t3;
        
        //Stones
        mapaDeMinerals['stone'].qtdNodes.t1 = stoneT1QuePossui;
        document.getElementById('stoneT1').value = mapaDeMinerals['stone'].qtdNodes.t1;

        mapaDeMinerals['stone'].qtdNodes.t2 = stoneT2QuePossui;
        document.getElementById('stoneT2').value = mapaDeMinerals['stone'].qtdNodes.t2;

        mapaDeMinerals['stone'].qtdNodes.t3 = stoneT3QuePossui;
        document.getElementById('stoneT3').value = mapaDeMinerals['stone'].qtdNodes.t3;

        //irons
        mapaDeMinerals['iron'].qtdNodes.t1 = ironT1QuePossui;
        document.getElementById('ironT1').value = mapaDeMinerals['iron'].qtdNodes.t1;

        mapaDeMinerals['iron'].qtdNodes.t2 = ironT2QuePossui;
        document.getElementById('ironT2').value = mapaDeMinerals['iron'].qtdNodes.t2;

        mapaDeMinerals['iron'].qtdNodes.t3 = ironT3QuePossui;
        document.getElementById('ironT3').value = mapaDeMinerals['iron'].qtdNodes.t3;

        //Golds
        mapaDeMinerals['gold'].qtdNodes.t1 = goldT1QuePossui;
        document.getElementById('goldT1').value = mapaDeMinerals['gold'].qtdNodes.t1;

        mapaDeMinerals['gold'].qtdNodes.t2 = goldT2QuePossui;
        document.getElementById('goldT2').value = mapaDeMinerals['gold'].qtdNodes.t2;

        mapaDeMinerals['gold'].qtdNodes.t3 = goldT3QuePossui;
        document.getElementById('goldT3').value = mapaDeMinerals['gold'].qtdNodes.t3;

        //Crimstone
        mapaDeMinerals['crimstone'].qtdNodes.t1 = crimstoneQuePossui;
        document.getElementById('crimstoneRock').value = mapaDeMinerals['crimstone'].qtdNodes.t1;
        
        //Oil
        mapaDeMinerals['oil'].qtdNodes.t1 = oilQuePossui;
        document.getElementById('oilReserve').value = mapaDeMinerals['oil'].qtdNodes.t1;


        salvarInformacoes();
    }
};


//======================================================================================================================================================================

//Puxa valores dos recursos do game!
function buscarValoresAPI() {
    fetch(`/api/proxy?url=https://sfl.world/api/v1/prices`)
        .then(res => res.json())
        .then(data => {  
            atualizarValoresDeVendaPorFlower(data.data.p2p) //vai mandar para a funcção digitada o que ela puxou da api de preços do sfl.world, primeiro data(nome da variavel), o outro data é um objeto que tem p2p como outro objeto dentro, que por sua vez tem outros resultados dentro
            console.log(data.data.p2p)
        })
        .catch(err => {
            console.error('Erro ao puxar a planilha:', err);
        });
}

// Atualiza a cada 10 minutos (600000 milissegundos)
setInterval(buscarValoresAPI, 900000);

//essa função irá inserir o valor de venda por flower das crops e minerais em vendaFlower
function atualizarValoresDeVendaPorFlower(apiValores) {

    crops.forEach(crop => {
        if (apiValores[crop.name]) {
            crop.valorDoMarket = apiValores[crop.name];
            console.log(`Crop: ${crop.name} Valor: ${crop.valorDoMarket}`);
        };
    });

    cropMachine.forEach(cropM => {
        if (apiValores[cropM.name]) {
            cropM.valorDoMarket = apiValores[cropM.name];
            console.log(`Crop: ${cropM.name} Valor: ${cropM.valorDoMarket}`);
        };
    });

    fruits.forEach(fruta => {
        if (apiValores[fruta.name]) {
            fruta.valorDoMarket = apiValores[fruta.name];
            console.log(`Crop: ${fruta.name} Valor: ${fruta.valorDoMarket}`);
        };
    });

    fruitsLunares.forEach(fruta => {
        if (apiValores[fruta.name]) {
            fruta.valorDoMarket = apiValores[fruta.name];
            console.log(`Crop: ${fruta.name} Valor: ${fruta.valorDoMarket}`);
        };
    });

    minerals.forEach(mineral => {
        if (apiValores[mineral.name]) {
            mineral.valorDoMarket = apiValores[mineral.name];
            console.log(`Mineral: ${mineral.name} Valor: ${mineral.valorDoMarket}`);
        };
    });

    greenhouse.forEach(gh => {
        if (apiValores[gh.name]) {
            gh.valorDoMarket = apiValores[gh.name];
            console.log(`Mineral: ${gh.name} Valor: ${gh.valorDoMarket}`);
        };
    })

    valorDosRecursosMarket.forEach(marketRecursos => {
        if (apiValores[marketRecursos.name]) {
            marketRecursos.valor = apiValores[marketRecursos.name];
            console.log(`Market: ${marketRecursos.name}: ${marketRecursos.valor}`);
        };
    })

    chamadorDeBuffs();
};

//======================================================================================================================================================================

//api para puxar valores do flower das NFTs e Wearebles
function buscarValoresNFTs() {
    fetch(`/api/proxy?url=https://sfl.world/api/v1/nfts`)
        .then(res => res.json())
        .then(data => {  
            atualizarValoresDasNfts(data.collectibles, data.wearables) //vai mandar para a funcção digitada o que ela puxou da api de preços do sfl.world, primeiro data(nome da variavel), o outro data é um objeto que tem p2p como outro objeto dentro, que por sua vez tem outros resultados dentro
            console.log(data.wearables)
        })
        .catch(err => {
            console.error('Erro ao puxar a planilha:', err);
        });
}

// Atualiza a cada 15 minutos (900000 milissegundos)
setInterval(buscarValoresNFTs, 900000);

//essa função irá inserir o valor de venda por flower das crops em vendaFlower
function atualizarValoresDasNfts(apiCollectibles, apiWearables) {
    // cria o mapa de collectibles pelo id(numero)
    let mapaPrecoCollectibles = {};
    apiCollectibles.forEach(idCollectibles => {
        mapaPrecoCollectibles[idCollectibles.id] = idCollectibles;
    });

    todosCollectibles.forEach(collectibles => {
        if (mapaPrecoCollectibles[collectibles.idNumber]) {
            collectibles.preco = mapaPrecoCollectibles[collectibles.idNumber].lastSalePrice;
            collectibles.precoAtual = mapaPrecoCollectibles[collectibles.idNumber].floor;
        }
    });

    // cria o mapa de wearables pelo id(numero)
    let mapaPrecoWearables = {};
    apiWearables.forEach(idWearables => {
        mapaPrecoWearables[idWearables.id] = idWearables;
    });

    todosWearables.forEach(wearables => {
        if (mapaPrecoWearables[wearables.idNumber]) {
            wearables.preco = mapaPrecoWearables[wearables.idNumber].lastSalePrice;
            wearables.precoAtual = mapaPrecoWearables[wearables.idNumber].floor;
        }
    });
    mostrarInfoCard();
};

//======================================================================================================================================================================

//api para puxar o valor do flower
function buscarValorFlower() {
    fetch(`/api/proxy?url=https://sfl.world/api/v1.1/exchange`)
      .then(res => res.json())
      .then(data => {  
        valorDoFlowerEmDolar(data.sfl.usd);
      })
      .catch(err => {
        console.error('Erro ao puxar a planilha:', err);
      });
}

// Atualiza a cada 15 minutos (900000 milissegundos)
setInterval(buscarValorFlower, 900000);

let precoDoFlower;
function valorDoFlowerEmDolar(valor) {
    precoDoFlower = valor;
    console.log(`$${precoDoFlower}`);
    
    valoresDasGems();
};