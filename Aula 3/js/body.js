
// método para sortear um número aleatório de 0 a 10
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt (document.getElementById("valor").value);

    if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Digite um número de 0 a 10";
    } else if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Parabéns, você acertou!";
    } else {
        if (chute > numeroSecreto){
            elementoResultado.innerHTML = "Você errou! Tente um número menor.";
        } else{
            elementoResultado.innerHTML = "Você errou! Tente um número maior.";
        }
        document.getElementById("valor").value = "";
    }
}