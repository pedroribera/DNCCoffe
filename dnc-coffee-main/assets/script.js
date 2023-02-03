const abrirmodal = document.querySelector("#open-modal");
const fecharmodal = document.querySelector("#fechar");
const modal = document.querySelector("#modal");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[abrirmodal, fecharmodal, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
});

