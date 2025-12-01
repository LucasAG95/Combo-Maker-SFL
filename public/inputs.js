//Input para inserir sementes!
function sementesPlantadas() {
    document.querySelectorAll('.sementes-input').forEach(input => {
        let nome = input.dataset.name;
        let valor = Number(input.value);

        let crop = crops.find(c => c.name === nome);
        if (crop) crop.seedsPlantadas = valor || '';
    });

    buffsAdicionadosCrops();
}


//================================================================================================================================================================================

function ferramentasUsadas() {
    document.querySelectorAll('.minerios-input').forEach(input => {
        let id = input.dataset.name;
        let valor = Number(input.value);

        let ferramenta = ferramentas.find(fer => fer.id === id); // <-- CORRIGIDO
        if (ferramenta) ferramenta.qtdUsada = valor || '';
    });

    buffsAdicionadosMinerais();
}
