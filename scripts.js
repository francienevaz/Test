function inicia () {
    let btn = document.createElement("input");
    let div = document.getElementById("btn");
    btn.type="button";
    btn.value="Clique aqui!"

    div.appendChild(btn);

}

window.addEventListener("load", inicia)

