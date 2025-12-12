const crops = [
    //Crops Basicas
    { name: 'Sunflower',   tempo: 60_000,     custoSemente: 0.01, valorDeVenda: 0.02, valorDoMarket: 0, estoque: 800, seedsPlantadas: '', estacao: ['spring', 'summer'] },
    { name: 'Potato',      tempo: 300_000,    custoSemente: 0.1,  valorDeVenda: 0.14, valorDoMarket: 0, estoque: 400, seedsPlantadas: '', estacao: ['summer', 'autumn', 'winter'] },
    { name: 'Rhubarb',     tempo: 600_000,    custoSemente: 0.15, valorDeVenda: 0.24, valorDoMarket: 0, estoque: 400, seedsPlantadas: '', estacao: ['spring'] },
    { name: 'Pumpkin',     tempo: 1_800_000,  custoSemente: 0.2,  valorDeVenda: 0.4,  valorDoMarket: 0, estoque: 300, seedsPlantadas: '', estacao: ['autumn'] },
    { name: 'Zucchini',    tempo: 1_800_000,  custoSemente: 0.2,  valorDeVenda: 0.4,  valorDoMarket: 0, estoque: 400, seedsPlantadas: '', estacao: ['summer'] },
    //Crops Médias
    { name: 'Carrot',      tempo: 3_600_000,   custoSemente: 0.5, valorDeVenda: 0.8,  valorDoMarket: 0, estoque: 200, seedsPlantadas: '', estacao: ['spring', 'autumn'] },
    { name: 'Yam',         tempo: 3_600_000,   custoSemente: 0.5, valorDeVenda: 0.8,  valorDoMarket: 0, estoque: 180, seedsPlantadas: '', estacao: ['autumn'] },
    { name: 'Cabbage',     tempo: 7_200_000,   custoSemente: 1,   valorDeVenda: 1.5,  valorDoMarket: 0, estoque: 180, seedsPlantadas: '', estacao: ['spring', 'winter'] },
    { name: 'Broccoli',    tempo: 7_200_000,   custoSemente: 1,   valorDeVenda: 1.5,  valorDoMarket: 0, estoque: 180, seedsPlantadas: '', estacao: ['autumn'] },
    { name: 'Soybean',     tempo: 10_800_000,  custoSemente: 1.5, valorDeVenda: 2.3,  valorDoMarket: 0, estoque: 180, seedsPlantadas: '', estacao: ['spring', 'autumn'] },
    { name: 'Pepper',      tempo: 14_400_000,  custoSemente: 2,   valorDeVenda: 3,    valorDoMarket: 0, estoque: 160, seedsPlantadas: '', estacao: ['summer'] },
    { name: 'Beetroot',    tempo: 14_400_000,  custoSemente: 2,   valorDeVenda: 2.8,  valorDoMarket: 0, estoque: 160, seedsPlantadas: '', estacao: ['summer', 'winter'] },
    { name: 'Cauliflower', tempo: 28_800_000,  custoSemente: 3,   valorDeVenda: 4.25, valorDoMarket: 0, estoque: 160, seedsPlantadas: '', estacao: ['summer', 'winter'] },
    { name: 'Parsnip',     tempo: 43_200_000,  custoSemente: 5,   valorDeVenda: 6.5,  valorDoMarket: 0, estoque: 120, seedsPlantadas: '', estacao: ['winter'] },
    //Crops Avançadas
    { name: 'Eggplant',    tempo: 57_600_000,  custoSemente: 6,   valorDeVenda: 8,    valorDoMarket: 0, estoque: 100, seedsPlantadas: '', estacao: ['summer'] },
    { name: 'Corn',        tempo: 72_000_000,  custoSemente: 7,   valorDeVenda: 9,    valorDoMarket: 0, estoque: 100, seedsPlantadas: '', estacao: ['spring'] },
    { name: 'Onion',       tempo: 72_000_000,  custoSemente: 7,   valorDeVenda: 10,   valorDoMarket: 0, estoque: 100, seedsPlantadas: '', estacao: ['winter'] },
    { name: 'Turnip',      tempo: 86_400_000,  custoSemente: 5,   valorDeVenda: 8,    valorDoMarket: 0, estoque: 80,  seedsPlantadas: '', estacao: ['winter'] },
    { name: 'Radish',      tempo: 86_400_000,  custoSemente: 7,   valorDeVenda: 9.5,  valorDoMarket: 0, estoque: 80,  seedsPlantadas: '', estacao: ['summer'] },
    { name: 'Wheat',       tempo: 86_400_000,  custoSemente: 5,   valorDeVenda: 7,    valorDoMarket: 0, estoque: 80,  seedsPlantadas: '', estacao: ['spring', 'summer', 'autumn', 'winter'] },
    { name: 'Kale',        tempo: 129_600_000, custoSemente: 7,   valorDeVenda: 10,   valorDoMarket: 0, estoque: 60,  seedsPlantadas: '', estacao: ['spring', 'winter'] },
    { name: 'Artichoke',   tempo: 129_600_000, custoSemente: 7,   valorDeVenda: 12,   valorDoMarket: 0, estoque: 60,  seedsPlantadas: '', estacao: ['autumn'] },
    { name: 'Barley',      tempo: 172_800_000, custoSemente: 10,  valorDeVenda: 12,   valorDoMarket: 0, estoque: 60,  seedsPlantadas: '', estacao: ['spring', 'autumn'] },
];

