let contador = 0;
const valorContador = document.getElementById("numeroAtual");

function incrementar() {
    contador = contador +1;
    valorContador.innerHTML = contador;

}

function decrementar() {
    contador = contador -1;
    valorContador.innerHTML = contador;
}
