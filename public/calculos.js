function calcularBuff(recurso, listasDeBuffs) { 
    
    // Variáveis que são afetas pelos buffs de quantidade, quantidade em Área e insta
    let qtdMulti = 1;       // sinal === 'x'
    let qtdSoma = 0;        // sinal === '+'
    let qtdSubtrai = 0;     // sinal === '-'
    let qtdArea = 0;        // sinal === '+A'
    let qtdInsta = 1;       // sinal === 'xI'
    let qtdSemente = 1;     // sinal === '+S'
    let qtdMenosRacao = 1;  // sinal === 'x-'
    let qtdMaisRacao = 1;   // sinal === 'x+'

    // Variáveis que são afetadas pelos buffs de tempo
    let tempoMulti = 1;
    let tempoCM = 1;
    let tempoSubtrai = 0;

    // Variáveis que são afetadas pelos buffs de coins
    let multiCusto = 1;
    let multiVenda = 1;

    // Variáveis que são afetadas pelos buffs de estoque
    let estoqueMulti = 1;
    let estoqueSoma = 0;

    // Variáveis que afetam Oil usado na CM e GH
    let oilMulti = 1;
    let oilAumentado = 0;
    let oilDiminuido = 0;

    // Eventos bônus
    let bountifulHarvest = 0; // +1 crops e frutas
    let sunshower = 1; // redução de 50% nas crops
    
    // Check de segurança (evita erros caso essas variáveis sejam carregadas depois)
    if (typeof eventoSelecionado !== 'undefined' && typeof estacao !== 'undefined') {
        if (eventoSelecionado === 'bountifulHarvest' && (estacao === 'spring' || estacao === 'summer')) {
            bountifulHarvest = 1;
        }
        if (eventoSelecionado === 'sunshower' && (estacao === 'autumn' || estacao === 'winter')) {
            sunshower = 0.5;
        }
    }

    // Esse 'lista' pode ser skills e NFTs, vai percorrer todos os buffs e adicionar o valor às variáveis
    function aplicarBuffs(lista) { 
        lista.forEach(nftOuSkill => {
            
            // VERIFICAÇÃO ATUALIZADA: Confere se 'possui' ou 'level' é truthy
            const isActive = nftOuSkill.possui || (nftOuSkill.level !== undefined && nftOuSkill.level > 0);
            if (!isActive) return;

            if (nftOuSkill.estacao && typeof estacao !== 'undefined' && !nftOuSkill.estacao.includes(estacao)) return;
            
            // Identifica o nome do recurso
            const nomeGenerico  = recurso.name  ?? recurso;
            const nomeEspecifico = recurso.levelAnterior ?? null;

            // FUNÇÃO AUXILIAR: Padroniza o acesso aos dados, resolvendo conflitos de estrutura
            const processarEfeito = (efeitos, callback) => {
                if (!efeitos) return;
                
                // Transforma objetos isolados em array para percorrer normalmente
                const arrayDeEfeitos = Array.isArray(efeitos) ? efeitos : [efeitos];

                arrayDeEfeitos.forEach(efeito => {
                    // Normaliza chave de recursoAfetado (plural vs singular)
                    const recursosAfetados = efeito.recursoAfetado || efeito.recursosAfetados || [];

                    // Se o recurso atual estiver na lista de afetados...
                    if (recursosAfetados.includes(nomeGenerico) || (nomeEspecifico && recursosAfetados.includes(nomeEspecifico))) {
                        
                        let valorBuff = efeito.buff;
                        
                        // LÓGICA DE NÍVEL: Se o buff for um Array, extrai o número com base no level atual da skill
                        if (Array.isArray(valorBuff) && nftOuSkill.level > 0) {
                            valorBuff = valorBuff[nftOuSkill.level - 1]; // Índice 0 é igual ao Nível 1
                        }

                        // Executa a operação de matemática na respectiva variável
                        callback(efeito.sinal, valorBuff);
                    }
                });
            };

            // Aplica os buffs em cada categoria com a nova lógica universal
            processarEfeito(nftOuSkill.quantidade, (sinal, buff) => {
                if (sinal === 'x') qtdMulti *= buff;
                if (sinal === '+') qtdSoma += buff;
                if (sinal === '-') qtdSubtrai += buff;
                if (sinal === '+A') qtdArea += buff;
                if (sinal === 'xI') qtdInsta *= buff;
                if (sinal === '+S') qtdSemente += buff;
                if (sinal === 'x-') qtdMenosRacao *= buff;
                if (sinal === 'x+') qtdMaisRacao *= buff;
            });

            processarEfeito(nftOuSkill.quantidade2, (sinal, buff) => {
                if (sinal === 'x') qtdMulti *= buff;
                if (sinal === '+') qtdSoma += buff;
                if (sinal === '-') qtdSubtrai += buff;
                if (sinal === '+A') qtdArea += buff;
                if (sinal === 'xI') qtdInsta *= buff;
                if (sinal === '+S') qtdSemente += buff;
                if (sinal === 'x-') qtdMenosRacao *= buff;
                if (sinal === 'x+') qtdMaisRacao *= buff;
            });

            processarEfeito(nftOuSkill.tempo, (sinal, buff) => {
                if (sinal === 'x') tempoMulti *= buff;
                if (sinal === 'xCM') tempoCM *= buff;  
                if (sinal === '-') tempoSubtrai += buff;
            });

            processarEfeito(nftOuSkill.coins, (sinal, buff) => {
                if (sinal === 'xV') multiVenda *= buff;
                if (sinal === 'xC') multiCusto *= buff;                
            });

            processarEfeito(nftOuSkill.estoque, (sinal, buff) => {
                if (sinal === 'x') estoqueMulti *= buff;
                if (sinal === '+') estoqueSoma += buff;                
            });

            processarEfeito(nftOuSkill.oilCM, (sinal, buff) => {
                if (sinal === '+') oilAumentado += buff;
                if (sinal === '-') oilDiminuido += buff;
            });

            processarEfeito(nftOuSkill.oilGH, (sinal, buff) => {
                if (sinal === 'x') oilMulti *= buff;
                if (sinal === '-') oilDiminuido += buff;
            });

            // Tratamento isolado para o 'upEvento' já que lida com variáveis globais do clima
            if (nftOuSkill.upEvento) {
                const upEventos = Array.isArray(nftOuSkill.upEvento) ? nftOuSkill.upEvento : [nftOuSkill.upEvento];
                upEventos.forEach(evento => {
                    const recursosAfetados = evento.recursoAfetado || evento.recursosAfetados || [];
                    if (typeof estacao !== 'undefined' && recursosAfetados.includes(estacao)) {
                        bountifulHarvest *= 2;
                        if (typeof eventoSelecionado !== 'undefined' && eventoSelecionado === 'sunshower') sunshower /= 2;
                    }
                });
            }
        });
        
    }
    // Percorre todas as listas enviadas até eles acabarem
    listasDeBuffs.forEach(lista => aplicarBuffs(lista));

    // Devolve um objeto com todos os valores calculados
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
        oilDiminuido,

        bountifulHarvest,
        sunshower
    };
};

