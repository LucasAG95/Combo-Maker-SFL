function calcularBuff(recurso, listasDeBuffs) { 
    
    //variaveis que sao afetas pelos buffs de quantidade, qquantidade em Area e insta
    let qtdMulti = 1;       //sinal === 'x'
    let qtdSoma = 0;        //sinal === '+'
    let qtdSubtrai = 0;     //sinal === '-'
    let qtdArea = 0;        //sinal === '+A'
    let qtdInsta = 1;       //sinal === 'xI'
    let qtdSemente = 1;     //sinal === '+S'
    let qtdMenosRacao = 1;  //sinal === 'x-'
    let qtdMaisRacao = 1;   //sinal === 'x+'

    //variaveis que sao afetadas pelos buffs de tempo
    let tempoMulti = 1;
    let tempoCM = 1;
    let tempoSubtrai = 0;

    //variaveis que são afetadas pelos buffs de coins
    let multiCusto = 1;
    let multiVenda = 1;

    //variaveis que são afetadas pelos buffs de estoque
    let estoqueMulti = 1;
    let estoqueSoma = 0;

    //variaveis que afetam Oil usado na CM
    let oilMulti = 1;
    let oilAumentado = 0;
    let oilDiminuido = 0;

    //esse 'lista' pode ser skills e NFTs, vai percorrer todos os buffs e adicionar o valor as variaveis criadas acima de acordo com regra
    function aplicarBuffs(lista) { 
        lista.forEach(nftOuSkill => {
            if (!nftOuSkill.possui) return;

            if (nftOuSkill.estacao && !nftOuSkill.estacao.includes(estacao)) return;
            
            // Identifica o nome do recurso (objeto com .name ou string direta)
            const nomeRecurso = recurso.name || recurso;
            
            //=============================================================================================================================================================
            //Adiciona os buffs que afetam a quantidade de recursos 
            if (nftOuSkill.quantidade) {
                nftOuSkill.quantidade.forEach(qtd => {
                    if (qtd.recursoAfetado?.includes(nomeRecurso)) {
                        if (qtd.sinal === 'x') qtdMulti *= qtd.buff;
                        if (qtd.sinal === '+') qtdSoma += qtd.buff;
                        if (qtd.sinal === '-') qtdSubtrai += qtd.buff;
                        if (qtd.sinal === '+A') qtdArea += qtd.buff;
                        if (qtd.sinal === 'xI') qtdInsta *= qtd.buff;
                        if (qtd.sinal === '+S') qtdSemente += qtd.buff;
                        if (qtd.sinal === 'x-') qtdMenosRacao *= qtd.buff;
                        if (qtd.sinal === 'x+') qtdMaisRacao *= qtd.buff;
                    }
                });
            };
            //=============================================================================================================================================================
            //Adiciona os buffs que afetam o tempo dos recursos 
            if (nftOuSkill.tempo) {
                nftOuSkill.tempo.forEach(tempo => {
                    if (tempo.recursoAfetado?.includes(nomeRecurso)) {
                        if (tempo.sinal === 'x') tempoMulti *= tempo.buff;
                        if (tempo.sinal === 'xCM') tempoCM *= tempo.buff  
                        if (tempo.sinal === '-') tempoSubtrai += tempo.buff;
                    }
                });
            };
            //=============================================================================================================================================================
            //Adiciona os buffs que afetam o custo e venda por coins 
            if (nftOuSkill.coins) {
                nftOuSkill.coins.forEach(coin => {
                    if (coin.recursoAfetado?.includes(nomeRecurso)) {
                        if (coin.sinal === 'xV') multiVenda *= coin.buff;
                        if (coin.sinal === 'xC') multiCusto *= coin.buff;                
                    }
                });
            };
            //=============================================================================================================================================================
            //Adiciona os buffs que afetam o estoque
            if (nftOuSkill.estoque) {
                nftOuSkill.estoque.forEach(estoque => {
                    if (estoque.recursoAfetado?.includes(nomeRecurso)) {
                        if (estoque.sinal === 'x') estoqueMulti *= estoque.buff;
                        if (estoque.sinal === '+') estoqueSoma += estoque.buff;                
                    }
                });
            };
            //=============================================================================================================================================================
            //Adiciona os buffs que afetam o Oil usado na CM
            if (nftOuSkill.oilCM) {
                nftOuSkill.oilCM.forEach(oil => {
                    if (oil.sinal === '+') oilAumentado += oil.buff;
                    if (oil.sinal === '-') oilDiminuido += oil.buff;
                })
            };
            //=============================================================================================================================================================
            //Adiciona os buffs que afetam o Oil usado na GH
            if (nftOuSkill.oilGH) {
                nftOuSkill.oilGH.forEach(oil => {
                    if (oil.sinal === 'x') oilMulti *= oil.buff;
                    if (oil.sinal === '-') oilDiminuido += oil.buff;
                })
            };

        });
        
    };
    //percorre todas as listas enviadas ate eles acabarem (foi oque entendi)
    listasDeBuffs.forEach(lista => aplicarBuffs(lista));

    // devolve um objeto com todos os valores calculados
    return {
        qtdSemente,
        qtdMulti,
        qtdSoma,
        qtdSubtrai,
        qtdInsta,
        qtdArea,
        qtdMenosRacao,
        qtdMaisRacao,

        tempoMulti,
        tempoCM,
        tempoSubtrai,

        multiCusto,
        multiVenda,

        estoqueMulti,
        estoqueSoma,

        oilMulti,
        oilAumentado,
        oilDiminuido 
    };

};

