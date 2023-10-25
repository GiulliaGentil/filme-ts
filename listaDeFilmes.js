"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filme_1 = require("./filme");
var filme_2 = require("./filme");
var listaDeFilmes = [
    new filme_2.Romance('Continência ao Amor', 2022, 'Romance'),
    new filme_1.Acao('Velozes e Furiosos 10', 2023, 'Ação')
];
var recomendar = function (genero) {
    var resultado = listaDeFilmes.filter(function (filme) { return filme.genero === genero; });
    console.log(resultado);
};
listaDeFilmes.forEach(function (listaDeFilmes) {
    listaDeFilmes.exibirDetalhes();
});
recomendar("Ação");
