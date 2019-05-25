class PokeAPIService {
    constructor() {
        this._apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    }
    async getPokemons( url = this._apiUrl ) {
        const response = await fetch(url);
        let { next , previous , results:list } = await response.json();
        this._next = await next;
        this._previous = await previous;
        return list;
    }
    thereArePrevious() {
        return this._previous != undefined;
    }
    thereAreNext() {
        return this._next != undefined;
    }

    next() {
        if ( this.thereAreNext ) {
            return this.getPokemons( this._next )
        }
    }
    previous() {
        if ( this.thereArePrevious ) {
            return this.getPokemons( this._previous )
        }
    }

}
export default PokeAPIService;