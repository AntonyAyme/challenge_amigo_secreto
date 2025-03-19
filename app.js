const listaAmigos = [];

function agregarAmigo() {
    const input = document.querySelector("#amigo");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const ul = document.querySelector("#listaAmigos");
    ul.innerHTML = listaAmigos.map(nombre => `<li>${nombre}</li>`).join("");
}
