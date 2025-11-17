//Input para inserir sementes!
function sementesPlantadas() {
    document.querySelectorAll('.quantidade-input').forEach(input => { //Procura todos os inputs no HTML que têm a classe quantidade-input.
        let nome = input.dataset.name; //Lê o atributo data-name do input.
        let valor = input.value;
        
        //Para Crops
        let crop = crops.find(c => c.name === nome); //Procura no array crops um item com o mesmo nome que o data-name do input. c é abreviação de crop e nome dada a variavel
        if (crop) {
            crop.seedsPlantadas = valor;
        };
    });
    buffsAdicionadosCrops();
};

//================================================================================================================================================================================
