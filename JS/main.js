const botao = document.querySelector(".btn-platforms");
const elementoPlataformas = document.querySelector(".btn-platforms .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});