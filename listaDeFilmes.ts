import { Acao } from "./filme";
import { Romance } from "./filme";
import { Filme } from "./filme";

const listaDeFilmes : Filme[] = [
    new Romance('Continência ao Amor', 2022, 'Romance'),
    new Acao('Velozes e Furiosos 10', 2023, 'Ação')
]

const recomendar = (genero:string) => {
    const resultado = listaDeFilmes.filter(filme => filme.genero === genero)
    console.log(resultado)
}

listaDeFilmes.forEach(listaDeFilmes =>{
    listaDeFilmes.exibirDetalhes();
})


recomendar("Romance");