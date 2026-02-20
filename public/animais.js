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
    { idName: 'pettingHand', name: 'Petting Hand', xpPadrao: 25, possui: false },
    { idName: 'brush',       name: 'Brush',        xpPadrao: 40, possui: false },
    { idName: 'musicBox',    name: 'Music Box',    xpPadrao: 50, possui: false },
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

//Defini qual comida esta sendo selecionado para o level
document.querySelectorAll('input[type="checkbox"][data-group]')
    .forEach(checkbox => {
        checkbox.addEventListener('change', () => {
        const group = checkbox.dataset.group;

        const groupCheckboxes = document.querySelectorAll(
            `input[type="checkbox"][data-group="${group}"]`
        );

        const checkedInGroup = [...groupCheckboxes].filter(cb => cb.checked);

        // 🔁 se desmarcar tudo, volta pra padrão
        if (checkedInGroup.length === 0) {
            const defaultOption = [...groupCheckboxes].find(cb => cb.hasAttribute('checked'));
            if (defaultOption) defaultOption.checked = true;
            return;
        }

        // ✅ marcou uma nova → desmarca as outras
        if (checkbox.checked) {
            groupCheckboxes.forEach(cb => {
            if (cb !== checkbox) cb.checked = false;
            });
        }
        });
    });


function xpCarinhoXpComidaValores() {

    //definir a imagem da comida Mixed Grain
    document.querySelectorAll('.bg-mixedGrain, .bg-kaleMix').forEach(span => {

        const possuiSkill = mapaDeTodasSkillsComTier['kaleMix2'].possui;

        span.classList.remove('bg-mixedGrain', 'bg-kaleMix');
        span.classList.add(`bg-${possuiSkill ? 'kaleMix' : 'mixedGrain'}`);

    });

    //definir se possuo ou não a ferramenta de carinho!
    const possuiPettingHand = document.getElementById('pettingHand').checked;
    const possuiBrush = document.getElementById('brush').checked;
    const possuiMusicBoxXP = document.getElementById('musicBox').checked;

    let pettingHandXP = possuiPettingHand === true ? Number(ferramentasAnimais[0].xpFinal) : 0;
    let brushXP = possuiBrush === true ?  Number(ferramentasAnimais[1].xpFinal) : 0;
    let musicBoxXP = possuiMusicBoxXP === true ? Number(ferramentasAnimais[2].xpFinal) : 0;

    ferramentaDeCarinhoPedida.forEach(ferramenta => {
        ferramenta.mediaDeXpGanho = (pettingHandXP * ferramenta.pettingHand) + (brushXP * ferramenta.brush) + (musicBoxXP * ferramenta.musicBox);
        console.log(`xp ganho com carinho no level ${ferramenta.level}: ${ferramenta.mediaDeXpGanho} xp!`)
    });

    //quantidade de vezes que vou fazer carinho por rodada!
    let qtdDeCarinhos = document.getElementById(`qtd-carinho-feito`).value === '1' ? 1 : 2;

    //ir para outra função!
    todosAnimais.forEach(animal => {

        let mediaDeXpGanhoPorRodadaComCarinhos = mapaDeTodosCollectibles['babyCow'].possui && animal.name === 'vaca' &&  mapaDeCarinhos[animal.levelAnterior].mediaDeXpGanho > 0 ? 
            (mapaDeCarinhos[animal.levelAnterior].mediaDeXpGanho + mapaDeTodosCollectibles['babyCow'].carinho[0].buff) * qtdDeCarinhos :
            mapaDeCarinhos[animal.levelAnterior].mediaDeXpGanho * qtdDeCarinhos;

        animal.xpAdquiridoComCarinho = mediaDeXpGanhoPorRodadaComCarinhos;
        console.log(`${animal.name} level: ${animal.level} ganha: ${mediaDeXpGanhoPorRodadaComCarinhos} xp`);

        animal.xpNecessario = animal.xpTotalDoLevel - animal.xpTotalAnterior;
        console.log(`${animal.name} level ${animal.levelAnterior} para level: ${animal.level} falta: ${animal.xpNecessario} xp para subir de nivel`);

        // Escolhendo a comida do level (agora com checkbox)
        if (animal.level <= 3) {
        animal.idComida = document.querySelector('input[data-group="3"]:checked').id;
        animal.xpDaComidaPadrao =
            animal.idComida === 'kernelBlend3' || animal.idComida === 'omnifeed3' ? 60 : 20;
        }

        if (animal.level > 3 && animal.level <= 6) {
        animal.idComida = document.querySelector('input[data-group="6"]:checked').id;
        animal.xpDaComidaPadrao =
            animal.idComida === 'hay6' || animal.idComida === 'omnifeed6' ? 60 : 20;
        }

        if (animal.level > 6 && animal.level <= 10) {
        animal.idComida = document.querySelector('input[data-group="10"]:checked').id;
        animal.xpDaComidaPadrao =
            animal.idComida === 'nutriBarley10' || animal.idComida === 'omnifeed10' ? 60 : 20;
        }

        if (animal.level > 10) {
        animal.idComida = document.querySelector('input[data-group="15"]:checked').id;
        animal.xpDaComidaPadrao =
            animal.idComida === 'mixedGrain15' || animal.idComida === 'omnifeed15' ? 80 : 20;
        }

        // Definir valor de cada unidade da comida (checkbox)
        if (animal.idComida.includes('kernelBlend')) {
        animal.custoDaComida = mapaDosValoresDoMarket['corn'].valor;
        }

        if (animal.idComida.includes('hay')) {
        animal.custoDaComida = mapaDosValoresDoMarket['wheat'].valor;
        }

        if (animal.idComida.includes('nutriBarley')) {
        animal.custoDaComida = mapaDosValoresDoMarket['barley'].valor;
        }

        if (animal.idComida.includes('mixedGrain')) {
        if (mapaDeTodasSkillsComTier['kaleMix2'].possui) {
            animal.custoDaComida = mapaDosValoresDoMarket['kale'].valor * 3;
        } else {
            animal.custoDaComida =
            mapaDosValoresDoMarket['corn'].valor +
            mapaDosValoresDoMarket['wheat'].valor +
            mapaDosValoresDoMarket['barley'].valor;
        }
        };

        if (animal.idComida.includes('omnifeed')) {
        animal.custoDaComida = precoDaGemEmFlower;
        };

        let xpDaComidaPrincipal = 60;
        //Se possuir essa skill, todo xp deve ser dobrado
        if (mapaDeTodasSkillsComTier['chonkyFeed'].possui) {
            animal.xpDaComidaPadrao *= 2;
            xpDaComidaPrincipal *= 2;
        };
        
    });
    calculoDeXpExcedenteDosAnimais();
};

