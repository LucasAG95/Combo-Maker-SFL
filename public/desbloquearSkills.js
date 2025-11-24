function skillsCropsBloqueadas() {
    let aroveDeAbilidades = 'crops';
    let tituloDoAcordion = 'Crops';
    let pontosTier1 = 0;
    let pontosTier2 = 0;
    let pontosTier3 = 0;
    let totalDePontosGastos = 0;

    todasSkillsCrops.forEach(skill => {
        let checkbox = document.getElementById(skill.idName)

        // Tier 1 sempre pode ser contado
        if(skill.pontosNecessarios === 1 && checkbox.checked) {
            pontosTier1 += skill.pontosNecessarios;
        };

        // Tier 2 só conta se já tiver pontos suficientes no Tier 1
        if(skill.pontosNecessarios === 2 && checkbox.checked && pontosTier1 >= 3) {
            pontosTier2 += skill.pontosNecessarios;
        };

        // Tier 3 só conta se já tiver pontos suficientes no Tier 1 + 2
        if(skill.pontosNecessarios === 3 && checkbox.checked && (pontosTier1 + pontosTier2) >= 7) {
            pontosTier3 += skill.pontosNecessarios;
        };

        //Bloquear tier 2 e 3 das skills ate condições serem falsas
        if (pontosTier1 < 3 && skill.pontosNecessarios === 2) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else if ((pontosTier1 + pontosTier2) < 7 && skill.pontosNecessarios === 3) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else {
            checkbox.disabled = false;
        };
        
    });
    totalDePontosGastos = pontosTier1 + pontosTier2 + pontosTier3;
    console.log(totalDePontosGastos);

    textoParaDesbloquearSkill(3, 7, totalDePontosGastos, aroveDeAbilidades, tituloDoAcordion);
};

function skillsFruitsBloqueadas() {
    let aroveDeAbilidades = 'fruit';
    let tituloDoAcordion = 'Fruit Patch';
    let pontosTier1 = 0;
    let pontosTier2 = 0;
    let pontosTier3 = 0;
    let totalDePontosGastos = 0;

    todasSkillsFruits.forEach(skill => {
        let checkbox = document.getElementById(skill.idName)

        // Tier 1 sempre pode ser contado
        if(skill.pontosNecessarios === 1 && checkbox.checked) {
            pontosTier1 += skill.pontosNecessarios;
        };

        // Tier 2 só conta se já tiver pontos suficientes no Tier 1
        if(skill.pontosNecessarios === 2 && checkbox.checked && pontosTier1 >= 2) {
            pontosTier2 += skill.pontosNecessarios;
        };

        // Tier 3 só conta se já tiver pontos suficientes no Tier 1 + 2
        if(skill.pontosNecessarios === 3 && checkbox.checked && (pontosTier1 + pontosTier2) >= 5) {
            pontosTier3 += skill.pontosNecessarios;
        };

        //Bloquear tier 2 e 3 das skills ate condições serem falsas
        if (pontosTier1 < 2 && skill.pontosNecessarios === 2) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else if ((pontosTier1 + pontosTier2) < 5 && skill.pontosNecessarios === 3) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else {
            checkbox.disabled = false;
        };
        
    });
    totalDePontosGastos = pontosTier1 + pontosTier2 + pontosTier3;
    console.log(totalDePontosGastos);

    textoParaDesbloquearSkill(2, 5, totalDePontosGastos, aroveDeAbilidades, tituloDoAcordion);
};

