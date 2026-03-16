const recursosDoMarketParaCoins = [
    //Crops
    { id: 'sunflower',   name: 'Sunflower',   valorMarket: '', valorCoins: 0.02, tipoDeRecurso: 'crop' },
    { id: 'potato',      name: 'Potato',      valorMarket: '', valorCoins: 0.14, tipoDeRecurso: 'crop' },
    { id: 'rhubarb',     name: 'Rhubarb',     valorMarket: '', valorCoins: 0.24, tipoDeRecurso: 'crop' },
    { id: 'pumpkin',     name: 'Pumpkin',     valorMarket: '', valorCoins: 0.4,  tipoDeRecurso: 'crop' },
    { id: 'zucchini',    name: 'Zucchini',    valorMarket: '', valorCoins: 0.4,  tipoDeRecurso: 'crop' },
    { id: 'carrot',      name: 'Carrot',      valorMarket: '', valorCoins: 0.8,  tipoDeRecurso: 'crop' },
    { id: 'yam',         name: 'Yam',         valorMarket: '', valorCoins: 0.8,  tipoDeRecurso: 'crop' },
    { id: 'cabbage',     name: 'Cabbage',     valorMarket: '', valorCoins: 1.5,  tipoDeRecurso: 'crop' },
    { id: 'broccoli',    name: 'Broccoli',    valorMarket: '', valorCoins: 1.5,  tipoDeRecurso: 'crop' },
    { id: 'soybean',     name: 'Soybean',     valorMarket: '', valorCoins: 2.3,  tipoDeRecurso: 'crop' },
    { id: 'pepper',      name: 'Pepper',      valorMarket: '', valorCoins: 3,    tipoDeRecurso: 'crop' },
    { id: 'beetroot',    name: 'Beetroot',    valorMarket: '', valorCoins: 2.8,  tipoDeRecurso: 'crop' },
    { id: 'cauliflower', name: 'Cauliflower', valorMarket: '', valorCoins: 4.25, tipoDeRecurso: 'crop' },
    { id: 'parsnip',     name: 'Parsnip',     valorMarket: '', valorCoins: 6.5,  tipoDeRecurso: 'crop' },
    { id: 'eggplant',    name: 'Eggplant',    valorMarket: '', valorCoins: 8,    tipoDeRecurso: 'crop' },
    { id: 'corn',        name: 'Corn',        valorMarket: '', valorCoins: 9,    tipoDeRecurso: 'crop' },
    { id: 'onion',       name: 'Onion',       valorMarket: '', valorCoins: 10,   tipoDeRecurso: 'crop' },
    { id: 'turnip',      name: 'Turnip',      valorMarket: '', valorCoins: 8,    tipoDeRecurso: 'crop' },
    { id: 'radish',      name: 'Radish',      valorMarket: '', valorCoins: 9.5,  tipoDeRecurso: 'crop' },
    { id: 'wheat',       name: 'Wheat',       valorMarket: '', valorCoins: 7,    tipoDeRecurso: 'crop' },
    { id: 'kale',        name: 'Kale',        valorMarket: '', valorCoins: 10,   tipoDeRecurso: 'crop' },
    { id: 'artichoke',   name: 'Artichoke',   valorMarket: '', valorCoins: 12,   tipoDeRecurso: 'crop' },
    { id: 'barley',      name: 'Barley',      valorMarket: '', valorCoins: 12,   tipoDeRecurso: 'crop' },

    //Frutas
    { id: 'tomato',      name: 'Tomato',      valorMarket: '', valorCoins: 2,    tipoDeRecurso: 'fruta' },
    { id: 'lemon',       name: 'Lemon',       valorMarket: '', valorCoins: 6,    tipoDeRecurso: 'fruta' },
    { id: 'blueberry',   name: 'Blueberry',   valorMarket: '', valorCoins: 12,   tipoDeRecurso: 'fruta' },
    { id: 'orange',      name: 'Orange',      valorMarket: '', valorCoins: 18,   tipoDeRecurso: 'fruta' },
    { id: 'apple',       name: 'Apple',       valorMarket: '', valorCoins: 25,   tipoDeRecurso: 'fruta' },
    { id: 'banana',      name: 'Banana',      valorMarket: '', valorCoins: 25,   tipoDeRecurso: 'fruta' },
    { id: 'celestine',   name: 'Celestine',   valorMarket: '', valorCoins: 200,  tipoDeRecurso: 'fruta' },
    { id: 'lunara',      name: 'Lunara',      valorMarket: '', valorCoins: 500,  tipoDeRecurso: 'fruta' },
    { id: 'duskberry',   name: 'Duskberry',   valorMarket: '', valorCoins: 1000, tipoDeRecurso: 'fruta' },

    //GH
    { id: 'grape',       name: 'Grape',       valorMarket: '', valorCoins: 240,  tipoDeRecurso: 'greenhouse' },
    { id: 'rice',        name: 'Rice',        valorMarket: '', valorCoins: 320,  tipoDeRecurso: 'greenhouse' },
    { id: 'olive',       name: 'Olive',       valorMarket: '', valorCoins: 400,  tipoDeRecurso: 'greenhouse' },
];

//=====================================================================================================================================

//Puxa Api para pegar os preços dos recursos (tem em minha API, mas como não consigo trazer para cá, foi o melhor jeito!)
function buscarValorApiParaCropToCoins() {
    Promise.all([
        fetch(`https://noisy-union-8474.lucas-alexandre-95.workers.dev?url=https://sfl.world/api/v1/prices`).then(res => res.json()),
    ])
    .then(([precos]) => {

        // Atualiza valores de venda por flower
        if (precos && precos.data && precos.data.p2p) {
            atualizarValoresParaCropToCoins(precos.data.p2p);
            console.log('✅ Preços atualizados');
        } else {
            console.error('❌ Estrutura da API precos inválida:', precos);
        }

    })
    .catch(err => {
        console.error('❌ Erro ao puxar as APIs:', err);
    });
}
buscarValorApiParaCropToCoins();

//Usado para colocar os valores do market nos recursos de acordo com nome!
function atualizarValoresParaCropToCoins(apiValores) {

    recursosDoMarketParaCoins.forEach(marketRecursos => {
        if (apiValores[marketRecursos.name]) {
            marketRecursos.valorMarket = apiValores[marketRecursos.name];
        };
    })

    tabelaCropsParaCoins();
};