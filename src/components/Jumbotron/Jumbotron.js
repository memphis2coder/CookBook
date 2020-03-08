import React from 'react';
import RecipeSearch from '../RecipeSearch/RecipeSearch'
import './Jumbotron.scss';

function Jumbotron() {
    return (
        <div className="container">
            <div className="jumbotron jumbotron--custom">
                <RecipeSearch/>
            </div>
        </div>
    )
}

export default Jumbotron;