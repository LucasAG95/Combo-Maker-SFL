function calcularBuff(recurso, listasDeBuffs) { 
    
    //variaveis que sao afetas pelos buffs de quantidade, qquantidade em Area e insta
    let qtdMulti = 1;       //sinal === 'x'
    let qtdSoma = 0;        //sinal === '+'
    let qtdSubtrai = 0;     //sinal === '-'
    let qtdArea = 0;        //sinal === '+A'
    let qtdInsta = 1;       //sinal === 'xI'

    //variaveis que sao afetadas pelos buffs de tempo
    let tempoMulti = 1;
    let tempoSubtrai = 0;

    //variaveis que são afetadas pelos buffs de coins
    let multiCusto = 1;
    let multiVenda = 1;

    //variaveis que são afetadas pelos buffs de estoque
    let estoqueMulti = 1;
    let estoqueSoma = 0;


    //esse 'lista' pode ser skills e NFTs, vai percorrer todos os buffs e adicionar o valor as variaveis criadas acima de acordo com regra
    function aplicarBuffs(lista) { 
        lista.forEach(nftOuSkill => {
            if (!nftOuSkill.possui) return;

            if (nftOuSkill.estacao && !nftOuSkill.estacao.includes(estacao)) return;
            
            //=============================================================================================================================================================
            //Adiciona os buffs que afetam a quantidade de recursos 
            if (nftOuSkill.quantidade) {                                            // O buff é de quantidade? Sim
                nftOuSkill.quantidade.forEach(qtd => {                              // Olhe dentro de quantidade e veja a lista de buffs dentro e oque afeta
                    if (qtd.recursoAfetado?.includes(recurso.name)) {               // Verifica se o nome do recurso esta dentro da lista de quantidade e recursosAfetados
                        if (qtd.sinal === 'x') qtdMulti *= qtd.buff;                //Se tiver, aplica o buff equivalente ao recurso
                        if (qtd.sinal === '+') qtdSoma += qtd.buff;
                        if (qtd.sinal === '-') qtdSubtrai += qtd.buff;
                        if (qtd.sinal === '+A') qtdArea += qtd.buff;
                        if (qtd.sinal === 'xI') qtdInsta *= qtd.buff;

                    }
                });
            };
            //=============================================================================================================================================================
            //Adiciona os buffs que afetam o tempo dos recursos 
            if (nftOuSkill.tempo) {                                            
                nftOuSkill.tempo.forEach(tempo => {                              
                    if (tempo.recursoAfetado?.includes(recurso.name)) {               
                        if (tempo.sinal === 'x') tempoMulti *= tempo.buff;               
                        if (tempo.sinal === '-') tempoSubtrai += tempo.buff;
                    }
                });
            };
            //=============================================================================================================================================================
            //Adiciona os buffs que afetam o custo e venda por coins 
            if (nftOuSkill.coins) {                                            
                nftOuSkill.coins.forEach(coin => {                              
                    if (coin.recursoAfetado?.includes(recurso.name)) {               
                        if (coin.sinal === 'xV') multiVenda *= coin.buff;
                        if (coin.sinal === 'xC') multiCusto *= coin.buff;                
                    }
                });
            };
            //=============================================================================================================================================================
            //Adiciona os buffs que afetam o estoque
            if (nftOuSkill.estoque) {                                            
                nftOuSkill.estoque.forEach(estoque => {                              
                    if (estoque.recursoAfetado?.includes(recurso.name)) {               
                        if (estoque.sinal === 'x') estoqueMulti *= estoque.buff;
                        if (estoque.sinal === '+') estoqueSoma += estoque.buff;                
                    }
                });
            };
            //=============================================================================================================================================================
            
        });
        
    };
    //percorre todas as listas enviadas ate eles acabarem (foi oque entendi)
    listasDeBuffs.forEach(lista => aplicarBuffs(lista));

    // devolve um objeto com todos os valores calculados
    return {
        qtdMulti,
        qtdSoma,
        qtdSubtrai,
        qtdInsta,
        qtdArea,

        tempoMulti,
        tempoSubtrai,

        multiCusto,
        multiVenda,

        estoqueMulti,
        estoqueSoma
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
            wearables.factions,
            wearables.crops,
            shrines,
            totems,
            fertilizantes.rapidRoot,
            fertilizantes.sproutMix
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
            wearables.factions,
            wearables.minerals,
            shrines,
            totems
        ]);
        
        ferramenta.qtdPrecisaPorNode = (1 * buffs.qtdMulti);
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
                let linguagemDoAlerta = idioma === 'portugues' ? 'Para fim de calculos melhores, você não pode colocar mais que 24 horas!' : 'For better calculation results, you can\'t set more than 24 hours!'
                alert(linguagemDoAlerta);
                return;
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
            wearables.factions,
            wearables.minerals,
            shrines,
            totems
        ]);

        ferramenta.quantidade = Number(ferramenta.qtdUsada);
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

        //Calcular media de custo em coins da ferramenta!
        ferramenta.custoEmCoins = ferramenta.recursosNecessarios['coins'] + 
            ((ferramenta.recursosNecessarios['wood'] ?? 0) * (mapaDeMinerals['wood']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['stone'] ?? 0) * (mapaDeMinerals['stone']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['iron'] ?? 0) * (mapaDeMinerals['iron']?.mediaDeCustoCoins ?? 0)) + 
            ((ferramenta.recursosNecessarios['gold'] ?? 0) * (mapaDeMinerals['gold']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['crimstone'] ?? 0) * (mapaDeMinerals['crimstone']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios['oil'] ?? 0) * (mapaDeMinerals['oil']?.mediaDeCustoCoins ?? 0)) +
            ((ferramenta.recursosNecessarios[oilLaOuCouro] ?? 0) * (mapaDosValoresDoMarket[oilLaOuCouro]?.valor ?? 0) * flowerEmCoins);

            
        //feito para mostrar os gastos com as ferramentas
        mapaDeMinerals['wood'].woodGastas += Number((ferramenta.recursosNecessarios['wood'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['stone'].stoneGastas += Number((ferramenta.recursosNecessarios['stone'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['iron'].ironGastas += Number((ferramenta.recursosNecessarios['iron'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['gold'].goldGastas += Number((ferramenta.recursosNecessarios['gold'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['crimstone'].crimstoneGastas += Number((ferramenta.recursosNecessarios['crimstone'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals['oil'].oilGastas += Number((ferramenta.recursosNecessarios['oil'] ?? 0) * ferramenta.quantidade);

        //essas 3 abaixo foi criado dentro de minerais, apenas com intuito de somar quanto foi gasto nas ferramentas!
        mapaDeMinerals.coinsGastas += Number((ferramenta.recursosNecessarios['coins'] ?? 0) * ferramenta.quantidade);
        mapaDeMinerals.leatherGastas += oilLaOuCouro === 'leather' ? Number((ferramenta.recursosNecessarios['leather'] ?? 0) * ferramenta.quantidade) : 0;
        mapaDeMinerals.woolGastas += oilLaOuCouro === 'wool' ? Number((ferramenta.recursosNecessarios['wool'] ?? 0) * ferramenta.quantidade) : 0;

        //para calcular o custo médio que sai cada mineral
        const mineral = mapaDeMinerals[ferramenta.recursoObtido];
        if (!mineral) {
            console.warn("Recurso não encontrado:", ferramenta.recursoObtido);
            return;
        }

        //calcular média em coins que cada mineral sai!
        mineral.mediaDeCustoCoins = (ferramenta.custoEmCoins * (ferramenta.qtdPrecisaPorNode || 1)) / (mineral.mediaPorNode || 1);
        mineral.mediaDeCustoFlower = mineral.mediaDeCustoCoins / flowerEmCoins;
    });
    tabelaMinerios();
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

            // Base real (não pode depender de data.buff)
            const buffBase = data.buffBase ?? data.buff;
            let buffAplicado = buffBase;

            // Condicional por NFT
            if (data.condicionalNft) {
                const depende = mapaDeTodosCollectibles[data.condicionalNft.dependeDe];
                if (depende?.possui) buffAplicado = data.condicionalNft.novoBuff;
            }

            // Condicional por Skill
            if (data.condicionalSkill) {
                const skill = mapaDeTodasSkillsComTier[data.condicionalSkill.dependeDe];
                if (skill?.possui) buffAplicado = data.condicionalSkill.novoBuff;
            }

            // Atualiza somente se mudou
            if (data.buff !== buffAplicado) {
                data.buff = buffAplicado;
                mudouBuff = true;
            }
        });

    } while (mudouBuff);
    chamadorDeBuffs();
};

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
}