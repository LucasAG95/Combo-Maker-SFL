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

let skillsCrops = {
    tier1: [
        {
            idName: 'greenThumb2',
            name: 'Green Thumb',
            tempo: {
                sinal: 'x',
                1: {
                    buff: 0.95,
                    descricao: { 
                        portugues: '-5% no tempo das Crops', 
                        ingles: '-5% in the time of Crops'
                    },
                },
                2: {
                    buff: 0.94,
                    descricao: { 
                        portugues: '-6% no tempo das Crops', 
                        ingles: '-6% in the time of Crops'
                    },
                },
                3: {
                    buff: 0.925,
                    descricao: { 
                        portugues: '-7.5% no tempo das Crops', 
                        ingles: '-7.5% in the time of Crops'
                    },
                },
                recursoAfetado: [
                    'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 
                    'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 
                    'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 
                    'Kale', 'Artichoke', 'Barley'
                ],
                possui: false
            }


            1: {
                possui: false,
                descricao: { 
                    portugues: '-5% no tempo das Crops', 
                    ingles: '-5% in the time of Crops'
                },
                tempo: {
                    sinal: 'x', 
                    buff: 0.95,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 
                        'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 
                        'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 
                        'Kale', 'Artichoke', 'Barley'
                    ],
                },
                pontosNecessarios: 1
            },
            2: {
                possui: false,
                descricao: { 
                    portugues: '-6% no tempo das Crops', 
                    ingles: '-6% in the time of Crops'
                },
                tempo: {
                    sinal: 'x', 
                    buff: 0.94,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 
                        'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 
                        'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 
                        'Kale', 'Artichoke', 'Barley'
                    ],
                },
                pontosNecessarios: 2
            },
            3: {
                possui: false,
                descricao: { 
                    portugues: '-7.5% no tempo das Crops', 
                    ingles: '-7.5% in the time of Crops'
                },
                tempo: {
                    sinal: 'x', 
                    buff: 0.925,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 
                        'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 
                        'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 
                        'Kale', 'Artichoke', 'Barley'
                    ],
                },
                pontosNecessarios: 3
            },
        },
        {
            idName: 'youngFarmer',
            name: 'Young Farmer',
            1: {
                possui: false,
                descricao: {
                    portugues: '+0.1 Crop Basica',
                    ingles: '+0.1 Basic Crop Yield'
                },
                quantidade: {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini'],
                },
                pontosNecessarios: 1
            }
        },
        {
            idName: 'experiencedFarmer',
            name: 'Experienced Farmer',
            1: {
                possui: false,
                descricao: {
                    portugues: '+0.1 Crop Média',
                    ingles: '+0.1 Medium Crop Yield'
                },
                quantidade: {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Carrot', 'Yam', 'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'],
                },
                pontosNecessarios: 1
            }
        },
        {
            idName: 'oldFarmer',
            name: 'Old Farmer',
            1: {
                possui: false,
                descricao: {
                    portugues: '+0.1 Crop Avançada',
                    ingles: '+0.1 Advanced Crop Yield'
                },
                quantidade: {
                    sinal: '+',
                    buff: 0.1,
                    recursoAfetado: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                },
                pontosNecessarios: 1
            }
        },
        {
            idName: 'bettysFriend',
            name: 'Betty\'s Friend',
            1: {
                possui: false,
                descricao: {
                    portugues: 'Delivery da \'Betty\' Coin aumentou 30%',
                    ingles: 'Delivery of \'Betty\' Coin increased by 30%'
                },
                delivery: {
                    sinal: 'x',
                    buff: 1.3,
                    recursoAfetado: [''],
                },
                pontosNecessarios: 1
            }
        },
        {
            idName: 'chonkyScarecrow',
            name: 'Chonky Scarecrow',
            1: {
                possui: false,
                descricao: {
                    portugues: 'Aumenta a área de efeito (AOE) do Basic Scarecrow\'s para uma área de 7x7; Adicionalmente, reduz em 10% o tempo de crescimento das crops basicas.',
                    ingles: 'Basic Scarecrow AOE increased to 7x7; -10% basic crop growth time.'
                },
                tempo: {
                    sinal: 'x',
                    buff: 1.3,
                    recursoAfetado: ['Basic Scarecrow'],
                },
                pontosNecessarios: 1
            }
        },
    ],
    tier2: [
        {
            idName: 'strongRoots',
            name: 'Strong Roots',
            1: {
                possui: false,
                descricao: {
                    portugues: '10% de redução no tempo das Crops Avançadas',
                    ingles: '10% reduction in the time of Advanced Crops'
                },
                tempo: {
                    sinal: 'x',
                    buff: 0.9,
                    recursoAfetado: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                },
                pontosNecessarios: 2
            }
        },
        {
            idName: 'coinSwindler',
            name: 'Coin Swindler',
            1: {
                possui: false,
                descricao: {
                    portugues: '+10% de coins ao vender colheitas (Loja de Sementes)',
                    ingles: '+10% coins when selling crops (Seed Shop)'
                },
                coins: {
                    sinal: 'xV',
                    buff: 1.1,
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 
                        'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 
                        'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 
                        'Kale', 'Artichoke', 'Barley'
                    ],
                },
                pontosNecessarios: 2
            }
        },
        {
            idName: 'goldenSunflower',
            name: 'Golden Sunflower',
            1: {
                possui: false,
                descricao: {
                    portugues: '1/700 de obter +0,35 gold ao colher sunflowers manualmente',
                    ingles: '1/700 chance of getting +0.35 gold when manually harvesting sunflowers'
                },
                gold: {
                    sinal: '+',
                    buff: (1 / 700) * 0.35,
                    recursoAfetado: [''],
                },
                pontosNecessarios: 2
            }
        },
        {
            idName: 'horrorMike',
            name: 'Horror Mike',
            1: {
                possui: false,
                descricao: {
                    portugues: 'Scary Mike aumenta a AOE para 7x7 e concede +0,1 nas colheitas (Crops Médias)',
                    ingles: 'Scary Mike AOE increases the size to 7x7 and +0.1 Crops (Medium Crops)'
                },
                quantidade: {
                    sinal: '+',
                    buff: 0.3 * 49,
                    recursoAfetado: ['Scary Mike'],
                },
                pontosNecessarios: 2
            }
        },
        {
            idName: 'lauriesGains',
            name: 'Laurie\'s Gains',
            1: {
                possui: false,
                descricao: {
                    portugues: 'Laurie Crow aumenta a AOE para 7x7 e concede +0,1 nas colheitas (Crops Avançadas)',
                    ingles: 'Laurie Crow AOE increases the size to 7x7 and +0.1 Crops (Advanced Crops)'
                },
                quantidade: {
                    sinal: '+',
                    buff: 0.3 * 49,
                    recursoAfetado: ['Laurie the Chuckle Crow'],
                },
                pontosNecessarios: 2
            }
        },
    ],
    tier3: [
        {
            idName: 'instantGrowth',
            name: 'Instant Growth',
            1: {
                possui: false,
                descricao: {
                    portugues: 'Capacidade de deixar todas Crops prontas para serem colhidas (1/72h)',
                    ingles: 'Ability to make all Crops ready for harvest (1/72h)'
                },
                reset: {
                    sinal: '',
                    buff: '',
                    recursoAfetado: [
                        'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 
                        'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 
                        'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 
                        'Kale', 'Artichoke', 'Barley'
                    ],
                },
                pontosNecessarios: 3
            }
        },
        {
            idName: 'acreFarm',
            name: 'Acre Farm',
            1: {
                possui: false,
                descricao: {
                    portugues: '+1 de rendimento em crops Avançadas, -0,5 de rendimento em crops Básicas e Médias',
                    ingles: '+1 Advanced crop yeild, -0.5 Basic and Medium crop yield'
                },
                quantidade: [
                    {
                        sinal: '+',
                        buff: 1,
                        recursoAfetado: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley'],
                    },
                    {
                        sinal: '-',
                        buff: 0.5,
                        recursoAfetado: [
                            'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam',
                            'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'
                        ]
                    }
                ],
                pontosNecessarios: 3
            }
        },
        {
            idName: 'hectareFarm',
            name: 'Hectare Farm',
            1: {
                possui: false,
                descricao: {
                    portugues: '+1 de rendimento em crops Básicas e Médias, -0,5 de rendimento em crops Avançadas',
                    ingles: '+1 Basic and Medium crop yield, -0.5 Advanced crop yield'
                },
                quantidade: [
                    {
                        sinal: '+',
                        buff: 1,
                        recursoAfetado: [
                            'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam',
                            'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 'Parsnip'
                        ],
                    },
                    {
                        sinal: '-',
                        buff: 0.5,
                        recursoAfetado: ['Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 'Kale', 'Artichoke', 'Barley']
                    }
                ],
                pontosNecessarios: 3
            }
        },
    ]
};

