let skillsLegacy = [
    //Crops
    {
        idName: 'greenThumb',
        name: 'Green Thumb',
        descricao: {
            portugues: '+5% de coins ao vender colheitas (Loja de Sementes)',
            ingles: '+5% more coins when selling crops (Seed Shop)'
        },
        possui: false,
        coins: [
            {
                sinal: 'xV',
                buff: 1.05,
                recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean',
                    'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale',
                    'Artichoke', 'Barley'],
            },
        ],
    },
    {
        idName: 'seedSpecialist',
        name: 'Seed Specialist',
        descricao: {
            portugues: 'Redução de 10% no tempo das Crops',
            ingles: '-10% on crop growth time'
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.9,
                recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 
                    'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley', 'Rice', 'Olive'],
            }
        ],
    },
    {
        idName: 'coder',
        name: 'Coder',
        descricao: {
            portugues: '+20% na colheita de Crops',
            ingles: '+20% on crop harvest'
        },
        possui: false,
        quantidade: [
            {
                sinal: 'x',
                buff: 1.2,
                recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 
                    'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley', 'Rice', 'Olive'],
            }
        ],
    },
    //madeira
    {
        idName: 'lumberjack',
        name: 'Lumberjack',
        descricao: {
            portugues: '+10% de Madeira',
            ingles: '+10% more wood'
        },
        possui: false,
        quantidade: [
            {
                sinal: 'x',
                buff: 1.1,
                recursoAfetado: ['Wood'],
            }
        ],
    },
    {
        idName: 'logger',
        name: 'Logger',
        descricao: {
            portugues: 'Gasta meio machado por arvore',
            ingles: 'Uses half an axe per tree'
        },
        possui: false,
        quantidade: [
            {
                sinal: 'x',
                buff: 0.5,
                recursoAfetado: ['Axe'],
            }
        ],
    },
    {
        idName: 'discordMod',
        name: 'Discord Mod',
        descricao: {
            portugues: '+35% de Madeira',
            ingles: '+35% Wood'
        },
        possui: false,
        quantidade: [
            {
                sinal: 'x',
                buff: 1.35,
                recursoAfetado: ['Wood'],
            }
        ]
    },
    //minerios
    {
        idName: 'prospector',
        name: 'Prospector',
        descricao: {
            portugues: '+20% de Pedra',
            ingles: '+20% Stone'
        },
        possui: false,
        quantidade: [
            {
                sinal: 'x',
                buff: 1.2,
                recursoAfetado: ['Stone'],
            }
        ]
    },
    {
        idName: 'goldRush',
        name: 'Gold Rush',
        descricao: {
            portugues: '+50% de Ouro',
            ingles: '+50% Gold'
        },
        possui: false,
        quantidade: [
            {
                sinal: 'x',
                buff: 1.5,
                recursoAfetado: ['Gold'],
            }
        ]
    },
    //animais
    {
        idName: 'wrangler',
        name: 'Wrangler',
        descricao: {
            portugues: '-10% no Tempo de Sono dos Animais',
            ingles: '-10% Animal Cooldowns'
        },
        possui: false,
        tempo: [
            {
                sinal: 'x',
                buff: 0.9,
                recursoAfetado: ['galinha', 'vaca', 'ovelha'],
            }
        ]
    },
    {
        idName: 'barnManager',
        name: 'Barn Manager',
        descricao: {
            portugues: '+0,1 de Rendimento em Recursos Animais',
            ingles: '+0.1 Yield for Animal Produce'
        },
        possui: false,
        quantidade: [
            {
                sinal: '+',
                buff: 0.1,
                recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
            }
        ]
    },
];

//============================================================================================================================================================================
//ajustar calculos dos espantalhos, deve estar em outra aba
let skillsCrops = {
    tier1: [
        {
            idName: 'greenThumb2',
            name: 'Green Thumb',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-5% no tempo das Crops', ingles: '-5% in the time of Crops' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-6% no tempo das Crops', ingles: '-6% in the time of Crops' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-7.5% no tempo das Crops', ingles: '-7.5% in the time of Crops' } },
            ],
            tempo: {
                sinal: 'x',
                recursosAfetados: [
                    'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 
                    'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 
                    'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 
                    'Kale', 'Artichoke', 'Barley'
                ],
                buff: [0.95, 0.94, 0.925],
            }
        },
        {
            idName: 'youngFarmer',
            name: 'Young Farmer',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.1 no rendimento de Crops Básicas', ingles: '+0.1 Basic Crop Yield' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.125 no rendimento de Crops Básicas', ingles: '+0.125 Basic Crop Yield' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.15 no rendimento de Crops Básicas', ingles: '+0.15 Basic Crop Yield' } },
            ],
            quantidade: {
                sinal: '+',
                recursosAfetados: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                buff: [0.1, 0.125, 0.15],
            }
        },
        {
            idName: 'experiencedFarmer',
            name: 'Experienced Farmer',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.1 no rendimento de Crops Médias', ingles: '+0.1 Medium Crop Yield' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.125 no rendimento de Crops Médias', ingles: '+0.125 Medium Crop Yield' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.15 no rendimento de Crops Médias', ingles: '+0.15 Medium Crop Yield' } },
            ],
            quantidade: {
                sinal: '+',
                recursosAfetados: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                buff: [0.1, 0.125, 0.15],
            }
        },
        {
            idName: 'oldFarmer',
            name: 'Old Farmer',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.1 no rendimento de Crops Avançadas', ingles: '+0.1 Advanced Crop Yield' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.125 no rendimento de Crops Avançadas', ingles: '+0.125 Advanced Crop Yield' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.15 no rendimento de Crops Avançadas', ingles: '+0.15 Advanced Crop Yield' } },
            ],
            quantidade: {
                sinal: '+',
                recursosAfetados: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                buff: [0.1, 0.125, 0.15],
            }
        },
        {
            idName: 'bettysFriend',
            name: 'Betty\'s Friend',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Delivery da \'Betty\' Coin aumentou em 30%', ingles: 'Delivery of \'Betty\' Coin increased 30%' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Delivery da \'Betty\' Coin aumentou em 45%', ingles: 'Delivery of \'Betty\' Coin increased 45%' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Delivery da \'Betty\' Coin aumentou em 60%', ingles: 'Delivery of \'Betty\' Coin increased 60%' } },
            ],
            delivery: {
                sinal: 'x',
                recursosAfetados: [''],
                buff: [1.3, 1.45, 1.6],
            }
        },
        {
            idName: 'chonkyScarecrow',
            name: 'Chonky Scarecrow',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Aumenta a área de efeito (AOE) do Basic Scarecrow para 7x7<br>Tempo de crescimento de Crops Básicas x0.9', ingles: 'Increases Basic Scarecrow\'s area of effect (AOE) to a 7x7 area<br>x0.9 basic crop growth time' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Aumenta a área de efeito (AOE) do Basic Scarecrow para 8x8<br>Tempo de crescimento de Crops Básicas x0.9<br>+0.05 no rendimento de Crops Básicas', ingles: 'Increases Basic Scarecrow\'s area of effect (AOE) to a 8x8 area<br>x0.9 basic crop growth time<br>+0.05 basic crop yield' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Aumenta a área de efeito (AOE) do Basic Scarecrow para 9x9<br>Tempo de crescimento de Crops Básicas x0.9<br>+0.1 no rendimento de Crops Básicas', ingles: 'Increases Basic Scarecrow\'s area of effect (AOE) to a 9x9 area<br>x0.9 basic crop growth time<br>+0.1 basic crop yield' } },
            ],
            tempo: {
                sinal: 'x',
                recursosAfetados: ['Basic Scarecrow'],
                buff: [1.3, 1.4, 1.5],
            }
        },
    ],
    tier2: [
        {
            idName: 'strongRoots',
            name: 'Strong Roots',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '10% de redução no tempo das Crops Avançadas', ingles: '10% reduction in Advanced Crops time' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '12.5% de redução no tempo das Crops Avançadas', ingles: '12.5% reduction in Advanced Crops time' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '15% de redução no tempo das Crops Avançadas', ingles: '15% reduction in Advanced Crops time' } },
            ],
            tempo: {
                sinal: 'x',
                recursosAfetados: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                buff: [0.9, 0.875, 0.85],
            }
        },
        {
            idName: 'coinSwindler',
            name: 'Coin Swindler',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+10% de coins ao vender crops plantadas no Market', ingles: '+10% coins when selling plot crops at the Market' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+20% de coins ao vender crops plantadas no Market', ingles: '+20% coins when selling plot crops at the Market' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+30% de coins ao vender crops plantadas no Market', ingles: '+30% coins when selling plot crops at the Market' } },
            ],
            coins: {
                sinal: 'xV',
                recursosAfetados: [
                    'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 
                    'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'
                ],
                buff: [1.1, 1.2, 1.3],
            }
        },
        {
            idName: 'goldenSunflower',
            name: 'Golden Sunflower',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '1/700 de chance de obter 0.35 gold ao colher Sunflowers (exceto na Crop Machine)', ingles: '1/700 chance for 0.35 gold when harvesting sunflowers (excluding Crop Machine)' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '1/550 de chance de obter 0.35 gold ao colher Sunflowers (exceto na Crop Machine)', ingles: '1/550 chance for 0.35 gold when harvesting sunflowers (excluding Crop Machine)' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '1/400 de chance de obter 0.35 gold ao colher Sunflowers (exceto na Crop Machine)', ingles: '1/400 chance for 0.35 gold when harvesting sunflowers (excluding Crop Machine)' } },
            ],
            gold: {
                sinal: '+',
                recursosAfetados: [''],
                buff: [(1 / 700) * 0.35, (1 / 550) * 0.35, (1 / 400) * 0.35],
            }
        },
        {
            idName: 'horrorMike',
            name: 'Horror Mike',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: 'Aumenta a área de efeito (AOE) do Scary Mike para 7x7<br>+0.1 no rendimento de Crops Médias', ingles: 'Increases Scary Mike\'s area of effect (AOE) to a 7x7 area<br>+0.1 medium crop yield' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'Aumenta a área de efeito (AOE) do Scary Mike para 8x8<br>+0.15 no rendimento de Crops Médias', ingles: 'Increases Scary Mike\'s area of effect (AOE) to a 8x8 area<br>+0.15 medium crop yield' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'Aumenta a área de efeito (AOE) do Scary Mike para 9x9<br>+0.2 no rendimento de Crops Médias', ingles: 'Increases Scary Mike\'s area of effect (AOE) to a 9x9 area<br>+0.2 medium crop yield' } },
            ],
            quantidade: {
                sinal: '+',
                recursosAfetado: ['Scary Mike'],
                buff: [0.3 * 49, 0.35 * 64, 0.4 * 81],
            }
        },
        {
            idName: 'lauriesGains',
            name: 'Laurie\'s Gains',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: 'Aumenta a área de efeito (AOE) do Laurie the Chuckle Crow para 7x7<br>+0.1 no rendimento de Crops Avançadas', ingles: 'Increases Laurie the Chuckle Crow\'s area of effect (AOE) to a 7x7 area<br>+0.1 advanced crop yield' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'Aumenta a área de efeito (AOE) do Laurie the Chuckle Crow para 8x8<br>+0.15 no rendimento de Crops Avançadas', ingles: 'Increases Laurie the Chuckle Crow\'s area of effect (AOE) to a 8x8 area<br>+0.15 advanced crop yield' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'Aumenta a área de efeito (AOE) do Laurie the Chuckle Crow para 9x9<br>+0.2 no rendimento de Crops Avançadas', ingles: 'Increases Laurie the Chuckle Crow\'s area of effect (AOE) to a 9x9 area<br>+0.2 advanced crop yield' } },
            ],
            quantidade: {
                sinal: '+',
                recursosAfetado: ['Laurie the Chuckle Crow'],
                buff: [0.3 * 49, 0.35 * 64, 0.4 * 81],
            }
        },
    ],
    tier3: [
        {
            idName: 'instantGrowth',
            name: 'Instant Growth',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: 'Concede a habilidade de colher instantaneamente todas as crops crescendo nos plots (Recarga: 3d)', ingles: 'Grants the ability to instantly harvest all currently growing crops in plots (3d Cooldown)' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Concede a habilidade de colher instantaneamente todas as crops crescendo nos plots (Recarga: 2d 12h)', ingles: 'Grants the ability to instantly harvest all currently growing crops in plots (2d 12h Cooldown)' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Concede a habilidade de colher instantaneamente todas as crops crescendo nos plots (Recarga: 2d)', ingles: 'Grants the ability to instantly harvest all currently growing crops in plots (2d Cooldown)' } },
            ],
            reset: {
                sinal: '',
                recursosAfetados: [
                    'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 
                    'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'
                ],
                buff: ['', '', ''],
            }
        },
        {
            idName: 'acreFarm',
            name: 'Acre Farm',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+1 no rendimento de Crops Avançadas<br>-0.5 no rendimento de Crops Básicas e Médias', ingles: '+1 Advanced crop yield<br>-0.5 Basic and Medium crop yield' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+1.4 no rendimento de Crops Avançadas<br>-0.6 no rendimento de Crops Básicas e Médias', ingles: '+1.4 Advanced crop yield<br>-0.6 Basic and Medium crop yield' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+1.8 no rendimento de Crops Avançadas<br>-0.7 no rendimento de Crops Básicas e Médias', ingles: '+1.8 Advanced crop yield<br>-0.7 Basic and Medium crop yield' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                    buff: [1, 1.4, 1.8],
                },
                {
                    sinal: '-',
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                    buff: [0.5, 0.6, 0.7]
                }
            ]
        },
        {
            idName: 'hectareFarm',
            name: 'Hectare Farm',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+1 no rendimento de Crops Básicas e Médias<br>-0.5 no rendimento de Crops Avançadas', ingles: '+1 Basic and Medium crop yield<br>-0.5 Advanced crop yield' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+1.4 no rendimento de Crops Básicas e Médias<br>-0.6 no rendimento de Crops Avançadas', ingles: '+1.4 Basic and Medium crop yield<br>-0.6 Advanced crop yield' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+1.8 no rendimento de Crops Básicas e Médias<br>-0.7 no rendimento de Crops Avançadas', ingles: '+1.8 Basic and Medium crop yield<br>-0.7 Advanced crop yield' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                    buff: [1, 1.4, 1.8],
                },
                {
                    sinal: '-',
                    recursoAfetado: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                    buff: [0.5, 0.6, 0.7]
                }
            ]
        },
    ]
};

