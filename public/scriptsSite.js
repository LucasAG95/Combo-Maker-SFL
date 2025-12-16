
// ============================================================================
// SISTEMA DE SAVE MELHORADO - saveManager.js
// ============================================================================

const SaveManager = {
    VERSION: '1.0.0',
    SAVE_KEY: 'sfl_combo_maker_save',
    DEBOUNCE_DELAY: 500, // ms para esperar antes de salvar
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

                // Minerals - quantidade de nodes
                minerals: {
                    wood: { t1: mapaDeMinerals['wood'].qtdNodes.t1, t2: mapaDeMinerals['wood'].qtdNodes.t2, t3: mapaDeMinerals['wood'].qtdNodes.t3 },
                    stone: { t1: mapaDeMinerals['stone'].qtdNodes.t1, t2: mapaDeMinerals['stone'].qtdNodes.t2, t3: mapaDeMinerals['stone'].qtdNodes.t3 },
                    iron: { t1: mapaDeMinerals['iron'].qtdNodes.t1, t2: mapaDeMinerals['iron'].qtdNodes.t2, t3: mapaDeMinerals['iron'].qtdNodes.t3 },
                    gold: { t1: mapaDeMinerals['gold'].qtdNodes.t1, t2: mapaDeMinerals['gold'].qtdNodes.t2, t3: mapaDeMinerals['gold'].qtdNodes.t3 },
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
            
            // Verificar versão (para futuras atualizações)
            if (estado.version !== this.VERSION) {
                console.warn('⚠️ Versão do save diferente. Pode haver incompatibilidades.');
            }

            console.log('📂 Restaurando save de:', new Date(estado.timestamp).toLocaleString());

            // ORDEM IMPORTANTE: restaurar configs básicas primeiro
            
            // 1. Configurações
            if (estado.config) {
                idioma = estado.config.idioma || 'portugues';
                const selectIdioma = document.getElementById('opcao-idioma');
                selectIdioma.value = idioma;
                selectIdioma.dispatchEvent(new Event('change', { bubbles: true }));
                
                estacao = estado.config.estacao || 'spring';
                const selectEstacao = document.getElementById('estacaoSelect');
                selectEstacao.value = estacao;
                selectEstacao.dispatchEvent(new Event('change', { bubbles: true }));
                
                ilha = estado.config.ilha || 'basic';
                const selectIlha = document.getElementById('ilhaSelect');
                selectIlha.value = ilha;
                selectIlha.dispatchEvent(new Event('change', { bubbles: true }));
                
                vip = estado.config.vip || 'Sim';
                const selectVip = document.getElementById('vipSelect');
                selectVip.value = vip;
                selectVip.dispatchEvent(new Event('change', { bubbles: true }));
                
                if (estado.config.flowerEmCoins) {
                    flowerEmCoins = estado.config.flowerEmCoins;
                    const inputFlower = document.getElementById('flower-em-coins');
                    inputFlower.value = flowerEmCoins;
                }
                
                if (estado.config.packGems) {
                    const selectGems = document.getElementById('pack-gems');
                    selectGems.value = estado.config.packGems;
                    selectGems.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }

            // 2. Farm info
            if (estado.farm) {
                if (estado.farm.numero) {
                    document.getElementById('numeroFarm').value = estado.farm.numero;
                }
                if (estado.farm.plots) {
                    plots = estado.farm.plots;
                    document.getElementById('plotsPossuidos').value = plots;
                }
                if (estado.farm.plotsFrutas) {
                    plotsFrutas = estado.farm.plotsFrutas;
                    document.getElementById('fruitsPlotsPossuidos').value = plotsFrutas;
                }
            }

            // 3. Modo de cálculo
            if (estado.modoCalculo) {
                if (estado.modoCalculo.crops) {
                    const select = document.getElementById('tipo-de-calculo-crop');
                    select.value = estado.modoCalculo.crops;
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                }
                if (estado.modoCalculo.cropsCM) {
                    const select = document.getElementById('tipo-de-calculo-crop-cm');
                    select.value = estado.modoCalculo.cropsCM;
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                }
                if (estado.modoCalculo.frutas) {
                    const select = document.getElementById('tipo-de-calculo-fruta');
                    select.value = estado.modoCalculo.frutas;
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                }
                if (estado.modoCalculo.cropsGH) {
                    const select = document.getElementById('tipo-de-calculo-greenhouse');
                    select.value = estado.modoCalculo.cropsGH;
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                }
                if (estado.modoCalculo.minerios) {
                    const select = document.getElementById('tipo-de-calculo-mineral');
                    select.value = estado.modoCalculo.minerios;
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }

            // 4. Minerals
            if (estado.minerals) {
                Object.keys(estado.minerals).forEach(mineral => {
                    if (mapaDeMinerals[mineral]) {
                        Object.assign(mapaDeMinerals[mineral].qtdNodes, estado.minerals[mineral]);
                        
                        // Atualizar inputs
                        if (mineral === 'wood') {
                            document.getElementById('woodT1').value = estado.minerals.wood.t1;
                            document.getElementById('woodT2').value = estado.minerals.wood.t2;
                            document.getElementById('woodT3').value = estado.minerals.wood.t3;
                        }
                        if (mineral === 'stone') {
                            document.getElementById('stoneT1').value = estado.minerals.stone.t1;
                            document.getElementById('stoneT2').value = estado.minerals.stone.t2;
                            document.getElementById('stoneT3').value = estado.minerals.stone.t3;
                        }
                        if (mineral === 'iron') {
                            document.getElementById('ironT1').value = estado.minerals.iron.t1;
                            document.getElementById('ironT2').value = estado.minerals.iron.t2;
                            document.getElementById('ironT3').value = estado.minerals.iron.t3;
                        }
                        if (mineral === 'gold') {
                            document.getElementById('goldT1').value = estado.minerals.gold.t1;
                            document.getElementById('goldT2').value = estado.minerals.gold.t2;
                            document.getElementById('goldT3').value = estado.minerals.gold.t3;
                        }
                        if (mineral === 'crimstone') {
                            document.getElementById('crimstoneRock').value = estado.minerals.crimstone.t1;
                        }
                        if (mineral === 'oil') {
                            document.getElementById('oilReserve').value = estado.minerals.oil.t1;
                        }
                    }
                });
            }

            // 5. Skills Legacy
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

            // 6. Skills com Tier
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

            // 7. Collectibles
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

            // 8. Wearables
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

            // 9. Buffs Temporários
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

            // 10. Seeds plantadas (depois de tudo configurado)
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

            // 11. Ferramentas usadas
            if (estado.ferramentasUsadas) {
                estado.ferramentasUsadas.forEach(saved => {
                    const ferramenta = todasFerramentas.find(f => f.id === saved.id);
                    if (ferramenta) ferramenta.qtdUsada = saved.qtd || '';
                });
            }

            // AGORA SIM: aplicar todos os cálculos
            valoresDasGems();
            ilhaPrestigioAtual();
            chamadorDeBuffs();
            chamadorDeDesbloquearSkills();
            ativarBonusDasNftsESkills();
            nftsDeTierQuePossuemBuffDoAntecessor();
            pontosGastosEmSkills();
            valorTotalEmNfts();
            mudarIdioma();

            // ⭐ RESTAURAR INPUTS DAS TABELAS em múltiplas tentativas
            // (porque as tabelas podem demorar para carregar)
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
    // SALVAR COM DEBOUNCE (evita salvar a cada mudança)
    // ========================================================================
    salvarComDebounce() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.salvarEstado();
        }, this.DEBOUNCE_DELAY);
    },

    // ========================================================================
    // RESTAURAR INPUTS DAS TABELAS (chamado após tabelas serem criadas)
    // ========================================================================
    restaurarInputsDasTabelas(estado) {
        try {
            let inputsRestaurados = 0;
            let inputsEsperados = 0;

            // Restaurar inputs de seeds das crops
            if (estado.seedsPlantadas?.crops) {
                estado.seedsPlantadas.crops.forEach(saved => {
                    if (!saved.seeds) return; // pula se não tem valor
                    
                    inputsEsperados++;
                    const input = document.querySelector(`.sementes-input[data-name="${saved.name}"]`);
                    if (input) {
                        input.value = saved.seeds;
                        inputsRestaurados++;
                    }
                });
            }

            // Restaurar inputs de seeds da Crop Machine
            if (estado.seedsPlantadas?.cropsCM) {
                estado.seedsPlantadas.cropsCM.forEach(saved => {
                    if (!saved.seeds) return;
                    
                    inputsEsperados++;
                    const input = document.querySelector(`.sementesCM-input[data-name="${saved.name}"]`);
                    if (input) {
                        input.value = saved.seeds;
                        inputsRestaurados++;
                    }
                });
            }

            // Restaurar inputs de seeds das frutas
            if (estado.seedsPlantadas?.fruits) {
                estado.seedsPlantadas.fruits.forEach(saved => {
                    if (!saved.seeds) return;
                    
                    inputsEsperados++;
                    const input = document.querySelector(`.sementesFrutas-input[data-name="${saved.name}"]`);
                    if (input) {
                        input.value = saved.seeds;
                        inputsRestaurados++;
                    }
                });
            }

            // Restaurar inputs de seeds das Greenhouse
            if (estado.seedsPlantadas?.greenhouse) {
                estado.seedsPlantadas.greenhouse.forEach(saved => {
                    if (!saved.seeds) return;
                    
                    inputsEsperados++;
                    const input = document.querySelector(`.sementesGH-input[data-name="${saved.name}"]`);
                    if (input) {
                        input.value = saved.seeds;
                        inputsRestaurados++;
                    }
                });
            }

            // Restaurar inputs de ferramentas
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

            console.log(`📊 Inputs restaurados: ${inputsRestaurados}/${inputsEsperados}`);
            
            // Retorna true se restaurou TODOS os inputs esperados
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
    // EXPORTAR SAVE (para backup)
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
    // IMPORTAR SAVE (de backup)
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
                    JSON.parse(saveData); // validar JSON
                    
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
    // INICIALIZAR SISTEMA DE SAVE
    // ========================================================================
    inicializar() {
        console.log('🎮 Inicializando SaveManager...');

        // ⭐ RESTAURAR AUTOMATICAMENTE ao carregar página
        this.restaurarEstado();

        // 💾 SALVAR AUTOMATICAMENTE em qualquer mudança
        const eventos = ['change', 'input'];
        eventos.forEach(evento => {
            document.addEventListener(evento, (e) => {
                // Salvar quando houver mudança em inputs, selects ou checkboxes
                if (e.target.id || e.target.type === 'checkbox') {
                    this.salvarComDebounce();
                }
            });
        });

        // 💾 SALVAR antes de fechar/recarregar a página
        window.addEventListener('beforeunload', () => {
            this.salvarEstado();
        });

        // 💾 SALVAR periodicamente (a cada 2 minutos como backup)
        setInterval(() => {
            this.salvarEstado();
        }, 120000);

        // 💾 SALVAR quando trocar de aba do navegador
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.salvarEstado();
            }
        });

        console.log('✅ SaveManager pronto! Auto-save ativado.');
    }
};

// ============================================================================
// 🚀 AUTO-INICIALIZAR QUANDO O DOM ESTIVER PRONTO
// ============================================================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Aguardar um pouco para garantir que tudo carregou
        setTimeout(() => SaveManager.inicializar(), 100);
    });
} else {
    // DOM já está pronto
    setTimeout(() => SaveManager.inicializar(), 100);
}

// ============================================================================
// 🚀 AUTO-INICIALIZAR QUANDO O DOM ESTIVER PRONTO
// ============================================================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Aguardar um pouco para garantir que tudo carregou
        setTimeout(() => SaveManager.inicializar(), 100);
    });
} else {
    // DOM já está pronto
    setTimeout(() => SaveManager.inicializar(), 100);
}

// ============================================================================
// 🎯 FUNÇÕES GLOBAIS (opcional - para usar no console)
// ============================================================================
window.SaveManager = SaveManager;
window.limparSave = () => SaveManager.limparSave();
window.exportarSave = () => SaveManager.exportarSave();
window.importarSave = () => SaveManager.importarSave();