//exemplo do google gemini
tier1: [
    {
        idName: 'greenThumb2',
        name: 'Green Thumb',
        nivelAtual: 0, // 0 = não possui; 1, 2 ou 3 = nível atual do jogador
        recursosAfetados: [
            'Sunflower', 'Potato', 'Rhubarb', 'Pumpkin', 'Zucchini', 'Carrot', 'Yam', 
            'Cabbage', 'Broccoli', 'Soybean', 'Pepper', 'Beetroot', 'Cauliflower', 
            'Parsnip', 'Eggplant', 'Corn', 'Onion', 'Turnip', 'Radish', 'Wheat', 
            'Kale', 'Artichoke', 'Barley'
        ],
        sinal: 'x',
        niveis: [
            {
                nivel: 1,
                buff: 0.95,
                pontosNecessarios: 1,
                descricao: { 
                    portugues: '-5% no tempo das Crops', 
                    ingles: '-5% in the time of Crops'
                }
            },
            {
                nivel: 2,
                buff: 0.94,
                pontosNecessarios: 2,
                descricao: { 
                    portugues: '-6% no tempo das Crops', 
                    ingles: '-6% in the time of Crops'
                }
            },
            {
                nivel: 3,
                buff: 0.925,
                pontosNecessarios: 3,
                descricao: { 
                    portugues: '-7.5% no tempo das Crops', 
                    ingles: '-7.5% in the time of Crops'
                }
            }
        ]
    }
]
//exemplo do google gemini para os calculos
function calcularBuff(recurso, listasDeBuffs) { 
    // Variáveis de Quantidade
    let qtdMulti = 1;       // 'x'
    let qtdSoma = 0;        // '+'
    let qtdSubtrai = 0;     // '-'
    let qtdArea = 0;        // '+A'
    let qtdInsta = 1;       // 'xI'
    let qtdSemente = 1;     // '+S'
    let qtdMenosRacao = 1;  // 'x-'
    let qtdMaisRacao = 1;   // 'x+'

    // Variáveis de Tempo
    let tempoMulti = 1;
    let tempoCM = 1;
    let tempoSubtrai = 0;

    // Variáveis de Coins
    let multiCusto = 1;
    let multiVenda = 1;

    // Variáveis de Estoque
    let estoqueMulti = 1;
    let estoqueSoma = 0;

    // Variáveis de Oil
    let oilMulti = 1;
    let oilAumentado = 0;
    let oilDiminuido = 0;

    // Eventos Bônus
    let bountifulHarvest = 0;
    let sunshower = 1;

    if (eventoSelecionado === 'bountifulHarvest' && (estacao === 'spring' || estacao === 'summer')) {
        bountifulHarvest = 1;
    }
    if (eventoSelecionado === 'sunshower' && (estacao === 'autumn' || estacao === 'winter')) {
        sunshower = 0.5;
    }

    function aplicarBuffs(lista) { 
        if (!Array.isArray(lista)) return;

        lista.forEach(item => {
            let dadosDoBuff = null;

            // 1. Identifica se é uma Skill com Níveis ou um Item Plano (NFT/Wearable)
            if (item.nivelAtual !== undefined) {
                if (item.nivelAtual <= 0) return; // Jogador não possui a skill
                dadosDoBuff = item.niveis[item.nivelAtual - 1]; // Pega os dados do nível ativo
            } else if (item.possui) {
                dadosDoBuff = item; // É um item simples (NFT/Collectible)
            } else {
                return; // Se não tem nível ativo e não possui o item, ignora
            }

            // 2. Checagem de Estação
            const estacaoItem = item.estacao || dadosDoBuff.estacao;
            if (estacaoItem && !estacaoItem.includes(estacao)) return;
            
            // 3. Nomes para correspondência de recursos
            const nomeRecurso = recurso.name || recurso.levelAnterior || recurso;
            const nomeGenerico = recurso.name ?? recurso;
            const nomeEspecifico = recurso.levelAnterior ?? null;

            // Helper para checar se o recurso atual é afetado pelo buff
            const afetaRecurso = (buffObj) => {
                const listaRecursos = buffObj.recursoAfetado || item.recursosAfetados || dadosDoBuff.recursosAfetados;
                if (!listaRecursos) return true; // Se não especificar lista, afeta tudo
                
                return listaRecursos.includes(nomeGenerico) || 
                       listaRecursos.includes(nomeRecurso) || 
                       (nomeEspecifico && listaRecursos.includes(nomeEspecifico));
            };

            // Helper para aplicar multiplicadores de quantidade
            const processarQuantidade = (listaQtd) => {
                if (!listaQtd) return;
                listaQtd.forEach(qtd => {
                    if (afetaRecurso(qtd)) {
                        if (qtd.sinal === 'x')  qtdMulti *= qtd.buff;
                        if (qtd.sinal === '+')  qtdSoma += qtd.buff;
                        if (qtd.sinal === '-')  qtdSubtrai += qtd.buff;
                        if (qtd.sinal === '+A') qtdArea += qtd.buff;
                        if (qtd.sinal === 'xI') qtdInsta *= qtd.buff;
                        if (qtd.sinal === '+S') qtdSemente += qtd.buff;
                        if (qtd.sinal === 'x-') qtdMenosRacao *= qtd.buff;
                        if (qtd.sinal === 'x+') qtdMaisRacao *= qtd.buff;
                    }
                });
            };

            // =========================================================================
            // Aplicação dos Buffs por Categoria
            // =========================================================================

            // Quantidade (unifica quantidade e quantidade2)
            processarQuantidade(dadosDoBuff.quantidade);
            processarQuantidade(dadosDoBuff.quantidade2);

            // Tempo
            if (dadosDoBuff.tempo) {
                dadosDoBuff.tempo.forEach(tempo => {
                    if (afetaRecurso(tempo)) {
                        if (tempo.sinal === 'x')   tempoMulti *= tempo.buff;
                        if (tempo.sinal === 'xCM') tempoCM *= tempo.buff;
                        if (tempo.sinal === '-')   tempoSubtrai += tempo.buff;
                    }
                });
            }

            // Coins (Custo / Venda)
            if (dadosDoBuff.coins) {
                dadosDoBuff.coins.forEach(coin => {
                    if (afetaRecurso(coin)) {
                        if (coin.sinal === 'xV') multiVenda *= coin.buff;
                        if (coin.sinal === 'xC') multiCusto *= coin.buff;
                    }
                });
            }

            // Estoque
            if (dadosDoBuff.estoque) {
                dadosDoBuff.estoque.forEach(estoque => {
                    if (afetaRecurso(estoque)) {
                        if (estoque.sinal === 'x') estoqueMulti *= estoque.buff;
                        if (estoque.sinal === '+') estoqueSoma += estoque.buff;
                    }
                });
            }

            // Oil CM
            if (dadosDoBuff.oilCM) {
                dadosDoBuff.oilCM.forEach(oil => {
                    if (oil.sinal === '+') oilAumentado += oil.buff;
                    if (oil.sinal === '-') oilDiminuido += oil.buff;
                });
            }

            // Oil GH
            if (dadosDoBuff.oilGH) {
                dadosDoBuff.oilGH.forEach(oil => {
                    if (oil.sinal === 'x') oilMulti *= oil.buff;
                    if (oil.sinal === '-') oilDiminuido += oil.buff;
                });
            }

            // Eventos Bônus
            if (dadosDoBuff.upEvento) {
                dadosDoBuff.upEvento.forEach(evento => {
                    if (evento.recursoAfetado?.includes(estacao)) {
                        bountifulHarvest *= 2;
                        if (eventoSelecionado === 'sunshower') sunshower /= 2;
                    }
                });
            }
        });
    }

    listasDeBuffs.forEach(lista => aplicarBuffs(lista));

    return {
        qtdSemente,
        qtdMulti,
        qtdSoma,
        qtdSubtrai,
        qtdInsta,
        qtdArea,
        qtdMenosRacao,
        qtdMaisRacao,
        tempoMulti,
        tempoCM,
        tempoSubtrai,
        multiCusto,
        multiVenda,
        estoqueMulti,
        estoqueSoma,
        oilMulti,
        oilAumentado,
        oilDiminuido,
        bountifulHarvest,
        sunshower
    };
}






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