//============================================================================================================================================================================
//ajustado
let skillsFruits = {
    tier1: [
        {
            idName: 'fruitfulFumble',
            name: 'Fruitful Fumble',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.1 Fruta', ingles: '+0.1 Fruit Patch Yield' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.15 Fruta', ingles: '+0.15 Fruit Patch Yield' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.2 Fruta', ingles: '+0.2 Fruit Patch Yield' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                    buff: [0.1, 0.15, 0.2],
                },
            ],
        },
        {
            idName: 'fruityHeaven',
            name: 'Fruity Heaven',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-10% do custo em sementes de fruta', ingles: '-10% in the cost of fruit seeds' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-15% do custo em sementes de fruta', ingles: '-15% in the cost of fruit seeds' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-20% do custo em sementes de fruta', ingles: '-20% in the cost of fruit seeds' } },
            ],
            coins: [
                {
                    sinal: 'xC',
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                    buff: [0.9, 0.85, 0.8],
                },
            ],
        },
        {
            idName: 'fruityProfit',
            name: 'Fruity Profit',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+50% de coins nas entregas do Tango', ingles: '+50% coins on Tango\'s deliveries' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+75% de coins nas entregas do Tango', ingles: '+75% coins on Tango\'s deliveries' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+100% de coins nas entregas do Tango', ingles: '+100% coins on Tango\'s deliveries' } },
            ],
            delivery: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                    buff: [1.5, 1.75, 2],
                },
            ],
        },
        {
            idName: 'loyalMacaw',
            name: 'Loyal Macaw',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.2 Frutas com o Macaw', ingles: '+0.2 Fruit Patch yield with Macaw' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.25 Frutas com o Macaw', ingles: '+0.25 Fruit Patch yield with Macaw' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.3 Frutas com o Macaw', ingles: '+0.3 Fruit Patch yield with Macaw' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Macaw'],
                    buff: [0.2, 0.25, 0.3],
                },
            ],
        },
        {
            idName: 'noAxeNoWorries',
            name: 'No Axe No Worries',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Corte galhos de frutas sem machados, -1 madeira dos galhos de frutas', ingles: 'Cut fruit branches without axes, -1 wood from fruit branches' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Corte galhos de frutas sem machados, -0.9 madeira dos galhos de frutas', ingles: 'Cut fruit branches without axes, -0.9 wood from fruit branches' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Corte galhos de frutas sem machados, -0.8 madeira dos galhos de frutas', ingles: 'Cut fruit branches without axes, -0.8 wood from fruit branches' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Axe'],
                    buff: [0, 0, 0],
                },
            ],
            quantidade2: [
                {
                    sinal: '-',
                    recursoAfetado: ['Wood'],
                    buff: [1, 0.9, 0.8],
                },
            ],
        },
    ],
    tier2: [
        {
            idName: 'catchup',
            name: 'Catchup',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-10% de tempo no crescimento das frutas', ingles: '-10% in the growth time of fruits' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-15% de tempo no crescimento das frutas', ingles: '-15% in the growth time of fruits' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-20% de tempo no crescimento das frutas', ingles: '-20% in the growth time of fruits' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                    buff: [0.9, 0.85, 0.8],
                },
            ],
        },
        {
            idName: 'fruityWoody',
            name: 'Fruity Woody',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+1 madeira dos galhos e caules de frutas', ingles: '+1 wood from fruit branches and stems' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+1.25 madeira dos galhos e caules de frutas', ingles: '+1.25 wood from fruit branches and stems' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+1.5 madeira dos galhos e caules de frutas', ingles: '+1.5 wood from fruit branches and stems' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Wood'],
                    buff: [1, 1.25, 1.5],
                },
            ],
        },
        {
            idName: 'pearTurbocharge',
            name: 'Pear Turbocharge',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: 'x2 no efeito da Immortal Pear', ingles: 'x2 Immortal Pear\'s effect' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'x3 no efeito da Immortal Pear', ingles: 'x3 Immortal Pear\'s effect' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'x4 no efeito da Immortal Pear', ingles: 'x4 Immortal Pear\'s effect' } },
            ],
            rodadas: [
                {
                    sinal: '+',
                    recursoAfetado: ['Immortal Pear'],
                    buff: [1, 2, 3],
                },
            ],
        },
        {
            idName: 'crimeFruit',
            name: 'Crime Fruit',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+10 no estoque de sementes de Tomate e Limão', ingles: '+10 in the stock of Tomato and Lemon seeds' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+25 no estoque de sementes de Tomate e Limão', ingles: '+25 in the stock of Tomato and Lemon seeds' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+50 no estoque de sementes de Tomate e Limão', ingles: '+50 in the stock of Tomato and Lemon seeds' } },
            ],
            estoque: [
                {
                    sinal: '+',
                    recursoAfetado: ['Tomato', 'Lemon'],
                    buff: [10, 25, 50],
                },
            ],
        },
    ],
    tier3: [
        {
            idName: 'generousOrchard',
            name: 'Generous Orchard',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '20% de chance de +1 no rendimento de frutas', ingles: '20% chance of +1 in fruit yield' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '30% de chance de +1 no rendimento de frutas', ingles: '30% chance of +1 in fruit yield' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '50% de chance de +1 no rendimento de frutas', ingles: '50% chance of +1 in fruit yield' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                    buff: [0.2, 0.3, 0.5],
                },
            ],
        },
        {
            idName: 'longPickings',
            name: 'Long Pickings',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '-25% no tempo de crescimento da Maçã e Banana, +10% no tempo de crescimento de todas as outras frutas da Fruit Patch', ingles: '-25% Apple and Banana growth time, +10% growth time for all other fruit patch fruits' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-35% no tempo de crescimento da Maçã e Banana, +12.5% no tempo de crescimento de todas as outras frutas da Fruit Patch', ingles: '-35% Apple and Banana growth time, +12.5% growth time for all other fruit patch fruits' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-45% no tempo de crescimento da Maçã e Banana, +15% no tempo de crescimento de todas as outras frutas da Fruit Patch', ingles: '-45% Apple and Banana growth time, +15% growth time for all other fruit patch fruits' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Apple', 'Banana'],
                    buff: [0.75, 0.65, 0.55],
                },
                {
                    sinal: 'x',
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange'],
                    buff: [1.1, 1.25, 1.5],
                },
            ],
        },
        {
            idName: 'shortPickings',
            name: 'Short Pickings',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '-25% no tempo de crescimento da Laranja e Blueberry, +10% no tempo de crescimento de todas as outras frutas da Fruit Patch', ingles: '-25% Orange and Blueberry growth time, +10% growth time for all other fruit patch fruits' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-35% no tempo de crescimento da Laranja e Blueberry, +12.5% no tempo de crescimento de todas as outras frutas da Fruit Patch', ingles: '-35% Orange and Blueberry growth time, +12.5% growth time for all other fruit patch fruits' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-45% no tempo de crescimento da Laranja e Blueberry, +15% no tempo de crescimento de todas as outras frutas da Fruit Patch', ingles: '-45% Orange and Blueberry growth time, +15% growth time for all other fruit patch fruits' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Blueberry', 'Orange'],
                    buff: [0.75, 0.65, 0.55],
                },
                {
                    sinal: 'x',
                    recursoAfetado: ['Tomato', 'Lemon', 'Apple', 'Banana'],
                    buff: [1.1, 1.25, 1.5],
                },
            ],
        },
        {
            idName: 'zestyVibes',
            name: 'Zesty Vibes',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+1 no rendimento de Tomate e Limão, -0,25 no rendimento para todas as outras frutas.', ingles: '+1 in the yield of Tomato and Lemon, -0.25 in the yield for all other fruits.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+1.5 no rendimento de Tomate e Limão, -0,4 no rendimento para todas as outras frutas.', ingles: '+1.5 in the yield of Tomato and Lemon, -0.4 in the yield for all other fruits.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+2 no rendimento de Tomate e Limão, -0,5 no rendimento para todas as outras frutas.', ingles: '+2 in the yield of Tomato and Lemon, -0.5 in the yield for all other fruits.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Tomato', 'Lemon'],
                    buff: [1, 1.5, 2],
                },
                {
                    sinal: '-',
                    recursoAfetado: ['Blueberry', 'Orange', 'Apple', 'Banana'],
                    buff: [0.25, 0.4, 0.5],
                },
            ],
        },
    ]
};

