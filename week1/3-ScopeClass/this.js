// // console.log('Esto es this: ',this)
// // function hi(){  
// //     // console.log('Esto es this: ',this)
// // }
// // hi()

// const pokemon = {
//     name: 'Chorizar',
//     renderName(type){
//         console.log(`Pokemon encontrado ${this.name} type: ${type}`)
//     }
// }
// // pokemon.renderName('Fire')
// const findPokemon = pokemon.renderName
// findPokemon()
// findPokemon.apply(pokemon, ['Fire'])
// findPokemon.call(pokemon, 'Fire')

class Pokemon{
    constructor(){
        this.name = 'Chorizar'
    }
    

    renderName(type){
        console.log(`Pokemon encontrado ${this.name} type: ${type}`)
    }
}

const pikachu = new Pokemon
pikachu.renderName('Fire')
