//declarar variável e atribuir valor, para esconder a barra de progresso
var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";

function animarBarraProgresso()
{
    var progresso = 0;
    var barra = document.querySelector(".progress-bar");
    barraProgresso.style.display = "block";

    var intervalo = setInterval(function(){
        if(progresso > 100)
        {
            clearInterval(intervalo);
            barraProgresso.style.display = "none";
            document.querySelector("#mostrar").innerHTML = `<div class="alert alert-success fade show" role="alert">
            <span> Olá, bem vindo ao Sesi</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>`
        }
        else{
            document.querySelector(".progress-bar").innerHTML = `${progresso}%`;
            progresso++;
            barra.style.width = progresso + "%";
        }
    }, 50);
}