//============================================================================================================================================================================
//ajustado
let skillsTrees = {
    tier1: [
        {
            idName: 'lumberjacksExtra',
            name: 'Lumberjack\'s Extra',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.1 no rendimento de madeira.', ingles: '+0.1 in wood yield.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.15 no rendimento de madeira.', ingles: '+0.15 in wood yield.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.2 no rendimento de madeira.', ingles: '+0.2 in wood yield.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Wood'],
                    buff: [0.1, 0.15, 0.2],
                },
            ],
        },
        {
            idName: 'treeCharge',
            name: 'Tree Charge',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-10% no tempo de crescimento das árvores', ingles: '-10% in the growth time of trees.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-12.5% no tempo de crescimento das árvores', ingles: '-12.5% in the growth time of trees.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-15% no tempo de crescimento das árvores', ingles: '-15% in the growth time of trees.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Wood'],
                    buff: [0.9, 0.875, 0.85],
                },
            ],
        },
        {
            idName: 'moreAxes',
            name: 'More Axes',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+50 no estoque de machados', ingles: '+50 in axe stock.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+100 no estoque de machados', ingles: '+100 in axe stock.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+150 no estoque de machados', ingles: '+150 in axe stock.' } },
            ],
            estoque: [
                {
                    sinal: '+',
                    recursoAfetado: ['Axe'],
                    buff: [50, 100, 150],
                },
            ],
        },
        {
            idName: 'instaChop',
            name: 'Insta-Chop',
            nivelAtual: 0,
            maxLevel: 1,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Uma única batida nas árvores', ingles: 'A single hit on trees.' } },
            ],
            conforto: [
                {
                    sinal: '',
                    recursoAfetado: [''],
                    buff: [''],
                },
            ],
        },
    ],
    tier2: [
        {
            idName: 'toughTree',
            name: 'Tough Tree',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '10% de chance de x3 no rendimento de madeira', ingles: '10% chance of x3 wood yield' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '20% de chance de x3 no rendimento de madeira', ingles: '20% chance of x3 wood yield' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '30% de chance de x3 no rendimento de madeira', ingles: '30% chance of x3 wood yield' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Wood'],
                    buff: [1.2, 1.4, 1.6],
                },
            ],
        },
        {
            idName: 'fellersDiscount',
            name: 'Feller\'s Discount',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-20% no custo do machado', ingles: '-20% in axe cost.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-25% no custo do machado', ingles: '-25% in axe cost.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-30% no custo do machado', ingles: '-30% in axe cost.' } },
            ],
            coins: [
                {
                    sinal: 'xC',
                    recursoAfetado: ['Axe'],
                    buff: [0.8, 0.75, 0.7],
                },
            ],
        },
        {
            idName: 'moneyTree',
            name: 'Money Tree',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '1% de chance de encontrar 200 Coins ao cortar árvores.', ingles: '1% chance to find 200 Coins when cutting down trees.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '2% de chance de encontrar 200 Coins ao cortar árvores.', ingles: '2% chance to find 200 Coins when cutting down trees.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '3% de chance de encontrar 200 Coins ao cortar árvores.', ingles: '3% chance to find 200 Coins when cutting down trees.' } },
            ],
            rng: [
                {
                    sinal: '+',
                    recursoAfetado: ['Wood'],
                    buff: [200, 200, 200],
                },
            ],
        },
    ],
    tier3: [
        {
            idName: 'treeTurnaround',
            name: 'Tree Turnaround',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '15% de chance para que as árvores cresçam instantaneamente.', ingles: '15% chance for trees to grow instantly.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '25% de chance para que as árvores cresçam instantaneamente.', ingles: '25% chance for trees to grow instantly.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '35% de chance para que as árvores cresçam instantaneamente.', ingles: '35% chance for trees to grow instantly.' } },
            ],
            quantidade: [
                {
                    sinal: 'xI',
                    recursoAfetado: ['Axe', 'Wood'],
                    buff: [1.15, 1.25, 1.35],
                },
            ],
        },
        {
            idName: 'treeBlitz',
            name: 'Tree Blitz',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: 'Habilidade de fazer todas as árvores crescerem instantaneamente (Recarga: 1d)', ingles: 'Ability to make all trees instantly grow (1d Cooldown)' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de fazer todas as árvores crescerem instantaneamente (Recarga: 18h)', ingles: 'Ability to make all trees instantly grow (18h Cooldown)' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de fazer todas as árvores crescerem instantaneamente (Recarga: 12h)', ingles: 'Ability to make all trees instantly grow (12h Cooldown)' } },
            ],
            reset: [
                {
                    sinal: '',
                    recursoAfetado: [''],
                    buff: ['', '', ''],
                },
            ],
        },
    ]
};

//============================================================================================================================================================================
//Ajustado
let skillsMinerals = {
    tier1: [
        {
            idName: 'rockNRoll',
            name: 'Rock\'N\'Roll',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.1 Pedra', ingles: '+0.1 Stone Yield' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.15 Pedra', ingles: '+0.15 Stone Yield' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.2 Pedra', ingles: '+0.2 Stone Yield' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Stone'],
                    buff: [0.1, 0.15, 0.2],
                },
            ],
        },
        {
            idName: 'ironBumpkin',
            name: 'Iron Bumpkin',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.1 Ferro', ingles: '+0.1 Iron Yield' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.15 Ferro', ingles: '+0.15 Iron Yield' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.2 Ferro', ingles: '+0.2 Iron Yield' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Iron'],
                    buff: [0.1, 0.15, 0.2],
                },
            ],
        },
        {
            idName: 'speedMiner',
            name: 'Speed Miner',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-20% no tempo de recuperação das pedras.', ingles: '-20% in stone recovery time.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-25% no tempo de recuperação das pedras.', ingles: '-25% in stone recovery time.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-30% no tempo de recuperação das pedras.', ingles: '-30% in stone recovery time.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Stone'],
                    buff: [0.8, 0.75, 0.7],
                },
            ],
        },
        {
            idName: 'tapProspector',
            name: 'Tap Prospector',
            nivelAtual: 0,
            maxLevel: 1,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '1 toque em pequenos minerais (pedra, ferro, ouro)', ingles: '1 hit on small minerals (stone, iron, gold)' } },
            ],
            conforto: [
                {
                    sinal: '',
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                    buff: ['', '', ''],
                },
            ],
        },
        {
            idName: 'forgeWardProfits',
            name: 'Forge-Ward Profits',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+20% na receita nas entregas do Ferreiro.', ingles: '+20% revenue on deliveries to the Blacksmith.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+30% na receita nas entregas do Ferreiro.', ingles: '+30% revenue on deliveries to the Blacksmith.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+40% na receita nas entregas do Ferreiro.', ingles: '+40% revenue on deliveries to the Blacksmith.' } },
            ],
            delivery: [
                {
                    sinal: 'x',
                    recursoAfetado: [''],
                    buff: [1.2, 1.3, 1.4],
                },
            ],
        },
    ],
    tier2: [
        {
            idName: 'ironHustle',
            name: 'Iron Hustle',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-30% no tempo de recuperação de ferro.', ingles: '-30% in iron recovery time.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-35% no tempo de recuperação de ferro.', ingles: '-35% in iron recovery time.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-40% no tempo de recuperação de ferro.', ingles: '-40% in iron recovery time.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Iron'],
                    buff: [0.7, 0.65, 0.6],
                },
            ],
        },
        {
            idName: 'frugalMiner',
            name: 'Frugal Miner',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-20% de custo em coin da picareta.', ingles: '-20% in pickaxe coin cost.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-30% de custo em coin da picareta.', ingles: '-30% in pickaxe coin cost.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-40% de custo em coin da picareta.', ingles: '-40% in pickaxe coin cost.' } },
            ],
            coins: [
                {
                    sinal: 'xC',
                    recursoAfetado: ['Pickaxe', 'Stone Pickaxe', 'Iron Pickaxe', 'Gold Pickaxe'],
                    buff: [0.8, 0.7, 0.6],
                },
            ],
        },
        {
            idName: 'rockyFavor',
            name: 'Rocky Favor',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+1 no rendimento de pedras, -0,5 no rendimento de ferro.', ingles: '+1 in stone yield, -0.5 in iron yield.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+1.4 no rendimento de pedras, -0,6 no rendimento de ferro.', ingles: '+1.4 in stone yield, -0.6 in iron yield.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+1.8 no rendimento de pedras, -0,7 no rendimento de ferro.', ingles: '+1.8 in stone yield, -0.7 in iron yield.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Stone'],
                    buff: [1, 1.4, 1.8],
                },
                {
                    sinal: '-',
                    recursoAfetado: ['Iron'],
                    buff: [0.5, 0.6, 0.7],
                },
            ],
        },
        {
            idName: 'fireKissed',
            name: 'Fire Kissed',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+1 no rendimento de Crimstone no 5º dia consecutivo.', ingles: '+1 in Crimstone yield on the 5th consecutive day.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+1.35 no rendimento de Crimstone no 5º dia consecutivo.', ingles: '+1.35 in Crimstone yield on the 5th consecutive day.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+1.75 no rendimento de Crimstone no 5º dia consecutivo.', ingles: '+1.75 in Crimstone yield on the 5th consecutive day.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Crimstone'],
                    buff: [0.2, 0.27, 0.35],
                },
            ],
        },
        {
            idName: 'midasSprint',
            name: 'Midas Sprint',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-10% no tempo de recuperação do ouro.', ingles: '-10% in gold recovery time.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-12.5% no tempo de recuperação do ouro.', ingles: '-12.5% in gold recovery time.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-15% no tempo de recuperação do ouro.', ingles: '-15% in gold recovery time.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Gold'],
                    buff: [0.9, 0.875, 0.85],
                },
            ],
        },
    ],
    tier3: [
        {
            idName: 'ferrousFavor',
            name: 'Ferrous Favor',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+1 no rendimento de ferro, -0,5 no rendimento de pedras.', ingles: '+1 in iron yield, -0.5 in stone yield.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+1.5 no rendimento de ferro, -0,6 no rendimento de pedras.', ingles: '+1.5 in iron yield, -0.6 in stone yield.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+2 no rendimento de ferro, -0,7 no rendimento de pedras.', ingles: '+2 in iron yield, -0.7 in stone yield.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Iron'],
                    buff: [1, 1.5, 2],
                },
                {
                    sinal: '-',
                    recursoAfetado: ['Stone'],
                    buff: [0.5, 0.6, 0.7],
                },
            ],
        },
        {
            idName: 'goldenTouch',
            name: 'Golden Touch',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+0.5 Ouro', ingles: '+0.5 Gold Yield' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+0.75 Ouro', ingles: '+0.75 Gold Yield' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+1 Ouro', ingles: '+1 Gold Yield' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Gold'],
                    buff: [0.5, 0.75, 1],
                },
            ],
        },
        {
            idName: 'morePicks',
            name: 'More Picks',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: 'Estoque aumentado: +70 Pickaxe, +20 Stone Pickaxe, +7 Iron Pickaxe, +2 Gold Pickaxe', ingles: 'Increased stock: +70 Pickaxe, +20 Stone Pickaxe, +7 Iron Pickaxe, +2 Gold Pickaxe' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Estoque aumentado: +140 Pickaxe, +40 Stone Pickaxe, +14 Iron Pickaxe, +4 Gold Pickaxe', ingles: 'Increased stock: +140 Pickaxe, +40 Stone Pickaxe, +14 Iron Pickaxe, +4 Gold Pickaxe' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Estoque aumentado: +280 Pickaxe, +80 Stone Pickaxe, +28 Iron Pickaxe, +8 Gold Pickaxe', ingles: 'Increased stock: +280 Pickaxe, +80 Stone Pickaxe, +28 Iron Pickaxe, +8 Gold Pickaxe' } },
            ],
            estoque: [
                {
                    sinal: '+',
                    recursoAfetado: ['Pickaxe'],
                    buff: [70, 140, 280],
                },
                {
                    sinal: '+',
                    recursoAfetado: ['Stone Pickaxe'],
                    buff: [20, 40, 80],
                },
                {
                    sinal: '+',
                    recursoAfetado: ['Iron Pickaxe'],
                    buff: [7, 14, 28],
                },
                {
                    sinal: '+',
                    recursoAfetado: ['Gold Pickaxe'],
                    buff: [2, 4, 8],
                },
            ],
        },
        {
            idName: 'firesideAlchemist',
            name: 'Fireside Alchemist',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '-15% no tempo de recuperação de Crimstone.', ingles: '-15% in Crimstone recovery time.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-25% no tempo de recuperação de Crimstone.', ingles: '-25% in Crimstone recovery time.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-40% no tempo de recuperação de Crimstone.', ingles: '-40% in Crimstone recovery time.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Crimstone'],
                    buff: [0.85, 0.75, 0.6],
                },
            ],
        },
        {
            idName: 'midasRush',
            name: 'Midas Rush',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '-20% no tempo de recuperação do ouro.', ingles: '-20% in gold recovery time.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-25% no tempo de recuperação do ouro.', ingles: '-25% in gold recovery time.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-30% no tempo de recuperação do ouro.', ingles: '-30% in gold recovery time.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Gold'],
                    buff: [0.8, 0.75, 0.7],
                },
            ],
        },
    ]
};

