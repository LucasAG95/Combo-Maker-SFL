let collectibles = {
    ferreiro: [
        //Contrução - (estoques)
        {
            idNumber: '',
            idName: 'warehouse',
            name: 'Warehouse',
            preco: '',
            descricao: {
                portugues: '+20% de Sementes no stock',
                ingles: '+20% in Seed stock'
            },
            possui: true,
            estoque: [
                {
                    sinal: 'x',
                    buff: 1.2,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean',
                        'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale',
                        'Artichoke', 'Barley', 'Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana', 'Grape', 'Rice', 'Olive'],
                }
            ],
        },
        {
            idNumber: '',
            idName: 'toolshed',
            name: 'Toolshed',
            preco: '',
            descricao: {
                portugues: '+50% de ferramentas no stock',
                ingles: '+50% tools in stock'
            },
            possui: false,
            estoque: [
                {
                    sinal: 'x',
                    buff: 1.5,
                    recursoAfetado: ['Axe', 'Pickaxe', 'Stone Pickaxe', 'Iron Pickaxe', 'Gold Pickaxe', 'Oil Drill', 'Fishing Rod', 'Sand Shovel', 'Sand Drill'],
                }
            ],
        },
        //Crops
        {
            idNumber: '',
            idName: 'basicScarecrow',
            name: 'Basic Scarecrow',
            preco: '',
            descricao: {
                portugues: '-20% no tempo de Crops Basicas - Efeito em 9 Plots',
                ingles: '-20% in Basic Crop time - Effect on 9 Plots'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buffBase: 0.8,
                    condicionalSkill: {
                        dependeDe: 'chonkyScarecrow',
                        novoBuff: 0.7,
                    },
                    buff: 0.8,
                    recursoAfetado: [''],
                },
            ], 
        },
        {
            idNumber: '',
            idName: 'scaryMike',
            name: 'Scary Mike',
            preco: '',
            descricao: {
                portugues: '+0.2 Medium Crops - Efeito em 9 Plots',
                ingles: '+0.2 Medium Crops - Effect on 9 Plots'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+A',
                    buffBase: 0.2 * 9,
                    condicionalSkill: {
                        dependeDe: 'horrorMike',
                        novoBuff: 0.3 * 49,
                    },
                    buff: 0.2 * 9,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip']
                }   
            ],   
        },
        {
            idNumber: '',
            idName: 'laurieTheChuckleCrow',
            name: 'Laurie the Chuckle Crow',
            preco: '',
            descricao: {
                portugues: '+0.2 Advanced Crops - Efeito em 9 Plots',
                ingles: '+0.2 Advanced Crops - Effect on 9 Plots'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+A',
                    buffBase: 0.2 * 9,
                    condicionalSkill: {
                        dependeDe: 'lauriesGains',
                        novoBuff: 0.3 * 49,
                    },
                    buff: 0.2 * 9,
                    recursoAfetado: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley']
                }
            ],
        },
        //Frutas
        {
            idNumber: '',
            idName: 'immortalPear',
            name: 'Immortal Pear',
            preco: '',
            descricao: {
                portugues: 'Árvores frutíferas duram +1 rodada',
                ingles: 'Fruit trees last +1 round'
            },
            possui: false,
            duracao: [
                {
                    sinal: '+',
                    buffBase: 1,
                    condicionalSkill: {
                        dependeDe: 'pearTurbocharge',
                        novoBuff: 2,
                    },
                    buff: 1,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana']
                }
            ],
        },
        {
            idNumber: '',
            idName: 'macaw',
            name: 'Macaw',
            preco: '',
            descricao: {
                portugues: '+0.1 Fruta (menos frutas da GH)',
                ingles: 'Fruit trees last +1 round'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buffBase: 0.1,
                    condicionalSkill: {
                        dependeDe: 'loyalMacaw',
                        novoBuff: 0.2,
                    },
                    buff: 0.1,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana']
                }
            ],
        },
        //Madeira
        {
            idNumber: '',
            idName: 'squirrel',
            name: 'Squirrel',
            preco: '',
            descricao: {
                portugues: '+0.1 Madeira',
                ingles: '+0.1 Wood'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Wood']
                }
            ],
        },
        //Minerios
        {
            idNumber: '',
            idName: 'stoneBeetle',
            name: 'Stone Beetle',
            preco: '',
            descricao: {
                portugues: '+0.1 Pedra',
                ingles: '+0.1 Stone'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Stone']
                }
            ]
        },
        {
            idNumber: '',
            idName: 'ironBeetle',
            name: 'Iron Beetle',
            preco: '',
            descricao: {
                portugues: '+0.1 Ferro',
                ingles: '+0.1 Iron'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Iron']
                }
            ]
        },
        {
            idNumber: '',
            idName: 'goldBeetle',
            name: 'Gold Beetle',
            preco: '',
            descricao: {
                portugues: '+0.1 Ouro',
                ingles: '+0.1 Gold'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Gold']
                }
            ]
        },
    ],
    crops: [
        {
            idNumber: 420,
            idName: 'nancy',
            name: 'Nancy',
            preco: '',
            descricao: {
                portugues: '-15% no tempo das Crops',
                ingles: '-15% in Crop time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.85,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean',
                        'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale',
                        'Artichoke', 'Barley', 'Rice', 'Olive'],
                }   
            ]         
        },
        {
            idNumber: 404,
            idName: 'scarecrow',
            name: 'Scarecrow',
            preco: '',
            descricao: {
                portugues: '-15% no tempo das Crops, +20% Crops',
                ingles: '-15% in Crop time, +20% Crops'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.2,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean',
                        'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale',
                        'Artichoke', 'Barley', 'Rice', 'Olive'],
                }
            ]
        },
        {
            idNumber: 421,
            idName: 'kuebiko',
            name: 'Kuebiko',
            preco: '',
            descricao: {
                portugues: '-15% no tempo das Crops, +20% Crops e Sementes Grátis',
                ingles: '-15% in Crop time, +20% Crops and Free Seeds'
            },
            possui: false,
            coins: [
                {
                    sinal: 'xC',
                    buff: 0,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean',
                        'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale',
                        'Artichoke', 'Barley', 'Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana', 'Grape', 'Rice', 'Olive'],
                }
            ]
        },
        //colocar nome dos eventos em recurso afetado
        {
            idNumber: 2263,
            idName: 'springGuardian',
            name: 'Spring Guardian',
            preco: '',
            descricao: {
                portugues: 'Proteção contra Desastres de Primavera, Eventos de Primavera Dobrados',
                ingles: 'Spring Disaster Protection, Blessed Spring Events'
            },
            possui: false,
            upEvento: [
                {
                    sinal: 'x',
                    buff: 2,
                    recursoAfetado: ['spring'],
                },
            ],
            estacao: ['spring']
        },
        {
            idNumber: 2262,
            idName: 'summerGuardian',
            name: 'Summer Guardian',
            preco: '',
            descricao: {
                portugues: 'Proteção contra Desastres de Verão, Eventos de Verão Dobrados',
                ingles: 'Summer Disaster Protection, Blessed Summer Events'
            },
            possui: false,
            upEvento: [
                {
                    sinal: 'x',
                    buff: 2,
                    recursoAfetado: ['summer'],
                },
            ],
            estacao: ['Summer']
        },
        {
            idNumber: 2264,
            idName: 'autumnGuardian',
            name: 'Autumn Guardian',
            preco: '',
            descricao: {
                portugues: 'Proteção contra Desastres de Outono, Eventos de Outono Dobrados',
                ingles: 'Autumn Disaster Protection, Blessed Autumn Events'
            },
            possui: false,
            upEvento: [
                {
                    sinal: 'x',
                    buff: 2,
                    recursoAfetado: ['autumn'],  
                },
            ],
            estacao: ['autumn']
        },
        {
            idNumber: 2261,
            idName: 'winterGuardian',
            name: 'Winter Guardian',
            preco: '',
            descricao: {
                portugues: 'Proteção contra Desastres de Inverno, Eventos de Inverno Dobrados',
                ingles: 'Winter Disaster Protection, Blessed Winter Events'
            },
            possui: false,
            upEvento: [
                {
                    sinal: 'x',
                    buff: 2,
                    recursoAfetado: ['winter'],
                },
            ],
            estacao: ['winter']
        },
        //encerra guardiões (ajustar eles)
        {
            idNumber: 448,
            idName: 'lunarCalendar',
            name: 'Lunar Calendar',
            preco: '',
            descricao: {
                portugues: '10% no tempo das Crops',
                ingles: '-10% in Crop time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 
                        'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley', 'Rice', 'Olive'],
                }
            ]
        },
        {
            idNumber: 407,
            idName: 'gnome',
            name: 'Gnome',
            preco: '',
            descricao: {
                portugues: '+10 Medium ou Advanced Crops - Efeito em 1 Plot',
                ingles: '+10 Medium or Advanced Crops - Effect on 1 Plot'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+A',
                    buff: 10,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot',  'Cauliflower',
                        'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                }
            ]
        },
        {
            idNumber: 466,
            idName: 'sirGoldensnout',
            name: 'Sir Goldensnout',
            preco: '',
            descricao: {
                portugues: '+0.5 Crops - Efeito em 12 Plots',
                ingles: '+0.5 Crops - Effect on 12 Plots'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+A',
                    buff: 0.5 * 12,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper',
                        'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                }
            ]
        },
        {
            idNumber: 437,
            idName: 'stellarSunflower',
            name: 'Stellar Sunflower',
            preco: '',
            descricao: {
                portugues: '3% de chance em obter +10 Sunflowers',
                ingles: '3% chance to get +10 Sunflowers'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff:  0.3,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idNumber: 433,
            idName: 'peeledPotato',
            name: 'Peeled Potato',
            preco: '',
            descricao: {
                portugues: '20% de chance em obter +1 Batata',
                ingles: '20% chance to get +1 Potato'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff:  20 / 100,
                    recursoAfetado: ['Potato'],
                }
            ]
        },
        {
            idNumber: 438,
            idName: 'potentPotato',
            name: 'Potent Potato',
            preco: '',
            descricao: {
                portugues: '3% de chance em obter +10 Batatas',
                ingles: '3% chance to get +10 Potatoes'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff:  3 / 100 * 10,
                    recursoAfetado: ['Potato'],
                }
            ]
        },
        {
            idNumber: 432,
            idName: 'victoriaSisters',
            name: 'Victoria Sisters',
            preco: '',
            descricao: {
                portugues: '+20% de Abóbora ',
                ingles: '+20% Pumpkins'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff:  1.2,
                    recursoAfetado: ['Pumpkin'],
                }
            ]
        },
        {
            idNumber: '',
            idName: 'labGrownPumpkin',
            name: 'Lab Grown Pumpkin',
            preco: '',
            descricao: {
                portugues: '+0,3 Abóbora',
                ingles: '+0.3 Pumpkins'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff:  0.3,
                    recursoAfetado: ['Pumpkin'],
                }
            ]
        },
        {
            idNumber: 469,
            idName: 'freyaFox',
            name: 'Freya Fox',
            preco: '',
            descricao: {
                portugues: '+0.5 Abóboras',
                ingles: '+0.5 Pumpkins'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Pumpkin'],
                }
            ]
        },
        {
            idNumber: 2270,
            idName: 'giantZucchini',
            name: 'Giant Zucchini',
            preco: '',
            descricao: {
                portugues: 'Zucchini cresce 2x mais rápido',
                ingles: '2x Zuchinni Speed'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Zucchini'],
                }
            ]
        },
        {
            idNumber: 909,
            idName: 'easterBunny',
            name: 'Easter Bunny',
            preco: '',
            descricao: {
                portugues: '+20% Cenouras',
                ingles: '+20% Carrots'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.2,
                    recursoAfetado: ['Carrot'],
                }
            ]
        },
        {
            idNumber: 926,
            idName: 'pabloTheBunny',
            name: 'Pablo The Bunny',
            preco: '',
            descricao: {
                portugues: '+0.1 Cenoura',
                ingles: '+0.1 Carrot'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Carrot'],
                }
            ]
        },
        {
            idNumber: '',
            idName: 'labGrownCarrot',
            name: 'Lab Grown Carrot',
            preco: '',
            descricao: {
                portugues: '+0.2 Cenouras',
                ingles: '+0,2 Carrots'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Carrot'],
                }
            ]
        },
        {
            idNumber: 2268,
            idName: 'giantYam',
            name: 'Giant Yam',
            preco: '',
            descricao: {
                portugues: '+0.5 Yams',
                ingles: '+0.5 Yams'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Yam'],
                }
            ]
        },
        {
            idNumber: 455,
            idName: 'karkinos',
            name: 'Karkinos',
            preco: '',
            descricao: {
                portugues: '+0.1 Cabbage (Não funciona com Cabbage Boy)',
                ingles: '+0.1 Cabbage (Doesn\'t work with Cabbage Boy)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buffBase: 0.1,
                    condicionalNft: {
                        dependeDe: 'cabbageBoy',
                        novoBuff: 0,
                    },
                    buff: 0.1,
                    recursoAfetado: ['Cabbage'],
                }
            ]
        },
        {
            idNumber: 434,
            idName: 'cabbageBoy',
            name: 'Cabbage Boy',
            preco: '',
            descricao: {
                portugues: '+0.25 Cabbage ou +0.5 Cabbage possuindo Cabbage Girl',
                ingles: '+0.25 Cabbage or +0.5 Cabbage having Cabbage Girl'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buffBase: 0.25,
                    condicionalNft: {
                        dependeDe: 'cabbageGirl',
                        novoBuff: 0.5,
                    },
                    buff: 0.25,
                    recursoAfetado: ['Cabbage'],
                }
            ]
        },
        {
            idNumber: 435,
            idName: 'cabbageGirl',
            name: 'Cabbage Girl',
            preco: '',
            descricao: {
                portugues: '-50% no tempo das Cabbages',
                ingles: '-50% in Cabbage time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Cabbage'],
                }
            ]
        },
        {
            idNumber: 496,
            idName: 'soybliss',
            name: 'Soybliss',
            preco: '',
            descricao: {
                portugues: '+1 Soybean',
                ingles: '+1 Soybean'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Soybean'],
                }
            ]
        },
        {
            idNumber: 410,
            idName: 'goldenCauliflower',
            name: 'Golden Cauliflower',
            preco: '',
            descricao: {
                portugues: '+100% Cauliflower',
                ingles: '+100% Cauliflower'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 2,
                    recursoAfetado: ['Cauliflower'],
                }
            ]
        },
        {
            idNumber: 418,
            idName: 'mysteriousParsnip',
            name: 'Mysterious Parsnip',
            preco: '',
            descricao: {
                portugues: '-50% no tempo das Parsnips',
                ingles: '-50% in Parsnip time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Parsnip'],
                }
            ]
        },
        {
            idNumber: 457,
            idName: 'purpleTrail',
            name: 'Purple Trail',
            preco: '',
            descricao: {
                portugues: '+0.2 Eggplants',
                ingles: '+0.2 Eggplant'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Eggplant'],
                }
            ]
        },
        {
            idNumber: 458,
            idName: 'obie',
            name: 'Obie',
            preco: '',
            descricao: {
                portugues: '-25% no tempo das Eggplants',
                ingles: '-25% in Eggplant time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.75,
                    recursoAfetado: ['Eggplant'],
                }
            ]
        },
        {
            idNumber: 459,
            idName: 'maximus',
            name: 'Maximus',
            preco: '',
            descricao: {
                portugues: '+1 Eggplant',
                ingles: '+1 Eggplant'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Eggplant'],
                }
            ]
        },
        {
            idNumber: 471,
            idName: 'poppy',
            name: 'Poppy',
            preco: '',
            descricao: {
                portugues: '+0.1 Milho',
                ingles: '+0.1 Corn'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Corn'],
                }
            ]
        },
        {
            idNumber: 474,
            idName: 'queenCornelia',
            name: 'Queen Cornelia',
            preco: '',
            descricao: {
                portugues: '+1 Corn - Efeito em 10 Plots',
                ingles: '+1 Corn - Effect on 10 Plots'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+A',
                    buff: 1 * 10,
                    recursoAfetado: ['Corn'],
                }
            ]
        },
        {
            idNumber: 473,
            idName: 'kernaldo',
            name: 'Kernaldo',
            preco: '',
            descricao: {
                portugues: '-25% no tempo do Corn',
                ingles: '-25% in Corn time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.75,
                    recursoAfetado: ['Corn'],
                }
            ]
        },
        {
            idNumber: 2307,
            idName: 'giantOnion',
            name: 'Giant Onion',
            preco: '',
            descricao: {
                portugues: '+3 Onions',
                ingles: '+3 Onions'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 3,
                    recursoAfetado: ['Onion'],
                }
            ]
        },
        {
            idNumber: 2308,
            idName: 'giantTurnip',
            name: 'Giant Turnip',
            preco: '',
            descricao: {
                portugues: 'Turnips crescem 2x mais rápido',
                ingles: '2x Turnip Growth Speed'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Turnip'],
                }
            ]
        },
        {
            idNumber: 461,
            idName: 'hoot',
            name: 'Hoot',
            preco: '',
            descricao: {
                portugues: '+0.5 Radish, Wheat, Kale, Rice e Barley',
                ingles: '+0.5 Radish, Wheat, Kale, Rice e Barley'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Radish', 'Wheat', 'Kale', 'Barley', 'Rice'],
                }
            ]
        },
        {
            idNumber: 439,
            idName: 'radicalRadish',
            name: 'Radical Radish',
            preco: '',
            descricao: {
                portugues: '3% de chance em obter +10 Radishes',
                ingles: '3% chance to get +10 Radishes'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 3 / 100 * 10,
                    recursoAfetado: ['Radish'],
                }
            ]
        },
        {
            idNumber: '',
            idName: 'labGrownRadish',
            name: 'Lab Grown Radish',
            preco: '',
            descricao: {
                portugues: '+0,4 Radishes',
                ingles: '+0,4 Radishes'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.4,
                    recursoAfetado: ['Radish'],
                }
            ]
        },
        {
            idNumber: 1227,
            idName: 'foliant',
            name: 'Foliant',
            preco: '',
            descricao: {
                portugues: '+0.2 Kale',
                ingles: '+0.2 Kale'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Kale'],
                }
            ]
        },
        {
            idNumber: 2272,
            idName: 'giantKale',
            name: 'Giant Kale',
            preco: '',
            descricao: {
                portugues: '+2 Kale',
                ingles: '+2 Kale'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 2,
                    recursoAfetado: ['Kale'],
                }
            ]
        },
        {
            idNumber: '',
            idName: 'giantArtichoke',
            name: 'Giant Artichoke',
            preco: '',
            descricao: {
                portugues: '+2 Artichokes',
                ingles: '+2 Artichokes'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 2,
                    recursoAfetado: ['Artichoke'],
                }
            ]
        },
        {
            idNumber: 2152,
            idName: 'sheafOfPlenty',
            name: 'Sheaf of Plenty',
            preco: '',
            descricao: {
                portugues: '+2 Barley',
                ingles: '+2 Barley'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 2,
                    recursoAfetado: ['Barley'],
                }
            ]
        },
    ],
    cropMachine: [
        {
            idNumber: 2309, //rever dps
            idName: 'groovyGramophone',
            name: 'Groovy Gramophone',
            preco: '',
            descricao: {
                portugues: '+100% de Velocidade de Crescimento na Crop Machine',
                ingles: '+100% Growth Speed on Crop Machine'
            },
            possui: false,
            tempoCM: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli'],
                }
            ]
        },
    ],
    fruits: [
        {
            idNumber: '',
            idName: 'fruitTuneBox',
            name: 'Fruit Tune Box',
            preco: '',
            descricao: {
                portugues: 'Frutas crescem 20% mais rápido',
                ingles: '+20% Fruit Patch Growth Speed'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.8,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                }
            ]
        },
        {
            idNumber: 2105,
            idName: 'cannonball',
            name: 'Cannonball',
            preco: '-25% in Tomato growth time',
            descricao: {
                portugues: '-25% de tempo no crescimento do Tomate',
                ingles: '-25% in Tomato growth time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.75,
                    recursoAfetado: ['Tomato'],
                }
            ]
        },
        {
            idNumber: 2122,
            idName: 'tomatoClown',
            name: 'Tomato Clown',
            preco: '-50% in Tomato growth time',
            descricao: {
                portugues: '-50% de tempo no crescimento do Tomate',
                ingles: '-50% in Tomato growth time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Tomato'],
                }
            ]
        },
        {
            idNumber: 2128,
            idName: 'tomatoBombard',
            name: 'Tomato Bombard',
            preco: '',
            descricao: {
                portugues: '+1 Tomate',
                ingles: '+1 Tomato'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Tomato'],
                }
            ]
        },
        {
            idNumber: 1539,
            idName: 'lemonShark',
            name: 'Lemon Shark',
            preco: '',
            descricao: {
                portugues: '+0.2 limões',
                ingles: '+0.2 Lemons'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Lemon'],
                }
            ]
        },
        {
            idNumber: 2109,
            idName: 'revelingLemon',
            name: 'Reveling Lemon',
            preco: '',
            descricao: {
                portugues: '+0.25 limões',
                ingles: '+0.25 Lemons'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: ['Lemon'],
                }
            ]
        },
        {
            idNumber: 2114,
            idName: 'lemonFrog',
            name: 'Lemon Frog',
            preco: '',
            descricao: {
                portugues: '-25% de tempo no crescimento do Limão',
                ingles: '-25% in Lemon growth time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.75,
                    recursoAfetado: ['Lemon'],
                }
            ]
        },
        {
            idNumber: 2121,
            idName: 'lemonTeaBath',
            name: 'Lemon Tea Bath',
            preco: '',
            descricao: {
                portugues: '-50% de tempo no crescimento do Limão',
                ingles: '-50% in Lemon growth time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Lemon'],
                }
            ]
        },
        {
            idNumber: 444,
            idName: 'blackBearry',
            name: 'Black Bearryh',
            preco: '',
            descricao: {
                portugues: '+1 Blueberry',
                ingles: '+1 Blueberry'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Blueberry'],
                }
            ]
        },
        {
            idNumber: 443,
            idName: 'squirrelMonkey',
            name: 'Squirrel Monkey',
            preco: '',
            descricao: {
                portugues: '-50% de tempo no crescimento da Laranja',
                ingles: '-50% in Orange growth time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Orange'],
                }
            ]
        },
        {
            idNumber: 442,
            idName: 'ladyBug',
            name: 'Lady Bug',
            preco: '',
            descricao: {
                portugues: '+0.25 Maças',
                ingles: '+0.25 Apples'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: ['Apple'],
                }
            ]
        },
        {
            idNumber: 487,
            idName: 'nana',
            name: 'Nana',
            preco: '',
            descricao: {
                portugues: '-10% de tempo no crescimento do Banana',
                ingles: '-10% in Banana growth time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Banana'],
                }
            ]
        },
        {
            idNumber: 488,
            idName: 'bananaChicken',
            name: 'Banana Chicken',
            preco: '',
            descricao: {
                portugues: '+0.1 Banana',
                ingles: '+0.1 Banana'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Banana'],
                }
            ]
        },
    ],
    trees: [
        {
            idNumber: 415,
            idName: 'woodyTheBeaver',
            name: 'Woody the Beaver',
            preco: '',
            descricao: {
                portugues: '+20% de Madeira',
                ingles: '+20% Wood'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.2,
                    recursoAfetado: ['Wood'],
                }
            ]
        },
        {
            idNumber: 416,
            idName: 'apprenticeBeaver',
            name: 'Apprentice Beaver',
            preco: '',
            descricao: {
                portugues: '+20% de Madeira, -50% no tempo das arvores',
                ingles: '+20% Wood, -50% in the time for trees'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Wood'],
                }
            ]
        },
        {
            idNumber: 417,
            idName: 'foremanBeaver',
            name: 'Foreman Beaver',
            preco: '',
            descricao: {
                portugues: '+20% de Madeira, -50% no tempo das arvores, corte sem machado',
                ingles: '+20% Wood, -50% in the time for trees, cut without an axe'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 0,
                    recursoAfetado: ['Axe'],
                }
            ]
        },
        {
            idNumber: 436,
            idName: 'woodNymphWendy',
            name: 'Wood Nymph Wendy',
            preco: '',
            descricao: {
                portugues: '+0.2 de Madeiras',
                ingles: '+0.2 Woods'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ]
        },
        {
            idNumber: 447,
            idName: 'tikiTotem',
            name: 'Tiki Totem',
            preco: '',
            descricao: {
                portugues: '+0.1 de Madeira',
                ingles: '+0.1 Wood'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Wood'],
                }
            ]
        },
    ],
    minerals: [
        //todos minerios
        {
            idNumber: '',
            idName: 'volcanoGnome',
            name: 'Volcano Gnome',
            preco: '',
            descricao: {
                portugues: '+0.1 Mineral (stone - iron - gold)',
                ingles: '+0.1 Mineral (stone - iron - gold)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ]
        },
        {
            idNumber: 463,
            idName: 'emeraldTurtle',
            name: 'Emerald Turtle',
            preco: '',
            descricao: {
                portugues: '+0.5 stone, iron ou gold - Efeito em 8 nodes',
                ingles: '+0.5 stone, iron or gold - Effect on 8 nodes'
            },
            possui: false, //terei que ver como colocar pra funcionar
            quantidade: [
                {
                    sinal: '+A',
                    buff: 0.5,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ]
        },
        //pedra - stone
        {
            idNumber: 428,
            idName: 'tunnelMole',
            name: 'Tunnel Mole',
            preco: '',
            descricao: {
                portugues: '+0.25 Pedras',
                ingles: '+0.25 Stones'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idNumber: 427,
            idName: 'rockGolem',
            name: 'Rock Golem',
            preco: '',
            descricao: {
                portugues: '10% de chance em obter +2 Pedras',
                ingles: '10% chance to get +2 Stones'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 10 / 100 * 2,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idNumber: 464, //ver oq fazer dps
            idName: 'tinTurtle',
            name: 'Tin Turtle',
            preco: '',
            descricao: {
                portugues: '+0.1 Pedra - Efeito em 8 nodes',
                ingles: '+0.1 Stone - Effect on 8 nodes'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+A',
                    buff: 0.1,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idNumber: 2259,
            idName: 'quarry',
            name: 'Quarry',
            preco: '',
            descricao: {
                portugues: 'Minere pedra gratuitamente',
                ingles: 'Mine stone for free'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 0,
                    recursoAfetado: ['Pickaxe'],
                }
            ]
        },
        //ferro - iron
        {
            idNumber: 429,
            idName: 'rockyTheMole',
            name: 'Rocky the Mole',
            preco: '',
            descricao: {
                portugues: '+0.25 Ferros',
                ingles: '+0.25 Irons'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        {
            idNumber: 454,
            idName: 'ironIdol',
            name: 'Iron Idol',
            preco: '',
            descricao: {
                portugues: '+1 Ferro',
                ingles: '+1 Iron'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        //ouro - gold
        {
            idNumber: 430,
            idName: 'nugget',
            name: 'Nugget',
            preco: '',
            descricao: {
                portugues: '+0.25 Ouros',
                ingles: '+0.25 Golds'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: ['Gold'],
                }
            ]
        },
        //crimstone
        {
            idNumber: 1537,
            idName: 'crimsonCarp',
            name: 'Crimson Carp',
            preco: '',
            descricao: {
                portugues: '+0.05 Crimstones',
                ingles: '+0.05 Crimstones'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.05,
                    recursoAfetado: ['Crimstone'],
                }
            ]
        },
        {
            idNumber: 494,
            idName: 'crimPeckster',
            name: 'Crim Peckster',
            preco: '',
            descricao: {
                portugues: '+0.1 Crimstone',
                ingles: '+0.1 Crimstone'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Crimstone'],
                }
            ]
        },
        //Oil
        {
            idNumber: 500,
            idName: 'knightChicken',
            name: 'Knight Chicken',
            preco: '',
            descricao: {
                portugues: '+0.1 Oil',
                ingles: '+0.1 Oil'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Oil'],
                }
            ]
        },
        {
            idNumber: 1538,
            idName: 'battleFish',
            name: 'Battle Fish',
            preco: '',
            descricao: {
                portugues: '+0.05 Oils',
                ingles: '+0.05 Oils'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.05,
                    recursoAfetado: ['Oil'],
                }
            ]
        },
        //obsidian
        {
            idNumber: 2260,
            idName: 'obsidianTurtle',
            name: 'Obsidian Turtle',
            preco: '',
            descricao: {
                portugues: '+0.5 Obsidians',
                ingles: '+0.5 Obsidians'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Obsidian'],
                }
            ]
        },
    ],
    greenhouse: [
        {
            idNumber: 495,
            idName: 'turboSprout',
            name: 'Turbo Sprout',
            preco: '',
            descricao: {
                portugues: '-50% de tempo na Greenhouse',
                ingles: '-50% of time on Greenhouse'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                }
            ]
        },
        {
            idNumber: 2120,
            idName: 'pharaohGnome',
            name: 'Pharaoh Gnome',
            preco: '',
            descricao: {
                portugues: '+2 Crops e Frutas da Greenhouse',
                ingles: '+2 Crops and Fruits from Greenhouse'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 2,
                    recursoAfetado: ['Grape', 'Rice', 'Olive'],
                }
            ]
        },
        {
            idNumber: 2016,
            idName: 'vinny',
            name: 'Vinny',
            preco: '',
            descricao: {
                portugues: '+0.25 Uvas',
                ingles: '+0.25 Grape'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: ['Grape'],
                }
            ]
        },
        {
            idNumber: 497,
            idName: 'grapeGranny',
            name: 'Grape Granny',
            preco: '',
            descricao: {
                portugues: '+1 Uva',
                ingles: '+1 Grape'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Grape'],
                }
            ]
        },
        {
            idNumber: 2034,
            idName: 'ricePanda',
            name: 'Rice Panda',
            preco: '',
            descricao: {
                portugues: '+0.25 Rices',
                ingles: '+0.25 Rices'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: ['Rice'],
                }
            ]
        },
    ]
};

