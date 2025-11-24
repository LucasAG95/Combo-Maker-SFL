let shrines = [
    {
        idName: 'boarShrine',
        name: 'Boar Shrine',
        descricao: {
            portugues: `-20% no tempo de cozimento - Dura por 7 dias`,
            ingles: `-20% Cooking Time - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.8,
                recursoAfetado: [''],
            }
        ]
    },
    {
        idName: 'houndShrine',
        name: 'Hound Shrine',
        descricao: {
            portugues: `+100 de XP de Pet - Dura por 7 dias`,
            ingles: `+100 Pet XP - Lasts for 7days`
        },
        possui: false,
        xp: [
            {
                sinal: '+',
                buff: 100,
                recursoAfetado: ['pet'],
            }
        ]
    },
    {
        idName: 'sparrowShrine',
        name: 'Sparrow Shrine',
        descricao: {
            portugues: `-25% no tempo de crescimento das plantações - Dura por 7 dias`,
            ingles: `-25% Crop Growth Time - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.75,
                recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean',
                    'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale',
                    'Artichoke', 'Barley'],
            }
        ]
    },
    {
        idName: 'foxShrine',
        name: 'Fox Shrine',
        descricao: {
            portugues: `-25% no tempo da Crafting Box / 10% de chance de criar uma receita instantaneamente - Dura por 7 dias`,
            ingles: `-25% Crafting Box Time / 10% chance to instantly craft a recipe - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.75,
                recursoAfetado: [''],
            }
        ],
        quantidade: [
            {
                sinal: 'x',
                buff: 1.1,
                recursoAfetado: [''],
            }
        ]
    },
    {
        idName: 'toucanShrine',
        name: 'Toucan Shrine',
        descricao: {
            portugues: `-25% no tempo de crescimento das frutas - Dura por 7 dias`,
            ingles: `-25% Fruit Growth Time - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.75,
                recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
            }
        ]
    },
    {
        idName: 'collieShrine',
        name: 'Collie Shrine',
        descricao: {
            portugues: `-25% no tempo das vacas / -25% no tempo das ovelhas / -5% de Ração para animais da Barn - Dura por 7 dias`,
            ingles: `-25% Cow Sleep Time / -25% Sheep Sleep Time / -5% Feed to feed barn animals - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.75,
                recursoAfetado: [''],
            }
        ],
        food: [
            {
                sinal: 'x',
                buff: 0.95,
                recursoAfetado: [''],
            }
        ]
    },
    {
        idName: 'mothShrine',
        name: 'Moth Shrine',
        descricao: {
            portugues: `-25% no tempo de crescimento das flores / 20% de chance de receber +1 flor - Dura por 7 dias`,
            ingles: `-25% Flower Growth Time / 20% chance to get +1 Flower - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.75,
                recursoAfetado: [''],
            }
        ],
        quantidade: [
            {
                sinal: 'x',
                buff: 1.2,
                recursoAfetado: [''],
            }
        ]
    },
    {
        idName: 'badgerShrine',
        name: 'Badger Shrine',
        descricao: {
            portugues: `-25% no tempo das árvores / -25% no tempo das pedras - Dura por 7 dias`,
            ingles: `-25% Tree Recovery Time / -25% Stone Recovery Time - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.75,
                recursoAfetado: ['Tree', 'Stone'],
            }
        ],
    },
    {
        idName: 'moleShrine',
        name: 'Mole Shrine',
        descricao: {
            portugues: `-25% no tempo do ferro / -25% no tempo do ouro / -25% no tempo da crimstone - Dura por 7 dias`,
            ingles: `-25% Iron Recovery Time / -25% Gold Recovery Time / -25% Crimstone Recovery Time - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.75,
                recursoAfetado: ['Iron', 'Gold', 'Crimstone'],
            }
        ],
    },
    {
        idName: 'tortoiseShrine',
        name: 'Tortoise Shrine',
        descricao: {
            portugues: `-33% no tempo da Greenhouse / -10% no tempo da Crop Machine - Dura por 7 dias`,
            ingles: `-33% Greenhouse Growth Time / -10% Crop Machine Growth Time - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.67,
                recursoAfetado: ['Grape', 'Rice', 'Olive'],
            }
        ],
        tempoCM: [
            {
                sinal: 'x',
                buff: 0.9,
                recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli'],
            }
        ]
    },
    {
        idName: 'stagShrine',
        name: 'Stag Shrine',
        descricao: {
            portugues: `-25% no tempo de recuperação do Oil / +15 Oil every 3rd drill - Dura por 7 dias`,
            ingles: `-25% Oil Recovery Time / +15 Óleo a cada 3 perfurações - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.75,
                recursoAfetado: ['Oil'],
            }
        ],
        quantidade: [
            {
                sinal: '+',
                buff: 15 / 3,
                recursoAfetado: ['Oil'],
            }
        ],
    },
    {
        idName: 'bearShrine',
        name: 'Bear Shrine',
        descricao: {
            portugues: `+0.5 na velocidade de produção de mel / +20% de chance de enxame de abelhas - Dura por 7 dias`,
            ingles: `+0.5 Honey Production Speed / +20% chance of bee swarm - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.5, // talvez rever, pq mel funciona diferente
                recursoAfetado: ['Honey'],
            }
        ],
        quantidade: [
            {
                sinal: 'x',
                buff: 1.2, // talvez rever, pq isso funciona nas crops
                recursoAfetado: [''],
            }
        ],
    },
    {
        idName: 'bantamShrine',
        name: 'Bantam Shrine',
        descricao: {
            portugues: `-25% no tempo de descanso das galinhas / -5% de ração para galinhas - Dura por 7 dias`,
            ingles: `-25% Chicken Sleep Time / -5% Feed to feed chickens - Lasts for 7days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.75,
                recursoAfetado: ['Chicken'],
            }
        ],
        food: [
            {
                sinal: 'x',
                buff: 0.95,
                recursoAfetado: ['Chicken'],
            }
        ]
    },
    {
        idName: 'legendaryShrine',
        name: 'Legendary Shrine',
        descricao: {
            portugues: `+1 nas crops / +1 nas frutas / +1 de madeira / +1 de pedra / + 1 Flor / -50% no Tempo de Cozimento - Dura por 1 dia`,
            ingles: `+1 to crops / +1 to fruits / +1 to wood / +1 to stone / +1 Flower / -50% Cooking Time - Lasts for 1 day`
        },
        possui: false,
        quantidade: [
            {
                sinal: '+',
                buff: 1,
                recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean',
                    'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale',
                    'Artichoke', 'Barley', 'Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana', 'Tree', 'Stone', 'Flower'],
            }
        ],
        tempo: [
            {
                sinal: 'x',
                buff: 0.5,
                recursoAfetado: [''],
            }
        ]
    },
    {
        idName: 'tradingShrine',
        name: 'Trading Shrine',
        descricao: {
            portugues: `-2,5% de imposto sobre recursos - Dura por 30 dias`,
            ingles: `-2.5% resource tax - Lasts for 30days`
        },
        possui: false,
        taxa: [
            {
                sinal: '-',
                buff: 0.025,
                recursoAfetado: ['taxa'],
            }
        ],
    },
    {
        idName: 'obsidianShrine',
        name: 'Obsidian Shrine',
        descricao: {
            portugues: `Colha em massa todas as crops prontas e plante sementes - Dura por 14 dias`,
            ingles: `Bulk harvest all ready crops and plant seeds - Lasts for 14days`
        },
        possui: false,
        qualidadeDeVida: [
            {
                sinal: '',
                buff: '',
                recursoAfetado: [''],
            }
        ],
    },
];

