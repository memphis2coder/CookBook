import React, {useState, useEffect} from 'react';
// components
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import RecipeList from './components/RecipeList/RecipeList';
//import RecipeSearch from './components/RecipeSearch/RecipeSearch';



function App() {
    const APP_ID = '7c656af0';
    const APP_KEY = 'c626d929c6fa0cd746c9d8c2ba3c104d';

    const [recipes, setRecipes] = useState([]);
    //
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        //
        getRecipes();
    }, []);
    
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipes(data.hits);
        console.log();

    };

    

    return (
        <div>
            <Header />
            <Jumbotron />
            <RecipeList {}/>
        </div>
    )
}

export default App;