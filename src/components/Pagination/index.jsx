import React from "react";
import './style.scss';
const Pagination = ({thereAreNext, thereArePrevious, handleClickNext, handleClickPrevious} ) => {
    return (
        <ul className="pagination">
            <li className={thereArePrevious ? '' : 'disabled' }>
                <a href="#!" onClick={handleClickPrevious}>
                    <i className="material-icons">chevron_left</i>
                </a>
            </li>
            <li className={thereAreNext ? 'waves-effect' : 'waves-effect disabled' } >
                <a href="#!" onClick={handleClickNext} >
                    <i className="material-icons">chevron_right</i>
                </a>
            </li>
        </ul>
    )
}

export default Pagination;