const cropMachine = [
    { name: 'Sunflower',   tempo: 60_000,    custoSemente: 0.01, valorDeVenda: 0.02, valorDoMarket: 0, estoque: 800, seedsPlantadas: '', permitido: true,  estacao: ['spring', 'summer']},
    { name: 'Potato',      tempo: 300_000,   custoSemente: 0.1,  valorDeVenda: 0.14, valorDoMarket: 0, estoque: 400, seedsPlantadas: '', permitido: true,  estacao: ['summer', 'autumn', 'winter']},
    { name: 'Rhubarb',     tempo: 600_000,   custoSemente: 0.15, valorDeVenda: 0.24, valorDoMarket: 0, estoque: 400, seedsPlantadas: '', permitido: false, estacao: ['spring']},
    { name: 'Pumpkin',     tempo: 1_800_000, custoSemente: 0.2,  valorDeVenda: 0.4,  valorDoMarket: 0, estoque: 300, seedsPlantadas: '', permitido: true,  estacao: ['autumn'] },
    { name: 'Zucchini',    tempo: 1_800_000, custoSemente: 0.2,  valorDeVenda: 0.4,  valorDoMarket: 0, estoque: 400, seedsPlantadas: '', permitido: false, estacao: ['summer']},
    { name: 'Carrot',      tempo: 3_600_000, custoSemente: 0.5,  valorDeVenda: 0.8,  valorDoMarket: 0, estoque: 200, seedsPlantadas: '', permitido: false, estacao: ['spring', 'autumn']},
    { name: 'Yam',         tempo: 3_600_000, custoSemente: 0.5,  valorDeVenda: 0.8,  valorDoMarket: 0, estoque: 180, seedsPlantadas: '', permitido: false, estacao: ['autumn']},
    { name: 'Cabbage',     tempo: 7_200_000, custoSemente: 1,    valorDeVenda: 1.5,  valorDoMarket: 0, estoque: 180, seedsPlantadas: '', permitido: false, estacao: ['spring', 'winter']},
    { name: 'Broccoli',    tempo: 7_200_000, custoSemente: 1,    valorDeVenda: 1.5,  valorDoMarket: 0, estoque: 180, seedsPlantadas: '', permitido: false, estacao: ['autumn']},
];

const fruits = [
    //Frutas Basicas
    { name: 'Tomato',    tempo: 7_200_000,  custoSemente: 5,  valorDeVenda: 2,  valorDoMarket: 0, estoque: 20, seedsPlantadas: '', estacao: ['spring', 'autumn'] },
    { name: 'Lemon',     tempo: 14_400_000, custoSemente: 15, valorDeVenda: 6,  valorDoMarket: 0, estoque: 20, seedsPlantadas: '', estacao: ['summer', 'winter'] },
    //Frutas Médias
    { name: 'Blueberry', tempo: 21_600_000, custoSemente: 30, valorDeVenda: 12, valorDoMarket: 0, estoque: 20, seedsPlantadas: '', estacao: ['spring', 'winter'] },
    { name: 'Orange',    tempo: 28_800_000, custoSemente: 50, valorDeVenda: 18, valorDoMarket: 0, estoque: 20, seedsPlantadas: '', estacao: ['spring', 'summer'] },
    //Frutas Avançadas
    { name: 'Apple',     tempo: 43_200_000, custoSemente: 70, valorDeVenda: 25, valorDoMarket: 0, estoque: 20, seedsPlantadas: '', estacao: ['autumn', 'winter'] },
    { name: 'Banana',    tempo: 43_200_000, custoSemente: 70, valorDeVenda: 25, valorDoMarket: 0, estoque: 20, seedsPlantadas: '', estacao: ['summer', 'autumn'] },
];

