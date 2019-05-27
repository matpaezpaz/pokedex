import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const CardDetail = (props) => {
    const {
        name,
        sprites,
        height,
        weight,
        stats
    } = props;
    let statsComp = [];
    if ( stats ) {
        statsComp = stats.map((stat,index) => (
            <div  key={index} className="col s6 center">
                {stat.stat.name}: {stat.base_stat}
            </div>
        ))
    }
    return (
        <div className="row ">
            <div className="col s12 m8 l6 offset-m2 offset-l3">
                <div className="card">
                    <div className="card-image">
                        <img src={sprites && sprites.front_default} alt={`Common physical appearance of ${name} `}/>
                    </div>
                    <div className="card-content">
                        <h1>
                            {name}
                        </h1>
                        <div className="row ">
                            <div className="mb-1 col s6 center">Height: {height}</div>
                            <div className="mb-1 col s6 center">Weight: {weight}</div>
                        {
                            statsComp
                        }
                        </div>
                    </div>
                    <div className="card-action">
                        <Link to='/'>
                            Back to the List
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetail;