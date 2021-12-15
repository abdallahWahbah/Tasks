import React from "react";
import Recipe from "./Recipe";
import './recipes.css'

const RecipeList = (props) =>
{
    const renderedList = props.recipes.map(recipe =>
    {
        return <Recipe onSelection={props.onSelection} key={recipe.recipe_id} recipe={recipe}/>  
    })
    return(
        <div className="recipes">
            {renderedList}
        </div>
    );
    
}

export default RecipeList;