const greenhouse = [
    { name: 'Grape', tempo: 43_200_000,  custoSemente: 160, valorDeVenda: 240, valorDoMarket: 0, estoque: 10, seedsPlantadas: '', oil: 3 },
    { name: 'Rice',  tempo: 115_200_000, custoSemente: 240, valorDeVenda: 320, valorDoMarket: 0, estoque: 10, seedsPlantadas: '', oil: 4 },
    { name: 'Olive', tempo: 158_400_000, custoSemente: 320, valorDeVenda: 400, valorDoMarket: 0, estoque: 10, seedsPlantadas: '', oil: 6 },
];

const todasCropsEFrutas = [...crops, ...cropMachine, ...fruits];
let mapaDeTodasCropsEFrutas = {}; // cria objeto vazio para guardar NFTs por id
todasCropsEFrutas.forEach(cropsMFruits => { //vai verificar e organizar por id das NFTs no mapaDeCollectibles, foi oque entendi
    mapaDeTodasCropsEFrutas[cropsMFruits.name] = cropsMFruits; // adiciona cada NFT no objeto usando o id como chave
});

//==============================================================================================================================================================================

const minerals = [
    {
        id: 'wood',
        name: 'Wood',
        tempo: 7_200_000,
        mediaDeCustoCoins: '',
        mediaDeCustoFlower: '',
        valorDoMarket: 0,
        qtdNodes: {
            t1: 1,
            t2: 0,
            t3: 0,
        },
        qtdMediaPorNode: 1, 
    },
    {
        id: 'stone',
        name: 'Stone',
        tempo: 14_400_000,
        mediaDeCustoCoins: '',
        mediaDeCustoFlower: '',
        valorDoMarket: 0,
        qtdNodes: {
            t1: 1,
            t2: 0,
            t3: 0,
        },
        qtdMediaPorNode: 1, 
    },
    {
        id: 'iron',
        name: 'Iron',
        tempo: 28_800_000,
        mediaDeCustoCoins: '',
        mediaDeCustoFlower: '',
        valorDoMarket: 0,
        qtdNodes: {
            t1: 1,
            t2: 0,
            t3: 0,
        },
        qtdMediaPorNode: 1, 
    },
    {
        id: 'gold',
        name: 'Gold',
        tempo: 86_400_000,
        mediaDeCustoCoins: '',
        mediaDeCustoFlower: '',
        valorDoMarket: 0,
        qtdNodes: {
            t1: 1,
            t2: 0,
            t3: 0,
        },
        qtdMediaPorNode: 1, 
    },
    {
        id: 'crimstone',
        name: 'Crimstone',
        tempo: 86_400_000,
        mediaDeCustoCoins: '',
        mediaDeCustoFlower: '',
        valorDoMarket: 0,
        qtdNodes: {
            t1: 1,
            t2: 0,
            t3: 0,
        },
        qtdMediaPorNode: 1.4, 
    },
    {
        id: 'oil',
        name: 'Oil',
        tempo: 72_000_000,
        mediaDeCustoCoins: '',
        mediaDeCustoFlower: '',
        valorDoMarket: 0,
        qtdNodes: {
            t1: 1,
            t2: 0,
            t3: 0,
        },
        qtdMediaPorNode: 16.66666667, 
    },
];