function buffsAdicionadosCrops() {
    const budsFiltrados = filtrarBudsMaiorBuff(); 

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
            fertilizantes.sproutrootSurprise,
            budsFiltrados
        ]);


        //Estoque de crops!
        crop.estoqueTotal = (crop.estoque * buffs.estoqueMulti) + buffs.estoqueSoma;

        //Custo da semente e valor da crop em coins!
        crop.custoPorSemente = crop.custoSemente * buffs.multiCusto; 
        crop.vendaPorCrop = crop.valorDeVenda * buffs.multiVenda;

        //tempo para ficar pronta a crop!
        crop.tempoFinal = (crop.tempo * buffs.tempoMulti * buffs.sunshower) - buffs.tempoSubtrai;
        
        //quantidade de crops recebida por semente!
        crop.quantidade = ((1 * buffs.qtdMulti) + buffs.qtdSoma - buffs.qtdSubtrai + (buffs.qtdArea / plots) + buffs.bountifulHarvest) * buffs.qtdInsta;

        //Calculo para o tipo de conta que a pessoa quer fazer
        if (modoDeCalularCrops === 'manual') {
            crop.colheitaTotal = crop.quantidade * crop.seedsPlantadas; 
            crop.qtdSementeUsadas = crop.seedsPlantadas * buffs.qtdInsta;
            crop.tempoTotal = crop.tempoFinal * (crop.seedsPlantadas / plots); // retirei Math.ceil que arredonda para cima!

        } else if (modoDeCalularCrops === 'rodada') {
            crop.colheitaTotal = (crop.seedsPlantadas * plots) * crop.quantidade ;
            crop.qtdSementeUsadas = (crop.seedsPlantadas * plots) * buffs.qtdInsta;
            crop.tempoTotal = crop.tempoFinal * crop.seedsPlantadas;

        } else if (modoDeCalularCrops === 'estoque') {
            crop.qtdSementeUsadas = crop.seedsPlantadas * crop.estoqueTotal;
            crop.colheitaTotal = (crop.seedsPlantadas * crop.quantidade) * crop.estoqueTotal;
            crop.tempoTotal = crop.tempoFinal * (crop.qtdSementeUsadas / plots);
        };

    });

    //======================================================================================================================================================================

    //======================================================================================================================================================================

    cropMachine.forEach(cropM => {
        const budsFiltrados = filtrarBudsMaiorBuff();

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
            shrines,
            budsFiltrados
        ]);

        // ATUALIZAÇÃO: Calculando Plots da CM dinamicamente com base nos 3 Níveis
        plotsCM = 10;
        let skillPlotsCM = mapaDeTodasSkillsComTier['fieldExtensionModule'];
        if (skillPlotsCM && skillPlotsCM.level > 0) {
            plotsCM += skillPlotsCM.plotsCM[0].buff[skillPlotsCM.level - 1];
        }

        // ATUALIZAÇÃO: Lendo diretamente as skills de Oil para evitar falha de compatibilidade de nome
        let oilDim = 0;
        let oilAum = 0;

        let skillOilGadget = mapaDeTodasSkillsComTier['oilGadget'];
        if (skillOilGadget && skillOilGadget.level > 0) oilDim += skillOilGadget.oilCM[0].buff[skillOilGadget.level - 1];

        let skillEff = mapaDeTodasSkillsComTier['efficiencyExtensionModule'];
        if (skillEff && skillEff.level > 0) oilDim += skillEff.oilCM[0].buff[skillEff.level - 1];

        let skillCpu = mapaDeTodasSkillsComTier['cropProcessorUnit'];
        if (skillCpu && skillCpu.level > 0) oilAum += skillCpu.oilCM[0].buff[skillCpu.level - 1];

        let skillRapidRig = mapaDeTodasSkillsComTier['rapidRig'];
        if (skillRapidRig && skillRapidRig.level > 0) oilAum += skillRapidRig.oilCM[0].buff[skillRapidRig.level - 1];

        // Aplica o cálculo final de gasto de Oil por Hora
        oilPorHora = (1 - oilDim) * (1 + oilAum);

        // liberar as crops com as skills (agora verificando pelo .level)
        if (mapaDeTodasSkillsComTier['cropExtensionModuleI']?.level > 0) {
            mapaDeTodasCropsEFrutas['Rhubarb'].permitido = true;
            mapaDeTodasCropsEFrutas['Zucchini'].permitido = true;
        } else {
            mapaDeTodasCropsEFrutas['Rhubarb'].permitido = false;
            mapaDeTodasCropsEFrutas['Zucchini'].permitido = false;
        }
        if (mapaDeTodasSkillsComTier['cropExtensionModuleII']?.level > 0) {
            mapaDeTodasCropsEFrutas['Carrot'].permitido = true;
            mapaDeTodasCropsEFrutas['Cabbage'].permitido = true;
        } else {
            mapaDeTodasCropsEFrutas['Carrot'].permitido = false;
            mapaDeTodasCropsEFrutas['Cabbage'].permitido = false;
        }
        if (mapaDeTodasSkillsComTier['cropExtensionModuleIII']?.level > 0) {
            mapaDeTodasCropsEFrutas['Yam'].permitido = true;
            mapaDeTodasCropsEFrutas['Broccoli'].permitido = true;
        } else {
            mapaDeTodasCropsEFrutas['Yam'].permitido = false;
            mapaDeTodasCropsEFrutas['Broccoli'].permitido = false;
        }

        // Estoque de crops!
        cropM.estoqueTotal = (cropM.estoque * buffs.estoqueMulti) + buffs.estoqueSoma;

        // Custo da semente e valor da crop em coins!
        cropM.custoPorSemente = cropM.custoSemente * buffs.multiCusto; 
        cropM.vendaPorCrop = cropM.valorDeVenda * buffs.multiVenda;

        // tempo para ficar pronta a crop!
        cropM.tempoFinal = cropM.tempo * buffs.tempoCM;

        // quantidade de crops recebida por semente!
        cropM.quantidade = Number(buffs.qtdMulti + buffs.qtdSoma + buffs.bountifulHarvest - buffs.qtdSubtrai);

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
    const budsFiltrados = filtrarBudsMaiorBuff();

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
            totems,
            shrines,
            fertilizantes.fruitfulBlend,
            fertilizantes.turbofruitMix,
            budsFiltrados
        ]);

        //rodadas que uma arvore de frutas dura
        frutiferasDuram = 4;
        if (mapaDeTodosCollectibles['immortalPear'].possui) {
            frutiferasDuram += mapaDeTodosCollectibles['immortalPear'].duracao[0].buff
        }
        
        // ====================================================================
        // Ferramentas usadas para cortar a arvore
        // ====================================================================
        fruta.axe = 1;

        let skillNoAxe = mapaDeTodasSkillsComTier['noAxeNoWorries'];
        if (skillNoAxe && skillNoAxe.possui) {
            // Pega o nível atual e subtrai 1 para achar o índice correto no array (ex: Nv 1 = índice 0)
            let indiceNivel = (skillNoAxe.level || skillNoAxe.nivelAtual) - 1;
            fruta.axe *= skillNoAxe.quantidade[0].buff[indiceNivel];
        }

        // Itens Legacy e Collectibles continuam com a estrutura antiga (não são arrays)
        if (mapaDeTodosCollectibles['foremanBeaver'].possui)   fruta.axe *= mapaDeTodosCollectibles['foremanBeaver'].quantidade[0].buff;
        if (mapaDeTodasSkillsLegacy['logger'].possui)          fruta.axe *= mapaDeTodasSkillsLegacy['logger'].quantidade[0].buff;

        // ====================================================================
        // Wood que vai ganhar ao quebrar as arvores
        // ====================================================================
        fruta.wood = 1;

        if (skillNoAxe && skillNoAxe.possui) {
            let indiceNivel = (skillNoAxe.level || skillNoAxe.nivelAtual) - 1;
            // Na nova estrutura, o debuff de madeira foi para quantidade2 com o sinal de "-"
            fruta.wood -= skillNoAxe.quantidade2[0].buff[indiceNivel];
        }

        let skillFruityWoody = mapaDeTodasSkillsComTier['fruityWoody'];
        if (skillFruityWoody && skillFruityWoody.possui) {
            let indiceNivel = (skillFruityWoody.level || skillFruityWoody.nivelAtual) - 1;
            // O Fruity Woody continua somando a madeira, mas agora lendo de dentro do array
            fruta.wood += skillFruityWoody.quantidade[0].buff[indiceNivel];
        }

        //quantidade de fruta por colheita
        fruta.quantidade = ((1 * buffs.qtdMulti) + buffs.qtdSoma + buffs.bountifulHarvest - buffs.qtdSubtrai) * frutiferasDuram;
        
        //tempo que demora pra crescer a fruta
        fruta.tempoFinal = (fruta.tempo * buffs.tempoMulti) * frutiferasDuram;

        //custo da semente e valor da fruta por coins
        fruta.custoPorSemente = fruta.custoSemente * buffs.multiCusto;
        fruta.vendaPorFruta = fruta.valorDeVenda * buffs.multiVenda;

        //estoque que possue!
        fruta.estoqueFinal = (fruta.estoque * buffs.estoqueMulti) + buffs.estoqueSoma;

        if (modoDeCalularCropsFruta === 'manual') {
            fruta.qtdSementeUsadas = fruta.seedsPlantadas;
            fruta.colheitaTotal = fruta.seedsPlantadas * fruta.quantidade;
            fruta.tempoTotal = fruta.tempoFinal * ((fruta.seedsPlantadas / plotsFrutas)); 
            fruta.totalAxe = fruta.axe * fruta.seedsPlantadas;
            fruta.totalWood = fruta.wood * fruta.seedsPlantadas;

        } else if (modoDeCalularCropsFruta === 'rodada') {
            fruta.qtdSementeUsadas = fruta.seedsPlantadas * plotsFrutas;
            fruta.colheitaTotal = (fruta.seedsPlantadas * fruta.quantidade) * plotsFrutas;
            fruta.tempoTotal = fruta.tempoFinal * fruta.seedsPlantadas;
            fruta.totalAxe = (fruta.axe * fruta.seedsPlantadas) * plotsFrutas;
            fruta.totalWood = (fruta.wood * fruta.seedsPlantadas) * plotsFrutas;

        } else if (modoDeCalularCropsFruta === 'estoque') {
            fruta.qtdSementeUsadas = fruta.seedsPlantadas * fruta.estoqueFinal;
            fruta.colheitaTotal = (fruta.seedsPlantadas * fruta.quantidade) * fruta.estoqueFinal;
            fruta.tempoTotal = fruta.tempoFinal * (fruta.qtdSementeUsadas / plotsFrutas);
            fruta.totalAxe = (fruta.axe * fruta.seedsPlantadas) * fruta.estoqueFinal;
            fruta.totalWood = (fruta.wood * fruta.seedsPlantadas) * fruta.estoqueFinal;
        };


    })
    tabelaDeCrops();
}