function buffsAdicionadosCrops() {
    crops.forEach(crop => {
        // chama a função genérica, passando todas as listas que afetam crops
        const buffs = calcularBuff(crop, [
            skillsLegacy,
            skillsCrops.tier1,
            skillsCrops.tier2,
            skillsCrops.tier3,
            collectibles.ferreiro,
            collectibles.crops,
            collectibles.temporada,
            wearables.temporada,
            wearables.factions,
            wearables.crops,
            shrines,
            totems,
            fertilizantes.rapidRoot,
            fertilizantes.sproutMix,
        ]);
        
        crop.quantidade = ((1 * buffs.qtdMulti) + buffs.qtdSoma - buffs.qtdSubtrai + (buffs.qtdArea / plots)) * buffs.qtdInsta;
        
        crop.tempoFinal = (crop.tempo * buffs.tempoMulti) - buffs.tempoSubtrai;
        
        crop.custoPorSemente = crop.custoSemente * buffs.multiCusto; 
        crop.vendaPorCrop = crop.valorDeVenda * buffs.multiVenda;

        crop.estoqueTotal = (crop.estoque * buffs.estoqueMulti) + buffs.estoqueSoma;

        //Calculo para o tipo de conta que a pessoa quer fazer
        if (modoDeCalularCrops === 'manual') {
            crop.colheitaTotal = crop.quantidade * crop.seedsPlantadas; 
            crop.qtdSementeUsadas = crop.seedsPlantadas * buffs.qtdInsta;
            crop.tempoTotal = crop.tempoFinal * Math.ceil(crop.seedsPlantadas / plots);
        } else if (modoDeCalularCrops === 'rodada') {
            crop.colheitaTotal = (crop.seedsPlantadas * plots) * crop.quantidade ;
            crop.qtdSementeUsadas = (crop.seedsPlantadas * plots) * buffs.qtdInsta;
            crop.tempoTotal = crop.tempoFinal * crop.seedsPlantadas;
        };

    });

    //======================================================================================================================================================================

    cropMachine.forEach(cropM => {
        const buffs = calcularBuff(cropM, [
            skillsLegacy,
            skillsCrops.tier1,
            skillsCrops.tier2,
            skillsCrops.tier3,
            skillsMachinery.tier1,
            skillsMachinery.tier2,
            skillsMachinery.tier3,
            collectibles.ferreiro,
            collectibles.crops,
            collectibles.cropMachine,
            wearables.factions,
            wearables.crops,
            shrines
        ]);

        //atualizar a quantidade de plots que a CM possui e quantos Oil ela gasta por hora!
        plotsCM = mapaDeTodasSkillsComTier['fieldExtensionModule'].possui ? 15 : 10
        oilPorHora = (1 - buffs.oilDiminuido) * (1 + buffs.oilAumentado);

        //liberar as crops com as skills
        if (mapaDeTodasSkillsComTier['cropExtensionModuleI'].possui) {
            mapaDeTodasCropsEFrutas['Rhubarb'].permitido = true;
            mapaDeTodasCropsEFrutas['Zucchini'].permitido = true;
        } else {
            mapaDeTodasCropsEFrutas['Rhubarb'].permitido = false;
            mapaDeTodasCropsEFrutas['Zucchini'].permitido = false;
        }
        if (mapaDeTodasSkillsComTier['cropExtensionModuleII'].possui) {
            mapaDeTodasCropsEFrutas['Carrot'].permitido = true;
            mapaDeTodasCropsEFrutas['Cabbage'].permitido = true;
        } else {
            mapaDeTodasCropsEFrutas['Carrot'].permitido = false;
            mapaDeTodasCropsEFrutas['Cabbage'].permitido = false;
        }
        if (mapaDeTodasSkillsComTier['cropExtensionModuleIII'].possui) {
            mapaDeTodasCropsEFrutas['Yam'].permitido = true;
            mapaDeTodasCropsEFrutas['Broccoli'].permitido = true;
        } else {
            mapaDeTodasCropsEFrutas['Yam'].permitido = false;
            mapaDeTodasCropsEFrutas['Broccoli'].permitido = false;
        }

        cropM.quantidade = Number(buffs.qtdMulti + buffs.qtdSoma - buffs.qtdSubtrai);

        cropM.tempoFinal = cropM.tempo * buffs.tempoCM;
        
        cropM.custoPorSemente = cropM.custoSemente * buffs.multiCusto; 
        cropM.vendaPorCrop = cropM.valorDeVenda * buffs.multiVenda;

        cropM.estoqueTotal = (cropM.estoque * buffs.estoqueMulti) + buffs.estoqueSoma;

        if (modoDeCalularCropsNaCM === 'manual') {
            cropM.qtdSementeUsadas = cropM.seedsPlantadas;
            cropM.colheitaTotal = cropM.quantidade * cropM.seedsPlantadas;
            cropM.tempoTotal = cropM.tempoFinal * (cropM.seedsPlantadas / plotsCM);

        } else if (modoDeCalularCropsNaCM === 'rodada') {
            cropM.qtdSementeUsadas = cropM.seedsPlantadas * plotsCM;
            cropM.colheitaTotal = (cropM.seedsPlantadas * cropM.quantidade) * plotsCM;
            cropM.tempoTotal = cropM.tempoFinal * cropM.seedsPlantadas;

        } else if (modoDeCalularCropsNaCM === 'estoque') {
            cropM.qtdSementeUsadas = cropM.seedsPlantadas * cropM.estoqueTotal;
            cropM.colheitaTotal = (cropM.seedsPlantadas * cropM.quantidade) * cropM.estoqueTotal;
            cropM.tempoTotal = cropM.tempoFinal * (cropM.qtdSementeUsadas / plotsCM);
        }
        
    });

    tabelaDeCrops();
};

