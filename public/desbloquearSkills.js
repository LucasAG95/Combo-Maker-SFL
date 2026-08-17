const idiomaDesbloquearSkills = {
    portugues: {
        pontosUsados: 'Pontos usados',
        desbloquearNivel2: 'Tier 2 - Pontos para desbloquear',
        desbloquearNivel3: 'Tier 3 - Pontos para desbloquear',
    },
    ingles: {
        pontosUsados: 'Points Used',
        desbloquearNivel2: 'Tier 2 – Points to Unlock',
        desbloquearNivel3: 'Tier 3 – Points to Unlock',
    }
};

// =====================================================================================
// FUNÇÕES AUXILIARES
// =====================================================================================

function calcularPontosDaSkill(skill) {
    if (!skill.possui) return 0;
    
    // Se for skill de múltiplos níveis, soma o custo de TODOS os níveis adquiridos
    if (skill.niveis && skill.level > 0) {
        let pts = 0;
        for (let i = 0; i < skill.level; i++) {
            if (skill.niveis[i]) pts += Number(skill.niveis[i].pontosNecessarios || 0);
        }
        return pts;
    }
    
    // Caso padrão: 1 ponto ou o valor especificado
    return Number(skill.pontosNecessarios || 1);
}

function calcularPontosDeDesbloqueio(skill) {
    if (!skill.possui || skill.level === 0) return 0;
    
    // Conta APENAS os pontos do Nível 1 (o "tier 1 dentro da skill") para o desbloqueio
    if (skill.niveis && skill.niveis[0]) {
        return Number(skill.niveis[0].pontosNecessarios || 0);
    }
    
    return Number(skill.pontosNecessarios || 1);
}

function calcularShardsDaSkill(skill) {
    if (!skill.possui || skill.level === 0 || !skill.niveis) return 0;
    
    let shards = 0;
    // O índice 0 é o Nível 1. Shards só são cobradas do índice 1 pra frente (Nível 2+)
    for (let i = 1; i < skill.level; i++) {
        if (skill.niveis[i]) shards += Number(skill.niveis[i].shards || 0);
    }
    return shards;
}

function bloquearSkillSeFaltarPontos(skill, pontosAtuais, pontosNecessarios) {
    let checkbox = document.getElementById(skill.idName);
    
    if (pontosAtuais < pontosNecessarios) {
        if (checkbox) {
            checkbox.disabled = true;
            // Se estava equipada, desequipa forçadamente
            if (skill.level > 0 || skill.possui) {
                checkbox.checked = false;
                skill.possui = 0;
                skill.level = 0;
                if (typeof atualizarVisualSkill === 'function') {
                    atualizarVisualSkill(skill.idName, 0, skill.maxLevel || 1);
                }
            }
        }
    } else {
        if (checkbox) checkbox.disabled = false;
    }
}

