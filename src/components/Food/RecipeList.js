import React from "react";
import Recipe from "./Recipe";
import './recipes.css'

class RecipeList extends React.Component
{
    render()
    {
        // console.log(this.props.recipes)
        const renderedList = this.props.recipes.map(recipe =>
        {
            return <Recipe onSelection={this.props.onSelection} key={recipe.recipe_id} recipe={recipe}/>  
        })
        return(
            <div className="recipes">
                {renderedList}
            </div>
        );
    }
}

export default RecipeList;