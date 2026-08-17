// Descobre de qual árvore e tier a skill faz parte (usado para bloqueios de níveis)
function getSkillTreeAndTier(skillIdName) {
    const arvores = {
        'crops': typeof skillsCrops !== 'undefined' ? skillsCrops : null,
        'fruit': typeof skillsFruits !== 'undefined' ? skillsFruits : null,
        'greenhouse': typeof skillsGreenhouse !== 'undefined' ? skillsGreenhouse : null,
        'tree': typeof skillsTrees !== 'undefined' ? skillsTrees : null,
        'mineral': typeof skillsMinerals !== 'undefined' ? skillsMinerals : null,
        'animal': typeof skillsAnimais !== 'undefined' ? skillsAnimais : null,
        'machinery': typeof skillsMachinery !== 'undefined' ? skillsMachinery : null,
        'fishing': typeof skillsFishing !== 'undefined' ? skillsFishing : null,
        'cooking': typeof skillsCooking !== 'undefined' ? skillsCooking : null,
        'compost': typeof skillsCompost !== 'undefined' ? skillsCompost : null,
        'beesFlowers': typeof skillsBeesFlowers !== 'undefined' ? skillsBeesFlowers : null,
        'aging': typeof skillsAging !== 'undefined' ? skillsAging : null
    };

    for (let treeName in arvores) {
        let tree = arvores[treeName];
        if (!tree) continue;
        if (tree.tier1 && tree.tier1.find(s => s.idName === skillIdName)) return { tree: treeName, tier: 1 };
        if (tree.tier2 && tree.tier2.find(s => s.idName === skillIdName)) return { tree: treeName, tier: 2 };
        if (tree.tier3 && tree.tier3.find(s => s.idName === skillIdName)) return { tree: treeName, tier: 3 };
    }
    return { tree: null, tier: 0 };
}

function atualizarVisualSkill(skillId, level, maxLevel) {
    const checkbox = document.getElementById(skillId);
    if (!checkbox) return;
    
    const wrapper = checkbox.closest('.skill-wrapper');
    if (!wrapper) return;
    
    level = parseInt(level, 10) || 0;
    maxLevel = parseInt(maxLevel, 10) || 1;

    wrapper.dataset.level = level;
    checkbox.checked = level > 0;
    
    const spriteBox = wrapper.querySelector('.sprite-box');
    if (spriteBox) {
        // Limpamos todas as bordas primeiro
        spriteBox.classList.remove('borda-bronze', 'borda-prata', 'borda-gold', 'borda-simples');
        if (level > 0) {
            if (maxLevel > 1) {
                if (level === 1) spriteBox.classList.add('borda-bronze');
                if (level === 2) spriteBox.classList.add('borda-prata');
                if (level >= 3) spriteBox.classList.add('borda-gold');
            } else {
                // Skills de clique único ganham a borda simples
                spriteBox.classList.add('borda-simples');
            }
        }
    }
}

