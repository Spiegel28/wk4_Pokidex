import { wildPokemonService } from "../services/WildPokemonService.js"
import { Pop } from "../utils/Pop.js"

export class WildPokemonController {

    constructor() {
        console.log('wild pokemon controller')
    }

    async getWildPokemon() {
        try {
            await wildPokemonService.getWildPokemon()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}