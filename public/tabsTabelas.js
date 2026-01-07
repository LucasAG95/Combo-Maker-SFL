/* ============================
      TABS PRINCIPAIS (TAB2)
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
      tabelaDeCrops();
    }

    if (btn.dataset.tab2 === "minerios-tab2") {
      tabelaMinerios();
    }
  });
});


/* ============================
   SUBTABS (CROPS + ANIMAIS)
============================ */

document.querySelectorAll(".tab2-content").forEach(tab2 => {

  const subtabButtons = tab2.querySelectorAll(".subtab-btn");
  const subtabContents = tab2.querySelectorAll(".subtab-content");

  // se não tiver subtabs, ignora
  if (!subtabButtons.length) return;

  subtabButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      // remove active SOMENTE dentro da tab atual
      subtabButtons.forEach(b => b.classList.remove("active"));
      subtabContents.forEach(c => c.classList.remove("active"));

      // ativa a subtab clicada
      btn.classList.add("active");
      tab2.querySelector(`#${btn.dataset.subtab}`).classList.add("active");

      // ============================
      // CARREGAMENTO DAS TABELAS
      // ============================
      switch (btn.dataset.subtab) {

        // CROPS
        case "crops-tab2":
        case "cropsCM-tab2":
        case "frutas-tab2":
        case "greenhouse-tab2":
          tabelaDeCrops();
          break;

        // ANIMAIS
        case "galinhas-tab2":
        case "vacas-tab2":
        case "ovelhas-tab2":
          tabelaGalinhas();
          break;
      }

    });
  });
});