//=============================================================================================================================================================================

let totems = [
    {
        idName: 'superTotem',
        name: 'Super Totem',
        descricao: {
            portugues: `Velocidade 2x para crops, árvores, frutas, culinária e minerais - Dura 7 dias`,
            ingles: `2x speed for crops, trees, fruits, cooking & minerals - Lasts for 7 days`
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.5,
                recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean',
                    'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale',
                    'Artichoke', 'Barley', 'Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana', 'Tree', 'Stone', 'Iron', 'Gold'],
            }
        ]
    },
];

//=============================================================================================================================================================================

//foi feito com chat gpt a parte de map e tals!
let fertilizantes = {
    sproutMix: crops.map(crop => ({
        idName: `sproutMix_${crop.name.toLowerCase()}`,
        name: crop.name,
        descricao: '',
        possui: false,
        quantidade: [
            {
                sinal: '+',
                buff: 0.2,
                recursoAfetado: [crop.name]
            }
        ]
    })),
    rapidRoot: crops.map(crop => ({
        idName: `rapidRoot_${crop.name.toLowerCase()}`,
        name: crop.name,
        descricao: '',
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.5,
                recursoAfetado: [crop.name]
            }
        ]
    }))
};

//=============================================================================================================================================================================

let todosTemporarios = [
    ...fertilizantes.sproutMix,
    ...fertilizantes.rapidRoot,
    ...shrines,
    ...totems
];

let mapaDeBuffsTemporarios = {}
todosTemporarios.forEach(temporario => { 
    mapaDeBuffsTemporarios[temporario.idName] = temporario; 
});
console.log(mapaDeBuffsTemporarios)

//=============================================================================================================================================================================