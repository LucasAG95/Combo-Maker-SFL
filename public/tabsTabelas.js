/* ============================
      TABS PRINCIPAIS
============================ */

const tabs2Buttons = document.querySelectorAll(".tab2-btn");
const tabs2Contents = document.querySelectorAll(".tab2-content");

tabs2Buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // remove active de tudo
    tabs2Buttons.forEach(b => b.classList.remove("active"));
    tabs2Contents.forEach(c => c.classList.remove("active"));

    // ativa o botão e conteúdo
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab2).classList.add("active");

    // carregar tabelas ao clicar
    if (btn.dataset.tab2 === "cropsTabPrincipal") {
      // ao abrir a tab principal de crops → carregar a subtab padrão (Crops)
      tabelaDeCrops();
    }

    if (btn.dataset.tab2 === "minerios-tab2") {
      tabelaMinerios();
    }
  });
});


/* ============================
         SUBTABS CROPS
============================ */

const subtabButtons = document.querySelectorAll(".subtab-btn");
const subtabContents = document.querySelectorAll(".subtab-content");

subtabButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // remove active das subtabs
    subtabButtons.forEach(b => b.classList.remove("active"));
    subtabContents.forEach(c => c.classList.remove("active"));

    // ativa o botão clicado
    btn.classList.add("active");
    document.getElementById(btn.dataset.subtab).classList.add("active");

    // carregar tabelas específicas
    if (btn.dataset.subtab === "crops-tab2") {
      tabelaDeCrops();
    }

    if (btn.dataset.subtab === "cropsCM-tab2") {
      tabelaDeCrops();   // use o nome da sua função real
    }
  });
});
