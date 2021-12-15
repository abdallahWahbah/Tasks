import React, {useState} from "react";
import Search from "./search/Search";
import axios from "axios";
import RecipeList from "./Food/RecipeList";
import RecipeDetail from "./Food/RecipeDetail";
import { useEffect } from "react/cjs/react.development";

const App = () =>
{
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(()=>
    {
        const search = async () =>
        {
            const response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=pizza`); // default (initial) search
            setRecipes(response.data.recipes)
        }
        search();
    },[])

    const onFormSubmit = async (term) =>
    {
        const response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${term}`);
        setRecipes(response.data.recipes)
    }
    const onSelection = (recipe) =>
    {
        setSelectedRecipe(recipe)
    }

    return(
        <div className="ui container">
            <Search onFormSubmit={onFormSubmit}/>
            <RecipeDetail recipe={selectedRecipe}/>
            <RecipeList onSelection={onSelection} recipes={recipes} />
        </div>
    );
    
}   

export default App;