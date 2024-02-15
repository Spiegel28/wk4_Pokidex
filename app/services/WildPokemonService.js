import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon1.js"
import { pokeAPI } from "./AxiosService.js"

class WildPokemonService {

    async getWildPokemon() {
        const response = await pokeAPI.get('?limit=20&offset=0')
        console.log('data from service', response.data)
        const newPokemon = response.data.results.map(pokemonPOJO => new Pokemon(pokemonPOJO))
        AppState.wildPokemon = newPokemon
        console.log('reassigned response', newPokemon)
    }

}








export const wildPokemonService = new WildPokemonService()