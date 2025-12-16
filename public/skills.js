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
];

//============================================================================================================================================================================

let skillsCrops = {
    tier1: [
        {
            idName: 'greenThumb2',
            name: 'Green Thumb',
            descricao: {
                portugues: '-5% no tempo das Crops',
                ingles: '-5% in the time of Crops'
            },
            possui: false,
            tempo:[
                {
                    sinal: 'x',
                    buff: 0.95,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean',
                        'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale',
                        'Artichoke', 'Barley'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'youngFarmer',
            name: 'Young Farmer',
            descricao: {
                portugues: '+0.1 Crop Basica',
                ingles: '+0.1 Basic Crop Yield'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'experiencedFarmer',
            name: 'Experienced Farmer',
            descricao: {
                portugues: '+0.1 Crop Média',
                ingles: '+0.1 Medium Crop Yield'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'oldFarmer',
            name: 'Old Farmer',
            descricao: {
                portugues: '+0.1 Crop Avançada',
                ingles: '+0.1 Advanced Crop Yield'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'bettysFriend',
            name: 'Betty\'s Friend',
            descricao: {
                portugues: 'Delivery da \'Betty\' Coin aumentou 30%',
                ingles: 'Delivery of \'Betty\' Coin increased by 30%'
            },
            possui: false,
            delivery: [
                {
                    sinal: 'x',
                    buff: 1.3,
                    recursoAfetado: [''],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'chonkyScarecrow',
            name: 'Chonky Scarecrow',
            descricao: {
                portugues: 'Aumenta a área de efeito (AOE) do Basic Scarecrow\'s para uma área de 7x7; Adicionalmente, reduz em 10% o tempo de crescimento das crops basicas.',
                ingles: 'Basic Scarecrow AOE increased to 7x7; -10% basic crop growth time.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 1.3,
                    recursoAfetado: ['Basic Scarecrow'],
                },
            ],
            pontosNecessarios: 1
        },
    ],
    tier2: [
        {
            idName: 'strongRoots',
            name: 'Strong Roots',
            descricao: {
                portugues: '10% de redução no tempo das Crops Avançadas',
                ingles: '10% reduction in the time of Advanced Crops'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'coinSwindler',
            name: 'Coin Swindler',
            descricao: {
                portugues: '+10% de coins ao vender colheitas (Loja de Sementes)',
                ingles: '+10% coins when selling crops (Seed Shop)'
            },
            possui: false,
            coins: [
                {
                    sinal: 'xV',
                    buff: 1.1,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 
                        'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'goldenSunflower',
            name: 'Golden Sunflower',
            descricao: {
                portugues: '1/700 de obter +0,35 gold ao colher sunflowers manualmente',
                ingles: '1/700 chance of getting +0.35 gold when manually harvesting sunflowers'
            },
            possui: false,
            gold: [
                { //fazer uma revisão dps
                    sinal: '+',
                    buff: (1 / 700) * 0.35,
                    recursoAfetado: [''],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'horrorMike',
            name: 'Horror Mike',
            descricao: {
                portugues: 'Scary Mike aumenta a AOE para 7x7 e concede +0,1 nas colheitas (Crops Médias)',
                ingles: 'Scary Mike AOE increases the size to 7x7 and +0.1 Crops (Medium Crops)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3 * 49,
                    recursoAfetado: ['Scary Mike'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'lauriesGains',
            name: 'Laurie\'s Gains',
            descricao: {
                portugues: 'Laurie Crow aumenta a AOE para 7x7 e concede +0,1 nas colheitas (Crops Avançadas)',
                ingles: 'Laurie Crow AOE increases the size to 7x7 and +0.1 Crops (Advanced Crops)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3 * 49,
                    recursoAfetado: ['Laurie the Chuckle Crow'],
                },
            ],
            pontosNecessarios: 2
        },
    ],
    tier3: [
        {
            idName: 'instantGrowth',
            name: 'Instant Growth',
            descricao: {
                portugues: 'Capacidade de deixar todas Crops prontas para serem colhidas (1/72h)',
                ingles: 'Ability to make all Crops ready for harvest (1/72h)'
            },
            possui: false,
            reset: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 
                        'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'acreFarm',
            name: 'Acre Farm',
            descricao: {
                portugues: '+1 de rendimento em crops Avançadas, -0,5 de rendimento em crops Básicas e Médias',
                ingles: '+1 Advanced crop yeild, -0.5 Basic and Medium crop yield'
            },
            possui: false,
            quantidade:[
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                },
                {
                    sinal: '-',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam',
                        'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip']
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'hectareFarm',
            name: 'Hectare Farm',
            descricao: {
                portugues: '+1 de rendimento em crops Básicas e Médias, -0,5 de rendimento em crops Avançadas',
                ingles: '+1 Basic and Medium crop yield, -0.5 Advanced crop yield'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam',
                        'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                },
                {
                    sinal: '-',
                    buff: 0.5,
                    recursoAfetado: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley']
                },
            ],
            pontosNecessarios: 3
        },
    ]
};

//============================================================================================================================================================================

let skillsFruits = {
    tier1: [
        {
            idName: 'fruitfulFumble',
            name: 'Fruitful Fumble',
            descricao: {
                portugues: '+0.1 Fruta',
                ingles: '+0.1 Fruit Yield'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'fruityHeaven',
            name: 'Fruity Heaven',
            descricao: {
                portugues: '-10% do custo em sementes de fruta',
                ingles: '-10% in the cost of fruit seeds'
            },
            possui: false,
            coins: [
                {
                    sinal: 'xC',
                    buff: 0.9,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'fruityProfit',
            name: 'Fruity Profit',
            descricao: {
                portugues: '+50% de coins nas entregas do Tango',
                ingles: '+50% coins on Tango deliveries'
            },
            possui: false,
            delivery: [
                {
                    sinal: 'x',
                    buff: 1.5,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'loyalMacaw',
            name: 'Loyal Macaw',
            descricao: {
                portugues: 'Efeito Double Macaw\'s',
                ingles: 'Double Macaw\'s Effect'
            },
            possui: false,
            quantidade: [ 
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Macaw'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'noAxeNoWorries',
            name: 'No Axe No Worries',
            descricao: {
                portugues: 'Corte galhos de frutas sem machados, -1 madeira dos galhos de frutas',
                ingles: 'Cut fruit branches without axes, -1 wood from fruit branches'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 0,
                    recursoAfetado: ['Axe', 'Wood'],
                },
            ],
            pontosNecessarios: 1
        },
    ],
    tier2: [
        {
            idName: 'catchup',
            name: 'Catchup',
            descricao: {
                portugues: '-10% de tempo no crescimento das frutas',
                ingles: '-10% in the growth time of fruits'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'fruityWoody',
            name: 'Fruity Woody',
            descricao: {
                portugues: '+1 madeira dos galhos e caules de frutas',
                ingles: '+1 wood from fruit branches and stems'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Wood'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'pearTurbocharge',
            name: 'Pear Turbocharge',
            descricao: {
                portugues: 'Dobre o efeito da Immortal Pear\'s',
                ingles: 'Double the effect of Immortal Pear\'s'
            },
            possui: false,
            rodadas: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Immortal Pear'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'crimeFruit',
            name: 'Crime Fruit',
            descricao: {
                portugues: '+10 no estoque de sementes de Tomate e Limão',
                ingles: '+10 in the stock of Tomato and Lemon seeds'
            },
            possui: false,
            estoque: [ 
                {
                    sinal: '+',
                    buff: 10,
                    recursoAfetado: ['Tomato', 'Lemon'],
                },
            ],
            pontosNecessarios: 2
        },
    ],
    tier3: [
        {
            idName: 'generousOrchard',
            name: 'Generous Orchard',
            descricao: {
                portugues: '20% de chance de +1 no rendimento de frutas',
                ingles: '20% chance of +1 in fruit yield'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'longPickings',
            name: 'Long Pickings',
            descricao: {
                portugues: '-50% no tempo de crescimento das maçãs e bananas, +100% no tempo de crescimento para todas as outras frutas.',
                ingles: '-50% in the growth time of apples and bananas, +100% in the growth time for all other fruits.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Apple', 'Banana'],
                },
                {
                    sinal: 'x',
                    buff: 2,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'shortPickings',
            name: 'Short Pickings',
            descricao: {
                portugues: '-50% no tempo de crescimento dos mirtilos e laranjas, +100% no tempo de crescimento para todas as outras frutas.',
                ingles: '-50% in the growth time of blueberries and oranges, +100% in the growth time for all other fruits.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Blueberry', 'Orange'],
                },
                {
                    sinal: 'x',
                    buff: 2,
                    recursoAfetado: ['Tomato', 'Lemon', 'Apple', 'Banana'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'zestyVibes',
            name: 'Zesty Vibes',
            descricao: {
                portugues: '+1 no rendimento de Tomate e Limão, -0,25 no rendimento para todas as outras frutas.',
                ingles: '+1 in the yield of Tomato and Lemon, -0.25 in the yield for all other fruits.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Tomato', 'Lemon'],
                },
                {
                    sinal: '-',
                    buff: 0.25,
                    recursoAfetado: ['Blueberry', 'Orange', 'Apple', 'Banana'],
                },
            ],
            pontosNecessarios: 3
        },
    ]
}

//============================================================================================================================================================================

let skillsTrees = {
    tier1: [
        {
            idName: 'lumberjacksExtra',
            name: 'Lumberjack\'s Extra',
            descricao: {
                portugues: '+0.1 no rendimento de madeira.',
                ingles: '+0.1 in wood yield.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Wood'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'treeCharge',
            name: 'Tree Charge',
            descricao: {
                portugues: '-10% no tempo de crescimento das árvores',
                ingles: '-10% in the growth time of trees.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Wood'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'moreAxes',
            name: 'More Axes',
            descricao: {
                portugues: '+50 no estoque de machados',
                ingles: '+50 in axe stock.'
            },
            possui: false,
            estoque: [
                {
                    sinal: '+',
                    buff: 50,
                    recursoAfetado: ['Axe'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'instaChop',
            name: 'Insta-Chop',
            descricao: {
                portugues: 'Uma única batida nas árvores',
                ingles: 'A single hit on trees.'
            },
            possui: false,
            conforto: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: [''],
                },
            ],
            pontosNecessarios: 1
        },
    ],
    tier2: [
        {
            idName: 'toughTree',
            name: 'Tough Tree',
            descricao: {
                portugues: '1/10 de chance de x3 no rendimento de madeira',
                ingles: '1/10 chance of x3 in wood yield.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.2,
                    recursoAfetado: ['Wood'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'fellersDiscount',
            name: 'Feller\'s Discount',
            descricao: {
                portugues: '-20% no custo do machado',
                ingles: '-20% in axe cost.'
            },
            possui: false,
            coins: [
                {
                    sinal: 'xC',
                    buff: 0.8,
                    recursoAfetado: ['Axe'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'moneyTree',
            name: 'Money Tree',
            descricao: {
                portugues: '1% de chance de encontrar 200 Coins ao cortar árvores.',
                ingles: '1% chance to find 200 Coins when cutting down trees.'
            },
            possui: false,
            rng: [
                {
                    sinal: '+',
                    buff: 200,
                    recursoAfetado: ['Wood'],
                },
            ],
            pontosNecessarios: 2
        },
    ],
    tier3: [
        {
            idName: 'treeTurnaround',
            name: 'Tree Turnaround',
            descricao: {
                portugues: '15% de chance para que as árvores cresçam instantaneamente.',
                ingles: '15% chance for trees to grow instantly.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'xI',
                    buff: 1.15,
                    recursoAfetado: ['Axe', 'Wood'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'treeBlitz',
            name: 'Tree Blitz',
            descricao: {
                portugues: 'Fazer todas as árvores crescerem instantaneamente (1 vez a cada 24 horas).',
                ingles: 'Make all trees grow instantly (once every 24 hours).'
            },
            possui: false,
            reset: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: [''],
                },
            ],
            pontosNecessarios: 3
        },
    ]
};

//============================================================================================================================================================================

let skillsMinerals = {
    tier1: [
        {
            idName: 'rockNRoll',
            name: 'Rock\'N\'Roll',
            descricao: {
                portugues: '+0.1 Pedra',
                ingles: '+0.1 Stone Yield'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Stone'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'ironBumpkin',
            name: 'Iron Bumpkin',
            descricao: {
                portugues: '+0.1 Ferro',
                ingles: '+0.1 Iron Yield'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Iron'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'speedMiner',
            name: 'Speed Miner',
            descricao: {
                portugues: '-20% no tempo de recuperação das pedras.',
                ingles: '-20% in stone recovery time.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.8,
                    recursoAfetado: ['Stone'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'tapProspector',
            name: 'Tap Prospector',
            descricao: {
                portugues: '1 toque em pequenos minerais (pedra, ferro, ouro)',
                ingles: '1 hit on small minerals (stone, iron, gold)'
            },
            possui: false,
            conforto: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'forgeWardProfits',
            name: 'Forge-Ward Profits',
            descricao: {
                portugues: '+20% na receita nas entregas do Ferreiro.',
                ingles: '+20% revenue on deliveries to the Blacksmith.'
            },
            possui: false,
            delivery: [
                {
                    sinal: 'x',
                    buff: 1.2,
                    recursoAfetado: [''],
                },
            ],
            pontosNecessarios: 1
        },
    ],
    tier2: [
        {
            idName: 'ironHustle',
            name: 'Iron Hustle',
            descricao: {
                portugues: '-30% no tempo de recuperação de ferro.',
                ingles: '-30% in iron recovery time.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.7,
                    recursoAfetado: ['Iron'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'frugalMiner',
            name: 'Frugal Miner',
            descricao: {
                portugues: '-20% de custo em coin da picareta.',
                ingles: '-20% in pickaxe coin cost.'
            },
            possui: false,
            coins: [
                {
                    sinal: 'xC',
                    buff: 0.8,
                    recursoAfetado: ['Pickaxe', 'Stone Pickaxe', 'Iron Pickaxe', 'Gold Pickaxe'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'rockyFavor',
            name: 'Rocky Favor',
            descricao: {
                portugues: '+1 no rendimento de pedras, -0,5 no rendimento de ferro.',
                ingles: '+1 in stone yield, -0.5 in iron yield.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Stone'],
                },
                {
                    sinal: '-',
                    buff: 0.5,
                    recursoAfetado: ['Iron'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'fireKissed',
            name: 'Fire Kissed',
            descricao: {
                portugues: '+1 no rendimento de Crimstone no 5º dia consecutivo.',
                ingles: '+1 in Crimstone yield on the 5th consecutive day.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Crimstone'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'midasSprint',
            name: 'Midas Sprint',
            descricao: {
                portugues: '-10% no tempo de recuperação do ouro.',
                ingles: '-10% in gold recovery time.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Gold'],
                },
            ],
            pontosNecessarios: 2
        },
    ],
    tier3: [
        {
            idName: 'ferrousFavor',
            name: 'Ferrous Favor',
            descricao: {
                portugues: '+1 no rendimento de ferro, -0,5 no rendimento de pedras.',
                ingles: '+1 in iron yield, -0.5 in stone yield.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Iron'],
                },
                {
                    sinal: '-',
                    buff: 0.5,
                    recursoAfetado: ['Stone'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'goldenTouch',
            name: 'Golden Touch',
            descricao: {
                portugues: '+0.5 Ouro',
                ingles: '+0.5 Gold Yield'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Gold'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'morePicks',
            name: 'More Picks',
            descricao: {
                portugues: 'Estoque aumentado: +70 Pickaxe, +20 Stone Pickaxe, +7 Iron Pickaxe.',
                ingles: 'Increased stock: +70 Pickaxe, +20 Stone Pickaxe, +7 Iron Pickaxe.'
            },
            possui: false,
            estoque: [
                {
                    sinal: '+',
                    buff: 70,
                    recursoAfetado: ['Pickaxe'],
                },
                {
                    sinal: '+',
                    buff: 20,
                    recursoAfetado: ['Stone Pickaxe'],
                },
                {
                    sinal: '+',
                    buff: 7,
                    recursoAfetado: ['Iron Pickaxe'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'firesideAlchemist',
            name: 'Fireside Alchemist',
            descricao: {
                portugues: '-15% no tempo de recuperação de Crimstone.',
                ingles: '-15% in Crimstone recovery time.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.85,
                    recursoAfetado: ['Crimstone'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'midasRush',
            name: 'Midas Rush',
            descricao: {
                portugues: '-20% no tempo de recuperação do ouro.',
                ingles: '-20% in gold recovery time.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.8,
                    recursoAfetado: ['Gold'],
                },
            ],
            pontosNecessarios: 3
        },
    ]
};

//============================================================================================================================================================================

let skillsMachinery = {
    tier1: [
        {
            idName: 'cropExtensionModuleI',
            name: 'Crop Extension Module I',
            descricao: {
                portugues: 'Permitir que sementes de Rhubarb e Zucchini sejam usadas na CM.',
                ingles: 'Allow Rhubarb and Zucchini seeds to be used in the CM.'
            },
            possui: false,
            permissao: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: ['Rhubarb', 'Zucchini'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'cropProcessorUnit',
            name: 'Crop Processor Unit',
            descricao: {
                portugues: '-5% no tempo de crescimento da CM, +10% no consumo de Oil.',
                ingles: '-5% in CM growth time, +10% in Oil consumption.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'xCM',
                    buff: 0.95,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli'],
                },
            ],
            oilCM: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Oil'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'oilGadget',
            name: 'Oil Gadget',
            descricao: {
                portugues: '-10% no consumo de Oil.',
                ingles: '-10% in Oil consumption.'
            },
            possui: false,
            oilCM: [
                {
                    sinal: '-',
                    buff: 0.1,
                    recursoAfetado: ['Oil'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'oilExtraction',
            name: 'Oil Extraction',
            descricao: {
                portugues: '+1 Oil ao coletar das reservas.',
                ingles: '+1 Oil when collecting from reserves.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Oil'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'leakProofTank',
            name: 'Leak-Proof Tank',
            preco: '',
            descricao: {
                portugues: 'Triplica a capacidade do tanque de Oil da Crop Machine',
                ingles: 'Triple the Oil tank capacity of the Crop Machine.'
            },
            possui: false,
            conforto: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: ['Oil'],
                },
            ],
            pontosNecessarios: 1
        },
    ],
    tier2: [
        {
            idName: 'cropExtensionModuleII',
            name: 'Crop Extension Module II',
            descricao: {
                portugues: 'Permitir que sementes de Cenoura e Repolho sejam usadas na CM.',
                ingles: 'Allow Carrot and Cabbage seeds to be used in the CM.'
            },
            possui: false,
            permissao: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: ['Carrot', 'Cabbage'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'cropExtensionModuleIII',
            name: 'Crop Extension Module III',
            descricao: {
                portugues: 'Permitir que sementes de Yam e Broccoli sejam usadas na CM.',
                ingles: 'Allow Yam and Broccoli seeds to be used in the CM.'
            },
            possui: false,
            permissao: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: ['Yam', 'Broccoli'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'rapidRig',
            name: 'Rapid Rig',
            descricao: {
                portugues: '-20% no tempo de crescimento da CM, +40% no consumo de Oil.',
                ingles: '-20% in CM growth time, +40% in Oil consumption.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'xCM',
                    buff: 0.8,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli'],
                },
            ],
            oilCM: [
                {
                    sinal: '+',
                    buff: 0.4,
                    recursoAfetado: ['Oil'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'oilBeBack',
            name: 'Oil Be Back',
            descricao: {
                portugues: '-20% no tempo de reabastecimento do Oil.',
                ingles: '-20% in Oil refilling time.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.8,
                    recursoAfetado: ['Oil'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'oilRig',
            name: 'Oil Rig',
            descricao: {
                portugues: 'A broca de petróleo requer 20 lãs em vez de couro para ser fabricada',
                ingles: 'Oil Drill requires 20 Wool instead of Leather to craft'
            },
            possui: false,
            troca: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: ['Oil Drill'],
                },
            ],
            pontosNecessarios: 2
        },
    ],
    tier3: [
        {
            idName: 'fieldExpansionModule',
            name: 'Field Expansion Module',
            descricao: {
                portugues: '+5 pacotes adicionados à máquina.',
                ingles: '+5 packages added to the machine.'
            },
            possui: false,
            espaco: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: ['CM'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'fieldExtensionModule',
            name: 'Field Extension Module',
            descricao: {
                portugues: '+5 plots adicionados à máquina.',
                ingles: '+5 plots added to the machine.'
            },
            possui: false,
            plotsCM: [
                {
                    sinal: '+',
                    buff: 5,
                    recursoAfetado: [''],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'efficiencyExtensionModule',
            name: 'Efficiency Extension Module',
            descricao: {
                portugues: '-30% no consumo de Oil.',
                ingles: '-30% in Oil consumption.'
            },
            possui: false,
            oilCM: [
                {
                    sinal: '-',
                    buff: 0.3,
                    recursoAfetado: ['Oil'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'greaseLightning',
            name: 'Grease Lightning',
            descricao: {
                portugues: 'Fazer poços de Oil vazios se reabastecerem instantaneamente (1/96h).',
                ingles: 'Make empty Oil wells refill instantly (1/96h).'
            },
            possui: false,
            reset: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: ['Oil'],
                },
            ],
            pontosNecessarios: 3
        },
    ]
};

//============================================================================================================================================================================

let skillsGreenhouse = {
    tier1: [
        {
            idName: 'glassRoom',
            name: 'Glass Room',
            descricao: {
                portugues: '+0,1 no rendimento na produção da greenhouse.',
                ingles: '+0.1 in greenhouse production yield.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'seedyBusiness',
            name: 'Seedy Business',
            descricao: {
                portugues: '-15% no custo das sementes da greenhouse.',
                ingles: '-15% in the cost of greenhouse seeds.'
            },
            possui: false,
            coins: [
                {
                    sinal: 'xC',
                    buff: 0.85,
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'riceAndShine',
            name: 'Rice and Shine',
            descricao: {
                portugues: '-5% no tempo de crescimento dos produtos da greenhouse.',
                ingles: '-5% in the growth time of greenhouse products.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.95,
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                },
            ],
            pontosNecessarios: 1
        },
        {
            idName: 'VictoriasSecretary',
            name: 'Victoria\'s Secretary',
            descricao: {
                portugues: '+50% em coins nas entregas da Victoria.',
                ingles: '+50% in coins on Victoria\'s deliveries.'
            },
            possui: false,
            delivery: [
                {
                    sinal: 'x',
                    buff: 1.5,
                    recursoAfetado: [''],
                },
            ],
            pontosNecessarios: 1
        },
    ],
    tier2: [
        {
            idName: 'oliveExpress',
            name: 'Olive Express',
            descricao: {
                portugues: '-10% no tempo de crescimento das Olives.',
                ingles: '-10% in the growth time of olives.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Olive'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'riceRocket',
            name: 'Rice Rocket',
            descricao: {
                portugues: '-10% no tempo de crescimento da Rice.',
                ingles: '-10% in the growth time of rice.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Rice'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'vineVelocity',
            name: 'Vine Velocity',
            descricao: {
                portugues: '-10% no tempo de crescimento das Grapes.',
                ingles: '-10% in the growth time of grapes.'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Grape'],
                },
            ],
            pontosNecessarios: 2
        },
        {
            idName: 'seededBounty',
            name: 'Seeded Bounty',
            descricao: {
                portugues: '+0,5 no rendimento da produção da GH, +1 semente de estufa para plantar.',
                ingles: '+0.5 in GH production yield, +1 greenhouse seed to plant.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                },
                {
                    sinal: '+S',
                    buff: 1,
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                },
            ],
            pontosNecessarios: 2
        },
    ],
    tier3: [
        {
            idName: 'greenhouseGuru',
            name: 'Greenhouse Guru',
            descricao: {
                portugues: 'Faça todas as culturas da GH que estão crescendo ficarem prontas para a colheita (1/96h).',
                ingles: 'Make all GH crops that are growing ready for harvest (1/96h).'
            },
            possui: false,
            reset: [
                {
                    sinal: '',
                    buff: '',
                    recursoAfetado: [''],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'greenhouseGamble',
            name: 'Greenhouse Gamble',
            descricao: {
                portugues: '25% de chance de +1 na produção da GH.',
                ingles: '25% chance of +1 in GH production.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'slickSaver',
            name: 'Slick Saver',
            descricao: {
                portugues: '-1 Oil para cultivar produtos da GH.',
                ingles: '-1 Oil to cultivate GH products.'
            },
            possui: false,
            oilGH: [
                {
                    sinal: '-',
                    buff: 1,
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                },
            ],
            pontosNecessarios: 3
        },
        {
            idName: 'greasyPlants',
            name: 'Greasy Plants',
            descricao: {
                portugues: '+1 no rendimento na produção da GH, +100% no consumo de Oil.',
                ingles: '+1 in GH production yield, +100% in Oil consumption.'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                },
            ],
            oilGH: [
                {
                    sinal: 'x',
                    buff: 2,
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                },
            ],
            pontosNecessarios: 3
        },
    ]
};

//============================================================================================================================================================================
//Todas arvores de skills separadas
let todasSkillsCrops      = [...skillsCrops.tier1,      ...skillsCrops.tier2,      ...skillsCrops.tier3];
let todasSkillsFruits     = [...skillsFruits.tier1,     ...skillsFruits.tier2,     ...skillsFruits.tier3];
let todasSkillsTrees      = [...skillsTrees.tier1,      ...skillsTrees.tier2,      ...skillsTrees.tier3];
let todasSkillsMinerals   = [...skillsMinerals.tier1,   ...skillsMinerals.tier2,   ...skillsMinerals.tier3];
let todasSkillsMachinery  = [...skillsMachinery.tier1,  ...skillsMachinery.tier2,  ...skillsMachinery.tier3];
let todasSkillsGreenhouse = [...skillsGreenhouse.tier1, ...skillsGreenhouse.tier2, ...skillsGreenhouse.tier3];

//============================================================================================================================================================================
//Todas arvores de skills juntas
let todasSkillsComTier = [
    ...skillsCrops.tier1,      ...skillsCrops.tier2,      ...skillsCrops.tier3,
    ...skillsFruits.tier1,     ...skillsFruits.tier2,     ...skillsFruits.tier3,
    ...skillsTrees.tier1,      ...skillsTrees.tier2,      ...skillsTrees.tier3,
    ...skillsMinerals.tier1,   ...skillsMinerals.tier2,   ...skillsMinerals.tier3,
    ...skillsMachinery.tier1,  ...skillsMachinery.tier2,  ...skillsMachinery.tier3,
    ...skillsGreenhouse.tier1, ...skillsGreenhouse.tier2, ...skillsGreenhouse.tier3,
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