function configurarCheckbox() {
    skillsLegacy.forEach(skill => {
        let checkbox = document.getElementById(skill.idName);

        if(checkbox) {
            let currentLevel = skill.level || (checkbox.checked ? 1 : 0);
            skill.level = currentLevel;
            skill.possui = currentLevel;

            checkbox.addEventListener('change', function() {
                const wrapper = checkbox.closest('.skill-wrapper');
                if (wrapper && wrapper.dataset.level !== undefined) {
                    skill.level = parseInt(wrapper.dataset.level);
                    skill.possui = skill.level;
                } else {
                    skill.possui = checkbox.checked ? 1 : 0;
                    skill.level = skill.possui;
                }
                chamadorDeBuffs();
                ativarBonusDasNftsESkills();
            });
        };
    });

    todasSkillsComTier.forEach(skill => {
        let checkbox = document.getElementById(skill.idName);

        if(checkbox) {
            let currentLevel = skill.level || (checkbox.checked ? 1 : 0);
            skill.level = currentLevel;
            skill.possui = currentLevel;

            checkbox.addEventListener('change', function() {
                const wrapper = checkbox.closest('.skill-wrapper');
                if (wrapper && wrapper.dataset.level !== undefined) {
                    skill.level = parseInt(wrapper.dataset.level);
                    skill.possui = skill.level;
                } else {
                    skill.possui = checkbox.checked ? 1 : 0;
                    skill.level = skill.possui;
                }
                chamadorDeBuffs();
                chamadorDeDesbloquearSkills();
                ativarBonusDasNftsESkills();
                pontosGastosEmSkills();
            });
        };
    });

    todosCollectibles.forEach(collectibles => {
        let checkbox = document.getElementById(collectibles.idName);

        if(checkbox) {
            collectibles.possui = checkbox.checked;

            checkbox.addEventListener('change', function() {
                collectibles.possui = checkbox.checked;
                chamadorDeBuffs();
                ativarBonusDasNftsESkills();
                nftsDeTierQuePossuemBuffDoAntecessor();
                valorTotalEmNfts();
            });
        };
    });

    todosWearables.forEach(wearables => {
        let checkbox = document.getElementById(wearables.idName);

        if(checkbox) {
            wearables.possui = checkbox.checked;

            checkbox.addEventListener('change', function() {
                wearables.possui = checkbox.checked;
                chamadorDeBuffs();
                ativarBonusDasNftsESkills();
                valorTotalEmNfts();
            });
        };
    });

    todosBuds.forEach(bud => {
        bud.aura = 1;

        const checkbox = document.getElementById(bud.idName);
        if (!checkbox) return;

        bud.possui = checkbox.checked;

        checkbox.addEventListener('change', function () {
            bud.possui = checkbox.checked;

            const budWrapper = checkbox.closest('.bud-wrapper');
            const auraPanel = budWrapper?.querySelector('.aura-panel');

            if (bud.possui) {
                auraPanel.style.display = 'flex';
            } else {
                auraPanel.style.display = 'none';
                bud.aura = 1;
                auraPanel.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
                AURAS.forEach(a => budWrapper.classList.remove(`aura-bg-${a.id}`));
            }

            chamadorDeBuffs();
            ativarBonusDasNftsESkills();
        });

        AURAS.forEach(aura => {
            const auraCheckbox = document.getElementById(`aura-${bud.idName}-${aura.id}`);
            if (!auraCheckbox) return;

            auraCheckbox.addEventListener('change', function () {
                const auraPanel = auraCheckbox.closest('.aura-panel');
                const budWrapper = auraCheckbox.closest('.bud-wrapper');

                if (auraCheckbox.checked) {
                    auraPanel.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                        if (cb !== auraCheckbox) cb.checked = false;
                    });
                    bud.aura = aura.mult;
                    AURAS.forEach(a => budWrapper.classList.remove(`aura-bg-${a.id}`));
                    budWrapper.classList.add(`aura-bg-${aura.id}`);
                } else {
                    bud.aura = 1;
                    AURAS.forEach(a => budWrapper.classList.remove(`aura-bg-${a.id}`));
                }

                auraPanel.style.display = 'none';
                chamadorDeBuffs();
                ativarBonusDasNftsESkills();
            });
        });
    });

    todosTemporarios.forEach(temporario => {
        let checkbox = document.getElementById(temporario.idName);

        if(checkbox) {
            temporario.possui = checkbox.checked;

            checkbox.addEventListener('change', function() {
                temporario.possui = checkbox.checked;
                chamadorDeBuffs();
                ativarBonusDasNftsESkills();
                ilhaPrestigioAtual();
            });
        };
    });
}

//==============================================================================================================================================

const categoriaSprite = {
    './skills':        'skills',
    './collectibles':  'collectibles',
    './wearables':     'wearables',
    './shrines':       'temporarios',
    './fertilizantes': 'fertilizantes',
};

