let animais = {

    galinhas: [
        { name: 'galinha', levelAnterior: 0,  xpTotalAnterior: 0,    level: 1,  xpTotalDoLevel: 60,   xpNecessario: 60,  idComida: 'kernelBlend', xpDaComidaPadrao: 60, qtdComidaPadrao: 1, egg: 1, feather: 0, },
        { name: 'galinha', levelAnterior: 1,  xpTotalAnterior: 60,   level: 2,  xpTotalDoLevel: 120,  xpNecessario: 60,  idComida: 'kernelBlend', xpDaComidaPadrao: 60, qtdComidaPadrao: 1, egg: 1, feather: 0, },
        { name: 'galinha', levelAnterior: 2,  xpTotalAnterior: 120,  level: 3,  xpTotalDoLevel: 240,  xpNecessario: 120, idComida: 'kernelBlend', xpDaComidaPadrao: 60, qtdComidaPadrao: 1, egg: 1, feather: 1, },
        { name: 'galinha', levelAnterior: 3,  xpTotalAnterior: 240,  level: 4,  xpTotalDoLevel: 360,  xpNecessario: 120, idComida: 'hay',         xpDaComidaPadrao: 60, qtdComidaPadrao: 1, egg: 2, feather: 1, },
        { name: 'galinha', levelAnterior: 4,  xpTotalAnterior: 360,  level: 5,  xpTotalDoLevel: 480,  xpNecessario: 120, idComida: 'hay',         xpDaComidaPadrao: 60, qtdComidaPadrao: 1, egg: 2, feather: 1, },
        { name: 'galinha', levelAnterior: 5,  xpTotalAnterior: 480,  level: 6,  xpTotalDoLevel: 660,  xpNecessario: 180, idComida: 'hay',         xpDaComidaPadrao: 60, qtdComidaPadrao: 1, egg: 2, feather: 1, },
        { name: 'galinha', levelAnterior: 6,  xpTotalAnterior: 660,  level: 7,  xpTotalDoLevel: 840,  xpNecessario: 180, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 1, egg: 2, feather: 1, },
        { name: 'galinha', levelAnterior: 7,  xpTotalAnterior: 840,  level: 8,  xpTotalDoLevel: 1020, xpNecessario: 180, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 1, egg: 3, feather: 1, },
        { name: 'galinha', levelAnterior: 8,  xpTotalAnterior: 1020, level: 9,  xpTotalDoLevel: 1200, xpNecessario: 180, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 1, egg: 3, feather: 2, },
        { name: 'galinha', levelAnterior: 9,  xpTotalAnterior: 1200, level: 10, xpTotalDoLevel: 1440, xpNecessario: 240, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 1, egg: 3, feather: 2, },
        { name: 'galinha', levelAnterior: 10, xpTotalAnterior: 1440, level: 11, xpTotalDoLevel: 1680, xpNecessario: 240, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 1, egg: 3, feather: 2, },
        { name: 'galinha', levelAnterior: 11, xpTotalAnterior: 1680, level: 12, xpTotalDoLevel: 1920, xpNecessario: 240, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 1, egg: 3, feather: 1, },
        { name: 'galinha', levelAnterior: 12, xpTotalAnterior: 1920, level: 13, xpTotalDoLevel: 2160, xpNecessario: 240, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 1, egg: 4, feather: 2, },
        { name: 'galinha', levelAnterior: 13, xpTotalAnterior: 2160, level: 14, xpTotalDoLevel: 2400, xpNecessario: 240, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 1, egg: 4, feather: 2, },
        { name: 'galinha', levelAnterior: 14, xpTotalAnterior: 2400, level: 15, xpTotalDoLevel: 2720, xpNecessario: 320, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 1, egg: 5, feather: 3, },
        { name: 'galinha', levelAnterior: 15, xpTotalAnterior: 2400, level: 15, xpTotalDoLevel: 2720, xpNecessario: 320, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 1, egg: 5, feather: 3, }
    ],

    vacas: [
        { name: 'vaca', levelAnterior: 0,  xpTotalAnterior: 0,    level: 1,  xpTotalDoLevel: 180,  xpNecessario: 180, idComida: 'kernelBlend', xpDaComidaPadrao: 60, qtdComidaPadrao: 5, milk: 1, leather: 1 },
        { name: 'vaca', levelAnterior: 1,  xpTotalAnterior: 180,  level: 2,  xpTotalDoLevel: 360,  xpNecessario: 180, idComida: 'kernelBlend', xpDaComidaPadrao: 60, qtdComidaPadrao: 5, milk: 1, leather: 1 },
        { name: 'vaca', levelAnterior: 2,  xpTotalAnterior: 360,  level: 3,  xpTotalDoLevel: 720,  xpNecessario: 360, idComida: 'kernelBlend', xpDaComidaPadrao: 60, qtdComidaPadrao: 5, milk: 1, leather: 1 },
        { name: 'vaca', levelAnterior: 3,  xpTotalAnterior: 720,  level: 4,  xpTotalDoLevel: 1080, xpNecessario: 360, idComida: 'hay',         xpDaComidaPadrao: 60, qtdComidaPadrao: 5, milk: 2, leather: 1 },
        { name: 'vaca', levelAnterior: 4,  xpTotalAnterior: 1080, level: 5,  xpTotalDoLevel: 1440, xpNecessario: 360, idComida: 'hay',         xpDaComidaPadrao: 60, qtdComidaPadrao: 5, milk: 2, leather: 1 },
        { name: 'vaca', levelAnterior: 5,  xpTotalAnterior: 1440, level: 6,  xpTotalDoLevel: 1980, xpNecessario: 540, idComida: 'hay',         xpDaComidaPadrao: 60, qtdComidaPadrao: 5, milk: 2, leather: 2 },
        { name: 'vaca', levelAnterior: 6,  xpTotalAnterior: 1980, level: 7,  xpTotalDoLevel: 2520, xpNecessario: 540, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 5, milk: 2, leather: 2 },
        { name: 'vaca', levelAnterior: 7,  xpTotalAnterior: 2520, level: 8,  xpTotalDoLevel: 3060, xpNecessario: 540, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 5, milk: 3, leather: 2 },
        { name: 'vaca', levelAnterior: 8,  xpTotalAnterior: 3060, level: 9,  xpTotalDoLevel: 3600, xpNecessario: 540, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 5, milk: 3, leather: 2 },
        { name: 'vaca', levelAnterior: 9,  xpTotalAnterior: 3600, level: 10, xpTotalDoLevel: 4320, xpNecessario: 720, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 5, milk: 3, leather: 3 },
        { name: 'vaca', levelAnterior: 10, xpTotalAnterior: 4320, level: 11, xpTotalDoLevel: 5040, xpNecessario: 720, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 5, milk: 3, leather: 3 },
        { name: 'vaca', levelAnterior: 11, xpTotalAnterior: 5040, level: 12, xpTotalDoLevel: 5760, xpNecessario: 720, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 5, milk: 3, leather: 3 },
        { name: 'vaca', levelAnterior: 12, xpTotalAnterior: 5760, level: 13, xpTotalDoLevel: 6480, xpNecessario: 720, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 5, milk: 3, leather: 3 },
        { name: 'vaca', levelAnterior: 13, xpTotalAnterior: 6480, level: 14, xpTotalDoLevel: 7200, xpNecessario: 720, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 5, milk: 3, leather: 3 },
        { name: 'vaca', levelAnterior: 14, xpTotalAnterior: 7200, level: 15, xpTotalDoLevel: 8160, xpNecessario: 960, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 5, milk: 4, leather: 4 },
        { name: 'vaca', levelAnterior: 15, xpTotalAnterior: 7200, level: 15, xpTotalDoLevel: 8160, xpNecessario: 960, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 5, milk: 4, leather: 4 }
    ],

    ovelhas: [
        { name: 'ovelha', levelAnterior: 0,  xpTotalAnterior: 0,    level: 1,  xpTotalDoLevel: 120,  xpNecessario: 120, idComida: 'kernelBlend', xpDaComidaPadrao: 60, qtdComidaPadrao: 3, wool: 1, merinoWool: 1 },
        { name: 'ovelha', levelAnterior: 1,  xpTotalAnterior: 120,  level: 2,  xpTotalDoLevel: 240,  xpNecessario: 120, idComida: 'kernelBlend', xpDaComidaPadrao: 60, qtdComidaPadrao: 3, wool: 1, merinoWool: 1 },
        { name: 'ovelha', levelAnterior: 2,  xpTotalAnterior: 240,  level: 3,  xpTotalDoLevel: 480,  xpNecessario: 240, idComida: 'kernelBlend', xpDaComidaPadrao: 60, qtdComidaPadrao: 3, wool: 1, merinoWool: 1 },
        { name: 'ovelha', levelAnterior: 3,  xpTotalAnterior: 480,  level: 4,  xpTotalDoLevel: 720,  xpNecessario: 240, idComida: 'hay',         xpDaComidaPadrao: 60, qtdComidaPadrao: 3, wool: 2, merinoWool: 1 },
        { name: 'ovelha', levelAnterior: 4,  xpTotalAnterior: 720,  level: 5,  xpTotalDoLevel: 960,  xpNecessario: 240, idComida: 'hay',         xpDaComidaPadrao: 60, qtdComidaPadrao: 3, wool: 2, merinoWool: 1 },
        { name: 'ovelha', levelAnterior: 5,  xpTotalAnterior: 960,  level: 6,  xpTotalDoLevel: 1320, xpNecessario: 360, idComida: 'hay',         xpDaComidaPadrao: 60, qtdComidaPadrao: 3, wool: 2, merinoWool: 2 },
        { name: 'ovelha', levelAnterior: 6,  xpTotalAnterior: 1320, level: 7,  xpTotalDoLevel: 1680, xpNecessario: 360, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 3, wool: 2, merinoWool: 2 },
        { name: 'ovelha', levelAnterior: 7,  xpTotalAnterior: 1680, level: 8,  xpTotalDoLevel: 2040, xpNecessario: 360, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 3, wool: 3, merinoWool: 2 },
        { name: 'ovelha', levelAnterior: 8,  xpTotalAnterior: 2040, level: 9,  xpTotalDoLevel: 2400, xpNecessario: 360, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 3, wool: 3, merinoWool: 2 },
        { name: 'ovelha', levelAnterior: 9,  xpTotalAnterior: 2400, level: 10, xpTotalDoLevel: 2880, xpNecessario: 480, idComida: 'nutriBarley', xpDaComidaPadrao: 60, qtdComidaPadrao: 3, wool: 3, merinoWool: 3 },
        { name: 'ovelha', levelAnterior: 10, xpTotalAnterior: 2880, level: 11, xpTotalDoLevel: 3360, xpNecessario: 480, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 3, wool: 3, merinoWool: 3 },
        { name: 'ovelha', levelAnterior: 11, xpTotalAnterior: 3360, level: 12, xpTotalDoLevel: 3840, xpNecessario: 480, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 3, wool: 3, merinoWool: 3 },
        { name: 'ovelha', levelAnterior: 12, xpTotalAnterior: 3840, level: 13, xpTotalDoLevel: 4320, xpNecessario: 480, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 3, wool: 3, merinoWool: 3 },
        { name: 'ovelha', levelAnterior: 13, xpTotalAnterior: 4320, level: 14, xpTotalDoLevel: 4800, xpNecessario: 480, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 3, wool: 3, merinoWool: 3 },
        { name: 'ovelha', levelAnterior: 14, xpTotalAnterior: 4800, level: 15, xpTotalDoLevel: 5440, xpNecessario: 640, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 3, wool: 4, merinoWool: 4 },
        { name: 'ovelha', levelAnterior: 15, xpTotalAnterior: 4800, level: 15, xpTotalDoLevel: 5440, xpNecessario: 640, idComida: 'mixedGrain',  xpDaComidaPadrao: 80, qtdComidaPadrao: 3, wool: 4, merinoWool: 4 }
    ]
};

