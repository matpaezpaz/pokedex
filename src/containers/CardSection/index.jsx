import React from "react";
import PokeAPIService from "../../services/PokeAPIService";
import Card from "../../components/Card";


class CardSection extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons : []
        }
        this.pokeApi = new PokeAPIService();
    }
    componentDidMount(){
        this.pokeApi.getPokemons()
        .then( 
            apiPokemons => {
                this.setState({
                    pokemons : apiPokemons
                })
            }
        );
    }

    render (  ) {
        let pokemonsCards = []
        if ( this.state.pokemons ) {
            pokemonsCards = this.state.pokemons.map(item => <Card  {...item} />)
        }
        return <div className="row">
            { pokemonsCards }
        </div>;
    }
}

export default CardSection;