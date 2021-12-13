import React from "react";
import Search from "./search/Search";
import axios from "axios";
import RecipeList from "./Food/RecipeList";
import RecipeDetail from "./Food/RecipeDetail";

class App extends React.Component
{
    state={recipes: [], selectedRecipe: null};

    onFormSubmit = async (term) =>
    {
        const response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${term}`);
        this.setState({recipes: response.data.recipes});
    }
    onSelection = (recipe) =>
    {
        this.setState({selectedRecipe: recipe});
    }

    render()
    {
        return(
            <div className="ui container">
                <Search onFormSubmit={this.onFormSubmit}/>
                <RecipeDetail recipe={this.state.selectedRecipe}/>
                <RecipeList onSelection={this.onSelection} recipes={this.state.recipes} />
            </div>
        );
    }
}   

export default App;