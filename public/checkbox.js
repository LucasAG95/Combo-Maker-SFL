function configurarCheckbox() {
    skillsLegacy.forEach(skill => {
        let checkbox = document.getElementById(skill.idName);

        if(checkbox) {
            skill.possui = checkbox.checked;

            checkbox.addEventListener('change', function() {
                skill.possui = checkbox.checked;
                chamadorDeBuffs();
                ativarBonusDasNftsESkills();
            });
        };
    });

    todasSkillsComTier.forEach(skill => {
        let checkbox = document.getElementById(skill.idName);

        if(checkbox) {
            skill.possui = checkbox.checked;

            checkbox.addEventListener('change', function() {
                skill.possui = checkbox.checked;
                chamadorDeBuffs();
                chamadorDeDesbloquearSkills();
                ativarBonusDasNftsESkills();
                pontosGastosEmSkills();
            });
        };
    });

    //todos buffs de collectibles
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
    //todos buffs de wearables
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

    //todos buffs de buds
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
                // Remove cor da aura ao desmarcar
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
                    // Troca a classe de cor
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

    //todos buffs temporarios
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
    const categoria = categoriaSprite[pastaImagens] || 'skills';

    lista.forEach(skill => {

        const wrapper = document.createElement('div');
        wrapper.className = 'skill-wrapper';

        const label = document.createElement('label');
        label.setAttribute('for', skill.idName);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = skill.idName;

        label.appendChild(checkbox);
        label.insertAdjacentHTML('beforeend', `<div class="sprite-box">${sprite(skill.idName, categoria)}</div>`);

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

//=============================================================================================================================================
function renderBuds(lista, containerId) {
    const container = document.getElementById(containerId);

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

        // Painel de auras
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

//=============================================================================================================================================

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
    renderNFTs(shrines, 'shrines-container', './shrines');
    renderNFTs(totems, 'totems-container', './shrines');
    renderNFTs(fertilizantes.sproutMix, 'sproutMix-container', './fertilizantes');
    renderNFTs(fertilizantes.rapidRoot, 'rapidRoot-container', './fertilizantes');

    //chamando funções
    valoresDasGems();
    selecionandoIdioma();
    mudarIdioma();
    configurarCheckbox();
    numeroDaFarm();
    chamadorDeBuffs();
    chamadorDeDesbloquearSkills();
    buscarTodasAPIs();
    nftsDeTierQuePossuemBuffDoAntecessor();
    cropToCoins();
    
    // ❌ REMOVIDO - as 3 chamadas abaixo foram substituídas pela função buscarTodasAPIs()
    // buscarValoresAPI();
    // buscarValoresNFTs();
    // buscarValorFlower();
};

//================================================================================================================================================================

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

    document.querySelector(".card-img").innerHTML = sprite(idName, categoria);
    document.getElementById("titulo-buff").innerHTML = item.name;
    document.getElementById("descricao-do-buff").innerHTML = item.descricao[idioma] || "";
    document.getElementById("preco-atual").innerHTML = precoAtual;
    document.getElementById("ultima-venda").innerHTML = ultimavenda;

    card.style.display = "block";
}

//como o card esta "block"(que significa que vá mostrar o tempo todo), isso n deve ser util, mas deixarei caso troque para "none"(que faz sumir quando tira o mouse de cima)
function esconderInfoCard() {
    const card = document.getElementById("info-card");
    card.style.display = "block";
}