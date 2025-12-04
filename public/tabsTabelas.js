const tabs2Buttons = document.querySelectorAll(".tab2-btn");
const tabs2Contents = document.querySelectorAll(".tab2-content");

tabs2Buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    
    // remover "active" de todos
    tabs2Buttons.forEach(b => b.classList.remove("active"));
    tabs2Contents.forEach(c => c.classList.remove("active"));

    // adicionar active na tab clicada
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab2).classList.add("active");

    // carregar as tabelas no click
    if (btn.dataset.tab2 === "crops-tab2") tabelaDeCrops();
    if (btn.dataset.tab2 === "minerios-tab2") tabelaMinerios();
  });
});
