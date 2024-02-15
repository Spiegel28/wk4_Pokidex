export class Pokemon {

    constructor(data){
        this.name = data.name
        this.url = data.url
        
    }

    get WildPokemonTemplate() {
        return `
        <button class="m-2 fs-3 btn btn-danger" onclick="app.WildPokemonController.getPokemonDetails('${this.name}')">${this.name}</button>
        `
    }
}