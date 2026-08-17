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
    let totalSP = 0;
    let totalShards = 0;

    // Função interna que lê a skill e soma os custos baseados no nível atual
    const somarCustos = (skill) => {
        let levelAtivo = skill.level > 0 ? skill.level : (skill.possui ? 1 : 0);
        if (levelAtivo === 0) return; // Se não tem a skill, não soma nada

        if (skill.niveis && skill.niveis.length > 0) {
            // Soma todos os níveis adquiridos até o level atual
            for (let i = 0; i < levelAtivo; i++) {
                if (skill.niveis[i]) {
                    totalSP += Number(skill.niveis[i].pontosNecessarios || 0);
                    
                    // REGRA: O índice 0 equivale ao Nível 1. Só soma Shard se for maior que 0 (Níveis 2 e 3).
                    if (i > 0) {
                        totalShards += Number(skill.niveis[i].shards || 0);
                    }
                }
            }
        } else {
            // Para as skills antigas (Legacy) que só tem 1 nível
            totalSP += Number(skill.pontosNecessarios || 1);
            // Como equivalem ao Nível 1, não somamos Shards nelas.
        }
    };

    // Percorre todas as listas de skills que você tem
    if (typeof todasSkillsComTier !== 'undefined') todasSkillsComTier.forEach(somarCustos);
    if (typeof skillsLegacy !== 'undefined') skillsLegacy.forEach(somarCustos);

    // Atualiza o HTML lá no topo da página
    const tituloSkills = document.getElementById('total-pontos-gastos-em-skills');
    
    if (tituloSkills) {
        // Ícone do Shard (pronto para receber seu CSS depois)
        let iconeShard = `<span class="sprite sprite-icones bg-shard" style="display: inline-block; width: 22px; height: 22px; vertical-align: bottom; margin-bottom: 0px;"></span>`;
        
        // Aqui mudamos exatamente o que você pediu na imagem:
        tituloSkills.innerHTML = `Skill Points: ${totalSP} 
            <span style="color: #a4cfff; margin-left: 15px; font-size: 0.9em; text-shadow: 1px 1px 2px #000;">${iconeShard} ${totalShards}</span>`;
    }
}


//===========================================================================================================================================================================

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
