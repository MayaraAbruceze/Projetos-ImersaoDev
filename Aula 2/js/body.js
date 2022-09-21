// // function Converter(){
// //     var valorElemento = document.getElementById("valor"); >>pega a tag inteira do html e não o conteúdo
// //     var valor = valorElemento.value; >>pega o valor, o conteúdo do input
//        var valorEmDolarNumerico = parseFloat(valor); >>transformando a string em float
// //     console.log(valorEmDolarNumerico);
// // }

function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorDolarNumerico = parseFloat(valor);

    if (document.getElementById("dolar").checked){
        var valorReal = valorDolarNumerico * 5;
        var elementoValorConvertido = document.getElementById("valorConvertido");
        var valorConvertido = "O resultado em dólar é US$ " + valorReal;
        elementoValorConvertido.innerHTML = valorConvertido; // mostra o resultado no html
    }
    else if (document.getElementById("libra").checked){
        var valorLibra = valorDolarNumerico * 6;
        var elementoValorConvertido = document.getElementById("valorConvertido");
        var valorConvertido = "O resultado em Libra é £ " + valorLibra;
        elementoValorConvertido.innerHTML = valorConvertido;
    }
    else if (document.getElementById("bitcoins").checked){
        var valorBitcoin = valorDolarNumerico * 0.000010;
        var elementoValorConvertido = document.getElementById("valorConvertido");
        var valorConvertido = "O resultado em Bitcoin é ₿ " + valorBitcoin;
        elementoValorConvertido.innerHTML = valorConvertido;

    }

    
}