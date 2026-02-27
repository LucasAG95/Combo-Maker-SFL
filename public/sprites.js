function sprite(nome, categoria = "crops", tipo = "normal") {

    const categorias = {
        crops: "sprite-crops",
        icones: "sprite-icones",
        minerais: "sprite-minerais",
        animais: "sprite-animais",
        collectibles: "sprite-collectibles",
        fertilizantes: "sprite-fertilizantes",
        skills: "sprite-skills",
        temporarios: "sprite-temporarios",
        wearables: "sprite-wearables",
        auras: "sprite-auras",
        buds: "sprite-buds",   
    };

    const classeCategoria = categorias[categoria] || "sprite-crops";

    const prefixo = tipo === "seed" ? "bg-seed" : "bg-";

    return `<span class="sprite ${classeCategoria} ${prefixo}${nome}"></span>`;
};

//imagens para colocar nas tabelas e cards universais!

//Icones
let imgTempo = sprite('tempo', 'icones');
let imgRestock = sprite('restock', 'icones');
let imgGem = sprite('gem', 'icones');
let imgCoins = sprite('coins', 'icones');
let imgFlower = sprite('flower', 'icones');
let imgUsdc = sprite('usdc', 'icones');
let imgXP = sprite('xp', 'icones');
let imgSubirXP = sprite('subirXP', 'icones');
let imgCilo = sprite('ciclo', 'icones');

//Minerais
let imgOil = sprite('oil', 'minerais');
let imgMadeira = sprite('wood', 'minerais');
let imgMachado = sprite('axe', 'minerais');
let imgPedra = sprite('stone', 'minerais');
let imgFerro = sprite('iron', 'minerais');
let imgOuro = sprite('gold', 'minerais');
let imgCrim = sprite('crimstone', 'minerais');

//Animais
let imgBrush = sprite('brush', 'animais');
let imgOvo = sprite('egg', 'animais');
let imgPena = sprite('feather', 'animais');
let imgGalinha = sprite('galinha', 'animais');
let imgLeite = sprite('milk', 'animais');
let imgCouro = sprite('leather', 'animais');
let imgVaca = sprite('vaca', 'animais');
let imgLa = sprite('wool', 'animais');
let imgMerino = sprite('merinoWool', 'animais');
let imgOvelha = sprite('ovelha', 'animais');
let imgKernelBlend = sprite('kernelBlend', 'animais');
let imgHay = sprite('hay', 'animais');
let imgNutriBarley = sprite('nutriBarley', 'animais');
let imgMixedGrain = sprite('mixedGrain', 'animais');
let imgKaleMix = sprite('kaleMix', 'animais');
let imgOmnifeed = sprite('omnifeed', 'animais');