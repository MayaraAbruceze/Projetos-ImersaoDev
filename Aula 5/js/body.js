/* TRABALHANDO COM UMA ÚNICA FUNCTION
function adicionarFilme() {
    //pegando o valor do input
    var filmeFavorito = document.getElementById("filme").value;

    // condição para validar se realmente estou adicionando uma imagem
    if (filmeFavorito.endsWidth(".jpg")) {
    // armazenando o elemento de imagem
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    // pegando o valor da div que irá exibir na imagem na tela
    var elementoListaFilmes = document.getElementById("listaFilmes");
    // colocando dentro do elemento ListaFilme o elemento FilmeFavorito
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
    } else{
        console.error("Endereço de filme errado");
    }
    
    // para limpar o campo depois de adicionar
    document.getElementById("filme").value = "";
}
*/

// TRABALHANDO COM MAIS FUNCTIONS PARA BOAS PRÁTICAS DE PROGRAMAÇÃO
function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito);
    } else{
        console.error("Endereço de filme inválido!");
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">"; 
    var elementoListaFilmes = document.getElementById("listaFilmes");  
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito; 
}