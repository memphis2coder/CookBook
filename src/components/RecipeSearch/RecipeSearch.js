import React, {useEffect, useState} from 'react';
import RecipeList from '../RecipeList/RecipeList';

const RecipeSearch = () => {
    // const APP_ID = '7c656af0';
    // const APP_KEY = 'c626d929c6fa0cd746c9d8c2ba3c104d';

    // const [recipes, setRecipes] = useState([]);

    // useEffect(() => {
    //     getRecipes();
    // }, []);
    
    // const getRecipes = async () => {
    //     const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    //     const data = await response.json();
    //     setRecipes(data.hits);
    //     console.log(data.hits);
    // };

    
        return (
            <div className='container'>
                <form className="search-form">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-10">
                                <input className="search-bar" type="text" className="form-control"></input>
                            </div>
                            <div className="col-md-2">
                                <button className="search-btn" type="submit" className="btn btn-primary">
                                Search
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    
}

export default RecipeSearch;