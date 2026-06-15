function abrirModal() {

    document.getElementById("promptModal")
        .style.display = "flex";
}

function cerrarModal() {

    document.getElementById("promptModal")
        .style.display = "none";
}

window.addEventListener("click", function(e){

    const modal =
        document.getElementById("promptModal");

    if(e.target === modal){

        cerrarModal();
    }
});