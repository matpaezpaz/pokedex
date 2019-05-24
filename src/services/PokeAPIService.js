class PokeAPIService {
    constructor() {
        this._apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    }
    async getPokemons() {
        const response = await fetch(this._apiUrl);
        let { next , previous , results:list } = await response.json();
        this._next = await next;
        this._previous = await previous;
        return list;
    }
}
export default PokeAPIService;