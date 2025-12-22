// ======================
// TROCA DE ABAS PRINCIPAIS
// ======================
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");

      // Remove active de todos
      tabButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      // Ativa a aba clicada
      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  // ======================
  // TROCA DE SUB-ABAS
  // ======================
  const subTabButtons = document.querySelectorAll(".sub-tab-btn");
  const subTabContents = document.querySelectorAll(".sub-tab-content");

  subTabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-sub-tab");
      const parentSection = btn.closest(".tab-content");

      // Filtra apenas sub-abas dentro da mesma aba principal
      const siblingsButtons = parentSection.querySelectorAll(".sub-tab-btn");
      const siblingsContents = parentSection.querySelectorAll(".sub-tab-content");

      siblingsButtons.forEach(b => b.classList.remove("active"));
      siblingsContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      parentSection.querySelector(`#${target}`).classList.add("active");
    });
  });
});

