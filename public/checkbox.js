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

function renderSkills(lista, containerId, pastaImagens) {
    const container = document.getElementById(containerId);

    lista.forEach(skill => {

        const wrapper = document.createElement('div');
        wrapper.className = 'skill-wrapper';

        const label = document.createElement('label');
        label.setAttribute('for', skill.idName);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = skill.idName;

        const img = document.createElement('img');
        img.src = `${pastaImagens}/${skill.idName}.png`;
        img.alt = skill.name || skill.nome;
        img.className = 'skill-img';

        // ✅ MESMO EVENTO DO NFT → CARD AO PASSAR O MOUSE
        wrapper.addEventListener("mouseenter", () => {
            mostrarInfoCard(skill, `${pastaImagens}/${skill.idName}.png`);
        });

        wrapper.addEventListener("mouseleave", () => {
            esconderInfoCard();
        });

        label.appendChild(checkbox);
        label.appendChild(img);
        wrapper.appendChild(label);
        container.appendChild(wrapper);
    });
}



function renderNFTs(lista, containerId, pastaImagens) {
    const container = document.getElementById(containerId);

    lista.forEach(nft => {
        const wrapper = document.createElement('div');
        wrapper.className = 'nft-wrapper';

        const label = document.createElement('label');
        label.setAttribute('for', nft.idName);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = nft.idName;

        const img = document.createElement('img');
        img.src = `${pastaImagens}/${nft.idName}.png`;
        img.alt = nft.name || nft.nome;
        img.className = 'nft-img';

        // ✅ EVENTO - exibir card de descrição ao passar o mouse
        wrapper.addEventListener("mouseenter", () => {
            mostrarInfoCard(nft, `${pastaImagens}/${nft.idName}.png`);
        });

        wrapper.addEventListener("mouseleave", () => {
            esconderInfoCard();
        });

        label.appendChild(checkbox);
        label.appendChild(img);
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

    // Wearables
    renderNFTs(wearables.factions, 'wearables-container-factions', './wearables');
    renderNFTs(wearables.crops, 'wearables-container-crops', './wearables');
    renderNFTs(wearables.fruits, 'wearables-container-fruits', './wearables');
    renderNFTs(wearables.greenhouse, 'wearables-container-greenhouse', './wearables');
    renderNFTs(wearables.minerals, 'wearables-container-minerals', './wearables');
    renderNFTs(wearables.terouso, 'wearables-container-minerals', './wearables');
    renderNFTs(wearables.pesca, 'wearables-container-minerals', './wearables');
    

    //Shrines, Totems e buffs temporarios
    renderNFTs(shrines, 'shrines-container', './shrines');
    renderNFTs(totems, 'totems-container', './shrines');
    renderNFTs(fertilizantes.sproutMix, 'sproutMix-container', './fertilizantes');
    renderNFTs(fertilizantes.rapidRoot, 'rapidRoot-container', './fertilizantes');

    //chamando funções
    valoresDasGems();
    valorDoFlowerEmDolar();
    selecionandoIdioma();
    mudarIdioma();
    configurarCheckbox();
    numeroDaFarm();
    chamadorDeBuffs();
    chamadorDeDesbloquearSkills();
    nftsDeTierQuePossuemBuffDoAntecessor();
    buscarValoresAPI();
    buscarValoresNFTs();
    buscarValorFlower();
};

//================================================================================================================================================================

//criar card para mostrar buffs
function mostrarInfoCard(item, imgPath) {
    const card = document.getElementById("info-card");

    //Mudar texto dependendo do idioma!
    let textoUltimaVenda = idioma === 'ingles' ? 'Last Sale:' : 'Ultima Venda:';
    let textoPrecoAtual = idioma === 'ingles' ? 'Current Price:' : 'Preço Atual:';

    let ultimavenda;
    if (!item.preco || item.preco === 0 || item.preco === '') {
        ultimavenda = '';
    } else {
        ultimavenda = `${textoUltimaVenda}<img src="./icones/flower.png" class="crop-img">${item.preco} ~
            <img src="./icones/usdc.png" class="crop-img">${Number(item.preco * precoDoFlower).toFixed(2)}`;
    }
    
    let precoAtual;
    if (!item.precoAtual || item.precoAtual === 0 || item.precoAtual === '') {
        precoAtual = '';
    } else {
        precoAtual = `${textoPrecoAtual} <img src="./icones/flower.png" class="crop-img">${item.precoAtual} ~ 
            <img src="./icones/usdc.png" class="crop-img">${Number(item.precoAtual * precoDoFlower).toFixed(2)}`;
    }

    document.querySelector(".card-img").src = imgPath || "./icones/flower.png";
    document.getElementById("titulo-buff").textContent = item.name;
    document.getElementById("descricao-do-buff").textContent = item.descricao[idioma] || "";
    document.getElementById("preco-atual").innerHTML = precoAtual;
    document.getElementById("ultima-venda").innerHTML = ultimavenda;

    card.style.display = "block"; // se estava oculto
}

//como o card esta "block"(que significa que vá mostrar o tempo todo), isso n deve ser util, mas deixarei caso troque para "none"(que faz sumir quando tira o mouse de cima)
function esconderInfoCard() {
    const card = document.getElementById("info-card");
    card.style.display = "block";
}