function renderSkills(lista, containerId, pastaImagens) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const categoria = categoriaSprite[pastaImagens] || 'skills';

    lista.forEach(skill => {
        const wrapper = document.createElement('div');
        wrapper.className = 'skill-wrapper';
        
        const currentLevel = skill.level || 0;
        wrapper.dataset.level = currentLevel;

        const label = document.createElement('label');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = skill.idName;
        checkbox.style.display = 'none'; 
        checkbox.checked = currentLevel > 0;

        const spriteBox = document.createElement('div');
        spriteBox.className = 'sprite-box';
        
        let maxLevel = parseInt(skill.maxLevel || 1, 10);
        if (currentLevel > 0) {
            if (maxLevel > 1) {
                if (currentLevel === 1) spriteBox.classList.add('borda-bronze');
                if (currentLevel === 2) spriteBox.classList.add('borda-prata');
                if (currentLevel >= 3) spriteBox.classList.add('borda-gold');
            } else {
                spriteBox.classList.add('borda-simples');
            }
        }

        spriteBox.innerHTML = sprite(skill.idName, categoria);

        label.appendChild(checkbox);
        label.appendChild(spriteBox);

        // Lógica de múltiplos cliques no wrapper
        wrapper.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (checkbox.disabled) return;

            let lvl = parseInt(wrapper.dataset.level || "0");
            let max = skill.maxLevel || 1; 

            let nextLvl = lvl < max ? lvl + 1 : 0;

            // ==========================================
            // BLOQUEIO INTELIGENTE DE NÍVEIS (Regras do Jogo)
            // ==========================================
            let infoSkill = getSkillTreeAndTier(skill.idName);
            
            // Regra 1: Skill do Tier 1 não pode ir pro Nível 2 se o Tier 2 da árvore estiver bloqueado
            if (infoSkill.tier === 1 && nextLvl === 2) {
                let avisoTier2 = document.getElementById(`tab-skill-${infoSkill.tree}-tier2`);
                if (avisoTier2 && avisoTier2.innerHTML.trim() !== "") {
                    nextLvl = 0; // Volta para o 0 (desmarcando a skill)
                }
            }

            // Regra 2: Skill do Tier 2 não pode ir pro Nível 2 se o Tier 3 da árvore estiver bloqueado
            if (infoSkill.tier === 2 && nextLvl === 2) {
                let avisoTier3 = document.getElementById(`tab-skill-${infoSkill.tree}-tier3`);
                if (avisoTier3 && avisoTier3.innerHTML.trim() !== "") {
                    nextLvl = 0; // Volta para o 0 (desmarcando a skill)
                }
            }
            // ==========================================

            atualizarVisualSkill(skill.idName, nextLvl, max);
            skill.level = nextLvl; 
            skill.possui = nextLvl;
            
            // Disparando o change avisando ao Save Manager que foi atualizado.
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));

            // ATUALIZA O CARD IMEDIATAMENTE AO CLICAR
            mostrarInfoCard(skill, skill.idName, categoria);
        });

        wrapper.addEventListener("mouseenter", () => {
            mostrarInfoCard(skill, skill.idName, categoria);
        });

        wrapper.addEventListener("mouseleave", () => {
            esconderInfoCard();
        });

        wrapper.appendChild(label);
        container.appendChild(wrapper);
    });
}

function renderNFTs(lista, containerId, pastaImagens) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const categoria = categoriaSprite[pastaImagens] || 'collectibles';

    lista.forEach(nft => {
        const wrapper = document.createElement('div');
        wrapper.className = 'nft-wrapper';

        const label = document.createElement('label');
        label.setAttribute('for', nft.idName);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = nft.idName;

        label.appendChild(checkbox);
        label.insertAdjacentHTML('beforeend', `<div class="sprite-box">${sprite(nft.idName, categoria)}</div>`);

        wrapper.addEventListener("mouseenter", () => {
            mostrarInfoCard(nft, nft.idName, categoria);
        });

        wrapper.addEventListener("mouseleave", () => {
            esconderInfoCard();
        });

        wrapper.appendChild(label);
        container.appendChild(wrapper);
    });
}