//======================================================================================================================================================================
function buffsAdicionadosGreenhouse() {
    const budsFiltrados = filtrarBudsMaiorBuff();

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
            shrines,
            fertilizantes.greenhouseGlow,
            fertilizantes.greenhouseGoodie,
            budsFiltrados
        ]);

        //Estoque de crops!
        gh.estoqueFinal = (gh.estoque * buffs.estoqueMulti) + buffs.estoqueSoma;

        //Custo da semente e valor da crop em coins!
        gh.custoPorSemente = gh.custoSemente * buffs.multiCusto;
        gh.vendaPorCrop = gh.valorDeVenda * buffs.multiVenda;

        //tempo para ficar pronta a crop!
        gh.tempoFinal = (gh.tempo * buffs.tempoMulti);

        //quantidade de crops recebida por semente!
        gh.quantidade = ((1 * buffs.qtdMulti) + buffs.qtdSoma + buffs.bountifulHarvest - buffs.qtdSubtrai) * buffs.qtdInsta;

        //Oil por crop
        gh.oilFinal = (gh.oil * buffs.oilMulti) - buffs.oilDiminuido;

        if (modoDeCalcularGreenhouse === 'manual') {
            gh.qtdSementeUsadas = (buffs.qtdSemente * gh.seedsPlantadas);
            gh.colheitaTotal = gh.quantidade * gh.seedsPlantadas;
            gh.tempoTotal = gh.tempoFinal * (gh.seedsPlantadas / plotsGH);
            gh.oilTotal = gh.oilFinal * gh.seedsPlantadas;

        } else if (modoDeCalcularGreenhouse === 'rodada') {
            gh.qtdSementeUsadas = (gh.seedsPlantadas * buffs.qtdSemente) * plotsGH;
            gh.colheitaTotal = gh.quantidade * (gh.seedsPlantadas * plotsGH);
            gh.tempoTotal = gh.tempoFinal * gh.seedsPlantadas;
            gh.oilTotal = gh.oilFinal * (gh.seedsPlantadas * plotsGH);
        
        } else if (modoDeCalcularGreenhouse === 'estoque') {
            gh.qtdSementeUsadas = gh.seedsPlantadas * gh.estoqueFinal;
            gh.colheitaTotal = (gh.seedsPlantadas * gh.quantidade) * gh.estoqueFinal;
            gh.tempoTotal = gh.tempoFinal * (gh.qtdSementeUsadas / plotsGH);
        }
        

    });
    tabelaDeCrops();

};