const ferramentas = [
    //coinsOriginal é só pra poder fazer a conta de desconta das coins nas ferramentas!
    {
        id: 'axe',
        name: 'Axe',
        recursoObtido: 'wood',
        estoque: 200,
        recursosNecessarios: {
            coinsOriginal: 20,
            coins: 20
        },
        custoEmCoins: ''
    },
    {
        id: 'pickaxe',
        name: 'Pickaxe',
        recursoObtido: 'stone',
        estoque: 60,
        recursosNecessarios: {
            coinsOriginal: 20,
            coins: 20,
            wood: 3
        },
        custoEmCoins: ''
    },
    {
        id: 'stonePickaxe',
        name: 'Stone Pickaxe',
        recursoObtido: 'iron',
        estoque: 20,
        recursosNecessarios: {
            coinsOriginal: 20,
            coins: 20,
            wood: 3,
            stone: 5
        },
        custoEmCoins: ''
    },
    {
        id: 'ironPickaxe',
        name: 'Iron Pickaxe',
        recursoObtido: 'gold',
        estoque: 5,
        recursosNecessarios: {
            coinsOriginal: 80,
            coins: 80,
            wood: 3,
            iron: 5
        },
        custoEmCoins: ''
    },
    {
        id: 'goldPickaxe',
        name: 'Gold Pickaxe',
        recursoObtido: 'crimstone',
        estoque: 5,
        recursosNecessarios: {
            coinsOriginal: 100,
            coins: 100,
            wood: 3,
            gold: 3
        },
        custoEmCoins: ''
    },
    {
        id: 'oilDrill',
        name: 'Oil Drill',
        recursoObtido: 'oil',
        estoque: 5,
        recursosNecessarios: {
            coinsOriginal: 100,
            coins: 100,
            wood: 20,
            iron: 9,
            leather: 10, 
            wool: 20
        },
        custoEmCoins: ''
    },
];

const ferramentasSecundarias = [
    {
        id: 'rod',
        name: 'Rod',
        recursoObtido: 'peixe',
        estoque: 50,
        recursosNecessarios: {
            coinsOriginal: 20,
            coins: 20,
            wood: 3,
            stone: 1
        },
        custoEmCoins: ''
    },
    {
        id: 'sandShovel',
        name: 'Sand Shovel',
        recursoObtido: 'escavacao',
        estoque: 50,
        recursosNecessarios: {
            coinsOriginal: 20,
            coins: 20,
            wood: 2,
            stone: 1
        },
        custoEmCoins: ''
    },
    {
        id: 'sandDrill',
        name: 'Sand Drill',
        recursoObtido: 'escavacao',
        estoque: 10,
        recursosNecessarios: {
            coinsOriginal: 40,
            coins: 40,
            wood: 3,
            crimstone: 1,
            oil: 1,
            leather: 1
        },
        custoEmCoins: ''
    },
];

let mapaDeMinerals = {}; // cria objeto vazio para guardar NFTs por id
minerals.forEach(mineral => { //vai verificar e organizar por id das NFTs no mapaDeCollectibles, foi oque entendi
    mapaDeMinerals[mineral.id] = mineral; // adiciona cada NFT no objeto usando o id como chave
});

const todasFerramentas = [...ferramentas, ...ferramentasSecundarias]
let mapaDeFerramentas = {}; // cria objeto vazio para guardar NFTs por id
todasFerramentas.forEach(ferramenta => { //vai verificar e organizar por id das NFTs no mapaDeCollectibles, foi oque entendi
    mapaDeFerramentas[ferramenta.id] = ferramenta; // adiciona cada NFT no objeto usando o id como chave
});

//==============================================================================================================================================================================

