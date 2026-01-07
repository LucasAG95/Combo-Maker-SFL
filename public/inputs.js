//Input para inserir sementes!
function sementesPlantadas() {
    document.querySelectorAll('.sementes-input').forEach(input => {
        let nome = input.dataset.name;
        let valor = Number(input.value);

        let crop = crops.find(c => c.name === nome);
        if (crop) crop.seedsPlantadas = valor || '';
    });

    buffsAdicionadosCrops();
};

function limparCrops() {
    crops.forEach(crop => {
        crop.seedsPlantadas = '';
    });
    buffsAdicionadosCrops();
};

//================================================================================================================================================================================
function sementesPlantadasCM() {
    document.querySelectorAll('.sementesCM-input').forEach(input => {
        let nome = input.dataset.name;
        let valor = Number(input.value);

        let cropCM = cropMachine.find(c => c.name === nome);
        if (cropCM) cropCM.seedsPlantadas = valor || '';
    });

    buffsAdicionadosCrops();
};

function limparCM() {
    cropMachine.forEach(cm => {
        cm.seedsPlantadas = '';
    });
    buffsAdicionadosCrops();
};

//================================================================================================================================================================================
function sementesPlantadasFrutas() {
    document.querySelectorAll('.sementesFrutas-input').forEach(input => {
        let nome = input.dataset.name;
        let valor = Number(input.value);

        let frutas = fruits.find(fruta => fruta.name === nome);
        if (frutas) frutas.seedsPlantadas = valor || '';
    });

    buffsAdicionadosFrutas();
};

function limparFrutas() {
    fruits.forEach(fruta => {
        fruta.seedsPlantadas = '';
    });
    buffsAdicionadosFrutas();
};

//================================================================================================================================================================================
function sementesPlantadasGH() {
    document.querySelectorAll('.sementesGH-input').forEach(input => {
        let nome = input.dataset.name;
        let valor = Number(input.value);

        let greenh = greenhouse.find(gh => gh.name === nome);
        if (greenh) greenh.seedsPlantadas = valor || '';
    });

    buffsAdicionadosGreenhouse();
};

function limparGH() {
    greenhouse.forEach(gh => {
        gh.seedsPlantadas = '';
    });
    buffsAdicionadosGreenhouse();
};



//================================================================================================================================================================================
function ferramentasUsadas() {
    document.querySelectorAll('.minerios-input').forEach(input => {
        let id = input.dataset.name;
        let valor = Number(input.value);

        let ferramenta = todasFerramentas.find(fer => fer.id === id); // <-- CORRIGIDO
        if (ferramenta) ferramenta.qtdUsada = valor || '';
    });

    buffsAdicionadosMinerais();
};

function limparMinerios() {
    todasFerramentas.forEach(ferramenta => {
        ferramenta.qtdUsada = '';
    });

    buffsAdicionadosMinerais();
};

//================================================================================================================================================================================

function galinhasColocadas() {

    document.querySelectorAll('.galinhas-input').forEach(input => {
        let id = Number(input.dataset.name);
        let valor = Number(input.value);

        let galinha = animais.galinhas.find(gal => gal.levelAnterior === id); // <-- CORRIGIDO
        if (galinha) galinha.qtdUsada = valor || '';
    });

    document.querySelectorAll('.galinhas-venda-input').forEach(input => {
        let id = Number(input.dataset.name);
        let valor = Number(input.value);

        let galinha = animais.galinhas.find(gal => gal.levelAnterior === id); // <-- CORRIGIDO
        if (galinha) galinha.vendida = valor || '';
    });
    buffsAdicionadosAnimais();
};

function limparGalinhas() {
    animais.galinhas.forEach(galinha => {
        galinha.qtdUsada = '';
        galinha.vendida = '';
    });

    buffsAdicionadosAnimais();
};

//================================================================================================================================================================================

function vacasColocadas() {

    document.querySelectorAll('.vacas-input').forEach(input => {
        let id = Number(input.dataset.name);
        let valor = Number(input.value);

        let vaca = animais.vacas.find(vac => vac.levelAnterior === id); // <-- CORRIGIDO
        if (vaca) vaca.qtdUsada = valor || '';
    });

    document.querySelectorAll('.vacas-venda-input').forEach(input => {
        let id = Number(input.dataset.name);
        let valor = Number(input.value);

        let vaca = animais.vacas.find(vac => vac.levelAnterior === id); // <-- CORRIGIDO
        if (vaca) vaca.vendida = valor || '';
    });

    buffsAdicionadosAnimais();
};

function limparVacas() {
    animais.vacas.forEach(vaca => {
        vaca.qtdUsada = '';
        vaca.vendida = '';
    });

    buffsAdicionadosAnimais();
};

//================================================================================================================================================================================

function ovelhasColocadas() {

    document.querySelectorAll('.ovelhas-input').forEach(input => {
        let id = Number(input.dataset.name);
        let valor = Number(input.value);

        let ovelha = animais.ovelhas.find(ove => ove.levelAnterior === id); // <-- CORRIGIDO
        if (ovelha) ovelha.qtdUsada = valor || '';
    });

    document.querySelectorAll('.ovelhas-venda-input').forEach(input => {
        let id = Number(input.dataset.name);
        let valor = Number(input.value);

        let ovelha = animais.ovelhas.find(ove => ove.levelAnterior === id); // <-- CORRIGIDO
        if (ovelha) ovelha.vendida = valor || '';
    });

    buffsAdicionadosAnimais();
};

function limparOvelhas() {
    animais.ovelhas.forEach(ovelha => {
        ovelha.qtdUsada = '';
        ovelha.vendida = '';
    });

    buffsAdicionadosAnimais();
};