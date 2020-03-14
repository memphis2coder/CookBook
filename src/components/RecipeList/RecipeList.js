import React from 'react';
import Recipe from '../Recipe/Recipe';
import RecipeSearch from '../RecipeSearch/RecipeSearch';

export default function RecipeList({recipes}) {
    return (
        <div className="pt-5">

            <RecipeSearch></RecipeSearch>
                <div className="container mt-5">
                    <div className='row'>
                        <div className="col-md-12">
                            <h2 className="text-center py-3">Recipe List</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {recipes.map(recipe => {
                        return <Recipe Key={recipe.recipe_id} recipe={recipe} />
                    })}
                </div>

        </div>
        
        
    )
}