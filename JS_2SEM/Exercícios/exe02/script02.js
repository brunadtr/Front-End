const aumenta = document.querySelector("#aumenta");
const diminui = document.querySelector("#diminui");
const zera = document.querySelector("#zera");
const contadorElemento = document.querySelector("#contador");

let contador = 0;

function aumentarContador()
{
    contador++;
    contadorElemento.textContent = contador;
}

aumenta.addEventListener("click", aumentarContador);

function diminuirContador()
{
    if (contador <= 0) {
        alert("Não pode ser menor que zero")
    } else{
        contador--;
    }
    contadorElemento.textContent = contador;
    
    
}

diminui.addEventListener("click", diminuirContador);

function zerarContador()
{
    contador = 0;
    contadorElemento.textContent = contador;
}

zera.addEventListener("click", zerarContador);