function skillsGreenhouseBloqueadas() {
    let aroveDeAbilidades = 'greenhouse';
    let tituloDoAcordion = 'Greenhouse';
    let pontosTier1 = 0;
    let pontosTier2 = 0;
    let pontosTier3 = 0;
    let totalDePontosGastos = 0;

    todasSkillsGreenhouse.forEach(skill => {
        let checkbox = document.getElementById(skill.idName)

        // Tier 1 sempre pode ser contado
        if(skill.pontosNecessarios === 1 && checkbox.checked) {
            pontosTier1 += skill.pontosNecessarios;
        };

        // Tier 2 só conta se já tiver pontos suficientes no Tier 1
        if(skill.pontosNecessarios === 2 && checkbox.checked && pontosTier1 >= 2) {
            pontosTier2 += skill.pontosNecessarios;
        };

        // Tier 3 só conta se já tiver pontos suficientes no Tier 1 + 2
        if(skill.pontosNecessarios === 3 && checkbox.checked && (pontosTier1 + pontosTier2) >= 5) {
            pontosTier3 += skill.pontosNecessarios;
        };

        //Bloquear tier 2 e 3 das skills ate condições serem falsas
        if (pontosTier1 < 2 && skill.pontosNecessarios === 2) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else if ((pontosTier1 + pontosTier2) < 5 && skill.pontosNecessarios === 3) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else {
            checkbox.disabled = false;
        };
        
    });
    totalDePontosGastos = pontosTier1 + pontosTier2 + pontosTier3;
    console.log(totalDePontosGastos);

    textoParaDesbloquearSkill(2, 5, totalDePontosGastos, aroveDeAbilidades, tituloDoAcordion);
};

function skillsTreesBloqueadas() {
    let aroveDeAbilidades = 'tree';
    let tituloDoAcordion = 'Trees';
    let pontosTier1 = 0;
    let pontosTier2 = 0;
    let pontosTier3 = 0;
    let totalDePontosGastos = 0;

    todasSkillsTrees.forEach(skill => {
        let checkbox = document.getElementById(skill.idName)

        // Tier 1 sempre pode ser contado
        if(skill.pontosNecessarios === 1 && checkbox.checked) {
            pontosTier1 += skill.pontosNecessarios;
        };

        // Tier 2 só conta se já tiver pontos suficientes no Tier 1
        if(skill.pontosNecessarios === 2 && checkbox.checked && pontosTier1 >= 2) {
            pontosTier2 += skill.pontosNecessarios;
        };

        // Tier 3 só conta se já tiver pontos suficientes no Tier 1 + 2
        if(skill.pontosNecessarios === 3 && checkbox.checked && (pontosTier1 + pontosTier2) >= 5) {
            pontosTier3 += skill.pontosNecessarios;
        };

        //Bloquear tier 2 e 3 das skills ate condições serem falsas
        if (pontosTier1 < 2 && skill.pontosNecessarios === 2) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else if ((pontosTier1 + pontosTier2) < 5 && skill.pontosNecessarios === 3) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else {
            checkbox.disabled = false;
        };
        
    });
    totalDePontosGastos = pontosTier1 + pontosTier2 + pontosTier3;
    console.log(totalDePontosGastos);

    textoParaDesbloquearSkill(2, 5, totalDePontosGastos, aroveDeAbilidades, tituloDoAcordion);
};

function skillsMineralsBloqueadas() {
    let aroveDeAbilidades = 'mineral';
    let tituloDoAcordion = 'Minerals';
    let pontosTier1 = 0;
    let pontosTier2 = 0;
    let pontosTier3 = 0;
    let totalDePontosGastos = 0;

    todasSkillsMinerals.forEach(skill => {
        let checkbox = document.getElementById(skill.idName)

        // Tier 1 sempre pode ser contado
        if(skill.pontosNecessarios === 1 && checkbox.checked) {
            pontosTier1 += skill.pontosNecessarios;
        };

        // Tier 2 só conta se já tiver pontos suficientes no Tier 1
        if(skill.pontosNecessarios === 2 && checkbox.checked && pontosTier1 >= 3) {
            pontosTier2 += skill.pontosNecessarios;
        };

        // Tier 3 só conta se já tiver pontos suficientes no Tier 1 + 2
        if(skill.pontosNecessarios === 3 && checkbox.checked && (pontosTier1 + pontosTier2) >= 7) {
            pontosTier3 += skill.pontosNecessarios;
        };

        //Bloquear tier 2 e 3 das skills ate condições serem falsas
        if (pontosTier1 < 3 && skill.pontosNecessarios === 2) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else if ((pontosTier1 + pontosTier2) < 7 && skill.pontosNecessarios === 3) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else {
            checkbox.disabled = false;
        };
        
    });
    totalDePontosGastos = pontosTier1 + pontosTier2 + pontosTier3;
    console.log(totalDePontosGastos);

    textoParaDesbloquearSkill(3, 7, totalDePontosGastos, aroveDeAbilidades, tituloDoAcordion);
};

