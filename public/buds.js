/*
const AURAS = [
  { id: 'none', label: 'Sem Aura', mult: 1, class: 'aura-none' },
  { id: 'basic', label: 'Basic Aura', mult: 1.05, class: 'aura-basic' },
  { id: 'green', label: 'Green Aura', mult: 1.2, class: 'aura-green' },
  { id: 'rare', label: 'Rare Aura', mult: 2, class: 'aura-rare' },
  { id: 'mythical', label: 'Mythical Aura', mult: 5, class: 'aura-mythical' }
];

let buds = {
    plaza: [
        {
            idName: 'plaza',
            name: 'Plaza',
            descricao: {
                portugues: '+0.3 Crops básicas',
                ingles: '+0.3 Basic Crops'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
        },
        {
            idName: 'plaza3LeafClover',
            name: 'Plaza + 3 Leaf Clover',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.5 Todas as Crops (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.5 Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.8,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: [
                        'Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot',
                        'Cauliflower', 'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip',
                        'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley', 'Rice', 'Olive'
                    ],
                }
            ]
        },
        {
            idName: 'plazaFishHat',
            name: 'Plaza + Fish Hat',
            descricao: {
                portugues: '+0.3 Crops básicas<br>10% de chance de +1 Peixe (Chapéu)',
                ingles: '+0.3 Basic Crops<br>10% Chance of +1 Fish (Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            rng: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ]
        },
        {
            idName: 'plazaDiamondGem',
            name: 'Plaza + Diamond Gem',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.2 Minerais (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.2 Mineral(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ]
        },
        {
            idName: 'plazaGoldGem',
            name: 'Plaza + Gold Gem',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.2 Ouro (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.2 Gold(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Gold'],
                }
            ]
        },
        {
            idName: 'plazaMinerHat',
            name: 'Plaza + Miner Hat',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.2 Ferro (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.2 Iron(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        {
            idName: 'plazaCarrotHead',
            name: 'Plaza + Carrot Head',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.3 Cenoura (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.3 Carrot(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot'],
                }
            ],
        },
        {
            idName: 'plazaBasicLeaf',
            name: 'Plaza + Basic Leaf',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.2 Crops básicas (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.2 Basic Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
        },
        {
            idName: 'plazaSunflowerHat',
            name: 'Plaza + Sunflower Hat',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.5 Sunflower (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.5 Sunflower(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.8,
                    recursoAfetado: ['Sunflower'],
                }
            ],
        },
        {
            idName: 'plazaRubyGem',
            name: 'Plaza + Ruby Gem',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.2 Pedra (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.2 Stone(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone'],
                }
            ],
        },
        {
            idName: 'plazaMushroom',
            name: 'Plaza + Mushroom',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.3 Cogumelo (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.3 Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Mushroom'],
                }
            ]
        },
        {
            idName: 'plazaMagicMushroom',
            name: 'Plaza + Magic Mushroom',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.2 Cogumelo Mágico (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.2 Magic Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Magic Mushroom'],
                }
            ]
        },
        {
            idName: 'plazaAcornHat',
            name: 'Plaza + Acorn Hat',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.1 Madeira (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.1 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
        },
        {
            idName: 'plazaBanana',
            name: 'Plaza + Banana',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                }
            ]
        },
        {
            idName: 'plazaTreeHat',
            name: 'Plaza + Tree Hat',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.2 Madeira (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.2 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ]
        },
        {
            idName: 'plazaEggHead',
            name: 'Plaza + Egg Head',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.2 Ovo (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.2 Egg(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg'],
                }
            ]
        },
        {
            idName: 'plazaAppleHead',
            name: 'Plaza + Apple Head',
            descricao: {
                portugues: '+0.3 Crops básicas<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.3 Basic Crops<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato', 'Lemon', 'Blueberry', 'Orange', 'Apple', 'Banana'],
                }
            ]
        },
    ],  
    woodlands: [
        {
            idName: 'woodlands',
            name: 'Woodlands',
            descricao: {
                portugues: '+0.2 Madeira',
                ingles: '+0.2 Wood'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'woodlands3LeafClover',
            name: 'Woodlands + 3 Leaf Clover',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.5 Todas as Crops (Chapéu)',
                ingles: '+0.2 Wood<br>+0.5 Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'
                    ],
                }
            ]
        },
        {
            idName: 'woodlandsFishHat',
            name: 'Woodlands + Fish Hat',
            descricao: {
                portugues: '+0.2 Madeira<br>10% de chance de +1 Peixe (Chapéu)',
                ingles: '+0.2 Wood<br>10% Chance of +1 Fish (Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            rng: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ]
        },
        {
            idName: 'woodlandsDiamondGem',
            name: 'Woodlands + Diamond Gem',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.2 Minerais (Chapéu)',
                ingles: '+0.2 Wood<br>+0.2 Mineral(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ]
        },
        {
            idName: 'woodlandsGoldGem',
            name: 'Woodlands + Gold Gem',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.2 Ouro (Chapéu)',
                ingles: '+0.2 Wood<br>+0.2 Gold(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Gold'],
                }
            ]
        },
        {
            idName: 'woodlandsMinerHat',
            name: 'Woodlands + Miner Hat',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.2 Ferro (Chapéu)',
                ingles: '+0.2 Wood<br>+0.2 Iron(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        {
            idName: 'woodlandsCarrotHead',
            name: 'Woodlands + Carrot Head',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.3 Cenoura (Chapéu)',
                ingles: '+0.2 Wood<br>+0.3 Carrot(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot'],
                }
            ],
        },
        {
            idName: 'woodlandsBasicLeaf',
            name: 'Woodlands + Basic Leaf',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.2 Crops básicas (Chapéu)',
                ingles: '+0.2 Wood<br>+0.2 Basic Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Sunflower','Potato','Rhubarb','Pumpkin','Zucchini'],
                }
            ],
        },
        {
            idName: 'woodlandsSunflowerHat',
            name: 'Woodlands + Sunflower Hat',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.5 Sunflower (Chapéu)',
                ingles: '+0.2 Wood<br>+0.5 Sunflower(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idName: 'woodlandsRubyGem',
            name: 'Woodlands + Ruby Gem',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.2 Pedra (Chapéu)',
                ingles: '+0.2 Wood<br>+0.2 Stone(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idName: 'woodlandsMushroom',
            name: 'Woodlands + Mushroom',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.3 Cogumelo (Chapéu)',
                ingles: '+0.2 Wood<br>+0.3 Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Mushroom'],
                }
            ]
        },
        {
            idName: 'woodlandsMagicMushroom',
            name: 'Woodlands + Magic Mushroom',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.2 Cogumelo Mágico (Chapéu)',
                ingles: '+0.2 Wood<br>+0.2 Magic Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Magic Mushroom'],
                }
            ]
        },
        {
            idName: 'woodlandsAcornHat',
            name: 'Woodlands + Acorn Hat',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.1 Madeira (Chapéu)',
                ingles: '+0.2 Wood<br>+0.1 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'woodlandsBanana',
            name: 'Woodlands + Banana',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.2 Wood<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        },
        {
            idName: 'woodlandsTreeHat',
            name: 'Woodlands + Tree Hat',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.2 Madeira (Chapéu)',
                ingles: '+0.2 Wood<br>+0.2 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.4,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'woodlandsEggHead',
            name: 'Woodlands + Egg Head',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.2 Ovo (Chapéu)',
                ingles: '+0.2 Wood<br>+0.2 Egg(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg'],
                }
            ]
        },
        {
            idName: 'woodlandsAppleHead',
            name: 'Woodlands + Apple Head',
            descricao: {
                portugues: '+0.2 Madeira<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.2 Wood<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        }
    ],
    cave: [
        {
            idName: 'cave',
            name: 'Cave',
            descricao: {
                portugues: '+0.2 Mineral',
                ingles: '+0.2 Mineral'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
        },
        {
            idName: 'cave3LeafClover',
            name: 'Cave + 3 Leaf Clover',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.5 Todas as Crops (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.5 Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'
                    ],
                }
            ]
        },
        {
            idName: 'caveFishHat',
            name: 'Cave + Fish Hat',
            descricao: {
                portugues: '+0.2 Mineral<br>10% de chance de +1 Peixe (Chapéu)',
                ingles: '+0.2 Mineral<br>10% Chance of +1 Fish (Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            rng: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ]
        },
        {
            idName: 'caveDiamondGem',
            name: 'Cave + Diamond Gem',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.2 Minerais (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.2 Mineral(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.4,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
        },
        {
            idName: 'caveGoldGem',
            name: 'Cave + Gold Gem',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.2 Ouro (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.2 Gold(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.4,
                    recursoAfetado: ['Gold'],
                }
            ]
        },
        {
            idName: 'caveMinerHat',
            name: 'Cave + Miner Hat',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.2 Ferro (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.2 Iron(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.4,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        {
            idName: 'caveCarrotHead',
            name: 'Cave + Carrot Head',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.3 Cenoura (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.3 Carrot(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot'],
                }
            ],
        },
        {
            idName: 'caveBasicLeaf',
            name: 'Cave + Basic Leaf',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.2 Crops básicas (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.2 Basic Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Sunflower','Potato','Rhubarb','Pumpkin','Zucchini'],
                }
            ],
        },
        {
            idName: 'caveSunflowerHat',
            name: 'Cave + Sunflower Hat',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.5 Sunflower (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.5 Sunflower(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idName: 'caveRubyGem',
            name: 'Cave + Ruby Gem',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.2 Pedra (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.2 Stone(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Iron', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.4,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idName: 'caveMushroom',
            name: 'Cave + Mushroom',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.3 Cogumelo (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.3 Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Mushroom'],
                }
            ]
        },
        {
            idName: 'caveMagicMushroom',
            name: 'Cave + Magic Mushroom',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.2 Cogumelo Mágico (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.2 Magic Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Magic Mushroom'],
                }
            ]
        },
        {
            idName: 'caveAcornHat',
            name: 'Cave + Acorn Hat',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.1 Madeira (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.1 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'caveBanana',
            name: 'Cave + Banana',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        },
        {
            idName: 'caveTreeHat',
            name: 'Cave + Tree Hat',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.2 Madeira (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.2 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'caveEggHead',
            name: 'Cave + Egg Head',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.2 Ovo (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.2 Egg(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg'],
                }
            ]
        },
        {
            idName: 'caveAppleHead',
            name: 'Cave + Apple Head',
            descricao: {
                portugues: '+0.2 Mineral<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.2 Mineral<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        }
    ],
    sea: [
        {
            idName: 'sea',
            name: 'Sea',
            descricao: {
                portugues: '10% de chance de +1 Peixe',
                ingles: '10% Chance of +1 Fish'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
        },
        {
            idName: 'sea3LeafClover',
            name: 'Sea + 3 Leaf Clover',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.5 Todas as Crops (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.5 Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'
                    ],
                }
            ]
        },
        {
            idName: 'seaFishHat',
            name: 'Sea + Fish Hat',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>10% de chance de +1 Peixe (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>10% Chance of +1 Fish (Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            rng: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ]
        },
        {
            idName: 'seaDiamondGem',
            name: 'Sea + Diamond Gem',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.2 Minerais (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.2 Mineral(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ]
        },
        {
            idName: 'seaGoldGem',
            name: 'Sea + Gold Gem',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.2 Ouro (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.2 Gold(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Gold'],
                }
            ]
        },
        {
            idName: 'seaMinerHat',
            name: 'Sea + Miner Hat',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.2 Ferro (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.2 Iron(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        {
            idName: 'seaCarrotHead',
            name: 'Sea + Carrot Head',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.3 Cenoura (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.3 Carrot(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot'],
                }
            ],
        },
        {
            idName: 'seaBasicLeaf',
            name: 'Sea + Basic Leaf',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.2 Crops básicas (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.2 Basic Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Sunflower','Potato','Rhubarb','Pumpkin','Zucchini'],
                }
            ],
        },
        {
            idName: 'seaSunflowerHat',
            name: 'Sea + Sunflower Hat',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.5 Sunflower (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.5 Sunflower(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idName: 'seaRubyGem',
            name: 'Sea + Ruby Gem',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.2 Pedra (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.2 Stone(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idName: 'seaMushroom',
            name: 'Sea + Mushroom',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.3 Cogumelo (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.3 Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Mushroom'],
                }
            ]
        },
        {
            idName: 'seaMagicMushroom',
            name: 'Sea + Magic Mushroom',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.2 Cogumelo Mágico (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.2 Magic Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Magic Mushroom'],
                }
            ]
        },
        {
            idName: 'seaAcornHat',
            name: 'Sea + Acorn Hat',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.1 Madeira (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.1 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'seaBanana',
            name: 'Sea + Banana',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.2 Frutas (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        },
        {
            idName: 'seaTreeHat',
            name: 'Sea + Tree Hat',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.2 Madeira (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.2 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'seaEggHead',
            name: 'Sea + Egg Head',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.2 Ovo (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.2 Egg(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg'],
                }
            ]
        },
        {
            idName: 'seaAppleHead',
            name: 'Sea + Apple Head',
            descricao: {
                portugues: '10% de chance de +1 Peixe<br>+0.2 Frutas (Chapéu)',
                ingles: '10% Chance of +1 Fish<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        }
    ],
    castle: [
        {
            idName: 'castle',
            name: 'Castle',
            descricao: {
                portugues: '10% de chance de +1 Peixe',
                ingles: '+0.3 Medium Crops'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
        },
        {
            idName: 'castle3LeafClover',
            name: 'Castle + 3 Leaf Clover',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.5 Todas as Crops (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.5 Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.8,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'
                    ],
                }
            ]
        },
        {
            idName: 'castleFishHat',
            name: 'Castle + Fish Hat',
            descricao: {
                portugues: '+0.3 Crops Médias<br>10% de chance de +1 Peixe (Chapéu)',
                ingles: '+0.3 Medium Crops<br>10% Chance of +1 Fish (Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            rng: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ]
        },
        {
            idName: 'castleDiamondGem',
            name: 'Castle + Diamond Gem',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.2 Minerais (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.2 Mineral(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ]
        },
        {
            idName: 'castleGoldGem',
            name: 'Castle + Gold Gem',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.2 Ouro (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.2 Gold(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Gold'],
                }
            ]
        },
        {
            idName: 'castleMinerHat',
            name: 'Castle + Miner Hat',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.2 Ferro (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.2 Iron(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        {
            idName: 'castleCarrotHead',
            name: 'Castle + Carrot Head',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.3 Cenoura (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.3 Carrot(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.6,
                    recursoAfetado: ['Carrot'],
                }
            ],
        },
        {
            idName: 'castleBasicLeaf',
            name: 'Castle + Basic Leaf',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.2 Crops básicas (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.2 Basic Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Sunflower','Potato','Rhubarb','Pumpkin','Zucchini'],
                }
            ],
        },
        {
            idName: 'castleSunflowerHat',
            name: 'Castle + Sunflower Hat',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.5 Sunflower (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.5 Sunflower(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idName: 'castleRubyGem',
            name: 'Castle + Ruby Gem',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.2 Pedra (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.2 Stone(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idName: 'castleMushroom',
            name: 'Castle + Mushroom',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.3 Cogumelo (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.3 Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Mushroom'],
                }
            ]
        },
        {
            idName: 'castleMagicMushroom',
            name: 'Castle + Magic Mushroom',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.2 Cogumelo Mágico (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.2 Magic Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Magic Mushroom'],
                }
            ]
        },
        {
            idName: 'castleAcornHat',
            name: 'Castle + Acorn Hat',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.1 Madeira (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.1 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'castleBanana',
            name: 'Castle + Banana',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        },
        {
            idName: 'castleTreeHat',
            name: 'Castle + Tree Hat',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.2 Madeira (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.2 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'castleEggHead',
            name: 'Castle + Egg Head',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.2 Ovo (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.2 Egg(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg'],
                }
            ]
        },
        {
            idName: 'castleAppleHead',
            name: 'Castle + Apple Head',
            descricao: {
                portugues: '+0.3 Crops Médias<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.3 Medium Crops<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        }
    ],
    port: [
        {
            idName: 'port',
            name: 'Port',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes',
                ingles: '+10% Bumpkin XP from Fish'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
        },
        {
            idName: 'port3LeafClover',
            name: 'Port + 3 Leaf Clover',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.5 Todas as Crops (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.5 Crops(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'
                    ],
                }
            ]
        },
        {
            idName: 'portFishHat',
            name: 'Port + Fish Hat',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>10% de chance de +1 Peixe (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>10% Chance of +1 Fish (Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            rng: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ]
        },
        {
            idName: 'portDiamondGem',
            name: 'Port + Diamond Gem',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.2 Minerais (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.2 Mineral(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ]
        },
        {
            idName: 'portGoldGem',
            name: 'Port + Gold Gem',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.2 Ouro (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.2 Gold(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Gold'],
                }
            ]
        },
        {
            idName: 'portMinerHat',
            name: 'Port + Miner Hat',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.2 Ferro (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.2 Iron(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        {
            idName: 'portCarrotHead',
            name: 'Port + Carrot Head',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.3 Cenoura (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.3 Carrot(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot'],
                }
            ],
        },
        {
            idName: 'portBasicLeaf',
            name: 'Port + Basic Leaf',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.2 Crops básicas (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.2 Basic Crops(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Sunflower','Potato','Rhubarb','Pumpkin','Zucchini'],
                }
            ],
        },
        {
            idName: 'portSunflowerHat',
            name: 'Port + Sunflower Hat',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.5 Sunflower (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.5 Sunflower(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idName: 'portRubyGem',
            name: 'Port + Ruby Gem',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.2 Pedra (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.2 Stone(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idName: 'portMushroom',
            name: 'Port + Mushroom',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.3 Cogumelo (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.3 Mushroom(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Mushroom'],
                }
            ]
        },
        {
            idName: 'portMagicMushroom',
            name: 'Port + Magic Mushroom',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.2 Cogumelo Mágico (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.2 Magic Mushroom(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Magic Mushroom'],
                }
            ]
        },
        {
            idName: 'portAcornHat',
            name: 'Port + Acorn Hat',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.1 Madeira (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.1 Wood(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'portBanana',
            name: 'Port + Banana',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.2 Frutas (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        },
        {
            idName: 'portTreeHat',
            name: 'Port + Tree Hat',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.2 Madeira (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.2 Wood(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'portEggHead',
            name: 'Port + Egg Head',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.2 Ovo (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.2 Egg(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg'],
                }
            ]
        },
        {
            idName: 'portAppleHead',
            name: 'Port + Apple Head',
            descricao: {
                portugues: '+10% de XP do Bumpkin com Peixes<br>+0.2 Frutas (Chapéu)',
                ingles: '+10% Bumpkin XP from Fish<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            xp: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        }
    ],
    retreat: [
        {
            idName: 'retreat',
            name: 'Retreat',
            descricao: {
                portugues: '+0.2 Produção Animal',
                ingles: '+0.2 Animal Produce'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
        },
        {
            idName: 'retreat3LeafClover',
            name: 'Retreat + 3 Leaf Clover',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.5 Todas as Crops (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.5 Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'
                    ],
                }
            ]
        },
        {
            idName: 'retreatFishHat',
            name: 'Retreat + Fish Hat',
            descricao: {
                portugues: '+0.2 Produção Animal<br>10% de chance de +1 Peixe (Chapéu)',
                ingles: '+0.2 Animal Produce<br>10% Chance of +1 Fish (Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            rng: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ]
        },
        {
            idName: 'retreatDiamondGem',
            name: 'Retreat + Diamond Gem',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.2 Minerais (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.2 Mineral(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ]
        },
        {
            idName: 'retreatGoldGem',
            name: 'Retreat + Gold Gem',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.2 Ouro (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.2 Gold(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Gold'],
                }
            ]
        },
        {
            idName: 'retreatMinerHat',
            name: 'Retreat + Miner Hat',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.2 Ferro (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.2 Iron(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        {
            idName: 'retreatCarrotHead',
            name: 'Retreat + Carrot Head',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.3 Cenoura (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.3 Carrot(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot'],
                }
            ],
        },
        {
            idName: 'retreatBasicLeaf',
            name: 'Retreat + Basic Leaf',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.2 Crops básicas (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.2 Basic Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Sunflower','Potato','Rhubarb','Pumpkin','Zucchini'],
                }
            ],
        },
        {
            idName: 'retreatSunflowerHat',
            name: 'Retreat + Sunflower Hat',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.5 Sunflower (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.5 Sunflower(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idName: 'retreatRubyGem',
            name: 'Retreat + Ruby Gem',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.2 Pedra (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.2 Stone(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idName: 'retreatMushroom',
            name: 'Retreat + Mushroom',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.3 Cogumelo (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.3 Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Mushroom'],
                }
            ]
        },
        {
            idName: 'retreatMagicMushroom',
            name: 'Retreat + Magic Mushroom',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.2 Cogumelo Mágico (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.2 Magic Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Magic Mushroom'],
                }
            ]
        },
        {
            idName: 'retreatAcornHat',
            name: 'Retreat + Acorn Hat',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.1 Madeira (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.1 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'retreatBanana',
            name: 'Retreat + Banana',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        },
        {
            idName: 'retreatTreeHat',
            name: 'Retreat + Tree Hat',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.2 Madeira (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.2 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'retreatEggHead',
            name: 'Retreat + Egg Head',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.2 Ovo (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.2 Egg(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.4,
                    recursoAfetado: ['egg'],
                }
            ]
        },
        {
            idName: 'retreatAppleHead',
            name: 'Retreat + Apple Head',
            descricao: {
                portugues: '+0.2 Produção Animal<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.2 Animal Produce<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg', 'feather', 'milk', 'leather', 'wool', 'merinoWool'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        }
    ],
    saphiro: [
        {
            idName: 'saphiro',
            name: 'Saphiro',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops',
                ingles: '-10% Crop Growth time'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
        },
        {
            idName: 'saphiro3LeafClover',
            name: 'Saphiro + 3 Leaf Clover',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.5 Todas as Crops (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.5 Crops(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'
                    ],
                }
            ]
        },
        {
            idName: 'saphiroFishHat',
            name: 'Saphiro + Fish Hat',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>10% de chance de +1 Peixe (Chapéu)',
                ingles: '-10% Crop Growth time<br>10% Chance of +1 Fish (Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            rng: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ]
        },
        {
            idName: 'saphiroDiamondGem',
            name: 'Saphiro + Diamond Gem',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.2 Minerais (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.2 Mineral(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ]
        },
        {
            idName: 'saphiroGoldGem',
            name: 'Saphiro + Gold Gem',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.2 Ouro (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.2 Gold(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Gold'],
                }
            ]
        },
        {
            idName: 'saphiroMinerHat',
            name: 'Saphiro + Miner Hat',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.2 Ferro (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.2 Iron(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        {
            idName: 'saphiroCarrotHead',
            name: 'Saphiro + Carrot Head',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.3 Cenoura (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.3 Carrot(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot'],
                }
            ],
        },
        {
            idName: 'saphiroBasicLeaf',
            name: 'Saphiro + Basic Leaf',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.2 Crops básicas (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.2 Basic Crops(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Sunflower','Potato','Rhubarb','Pumpkin','Zucchini'],
                }
            ],
        },
        {
            idName: 'saphiroSunflowerHat',
            name: 'Saphiro + Sunflower Hat',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.5 Sunflower (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.5 Sunflower(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idName: 'saphiroRubyGem',
            name: 'Saphiro + Ruby Gem',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.2 Pedra (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.2 Stone(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idName: 'saphiroMushroom',
            name: 'Saphiro + Mushroom',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.3 Cogumelo (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.3 Mushroom(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Mushroom'],
                }
            ]
        },
        {
            idName: 'saphiroMagicMushroom',
            name: 'Saphiro + Magic Mushroom',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.2 Cogumelo Mágico (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.2 Magic Mushroom(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Magic Mushroom'],
                }
            ]
        },
        {
            idName: 'saphiroAcornHat',
            name: 'Saphiro + Acorn Hat',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.1 Madeira (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.1 Wood(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'saphiroBanana',
            name: 'Saphiro + Banana',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.2 Frutas (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        },
        {
            idName: 'saphiroTreeHat',
            name: 'Saphiro + Tree Hat',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.2 Madeira (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.2 Wood(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'saphiroEggHead',
            name: 'Saphiro + Egg Head',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.2 Ovo (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.2 Egg(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg'],
                }
            ]
        },
        {
            idName: 'saphiroAppleHead',
            name: 'Saphiro + Apple Head',
            descricao: {
                portugues: '-10% no tempo de crescimento das Crops<br>+0.2 Frutas (Chapéu)',
                ingles: '-10% Crop Growth time<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            tempo: [
                {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        }
    ],
    snow: [
        {
            idName: 'snow',
            name: 'Snow',
            descricao: {
                portugues: '+0.3 Crops Avançadas',
                ingles: '+0.3 Advanced Crops'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
        },
        {
            idName: 'snow3LeafClover',
            name: 'Snow + 3 Leaf Clover',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.5 Todas as Crops (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.5 Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.8,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Rice','Olive'
                    ],
                }
            ]
        },
        {
            idName: 'snowFishHat',
            name: 'Snow + Fish Hat',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>10% de chance de +1 Peixe (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>10% Chance of +1 Fish (Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            rng: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ]
        },
        {
            idName: 'snowDiamondGem',
            name: 'Snow + Diamond Gem',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.2 Minerais (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.2 Mineral(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ]
        },
        {
            idName: 'snowGoldGem',
            name: 'Snow + Gold Gem',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.2 Ouro (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.2 Gold(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Gold'],
                }
            ]
        },
        {
            idName: 'snowMinerHat',
            name: 'Snow + Miner Hat',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.2 Ferro (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.2 Iron(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        {
            idName: 'snowCarrotHead',
            name: 'Snow + Carrot Head',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.3 Cenoura (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.3 Carrot(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot'],
                }
            ],
        },
        {
            idName: 'snowBasicLeaf',
            name: 'Snow + Basic Leaf',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.2 Crops básicas (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.2 Basic Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Sunflower','Potato','Rhubarb','Pumpkin','Zucchini'],
                }
            ],
        },
        {
            idName: 'snowSunflowerHat',
            name: 'Snow + Sunflower Hat',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.5 Sunflower (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.5 Sunflower(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idName: 'snowRubyGem',
            name: 'Snow + Ruby Gem',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.2 Pedra (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.2 Stone(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idName: 'snowMushroom',
            name: 'Snow + Mushroom',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.3 Cogumelo (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.3 Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Mushroom'],
                }
            ]
        },
        {
            idName: 'snowMagicMushroom',
            name: 'Snow + Magic Mushroom',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.2 Cogumelo Mágico (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.2 Magic Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Magic Mushroom'],
                }
            ]
        },
        {
            idName: 'snowAcornHat',
            name: 'Snow + Acorn Hat',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.1 Madeira (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.1 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'snowBanana',
            name: 'Snow + Banana',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        },
        {
            idName: 'snowTreeHat',
            name: 'Snow + Tree Hat',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.2 Madeira (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.2 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'snowEggHead',
            name: 'Snow + Egg Head',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.2 Ovo (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.2 Egg(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg'],
                }
            ]
        },
        {
            idName: 'snowAppleHead',
            name: 'Snow + Apple Head',
            descricao: {
                portugues: '+0.3 Crops Avançadas<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.3 Advanced Crops<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Eggplant','Corn','Onion','Turnip', 'Radish','Wheat','Kale','Artichoke','Barley'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ]
        }
    ],
    beach: [
        {
            idName: 'beach',
            name: 'Beach',
            descricao: {
                portugues: '+0.2 Fruta',
                ingles: '+0.2 Fruit'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
        },
        {
            idName: 'beach3LeafClover',
            name: 'Beach + 3 Leaf Clover',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.5 Todas as Crops (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.5 Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini',
                        'Carrot','Yam','Cabbage','Broccoli','Soybean','Pepper','Beetroot',
                        'Cauliflower','Parsnip','Eggplant','Corn','Onion','Turnip',
                        'Radish','Wheat','Kale','Artichoke','Barley','Rice','Olive'
                    ],
                }
            ]
        },
        {
            idName: 'beachFishHat',
            name: 'Beach + Fish Hat',
            descricao: {
                portugues: '+0.2 Fruta<br>10% de chance de +1 Peixe (Chapéu)',
                ingles: '+0.2 Fruit<br>10% Chance of +1 Fish (Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            rng: [
                {
                    sinal: 'x',
                    buff: 1.1,
                    recursoAfetado: ['Fish'],
                }
            ]
        },
        {
            idName: 'beachDiamondGem',
            name: 'Beach + Diamond Gem',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.2 Minerais (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.2 Mineral(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone', 'Iron', 'Gold'],
                }
            ]
        },
        {
            idName: 'beachGoldGem',
            name: 'Beach + Gold Gem',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.2 Ouro (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.2 Gold(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Gold'],
                }
            ]
        },
        {
            idName: 'beachMinerHat',
            name: 'Beach + Miner Hat',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.2 Ferro (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.2 Iron(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Iron'],
                }
            ]
        },
        {
            idName: 'beachCarrotHead',
            name: 'Beach + Carrot Head',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.3 Cenoura (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.3 Carrot(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Carrot'],
                }
            ],
        },
        {
            idName: 'beachBasicLeaf',
            name: 'Beach + Basic Leaf',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.2 Crops básicas (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.2 Basic Crops(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Sunflower','Potato','Rhubarb','Pumpkin','Zucchini'],
                }
            ],
        },
        {
            idName: 'beachSunflowerHat',
            name: 'Beach + Sunflower Hat',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.5 Sunflower (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.5 Sunflower(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.5,
                    recursoAfetado: ['Sunflower'],
                }
            ]
        },
        {
            idName: 'beachRubyGem',
            name: 'Beach + Ruby Gem',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.2 Pedra (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.2 Stone(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Stone'],
                }
            ]
        },
        {
            idName: 'beachMushroom',
            name: 'Beach + Mushroom',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.3 Cogumelo (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.3 Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.3,
                    recursoAfetado: ['Mushroom'],
                }
            ]
        },
        {
            idName: 'beachMagicMushroom',
            name: 'Beach + Magic Mushroom',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.2 Cogumelo Mágico (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.2 Magic Mushroom(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Magic Mushroom'],
                }
            ]
        },
        {
            idName: 'beachAcornHat',
            name: 'Beach + Acorn Hat',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.1 Madeira (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.1 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'beachBanana',
            name: 'Beach + Banana',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.4,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
        },
        {
            idName: 'beachTreeHat',
            name: 'Beach + Tree Hat',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.2 Madeira (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.2 Wood(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Wood'],
                }
            ],
        },
        {
            idName: 'beachEggHead',
            name: 'Beach + Egg Head',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.2 Ovo (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.2 Egg(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
            quantidade2: [
                {
                    sinal: '+',
                    buff: 0.2,
                    recursoAfetado: ['egg'],
                }
            ]
        },
        {
            idName: 'beachAppleHead',
            name: 'Beach + Apple Head',
            descricao: {
                portugues: '+0.2 Fruta<br>+0.2 Frutas (Chapéu)',
                ingles: '+0.2 Fruit<br>+0.2 Fruit(Stem)'
            },
            possui: false,
            quantidade: [
                {
                    sinal: '+',
                    buff: 0.4,
                    recursoAfetado: ['Tomato','Lemon','Blueberry','Orange','Apple','Banana'],
                }
            ],
        }
    ],
};

let todosBuds = [
    ...buds.plaza,
    ...buds.woodlands,
    ...buds.cave,
    ...buds.sea,
    ...buds.castle,
    ...buds.port,
    ...buds.retreat,
    ...buds.saphiro,
    ...buds.snow,
    ...buds.beach
];
*/