//======================================================================================================================================================================
function buffsAdicionadosFrutas() {
    fruits.forEach(fruta => {
        const buffs = calcularBuff(fruta, [
            skillsLegacy,
            skillsFruits.tier1,
            skillsFruits.tier2,
            skillsFruits.tier3,
            collectibles.ferreiro,
            collectibles.crops,
            collectibles.fruits,
            collectibles.temporada,
            wearables.temporada,
            wearables.factions,
            wearables.fruits,
            shrines
        ]);

        //rodadas que uma arvore de frutas dura
        frutiferasDuram = 4;
        if (mapaDeTodosCollectibles['immortalPear'].possui) {
            frutiferasDuram += mapaDeTodosCollectibles['immortalPear'].duracao[0].buff
        }

        //ferramentas usadas para cortar a arvore
        fruta.axe = 1;
        if (mapaDeTodasSkillsComTier['noAxeNoWorries'].possui) fruta.axe *= mapaDeTodasSkillsComTier['noAxeNoWorries'].quantidade[0].buff;
        if (mapaDeTodosCollectibles['foremanBeaver'].possui)   fruta.axe *= mapaDeTodosCollectibles['foremanBeaver'].quantidade[0].buff;
        if (mapaDeTodasSkillsLegacy['logger'].possui)          fruta.axe *= mapaDeTodasSkillsLegacy['logger'].quantidade[0].buff;

        //wood que vai ganhar ao quebrar as arvores
        fruta.wood = 1;
        if (mapaDeTodasSkillsComTier['noAxeNoWorries'].possui) fruta.wood *= mapaDeTodasSkillsComTier['noAxeNoWorries'].quantidade[0].buff;
        if (mapaDeTodasSkillsComTier['fruityWoody'].possui) fruta.wood += mapaDeTodasSkillsComTier['fruityWoody'].quantidade[0].buff;

        fruta.quantidade = (1 * buffs.qtdMulti) + buffs.qtdSoma - buffs.qtdSubtrai;
        
        fruta.tempoFinal = fruta.tempo * buffs.tempoMulti;

        fruta.custoPorSemente = fruta.custoSemente * buffs.multiCusto;
        fruta.vendaPorFruta = fruta.valorDeVenda * buffs.multiVenda;

        fruta.estoqueFinal = (fruta.estoque * buffs.estoqueMulti) + buffs.estoqueSoma;

        if (modoDeCalularCropsFruta === 'manual') {
            fruta.qtdSementeUsadas = fruta.seedsPlantadas;
            fruta.colheitaTotal = ((fruta.seedsPlantadas * frutiferasDuram) * fruta.quantidade);
            fruta.tempoTotal = fruta.tempoFinal * (Math.ceil(fruta.seedsPlantadas / plotsFrutas) * frutiferasDuram); 
            fruta.totalAxe = fruta.axe * fruta.seedsPlantadas;
            fruta.totalWood = fruta.wood * fruta.seedsPlantadas;

        } else if (modoDeCalularCropsFruta === 'rodada') {
            fruta.qtdSementeUsadas = fruta.seedsPlantadas * plotsFrutas;
            fruta.colheitaTotal = ((fruta.seedsPlantadas * frutiferasDuram) * fruta.quantidade) * plotsFrutas;
            fruta.tempoTotal = fruta.tempoFinal * (fruta.seedsPlantadas * frutiferasDuram);
            fruta.totalAxe = (fruta.axe * fruta.seedsPlantadas) * plotsFrutas;
            fruta.totalWood = (fruta.wood * fruta.seedsPlantadas) * plotsFrutas;
        }

    })
    tabelaDeCrops();
}