function renderBuds(lista, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    lista.forEach(bud => {
        const wrapper = document.createElement('div');
        wrapper.className = 'nft-wrapper bud-wrapper';

        const label = document.createElement('label');
        label.setAttribute('for', bud.idName);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = bud.idName;

        label.appendChild(checkbox);
        label.insertAdjacentHTML('beforeend', `<div class="sprite-box">${sprite(bud.idName, 'buds')}</div>`);

        wrapper.addEventListener("mouseenter", () => mostrarInfoCard(bud, bud.idName, 'buds'));
        wrapper.addEventListener("mouseleave", () => esconderInfoCard());

        wrapper.appendChild(label);

        const auraPanel = document.createElement('div');
        auraPanel.className = 'aura-panel';
        auraPanel.style.display = 'none';

        AURAS.forEach(aura => {
            const auraWrapper = document.createElement('div');
            auraWrapper.className = 'nft-wrapper aura-wrapper';

            const auraLabel = document.createElement('label');
            auraLabel.setAttribute('for', `aura-${bud.idName}-${aura.id}`);

            const auraCheckbox = document.createElement('input');
            auraCheckbox.type = 'checkbox';
            auraCheckbox.id = `aura-${bud.idName}-${aura.id}`;
            auraCheckbox.value = aura.id;

            auraLabel.appendChild(auraCheckbox);
            auraLabel.insertAdjacentHTML('beforeend', `<div class="sprite-box">${sprite(aura.id, 'auras')}</div>`);

            auraWrapper.appendChild(auraLabel);
            auraPanel.appendChild(auraWrapper);
        });

        wrapper.appendChild(auraPanel);
        container.appendChild(wrapper);
    });
}