let todosAnimais = [...animais.galinhas, ...animais.vacas, ...animais.ovelhas];

//=================================================================================================================================================================

const ferramentasAnimais = [
    { idName: 'pettingHand', name: 'Petting Hand', xpPadrao: 25 },
    { idName: 'brush',       name: 'Brush',        xpPadrao: 40 },
    { idName: 'musicBox',    name: 'Music Box',    xpPadrao: 50 },
];

let ferramentaDeCarinhoPedida = [
    { level: 0,  pettingHand: 0,   brush: 0,   musicBox: 0,   mediaDeXpGanho: 0 },
    { level: 1,  pettingHand: 1,   brush: 0,   musicBox: 0,   mediaDeXpGanho: 0 },
    { level: 2,  pettingHand: 0.8, brush: 0.2, musicBox: 0,   mediaDeXpGanho: 0 },
    { level: 3,  pettingHand: 0.7, brush: 0.3, musicBox: 0,   mediaDeXpGanho: 0 },
    { level: 4,  pettingHand: 0.6, brush: 0.3, musicBox: 0.1, mediaDeXpGanho: 0 },
    { level: 5,  pettingHand: 0.5, brush: 0.4, musicBox: 0.1, mediaDeXpGanho: 0 },
    { level: 6,  pettingHand: 0.5, brush: 0.3, musicBox: 0.2, mediaDeXpGanho: 0 },
    { level: 7,  pettingHand: 0.4, brush: 0.4, musicBox: 0.2, mediaDeXpGanho: 0 },
    { level: 8,  pettingHand: 0.4, brush: 0.3, musicBox: 0.3, mediaDeXpGanho: 0 },
    { level: 9,  pettingHand: 0.3, brush: 0.4, musicBox: 0.3, mediaDeXpGanho: 0 },
    { level: 10, pettingHand: 0.3, brush: 0.3, musicBox: 0.4, mediaDeXpGanho: 0 },
    { level: 11, pettingHand: 0.2, brush: 0.4, musicBox: 0.4, mediaDeXpGanho: 0 },
    { level: 12, pettingHand: 0.2, brush: 0.3, musicBox: 0.5, mediaDeXpGanho: 0 },
    { level: 13, pettingHand: 0.1, brush: 0.4, musicBox: 0.5, mediaDeXpGanho: 0 },
    { level: 14, pettingHand: 0.1, brush: 0.3, musicBox: 0.6, mediaDeXpGanho: 0 },
    { level: 15, pettingHand: 0.1, brush: 0.2, musicBox: 0.7, mediaDeXpGanho: 0 }
];

