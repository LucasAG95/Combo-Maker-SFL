//Puxar e marca dados da farm!
function numeroDaFarm() {
    let numeroFarmId = document.getElementById('numeroFarm').value;
    console.log("🔎 Buscando farm ID:", numeroFarmId);
    // Faz uma requisição para a API do Sunflower Land, pegando os dados da farm pelo número (numeroFarm).
    
    if (!numeroFarmId) {
        console.error('Por favor, digite o numero da farm para pesquisar!');
        return; // Sai da função se o campo estiver vazio
    }

    //reponsavel por puxar dados da api
    fetch(`https://script.google.com/macros/s/AKfycbwl5QWyLTaB1S4GXOQaZhf2NNYLntfWb9wto02fbBaBBKTrud64w3SrpFtqJCv8LZaiag/exec?farmid=${numeroFarmId}`)
        .then(res => res.json()) // Quando a resposta chegar, converte o conteúdo dela para JSON.
        .then(data => {
            
            //=====================================================================================================================================================

            //infos para marcar skills e NFTs
            const skillsLegacyQuePossui =    data.farm.inventory;
            const skillQuePossui = data.farm.bumpkin.skills;
            const collectiblesQuePossui = data.farm.inventory;
            const wearablesQuePossui = data.farm.wardrobe;
            const shrinesQuePossui = data.farm.inventory;
            
            marcarNftsESkillsQuePossui(skillsLegacyQuePossui, skillQuePossui, collectiblesQuePossui, wearablesQuePossui, shrinesQuePossui);

            //=====================================================================================================================================================

            //infos para preencher plots/nodes que possue na farm
            const cropPlotsQuePossui = data.farm.inventory['Crop Plot'];

            preencherInformacoesDaFarm(cropPlotsQuePossui);

            //=====================================================================================================================================================

            //infos para preencher o prestigio de Farm em que esta
            const ilhaQueEsta = data.farm.inventory;
            ilhaPrestigioQueEsta(ilhaQueEsta);

        })
        .catch(err => {
            console.error('Erro ao puxar a API da farm:', err); // Caso dê erro na requisição, mostra a mensagem de erro no console.
        });

    function marcarNftsESkillsQuePossui(skillsLegacyQuePossui, skillQuePossui, collectiblesQuePossui, wearablesQuePossui, shrinesQuePossui) {
        //Todas skills legacy que possuir vai ser marcada
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

        //vai marcar todas skills que você possuir na arvore de skills!
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

        //vai marcar todos collectibles que você possuir!
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

        //vai marcar todos wearables que você possuir!
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

        //vai marcar todos collectibles que você possuir!
        shrines.forEach(shrine => {
            let checkbox = document.getElementById(shrine.idName);
            if (shrinesQuePossui[shrine.name]) {
                checkbox.checked = true;
                shrine.possui = true;
            } else {
                checkbox.checked = false;
                shrine.possui = false;
            };    
        });
        
        buffsAdicionadosCrops();
        chamadorDeDesbloquearSkills();
        ativarBonusDasNftsESkills();
        nftsDeTierQuePossuemBuffDoAntecessor();
    };

    //==================================================================================================================================================================

    function preencherInformacoesDaFarm(cropPlotsQuePossui) {
        //Plots Crops
        plots = cropPlotsQuePossui;
        document.getElementById('plotsPossuidos').value = cropPlotsQuePossui;

        salvarInformacoes();
    };

    //==================================================================================================================================================================

    //função responsavel por selecionar a ilha prestigio em que esta!
    function ilhaPrestigioQueEsta(ilhaQueEsta) {
        if (ilhaQueEsta['Lava Pit']) {
            ilha = 'Vulcano';
            document.getElementById('ilhaSelect').value = 'Vulcano';
        } else if (ilhaQueEsta['Oil Reserve']) {
            ilha = 'Desert';
            document.getElementById('ilhaSelect').value = 'Desert';
        } else if (ilhaQueEsta['Crimstone Rock']) {
            ilha = 'Petal';
            document.getElementById('ilhaSelect').value = 'Petal';
        } else {
            ilha = 'Basic';
            document.getElementById('ilhaSelect').value = 'Basic';            
        }
        ilhaPrestigioAtual();
        sePossuiVipOuNao();
    };

};

//======================================================================================================================================================================

//Puxa valores dos recursos do game!
fetch(`/api/proxy?url=https://sfl.world/api/v1/prices`)
    .then(res => res.json())
    .then(data => {  
        atualizarValoresDeVendaPorFlower(data.data.p2p) //vai mandar para a funcção digitada o que ela puxou da api de preços do sfl.world, primeiro data(nome da variavel), o outro data é um objeto que tem p2p como outro objeto dentro, que por sua vez tem outros resultados dentro
        console.log(data.data.p2p)
    })
    .catch(err => {
        console.error('Erro ao puxar a planilha:', err);
    });

//essa função irá inserir o valor de venda por flower das crops e minerais em vendaFlower
function atualizarValoresDeVendaPorFlower(apiValores) {

    crops.forEach(crop => {
        if (apiValores[crop.name]) {
            crop.valorDoMarket = apiValores[crop.name];
            console.log(`Crop: ${crop.name} Valor: ${crop.valorDoMarket}`);
        };
    });
    buffsAdicionadosCrops();
};

//======================================================================================================================================================================

//api para puxar valores do flower das NFTs e Wearebles
fetch(`/api/proxy?url=https://sfl.world/api/v1/nfts`)
    .then(res => res.json())
    .then(data => {  
        atualizarValoresDasNfts(data.collectibles, data.wearables) //vai mandar para a funcção digitada o que ela puxou da api de preços do sfl.world, primeiro data(nome da variavel), o outro data é um objeto que tem p2p como outro objeto dentro, que por sua vez tem outros resultados dentro
        console.log(data.wearables)
    })
    .catch(err => {
        console.error('Erro ao puxar a planilha:', err);
    });

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