window.onload = function () {
    // Skills Legacy
    renderSkills(skillsLegacy, 'skills-legacy-container', './skills');
    // Skills Crops
    renderSkills(skillsCrops.tier1, 'skills-crop-tier1-container', './skills');
    renderSkills(skillsCrops.tier2, 'skills-crop-tier2-container', './skills');
    renderSkills(skillsCrops.tier3, 'skills-crop-tier3-container', './skills');
    //Skills Fruits
    renderSkills(skillsFruits.tier1, 'skills-fruit-tier1-container', './skills');
    renderSkills(skillsFruits.tier2, 'skills-fruit-tier2-container', './skills');
    renderSkills(skillsFruits.tier3, 'skills-fruit-tier3-container', './skills');
    //Skills Greenhouse
    renderSkills(skillsGreenhouse.tier1, 'skills-greenhouse-tier1-container', './skills');
    renderSkills(skillsGreenhouse.tier2, 'skills-greenhouse-tier2-container', './skills');
    renderSkills(skillsGreenhouse.tier3, 'skills-greenhouse-tier3-container', './skills');
    //Skills Trees
    renderSkills(skillsTrees.tier1, 'skills-tree-tier1-container', './skills');
    renderSkills(skillsTrees.tier2, 'skills-tree-tier2-container', './skills');
    renderSkills(skillsTrees.tier3, 'skills-tree-tier3-container', './skills');
    //Skills Minerals
    renderSkills(skillsMinerals.tier1, 'skills-mineral-tier1-container', './skills');
    renderSkills(skillsMinerals.tier2, 'skills-mineral-tier2-container', './skills');
    renderSkills(skillsMinerals.tier3, 'skills-mineral-tier3-container', './skills');
    //Skills Animals
    renderSkills(skillsAnimais.tier1, 'skills-animal-tier1-container', './skills');
    renderSkills(skillsAnimais.tier2, 'skills-animal-tier2-container', './skills');
    renderSkills(skillsAnimais.tier3, 'skills-animal-tier3-container', './skills');
    //Skills Machinery
    renderSkills(skillsMachinery.tier1, 'skills-machinery-tier1-container', './skills');
    renderSkills(skillsMachinery.tier2, 'skills-machinery-tier2-container', './skills');
    renderSkills(skillsMachinery.tier3, 'skills-machinery-tier3-container', './skills');
    //Skills Fishing
    renderSkills(skillsFishing.tier1, 'skills-fishing-tier1-container', './skills');
    renderSkills(skillsFishing.tier2, 'skills-fishing-tier2-container', './skills');
    renderSkills(skillsFishing.tier3, 'skills-fishing-tier3-container', './skills');
    //Skills Cooking
    renderSkills(skillsCooking.tier1, 'skills-cooking-tier1-container', './skills');
    renderSkills(skillsCooking.tier2, 'skills-cooking-tier2-container', './skills');
    renderSkills(skillsCooking.tier3, 'skills-cooking-tier3-container', './skills');
    //Skills Compost
    renderSkills(skillsCompost.tier1, 'skills-compost-tier1-container', './skills');
    renderSkills(skillsCompost.tier2, 'skills-compost-tier2-container', './skills');
    renderSkills(skillsCompost.tier3, 'skills-compost-tier3-container', './skills');
    //Skills Bees & Flowers
    renderSkills(skillsBeesFlowers.tier1, 'skills-beesFlowers-tier1-container', './skills');
    renderSkills(skillsBeesFlowers.tier2, 'skills-beesFlowers-tier2-container', './skills');
    renderSkills(skillsBeesFlowers.tier3, 'skills-beesFlowers-tier3-container', './skills');
    //Aging
    renderSkills(skillsAging.tier1, 'skills-aging-tier1-container', './skills');
    renderSkills(skillsAging.tier2, 'skills-aging-tier2-container', './skills');
    renderSkills(skillsAging.tier3, 'skills-aging-tier3-container', './skills');

    // Collectibles
    renderNFTs(collectibles.ferreiro, 'collectibles-container-ferreiro', './collectibles');
    renderNFTs(collectibles.crops, 'collectibles-container-crops', './collectibles');
    renderNFTs(collectibles.cropMachine, 'collectibles-container-crops', './collectibles');
    renderNFTs(collectibles.trees, 'collectibles-container-trees-minerals', './collectibles');
    renderNFTs(collectibles.minerals, 'collectibles-container-trees-minerals', './collectibles');
    renderNFTs(collectibles.fruits, 'collectibles-container-fruits', './collectibles' );
    renderNFTs(collectibles.greenhouse, 'collectibles-container-greenhouse', './collectibles');
    renderNFTs(collectibles.animais, 'collectibles-container-animais', './collectibles');
    renderNFTs(collectibles.temporada, 'collectibles-container-novas', './collectibles');

    // Wearables
    renderNFTs(wearables.factions, 'wearables-container-factions', './wearables');
    renderNFTs(wearables.crops, 'wearables-container-crops', './wearables');
    renderNFTs(wearables.fruits, 'wearables-container-fruits', './wearables');
    renderNFTs(wearables.greenhouse, 'wearables-container-greenhouse', './wearables');
    renderNFTs(wearables.minerals, 'wearables-container-minerals', './wearables');
    renderNFTs(wearables.terouso, 'wearables-container-minerals', './wearables');
    renderNFTs(wearables.pesca, 'wearables-container-minerals', './wearables');
    renderNFTs(wearables.animais, 'wearables-container-animais', './wearables');
    renderNFTs(wearables.temporada, 'wearables-container-novas', './wearables');
    
    //Buds
    renderBuds(buds.plaza, 'buds-plaza-container', './buds');
    renderBuds(buds.woodlands, 'buds-woodlands-container', './buds');
    renderBuds(buds.cave, 'buds-cave-container', './buds');
    renderBuds(buds.sea, 'buds-sea-container', './buds');
    renderBuds(buds.castle, 'buds-castle-container', './buds');
    renderBuds(buds.port, 'buds-port-container', './buds');
    renderBuds(buds.retreat, 'buds-retreat-container', './buds');
    renderBuds(buds.saphiro, 'buds-saphiro-container', './buds');
    renderBuds(buds.snow, 'buds-snow-container', './buds');
    renderBuds(buds.beach, 'buds-beach-container', './buds');

    //Shrines, Totems e buffs temporarios
    renderNFTs(shrines,                           'shrines-container', './shrines');
    renderNFTs(totems,                            'totems-container', './shrines');
    renderNFTs(fertilizantes.sproutMix,           'sproutMix-container', './fertilizantes');
    renderNFTs(fertilizantes.rapidRoot,           'rapidRoot-container', './fertilizantes');
    renderNFTs(fertilizantes.fruitfulBlend,       'fruitfulBlend-container', './fertilizantes');
    renderNFTs(fertilizantes.sproutrootSurprise,  'sproutrootSurprise-container', './fertilizantes');
    renderNFTs(fertilizantes.turbofruitMix,       'turbofruitMix-container', './fertilizantes');
    renderNFTs(fertilizantes.greenhouseGlow,      'greenhouseGlow-container', './fertilizantes');
    renderNFTs(fertilizantes.greenhouseGoodie,    'greenhouseGoodie-container', './fertilizantes');
    renderNFTs(fertilizantes.honeyTreatChickens,  'honeyTreatChickens-container', './fertilizantes');
    renderNFTs(fertilizantes.honeyTreatCows,      'honeyTreatCows-container', './fertilizantes');
    renderNFTs(fertilizantes.honeyTreatSheeps,    'honeyTreatSheeps-container', './fertilizantes');
    renderNFTs(fertilizantes.saltLickChickens,    'saltLickChickens-container', './fertilizantes');
    renderNFTs(fertilizantes.saltLickCows,        'saltLickCows-container', './fertilizantes');
    renderNFTs(fertilizantes.saltLickSheeps,      'saltLickSheeps-container', './fertilizantes');

    // 2. Prepara Eventos Básicos
    valoresDasGems();
    selecionandoIdioma();
    mudarIdioma();
    configurarCheckbox();
    
    // 3. Roda os motores pesados
    chamadorDeBuffs();
    chamadorDeDesbloquearSkills();
    buscarTodasAPIs();
    nftsDeTierQuePossuemBuffDoAntecessor();
    cropToCoins();
};

