//Selecionando o botão pelo ID
const botao = document.querySelector("#botao");
const contadorElemento = document.querySelector("#contador");

//Inicializando contador
let contador = 0;

//função que sera chamada quando o botão for clicado
function aumentarContador()
{
    contador++;
    contadorElemento.textContent = contador;
}

//Adicionando ouvinte do evento para clique do botão

botao.addEventListener("click", aumentarContador);