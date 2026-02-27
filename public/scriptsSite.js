// ============================================================================
// SISTEMA DE SAVE MELHORADO - saveManager.js v2.0.0
// ============================================================================

const SaveManager = {
    VERSION: '2.0.0',
    SAVE_KEY: 'sfl_combo_maker_save',
    DEBOUNCE_DELAY: 500,
    debounceTimer: null,

    // ========================================================================
    // SALVAR ESTADO COMPLETO
    // ========================================================================
    salvarEstado() {
        try {
            const estado = {
                version: this.VERSION,
                timestamp: Date.now(),
                
                // Configurações básicas
                config: {
                    idioma: idioma,
                    estacao: estacao,
                    ilha: ilha,
                    vip: vip,
                    flowerEmCoins: flowerEmCoins,
                    packGems: document.getElementById('pack-gems')?.value,
                },

                // Farm info
                farm: {
                    numero: document.getElementById('numeroFarm')?.value,
                    plots: plots,
                    plotsFrutas: plotsFrutas,
                },

                // Modo de cálculo
                modoCalculo: {
                    crops: modoDeCalularCrops,
                    cropsCM: modoDeCalularCropsNaCM,
                    frutas: modoDeCalularCropsFruta,
                    cropsGH: modoDeCalcularGreenhouse,
                    minerios: modoDeCalcularMinerios,
                },

                // Opções de Restock
                restock: {
                    crops: document.getElementById('descontar-restock-crops')?.value,
                    cropsCM: document.getElementById('descontar-restock-cm')?.value,
                    frutas: document.getElementById('descontar-restock-frutas')?.value,
                    greenhouse: document.getElementById('descontar-restock-greenhouse')?.value,
                    minerais: document.getElementById('descontar-restock-minerais')?.value,
                },

                // Minerals - quantidade de nodes
                minerals: {
                    wood: { 
                        t1: mapaDeMinerals['wood'].qtdNodes.t1, 
                        t2: mapaDeMinerals['wood'].qtdNodes.t2, 
                        t3: mapaDeMinerals['wood'].qtdNodes.t3 
                    },
                    stone: { 
                        t1: mapaDeMinerals['stone'].qtdNodes.t1, 
                        t2: mapaDeMinerals['stone'].qtdNodes.t2, 
                        t3: mapaDeMinerals['stone'].qtdNodes.t3 
                    },
                    iron: { 
                        t1: mapaDeMinerals['iron'].qtdNodes.t1, 
                        t2: mapaDeMinerals['iron'].qtdNodes.t2, 
                        t3: mapaDeMinerals['iron'].qtdNodes.t3 
                    },
                    gold: { 
                        t1: mapaDeMinerals['gold'].qtdNodes.t1, 
                        t2: mapaDeMinerals['gold'].qtdNodes.t2, 
                        t3: mapaDeMinerals['gold'].qtdNodes.t3 
                    },
                    crimstone: { t1: mapaDeMinerals['crimstone'].qtdNodes.t1 },
                    oil: { t1: mapaDeMinerals['oil'].qtdNodes.t1 },
                },

                // Seeds plantadas
                seedsPlantadas: {
                    crops: crops.map(c => ({ name: c.name, seeds: c.seedsPlantadas })),
                    cropsCM: cropMachine.map(c => ({ name: c.name, seeds: c.seedsPlantadas })),
                    fruits: fruits.map(f => ({ name: f.name, seeds: f.seedsPlantadas })),
                    greenhouse: greenhouse.map(gh => ({ name: gh.name, seeds: gh.seedsPlantadas })),
                },

                // Ferramentas usadas
                ferramentasUsadas: todasFerramentas.map(f => ({ id: f.id, qtd: f.qtdUsada })),

                // Skills Legacy
                skillsLegacy: skillsLegacy.map(s => ({ idName: s.idName, possui: s.possui })),

                // Skills com Tier
                skillsTier: todasSkillsComTier.map(s => ({ idName: s.idName, possui: s.possui })),

                // Collectibles
                collectibles: todosCollectibles.map(c => ({ idName: c.idName, possui: c.possui })),

                // Wearables
                wearables: todosWearables.map(w => ({ idName: w.idName, possui: w.possui })),

                // Buffs Temporários
                temporarios: todosTemporarios.map(t => ({ idName: t.idName, possui: t.possui })),

                // Buds - checkbox principal + aura selecionada
                buds: (() => {
                    const todasCategorias = Object.keys(buds); // plaza, woodlands, cave, etc.
                    const resultado = {};
                    todasCategorias.forEach(categoria => {
                        resultado[categoria] = buds[categoria].map(bud => ({
                            idName: bud.idName,
                            possui: bud.possui,
                            aura: bud.aura, // 1 = sem aura, ou o mult da aura selecionada
                            // Salva qual aura está marcada (id da aura, ou null)
                            auraId: (() => {
                                if (!bud.possui) return null;
                                const auraSelecionada = AURAS.find(a => {
                                    const cb = document.getElementById(`aura-${bud.idName}-${a.id}`);
                                    return cb && cb.checked;
                                });
                                return auraSelecionada ? auraSelecionada.id : null;
                            })()
                        }));
                    });
                    return resultado;
                })(),

                // Animais - Quantidade usada e vendida
                animais: {
                    galinhas: animais.galinhas.map(g => ({ 
                        levelAnterior: g.levelAnterior, 
                        qtdUsada: g.qtdUsada, 
                        vendida: g.vendida 
                    })),
                    vacas: animais.vacas.map(v => ({ 
                        levelAnterior: v.levelAnterior, 
                        qtdUsada: v.qtdUsada, 
                        vendida: v.vendida 
                    })),
                    ovelhas: animais.ovelhas.map(o => ({ 
                        levelAnterior: o.levelAnterior, 
                        qtdUsada: o.qtdUsada, 
                        vendida: o.vendida 
                    })),
                },

                // ⭐ Comidas dos animais (checkboxes por level - global para todos)
                comidasAnimais: {
                    // Level 0-3
                    kernelBlend3: document.getElementById('kernelBlend3')?.checked || false,
                    hay3: document.getElementById('hay3')?.checked || false,
                    nutriBarley3: document.getElementById('nutriBarley3')?.checked || false,
                    mixedGrain3: document.getElementById('mixedGrain3')?.checked || false,
                    omnifeed3: document.getElementById('omnifeed3')?.checked || false,
                    
                    // Level 4-6
                    kernelBlend6: document.getElementById('kernelBlend6')?.checked || false,
                    hay6: document.getElementById('hay6')?.checked || false,
                    nutriBarley6: document.getElementById('nutriBarley6')?.checked || false,
                    mixedGrain6: document.getElementById('mixedGrain6')?.checked || false,
                    omnifeed6: document.getElementById('omnifeed6')?.checked || false,
                    
                    // Level 7-10
                    kernelBlend10: document.getElementById('kernelBlend10')?.checked || false,
                    hay10: document.getElementById('hay10')?.checked || false,
                    nutriBarley10: document.getElementById('nutriBarley10')?.checked || false,
                    mixedGrain10: document.getElementById('mixedGrain10')?.checked || false,
                    omnifeed10: document.getElementById('omnifeed10')?.checked || false,
                    
                    // Level 11-15
                    kernelBlend15: document.getElementById('kernelBlend15')?.checked || false,
                    hay15: document.getElementById('hay15')?.checked || false,
                    nutriBarley15: document.getElementById('nutriBarley15')?.checked || false,
                    mixedGrain15: document.getElementById('mixedGrain15')?.checked || false,
                    omnifeed15: document.getElementById('omnifeed15')?.checked || false,
                },

                // ⭐ Ferramentas de carinho e quantidade
                carrinhos: {
                    pettingHand: document.getElementById('pettingHand')?.checked || false,
                    brush: document.getElementById('brush')?.checked || false,
                    musicBox: document.getElementById('musicBox')?.checked || false,
                    qtdCarinhos: document.getElementById('qtd-carinho-feito')?.value || '1',
                },

                // Valores em COINS dos animais (Venda Semanal) - vindos da API
                valoresAnimaisCoins: {
                    galinhas: animais.galinhas.map(g => ({ 
                        levelAnterior: g.levelAnterior,
                        level: g.level,
                        coins: g.coins,
                        coinsFinal: g.coinsFinal,
                        qtdDeAnimaisQuePodeVender: g.qtdDeAnimaisQuePodeVender
                    })),
                    vacas: animais.vacas.map(v => ({ 
                        levelAnterior: v.levelAnterior,
                        level: v.level,
                        coins: v.coins,
                        coinsFinal: v.coinsFinal,
                        qtdDeAnimaisQuePodeVender: v.qtdDeAnimaisQuePodeVender
                    })),
                    ovelhas: animais.ovelhas.map(o => ({ 
                        levelAnterior: o.levelAnterior,
                        level: o.level,
                        coins: o.coins,
                        coinsFinal: o.coinsFinal,
                        qtdDeAnimaisQuePodeVender: o.qtdDeAnimaisQuePodeVender
                    })),
                },
            };

            localStorage.setItem(this.SAVE_KEY, JSON.stringify(estado));
            console.log('✅ Estado salvo com sucesso!', new Date().toLocaleTimeString());
            return true;

        } catch (error) {
            console.error('❌ Erro ao salvar estado:', error);
            return false;
        }
    },

    // ========================================================================
    // RESTAURAR ESTADO COMPLETO
    // ========================================================================
    restaurarEstado() {
        try {
            const savedData = localStorage.getItem(this.SAVE_KEY);
            if (!savedData) {
                console.log('ℹ️ Nenhum save encontrado');
                return false;
            }

            const estado = JSON.parse(savedData);
            
            if (estado.version !== this.VERSION) {
                console.warn('⚠️ Versão do save diferente. Aplicando migração...');
            }

            console.log('📂 Restaurando save de:', new Date(estado.timestamp).toLocaleString());

            // 1. Configurações básicas
            if (estado.config) {
                idioma = estado.config.idioma || 'portugues';
                const selectIdioma = document.getElementById('opcao-idioma');
                if (selectIdioma) {
                    selectIdioma.value = idioma;
                    selectIdioma.dispatchEvent(new Event('change', { bubbles: true }));
                }
                
                estacao = estado.config.estacao || 'spring';
                const selectEstacao = document.getElementById('estacaoSelect');
                if (selectEstacao) {
                    selectEstacao.value = estacao;
                    selectEstacao.dispatchEvent(new Event('change', { bubbles: true }));
                }
                
                ilha = estado.config.ilha || 'basic';
                const selectIlha = document.getElementById('ilhaSelect');
                if (selectIlha) {
                    selectIlha.value = ilha;
                    selectIlha.dispatchEvent(new Event('change', { bubbles: true }));
                }
                
                vip = estado.config.vip || 'Sim';
                const selectVip = document.getElementById('vipSelect');
                if (selectVip) {
                    selectVip.value = vip;
                    selectVip.dispatchEvent(new Event('change', { bubbles: true }));
                }
                
                if (estado.config.flowerEmCoins) {
                    flowerEmCoins = estado.config.flowerEmCoins;
                    const inputFlower = document.getElementById('flower-em-coins');
                    if (inputFlower) inputFlower.value = flowerEmCoins;
                }
                
                if (estado.config.packGems) {
                    const selectGems = document.getElementById('pack-gems');
                    if (selectGems) {
                        selectGems.value = estado.config.packGems;
                        selectGems.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                }
            }

            // 2. Farm info
            if (estado.farm) {
                if (estado.farm.numero) {
                    const input = document.getElementById('numeroFarm');
                    if (input) input.value = estado.farm.numero;
                }
                if (estado.farm.plots !== undefined) {
                    plots = estado.farm.plots;
                    const input = document.getElementById('plotsPossuidos');
                    if (input) input.value = plots;
                }
                if (estado.farm.plotsFrutas !== undefined) {
                    plotsFrutas = estado.farm.plotsFrutas;
                    const input = document.getElementById('fruitsPlotsPossuidos');
                    if (input) input.value = plotsFrutas;
                }
            }

            // 3. Modo de cálculo
            if (estado.modoCalculo) {
                const modos = [
                    { key: 'crops', id: 'tipo-de-calculo-crop' },
                    { key: 'cropsCM', id: 'tipo-de-calculo-crop-cm' },
                    { key: 'frutas', id: 'tipo-de-calculo-fruta' },
                    { key: 'cropsGH', id: 'tipo-de-calculo-greenhouse' },
                    { key: 'minerios', id: 'tipo-de-calculo-mineral' }
                ];

                modos.forEach(modo => {
                    if (estado.modoCalculo[modo.key]) {
                        const select = document.getElementById(modo.id);
                        if (select) {
                            select.value = estado.modoCalculo[modo.key];
                            select.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                    }
                });
            }

            // 4. Opções de Restock
            if (estado.restock) {
                const restocks = [
                    { key: 'crops', id: 'descontar-restock-crops' },
                    { key: 'cropsCM', id: 'descontar-restock-cm' },
                    { key: 'frutas', id: 'descontar-restock-frutas' },
                    { key: 'greenhouse', id: 'descontar-restock-greenhouse' },
                    { key: 'minerais', id: 'descontar-restock-minerais' }
                ];

                restocks.forEach(restock => {
                    if (estado.restock[restock.key]) {
                        const select = document.getElementById(restock.id);
                        if (select) {
                            select.value = estado.restock[restock.key];
                            select.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                    }
                });
            }

            // 5. Minerals
            if (estado.minerals) {
                Object.keys(estado.minerals).forEach(mineral => {
                    if (mapaDeMinerals[mineral]) {
                        Object.assign(mapaDeMinerals[mineral].qtdNodes, estado.minerals[mineral]);
                        
                        const updates = {
                            wood: ['woodT1', 'woodT2', 'woodT3'],
                            stone: ['stoneT1', 'stoneT2', 'stoneT3'],
                            iron: ['ironT1', 'ironT2', 'ironT3'],
                            gold: ['goldT1', 'goldT2', 'goldT3'],
                            crimstone: ['crimstoneRock'],
                            oil: ['oilReserve']
                        };

                        if (updates[mineral]) {
                            updates[mineral].forEach((inputId, index) => {
                                const input = document.getElementById(inputId);
                                const tier = index === 0 ? 't1' : index === 1 ? 't2' : 't3';
                                if (input && estado.minerals[mineral][tier] !== undefined) {
                                    input.value = estado.minerals[mineral][tier];
                                }
                            });
                        }
                    }
                });
            }

            // 6. Skills Legacy
            if (estado.skillsLegacy) {
                estado.skillsLegacy.forEach(saved => {
                    const skill = skillsLegacy.find(s => s.idName === saved.idName);
                    if (skill) {
                        skill.possui = saved.possui;
                        const checkbox = document.getElementById(saved.idName);
                        if (checkbox) checkbox.checked = saved.possui;
                    }
                });
            }

            // 7. Skills com Tier
            if (estado.skillsTier) {
                estado.skillsTier.forEach(saved => {
                    const skill = todasSkillsComTier.find(s => s.idName === saved.idName);
                    if (skill) {
                        skill.possui = saved.possui;
                        const checkbox = document.getElementById(saved.idName);
                        if (checkbox) checkbox.checked = saved.possui;
                    }
                });
            }

            // 8. Collectibles
            if (estado.collectibles) {
                estado.collectibles.forEach(saved => {
                    const collectible = todosCollectibles.find(c => c.idName === saved.idName);
                    if (collectible) {
                        collectible.possui = saved.possui;
                        const checkbox = document.getElementById(saved.idName);
                        if (checkbox) checkbox.checked = saved.possui;
                    }
                });
            }

            // 9. Wearables
            if (estado.wearables) {
                estado.wearables.forEach(saved => {
                    const wearable = todosWearables.find(w => w.idName === saved.idName);
                    if (wearable) {
                        wearable.possui = saved.possui;
                        const checkbox = document.getElementById(saved.idName);
                        if (checkbox) checkbox.checked = saved.possui;
                    }
                });
            }

            // 10. Buffs Temporários
            if (estado.temporarios) {
                estado.temporarios.forEach(saved => {
                    const temp = todosTemporarios.find(t => t.idName === saved.idName);
                    if (temp) {
                        temp.possui = saved.possui;
                        const checkbox = document.getElementById(saved.idName);
                        if (checkbox) checkbox.checked = saved.possui;
                    }
                });
            }

            // 11. Buds - checkbox principal + aura
            if (estado.buds) {
                Object.keys(estado.buds).forEach(categoria => {
                    if (!buds[categoria]) return;

                    estado.buds[categoria].forEach(saved => {
                        // Encontra o bud correspondente
                        const bud = buds[categoria].find(b => b.idName === saved.idName);
                        if (!bud) return;

                        // Restaura o estado do checkbox principal
                        bud.possui = saved.possui;
                        const checkbox = document.getElementById(saved.idName);
                        if (checkbox) checkbox.checked = saved.possui;

                        // Restaura a aura
                        bud.aura = saved.aura || 1;

                        const budWrapper = checkbox?.closest('.bud-wrapper');
                        const auraPanel = budWrapper?.querySelector('.aura-panel');

                        if (bud.possui && auraPanel) {
                            // Mostra o painel de aura se o bud está marcado
                            // (fica oculto após seleção de aura — comportamento original)
                            // Só mostra se não tiver aura selecionada ainda
                            if (!saved.auraId) {
                                auraPanel.style.display = 'flex';
                            }
                        }

                        // Restaura a aura selecionada
                        if (saved.auraId) {
                            const auraCheckbox = document.getElementById(`aura-${saved.idName}-${saved.auraId}`);
                            if (auraCheckbox) {
                                auraCheckbox.checked = true;

                                // Aplica a classe de cor no wrapper
                                if (budWrapper) {
                                    AURAS.forEach(a => budWrapper.classList.remove(`aura-bg-${a.id}`));
                                    budWrapper.classList.add(`aura-bg-${saved.auraId}`);
                                }

                                // Garante que o painel fique oculto (comportamento original)
                                if (auraPanel) auraPanel.style.display = 'none';
                            }
                        } else if (!bud.possui) {
                            // Bud desmarcado: garante painel oculto
                            if (auraPanel) auraPanel.style.display = 'none';
                        }
                    });
                });
            }


            // 12. Animais - Quantidade usada e vendida
            if (estado.animais) {
                ['galinhas', 'vacas', 'ovelhas'].forEach(tipo => {
                    if (estado.animais[tipo]) {
                        estado.animais[tipo].forEach(saved => {
                            const animal = animais[tipo].find(a => a.levelAnterior === saved.levelAnterior);
                            if (animal) {
                                animal.qtdUsada = saved.qtdUsada || '';
                                animal.vendida = saved.vendida || '';
                            }
                        });
                    }
                });
            }

            // 13. ⭐ Comidas dos animais (checkboxes globais por level)
            if (estado.comidasAnimais) {
                const comidasIds = [
                    'kernelBlend3', 'hay3', 'nutriBarley3', 'mixedGrain3', 'omnifeed3',
                    'kernelBlend6', 'hay6', 'nutriBarley6', 'mixedGrain6', 'omnifeed6',
                    'kernelBlend10', 'hay10', 'nutriBarley10', 'mixedGrain10', 'omnifeed10',
                    'kernelBlend15', 'hay15', 'nutriBarley15', 'mixedGrain15', 'omnifeed15'
                ];

                comidasIds.forEach(id => {
                    const checkbox = document.getElementById(id);
                    if (checkbox && estado.comidasAnimais[id] !== undefined) {
                        checkbox.checked = estado.comidasAnimais[id];
                        // Disparar evento de change para atualizar visual
                        checkbox.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                });
            }

            // 14. ⭐ Ferramentas de carinho e quantidade
            if (estado.carrinhos) {
                const pettingHand = document.getElementById('pettingHand');
                if (pettingHand && estado.carrinhos.pettingHand !== undefined) {
                    pettingHand.checked = estado.carrinhos.pettingHand;
                    pettingHand.dispatchEvent(new Event('change', { bubbles: true }));
                }
                
                const brush = document.getElementById('brush');
                if (brush && estado.carrinhos.brush !== undefined) {
                    brush.checked = estado.carrinhos.brush;
                    brush.dispatchEvent(new Event('change', { bubbles: true }));
                }
                
                const musicBox = document.getElementById('musicBox');
                if (musicBox && estado.carrinhos.musicBox !== undefined) {
                    musicBox.checked = estado.carrinhos.musicBox;
                    musicBox.dispatchEvent(new Event('change', { bubbles: true }));
                }
                
                const qtdCarinhos = document.getElementById('qtd-carinho-feito');
                if (qtdCarinhos && estado.carrinhos.qtdCarinhos) {
                    qtdCarinhos.value = estado.carrinhos.qtdCarinhos;
                    qtdCarinhos.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }

            // 15. Valores em COINS dos animais
            if (estado.valoresAnimaisCoins) {
                ['galinhas', 'vacas', 'ovelhas'].forEach(tipo => {
                    if (estado.valoresAnimaisCoins[tipo]) {
                        estado.valoresAnimaisCoins[tipo].forEach(saved => {
                            const animal = animais[tipo].find(a => a.levelAnterior === saved.levelAnterior);
                            if (animal) {
                                if (saved.coins !== undefined) animal.coins = saved.coins;
                                if (saved.coinsFinal !== undefined) animal.coinsFinal = saved.coinsFinal;
                                if (saved.qtdDeAnimaisQuePodeVender !== undefined) {
                                    animal.qtdDeAnimaisQuePodeVender = saved.qtdDeAnimaisQuePodeVender;
                                }
                            }
                        });
                    }
                });
            }

            // 16. Seeds plantadas (depois de tudo configurado)
            if (estado.seedsPlantadas) {
                if (estado.seedsPlantadas.crops) {
                    estado.seedsPlantadas.crops.forEach(saved => {
                        const crop = crops.find(c => c.name === saved.name);
                        if (crop) crop.seedsPlantadas = saved.seeds || '';
                    });
                }
                if (estado.seedsPlantadas.cropsCM) {
                    estado.seedsPlantadas.cropsCM.forEach(saved => {
                        const cropCM = cropMachine.find(c => c.name === saved.name);
                        if (cropCM) cropCM.seedsPlantadas = saved.seeds || '';
                    });
                }
                if (estado.seedsPlantadas.fruits) {
                    estado.seedsPlantadas.fruits.forEach(saved => {
                        const fruit = fruits.find(f => f.name === saved.name);
                        if (fruit) fruit.seedsPlantadas = saved.seeds || '';
                    });
                }
                if (estado.seedsPlantadas.greenhouse) {
                    estado.seedsPlantadas.greenhouse.forEach(saved => {
                        const cropsGH = greenhouse.find(gh => gh.name === saved.name);
                        if (cropsGH) cropsGH.seedsPlantadas = saved.seeds || '';
                    });
                }
            }

            // 17. Ferramentas usadas
            if (estado.ferramentasUsadas) {
                estado.ferramentasUsadas.forEach(saved => {
                    const ferramenta = todasFerramentas.find(f => f.id === saved.id);
                    if (ferramenta) ferramenta.qtdUsada = saved.qtd || '';
                });
            }

            // Aplicar todos os cálculos
            if (typeof valoresDasGems === 'function') valoresDasGems();
            if (typeof ilhaPrestigioAtual === 'function') ilhaPrestigioAtual();
            if (typeof chamadorDeBuffs === 'function') chamadorDeBuffs();
            if (typeof chamadorDeDesbloquearSkills === 'function') chamadorDeDesbloquearSkills();
            if (typeof ativarBonusDasNftsESkills === 'function') ativarBonusDasNftsESkills();
            if (typeof nftsDeTierQuePossuemBuffDoAntecessor === 'function') nftsDeTierQuePossuemBuffDoAntecessor();
            if (typeof pontosGastosEmSkills === 'function') pontosGastosEmSkills();
            if (typeof valorTotalEmNfts === 'function') valorTotalEmNfts();
            if (typeof mudarIdioma === 'function') mudarIdioma();

            // Restaurar inputs das tabelas em múltiplas tentativas
            let tentativas = 0;
            const intervalo = setInterval(() => {
                tentativas++;
                const sucesso = this.restaurarInputsDasTabelas(estado);
                
                if (sucesso || tentativas >= 10) {
                    clearInterval(intervalo);
                    if (sucesso) {
                        console.log('✅ Inputs restaurados na tentativa', tentativas);
                    } else {
                        console.warn('⚠️ Alguns inputs podem não ter sido restaurados');
                    }
                }
            }, 300);

            console.log('✅ Estado restaurado com sucesso!');
            return true;

        } catch (error) {
            console.error('❌ Erro ao restaurar estado:', error);
            return false;
        }
    },

    // ========================================================================
    // SALVAR COM DEBOUNCE
    // ========================================================================
    salvarComDebounce() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.salvarEstado();
        }, this.DEBOUNCE_DELAY);
    },

    // ========================================================================
    // RESTAURAR INPUTS DAS TABELAS
    // ========================================================================
    restaurarInputsDasTabelas(estado) {
        try {
            let inputsRestaurados = 0;
            let inputsEsperados = 0;

            // Seeds
            const tiposSeeds = [
                { data: estado.seedsPlantadas?.crops, classe: 'sementes-input' },
                { data: estado.seedsPlantadas?.cropsCM, classe: 'sementesCM-input' },
                { data: estado.seedsPlantadas?.fruits, classe: 'sementesFrutas-input' },
                { data: estado.seedsPlantadas?.greenhouse, classe: 'sementesGH-input' }
            ];

            tiposSeeds.forEach(tipo => {
                if (tipo.data) {
                    tipo.data.forEach(saved => {
                        if (!saved.seeds) return;
                        inputsEsperados++;
                        const input = document.querySelector(`.${tipo.classe}[data-name="${saved.name}"]`);
                        if (input) {
                            input.value = saved.seeds;
                            inputsRestaurados++;
                        }
                    });
                }
            });

            // Ferramentas
            if (estado.ferramentasUsadas) {
                estado.ferramentasUsadas.forEach(saved => {
                    if (!saved.qtd) return;
                    inputsEsperados++;
                    const input = document.querySelector(`.minerios-input[data-name="${saved.id}"]`);
                    if (input) {
                        input.value = saved.qtd;
                        inputsRestaurados++;
                    }
                });
            }

            // Animais
            if (estado.animais) {
                ['galinhas', 'vacas', 'ovelhas'].forEach(tipo => {
                    if (estado.animais[tipo]) {
                        estado.animais[tipo].forEach(saved => {
                            if (saved.qtdUsada) {
                                inputsEsperados++;
                                const inputQtd = document.querySelector(`.${tipo}-input[data-name="${saved.levelAnterior}"]`);
                                if (inputQtd) {
                                    inputQtd.value = saved.qtdUsada;
                                    inputsRestaurados++;
                                }
                            }

                            if (saved.vendida) {
                                inputsEsperados++;
                                const inputVenda = document.querySelector(`.${tipo}-venda-input[data-name="${saved.levelAnterior}"]`);
                                if (inputVenda) {
                                    inputVenda.value = saved.vendida;
                                    inputsRestaurados++;
                                }
                            }
                        });
                    }
                });
            }

            console.log(`📊 Inputs restaurados: ${inputsRestaurados}/${inputsEsperados}`);
            return inputsEsperados > 0 && inputsRestaurados === inputsEsperados;

        } catch (error) {
            console.error('❌ Erro ao restaurar inputs das tabelas:', error);
            return false;
        }
    },

    // ========================================================================
    // LIMPAR SAVE
    // ========================================================================
    limparSave() {
        if (confirm('Tem certeza que deseja limpar todo o progresso salvo?')) {
            localStorage.removeItem(this.SAVE_KEY);
            console.log('🗑️ Save removido!');
            location.reload();
        }
    },

    // ========================================================================
    // EXPORTAR SAVE
    // ========================================================================
    exportarSave() {
        try {
            const savedData = localStorage.getItem(this.SAVE_KEY);
            if (!savedData) {
                alert('Nenhum save para exportar!');
                return;
            }

            const blob = new Blob([savedData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `combo_maker_save_${Date.now()}.json`;
            a.click();
            URL.revokeObjectURL(url);

            console.log('📥 Save exportado com sucesso!');
        } catch (error) {
            console.error('❌ Erro ao exportar save:', error);
        }
    },

    // ========================================================================
    // IMPORTAR SAVE
    // ========================================================================
    importarSave() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const saveData = event.target.result;
                    JSON.parse(saveData);
                    
                    localStorage.setItem(this.SAVE_KEY, saveData);
                    console.log('📤 Save importado com sucesso!');
                    location.reload();
                    
                } catch (error) {
                    console.error('❌ Arquivo de save inválido:', error);
                    alert('Arquivo de save inválido!');
                }
            };
            reader.readAsText(file);
        };
        
        input.click();
    },

    // ========================================================================
    // CONFIGURAR EVENT LISTENERS ESPECÍFICOS
    // ========================================================================
    configurarEventListeners() {
        // Event listeners para checkboxes de comida
        const comidasIds = [
            'kernelBlend3', 'hay3', 'nutriBarley3', 'mixedGrain3', 'omnifeed3',
            'kernelBlend6', 'hay6', 'nutriBarley6', 'mixedGrain6', 'omnifeed6',
            'kernelBlend10', 'hay10', 'nutriBarley10', 'mixedGrain10', 'omnifeed10',
            'kernelBlend15', 'hay15', 'nutriBarley15', 'mixedGrain15', 'omnifeed15'
        ];

        comidasIds.forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    console.log(`🍽️ Comida ${id} alterada para:`, checkbox.checked);
                    this.salvarComDebounce();
                });
            }
        });

        // Event listeners para ferramentas de carinho
        const ferramentasIds = ['pettingHand', 'brush', 'musicBox'];
        ferramentasIds.forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    console.log(`🛠️ Ferramenta ${id} alterada para:`, checkbox.checked);
                    this.salvarComDebounce();
                });
            }
        });

        // Event listener para quantidade de carinhos
        const qtdCarinhos = document.getElementById('qtd-carinho-feito');
        if (qtdCarinhos) {
            qtdCarinhos.addEventListener('change', () => {
                console.log('💚 Quantidade de carinhos alterada para:', qtdCarinhos.value);
                this.salvarComDebounce();
            });
        }

        console.log('✅ Event listeners específicos configurados!');
    },

    // ========================================================================
    // INICIALIZAR SISTEMA DE SAVE
    // ========================================================================
    inicializar() {
        console.log('🎮 Inicializando SaveManager v2.0.0...');

        // Restaurar estado salvo
        this.restaurarEstado();

        // Configurar event listeners específicos
        this.configurarEventListeners();

        // Event listeners gerais para inputs, selects e checkboxes
        const eventos = ['change', 'input'];
        eventos.forEach(evento => {
            document.addEventListener(evento, (e) => {
                // Verifica se o elemento tem ID ou é um checkbox/select
                if (e.target.id || e.target.type === 'checkbox' || e.target.tagName === 'SELECT') {
                    this.salvarComDebounce();
                }
            });
        });

        // Salvar antes de fechar/recarregar a página
        window.addEventListener('beforeunload', () => {
            this.salvarEstado();
        });

        // Salvar periodicamente (a cada 2 minutos como backup)
        setInterval(() => {
            this.salvarEstado();
        }, 120000);

        // Salvar quando trocar de aba do navegador
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.salvarEstado();
            }
        });

        console.log('✅ SaveManager pronto! Auto-save ativado.');
    }
};

// ============================================================================
// AUTO-INICIALIZAR
// ============================================================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => SaveManager.inicializar(), 100);
    });
} else {
    setTimeout(() => SaveManager.inicializar(), 100);
}

// ============================================================================
// 🎯 FUNÇÕES GLOBAIS (para usar no console)
// ============================================================================
window.SaveManager = SaveManager;
window.limparSave = () => SaveManager.limparSave();
window.exportarSave = () => SaveManager.exportarSave();
window.importarSave = () => SaveManager.importarSave();