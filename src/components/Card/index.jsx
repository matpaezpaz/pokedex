import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


const Card = ({name,id}) => (
    <div className="col m6">
        <div className="card">
            {/* <div className="card-image">
                <img src="images/sample-1.jpg"/>
                <span className="card-title">{name}</span>
            </div> */}
            <div className="card-content">
                <h1>{name}</h1>
            </div>
            <div className="card-action">
                <Link to={`/pokemon/${id}`}>
                    Pokémon Description
                </Link>
            </div>
        </div>
    </div>
)
    
export default Card;