//============================================================================================================================================================================
//Ajustado, ver dps o da lã
let skillsMachinery = {
    tier1: [
        {
            idName: 'cropExtensionModuleI',
            name: 'Crop Extension Module I',
            nivelAtual: 0,
            maxLevel: 1,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Permitir que sementes de Rhubarb e Zucchini sejam usadas na CM.', ingles: 'Allow Rhubarb and Zucchini seeds to be used in the CM.' } },
            ],
            permissao: [
                {
                    sinal: '',
                    recursoAfetado: ['Rhubarb', 'Zucchini'],
                    buff: [''],
                },
            ],
        },
        {
            idName: 'cropProcessorUnit',
            name: 'Crop Processor Unit',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-5% no tempo de crescimento da CM, +10% no consumo de Oil.', ingles: '-5% in CM growth time, +10% in Oil consumption.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-10% no tempo de crescimento da CM, +15% no consumo de Oil.', ingles: '-10% in CM growth time, +15% in Oil consumption.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-15% no tempo de crescimento da CM, +20% no consumo de Oil.', ingles: '-15% in CM growth time, +20% in Oil consumption.' } },
            ],
            tempo: [
                {
                    sinal: 'xCM',
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli'],
                    buff: [0.95, 0.9, 0.85],
                },
            ],
            oilCM: [
                {
                    sinal: '+',
                    recursoAfetado: ['Oil'],
                    buff: [0.1, 0.15, 0.2],
                },
            ],
        },
        {
            idName: 'oilGadget',
            name: 'Oil Gadget',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-10% no consumo de Oil.', ingles: '-10% in Oil consumption.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-15% no consumo de Oil.', ingles: '-15% in Oil consumption.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-20% no consumo de Oil.', ingles: '-20% in Oil consumption.' } },
            ],
            oilCM: [
                {
                    sinal: '-',
                    recursoAfetado: ['Oil'],
                    buff: [0.1, 0.15, 0.2],
                },
            ],
        },
        {
            idName: 'oilExtraction',
            name: 'Oil Extraction',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+1 Oil ao coletar das reservas.', ingles: '+1 Oil when collecting from reserves.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+1.5 Oil ao coletar das reservas.', ingles: '+1.5 Oil when collecting from reserves.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+2 Oil ao coletar das reservas.', ingles: '+2 Oil when collecting from reserves.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Oil'],
                    buff: [1, 1.5, 2],
                },
            ],
        },
        {
            idName: 'leakProofTank',
            name: 'Leak-Proof Tank',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '3x na capacidade do tanque de Oil da Crop Machine', ingles: '3x oil tank capacity in crop machine' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '4x na capacidade do tanque de Oil da Crop Machine', ingles: '4x oil tank capacity in crop machine' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '5x na capacidade do tanque de Oil da Crop Machine', ingles: '5x oil tank capacity in crop machine' } },
            ],
            conforto: [
                {
                    sinal: '',
                    recursoAfetado: ['Oil'],
                    buff: ['', '', ''],
                },
            ],
        },
    ],
    tier2: [
        {
            idName: 'cropExtensionModuleII',
            name: 'Crop Extension Module II',
            nivelAtual: 0,
            maxLevel: 1,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: 'Permitir que sementes de Cenoura e Repolho sejam usadas na CM.', ingles: 'Allow Carrot and Cabbage seeds to be used in the CM.' } },
            ],
            permissao: [
                {
                    sinal: '',
                    recursoAfetado: ['Carrot', 'Cabbage'],
                    buff: [''],
                },
            ],
        },
        {
            idName: 'cropExtensionModuleIII',
            name: 'Crop Extension Module III',
            nivelAtual: 0,
            maxLevel: 1,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: 'Permitir que sementes de Yam e Broccoli sejam usadas na CM.', ingles: 'Allow Yam and Broccoli seeds to be used in the CM.' } },
            ],
            permissao: [
                {
                    sinal: '',
                    recursoAfetado: ['Yam', 'Broccoli'],
                    buff: [''],
                },
            ],
        },
        {
            idName: 'rapidRig',
            name: 'Rapid Rig',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-20% no tempo de crescimento da CM, +40% no consumo de Oil.', ingles: '-20% in CM growth time, +40% in Oil consumption.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-30% no tempo de crescimento da CM, +50% no consumo de Oil.', ingles: '-30% in CM growth time, +50% in Oil consumption.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-40% no tempo de crescimento da CM, +60% no consumo de Oil.', ingles: '-40% in CM growth time, +60% in Oil consumption.' } },
            ],
            tempo: [
                {
                    sinal: 'xCM',
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli'],
                    buff: [0.8, 0.7, 0.6],
                },
            ],
            oilCM: [
                {
                    sinal: '+',
                    recursoAfetado: ['Oil'],
                    buff: [0.4, 0.5, 0.6],
                },
            ],
        },
        {
            idName: 'oilBeBack',
            name: 'Oil Be Back',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-20% no tempo de reabastecimento do Oil.', ingles: '-20% in Oil refilling time.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-30% no tempo de reabastecimento do Oil.', ingles: '-30% in Oil refilling time.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-40% no tempo de reabastecimento do Oil.', ingles: '-40% in Oil refilling time.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Oil'],
                    buff: [0.8, 0.7, 0.6],
                },
            ],
        },
        {
            idName: 'oilRig',
            name: 'Oil Rig',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: 'A broca de petróleo requer 20 lãs em vez de couro para ser fabricada', ingles: 'Oil Drill requires 20 Wool instead of Leather to craft' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'A broca de petróleo requer 15 lãs em vez de couro para ser fabricada', ingles: 'Oil Drill requires 15 Wool instead of Leather to craft' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'A broca de petróleo requer 10 lãs em vez de couro para ser fabricada', ingles: 'Oil Drill requires 10 Wool instead of Leather to craft' } },
            ],
            troca: [
                {
                    sinal: '+',
                    recursoAfetado: ['Oil Drill'],
                    buff: [20, 15, 10],
                },
            ],
        },
    ],
    tier3: [
        {
            idName: 'fieldExpansionModule',
            name: 'Field Expansion Module',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+5 pacotes adicionados à máquina.', ingles: '+5 packages added to the machine.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+7 pacotes adicionados à máquina.', ingles: '+7 packages added to the machine.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+10 pacotes adicionados à máquina.', ingles: '+10 packages added to the machine.' } },
            ],
            espaco: [
                {
                    sinal: '',
                    recursoAfetado: ['CM'],
                    buff: [5, 7, 10],
                },
            ],
        },
        {
            idName: 'fieldExtensionModule',
            name: 'Field Extension Module',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+5 plots adicionados à máquina.', ingles: '+5 plots added to the machine.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+7 plots adicionados à máquina.', ingles: '+7 plots added to the machine.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+10 plots adicionados à máquina.', ingles: '+10 plots added to the machine.' } },
            ],
            plotsCM: [
                {
                    sinal: '+',
                    recursoAfetado: [''],
                    buff: [5, 7, 10],
                },
            ],
        },
        {
            idName: 'efficiencyExtensionModule',
            name: 'Efficiency Extension Module',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '-30% no consumo de Oil.', ingles: '-30% in Oil consumption.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-40% no consumo de Oil.', ingles: '-40% in Oil consumption.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-50% no consumo de Oil.', ingles: '-50% in Oil consumption.' } },
            ],
            oilCM: [
                {
                    sinal: '-',
                    recursoAfetado: ['Oil'],
                    buff: [0.3, 0.4, 0.5],
                },
            ],
        },
        {
            idName: 'greaseLightning',
            name: 'Grease Lightning',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: 'Habilidade de fazer poços de Oil vazios se reabastecerem instantaneamente (Recarga: 4d)', ingles: 'Ability to make empty oil wells instantly refill (4d Cooldown)' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de fazer poços de Oil vazios se reabastecerem instantaneamente (Recarga: 3d 12h)', ingles: 'Ability to make empty oil wells instantly refill (3d 12h Cooldown)' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de fazer poços de Oil vazios se reabastecerem instantaneamente (Recarga: 3d)', ingles: 'Ability to make empty oil wells instantly refill (3d Cooldown)' } },
            ],
            reset: [
                {
                    sinal: '',
                    recursoAfetado: ['Oil'],
                    buff: ['', '', ''],
                },
            ],
        },
    ]
};

//============================================================================================================================================================================
//Ajustado
let skillsGreenhouse = {
    tier1: [
        {
            idName: 'glassRoom',
            name: 'Glass Room',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0,1 no rendimento na produção da greenhouse.', ingles: '+0.1 in greenhouse production yield.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0,15 no rendimento na produção da greenhouse.', ingles: '+0.15 in greenhouse production yield.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0,2 no rendimento na produção da greenhouse.', ingles: '+0.2 in greenhouse production yield.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                    buff: [0.1, 0.15, 0.2],
                },
            ],
        },
        {
            idName: 'seedyBusiness',
            name: 'Seedy Business',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-15% no custo das sementes da greenhouse.', ingles: '-15% in the cost of greenhouse seeds.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-20% no custo das sementes da greenhouse.', ingles: '-20% in the cost of greenhouse seeds.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-25% no custo das sementes da greenhouse.', ingles: '-25% in the cost of greenhouse seeds.' } },
            ],
            coins: [
                {
                    sinal: 'xC',
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                    buff: [0.85, 0.8, 0.75],
                },
            ],
        },
        {
            idName: 'riceAndShine',
            name: 'Rice and Shine',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-5% no tempo de crescimento dos produtos da greenhouse.', ingles: '-5% in the growth time of greenhouse products.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-6% no tempo de crescimento dos produtos da greenhouse.', ingles: '-6% in the growth time of greenhouse products.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-7.5% no tempo de crescimento dos produtos da greenhouse.', ingles: '-7.5% in the growth time of greenhouse products.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                    buff: [0.95, 0.94, 0.925],
                },
            ],
        },
        {
            idName: 'VictoriasSecretary',
            name: 'Victoria\'s Secretary',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+50% em coins nas entregas da Victoria.', ingles: '+50% in coins on Victoria\'s deliveries.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+75% em coins nas entregas da Victoria.', ingles: '+75% in coins on Victoria\'s deliveries.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+100% em coins nas entregas da Victoria.', ingles: '+100% in coins on Victoria\'s deliveries.' } },
            ],
            delivery: [
                {
                    sinal: 'x',
                    recursoAfetado: [''],
                    buff: [1.5, 1.75, 2],
                },
            ],
        },
    ],
    tier2: [
        {
            idName: 'oliveExpress',
            name: 'Olive Express',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-10% no tempo de crescimento das Olives.', ingles: '-10% in the growth time of olives.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-15% no tempo de crescimento das Olives.', ingles: '-15% in the growth time of olives.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-20% no tempo de crescimento das Olives.', ingles: '-20% in the growth time of olives.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Olive'],
                    buff: [0.9, 0.85, 0.8],
                },
            ],
        },
        {
            idName: 'riceRocket',
            name: 'Rice Rocket',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-10% no tempo de crescimento da Rice.', ingles: '-10% in the growth time of rice.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-15% no tempo de crescimento da Rice.', ingles: '-15% in the growth time of rice.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-20% no tempo de crescimento da Rice.', ingles: '-20% in the growth time of rice.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Rice'],
                    buff: [0.9, 0.85, 0.8],
                },
            ],
        },
        {
            idName: 'vineVelocity',
            name: 'Vine Velocity',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-10% no tempo de crescimento das Grapes.', ingles: '-10% in the growth time of grapes.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-15% no tempo de crescimento das Grapes.', ingles: '-15% in the growth time of grapes.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-20% no tempo de crescimento das Grapes.', ingles: '-20% in the growth time of grapes.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Grape'],
                    buff: [0.9, 0.85, 0.8],
                },
            ],
        },
        {
            idName: 'seededBounty',
            name: 'Seeded Bounty',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+0,5 no rendimento da produção da GH, +1 semente de estufa para plantar.', ingles: '+0.5 in GH production yield, +1 greenhouse seed to plant.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+0,75 no rendimento da produção da GH, +1 semente de estufa para plantar.', ingles: '+0.75 in GH production yield, +1 greenhouse seed to plant.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+1 no rendimento da produção da GH, +1 semente de estufa para plantar.', ingles: '+1 in GH production yield, +1 greenhouse seed to plant.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                    buff: [0.5, 0.75, 1],
                },
                {
                    sinal: '+S',
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                    buff: [1, 1, 1],
                },
            ],
        },
    ],
    tier3: [
        {
            idName: 'greenhouseGuru',
            name: 'Greenhouse Guru',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: 'Habilidade de tornar todos os produtos da estufa em crescimento prontos para colheita (Recarga: 4d).', ingles: 'Ability to make all greenhouse produce currently growing ready to be harvested (4d Cooldown)' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de tornar todos os produtos da estufa em crescimento prontos para colheita (Recarga: 3d 12h).', ingles: 'Ability to make all greenhouse produce currently growing ready to be harvested (3d 12h Cooldown)' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de tornar todos os produtos da estufa em crescimento prontos para colheita (Recarga: 3d).', ingles: 'Ability to make all greenhouse produce currently growing ready to be harvested (3d Cooldown)' } },
            ],
            reset: [
                {
                    sinal: '',
                    recursoAfetado: [''],
                    buff: ['', '', ''],
                },
            ],
        },
        {
            idName: 'greenhouseGamble',
            name: 'Greenhouse Gamble',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '30% de chance de +1 na produção da GH.', ingles: '30% chance of +1 in GH production.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '40% de chance de +1 na produção da GH.', ingles: '40% chance of +1 in GH production.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '50% de chance de +1 na produção da GH.', ingles: '50% chance of +1 in GH production.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                    buff: [0.30, 0.4, 0.5],
                },
            ],
        },
        {
            idName: 'slickSaver',
            name: 'Slick Saver',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '-1 Oil para cultivar produtos da GH.', ingles: '-1 Oil to cultivate GH products.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-1.5 Oil para cultivar produtos da GH.', ingles: '-1.5 Oil to cultivate GH products.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-2 Oil para cultivar produtos da GH.', ingles: '-2 Oil to cultivate GH products.' } },
            ],
            oilGH: [
                {
                    sinal: '-',
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                    buff: [1, 1.5, 2],
                },
            ],
        },
        {
            idName: 'greasyPlants',
            name: 'Greasy Plants',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+1 no rendimento na produção da GH, +100% no consumo de Oil.', ingles: '+1 in GH production yield, +100% in Oil consumption.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+1.5 no rendimento na produção da GH, +200% no consumo de Oil.', ingles: '+1.5 in GH production yield, +200% in Oil consumption.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+2 no rendimento na produção da GH, +300% no consumo de Oil.', ingles: '+2 in GH production yield, +300% in Oil consumption.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                    buff: [1, 1.5, 2],
                },
            ],
            oilGH: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                    buff: [2, 3, 4],
                },
            ],
        },
    ]
};

//============================================================================================================================================================================
//Ajustado, rever questao da kale mix, efeito da bale tbm
let skillsAnimais = {
    tier1: [
        {
            idName: 'efficientFeeding',
            name: 'Efficient Feeding',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-5% na ração para alimentar todos os animais.', ingles: '-5% feed required to feed all animals.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-6% na ração para alimentar todos os animais.', ingles: '-6% feed required to feed all animals.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-7.5% na ração para alimentar todos os animais.', ingles: '-7.5% feed required to feed all animals.' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['galinha', 'vaca', 'ovelha'],
                    buff: [0.95, 0.94, 0.925],
                },
            ],
        },
        {
            idName: 'restlessAnimals',
            name: 'Restless Animals',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-10% no tempo de sono dos animais.', ingles: '-10% animal sleep time.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-15% no tempo de sono dos animais.', ingles: '-15% animal sleep time.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-20% no tempo de sono dos animais.', ingles: '-20% animal sleep time.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['galinha', 'vaca', 'ovelha'],
                    buff: [0.9, 0.85, 0.8],
                },
            ],
        },
        {
            idName: 'fineFibers',
            name: 'Fine Fibers',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0,1 no rendimento de penas, couro e lã Merino.', ingles: '+0.1 yield to feathers, leather, and merino wool.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0,15 no rendimento de penas, couro e lã Merino.', ingles: '+0.15 yield to feathers, leather, and merino wool.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0,2 no rendimento de penas, couro e lã Merino.', ingles: '+0.2 yield to feathers, leather, and merino wool.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['feather', 'leather', 'merinoWool'],
                    buff: [0.1, 0.15, 0.2],
                },
            ],
        },
        {
            idName: 'bountifulBounties',
            name: 'Bountiful Bounties',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+50% em coins por Recompensas de Animais.', ingles: '+50% coins from Animal Rewards.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+75% em coins por Recompensas de Animais.', ingles: '+75% coins from Animal Rewards.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+100% em coins por Recompensas de Animais.', ingles: '+100% coins from Animal Rewards.' } },
            ],
            coins: [
                {
                    sinal: 'xV',
                    recursoAfetado: ['galinha', 'vaca', 'ovelha'],
                    buff: [1.5, 1.75, 2],
                },
            ],
        },
        {
            idName: 'doubleBale',
            name: 'Double Bale',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '2x o Efeito da Bale.', ingles: '2x Bale\'s Effect' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '2,5x o Efeito da Bale.', ingles: '2.5x Bale\'s Effect' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '3x o Efeito da Bale.', ingles: '3x Bale\'s Effect' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Bale'],
                    buff: [2, 2.5, 3],
                },
            ],
        },
        {
            idName: 'baleEconomy',
            name: 'Bale Economy',
            nivelAtual: 0,
            maxLevel: 1,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'A Bale afeta a produção de leite e lã.', ingles: 'Bale also affects milk and wool production.' } },
            ],
            permissao: [
                {
                    sinal: '',
                    recursoAfetado: ['milk', 'wool'],
                    buff: [''],
                },
            ],
        },
        {
            idName: 'featherweight',
            name: 'Featherweight',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0,35 rendimento de Pena, -0,1 rendimento de Couro & Lã Merino.', ingles: '+0.35 feather yield, -0.1 leather & merino wool yield.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0,45 rendimento de Pena, -0,15 rendimento de Couro & Lã Merino.', ingles: '+0.45 feather yield, -0.15 leather & merino wool yield.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0,55 rendimento de Pena, -0,2 rendimento de Couro & Lã Merino.', ingles: '+0.55 feather yield, -0.2 leather & merino wool yield.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['feather'],
                    buff: [0.35, 0.45, 0.55],
                },
                {
                    sinal: '-',
                    recursoAfetado: ['leather', 'merinoWool'],
                    buff: [0.1, 0.15, 0.2],
                }
            ],
        },
    ],
    tier2: [
        {
            idName: 'abundantHarvest',
            name: 'Abundant Harvest',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+0,2 no rendimento de ovos, lã e leite.', ingles: '+0.2 yield to eggs, wool, and milk.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+0,35 no rendimento de ovos, lã e leite.', ingles: '+0.35 yield to eggs, wool, and milk.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+0,5 no rendimento de ovos, lã e leite.', ingles: '+0.5 yield to eggs, wool, and milk.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['egg', 'milk', 'wool'],
                    buff: [0.2, 0.35, 0.5],
                },
            ],
        },
        {
            idName: 'heartwarmingInstruments',
            name: 'Heartwarming Instruments',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+50% de experiência animal a partir das ferramentas de Afeto Animal.', ingles: '+50% animal experience from Animal Affection tools.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+60% de experiência animal a partir das ferramentas de Afeto Animal.', ingles: '+60% animal experience from Animal Affection tools.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+70% de experiência animal a partir das ferramentas de Afeto Animal.', ingles: '+70% animal experience from Animal Affection tools.' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Petting Hand', 'Brush', 'Music Box'],
                    buff: [1.5, 1.6, 1.7],
                },
            ],
        },
        {
            idName: 'kaleMix2',
            name: 'Kale Mix',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: 'Mixed Grain requer 3 couves para misturar.', ingles: 'Mixed Grain - requires 3 kale to mix instead' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'Mixed Grain requer 2,5 couves para misturar.', ingles: 'Mixed Grain - requires 2.5 kale to mix instead' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'Mixed Grain requer 2 couves para misturar.', ingles: 'Mixed Grain - requires 2 kale to mix instead' } },
            ],
            troca: [
                {
                    sinal: '',
                    recursoAfetado: ['Mixed Grain'],
                    buff: ['Kale'],
                },
            ],
        },
        {
            idName: 'alternateMedicine',
            name: 'Alternate Medicine',
            nivelAtual: 0,
            maxLevel: 1,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: 'Remédio requer 1 limão e mel a menos para misturar.', ingles: 'Medicine requires 1 less lemon and honey to craft.' } },
            ],
            quantidade: [
                {
                    sinal: '-',
                    recursoAfetado: ['Lemon', 'Honey'],
                    buff: [1],
                },
            ],
        },
        {
            idName: 'healthyLivestock',
            name: 'Healthy Livestock',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-50% de chance de doença.', ingles: '-50% chance of disease.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-50% de chance de doença, -50% de chance de se espalhar.', ingles: '-50% chance of disease, -50% chance of it spreading' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-50% de chance de doença, -99% de chance de se espalhar.', ingles: '-50% chance of disease, -99% chance of it spreading' } },
            ],
            rng: [
                {
                    sinal: 'x',
                    recursoAfetado: [],
                    buff: [0.5, 0.5, 0.5],
                },
            ],
        },
        {
            idName: 'merinoWhisperer',
            name: 'Merino Whisperer',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+0,35 rendimento de Lã Merino, -0,1 rendimento de Couro & Pena.', ingles: '+0.35 merino wool yield, -0.1 leather & feather yield.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+0,6 rendimento de Lã Merino, -0,15 rendimento de Couro & Pena.', ingles: '+0.6 merino wool yield, -0.15 leather & feather yield.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+0,9 rendimento de Lã Merino, -0,2 rendimento de Couro & Pena.', ingles: '+0.9 merino wool yield, -0.2 leather & feather yield.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['merinoWool'],
                    buff: [0.35, 0.6, 0.9],
                },
                {
                    sinal: '-',
                    recursoAfetado: ['leather', 'feather'],
                    buff: [0.1, 0.15, 0.2],
                }
            ],
        },
    ],
    tier3: [
        {
            idName: 'cluckyGrazing',
            name: 'Clucky Grazing',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '-25% de ração para alimentar galinhas, +50% de ração para alimentar outros animais.', ingles: '-25% feed required to feed chickens, +50% feed required to feed other animals.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-35% de ração para alimentar galinhas, +55% de ração para alimentar outros animais.', ingles: '-35% feed required to feed chickens, +55% feed required to feed other animals.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-50% de ração para alimentar galinhas, +65% de ração para alimentar outros animais.', ingles: '-50% feed required to feed chickens, +65% feed required to feed other animals.' } },
            ],
            quantidade: [
                {
                    sinal: 'x-',
                    recursoAfetado: ['galinha'],
                    buff: [0.75, 0.65, 0.5],
                },
                {
                    sinal: 'x+',
                    recursoAfetado: ['vaca', 'ovelha'],
                    buff: [1.5, 1.55, 1.65],
                }
            ],
        },
        {
            idName: 'sheepwiseDiet',
            name: 'Sheepwise Diet',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '-25% de ração para alimentar ovelhas, +50% de ração para alimentar outros animais.', ingles: '-25% feed required to feed sheep, +50% feed required to feed other animals.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-35% de ração para alimentar ovelhas, +55% de ração para alimentar outros animais.', ingles: '-35% feed required to feed sheep, +55% feed required to feed other animals.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-50% de ração para alimentar ovelhas, +65% de ração para alimentar outros animais.', ingles: '-50% feed required to feed sheep, +65% feed required to feed other animals.' } },
            ],
            quantidade: [
                {
                    sinal: 'x-',
                    recursoAfetado: ['ovelha'],
                    buff: [0.75, 0.65, 0.5],
                },
                {
                    sinal: 'x+',
                    recursoAfetado: ['vaca', 'galinha'],
                    buff: [1.5, 1.55, 1.65],
                }
            ],
        },
        {
            idName: 'cow-SmartNutrition',
            name: 'Cow-Smart Nutrition',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '-25% de ração para alimentar vacas, +50% de ração para alimentar outros animais.', ingles: '-25% feed required to feed cows, +50% feed required to feed other animals.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-35% de ração para alimentar vacas, +55% de ração para alimentar outros animais.', ingles: '-35% feed required to feed cows, +55% feed required to feed other animals.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-50% de ração para alimentar vacas, +65% de ração para alimentar outros animais.', ingles: '-50% feed required to feed cows, +65% feed required to feed other animals.' } },
            ],
            quantidade: [
                {
                    sinal: 'x-',
                    recursoAfetado: ['vaca'],
                    buff: [0.75, 0.65, 0.5],
                },
                {
                    sinal: 'x+',
                    recursoAfetado: ['ovelha', 'galinha'],
                    buff: [1.5, 1.55, 1.65],
                }
            ],
        },
        {
            idName: 'chonkyFeed',
            name: 'Chonky Feed',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '2x de experiência animal a partir da alimentação, +50% de ração para alimentar todos os animais.', ingles: '2x animal experience from feeding, +50% feed required to feed all animals.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '2.5x de experiência animal a partir da alimentação, +75% de ração para alimentar todos os animais.', ingles: '2.5x animal experience from feeding, +75% feed required to feed all animals.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '3x de experiência animal a partir da alimentação, +100% de ração para alimentar todos os animais.', ingles: '3x animal experience from feeding, +100% feed required to feed all animals.' } },
            ],
            quantidade: [
                {
                    sinal: '',
                    recursoAfetado: ['galinha', 'vaca', 'ovelha'],
                    buff: [2, 2.5, 3],
                },
                {
                    sinal: 'x+',
                    recursoAfetado: ['galinha', 'vaca', 'ovelha'],
                    buff: [1.5, 1.75, 2],
                }
            ],
        },
        {
            idName: 'leathercraftMastery',
            name: 'Leathercraft Mastery',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+0,35 rendimento de Couro, -0,1 rendimento de Pena & Lã Merino.', ingles: '+0.35 leather yield, -0.1 feather & merino wool yield.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+0,6 rendimento de Couro, -0,15 rendimento de Pena & Lã Merino.', ingles: '+0.6 leather yield, -0.15 feather & merino wool yield.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+0,8 rendimento de Couro, -0,2 rendimento de Pena & Lã Merino.', ingles: '+0.8 leather yield, -0.2 feather & merino wool yield.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['leather'],
                    buff: [0.35, 0.6, 0.8],
                },
                {
                    sinal: '-',
                    recursoAfetado: ['feather', 'merinoWool'],
                    buff: [0.1, 0.15, 0.2],
                }
            ],
        },
        {
            idName: 'barnyardRouse',
            name: 'Barnyard Rouse',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: 'Acorda instantaneamente todos os animais (Recarga: 5d).', ingles: 'Instantly wakes up all animals (5d Cooldown)' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Acorda instantaneamente todos os animais (Recarga: 4d).', ingles: 'Instantly wakes up all animals (4d Cooldown)' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Acorda instantaneamente todos os animais (Recarga: 3d 12h).', ingles: 'Instantly wakes up all animals (3d 12h Cooldown)' } },
            ],
            insta: [
                {
                    sinal: '',
                    recursoAfetado: [''],
                    buff: ['', '', ''],
                },
            ],
        }, 
    ]
};