//======================================================================================================================================================================

function buffsAdicionadosMinerais() {
    const budsFiltrados = filtrarBudsMaiorBuff();

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
            skillsAging.tier1,
            skillsAging.tier2,
            skillsAging.tier3,
            collectibles.ferreiro,
            collectibles.trees,
            collectibles.minerals,
            collectibles.temporada,
            wearables.temporada,
            wearables.factions,
            wearables.minerals,
            shrines,
            totems,
            budsFiltrados,
            
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
            skillsAging.tier1,
            skillsAging.tier2,
            skillsAging.tier3,
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
            skillsAging.tier1,
            skillsAging.tier2,
            skillsAging.tier3,
            skillsFishing.tier1, // <-- Reel Deal está aqui
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

        // 👇 ADICIONE ESTA LINHA PARA O DESCONTO (xC) FUNCIONAR NAS VARAS 👇
        if (ferramenta.recursosNecessarios && ferramenta.recursosNecessarios.coinsOriginal !== undefined) {
            ferramenta.recursosNecessarios.coins = ferramenta.recursosNecessarios.coinsOriginal * buffs.multiCusto;
        }

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
    mapaDeMinerals['salt'].saltGastas = Number(0);
    mapaDeMinerals.coinsGastas = Number(0);
    mapaDeMinerals.leatherGastas = Number(0);
    mapaDeMinerals.woolGastas = Number(0);

    todasFerramentas.forEach(ferramenta => {

        // =========================================================================
        // LÓGICA ATUALIZADA DO OIL RIG (TROCA E QUANTIDADE CONFORME O NÍVEL DA SKILL)
        // =========================================================================
        let oilLaOuCouro = 'leather';
        let qtdMaterialSecundario = ferramenta.recursosNecessarios['leather'] ?? 0;

        let skillOilRig = mapaDeTodasSkillsComTier['oilRig'];
        
        // Verifica se possui a skill e se a ferramenta é a Oil Drill
        if (skillOilRig && skillOilRig.level > 0 && ferramenta.name === 'Oil Drill') {
            oilLaOuCouro = 'wool';
            let indiceNivel = skillOilRig.level - 1; // Ex: Nível 1 = índice 0 (20 lãs)
            
            // Puxa a quantidade correta de Lã da skill e substitui no cálculo
            qtdMaterialSecundario = skillOilRig.troca[0].buff[indiceNivel];
        } 
        // =========================================================================

        //olhar depois, criado para calcular direito o recurso quando a pessoa possui ferramentas de farm gratis
        let gastosComFerramentas = 1;
        if(ferramenta.qtdPrecisaPorNode === 0 || ferramenta.qtdUsada > 0 && ferramenta.quantidade == 0) gastosComFerramentas = 0;

        //feito para caso a pessoa marque a checkbox, você use o valor de mercado do recurso e não o valor medio fazendo tudo sozinho!
        mapaDeMinerals.wood.mediaDeCustoCoins = document.getElementById('wood-comprada').checked ? mapaDeMinerals.wood.valorDoMarket * flowerEmCoins : mapaDeMinerals.wood.mediaDeCustoCoins;
        mapaDeMinerals.stone.mediaDeCustoCoins = document.getElementById('stone-comprada').checked ? mapaDeMinerals.stone.valorDoMarket * flowerEmCoins : mapaDeMinerals.stone.mediaDeCustoCoins;
        mapaDeMinerals.iron.mediaDeCustoCoins = document.getElementById('iron-comprada').checked ? mapaDeMinerals.iron.valorDoMarket * flowerEmCoins : mapaDeMinerals.iron.mediaDeCustoCoins;
        mapaDeMinerals.gold.mediaDeCustoCoins = document.getElementById('gold-comprada').checked ? mapaDeMinerals.gold.valorDoMarket * flowerEmCoins : mapaDeMinerals.gold.mediaDeCustoCoins;
        mapaDeMinerals.crimstone.mediaDeCustoCoins = document.getElementById('crimstone-comprada').checked ? mapaDeMinerals.crimstone.valorDoMarket * flowerEmCoins : mapaDeMinerals.crimstone.mediaDeCustoCoins;


        //Calcular media de custo em coins da ferramenta para mostrar nos cards!
        ferramenta.custoEmCoins = (ferramenta.recursosNecessarios.coins + 
            ((ferramenta.recursosNecessarios['wood'] ?? 0) * (mapaDeMinerals['wood']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['stone'] ?? 0) * (mapaDeMinerals['stone']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['iron'] ?? 0) * (mapaDeMinerals['iron']?.mediaDeCustoCoins ?? 0)) + 
            ((ferramenta.recursosNecessarios['gold'] ?? 0) * (mapaDeMinerals['gold']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['crimstone'] ?? 0) * (mapaDeMinerals['crimstone']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['oil'] ?? 0) * (mapaDeMinerals['oil']?.mediaDeCustoCoins ?? 0)) +
            (qtdMaterialSecundario * (mapaDosValoresDoMarket[oilLaOuCouro]?.valor ?? 0) * flowerEmCoins)) * gastosComFerramentas;

            
        //feito para mostrar os gastos com as ferramentas nos cards!
        mapaDeMinerals['wood'].woodGastas += Number((ferramenta.recursosNecessarios['wood'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['stone'].stoneGastas += Number((ferramenta.recursosNecessarios['stone'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['iron'].ironGastas += Number((ferramenta.recursosNecessarios['iron'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['gold'].goldGastas += Number((ferramenta.recursosNecessarios['gold'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['crimstone'].crimstoneGastas += Number((ferramenta.recursosNecessarios['crimstone'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['oil'].oilGastas += Number((ferramenta.recursosNecessarios['oil'] ?? 0) * ferramenta.quantidade);

        //essas 3 abaixo foi criado dentro de minerais, apenas com intuito de somar quanto foi gasto nas ferramentas e descontar!
        mapaDeMinerals.coinsGastas += Number((ferramenta.recursosNecessarios['coins'] ?? 0) * ferramenta.quantidade);
        
        // Aqui também aplicamos a variável qtdMaterialSecundario para somar corretamente no painel final
        mapaDeMinerals.leatherGastas += oilLaOuCouro === 'leather' ? Number(qtdMaterialSecundario * ferramenta.quantidade) : 0;
        mapaDeMinerals.woolGastas += oilLaOuCouro === 'wool' ? Number(qtdMaterialSecundario * ferramenta.quantidade) : 0;

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
    
    //salvar o custo da pá de cavar para usar o valor em treasures.js
    localStorage.setItem('sandShovelCusto', JSON.stringify(mapaDeFerramentas['sandShovel'].custoEmCoins));

    tabelaMinerios();
};

document.getElementById('wood-comprada').addEventListener('change', mediaDeValorDasFerramentasEMinerais);
document.getElementById('stone-comprada').addEventListener('change', mediaDeValorDasFerramentasEMinerais);
document.getElementById('iron-comprada').addEventListener('change', mediaDeValorDasFerramentasEMinerais);
document.getElementById('gold-comprada').addEventListener('change', mediaDeValorDasFerramentasEMinerais);
document.getElementById('crimstone-comprada').addEventListener('change', mediaDeValorDasFerramentasEMinerais);

//======================================================================================================================================================================
function buffsAdicionadosAnimais() {
    const budsFiltrados = filtrarBudsMaiorBuff();

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
                fertilizantes.honeyTreatChickens,
                fertilizantes.honeyTreatCows,
                fertilizantes.honeyTreatSheeps,
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
    const budsFiltrados = filtrarBudsMaiorBuff();

    let contadorGalinhas = 0;
    let somadorDeOvos = 0;
    let somadorDePenas = 0;
    let somadorDeCustoDaComidaGalinhas = 0;

    //=============================================== GALINHAS =====================================================================


    animais.galinhas.forEach(galinha => {

        //contador, que aumenta a cada level que passa no for each, serve para usar como divisao e fazer a media de recurso que vai render do 0 ate o level desejado!
        contadorGalinhas += 1;


        // Calcula buffs para egg
        const buffsEgg = calcularBuff({ name: 'egg', levelAnterior: `egg_lvl${galinha.levelAnterior}` }, [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            fertilizantes.saltLickChickens,
            shrines,
            totems,
            budsFiltrados
        ]);
        
        // Calcula buffs para feather
        const buffsFeather = calcularBuff({ name: 'feather', levelAnterior: `feather_lvl${galinha.levelAnterior}` }, [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            fertilizantes.saltLickChickens,
            shrines,
            totems,
            budsFiltrados
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


        // Calcula buffs para milk
        const buffsMilk = calcularBuff({ name: 'milk', levelAnterior: `milk_lvl${vaca.levelAnterior}`}, [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            fertilizantes.saltLickCows,
            shrines,
            totems,
            budsFiltrados
        ]);
        
        // Calcula buffs para leather
        const buffsLeather = calcularBuff({ name: 'leather', levelAnterior: `leather_lvl${vaca.levelAnterior}` }, [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            fertilizantes.saltLickCows,
            shrines,
            totems,
            budsFiltrados
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


        // Calcula buffs para wool
        const buffsWool = calcularBuff({ name: 'wool', levelAnterior: `wool_lvl${ovelha.levelAnterior}`}, [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            fertilizantes.saltLickSheeps,
            shrines,
            totems,
            budsFiltrados
        ]);
        
        // Calcula buffs para merino wool
        const buffsMerino = calcularBuff({ name: 'merinoWool', levelAnterior: `merinoWool_lvl${ovelha.levelAnterior}` }, [
            skillsLegacy,
            skillsAnimais.tier1,
            skillsAnimais.tier2,
            skillsAnimais.tier3,
            collectibles.ferreiro,
            collectibles.animais,
            collectibles.temporada,
            wearables.temporada,
            wearables.animais,
            fertilizantes.saltLickSheeps,
            shrines,
            totems,
            budsFiltrados
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


//função responsavel por verificar se skills/NFTs/Temporários possuem algum bonus ativado por outra skill/NFT
function ativarBonusDasNftsESkills() {
    let mudouBuff;

    // Juntamos os Collectibles e os Temporários na mesma lista para o código verificar todos!
    const todosItensVerificaveis = [...todosCollectibles, ...todosTemporarios];

    do {
        mudouBuff = false;

        todosItensVerificaveis.forEach(item => {
            
            // Em vez de .find() que para no primeiro, usamos .forEach() para olhar TODAS as chaves (tempo, quantidade, etc)
            chavesPossiveis.forEach(chave => {
                if (Array.isArray(item[chave])) {
                    
                    // Fazemos um forEach no array interno para ler TODOS os buffs (ex: se der ovo E pena ao mesmo tempo)
                    item[chave].forEach(data => {
                        
                        // ===== BASES REAIS (imutáveis) =====
                        const buffBase = data.buffBase ?? data.buff;
                        const recursoAfetadoBase = data.recursoAfetadoBase ?? data.recursoAfetado;

                        let buffAplicado = buffBase;
                        let recursoAplicado = recursoAfetadoBase;

                        // ===== CONDICIONAL POR NFT =====
                        if (data.condicionalNft) {
                            const depende = mapaDeTodosCollectibles[data.condicionalNft.dependeDe];

                            if (depende && depende.possui) {
                                let novoBuff = data.condicionalNft.novoBuff;
                                
                                if (Array.isArray(novoBuff)) {
                                    let lvl = depende.level > 0 ? depende.level : 1;
                                    let index = Math.min(lvl - 1, novoBuff.length - 1);
                                    buffAplicado = novoBuff[index] ?? buffAplicado;
                                } else {
                                    buffAplicado = novoBuff ?? buffAplicado;
                                }
                                
                                recursoAplicado = data.condicionalNft.novoRecursoAfetado ?? recursoAplicado;
                            }
                        }

                        // ===== CONDICIONAL POR SKILL (1) =====
                        if (data.condicionalSkill) {
                            const skill = (typeof mapaDeTodasSkillsComTier !== 'undefined' && mapaDeTodasSkillsComTier[data.condicionalSkill.dependeDe]) || 
                                          (typeof mapaDeTodasSkillsLegacy !== 'undefined' && mapaDeTodasSkillsLegacy[data.condicionalSkill.dependeDe]);

                            if (skill && (skill.level > 0 || skill.possui)) {
                                let novoBuff = data.condicionalSkill.novoBuff;
                                
                                if (Array.isArray(novoBuff)) {
                                    let lvl = skill.level > 0 ? skill.level : 1;
                                    let index = Math.min(lvl - 1, novoBuff.length - 1);
                                    buffAplicado = novoBuff[index] ?? buffAplicado;
                                } else {
                                    buffAplicado = novoBuff ?? buffAplicado;
                                }
                                
                                recursoAplicado = data.condicionalSkill.novoRecursoAfetado ?? recursoAplicado;
                            }
                        }

                        // ===== CONDICIONAL POR SKILL (2) =====
                        if (data.condicionalSkill2) {
                            const skill2 = (typeof mapaDeTodasSkillsComTier !== 'undefined' && mapaDeTodasSkillsComTier[data.condicionalSkill2.dependeDe]) || 
                                           (typeof mapaDeTodasSkillsLegacy !== 'undefined' && mapaDeTodasSkillsLegacy[data.condicionalSkill2.dependeDe]);

                            if (skill2 && (skill2.level > 0 || skill2.possui)) {
                                let novoBuff2 = data.condicionalSkill2.novoBuff;

                                if (Array.isArray(novoBuff2)) {
                                    let lvl = skill2.level > 0 ? skill2.level : 1;
                                    let index = Math.min(lvl - 1, novoBuff2.length - 1);
                                    buffAplicado = novoBuff2[index] ?? buffAplicado;
                                } else {
                                    buffAplicado = novoBuff2 ?? buffAplicado;
                                }
                                
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
                }
            });
        });

    } while (mudouBuff);

    if (typeof chamadorDeBuffs === 'function') {
        chamadorDeBuffs();
    }
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