import React from 'react';
import Nav from '../../components/Nav';

class Home extends React.Component {
    constructor(){
        super()
    }

    render(){

        return (
            <React.Fragment>
                <Nav title="Pokédex" />

            </React.Fragment>
        );
    }
}

export default Home;