//mapa para as ferramentas usadas para fazer carinho nos animais!
let mapaDeCarinhos = {};
ferramentaDeCarinhoPedida.forEach(level => {
    mapaDeCarinhos[level.level] = level;
});
console.log(mapaDeCarinhos);

//=================================================================================================================================================================

function xpCarinhoXpComidaValores() {
    let pettingHandXP = Number(ferramentasAnimais[0].xpFinal);
    let brushXP = Number(ferramentasAnimais[1].xpFinal);
    let musicBoxXP = Number(ferramentasAnimais[2].xpFinal);

    ferramentaDeCarinhoPedida.forEach(ferramenta => {
        ferramenta.mediaDeXpGanho = (pettingHandXP * ferramenta.pettingHand) + (brushXP * ferramenta.brush) + (musicBoxXP * ferramenta.musicBox);
        console.log(`xp ganho com carinho no level ${ferramenta.level}: ${ferramenta.mediaDeXpGanho} xp!`)
    });

    //ir para outra função!
    todosAnimais.forEach(animal => {

        let mediaDeXpGanhoPorRodadaComCarinhos = mapaDeTodosCollectibles['babyCow'].possui && animal.name === 'vaca' &&  mapaDeCarinhos[animal.levelAnterior].mediaDeXpGanho > 0 ? 
            (mapaDeCarinhos[animal.levelAnterior].mediaDeXpGanho + mapaDeTodosCollectibles['babyCow'].carinho[0].buff) * 2 :
            mapaDeCarinhos[animal.levelAnterior].mediaDeXpGanho * 2;

        animal.xpAdquiridoComCarinho = mediaDeXpGanhoPorRodadaComCarinhos;
        console.log(`${animal.name} level: ${animal.level} ganha: ${mediaDeXpGanhoPorRodadaComCarinhos} xp`);

        animal.xpNecessario = animal.xpTotalDoLevel - animal.xpTotalAnterior - mediaDeXpGanhoPorRodadaComCarinhos;
        console.log(`${animal.name} level ${animal.levelAnterior} para level: ${animal.level} falta: ${animal.xpNecessario} xp para subir de nivel`);

        let animalEscolhido = animal.name;

        //Escolhendo a comida do level - isso deve mudar pra ser especifico pra cada animal
        if (animal.level <= 3) {
            animal.idComida = document.getElementById(`${animalEscolhido}-comida-ate-level3`).value;
            animal.xpDaComidaPadrao = animal.idComida === 'kernelBlend' || animal.idComida === 'omnifeed' ? 60 : 20;
        } 
        if (animal.level > 3 && animal.level <= 6) {
            animal.idComida = document.getElementById(`${animalEscolhido}-comida-level4ao6`).value;
            animal.xpDaComidaPadrao = animal.idComida === 'hay' || animal.idComida === 'omnifeed' ? 60 : 20;
        }
        if (animal.level > 6 && animal.level <= 10) {
            animal.idComida = document.getElementById(`${animalEscolhido}-comida-level7ao10`).value;
            animal.xpDaComidaPadrao = animal.idComida === 'nutriBarley' || animal.idComida === 'omnifeed' ? 60 : 20;
        }
        if (animal.level > 10) {
            animal.idComida = document.getElementById(`${animalEscolhido}-comida-level11ao15`).value;
            animal.xpDaComidaPadrao = animal.idComida === 'mixedGrain' || animal.idComida === 'omnifeed' ? 80 : 20;
        }

        if (mapaDeTodasSkillsComTier['chonkyFeed'].possui) {
            animal.xpDaComidaPadrao *= 2;
        };

        //Definir valor de cada unidade da comida
        if (animal.idComida === 'kernelBlend') animal.custoDaComida = mapaDosValoresDoMarket['corn'].valor;
        if (animal.idComida === 'hay') animal.custoDaComida = mapaDosValoresDoMarket['wheat'].valor;
        if (animal.idComida === 'nutriBarley') animal.custoDaComida = mapaDosValoresDoMarket['barley'].valor;
        if (mapaDeTodasSkillsComTier['kaleMix'].possui) {
            if (animal.idComida === 'mixedGrain') animal.custoDaComida = mapaDosValoresDoMarket['kale'].valor * 3;
        } else {
            if (animal.idComida === 'mixedGrain') animal.custoDaComida = mapaDosValoresDoMarket['corn'].valor + mapaDosValoresDoMarket['wheat'].valor + mapaDosValoresDoMarket['barley'].valor;
        }
        if (animal.idComida === 'omnifeed') animal.custoDaComida = precoDaGemEmFlower;
    });
    buffsAdicionadosRecursosAnimais();

};
document.getElementById('galinha-comida-ate-level3').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('galinha-comida-level4ao6').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('galinha-comida-level7ao10').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('galinha-comida-level11ao15').addEventListener('change', xpCarinhoXpComidaValores);

document.getElementById('vaca-comida-ate-level3').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('vaca-comida-level4ao6').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('vaca-comida-level7ao10').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('vaca-comida-level11ao15').addEventListener('change', xpCarinhoXpComidaValores);

document.getElementById('ovelha-comida-ate-level3').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('ovelha-comida-level4ao6').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('ovelha-comida-level7ao10').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('ovelha-comida-level11ao15').addEventListener('change', xpCarinhoXpComidaValores);

//=================================================================================================================================================================

