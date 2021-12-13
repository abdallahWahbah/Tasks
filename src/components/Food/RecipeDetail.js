const RecipeDetail = ({recipe})=>
{
    if(recipe === null) return <div></div>
    return(
        <div className="recipe__detail">
            <img className="recipe__detail--image" src={recipe.image_url} alt={recipe.title}/>
            <div className="recipe__detail--text">
                <h1>{recipe.title}</h1>
                <h3>{recipe.publisher}</h3>
                <div>
                    Social Rank: {recipe.social_rank.toFixed(2)}
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail;