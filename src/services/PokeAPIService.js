class PokeAPIService {
    constructor() {
        this._apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    }
    async getPokemons( url = this._apiUrl ) {
        const response = await fetch(url);
        const { next , previous , results:list } = await response.json();
        this._next = await next;
        this._previous = await previous;
        const listWithId = list.map(pokemon => { pokemon.id = Number(pokemon.url.match(/(?<=\/)\d+(?=\/)/)[0]) ; return pokemon; } )
        return listWithId;
    }
    thereArePrevious() {
        return this._previous !== null;
    }
    thereAreNext() {
        return this._next !== null;
    }

    next() {
        if ( this.thereAreNext() ) {
            return this.getPokemons( this._next )
        }
    }
    previous() {
        if ( this.thereArePrevious() ) {
            return this.getPokemons( this._previous )
        }
    }

}
export default PokeAPIService;