// var nome = "Mayara";
// var notaPrimeiroBimestre = 9.5;
// var notaSegundoBimestre = 10;
// var notaTerceiroBimestre = 9;
// var notaQuartoBimestre = 9.8;
// var notaFinal;

// var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;
// var notaFixada = notaFinal.toFixed(1);

// console.log("Bem vindo(a) " + nome + "!");

// if (notaFinal >= 6){
//     console.log("Parabés, você foi aprovado(a)!")
//     console.log("Sua média semestral foi " + notaFixada);
// }else{
//     console.log("Infelizmente você foi reprovado(a)!");
//     console.log("Sua média semestral foi " + notaFixada);
// }

function calcular(){
    var valorNota1 = parseFloat (document.getElementById("nota1").value);
    var valorNota2 = parseFloat (document.getElementById("nota2").value);
    var valorNota3 = parseFloat (document.getElementById("nota3").value);
    var valorNota4 = parseFloat (document.getElementById("nota4").value);
    var notaFinal = (valorNota1 + valorNota2 + valorNota3 + valorNota4) / 4;
    var notaFixada = notaFinal.toFixed(2);

    if (notaFinal >= 6){
        var elementoResultado = document.getElementById("resultado");
        var valorResultado = "Parabéns, APROVADO (A). Sua média foi " + notaFixada;
        elementoResultado.innerHTML = valorResultado;
    } else{
        var elementoResultado = document.getElementById("resultado");
        var valorResultado = "Infelizmente, REPROVADO (A). Sua média foi " + notaFixada;
        elementoResultado.innerHTML = valorResultado;
    }
}

function limpar() {
  document.getElementById("nota1").value="";
  document.getElementById("nota2").value="";
  document.getElementById("nota3").value="";
  document.getElementById("nota4").value="";
  document.getElementById("resultado").innerHTML="";
}
