import React from 'react';
import Nav from '../../components/Nav';

import CardSection from '../../containers/CardSection';
import PokeAPIService from '../../services/PokeAPIService';

class Home extends React.Component {
    constructor(){
        super();
        this.pokeApi = new PokeAPIService();
    }
    render(){
        return (
            <React.Fragment>
                <Nav title="Pokédex" />
                <div className="container">
                    <CardSection  service={this.pokeApi} />
                    
                </div>
            </React.Fragment>
        );
    }
}

export default Home;