//============================================================================================================================================================================
//Ajustado
let skillsFishing = {
    tier1: [
        {
            idName: 'fishermans5Fold',
            name: 'Fisherman\'s 5 Fold',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+5 tentativas de pesca diárias', ingles: '+5 daily fishing reels' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+7 tentativas de pesca diárias', ingles: '+7 daily fishing reels' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+10 tentativas de pesca diárias', ingles: '+10 daily fishing reels' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['fishing'],
                    buff: [5, 7, 10],
                },
            ],
        },
        {
            idName: 'fishyChance',
            name: 'Fishy Chance',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '10% de chance de obter +1 peixe básico.', ingles: '10% chance to get +1 basic fish.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '12.5% de chance de obter +1 peixe básico.', ingles: '12.5% chance to get +1 basic fish.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '15% de chance de obter +1 peixe básico.', ingles: '15% chance to get +1 basic fish.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['basic fish'],
                    buff: [0.1, 0.125, 0.15],
                },
            ],
        },
        {
            idName: 'fishyRoll',
            name: 'Fishy Roll',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '10% de chance de obter +1 peixe avançado.', ingles: '10% chance to get +1 advanced fish.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '12.5% de chance de obter +1 peixe avançado.', ingles: '12.5% chance to get +1 advanced fish.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '15% de chance de obter +1 peixe avançado.', ingles: '15% chance to get +1 advanced fish.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['advenced fish'],
                    buff: [0.1, 0.125, 0.15],
                },
            ],
        },
        {
            idName: 'reelDeal',
            name: 'Reel Deal',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-50% no custo de coins das varas.', ingles: '-50% rod coin cost' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-55% no custo de coins das varas.', ingles: '-55% rod coin cost' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-60% no custo de coins das varas.', ingles: '-60% rod coin cost' } },
            ],
            coins: [
                {
                    sinal: 'xC',
                    recursoAfetado: ['Rod'],
                    buff: [0.5, 0.45, 0.4],
                },
            ],
        },
    ],
    tier2: [
        {
            idName: 'fishermans10Fold',
            name: 'Fisherman\'s 10 Fold',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+10 tentativas de pesca diárias', ingles: '+10 daily fishing reels' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+18 tentativas de pesca diárias', ingles: '+18 daily fishing reels' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+25 tentativas de pesca diárias', ingles: '+25 daily fishing reels' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['fishing'],
                    buff: [10, 18, 25],
                },
            ],
        },
        {
            idName: 'fishyFortune',
            name: 'Fishy Fortune',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+100% de coins nas entregas da Corale.', ingles: '+100% coins from Corale\'s deliveries' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+125% de coins nas entregas da Corale.', ingles: '+125% coins from Corale\'s deliveries' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+150% de coins nas entregas da Corale.', ingles: '+150% coins from Corale\'s deliveries' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['delivery'],
                    buff: [2, 2.25, 2.5],
                },
            ],
        },
        {
            idName: 'fishyGamble',
            name: 'Fishy Gamble',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '20% de chance de obter +1 peixe especialista.', ingles: '20% chance of +1 expert fish' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '25% de chance de obter +1 peixe especialista.', ingles: '25% chance of +1 expert fish' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '30% de chance de obter +1 peixe especialista.', ingles: '30% chance of +1 expert fish' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['expert fish'],
                    buff: [0.2, 0.25, 0.3],
                },
            ],
        },
    ],
    tier3: [
        {
            idName: 'frenziedFish',
            name: 'Frenzied Fish',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: 'Durante o Frenesi de Pesca, +1 peixe e 50% de chance de +1 peixe adicional.', ingles: 'During fish frenzy, +1 fish and 50% chance of +1 fish' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Durante o Frenesi de Pesca, +2 peixes e 50% de chance de +1 peixe adicional.', ingles: 'During fish frenzy, +2 fish and 50% chance of +1 fish' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Durante o Frenesi de Pesca, +3 peixes.', ingles: 'During fish frenzy, +3 fish' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['fish'],
                    buff: [1.5, 2.5, 3],
                },
            ],
        },
        {
            idName: 'moreWithLess',
            name: 'More With Less',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+10 tentativas de pesca diárias.', ingles: '+10 daily fishing reels' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+25 tentativas de pesca diárias.', ingles: '+25 daily fishing reels' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+50 tentativas de pesca diárias.', ingles: '+50 daily fishing reels' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['fishing'],
                    buff: [10, 25, 50],
                },
            ],
        },
        {
            idName: 'fishyFeast',
            name: 'Fishy Feast',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+20% de XP do Bumpkin em peixes.', ingles: '+20% Bumpkin XP from Fish' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+30% de XP do Bumpkin em peixes.', ingles: '+30% Bumpkin XP from Fish' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+40% de XP do Bumpkin em peixes.', ingles: '+40% Bumpkin XP from Fish' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['xp'],
                    buff: [1.2, 1.3, 1.4],
                },
            ],
        },
    ]
};

//============================================================================================================================================================================
//Ajustado
let skillsCooking = {
    tier1: [
        {
            idName: 'fastFeasts',
            name: 'Fast Feasts',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-10% no tempo de preparo no Fire Pit e na Kitchen.', ingles: '-10% cooking time for Firepit and Kitchen.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-15% no tempo de preparo no Fire Pit e na Kitchen.', ingles: '-15% cooking time for Firepit and Kitchen.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-20% no tempo de preparo no Fire Pit e na Kitchen.', ingles: '-20% cooking time for Firepit and Kitchen.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['cooking'],
                    buff: [0.9, 0.85, 0.8],
                },
            ],
        },
        {
            idName: 'nomNom',
            name: 'Nom Nom',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+10% de receita nas entregas de comida.', ingles: '+10% in food delivery revenue.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+30% de receita nas entregas de comida.', ingles: '+30% in food delivery revenue.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+50% de receita nas entregas de comida.', ingles: '+50% in food delivery revenue.' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['delivery'],
                    buff: [1.1, 1.3, 1.5],
                },
            ],
        },
        {
            idName: 'munchingMastery',
            name: 'Munching Mastery',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+5% de XP do Bumpkin', ingles: '+5% Bumpkin XP' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+7.5% de XP do Bumpkin', ingles: '+7.5% Bumpkin XP' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+10% de XP do Bumpkin', ingles: '+10% Bumpkin XP' } },
            ],
            xp: [
                {
                    sinal: 'x',
                    recursoAfetado: ['xp'],
                    buff: [1.05, 1.075, 1.1],
                },
            ],
        },
        {
            idName: 'swiftSizzle',
            name: 'Swift Sizzle',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-40% no tempo de preparo no Fire Pit usando óleo.', ingles: '-40% Fire Pit cooking time with oil' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-45% no tempo de preparo no Fire Pit usando óleo.', ingles: '-45% Fire Pit cooking time with oil' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-50% no tempo de preparo no Fire Pit usando óleo.', ingles: '-50% Fire Pit cooking time with oil' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['firepit oil'],
                    buff: [0.6, 0.55, 0.5],
                },
            ],
        },
    ],
    tier2: [
        {
            idName: 'frostedCakes',
            name: 'Frosted Cakes',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-10% no tempo de preparo de bolos.', ingles: '-10% Cakes cooking time' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-20% no tempo de preparo de bolos.', ingles: '-20% Cakes cooking time' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-30% no tempo de preparo de bolos.', ingles: '-30% Cakes cooking time' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['cake'],
                    buff: [0.9, 0.8, 0.7],
                },
            ],
        },
        {
            idName: 'juicyBoost',
            name: 'Juicy Boost',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+10% de XP do Bumpkin ao preparar bebidas.', ingles: '+10% Bumpkin XP from drinks' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+20% de XP do Bumpkin ao preparar bebidas.', ingles: '+20% Bumpkin XP from drinks' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+30% de XP do Bumpkin ao preparar bebidas.', ingles: '+30% Bumpkin XP from drinks' } },
            ],
            xp: [
                {
                    sinal: 'x',
                    recursoAfetado: ['drink'],
                    buff: [1.1, 1.2, 1.3],
                },
            ],
        },
        {
            idName: 'turboFry',
            name: 'Turbo Fry',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-50% no tempo de preparo na cozinha usando óleo.', ingles: '-50% Kitchen cooking time with oil' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-55% no tempo de preparo na cozinha usando óleo.', ingles: '-55% Kitchen cooking time with oil' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-60% no tempo de preparo na cozinha usando óleo.', ingles: '-60% Kitchen cooking time with oil' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['kitchen oil'],
                    buff: [0.5, 0.45, 0.4],
                },
            ],
        },
        {
            idName: 'drive-ThroughDeli',
            name: 'Drive-Through Deli',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+15% de XP do Bumpkin ao preparar no Deli.', ingles: '+15% Bumpkin XP from Deli' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+20% de XP do Bumpkin ao preparar no Deli.', ingles: '+20% Bumpkin XP from Deli' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+25% de XP do Bumpkin ao preparar no Deli.', ingles: '+25% Bumpkin XP from Deli' } },
            ],
            xp: [
                {
                    sinal: 'x',
                    recursoAfetado: ['deli'],
                    buff: [1.15, 1.2, 1.25],
                },
            ],
        },
    ],
    tier3: [
        {
            idName: 'instantGratification',
            name: 'Instant Gratification',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: 'Habilidade de tornar todas as comidas em preparo prontas para consumo (Recarga: 4d).', ingles: 'Ability to make all meals currently cooking ready to be eaten (4d Cooldown)' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de tornar todas as comidas em preparo prontas para consumo (Recarga: 3d 12h).', ingles: 'Ability to make all meals currently cooking ready to be eaten (3d 12h Cooldown)' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de tornar todas as comidas em preparo prontas para consumo (Recarga: 3d).', ingles: 'Ability to make all meals currently cooking ready to be eaten (3d Cooldown)' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['cooking'],
                    buff: [1, 1, 1], // Como é instantâneo, o tempo não altera o buff padrão, a lógica é de 'reset'
                },
            ],
        },
        {
            idName: 'doubleNom',
            name: 'Double Nom',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+1 comida ao cozinhar<br>2x ingredientes necessários.', ingles: '+1 food from cooking<br>2x ingredients required for cooking' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+2 comidas ao cozinhar<br>3x ingredientes necessários.', ingles: '+2 food from cooking<br>3x ingredients required for cooking' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+3 comidas ao cozinhar<br>4x ingredientes necessários.', ingles: '+3 food from cooking<br>4x ingredients required for cooking' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['food'],
                    buff: [1, 2, 3],
                },
                {
                    sinal: 'x',
                    recursoAfetado: ['ingredientes'],
                    buff: [2, 3, 4],
                },
            ],
        },
        {
            idName: 'fieryJackpot',
            name: 'Fiery Jackpot',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '20% de chance de obter +1 comida no Fire Pit.', ingles: '+20% Chance of +1 food from Firepit' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '35% de chance de obter +1 comida no Fire Pit.', ingles: '+35% Chance of +1 food from Firepit' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '50% de chance de obter +1 comida no Fire Pit.', ingles: '+50% Chance of +1 food from Firepit' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['firepit food'],
                    buff: [0.2, 0.35, 0.5],
                },
            ],
        },
        {
            idName: 'fryFrenzy',
            name: 'Fry Frenzy',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '-60% no tempo de preparo no Deli usando óleo.', ingles: '-60% Deli cooking time with oil' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-65% no tempo de preparo no Deli usando óleo.', ingles: '-65% Deli cooking time with oil' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-70% no tempo de preparo no Deli usando óleo.', ingles: '-70% Deli cooking time with oil' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['deli oil'],
                    buff: [0.4, 0.35, 0.3],
                },
            ],
        },
    ]
};