function skillsMachineryBloqueadas() {
    let aroveDeAbilidades = 'machinery';
    let tituloDoAcordion = 'Machinery';
    let pontosTier1 = 0;
    let pontosTier2 = 0;
    let pontosTier3 = 0;
    let totalDePontosGastos = 0;

    todasSkillsMachinery.forEach(skill => {
        let checkbox = document.getElementById(skill.idName)

        // Tier 1 sempre pode ser contado
        if(skill.pontosNecessarios === 1 && checkbox.checked) {
            pontosTier1 += skill.pontosNecessarios;
        };

        // Tier 2 só conta se já tiver pontos suficientes no Tier 1
        if(skill.pontosNecessarios === 2 && checkbox.checked && pontosTier1 >= 2) {
            pontosTier2 += skill.pontosNecessarios;
        };

        // Tier 3 só conta se já tiver pontos suficientes no Tier 1 + 2
        if(skill.pontosNecessarios === 3 && checkbox.checked && (pontosTier1 + pontosTier2) >= 5) {
            pontosTier3 += skill.pontosNecessarios;
        };

        //Bloquear tier 2 e 3 das skills ate condições serem falsas
        if (pontosTier1 < 2 && skill.pontosNecessarios === 2) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else if ((pontosTier1 + pontosTier2) < 5 && skill.pontosNecessarios === 3) {
            checkbox.disabled = true;
            checkbox.checked = false;
            skill.possui = false;
        } else {
            checkbox.disabled = false;
        };
        
    });
    totalDePontosGastos = pontosTier1 + pontosTier2 + pontosTier3;
    console.log(totalDePontosGastos);

    textoParaDesbloquearSkill(2, 5, totalDePontosGastos, aroveDeAbilidades, tituloDoAcordion);
};

//função que vai ser responsavel por mudar os textos que mostram a quantidade de pontos faltantes para desbloquear skill!
function textoParaDesbloquearSkill(pontosProNivel2, pontosProNivel3, totalPontosGastos, aroveDeAbilidades, tituloDoAcordion) {

    //tradução
    let pontosUsados = idioma === 'portugues' ? 'Pontos usados' : 'Points Used';
    let desbloquearN2 = idioma === 'portugues' ? 'Nivel 2 - Pontos para desbloquear' : 'Level 2 – Points to Unlock';
    let desbloquearN3 = idioma === 'portugues' ? 'Nivel 3 - Pontos para desbloquear' : 'Level 3 – Points to Unlock';

    //mostrar texto no accordion com o total de pontos gastos na arvore de crops
    document.getElementById(`tab-skill-${aroveDeAbilidades}`).innerHTML = `<h5>${tituloDoAcordion}: ${totalPontosGastos} ${pontosUsados}</h5>`;

    //mostrar pontos necessários para desbloquear o nivel 2
    if (totalPontosGastos < pontosProNivel2) {
        document.getElementById(`tab-skill-${aroveDeAbilidades}-tier2`).innerHTML = `${desbloquearN2}: ${pontosProNivel2 - totalPontosGastos}`;
    } else {
        document.getElementById(`tab-skill-${aroveDeAbilidades}-tier2`).innerHTML = ``;
    }

    //mostrar pontos necessários para desbloquear o nivel 3
    if (totalPontosGastos < pontosProNivel3) {
        document.getElementById(`tab-skill-${aroveDeAbilidades}-tier3`).innerHTML = `${desbloquearN3}: ${pontosProNivel3 - totalPontosGastos}`;
    } else {
        document.getElementById(`tab-skill-${aroveDeAbilidades}-tier3`).innerHTML = ``
    }
    
};

function chamadorDeDesbloquearSkills() {
    skillsCropsBloqueadas();
    skillsFruitsBloqueadas();
    skillsTreesBloqueadas();
    skillsGreenhouseBloqueadas();
    skillsMineralsBloqueadas();
    skillsMachineryBloqueadas();
};