let todosCollectibles = [
    ...collectibles.ferreiro,
    ...collectibles.crops,
    ...collectibles.cropMachine, 
    ...collectibles.fruits, 
    ...collectibles.greenhouse, 
    ...collectibles.trees, 
    ...collectibles.minerals
];

let mapaDeTodosCollectibles = {}
todosCollectibles.forEach(collectibles => { 
    mapaDeTodosCollectibles[collectibles.idName] = collectibles; 
});
console.log(mapaDeTodosCollectibles)

//=============================================================================================================================================================================

let wearables = {
    factions: [
        {
            idName: 'factionQuiver',
            name: '"Faction" Quiver',
            fac1: 'Bumpkin Quiver',
            fac2: 'Goblin Quiver',
            fac3: 'Nightshade Quiver',
            fac4: 'Sunflorian Quiver',
            descricao: {
                portugues: '+0.25 Crops & Frutas',
                ingles: '+0.25 Crops & Fruits'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 
                        'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley', 'Tomato', 'Lemon', 'Blueberry',
                        'Orange', 'Apple', 'Banana', 'Grape', 'Rice', 'Olive'],
                }
            ]
        },
        {
            idName: 'factionCrown',
            name: '"Faction" Crown',
            fac1: 'Bumpkin Crown',
            fac2: 'Goblin Crown',
            fac3: 'Nightshade Crown',
            fac4: 'Sunflorian Crown',
            descricao: {
                portugues: '+25% FLOWER e Coin Deliveries / +10% Marks',
                ingles: '+25% FLOWER and Coin Deliveries / +10% Marks'
            },
            possui: false,
            delivery: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: [''],
                }
            ]
        },
        {
            idName: 'factionShield',
            name: '"Faction" Shield',
            fac1: 'Bumpkin Shield',
            fac2: 'Goblin Shield',
            fac3: 'Nightshade Shield',
            fac4: 'Sunflorian Shield',
            descricao: {
                portugues: '+0.25 de madeira e minerais',
                ingles: '+0.25 Wood and Minerals'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: ['Tree', 'Stone', 'Iron', 'Gold'],
                }
            ]
        },
        {
            idName: 'factionMedallion',
            name: '"Faction" Medallion',
            fac1: 'Bumpkin Medallion',
            fac2: 'Goblin Medallion',
            fac3: 'Nightshade Medallion',
            fac4: 'Sunflorian Medallion',
            descricao: {
                portugues: '-25% no Tempo de Cozimento',
                ingles: '-25% Cooking Time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.75,
                    recursoAfetado: [''],
                }
            ]
        },
    ],
    crops: [
        {
            idNumber: 30,
            idName: 'greenAmulet',
            name: 'Green Amulet',
            preco: '',
            descricao: {
                portugues: 'Chance de colher 10x mais crops',
                ingles: 'Chance to harvest 10x more crops'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli',
                        'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish',
                        'Wheat', 'Kale', 'Artichoke', 'Barley', 'Rice', 'Olive'],
                }
            ]
        },
        {
            idNumber: 162,
            idName: 'infernalPitchfork',
            name: 'Infernal Pitchfork',
            preco: '',
            descricao: {
                portugues: '+3 Crops',
                ingles: '+3 Crops'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli',
                        'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish',
                        'Wheat', 'Kale', 'Artichoke', 'Barley', 'Rice', 'Olive'],
                }
            ]
        },
        {
            idNumber: [72, 73], //dps ver se isso da certo
            idName: 'devilOrAngelWings',
            name: ['Devil Wings - Angel Wings'], //dps ver se isso da certo
            preco: '',
            descricao: {
                portugues: '30% de chance em colher crop instantaneamente',
                ingles: '30% chance to harvest crop instantly'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'xI',
                    buff: 1.4,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli',
                        'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish',
                        'Wheat', 'Kale', 'Artichoke', 'Barley', 'Rice', 'Olive'],
                },
            ],
            qtdUsada: [
                {
                    sinal: 'x',
                    buff: 1.4,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli',
                        'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish',
                        'Wheat', 'Kale', 'Artichoke', 'Barley', 'Rice', 'Olive'],
                }
            ],
        },
        {
            idNumber: 432,
            idName: 'blossomWard',
            name: 'Blossom Ward',
            preco: '',
            descricao: {
                portugues: '+1 Crop por plot na Primavera',
                ingles: '+1 Crop per plot in Spring'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli',
                        'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish',
                        'Wheat', 'Kale', 'Artichoke', 'Barley'],
                },
            ],
            estacao: ['spring']
        },
        {
            idNumber: 431,
            idName: 'solflareAegis',
            name: 'Solflare Aegis',
            preco: '',
            descricao: {
                portugues: '-50% no tempo das Crops no Verão',
                ingles: '-50% in Crop time in Summer'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli',
                        'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish',
                        'Wheat', 'Kale', 'Artichoke', 'Barley'],
                },
            ],
            estacao: ['summer']
        },
        {
            idNumber: 433,
            idName: 'autumnsEmbrace',
            name: 'Autumn\'s Embrace',
            preco: '',
            descricao: {
                portugues: '-50% no tempo das Crops no Outono',
                ingles: '-50% in Crop time in Autumn'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli',
                        'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish',
                        'Wheat', 'Kale', 'Artichoke', 'Barley'],
                },
            ],
            estacao: ['autumn']
        },
        {
            idNumber: 434,
            idName: 'frozenHeart',
            name: 'Frozen Heart',
            preco: '',
            descricao: {
                portugues: '+1 Crop por plot no Inverno',
                ingles: '+1 Crop per plot in Winter'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',  'Carrot', 'Yam', 'Cabbage', 'Broccoli',
                        'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish',
                        'Wheat', 'Kale', 'Artichoke', 'Barley'],
                },
            ],
            estacao: ['winter']
        },
        {
            idNumber: 31,
            idName: 'sunflowerShield',
            name: 'Sunflower Shield',
            preco: '',
            descricao: {
                portugues: 'Sementes de girassol Grátis',
                ingles: 'Free Sunflower Seeds'
            },
            possui: false,
            coins: [
                {
                    sinal: 'xC',
                    buff: 0,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idNumber: 27,
            idName: 'sunflowerAmulet',
            name: 'Sunflower Amulet',
            preco: '',
            descricao: {
                portugues: '+10% Sunflower',
                ingles: '+10% Sunflower'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idNumber: 28,
            idName: 'carrotAmulet',
            name: 'Carrot Amulet',
            preco: '',
            descricao: {
                portugues: '-20% no tempo de crescimento da Cenoura',
                ingles: '-20% in Carrot growth time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.8,
                    recursoAfetado: ['Carrot'],
                }
            ]
        },
        {
            idNumber: 454,
            idName: 'broccoliHat',
            name: 'Broccoli Hat',
            preco: '',
            descricao: {
                portugues: 'Broccoli cresce 2x mais rápido',
                ingles: '2x Broccoli Speed'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Broccoli'],
                }
            ]
        },
        {
            idNumber: 319,
            idName: 'tofuMask',
            name: 'Tofu Mask',
            preco: '',
            descricao: {
                portugues: '+0.1 Soybean',
                ingles: '+0.1 Soybean'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Soybean'],
                }
            ]
        },
        {
            idNumber: 29,
            idName: 'beetrootAmulet',
            name: 'Beetroot Amulet',
            preco: '',
            descricao: {
                portugues: '+20% de Beterraba',
                ingles: '+20% Beetroot'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.2,
                    recursoAfetado: ['Beetroot'],
                }
            ]
        },
        {
            idNumber: 458,
            idName: 'redPepperOnesie',
            name: 'Red Pepper Onesie',
            preco: '',
            descricao: {
                portugues: '-25% no tempo de colheita da pimenta(Pepper)',
                ingles: '-25% harvest time for Pepper'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.75,
                    recursoAfetado: ['Pepper'],
                }
            ]
        },
        {
            idNumber: 56,
            idName: 'parsnip',
            name: 'Parsnip',
            preco: '',
            descricao: {
                portugues: '+20% Parsnip',
                ingles: '+20% Parsnip'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.2,
                    recursoAfetado: ['Parsnip'],
                }
            ]
        },
        {
            idNumber: 124,
            idName: 'eggplantOnesie',
            name: 'Eggplant Onesie',
            preco: '',
            descricao: {
                portugues: '+0.1 Eggplant',
                ingles: '+0.1 Eggplant'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Eggplant'],
                }
            ]
        },
        {
            idNumber: 174,
            idName: 'cornOnesie',
            name: 'Corn Onesie',
            preco: '',
            descricao: {
                portugues: '+0.1 Milho',
                ingles: '+0.1 Corn'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Corn'],
                }
            ]
        },
        {
            idNumber: 422,
            idName: 'ladybugSuit',
            name: 'Ladybug Suit',
            preco: '',
            descricao: {
                portugues: '-25% do custo da Semente de Onion(Cebola) em Coins',
                ingles: '-25% Onion Seed Coin cost'
            },
            possui: false,
            coins: [
                {
                    sinal: 'xC',
                    buff: 0.75,
                    recursoAfetado: ['Onion'],
                }
            ]
        },
        {
            idNumber: 414,
            idName: 'sickle',
            name: 'Sickle',
            preco: '',
            descricao: {
                portugues: '+2 Wheat',
                ingles: '+2 Wheat'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 2,
                    recursoAfetado: ['Wheat'],
                }
            ]
        },
    ],
    fruits: [
        {
            idNumber: 350,
            idName: 'camelOnesie',
            name: 'Camel Onesie',
            preco: '',
            descricao: {
                portugues: '+0.1 Frutas (menos frutas da GH)',
                ingles: '+0.1 Fruits (except GH fruits)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                }
            ]
        },
        {
            idNumber: '',
            idName: 'fruitPickerApron',
            name: 'Fruit Picker Apron',
            preco: '',
            descricao: {
                portugues: '+0.1 Apple, Blueberry, Orange e Banana',
                ingles: '+0.1 Apple, Blueberry, Orange e Banana'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Apple', 'Blueberry', 'Orange', 'Banana'],
                }
            ]
        },
        {
            idNumber: 371,
            idName: 'lemonShield',
            name: 'Lemon Shield',
            preco: '',
            descricao: {
                portugues: '+1 Limão',
                ingles: '+1 Lemon'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Lemon'],
                }
            ]
        },
        {
            idNumber: 251,
            idName: 'bananaOnesie',
            name: 'Banana Onesie',
            preco: '',
            descricao: {
                portugues: '-20% no tempo de crescimento da Banana',
                ingles: '-20% in Banana growth time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.8,
                    recursoAfetado: ['Banana'],
                }
            ]
        },
        {
            idNumber: 250,
            idName: 'bananaAmulet',
            name: 'Banana Amulet',
            preco: '',
            descricao: {
                portugues: '+0.5 Bananas',
                ingles: '+0.5 Bananas'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Banana'],
                }
            ]
        },
    ],
    minerals: [
        {
            idNumber: '',
            idName: 'pickaxeShark',
            name: 'Pickaxe Shark',
            preco: '',
            descricao: {
                portugues: '-15% no Tempo de Recuperação de Ouro e 10% de chance de Ouro Instantâneo',
                ingles: '+15% Gold Recovery Time and 10% chance of Instant Gold'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.85,
                    recursoAfetado: ['Gold'],
                },
            ],
            quantidade: [
                {
                    sinal: 'xI',
                    buff: 1.1,
                    recursoAfetado: ['Gold', 'Iron Pickaxe'],
                }
            ]
        },
        {
            idNumber: 282,
            idName: 'crimstoneArmor',
            name: 'Crimstone Armor',
            preco: '',
            descricao: {
                portugues: '+0.1 Crimstone',
                ingles: '+0.1 Crimstone'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Crimstone'],
                }
            ]
        },
        {
            idNumber: 285,
            idName: 'crimstoneAmulet',
            name: 'Crimstone Amulet',
            preco: '',
            descricao: {
                portugues: '-20% no tempo da Crimstone',
                ingles: '-20% in the time for Crimstone'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.8,
                    recursoAfetado: ['Crimstone'],
                }
            ]
        },
        {
            idNumber: 284,
            idName: 'crimstoneHammer',
            name: 'Crimstone Hammer',
            preco: '',
            descricao: {
                portugues: '+2 Crimstone no 5º dia',
                ingles: '+2 Crimstone on the 5th day'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.4,
                    recursoAfetado: ['Crimstone'],
                }
            ]
        },
        {
            idNumber: 370,
            idName: 'infernalDrill',
            name: 'Infernal Drill',
            preco: '',
            descricao: {
                portugues: 'Pegue Oil sem precisar de Oil Drill',
                ingles: 'Get Oil without needing an Oil Drill'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 0,
                    recursoAfetado: ['Oil Drill'],
                }
            ]
        },
        {
            idNumber: 308,
            idName: 'oilCan',
            name: 'Oil Can',
            preco: '',
            descricao: {
                portugues: '+2 Oils',
                ingles: '+2 Oils'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 2,
                    recursoAfetado: ['Oil'],
                }
            ]
        },
        {
            idNumber: 479,
            idName: 'oilGallon',
            name: 'Oil Gallon',
            preco: '',
            descricao: {
                portugues: '+5 Oils',
                ingles: '+5 Oils'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 5,
                    recursoAfetado: ['Oil'],
                }
            ]
        },
        {
            idNumber: 360,
            idName: 'oilOveralls',
            name: 'Oil Overalls',
            preco: '',
            descricao: {
                portugues: '+10 Oils',
                ingles: '+10 Oils'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 10,
                    recursoAfetado: ['Oil'],
                }
            ]
        },
        {
            idNumber: 354,
            idName: 'devWrench',
            name: 'Dev Wrench',
            preco: '',
            descricao: {
                portugues: '-50% no tempo para regeneração do Oil',
                ingles: '-50% in the time for Oil regeneration'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Oil'],
                }
            ]
        },
        {
            idNumber: 457,
            idName: 'obsidianNecklace',
            name: 'Obsidian Necklace',
            preco: '',
            descricao: {
                portugues: 'Lava Pit produz 2x mais rápido',
                ingles: '2x Lava Pit Speed'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Obsidian'],
                }
            ]
        },
        {
            idNumber: 481,
            idName: 'lavaSwimwear',
            name: 'Lava Swimwear',
            preco: '',
            descricao: {
                portugues: '-50% de recursos necessários para Lava Pit',
                ingles: '-50% Lava Pit resources'
            },
            possui: false,
            qtdUsada: [
                {
                    sinal: 'x',
                    buff: 0.5,
                    recursoAfetado: ['Obsidian'],
                }
            ]
        },
    ],
    greenhouse: [
        {
            idNumber: 373,
            idName: 'grapePants',
            name: 'Grape Pants',
            preco: '',
            descricao: {
                portugues: '+0.2 Uvas',
                ingles: '+0.2 Grapes'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Grape'],
                }
            ]
        },
        {
            idNumber: 309,
            idName: 'nonLaHat',
            name: 'Non La Hat',
            preco: '',
            descricao: {
                portugues: '+1 Rice',
                ingles: '+1 Rice'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Rice'],
                }
            ]
        },
        {
            idNumber: 317,
            idName: 'oliveRoyaltyShirt',
            name: 'Olive Royalty Shirt',
            preco: '',
            descricao: {
                portugues: '+0.25 Olives',
                ingles: '+0.25 Olives'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.25,
                    recursoAfetado: ['Olive'],
                }
            ]
        },
        {
            idNumber: 310,
            idName: 'oliveShield',
            name: 'Olive Shield',
            preco: '',
            descricao: {
                portugues: '+1 Olive',
                ingles: '+1 Olive'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1,
                    recursoAfetado: ['Olive'],
                }
            ]
        },
    ]
}

let todosWearables = [
    ...wearables.factions,
    ...wearables.crops,
    ...wearables.fruits,
    ...wearables.greenhouse,
    ...wearables.minerals
];


//=============================================================================================================================================================================