function textoParaDesbloquearSkill(pontosProNivel2, pontosProNivel3, validosParaN2, validosParaN3, totalPontosGastos, totalShardsGastos, aroveDeAbilidades, tituloDoAcordion) {
    const idiomaDesbloqueioSkill = idiomaDesbloquearSkills[idioma];
    let pontosUsados = idiomaDesbloqueioSkill.pontosUsados;
    let desbloquearN2 = idiomaDesbloqueioSkill.desbloquearNivel2;
    let desbloquearN3 = idiomaDesbloqueioSkill.desbloquearNivel3;

    // Título Principal (Mostra o TOTAL GASTO + SHARDS)
    const elTotal = document.getElementById(`tab-skill-${aroveDeAbilidades}`);
    if (elTotal) {
        let textoShards = "";
        if (totalShardsGastos > 0) {
            let iconeShardPequeno = `<span class="sprite sprite-icones bg-shard" style="display: inline-block; width: 14px; height: 14px; vertical-align: middle; margin-right: 4px;"></span>`;
            textoShards = `<span style="color: #a4cfff; margin-left: 10px; font-size: 14px; font-weight: bold;">${iconeShardPequeno}${totalShardsGastos}</span>`;
        }
        
        // Mantém o SEU formato exato e apenas adiciona as shards na frente
        elTotal.innerHTML = `<h5>${tituloDoAcordion}: ${totalPontosGastos} ${pontosUsados} ${textoShards}</h5>`;
    }

    // Alerta Nível 2 (Checa quantos faltam usando APENAS os pontos válidos)
    const elT2 = document.getElementById(`tab-skill-${aroveDeAbilidades}-tier2`);
    if (elT2) {
        if (validosParaN2 < pontosProNivel2) {
            elT2.innerHTML = `${desbloquearN2}: ${pontosProNivel2 - validosParaN2}`;
        } else {
            elT2.innerHTML = ``;
        }
    }

    // Alerta Nível 3 (Checa quantos faltam usando APENAS os pontos válidos)
    const elT3 = document.getElementById(`tab-skill-${aroveDeAbilidades}-tier3`);
    if (elT3) {
        if (validosParaN3 < pontosProNivel3) {
            elT3.innerHTML = `${desbloquearN3}: ${pontosProNivel3 - validosParaN3}`;
        } else {
            elT3.innerHTML = ``;
        }
    }
}

// =====================================================================================
// MOTOR PRINCIPAL DE BLOQUEIO
// =====================================================================================

function gerenciarBloqueios(tier1, tier2, tier3, ptsT2, ptsT3, idArvore, titulo) {
    // 1. Soma APENAS os pontos de Nível 1 que são válidos para desbloquear a árvore
    let desbloqueio1 = tier1.reduce((acc, s) => acc + calcularPontosDeDesbloqueio(s), 0);
    let desbloqueio2 = tier2.reduce((acc, s) => acc + calcularPontosDeDesbloqueio(s), 0);
    
    let tier2Liberado = desbloqueio1 >= ptsT2;
    let tier3Liberado = (desbloqueio1 + desbloqueio2) >= ptsT3;

    // 2. Bloqueia acesso à caixinha das skills com base nesses pontos restritos
    tier2.forEach(s => bloquearSkillSeFaltarPontos(s, desbloqueio1, ptsT2));
    tier3.forEach(s => bloquearSkillSeFaltarPontos(s, desbloqueio1 + desbloqueio2, ptsT3));
    
    // ==============================================================
    // REGRAS DE REBAIXAMENTO (DOWNGRADE) DE NÍVEL DE SKILL
    // ==============================================================
    
    // Regra Tier 1: Se Tier 2 não está liberado, skills do Tier 1 não passam do nível 1
    if (!tier2Liberado) {
        tier1.forEach(s => {
            if (s.level > 1) {
                s.level = 1;
                s.possui = 1;
                if (typeof atualizarVisualSkill === 'function') atualizarVisualSkill(s.idName, 1, s.maxLevel || 1);
            }
        });
    }

    // Regra Tier 2: Se Tier 3 não está liberado, skills do Tier 2 não passam do nível 1
    if (!tier3Liberado) {
        tier2.forEach(s => {
            if (s.level > 1) {
                s.level = 1;
                s.possui = 1;
                if (typeof atualizarVisualSkill === 'function') atualizarVisualSkill(s.idName, 1, s.maxLevel || 1);
            }
        });
    }

    // 3. AGORA SIM, soma TODOS os pontos gastos (inclusive níveis 2 e 3 dentro da skill) para o contador
    let pontos1 = tier1.reduce((acc, s) => acc + calcularPontosDaSkill(s), 0);
    let pontos2 = tier2.reduce((acc, s) => acc + calcularPontosDaSkill(s), 0);
    let pontos3 = tier3.reduce((acc, s) => acc + calcularPontosDaSkill(s), 0);
    
    let totalGastos = pontos1 + pontos2 + pontos3;

    // 4. SOMA AS SHARDS GASTAS NA ÁRVORE INTEIRA
    let shards1 = tier1.reduce((acc, s) => acc + calcularShardsDaSkill(s), 0);
    let shards2 = tier2.reduce((acc, s) => acc + calcularShardsDaSkill(s), 0);
    let shards3 = tier3.reduce((acc, s) => acc + calcularShardsDaSkill(s), 0);
    
    let totalShardsGastos = shards1 + shards2 + shards3;
    
    // Atualiza o visual passando também as shards
    textoParaDesbloquearSkill(ptsT2, ptsT3, desbloqueio1, desbloqueio1 + desbloqueio2, totalGastos, totalShardsGastos, idArvore, titulo);
}