const valorDosRecursosMarket = [
    //Crops
    { id: 'sunflower',   name: 'Sunflower',   valor: '' },
    { id: 'potato',      name: 'Potato',      valor: '' },
    { id: 'rhubarb',     name: 'Rhubarb',     valor: '' },
    { id: 'pumpkin',     name: 'Pumpkin',     valor: '' },
    { id: 'zucchini',    name: 'Zucchini',    valor: '' },
    { id: 'carrot',      name: 'Carrot',      valor: '' },
    { id: 'yam',         name: 'Yam',         valor: '' },
    { id: 'cabbage',     name: 'Cabbage',     valor: '' },
    { id: 'broccoli',    name: 'Broccoli',    valor: '' },
    { id: 'soybean',     name: 'Soybean',     valor: '' },
    { id: 'pepper',      name: 'Pepper',      valor: '' },
    { id: 'beetroot',    name: 'Beetroot',    valor: '' },
    { id: 'cauliflower', name: 'Cauliflower', valor: '' },
    { id: 'parsnip',     name: 'Parsnip',     valor: '' },
    { id: 'eggplant',    name: 'Eggplant',    valor: '' },
    { id: 'corn',        name: 'Corn',        valor: '' },
    { id: 'onion',       name: 'Onion',       valor: '' },
    { id: 'turnip',      name: 'Turnip',      valor: '' },
    { id: 'radish',      name: 'Radish',      valor: '' },
    { id: 'wheat',       name: 'Wheat',       valor: '' },
    { id: 'kale',        name: 'Kale',        valor: '' },
    { id: 'artichoke',   name: 'Artichoke',   valor: '' },
    { id: 'barley',      name: 'Barley',      valor: '' },

    //Frutas
    { id: 'tomato',      name: 'Tomato',      valor: '' },
    { id: 'lemon',       name: 'Lemon',       valor: '' },
    { id: 'chestnut',    name: 'Chestnut',    valor: '' },
    { id: 'blueberry',   name: 'Blueberry',   valor: '' },
    { id: 'starfruit',   name: 'Starfruit',   valor: '' },
    { id: 'orange',      name: 'Orange',      valor: '' },
    { id: 'apple',       name: 'Apple',       valor: '' },
    { id: 'banana',      name: 'Banana',      valor: '' },
    { id: 'coconut',     name: 'Coconut',     valor: '' },
    { id: 'celestine',   name: 'Celestine',   valor: '' },
    { id: 'lunara',      name: 'Lunara',      valor: '' },
    { id: 'duskberry',   name: 'Duskberry',   valor: '' },

    //GH
    { id: 'grape',       name: 'Grape',       valor: '' },
    { id: 'rice',        name: 'Rice',        valor: '' },
    { id: 'olive',       name: 'Olive',       valor: '' },

    //Minerios
    { id: 'wood',        name: 'Wood',        valor: '' },
    { id: 'stone',       name: 'Stone',       valor: '' },
    { id: 'iron',        name: 'Iron',        valor: '' },
    { id: 'gold',        name: 'Gold',        valor: '' },
    { id: 'crimstone',   name: 'Crimstone',   valor: '' },

    //Animais
    { id: 'egg',         name: 'Egg',         valor: '' },
    { id: 'feather',     name: 'Feather',     valor: '' },
    { id: 'honey',       name: 'Honey',       valor: '' },
    { id: 'milk',        name: 'Milk',        valor: '' },
    { id: 'leather',     name: 'Leather',     valor: '' },
    { id: 'wool',        name: 'Wool',        valor: '' },
    { id: 'merinoWool',  name: 'Merino Wool', valor: '' },
];

let mapaDosValoresDoMarket = {}; // cria objeto vazio para guardar NFTs por id
valorDosRecursosMarket.forEach(valorDoMarket => { //vai verificar e organizar por id das NFTs no mapaDeCollectibles, foi oque entendi
    mapaDosValoresDoMarket[valorDoMarket.id] = valorDoMarket; // adiciona cada NFT no objeto usando o id como chave
});

//==============================================================================================================================================================================    

/*function mediaDeValorDasFerramentasEMinerais() {
    ferramentas.forEach(ferramenta => {

        // Começa com o custo base em coins
        ferramenta.custoEmCoins = ferramenta.recursosNecessarios['coins'] ?? 0;

        // Soma custo dos recursos (wood, stone, iron, gold...)
        for (const recurso in ferramenta.recursosNecessarios) {

            if (recurso === 'coins') continue; // coins é custo direto, não multiplica

            const qtd = ferramenta.recursosNecessarios[recurso] ?? 0;

            // Se o mineral existir no mapa, multiplica pelo seu custo médio
            if (mapaDeMinerals[recurso]) {
                ferramenta.custoEmCoins += qtd * (mapaDeMinerals[recurso].mediaDeCustoCoins ?? 0);
            }
        }

        // Calcular custo médio do mineral obtido pela ferramenta
        mapaDeMinerals[ferramenta.recursoObtido].mediaDeCustoCoins =
            ferramenta.custoEmCoins / mapaDeMinerals[ferramenta.recursoObtido].mediaPorNode;

        console.log(
            `${mapaDeMinerals[ferramenta.recursoObtido].name}: ` +
            mapaDeMinerals[ferramenta.recursoObtido].mediaDeCustoCoins +
            ` coins`
        );

    });
}
*/