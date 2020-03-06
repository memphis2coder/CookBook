import React, {useState, useEffect} from 'react';
// components
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

function App() {
    //const APP_ID = '7c656af0';
    //const APP_KEY = 'c626d929c6fa0cd746c9d8c2ba3c104d';
    //const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    
    return (
        <div>
            <Header />
            <Jumbotron />
            <RecipeList /> 
            <RecipeDetails />
        </div>
    )
}

export default App;