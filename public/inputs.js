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