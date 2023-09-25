var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";

function enviar() {
    var nome = document.querySelector("#nome").value;
    var idade = parseInt(document.querySelector("#idade").value);
    var cidade = document.querySelector("#cidade").value;

    if (nome == "" || idade == "" || cidade == "") {
        exibirAlertaErro("Preencha todos os campos")
        return
    }

    if (idade > 190 || idade < 0) {
        exibirAlertaErro("Idade inválida")
        return
    }



    var progresso = 0;
    var barra = document.querySelector(".progress-bar");
    barraProgresso.style.display = "block";

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            clearInterval(intervalo);
            barraProgresso.style.display = "none";
            document.querySelector("#mostrar").innerHTML = `<div class="alert alert-success fade show" role="alert">
            <div class="d-flex justify-content-between ">
            <span> ${nome} ${idade} ${cidade} </span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
            </div>`
        }
        else {
            document.querySelector(".progress-bar").innerHTML = `${progresso}%`;
            progresso++;
            barra.style.width = progresso + "%";
        }
    }, 20);
}

function exibirAlertaErro(texto) {
    document.querySelector("#mostrar").innerHTML = `<div class="alert alert-danger fade show" role="alert">
                <div class="d-flex justify-content-between">
                <span> ${texto} </span>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
            </div>`

}