const mode = document.querySelector(".cabecalho__botao");
const icone = document.querySelector("#icone");
const body = document.body;

mode.addEventListener('click', () => {
    if (body.classList.contains("light")) {
        body.classList.add("dark");
        body.classList.remove("light");

        icone.classList.add("fa-sun");
        icone.classList.remove("fa-moon");
    } else {
        body.classList.add("light");
        body.classList.remove("dark");

        icone.classList.add("fa-moon");
        icone.classList.remove("fa-sun");
    }
})