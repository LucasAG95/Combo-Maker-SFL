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
    /*todosBuds.forEach(bud => {
        let checkbox = document.getElementById(bud.idName);

        if(checkbox) {
            bud.possui = checkbox.checked;

            checkbox.addEventListener('change', function() {
                bud.possui = checkbox.checked;
                chamadorDeBuffs();
                ativarBonusDasNftsESkills();
            });
        };
    });*/

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
    /*renderNFTs(buds.plaza, 'buds-plaza-container', './buds');
    renderNFTs(buds.woodlands, 'buds-woodlands-container', './buds');
    renderNFTs(buds.cave, 'buds-cave-container', './buds');
    renderNFTs(buds.sea, 'buds-sea-container', './buds');
    renderNFTs(buds.castle, 'buds-castle-container', './buds');
    renderNFTs(buds.port, 'buds-port-container', './buds');
    renderNFTs(buds.retreat, 'buds-retreat-container', './buds');
    renderNFTs(buds.saphiro, 'buds-saphiro-container', './buds');
    renderNFTs(buds.snow, 'buds-snow-container', './buds');
    renderNFTs(buds.beach, 'buds-beach-container', './buds');*/

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