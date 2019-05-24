import React from 'react';
import Nav from '../../components/Nav';
import CardSection from '../../containers/CardSection';


class Home extends React.Component {
    render(){

        return (
            <React.Fragment>
                <Nav title="Pokédex" />
                <CardSection />
            </React.Fragment>
        );
    }
}

export default Home;