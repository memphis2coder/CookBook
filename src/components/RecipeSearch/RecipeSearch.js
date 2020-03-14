import React from 'react';

const RecipeSearch = (props) => (
    <div className="jumbotron" style={{height: "50vh"}}>
        <form onSubmit={props.getRecipe}>
            <div className="form-row pt-5">
                <div className="col-md-10">
                    <input type="text" name="recipeName" className="form-control" placeholder="Search for Recipes..."/>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-block btn-outline-success">Search</button>
                </div>
            </div>
        </form>
    </div>
    
)

export default RecipeSearch;