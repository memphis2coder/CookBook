import React from 'react';
import Recipe from '../Recipe/Recipe';
import RecipeSearch from '../RecipeSearch/RecipeSearch';

export default function RecipeList() {
    return (
        <div className="container">
            <RecipeSearch />
            <div className='row'>
                <div className="col-sm-12 text-center mb-3">
                    <h1 className="text-center">Recipe List</h1>
                </div>
            </div>
        </div>
    )
}