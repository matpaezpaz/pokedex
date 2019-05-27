import React from 'react';
import CardDetail from '../../components/CardDetail';
import PokemonApiInstance from './../../services/PokeAPIService'; //Hacemos uso de la instancia de PokemonService

class DetailPokemon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemon: {},
            error: null, //Para hacer un ejemplo manejando el error.
        }
    }

    async componentDidMount() {
        const { 
            match:{
                params: {
                    idPokemon
                }
            } 
        } = this.props.props;
        
        if (idPokemon.length > 0) { //Si tengo un Id, entonces ejecutar. Podria ser 0 el id por lo que no puedo poner un !idPokemon
            PokemonApiInstance.getPokemonById(idPokemon)
                .then( //Ejemplo Con promesas
                    pokemon => {
                        this.setState({
                            pokemon,
                        });
                    }
                ).catch(
                    error => this.setState({ error })
                );

        }

    }

    render() {
        const { pokemon, error } = this.state;
        console.log("asd");
        return (
            <div className="detail-pokemon">
                {
                    error ? <h1> Ocurrió un errrorr!!!!!! </h1>
                        :
                        !pokemon
                            ? <h2> No hay pokemon cargado aún, esperando... </h2>
                            : <CardDetail {...pokemon} />
                }

            </div>
        );
    }
}

export default DetailPokemon;