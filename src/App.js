import React, {Component} from 'react';
// styles
import './App.css';
// components
import Navbar from './components/Navbar/Navbar';
import RecipeSearch from './components/RecipeSearch/RecipeSearch';

const APP_ID = '7c656af0';
const APP_KEY = 'c626d929c6fa0cd746c9d8c2ba3c104d';

class App extends Component {
    state = {
        recipes : []
    };

    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        const API_CALL = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        
        const data = await API_CALL.json();
        this.setState({recipes: data.hits});
        console.log(this.state.recipes);
    };

    render() {
        return (
            <div className="App">
                <div className='container text-center'>
                    <Navbar />
                    <RecipeSearch getRecipe={this.getRecipe}/>
                    {this.state.recipes.map((recipe) => {
                        return <p>{recipe.recipe.label}</p>
                    })}
                </div>
            </div>
        );
    }
}

export default App;