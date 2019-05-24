import React from 'react';
import './style.scss';


const Card = ({name}) => (
    <div className="col m6">
        <div class="card">
            {/* <div class="card-image">
                <img src="images/sample-1.jpg"/>
                <span class="card-title">{name}</span>
            </div> */}
            <div class="card-content">
                <h1>{name}</h1>
            </div>
            <div class="card-action">
                <a href="#">This is a link</a>
            </div>
        </div>
    </div>
)
    
export default Card;