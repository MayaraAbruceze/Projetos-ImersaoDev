var carta1 = {
    nome: "Bulbasauro",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2019/09/Ash_Bulbasaur.jpg",
    atributos: { // objeto com várias outras cartas valor
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    imagem: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus.jpg",
    atributos: { // objeto com várias outras cartas valor
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var carta3 = {
    nome: "Shiryu De Dragão",
    imagem: "https://s.aficionados.com.br/imagens/shiryu.jpg",
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

    exibirCartaJogador();
}

// // Função de opções de atributos
// function exibirOpcoes() {
//     var opcoes = document.getElementById ("opcoes");
//     var opcoesTexto = "";
//     // Percorrendo os atributos
//     for (var atributo in cartaJogador.atributos){
//         opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
//     }
//     opcoes.innerHTML = opcoesTexto;
// }

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
    var divResultado = document.getElementById("resultado");
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Venceu!</p>";
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Perdeu!</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou!</p>";
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById('btnJogar').disabled = true;
    document.getElementById('btnSortear').disabled = false;

    exibirCartaMaquina();
}

// Trabalhando com a exibição das cartas do jogador
function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador");
    // Estilizando o css
    divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

    //criando a variável para o nome da carta que irá aparecer no topo do card
    var nome = '<p class ="carta-subtitle">' + cartaJogador.nome;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    // Estilizando o css
    divCartaMaquina.style.backgroundImage = "url(" + cartaMaquina.imagem + ")";
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }

    //criando a variável para o nome da carta que irá aparecer no topo do card
    var nome = '<p class ="carta-subtitle">' + cartaMaquina.nome;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";    
}