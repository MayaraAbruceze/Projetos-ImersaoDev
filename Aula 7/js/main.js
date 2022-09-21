var carta1 = {
    nome: "Bulbasauro",
    atributos: { // objeto com várias outras cartas valor
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    atributos: { // objeto com várias outras cartas valor
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var carta3 = {
    nome: "Shiryu De Dragão",
    atributos: { // objeto com várias outras cartas valor
        ataque: 5,
        defesa: 9,
        magia: 10
    }
}

// Guardando todas as cartas (objetos) dentro de uma lista
var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta(){
    var numeroCartaMaquina = parseInt (Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    var numeroCartaJogador = parseInt (Math.random() * 3);
    
    while(numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt (Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];

    // Desabilitando o botão de sortear, depois que já sorteou as cartas
    document.getElementById("btnSortear").disabled = true;
    // Habilitando o botão de jogar
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes();
}

// Função de opções de atributos
function exibirOpcoes() {
    var opcoes = document.getElementById ("opcoes");
    var opcoesTexto = "";
    // Percorrendo os atributos
    for (var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

// Função qie obtem o atributo selecionado
function obtemAtributoSelecionado(){
     var radioAtributos = document.getElementsByName("atributo");

     for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
     }
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    
    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você venceu!";
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior!";
    } else {
        elementoResultado.innerHTML = "Empatou!";
    }
}