document.getElementById('pettingHand').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('brush').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('musicBox').addEventListener('change', xpCarinhoXpComidaValores);
document.getElementById('qtd-carinho-feito').addEventListener('change', xpCarinhoXpComidaValores);

document.querySelectorAll('input[type="checkbox"][data-group]')
  .forEach(checkbox => {
    checkbox.addEventListener('change', xpCarinhoXpComidaValores);
  });

//=================================================================================================================================================================

function calculoDeXpExcedenteDosAnimais() {
    let xpRestanteParaProximoLevel = 0;
    let tipoAnterior = null;

    todosAnimais.forEach(animal => {
        // Se o tipo mudou (galinha → vaca → ovelha), reseta o XP excedente
        if (tipoAnterior !== animal.name) {
            xpRestanteParaProximoLevel = 0;
            tipoAnterior = animal.name;
        }

        // Caso tenha NFT que não precisa alimentar
        if (animal.qtdComidaPadrao === 0) {
            animal.xpAdquiridoComCarinho = 0;
            xpRestanteParaProximoLevel = 0;
        }

        animal.xpExcedente = xpRestanteParaProximoLevel;

        let qtdDeVezesQueIraAlimentar = Math.max(0, Math.ceil(
            (animal.xpNecessario - (animal.xpExcedente + animal.xpAdquiridoComCarinho)) /
            animal.xpDaComidaPadrao
        ));

        if (animal.xpExcedente + animal.xpAdquiridoComCarinho >= animal.xpNecessario) {
            animal.comidaNecessaria = 0;
        } else {
            animal.comidaNecessaria = qtdDeVezesQueIraAlimentar * animal.qtdComidaPadrao;
            animal.xpGanhoComendo = qtdDeVezesQueIraAlimentar * animal.xpDaComidaPadrao;
        }

        // Atualiza o XP excedente para o próximo animal do mesmo tipo
        xpRestanteParaProximoLevel =
            xpRestanteParaProximoLevel +
            (qtdDeVezesQueIraAlimentar * animal.xpDaComidaPadrao) +
            animal.xpAdquiridoComCarinho -
            animal.xpNecessario;

        xpRestanteParaProximoLevel = Math.max(0, xpRestanteParaProximoLevel);

        console.log(`[${animal.name}] sobrou ${xpRestanteParaProximoLevel} XP para o próximo level`);
    });

    buffsAdicionadosRecursosAnimais();
}
