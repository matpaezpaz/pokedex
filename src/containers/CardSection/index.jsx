import React from "react";
import Card from "../../components/Card";
import Pagination from '../../components/Pagination';
import './styles.scss';


class CardSection extends React.Component {
    constructor({service}) {
        super();
        this.state = {
            pokemons : [],
            previous : false,
            next : false
        }
        this.service = service;
    }
    componentDidMount(){
        this.service.getPokemons()
        .then( 
            this.updateList
        )
    }
        
    updateList = (apiPokemons) => {
        this.setState({
            pokemons : apiPokemons
        })
        this.setState({
            previous: this.service.thereArePrevious(),
            next: this.service.thereAreNext()
        })
    }

    handleClickPrevious = () => {
        if ( this.state.previous ) {
            this.service.previous().then(
                this.updateList
            );
        }
    }
    handleClickNext = () => {
        if ( this.state.next ) {
            this.service.next().then(
                this.updateList
            );
        }
    }


    render (  ) {
        let pokemonsCards = []
        if ( this.state.pokemons ) {
            pokemonsCards = this.state.pokemons.map(item => <Card key={item.id}  {...item} />)
        }
        const paginationProps = {
            thereAreNext : this.state.next,
            thereArePrevious : this.state.previous,
            handleClickNext : this.handleClickNext,
            handleClickPrevious : this.handleClickPrevious
        }

        return (
            <React.Fragment>
                <div className="row">
                    { pokemonsCards }
                </div>
                <Pagination {...paginationProps} />
            </React.Fragment>
        )
    }
}

export default CardSection;