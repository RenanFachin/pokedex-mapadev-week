/*

qnd clicar no pokemon da listagem temos que:
1°: Esconder o cartão do pokemon aberto
2°: Mostrar o cartão do pokemon que foi selecionado na listagem

Para isso será necessário trabalhar com:
1- Listagem
2- cartão do pokemon


Precisamos criar duas variáveis no JS para trabalhar com elementos da tela

Vamos precisar com um evento de clique feito pelo usuário na listagem de pokemon

- remover a (classe aberto) só do cartão que está aberto;
- ao clicar em um pokemon da listagem, pegar o ID deste pokemon para saber qual cartão mostrar;
- remover a (classe ativo) que marca o pokemon selecionado na listagem;
- adicionar a (classe ativo) no item da lista selecionado.
*/

// Começando o código
// Precisamos criar duas variáveis no JS para trabalhar com elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')   //.pokemon = li do html
console.log(listaSelecaoPokemons)

const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
console.log(pokemonsCard)

listaSelecaoPokemons.forEach(pokemon => { 
    //Vamos precisar com um evento de clique feito pelo usuário na listagem de pokemon
    pokemon.addEventListener('click', ()=> {

        //- remover a (classe aberto) só do cartão que está aberto;
        const cartaoPokemonAberto = document.querySelector('.aberto') //busca o pokemon com a class aberto dentro do document
        cartaoPokemonAberto.classList.remove('aberto') //remove a classe aberto

        //- ao clicar em um pokemon da listagem, pegar o ID deste pokemon para saber qual cartão mostrar;
        const idPokemonSelecionado = pokemon.attributes.id.value //pega o id do pokemon clicado e guarda na variável idPokemonSelecionado

        const idDoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado //concatenando a tag id ao "clicar"

        const cartaoPokemonParaAbrir = document.getElementById(idDoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto') //adiciona a tag aberto ao pokemon selecionado

        //- remover a (classe ativo) que marca o pokemon selecionado na listagem;
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        //- adicionar a (classe ativo) no item da lista selecionado.
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})