//============================================================================================================================================================================
//Ajustado
let skillsCompost = {
    tier1: [
        {
            idName: 'efficientBin',
            name: 'Efficient Bin',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+5 Sprout Mix.', ingles: '+5 Sprout Mix.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+7 Sprout Mix.', ingles: '+7 Sprout Mix.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+9 Sprout Mix.', ingles: '+9 Sprout Mix.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['sproutMix'],
                    buff: [5, 7, 9],
                },
            ],
        },
        {
            idName: 'turboCharged',
            name: 'Turbo Charged',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+5 Fruitful Blend.', ingles: '+5 Fruitful Blend.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+7 Fruitful Blend.', ingles: '+7 Fruitful Blend.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+9 Fruitful Blend.', ingles: '+9 Fruitful Blend.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['fruitfulBlend'],
                    buff: [5, 7, 9],
                },
            ],
        },
        {
            idName: 'wormyTreat',
            name: 'Wormy Treat',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+1 Minhoca.', ingles: '+1 Worm.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+2 Minhoca.', ingles: '+2 Worm.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+3 Minhoca.', ingles: '+3 Worm.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['worm'],
                    buff: [1, 2, 3],
                },
            ],
        },
        {
            idName: 'featheryBusiness',
            name: 'Feathery Business',
            nivelAtual: 0,
            maxLevel: 1,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Use penas em vez de ovos para acelerar composteiras | 2x penas para acelerar composteiras', ingles: 'Use feathers instead of eggs to boost composters | 2x feathers to boost composters' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['feathers'],
                    buff: [2],
                },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['composter'],
                    buff: [0.5],
                },
            ],
        },
        {
            idName: 'sproutSurge',
            name: 'Sprout Surge',
            nivelAtual: 0,
            maxLevel: 1,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Aplica Sprout Mix em todos os terrenos.', ingles: 'Place Sprout Mix in all plots.' } },
            ],
            insta: [
                {
                    sinal: '',
                    recursoAfetado: ['plots'],
                    buff: [0],
                },
            ],
        },
        {
            idName: 'blend-tastic',
            name: 'Blend-tastic',
            nivelAtual: 0,
            maxLevel: 1,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: 'Aplica Fruitful Blend em todos os terrenos de árvores frutíferas.', ingles: 'Place Fruitful Blend in all fruit tree plots.' } },
            ],
            insta: [
                {
                    sinal: '',
                    recursoAfetado: ['fruitPlots'],
                    buff: [0],
                },
            ],
        },
    ],
    tier2: [
        {
            idName: 'premiumWorms',
            name: 'Premium Worms',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+10 Rapid Root.', ingles: '+10 Rapid Root.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+15 Rapid Root.', ingles: '+15 Rapid Root.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+20 Rapid Root.', ingles: '+20 Rapid Root.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['rapidRoot'],
                    buff: [10, 15, 20],
                },
            ],
        },
        {
            idName: 'fruitfulBounty',
            name: 'Fruitful Bounty',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: 'Efeito 2x do Fruitful Blend', ingles: '2x Fruitful Blend\'s Effect' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'Efeito 3x do Fruitful Blend', ingles: '3x Fruitful Blend\'s Effect' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'Efeito 4x do Fruitful Blend', ingles: '4x Fruitful Blend\'s Effect' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['fruitBlend'],
                    buff: [2, 3, 4],
                },
            ],
        },
        {
            idName: 'swiftDecomposer',
            name: 'Swift Decomposer',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '-10% no tempo de compostagem.', ingles: '-10% in composting time.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-12.5% no tempo de compostagem.', ingles: '-12.5% in composting time.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '-15% no tempo de compostagem.', ingles: '-15% in composting time.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['composter'],
                    buff: [0.9, 0.875, 0.85],
                },
            ],
        },
        {
            idName: 'compostingBonanza',
            name: 'Composting Bonanza',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: 'Acelera as composteiras em 1h adicional ao impulsionar, requer 2x recursos para o boost', ingles: 'Speed up composters by an additional 1h when boosting, 2x resources to boost composters' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'Acelera as composteiras em 1h 30m adicionais ao impulsionar, requer 2x recursos para o boost', ingles: 'Speed up composters by an additional 1h 30m when boosting, 2x resources to boost composters' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: 'Acelera as composteiras em 2h adicionais ao impulsionar, requer 2x recursos para o boost', ingles: 'Speed up composters by an additional 2h when boosting, 2x resources to boost composters' } },
            ],
            tempo: [
                {
                    sinal: '-',
                    recursoAfetado: ['composter'],
                    buff: [3_600_000, 3_600_000, 3_600_000],
                },
            ],
        },
        {
            idName: 'rootRocket',
            name: 'Root Rocket',
            nivelAtual: 0,
            maxLevel: 1,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: 'Aplica Rapid Root em todos os terrenos.', ingles: 'Place Rapid Root in all plots.' } },
            ],
            insta: [
                {
                    sinal: '',
                    recursoAfetado: ['rapidRoot'],
                    buff: [0],
                },
            ],
        },
    ],
    tier3: [
        {
            idName: 'compostingOverhaul',
            name: 'Composting Overhaul',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+2 Minhocas.', ingles: '+2 Worms.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+5 Minhocas.', ingles: '+5 Worms.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+8 Minhocas.', ingles: '+8 Worms.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['worm'],
                    buff: [2, 5, 8],
                },
            ],
        },
        {
            idName: 'compostingRevamp',
            name: 'Composting Revamp',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+5 fertilizantes, -2 Minhocas.', ingles: '+5 fertilisers, -2 Worms.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+8 fertilizantes, -3 Minhocas.', ingles: '+8 fertilisers, -3 Worms.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+10 fertilizantes, -4 Minhocas.', ingles: '+10 fertilisers, -4 Worms.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['fertilisers'],
                    buff: [5, 8, 10],
                },
                {
                    sinal: '-',
                    recursoAfetado: ['worms'],
                    buff: [2, 3, 4],
                },
            ],
        },
    ]
};

//============================================================================================================================================================================
//Ajustado
let skillsBeesFlowers = {
    tier1: [
        {
            idName: 'sweetBonus',
            name: 'Sweet Bonus',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.1 de Mel por colmeia.', ingles: '+0.1 Honey per hive.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.15 de Mel por colmeia.', ingles: '+0.15 Honey per hive.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.2 de Mel por colmeia.', ingles: '+0.2 Honey per hive.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['honey'],
                    buff: [0.1, 0.15, 0.2],
                },
            ],
        },
        {
            idName: 'hyperBees',
            name: 'Hyper Bees',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.1 na velocidade de produção de mel.', ingles: '+0.1 Honey production speed' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.15 na velocidade de produção de mel.', ingles: '+0.15 Honey production speed' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+0.2 na velocidade de produção de mel.', ingles: '+0.2 Honey production speed' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['honey'],
                    buff: [0.9, 0.85, 0.8],
                },
            ],
        },
        {
            idName: 'bloomingBoost',
            name: 'Blooming Boost',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-10% no tempo de crescimento das flores.', ingles: '-10% in the growth time of flowers.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-12.5% no tempo de crescimento das flores.', ingles: '-12.5% in the growth time of flowers.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-15% no tempo de crescimento das flores.', ingles: '-15% in the growth time of flowers.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['flowers'],
                    buff: [0.9, 0.875, 0.85],
                },
            ],
        },
        {
            idName: 'flowerSale',
            name: 'Flower Sale',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-20% no custo das sementes de flores.', ingles: '-20% in the cost of flower seeds.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-25% no custo das sementes de flores.', ingles: '-25% in the cost of flower seeds.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-30% no custo das sementes de flores.', ingles: '-30% in the cost of flower seeds.' } },
            ],
            coins: [
                {
                    sinal: 'x',
                    recursoAfetado: ['flowers'],
                    buff: [0.8, 0.75, 0.7],
                },
            ],
        },
    ],
    tier2: [
        {
            idName: 'buzzworthyTreats',
            name: 'Buzzworthy Treats',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+10% de experiência em comidas feitas com mel.', ingles: '+10% Experience in foods made with honey.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+20% de experiência em comidas feitas com mel.', ingles: '+20% Experience in foods made with honey.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+30% de experiência em comidas feitas com mel.', ingles: '+30% Experience in foods made with honey.' } },
            ],
            xp: [
                {
                    sinal: 'x',
                    recursoAfetado: ['food honey'],
                    buff: [1.1, 1.2, 1.3],
                },
            ],
        },
        {
            idName: 'blossomBonding',
            name: 'Blossom Bonding',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+2 pontos de relacionamento ao presentear flores.', ingles: '+2 relationship points when gifting flowers.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+3 pontos de relacionamento ao presentear flores.', ingles: '+3 relationship points when gifting flowers.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+4 pontos de relacionamento ao presentear flores.', ingles: '+4 relationship points when gifting flowers.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['relationship'],
                    buff: [2, 3, 4],
                },
            ],
        },
        {
            idName: 'pollenPowerUp',
            name: 'Pollen Power Up',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '+0.1 de colheita adicional após polinização (total +0.3).', ingles: 'Additional +0.1 crop yield after pollination (total +0.3)' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+0.15 de colheita adicional após polinização (total +0.35).', ingles: 'Additional +0.15 crop yield after pollination (total +0.35)' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '+0.2 de colheita adicional após polinização (total +0.4).', ingles: 'Additional +0.2 crop yield after pollination (total +0.4)' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['pollination'],
                    buff: [0.1, 0.15, 0.2],
                },
            ],
        },
        {
            idName: 'petalledPerk',
            name: 'Petalled Perk',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '10% de chance de obter +1 flor.', ingles: '10% chance to get +1 flower.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '17.5% de chance de obter +1 flor.', ingles: '17.5% chance to get +1 flower.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '25% de chance de obter +1 flor.', ingles: '25% chance to get +1 flower.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['flowers'],
                    buff: [0.1, 0.175, 0.25],
                },
            ],
        },
    ],
    tier3: [
        {
            idName: 'beeCollective',
            name: 'Bee Collective',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+20% de chance de enxame de abelhas.', ingles: '+20% chance of a bee swarm.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+27.5% de chance de enxame de abelhas.', ingles: '+27.5% chance of a bee swarm.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+35% de chance de enxame de abelhas.', ingles: '+35% chance of a bee swarm.' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['beeSwarm'],
                    buff: [1.2, 1.275, 1.35],
                },
            ],
        },
        {
            idName: 'flowerPower',
            name: 'Flower Power',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '-20% no tempo de crescimento das flores.', ingles: '-20% in the growth time of flowers.' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-30% no tempo de crescimento das flores.', ingles: '-30% in the growth time of flowers.' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '-40% no tempo de crescimento das flores.', ingles: '-40% in the growth time of flowers.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['flowers'],
                    buff: [0.8, 0.7, 0.6],
                },
            ],
        },
        {
            idName: 'floweryAbode',
            name: 'Flowery Abode',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '+0.5 na velocidade de produção de mel, +50% no tempo de crescimento das flores.', ingles: '+0.5 Honey production speed, +50% Flower growth time' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+0.75 na velocidade de produção de mel, +60% no tempo de crescimento das flores.', ingles: '+0.75 Honey production speed, +60% Flower growth time' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '+1 na velocidade de produção de mel, +70% no tempo de crescimento das flores.', ingles: '+1 Honey production speed, +70% Flower growth time' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['honey'],
                    buff: [0.5, 0.25, 0.01],
                },
                {
                    sinal: 'x',
                    recursoAfetado: ['flowers'],
                    buff: [1.5, 1.6, 1.7],
                },
            ],
        },
        {
            idName: 'petalBlessed',
            name: 'Petal Blessed',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: 'Habilidade de tornar todas as flores em crescimento prontas para colheita (Recarga: 4d).', ingles: 'Ability to make all flowers currently growing ready to be harvested (4d Cooldown)' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de tornar todas as flores em crescimento prontas para colheita (Recarga: 3d 12h).', ingles: 'Ability to make all flowers currently growing ready to be harvested (3d 12h Cooldown)' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de tornar todas as flores em crescimento prontas para colheita (Recarga: 3d).', ingles: 'Ability to make all flowers currently growing ready to be harvested (3d Cooldown)' } },
            ],
            quantidade: [
                {
                    sinal: '',
                    recursoAfetado: ['flowers'],
                    buff: [0, 0, 0],
                },
            ],
        },
    ]
};

