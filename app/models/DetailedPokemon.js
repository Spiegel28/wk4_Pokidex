export class DetailedPokemon {
    constructor(data) {
        this.name = data.name
        this.nickname = data.nickname
        this.height = data.height
        this.weight = data.weight
        this.types = data.types
        this.img = data.img

    }

    get activePokemonTemplate() {
        return `
    <h1>${this.name}</h1>
            <span>${this.img}</span>
            <h3>Height: ${this.height}</h3>
            <h3>Weight: ${this.weight}</h3>
            <h3>Types: ${this.types}</h3>
`

    }
}