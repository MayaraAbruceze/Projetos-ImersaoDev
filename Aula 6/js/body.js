var rafa = {nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0};
var paulo = {nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0};
var gui = {nome: "Gui", vitorias: 1, empates: 1, derrotas: 2, pontos: 0};

// criando a função para calcular os pontos
function calculaPontos(jogador) {
    //cada vitoria vale 3 pontos
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

rafa.pontos = calculaPontos(rafa); // chamamos a função e atribuímos o return
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

// criando lista de jogadores
var jogadores = [rafa, paulo, gui];

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";

    for(var i=0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

// criando as funções dos botões
function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++; // jogador.vitorias = jogador.vitorias + 1;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++; 
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}