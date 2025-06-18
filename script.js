// Mensagem de boas-vindas personalizada
document.addEventListener("DOMContentLoaded", () => {
  const mensagem = document.createElement("div");
  mensagem.textContent = `Seja bem-vindo(a) ao meu portfólio!`;
  mensagem.style.backgroundColor = "#1a1a1a";
  mensagem.style.color = "#B983FF";
  mensagem.style.padding = "15px";
  mensagem.style.textAlign = "center";
  mensagem.style.borderBottom = "1px solid #B983FF";
  document.body.insertBefore(mensagem, document.body.firstChild);
});

// Mostrar botão "Voltar ao topo" ao rolar
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Ação do botão "Voltar ao topo"
document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// Alternar modo claro/escuro
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }
});
