const menuButton = document.getElementById("Menu");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

menuButton.addEventListener("click", () => {
    modal.classList.add("ativo");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("ativo");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("ativo");
    }
});