//======================================================================================================================================================================
function buffsAdicionadosGreenhouse() {
    greenhouse.forEach(gh => {
        const buffs = calcularBuff(gh, [
            skillsLegacy,
            skillsGreenhouse.tier1,
            skillsGreenhouse.tier2,
            skillsGreenhouse.tier3,
            collectibles.ferreiro,
            collectibles.crops,
            collectibles.greenhouse,
            collectibles.temporada,
            wearables.temporada,
            wearables.factions,
            wearables.crops,
            wearables.greenhouse,
            totems,
            shrines
        ]);

        gh.quantidade = ((1 * buffs.qtdMulti) + buffs.qtdSoma - buffs.qtdSubtrai) * buffs.qtdInsta;

        gh.tempoFinal = (gh.tempo * buffs.tempoMulti);

        gh.estoqueFinal = (gh.estoque * buffs.estoqueMulti) + buffs.estoqueSoma;
        gh.oilFinal = (gh.oil * buffs.oilMulti) - buffs.oilDiminuido;

        gh.custoPorSemente = gh.custoSemente * buffs.multiCusto;
        gh.vendaPorCrop = gh.valorDeVenda * buffs.multiVenda;

        if (modoDeCalcularGreenhouse === 'manual') {
            gh.qtdSementeUsadas = (buffs.qtdSemente * gh.seedsPlantadas);
            gh.colheitaTotal = gh.quantidade * gh.seedsPlantadas;
            gh.tempoTotal = gh.tempoFinal * Math.ceil(gh.seedsPlantadas / plotsGH);
            gh.oilTotal = gh.oilFinal * gh.seedsPlantadas;
        } else if (modoDeCalcularGreenhouse === 'rodada') {
            gh.qtdSementeUsadas = (gh.seedsPlantadas * buffs.qtdSemente) * plotsGH;
            gh.colheitaTotal = gh.quantidade * (gh.seedsPlantadas * plotsGH);
            gh.tempoTotal = gh.tempoFinal * gh.seedsPlantadas;
            gh.oilTotal = gh.oilFinal * (gh.seedsPlantadas * plotsGH);
        };

    });
    tabelaDeCrops();

};

//======================================================================================================================================================================

function buffsAdicionadosMinerais() {

    minerals.forEach(mineral => {
        const buffs = calcularBuff(mineral, [
            skillsLegacy,
            skillsTrees.tier1,
            skillsTrees.tier2,
            skillsTrees.tier3,
            skillsMinerals.tier1,
            skillsMinerals.tier2,
            skillsMinerals.tier3,
            skillsMachinery.tier1,
            skillsMachinery.tier2,
            skillsMachinery.tier3,
            collectibles.ferreiro,
            collectibles.trees,
            collectibles.minerals,
            collectibles.temporada,
            wearables.temporada,
            wearables.factions,
            wearables.minerals,
            shrines,
            totems
        ]);
        //buff que todas lands possuem!
        let buffMineralLand = (mineral.name.includes('Wood') || mineral.name.includes('Stone') || mineral.name.includes('Iron') ||  mineral.name.includes('Gold')) ? 0.2 : 0;
        
        //quantidade total de nodes sem a fusao!
        mineral.qtdNodes.total = Number(mineral.qtdNodes.t1) + Number(mineral.qtdNodes.t2 * 4) + Number(mineral.qtdNodes.t3 * 16);

        let buffDosTiers = 0;
        if (mineral.qtdNodes.t2 > 0 || mineral.qtdNodes.t3 > 0) buffDosTiers = (mineral.qtdNodes.t2 * 0.5 / mineral.qtdNodes.total) + (mineral.qtdNodes.t3 * 2.5 / mineral.qtdNodes.total);

        mineral.mediaPorNode = ((mineral.qtdMediaPorNode * buffs.qtdMulti) + buffMineralLand + buffDosTiers + buffs.qtdSoma - buffs.qtdSubtrai) * buffs.qtdInsta;        
        mineral.tempoFinal = (mineral.tempo * buffs.tempoMulti) - buffs.tempoSubtrai;

    });

    ferramentas.forEach(ferramenta => {
        // chama a função genérica, passando todas as listas que afetam crops
        const buffs = calcularBuff(ferramenta, [
            skillsLegacy,
            skillsTrees.tier1,
            skillsTrees.tier2,
            skillsTrees.tier3,
            skillsMinerals.tier1,
            skillsMinerals.tier2,
            skillsMinerals.tier3,
            skillsMachinery.tier1,
            skillsMachinery.tier2,
            skillsMachinery.tier3,
            collectibles.ferreiro,
            collectibles.trees,
            collectibles.minerals,
            collectibles.temporada,
            wearables.temporada,
            wearables.factions,
            wearables.minerals,
            shrines,
            totems
        ]);
        
        ferramenta.qtdPrecisaPorNode = (1 * buffs.qtdMulti) * buffs.qtdInsta;
        ferramenta.estoqueFinal = Math.ceil((ferramenta.estoque * buffs.estoqueMulti) + buffs.estoqueSoma);
        ferramenta.recursosNecessarios.coins = ferramenta.recursosNecessarios.coinsOriginal * buffs.multiCusto;
        

        //Calculo para o tipo de conta que a pessoa quer fazer
        if (modoDeCalcularMinerios === 'manual') {
            ferramenta.quantidade = (ferramenta.qtdUsada * buffs.qtdMulti) * buffs.qtdInsta;
            //Tempo Total gastando as ferramentos no recurso obtido (isso vai criar o "save" dentro de minerals e nao ferramentas)
            mapaDeMinerals[ferramenta.recursoObtido].tempoTotal = (ferramenta.qtdUsada / mapaDeMinerals[ferramenta.recursoObtido].qtdNodes.total) * mapaDeMinerals[ferramenta.recursoObtido].tempoFinal;
            mapaDeMinerals[ferramenta.recursoObtido].totalDoRecurso = (ferramenta.qtdUsada * mapaDeMinerals[ferramenta.recursoObtido].mediaPorNode);

        } else if (modoDeCalcularMinerios === 'rodada') {
            ferramenta.quantidade = ((ferramenta.qtdUsada * buffs.qtdMulti) * buffs.qtdInsta) * mapaDeMinerals[ferramenta.recursoObtido].qtdNodes.total;
            mapaDeMinerals[ferramenta.recursoObtido].tempoTotal = ferramenta.qtdUsada * mapaDeMinerals[ferramenta.recursoObtido].tempoFinal;
            mapaDeMinerals[ferramenta.recursoObtido].totalDoRecurso = ((ferramenta.qtdUsada * mapaDeMinerals[ferramenta.recursoObtido].qtdNodes.total) * mapaDeMinerals[ferramenta.recursoObtido].mediaPorNode);

        } else if (modoDeCalcularMinerios === 'hora') {
            if (ferramenta.qtdUsada > 24) {
                let linguagemDoAlerta = idioma === 'portugues' ? 'Se quer usar o Modo de calcular por hora, não pode colocar mais que 24 horas. Se quiser isso, mude o modo de calcular e, se passar das 24 horas, ignore seu lucro diário e semanal. 😅' : 'If you want to use the hourly calculation mode, you cannot enter more than 24 hours. If you need that, change the calculation mode and, if it exceeds 24 hours, ignore your daily and weekly profit. 😅';
                alert(linguagemDoAlerta);
                ferramenta.qtdUsada = 24;
            }
            ferramenta.quantidade = (((ferramenta.qtdUsada * umaHora) / mapaDeMinerals[ferramenta.recursoObtido].tempoFinal) * buffs.qtdMulti * buffs.qtdInsta) * mapaDeMinerals[ferramenta.recursoObtido].qtdNodes.total;
            //nesse caso vai mostrar quantas rodadas se faz pela hora colocada
            mapaDeMinerals[ferramenta.recursoObtido].tempoTotal = (ferramenta.qtdUsada * umaHora) / mapaDeMinerals[ferramenta.recursoObtido].tempoFinal;
            mapaDeMinerals[ferramenta.recursoObtido].totalDoRecurso = ((ferramenta.qtdUsada * umaHora) / mapaDeMinerals[ferramenta.recursoObtido].tempoFinal * mapaDeMinerals[ferramenta.recursoObtido].qtdNodes.total) * mapaDeMinerals[ferramenta.recursoObtido].mediaPorNode;
        };

    });

    //para pesca e escavação ate o momento
    ferramentasSecundarias.forEach(ferramenta => {
        const buffs = calcularBuff(ferramenta, [
            skillsLegacy,
            skillsTrees.tier1,
            skillsTrees.tier2,
            skillsTrees.tier3,
            skillsMinerals.tier1,
            skillsMinerals.tier2,
            skillsMinerals.tier3,
            skillsMachinery.tier1,
            skillsMachinery.tier2,
            skillsMachinery.tier3,
            collectibles.ferreiro,
            collectibles.trees,
            collectibles.minerals,
            collectibles.temporada,
            wearables.temporada,
            wearables.factions,
            wearables.minerals,
            wearables.pesca,
            wearables.terouso,
            shrines,
            totems
        ]);

        ferramenta.quantidade = Number(ferramenta.qtdUsada * buffs.qtdMulti);
        ferramenta.estoqueFinal = Math.ceil((ferramenta.estoque * buffs.estoqueMulti) + buffs.estoqueSoma);

    });

    mediaDeValorDasFerramentasEMinerais();
};

