// var filme1 = "Yerterday";
// var filme2 = "A Chegada";
// var filme3 = "Escola de Rock";

// document.write("<p>" + filme1 + "</p>");
// document.write("<p>" + filme2 + "</p>");
// document.write("<p>" + filme3 + "</p>");

// ---------------------------- FIM ------------------------- // 


// --------------- Usando listas - arrays -------------------------- //
var listaFilmes = ["Yerterday", "A Chegada", "Escola de Rock"];

// adicionando novos elementos na lista
listaFilmes.push("Livre");
listaFilmes.push("Jobs");

// imprimindo a lista, passando o índice de cada elemento da lista
// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2] + "</p>");
// document.write("<p>" + listaFilmes[3] + "</p>");

// ---------------------------- FIM ------------------------- //

// --------------------- Usando for -------------------------- //
for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<p>" + listaFilmes[i] + "</p>");
}