function mostrarInfoCard(item, idName, categoria) {
    const card = document.getElementById("info-card");

    let textoUltimaVenda = idioma === 'ingles' ? 'Last Sale:' : 'Ultima Venda:';
    let textoPrecoAtual = idioma === 'ingles' ? 'Current Price:' : 'Preço Atual:';

    let ultimavenda;
    if (!item.preco || item.preco === 0 || item.preco === '') {
        ultimavenda = '';
    } else {
        ultimavenda = `${textoUltimaVenda} ${imgFlower} ${item.preco} ~
            ${imgUsdc} ${Number(item.preco * precoDoFlower).toFixed(2)}`;
    }
    
    let precoAtual;
    if (!item.precoAtual || item.precoAtual === 0 || item.precoAtual === '') {
        precoAtual = '';
    } else {
        precoAtual = `${textoPrecoAtual} ${imgFlower} ${item.precoAtual} ~ 
            ${imgUsdc} ${Number(item.precoAtual * precoDoFlower).toFixed(2)}`;
    }

    const coresNivel = {
        1: '#3ca527', // Verde
        2: '#ffd700', // Dourado
        3: '#00c3ff'  // Azul
    };

    // ==========================================
    // ÍCONES DO CSS SPRITE
    // ==========================================
    const iconeShard = `<span class="sprite-icones bg-shard" style="margin-right: 4px;"></span>`;
    const iconeCadeado = `<span class="sprite-icones bg-cadeado" style="margin-right: 4px;"></span>`;

    // ==========================================
    // BADGES ATUALIZADOS: Formato 0 / Total
    // ==========================================
    const getSpBadge = (total) => {
        if (!total || total <= 0) return '';
        return `<span style="display: inline-flex; align-items: center; justify-content: center; background-color: #1c1812; border: 1px solid #d0a25a; color: #ffe2aa; padding: 2px 6px; border-radius: 6px; font-size: 11px; margin-right: 6px; box-shadow: inset 1px 1px 3px rgba(0,0,0,0.5);">0 / ${total} SP</span>`;
    };

    const getShardBadge = (total, nivel) => {
        if (nivel === 1) return ''; // Regra: Nível 1 das skills NÃO possui Shard
        if (!total || total <= 0) return '';
        return `<span style="display: inline-flex; align-items: center; justify-content: center; background-color: #0b1a2e; border: 1px solid #4a90e2; color: #a4cfff; padding: 2px 6px; border-radius: 6px; font-size: 11px; margin-right: 6px; box-shadow: inset 1px 1px 3px rgba(0,0,0,0.5);">${iconeShard}0 / ${total}</span>`;
    };

    // ==========================================
    // LÓGICA DO CADEADO DE BLOQUEIO NO CARD
    // ==========================================
    let infoSkill = typeof getSkillTreeAndTier === 'function' ? getSkillTreeAndTier(idName) : { tree: null, tier: 0 };
    let tier2Locked = false;
    let tier3Locked = false;
    
    if (infoSkill && infoSkill.tree) {
        let avisoT2 = document.getElementById(`tab-skill-${infoSkill.tree}-tier2`);
        let avisoT3 = document.getElementById(`tab-skill-${infoSkill.tree}-tier3`);
        if (avisoT2 && avisoT2.innerHTML.trim() !== "") tier2Locked = true;
        if (avisoT3 && avisoT3.innerHTML.trim() !== "") tier3Locked = true;
    }

    const getCadeado = (nivelDoCard) => {
        let cadeadoHTML = "";
        
        // NOVA REGRA: Tier 1, Nível 3 requer Tier 3
        if (infoSkill.tier === 1 && nivelDoCard === 3 && tier3Locked) {
            let txt = idioma === 'ingles' ? `${iconeCadeado}Requires Tier 3` : `${iconeCadeado}Requer Tier 3`;
            cadeadoHTML = `<span style="color: #ff4444; font-size: 11px; margin-left: 8px; font-weight: normal; display: inline-flex; align-items: center; justify-content: center;">${txt}</span>`;
        } 
        // REGRA: Tier 1, Nível 2 requer Tier 2
        else if (infoSkill.tier === 1 && nivelDoCard === 2 && tier2Locked) {
            let txt = idioma === 'ingles' ? `${iconeCadeado}Requires Tier 2` : `${iconeCadeado}Requer Tier 2`;
            cadeadoHTML = `<span style="color: #ff4444; font-size: 11px; margin-left: 8px; font-weight: normal; display: inline-flex; align-items: center; justify-content: center;">${txt}</span>`;
        }
        // REGRA: Tier 2, Níveis 2 e 3 requerem Tier 3
        else if (infoSkill.tier === 2 && nivelDoCard >= 2 && tier3Locked) {
            let txt = idioma === 'ingles' ? `${iconeCadeado}Requires Tier 3` : `${iconeCadeado}Requer Tier 3`;
            cadeadoHTML = `<span style="color: #ff4444; font-size: 11px; margin-left: 8px; font-weight: normal; display: inline-flex; align-items: center; justify-content: center;">${txt}</span>`;
        }
        
        return cadeadoHTML;
    };
    // ==========================================

    let textoDescricao = "";

    if (item.niveis && item.maxLevel > 1) {
        let lvl = parseInt(item.level || 0, 10); 

        if (lvl === 0) {
            let linhas = [];
            item.niveis.forEach(n => {
                let lvlLabel = idioma === 'ingles' ? `Level ${n.nivel}` : `Nível ${n.nivel}`;
                let cadeado = getCadeado(n.nivel);
                let cor = coresNivel[n.nivel] || '#ffa726';
                
                let totalPts = parseInt(n.pontosNecessarios, 10) || 0;
                let totalShards = parseInt(n.shards, 10) || 0;
                
                linhas.push(`<div style="margin-bottom: 10px; display: flex; flex-direction: column; align-items: center; text-align: center;"><span style="color: ${cor}; font-weight: bold; font-size: 15px; display: flex; align-items: center; justify-content: center;">${lvlLabel}${cadeado}</span><div style="margin-top: 4px; margin-bottom: 4px; display: flex; justify-content: center; align-items: center;">${getSpBadge(totalPts)}${getShardBadge(totalShards, n.nivel)}</div><span style="font-size: 13px;">${n.descricao[idioma]}</span></div>`);
            });
            textoDescricao = linhas.join('');

        } else {
            let txtAtual = idioma === 'ingles' ? `Current Level (Lv. ${lvl})` : `Nível Atual (Nv. ${lvl})`;
            let corAtual = coresNivel[lvl] || '#4caf50';
            let nAtual = item.niveis[lvl - 1];
            let descAtual = nAtual.descricao[idioma];
            
            textoDescricao = `<div style="margin-bottom: 12px; display: flex; flex-direction: column; align-items: center; text-align: center;"><span style="color: ${corAtual}; font-weight: bold; font-size: 15px; display: flex; align-items: center; justify-content: center;">${txtAtual}</span><div style="margin-top: 4px; margin-bottom: 4px;"></div><span style="font-size: 13px;">${descAtual}</span></div>`;

            if (lvl < item.maxLevel) {
                let txtProximo = idioma === 'ingles' ? `Next Level (Lv. ${lvl + 1})` : `Próximo Nível (Nv. ${lvl + 1})`;
                let cadeado = getCadeado(lvl + 1);
                let corProximo = coresNivel[lvl + 1] || '#ffa726';
                
                let nProximo = item.niveis[lvl];
                let totalPtsProx = parseInt(nProximo.pontosNecessarios, 10) || 0;
                let totalShardsProx = parseInt(nProximo.shards, 10) || 0;
                let descProximo = nProximo.descricao[idioma];
                
                textoDescricao += `<div style="margin-bottom: 8px; border-top: 1px dashed #506152; padding-top: 10px; display: flex; flex-direction: column; align-items: center; text-align: center;"><span style="color: ${corProximo}; font-weight: bold; font-size: 14px; display: flex; align-items: center; justify-content: center;">${txtProximo}${cadeado}</span><div style="margin-top: 4px; margin-bottom: 4px; display: flex; justify-content: center; align-items: center;">${getSpBadge(totalPtsProx)}${getShardBadge(totalShardsProx, nProximo.nivel)}</div><span style="font-size: 13px;">${descProximo}</span></div>`;
            } else {
                let txtMax = idioma === 'ingles' ? `(Max Level)` : `(Nível Máximo)`;
                textoDescricao += `<div style="margin-top: 10px; border-top: 1px dashed #506152; padding-top: 10px;"><span style="color: ${corAtual}; font-weight: bold; display: flex; align-items: center; justify-content: center;">${txtMax}</span></div>`;
            }
        }
    } else {
        // =========================================================================
        // ATUALIZAÇÃO: Funciona para NFTs, Skills Legacy e Novas Skills de Nível 1
        // =========================================================================
        
        // Pega descrição direto na raiz (NFTs/Legacy) ou no niveis[0] (Novas skills lvl 1)
        textoDescricao = item.descricao ? (item.descricao[idioma] || "") : 
                         (item.niveis && item.niveis[0] && item.niveis[0].descricao ? (item.niveis[0].descricao[idioma] || "") : "");
        
        // Pega os custos na raiz ou no niveis[0]
        let ptsItem = item.pontosNecessarios || (item.niveis && item.niveis[0] ? item.niveis[0].pontosNecessarios : 0);
        let shardsItem = item.shards || (item.niveis && item.niveis[0] ? item.niveis[0].shards : 0);

        if (ptsItem || shardsItem) {
            let totalPts = parseInt(ptsItem, 10) || 0;
            let totalShards = parseInt(shardsItem, 10) || 0;
            
            // Se já possui a skill/NFT, apenas mostra a descrição e some com o custo
            if (item.level > 0 || item.possui) {
                textoDescricao = `<span style="font-size: 13px;">${textoDescricao}</span>`;
            } else {
                // Se for uma skill de 1 nível (tem item.niveis), dizemos que é Nível 1 para o getShardBadge ocultar o Shard.
                // Se for um NFT/Legacy (não tem item.niveis), usamos Nível 2 para garantir que o Shard apareça caso exista custo nele.
                let nivelDoItem = (item.niveis && item.niveis.length === 1) ? 1 : 2;
                
                let badgesUnicos = `${getSpBadge(totalPts)}${getShardBadge(totalShards, nivelDoItem)}`; 
                
                if (badgesUnicos.trim() !== "") {
                    // Removido o texto "Cost/Custo" - exibindo apenas a caixinha de SP (e shard se for NFT)
                    textoDescricao = `<div style="margin-bottom: 10px; display: flex; flex-direction: column; align-items: center; text-align: center;"><div style="margin-top: 4px; margin-bottom: 4px; display: flex; justify-content: center; align-items: center;">${badgesUnicos}</div></div><span style="font-size: 13px;">${textoDescricao}</span>`;
                } else {
                    textoDescricao = `<span style="font-size: 13px;">${textoDescricao}</span>`;
                }
            }
        } else {
            textoDescricao = `<span style="font-size: 13px;">${textoDescricao}</span>`;
        }
    }

    document.querySelector(".card-img").innerHTML = sprite(idName, categoria);
    document.getElementById("titulo-buff").innerHTML = item.name;
    document.getElementById("descricao-do-buff").innerHTML = textoDescricao;
    document.getElementById("preco-atual").innerHTML = precoAtual;
    document.getElementById("ultima-venda").innerHTML = ultimavenda;

    card.style.display = "block";
}

function esconderInfoCard() {
    // Mantendo vazia para que o card continue travado na tela mostrando sempre a última informação
}