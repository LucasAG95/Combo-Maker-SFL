function calcularBuff(recurso, listasDeBuffs) {
    //variaveis aonde os valores vão ser acumulados
    
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
                        if (estoque.sinal === '+') estoqueSoma *= estoque.buff;                
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
            wearables.crops
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
    buffsAdicionadosCrops();
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
    
    buffsAdicionadosCrops();
};