function mediaDeValorDasFerramentasEMinerais() {

    //para criar a "variavel" dentro de minerals
    mapaDeMinerals['wood'].woodGastas = Number(0);
    mapaDeMinerals['stone'].stoneGastas = Number(0);
    mapaDeMinerals['iron'].ironGastas = Number(0);
    mapaDeMinerals['gold'].goldGastas = Number(0);
    mapaDeMinerals['crimstone'].crimstoneGastas = Number(0);
    mapaDeMinerals['oil'].oilGastas = Number(0);
    mapaDeMinerals.coinsGastas = Number(0);
    mapaDeMinerals.leatherGastas = Number(0);
    mapaDeMinerals.woolGastas = Number(0);

    todasFerramentas.forEach(ferramenta => {

        let oilLaOuCouro = 'leather';
        if (mapaDeTodasSkillsComTier['oilRig'].possui && ferramenta.name === 'Oil Drill') {
            oilLaOuCouro = 'wool';
        } 

        //Calcular media de custo em coins da ferramenta para mostrar nos cards!
        ferramenta.custoEmCoins = ferramenta.recursosNecessarios['coins'] + 
            ((ferramenta.recursosNecessarios['wood'] ?? 0) * (mapaDeMinerals['wood']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['stone'] ?? 0) * (mapaDeMinerals['stone']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['iron'] ?? 0) * (mapaDeMinerals['iron']?.mediaDeCustoCoins ?? 0)) + 
            ((ferramenta.recursosNecessarios['gold'] ?? 0) * (mapaDeMinerals['gold']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['crimstone'] ?? 0) * (mapaDeMinerals['crimstone']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['oil'] ?? 0) * (mapaDeMinerals['oil']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios[oilLaOuCouro] ?? 0) * (mapaDosValoresDoMarket[oilLaOuCouro]?.valor ?? 0) * flowerEmCoins);

            
        //feito para mostrar os gastos com as ferramentas nos cards!
        mapaDeMinerals['wood'].woodGastas += Number((ferramenta.recursosNecessarios['wood'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['stone'].stoneGastas += Number((ferramenta.recursosNecessarios['stone'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['iron'].ironGastas += Number((ferramenta.recursosNecessarios['iron'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['gold'].goldGastas += Number((ferramenta.recursosNecessarios['gold'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['crimstone'].crimstoneGastas += Number((ferramenta.recursosNecessarios['crimstone'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['oil'].oilGastas += Number((ferramenta.recursosNecessarios['oil'] ?? 0) * ferramenta.quantidade);

        //essas 3 abaixo foi criado dentro de minerais, apenas com intuito de somar quanto foi gasto nas ferramentas e descontar!
        mapaDeMinerals.coinsGastas += Number((ferramenta.recursosNecessarios['coins'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals.leatherGastas += oilLaOuCouro === 'leather' ? Number((ferramenta.recursosNecessarios['leather'] ?? 0) * ferramenta.quantidade) : 0;
        mapaDeMinerals.woolGastas += oilLaOuCouro === 'wool' ? Number((ferramenta.recursosNecessarios['wool'] ?? 0) * ferramenta.quantidade) : 0;

        //para calcular o custo médio que sai cada mineral
        const mineral = mapaDeMinerals[ferramenta.recursoObtido];
        if (!mineral) {
            console.warn("Recurso não encontrado:", ferramenta.recursoObtido);
            return;
        }

        //calcular média em coins e flower que cada mineral sai!
        mineral.mediaDeCustoCoins = (ferramenta.custoEmCoins * (ferramenta.qtdPrecisaPorNode || 1)) / (mineral.mediaPorNode || 1);
        mineral.mediaDeCustoFlower = mineral.mediaDeCustoCoins / flowerEmCoins;
    });
    tabelaMinerios();
};

//======================================================================================================================================================================
function buffsAdicionadosAnimais() {

    ferramentasAnimais.forEach(carinho => {
        const buffs = calcularBuff(carinho, [
                skillsLegacy,
                skillsAnimais.tier1,
                skillsAnimais.tier2,
                skillsAnimais.tier3,
                collectibles.animais,
                collectibles.temporada,
                wearables.temporada,
                wearables.animais,
                shrines,
                totems,
            ]);
    
        carinho.xpFinal = (carinho.xpPadrao * buffs.qtdMulti) + buffs.qtdSoma;
        console.log(`xp de ${carinho.name} com buff: ${carinho.xpFinal}`);

    });

    todosAnimais.forEach(animal => {
        const buffs = calcularBuff(animal, [
                skillsLegacy,
                skillsAnimais.tier1,
                skillsAnimais.tier2,
                skillsAnimais.tier3,
                collectibles.animais,
                collectibles.temporada,
                wearables.temporada,
                wearables.animais,
                shrines,
                totems,
            ]);

        if (animal.name === 'galinha') {
            animal.qtdComidaPadrao = 1;
            animal.tempo = parseFloat(86_400_000);
        }
        if (animal.name === 'vaca') {
            animal.qtdComidaPadrao = 5;
            animal.tempo = parseFloat(86_400_000);
        }
        if (animal.name === 'ovelha') {
            animal.qtdComidaPadrao = 3;
            animal.tempo = parseFloat(86_400_000);
        }

        animal.qtdComidaPadrao *= buffs.qtdMulti * buffs.qtdMenosRacao * buffs.qtdMaisRacao;
        animal.tempo = (animal.tempo - buffs.tempoSubtrai) * buffs.tempoMulti;
        animal.coinsFinal = animal.coins * buffs.multiVenda;

        console.log(`${animal.name} dorme ${formatarTempo(animal.tempo)}`)

    });

    xpCarinhoXpComidaValores();
};


function buffsAdicionadosRecursosAnimais() {

    let contadorGalinhas = 0;
    let somadorDeOvos = 0;
    let somadorDePenas = 0;
    let somadorDeCustoDaComidaGalinhas = 0;

    //=============================================== GALINHAS =====================================================================


    animais.galinhas.forEach(galinha => {

        //contador, que aumenta a cada level que passa no for each, serve para usar como divisao e fazer a media de recurso que vai render do 0 ate o level desejado!
        contadorGalinhas += 1;


        // Calcula buffs para egg
        const buffsEgg = calcularBuff('egg', [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            shrines,
            totems,
        ]);
        
        // Calcula buffs para feather
        const buffsFeather = calcularBuff('feather', [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            shrines,
            totems,
        ]);

        galinha.eggFinal = (galinha.egg * buffsEgg.qtdMulti) + buffsEgg.qtdSoma - buffsEgg.qtdSubtrai;
        galinha.featherFinal = galinha.feather === 0 ? galinha.feather : (galinha.feather * buffsFeather.qtdMulti) + buffsFeather.qtdSoma - buffsFeather.qtdSubtrai;

        //somar e dps fazer a media de recursos que a galinha faz ate o level!
        somadorDeOvos += galinha.eggFinal;
        somadorDePenas += galinha.featherFinal;
        somadorDeCustoDaComidaGalinhas += (galinha.custoDaComida * galinha.comidaNecessaria);

        //definir media ou manter level 15 as galinhas
        if (galinha.levelAnterior < 15) {
            galinha.mediaDeOvosDoLevel = (somadorDeOvos / contadorGalinhas) * (galinha.qtdUsada || 0);
            galinha.mediaDePenasDoLevel = (somadorDePenas / contadorGalinhas) * (galinha.qtdUsada || 0);
            //definir gasto com comida
            galinha.mediaDeGastoComComida = (somadorDeCustoDaComidaGalinhas / contadorGalinhas) * (galinha.qtdUsada || 0);
        } else {
            galinha.mediaDeOvosDoLevel = galinha.eggFinal * (galinha.qtdUsada || 0);
            galinha.mediaDePenasDoLevel = galinha.featherFinal * (galinha.qtdUsada || 0);
            //definir gasto com comida
            galinha.mediaDeGastoComComida = (galinha.custoDaComida * galinha.comidaNecessaria) * (galinha.qtdUsada || 0);
        }

    });
    tabelaGalinhas();

    //=============================================== VACAS =====================================================================

    let contadorVacas = 0;
    let somadorDeLeite = 0;
    let somadorDeCouro = 0;
    let somadorDeCustoDaComidaVacas = 0;

    animais.vacas.forEach(vaca => {

        //contador, que aumenta a cada level que passa no for each, serve para usar como divisao e fazer a media de recurso que vai render do 0 ate o level desejado!
        contadorVacas += 1;


        // Calcula buffs para egg
        const buffsMilk = calcularBuff('milk', [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            shrines,
            totems,
        ]);
        
        // Calcula buffs para feather
        const buffsLeather = calcularBuff('leather', [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            shrines,
            totems,
        ]);

        vaca.milkFinal = (vaca.milk * buffsMilk.qtdMulti) + buffsMilk.qtdSoma - buffsMilk.qtdSubtrai;
        vaca.leatherFinal = vaca.leather === 0 ? vaca.leather : (vaca.leather * buffsLeather.qtdMulti) + buffsLeather.qtdSoma - buffsLeather.qtdSubtrai;

        //somar e dps fazer a media de recursos que a vaca faz ate o level!
        somadorDeLeite += vaca.milkFinal;
        somadorDeCouro += vaca.leatherFinal;
        somadorDeCustoDaComidaVacas += (vaca.custoDaComida * vaca.comidaNecessaria);

        //definir media ou manter level 15 as vacas
        if (vaca.levelAnterior < 15) {
            vaca.mediaDeLeiteDoLevel = (somadorDeLeite / contadorVacas) * (vaca.qtdUsada || 0);
            vaca.mediaDeCouroDoLevel = (somadorDeCouro / contadorVacas) * (vaca.qtdUsada || 0);
            //definir gasto com comida
            vaca.mediaDeGastoComComida = (somadorDeCustoDaComidaVacas / contadorVacas) * (vaca.qtdUsada || 0);
        } else {
            vaca.mediaDeLeiteDoLevel = vaca.milkFinal * (vaca.qtdUsada || 0);
            vaca.mediaDeCouroDoLevel = vaca.leatherFinal * (vaca.qtdUsada || 0);
            //definir gasto com comida
            vaca.mediaDeGastoComComida = (vaca.custoDaComida * vaca.comidaNecessaria) * (vaca.qtdUsada || 0);
        }

    });
    tabelaVacas();

    //=============================================== OVELHAS =====================================================================

    let contadorOvelhas = 0;
    let somadorDeLa = 0;
    let somadorDeLaMerino = 0;
    let somadorDeCustoDaComidaOvelhas = 0;

    animais.ovelhas.forEach(ovelha => {

        //contador, que aumenta a cada level que passa no for each, serve para usar como divisao e fazer a media de recurso que vai render do 0 ate o level desejado!
        contadorOvelhas += 1;


        // Calcula buffs para egg
        const buffsWool = calcularBuff('wool', [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            shrines,
            totems,
        ]);
        
        // Calcula buffs para feather
        const buffsMerino = calcularBuff('merinoWool', [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            shrines,
            totems,
        ]);

        //definir quanto falta de comida para subir de level
        ovelha.qtdDeComidaPraSubirDeLevel = (ovelha.xpNecessario / ovelha.xpDaComidaPadrao) * ovelha.qtdComidaPadrao;

        ovelha.woolFinal = (ovelha.wool * buffsWool.qtdMulti) + buffsWool.qtdSoma - buffsWool.qtdSubtrai;
        ovelha.merinoWoolFinal = ovelha.merinoWool === 0 ? ovelha.merinoWool : (ovelha.merinoWool * buffsMerino.qtdMulti) + buffsMerino.qtdSoma - buffsMerino.qtdSubtrai;

        //somar e dps fazer a media de recursos que a ovelha faz ate o level!
        somadorDeLa += ovelha.woolFinal;
        somadorDeLaMerino += ovelha.merinoWoolFinal;
        somadorDeCustoDaComidaOvelhas += (ovelha.custoDaComida * ovelha.comidaNecessaria);

        //definir media ou manter level 15 as ovelhas
        if (ovelha.levelAnterior < 15) {
            ovelha.mediaDeLaDoLevel = (somadorDeLa / contadorOvelhas) * (ovelha.qtdUsada || 0);
            ovelha.mediaDeLaMerinoDoLevel = (somadorDeLaMerino / contadorOvelhas) * (ovelha.qtdUsada || 0);
            //definir gasto com comida
            ovelha.mediaDeGastoComComida = (somadorDeCustoDaComidaOvelhas / contadorOvelhas) * (ovelha.qtdUsada || 0);
        } else {
            ovelha.mediaDeLaDoLevel = ovelha.woolFinal * (ovelha.qtdUsada || 0);
            ovelha.mediaDeLaMerinoDoLevel = ovelha.merinoWoolFinal * (ovelha.qtdUsada || 0);
            //definir gasto com comida
            ovelha.mediaDeGastoComComida = (ovelha.custoDaComida * ovelha.comidaNecessaria) * (ovelha.qtdUsada || 0);
        }

    });
    tabelaOvelhas();
};


//======================================================================================================================================================================



const chavesPossiveis = [
    'estoque',
    'tempo',
    'quantidade',
    'duracao',
    'coins',
    'upEvento',
    'tempoCM',
];


//função responsavel por verificar se skills/NFTs possuem algum bonus ativado por outra skill/NFT
function ativarBonusDasNftsESkills() {
    let mudouBuff;

    do {
        mudouBuff = false;

        todosCollectibles.forEach(collectibles => {
            // Acha a chave interna (ex.: "ferreiro", "estacao", etc.)
            const chave = chavesPossiveis.find(ch =>
                Array.isArray(collectibles[ch])
            );
            if (!chave) return;

            // Cada grupo sempre possui o objeto no índice 0
            const data = collectibles[chave][0];

            // ===== BASES REAIS (imutáveis) =====
            const buffBase = data.buffBase ?? data.buff;
            const recursoBase = data.recursoAfetadoBase ?? data.recursoAfetado;

            let buffAplicado = buffBase;
            let recursoAplicado = recursoBase;

            // ===== CONDICIONAL POR NFT =====
            if (data.condicionalNft) {
                const depende = mapaDeTodosCollectibles[data.condicionalNft.dependeDe];

                if (depende?.possui) {
                    buffAplicado = data.condicionalNft.novoBuff ?? buffAplicado;
                    recursoAplicado = data.condicionalNft.novoRecursoAfetado ?? recursoAplicado;
                }
            }

            // ===== CONDICIONAL POR SKILL (1) =====
            if (data.condicionalSkill) {
                const skill = mapaDeTodasSkillsComTier[data.condicionalSkill.dependeDe];

                if (skill?.possui) {
                    buffAplicado = data.condicionalSkill.novoBuff ?? buffAplicado;
                    recursoAplicado = data.condicionalSkill.novoRecursoAfetado ?? recursoAplicado;
                }
            }

            // ===== CONDICIONAL POR SKILL (2) =====
            if (data.condicionalSkill2) {
                const skill2 = mapaDeTodasSkillsComTier[data.condicionalSkill2.dependeDe];

                if (skill2?.possui) {
                    buffAplicado = data.condicionalSkill2.novoBuff ?? buffAplicado;
                    recursoAplicado = data.condicionalSkill2.novoRecursoAfetado ?? recursoAplicado;
                }
            }

            // ===== APLICA SOMENTE SE MUDAR =====
            if (data.buff !== buffAplicado) {
                data.buff = buffAplicado;
                mudouBuff = true;
            }

            if (data.recursoAfetado !== recursoAplicado) {
                data.recursoAfetado = recursoAplicado;
                mudouBuff = true;
            }
        });

    } while (mudouBuff);

    chamadorDeBuffs();
}


//==================================================================================================================================================================

//responsavel por ativar buffs de NFTs com tier
function nftsDeTierQuePossuemBuffDoAntecessor() {

    //Espantalhos
    if (kuebiko.checked || scarecrow.checked || nancy.checked) {
        mapaDeTodosCollectibles['nancy'].possui = true;
    } else {
        mapaDeTodosCollectibles['nancy'].possui = false;
    }

    if (kuebiko.checked || scarecrow.checked) {
        mapaDeTodosCollectibles['scarecrow'].possui = true;
    } else {
        mapaDeTodosCollectibles['scarecrow'].possui = false;
    }

    //Beavers
    if (foremanBeaver.checked || apprenticeBeaver.checked || woodyTheBeaver.checked) {
        mapaDeTodosCollectibles['woodyTheBeaver'].possui = true;
    } else {
        mapaDeTodosCollectibles['woodyTheBeaver'].possui = false;
    }

    if (foremanBeaver.checked || apprenticeBeaver.checked) {
        mapaDeTodosCollectibles['apprenticeBeaver'].possui = true;
    } else {
        mapaDeTodosCollectibles['apprenticeBeaver'].possui = false;
    }
    
    chamadorDeBuffs();
};

//==================================================================================================================================================================

function chamadorDeBuffs() {
    buffsAdicionadosCrops();
    buffsAdicionadosMinerais();
    buffsAdicionadosFrutas();
    buffsAdicionadosGreenhouse();
    buffsAdicionadosAnimais();
    cropToCoins(); //não é um buff, mudar de lugar dps
    mudarIdioma();
}