// =====================================================================================
// CHAMADAS DAS ARVORES
// =====================================================================================

function skillsCropsBloqueadas()       { gerenciarBloqueios(skillsCrops.tier1,       skillsCrops.tier2,       skillsCrops.tier3,       3, 7, 'crops',       'Crops'); }
function skillsFruitsBloqueadas()      { gerenciarBloqueios(skillsFruits.tier1,      skillsFruits.tier2,      skillsFruits.tier3,      2, 5, 'fruit',       'Fruit Patch'); }
function skillsGreenhouseBloqueadas()  { gerenciarBloqueios(skillsGreenhouse.tier1,  skillsGreenhouse.tier2,  skillsGreenhouse.tier3,  2, 5, 'greenhouse',  'Greenhouse'); }
function skillsTreesBloqueadas()       { gerenciarBloqueios(skillsTrees.tier1,       skillsTrees.tier2,       skillsTrees.tier3,       2, 5, 'tree',        'Trees'); }
function skillsMineralsBloqueadas()    { gerenciarBloqueios(skillsMinerals.tier1,    skillsMinerals.tier2,    skillsMinerals.tier3,    3, 7, 'mineral',     'Minerals'); }
function skillsAnimaisBloqueadas()     { gerenciarBloqueios(skillsAnimais.tier1,     skillsAnimais.tier2,     skillsAnimais.tier3,     4, 8, 'animal',      'Animals'); }
function skillsMachineryBloqueadas()   { gerenciarBloqueios(skillsMachinery.tier1,   skillsMachinery.tier2,   skillsMachinery.tier3,   2, 5, 'machinery',   'Machinery'); }
function skillsFishingBloqueadas()     { gerenciarBloqueios(skillsFishing.tier1,     skillsFishing.tier2,     skillsFishing.tier3,     2, 5, 'fishing',     'Fishing'); }
function skillsCookingBloqueadas()     { gerenciarBloqueios(skillsCooking.tier1,     skillsCooking.tier2,     skillsCooking.tier3,     2, 5, 'cooking',     'Cooking'); }
function skillsCompostBloqueadas()     { gerenciarBloqueios(skillsCompost.tier1,     skillsCompost.tier2,     skillsCompost.tier3,     3, 7, 'compost',     'Compost'); }
function skillsBeesFlowersBloqueadas() { gerenciarBloqueios(skillsBeesFlowers.tier1, skillsBeesFlowers.tier2, skillsBeesFlowers.tier3, 2, 5, 'beesFlowers', 'Bees & Flowers'); }
function skillsAgingBloqueadas()       { gerenciarBloqueios(skillsAging.tier1,       skillsAging.tier2,       skillsAging.tier3,       3, 7, 'aging',       'Aging'); }

function chamadorDeDesbloquearSkills() {
    skillsCropsBloqueadas();
    skillsFruitsBloqueadas();
    skillsTreesBloqueadas();
    skillsGreenhouseBloqueadas();
    skillsMineralsBloqueadas();
    skillsAnimaisBloqueadas();
    skillsMachineryBloqueadas();
    skillsFishingBloqueadas();
    skillsCookingBloqueadas();
    skillsCompostBloqueadas();
    skillsBeesFlowersBloqueadas();
    skillsAgingBloqueadas();
}