let idiomaValorDasNftsEPontosTotaisSkills = {
    portugues: {
        pontos: 'Pontos',
        ultimaVenda: 'Ultima Venda',
        precoAtual: 'Preço Atual'
    },
    ingles: {
        pontos: 'Points',
        ultimaVenda: 'Last Sale',
        precoAtual: 'Current Price',
    }
}


function pontosGastosEmSkills() {

    //soma dos pontos de skills gastos
    let totalDePontosEmSkills = 0;
    todasSkillsComTier.forEach(skill => {
        let checkbox = document.getElementById(skill.idName);

        if(checkbox && checkbox.checked) {
            totalDePontosEmSkills += Number(skill.pontosNecessarios);
        };
    });

    document.getElementById('total-pontos-gastos-em-skills').innerHTML = `Skills: ${totalDePontosEmSkills} ${idiomaValorDasNftsEPontosTotaisSkills[idioma].pontos}`;

};

//==========================================================================================================================================================================

function valorTotalEmNfts() {

    const idiomaSelecionadoNfts = idiomaValorDasNftsEPontosTotaisSkills[idioma];

    //soma dos valores em flower e dolar dos Collectibles
    let valorEmCollectiblesUltimaVenda = 0;
    let valorEmCollectiblesPrecoAtual = 0;
    todosCollectibles.forEach(collectibles => {
        let checkbox = document.getElementById(collectibles.idName);

        if(checkbox && checkbox.checked) {
            valorEmCollectiblesUltimaVenda += Number(collectibles.preco) || 0;
            valorEmCollectiblesPrecoAtual += Number(collectibles.precoAtual) || 0;
        };
    });
    document.getElementById('total-valor-em-collectibles').innerHTML = `Collectibles:
        <h3>
            ${idiomaSelecionadoNfts.precoAtual}: ${imgFlower} ${valorEmCollectiblesPrecoAtual.toFixed(2)} ~ ${imgUsdc} $${(valorEmCollectiblesPrecoAtual * precoDoFlower).toFixed(2)}<br>
            ${idiomaSelecionadoNfts.ultimaVenda}: ${imgFlower} ${valorEmCollectiblesUltimaVenda.toFixed(2)} ~ ${imgUsdc} $${(valorEmCollectiblesUltimaVenda * precoDoFlower).toFixed(2)}
        </h3>`;
    
    //========================================================================================================================================================================

    //soma dos valores em flower e dolar dos Wearables
    let valorEmWearablesUltimaVenda = 0;
    let valorEmWearablesPrecoAtual = 0;
    todosWearables.forEach(wearables => {
        let checkbox = document.getElementById(wearables.idName);

        if(checkbox && checkbox.checked) {
            valorEmWearablesUltimaVenda += Number(wearables.preco) || 0 ;
            valorEmWearablesPrecoAtual += Number(wearables.precoAtual) || 0;
        };
    });
    document.getElementById('total-valor-em-wearables').innerHTML = `Wearables:
        <h3>
            ${idiomaSelecionadoNfts.precoAtual}: ${imgFlower} ${valorEmWearablesPrecoAtual.toFixed(2)} ~ ${imgUsdc} $${(valorEmWearablesPrecoAtual * precoDoFlower).toFixed(2)}<br>
            ${idiomaSelecionadoNfts.ultimaVenda}: ${imgFlower} ${valorEmWearablesUltimaVenda.toFixed(2)} ~ ${imgUsdc} $${(valorEmWearablesUltimaVenda * precoDoFlower).toFixed(2)}
        </h3>`;

    //========================================================================================================================================================================
    
    /*let valorTotalDasNftsUltimaVenda = valorEmCollectiblesUltimaVenda + valorEmWearablesUltimaVenda;
    let valorTotalDasNftsPrecoAtual = valorEmWearablesPrecoAtual + valorEmCollectiblesPrecoAtual

    document.getElementById('valor-total-em-NFTs').innerHTML = `Total em NFTs:<br> 
        ${idiomaPrecoAtual}:${imgFlower} ${valorTotalDasNftsPrecoAtual.toFixed(2)} ~ 
            ${imgUsdc} ${(valorTotalDasNftsPrecoAtual * precoDoFlower).toFixed(2)}<br>
        ${idiomaUltimaVenda}:${imgFlower} ${valorTotalDasNftsUltimaVenda.toFixed(2)} ~ 
            ${imgUsdc} ${(valorTotalDasNftsUltimaVenda * precoDoFlower).toFixed(2)}`*/
};