//============================================================================================================================================================================
//Ajustado
let skillsAging = {
    tier1: [
        {
            idName: 'cheapRakes',
            name: 'Cheap Rakes',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-20% no custo em coins do Salt Rake.', ingles: '-20% salt rake coin cost.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-30% no custo em coins do Salt Rake.', ingles: '-30% salt rake coin cost.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-40% no custo em coins do Salt Rake.', ingles: '-40% salt rake coin cost.' } },
            ],
            coins: [
                {
                    sinal: 'xC',
                    recursoAfetado: ['Salt Rake'],
                    buff: [0.8, 0.7, 0.6],
                },
            ],
        },
        {
            idName: 'speedyAging',
            name: 'Speedy Aging',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-10% no tempo de envelhecimento de peixes.', ingles: '-10% Fish Aging time.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-15% no tempo de envelhecimento de peixes.', ingles: '-15% Fish Aging time.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-20% no tempo de envelhecimento de peixes.', ingles: '-20% Fish Aging time.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['fish aging'],
                    buff: [0.9, 0.85, 0.8],
                },
            ],
        },
        {
            idName: 'saltySeas',
            name: 'Salty Seas',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-10% no tempo de recarga do sal.', ingles: '-10% salt charge replenishment time.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-15% no tempo de recarga do sal.', ingles: '-15% salt charge replenishment time.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '-20% no tempo de recarga do sal.', ingles: '-20% salt charge replenishment time.' } },
            ],
            tempo: [
                {
                    sinal: 'x',
                    recursoAfetado: ['Salt'],
                    buff: [0.9, 0.85, 0.8],
                },
            ],
        },
        {
            idName: 'wideRakes',
            name: 'Wide Rakes',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+2 de Sal por colheita.', ingles: '+2 Salt per harvest.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+3 de Sal por colheita.', ingles: '+3 Salt per harvest.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+4 de Sal por colheita.', ingles: '+4 Salt per harvest.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['Salt'],
                    buff: [2, 3, 4],
                },
            ],
        },
        {
            idName: 'bacalhau',
            name: 'Bacalhau',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+1 de isca produzida no Fermentation Rack.', ingles: '+1 Bait yield from fermentation rack.' } },
                { nivel: 2, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+2 de isca produzida no Fermentation Rack.', ingles: '+2 Bait yield from fermentation rack.' } },
                { nivel: 3, pontosNecessarios: 1, shards: 1, descricao: { portugues: '+3 de isca produzida no Fermentation Rack.', ingles: '+3 Bait yield from fermentation rack.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['bait'],
                    buff: [1, 2, 3],
                },
            ],
        },
    ],
    tier2: [
        {
            idName: 'fishSmoking',
            name: 'Fish Smoking',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '2x chance de um peixe envelhecido virar Prime Aged.', ingles: '2x chance Aged Fish becomes Prime Aged' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '3x chance de um peixe envelhecido virar Prime Aged.', ingles: '3x chance Aged Fish becomes Prime Aged' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '4x chance de um peixe envelhecido virar Prime Aged.', ingles: '4x chance Aged Fish becomes Prime Aged' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['fish'],
                    buff: [2, 3, 4],
                },
            ],
        },
        {
            idName: 'refiner',
            name: 'Refiner',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '15% de chance de obter +1 Refined Salt ao produzir Refined Salt.', ingles: '15% chance of +1 Refined Salt when making Refined Salt.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '25% de chance de obter +1 Refined Salt ao produzir Refined Salt.', ingles: '25% chance of +1 Refined Salt when making Refined Salt.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '35% de chance de obter +1 Refined Salt ao produzir Refined Salt.', ingles: '35% chance of +1 Refined Salt when making Refined Salt.' } },
            ],
            quantidade: [
                {
                    sinal: '+',
                    recursoAfetado: ['refined salt'],
                    buff: [0.15, 0.25, 0.35],
                },
            ],
        },
        {
            idName: 'seaBlessed',
            name: 'Sea Blessed',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 2, shards: 2, descricao: { portugues: '5% de chance de restaurar 1 carga em 4 nodes de sal ao coletar.', ingles: '5% chance to restore 1 charge to 4 Salt nodes on harvest.' } },
                { nivel: 2, pontosNecessarios: 3, shards: 2, descricao: { portugues: '6.5% de chance de restaurar 1 carga em 4 nodes de sal ao coletar.', ingles: '6.5% chance to restore 1 charge to 4 Salt nodes on harvest.' } },
                { nivel: 3, pontosNecessarios: 3, shards: 2, descricao: { portugues: '8% de chance de restaurar 1 carga em 4 nodes de sal ao coletar.', ingles: '8% chance to restore 1 charge to 4 Salt nodes on harvest.' } },
            ],
            quantidade: [
                {
                    sinal: 'xI',
                    recursoAfetado: ['Salt', 'Salt Rake'],
                    buff: [1.2, 1.26, 1.32],
                },
            ],
        },
    ],
    tier3: [
        {
            idName: 'ager',
            name: 'Ager',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: '2x produção nos racks do Aging Shed | 2x consumo de ingredientes, peixes e sal.', ingles: '2x output from Aging Shed Racks | 2x Aging Shed inputs (ingredients, fish & salt).' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: '3x produção nos racks do Aging Shed | 3x consumo de ingredientes, peixes e sal.', ingles: '3x output from Aging Shed Racks | 3x Aging Shed inputs (ingredients, fish & salt).' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: '4x produção nos racks do Aging Shed | 4x consumo de ingredientes, peixes e sal.', ingles: '4x output from Aging Shed Racks | 4x Aging Shed inputs (ingredients, fish & salt).' } },
            ],
            quantidade: [
                {
                    sinal: 'x',
                    recursoAfetado: ['anging', 'recursos'],
                    buff: [2, 3, 4],
                },
            ],
        },
        {
            idName: 'saltSurge',
            name: 'Salt Surge',
            nivelAtual: 0,
            maxLevel: 3,
            niveis: [
                { nivel: 1, pontosNecessarios: 3, shards: 3, descricao: { portugues: 'Habilidade de recarregar todos os nodes de sal ao máximo (Recarga: 3d).', ingles: 'Ability to recharge all Salt nodes to max (3d Cooldown).' } },
                { nivel: 2, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de recarregar todos os nodes de sal ao máximo (Recarga: 2d 12h).', ingles: 'Ability to recharge all Salt nodes to max (2d 12h Cooldown).' } },
                { nivel: 3, pontosNecessarios: 6, shards: 3, descricao: { portugues: 'Habilidade de recarregar todos os nodes de sal ao máximo (Recarga: 2d).', ingles: 'Ability to recharge all Salt nodes to max (2d Cooldown).' } },
            ],
            insta: [
                {
                    sinal: '',
                    recursoAfetado: ['salt'],
                    buff: [0, 0, 0],
                },
            ],
        },
    ]
};

//============================================================================================================================================================================
//Todas arvores de skills separadas
let todasSkillsCrops       = [...skillsCrops.tier1,       ...skillsCrops.tier2,        ...skillsCrops.tier3];
let todasSkillsFruits      = [...skillsFruits.tier1,      ...skillsFruits.tier2,       ...skillsFruits.tier3];
let todasSkillsTrees       = [...skillsTrees.tier1,       ...skillsTrees.tier2,        ...skillsTrees.tier3];
let todasSkillsMinerals    = [...skillsMinerals.tier1,    ...skillsMinerals.tier2,     ...skillsMinerals.tier3];
let todasSkillsMachinery   = [...skillsMachinery.tier1,   ...skillsMachinery.tier2,    ...skillsMachinery.tier3];
let todasSkillsGreenhouse  = [...skillsGreenhouse.tier1,  ...skillsGreenhouse.tier2,   ...skillsGreenhouse.tier3];
let todasSkillsAnimais     = [...skillsAnimais.tier1,     ...skillsAnimais.tier2,      ...skillsAnimais.tier3];
let todasSkillsFishing     = [...skillsFishing.tier1,     ...skillsFishing.tier2,      ...skillsFishing.tier3];
let todasSkillsCooking     = [...skillsCooking.tier1,     ...skillsCooking.tier2,      ...skillsCooking.tier3];
let todasSkillsCompost     = [...skillsCompost.tier1,     ...skillsCompost.tier2,      ...skillsCompost.tier3];
let todasSkillsBeesFlowers = [...skillsBeesFlowers.tier1, ...skillsBeesFlowers.tier2,  ...skillsBeesFlowers.tier3];
let todasSkillsAging       = [...skillsAging.tier1,       ...skillsAging.tier2,        ...skillsAging.tier3];

//============================================================================================================================================================================
//Todas arvores de skills juntas
let todasSkillsComTier = [
    ...skillsCrops.tier1,       ...skillsCrops.tier2,        ...skillsCrops.tier3,
    ...skillsFruits.tier1,      ...skillsFruits.tier2,       ...skillsFruits.tier3,
    ...skillsTrees.tier1,       ...skillsTrees.tier2,        ...skillsTrees.tier3,
    ...skillsMinerals.tier1,    ...skillsMinerals.tier2,     ...skillsMinerals.tier3,
    ...skillsMachinery.tier1,   ...skillsMachinery.tier2,    ...skillsMachinery.tier3,
    ...skillsGreenhouse.tier1,  ...skillsGreenhouse.tier2,   ...skillsGreenhouse.tier3,
    ...skillsAnimais.tier1,     ...skillsAnimais.tier2,      ...skillsAnimais.tier3,
    ...skillsFishing.tier1,     ...skillsFishing.tier2,      ...skillsFishing.tier3,
    ...skillsCooking.tier1,     ...skillsCooking.tier2,      ...skillsCooking.tier3,
    ...skillsCompost.tier1,     ...skillsCompost.tier2,      ...skillsCompost.tier3,
    ...skillsBeesFlowers.tier1, ...skillsBeesFlowers.tier2,  ...skillsBeesFlowers.tier3,
    ...skillsAging.tier1,       ...skillsAging.tier2,        ...skillsAging.tier3
];
//============================================================================================================================================================================
//Mapas
let mapaDeTodasSkillsComTier = {};
todasSkillsComTier.forEach(skills => {
    mapaDeTodasSkillsComTier[skills.idName] = skills;
});

let mapaDeTodasSkillsLegacy = {};
skillsLegacy.forEach(skills => {
    mapaDeTodasSkillsLegacy[skills.idName] = skills;
});
console.log(mapaDeTodasSkillsLegacy)