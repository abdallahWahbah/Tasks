import './recipes.css';

const Recipe = ({recipe, onSelection}) =>
{
    return(
        <div onClick={()=> onSelection(recipe)} className="recipe__item ui card">
            <div className="image">
                <img src={recipe.image_url} alt={recipe.title}/>
            </div>
            <div className="content">
                <div href="/" className="shrink__text header">{recipe.title}</div>
                <div className="meta">
                <span className="date">{recipe.publisher}</span>
                </div>
                <div className="shrink__text description">
                    {recipe.title}
                </div>
            </div>
            <div className="extra content">
                <div href="/">
                    Social Rank: {recipe.social_rank.toFixed(2)}
                </div>
            </div>
        </div>
    )
}

export default Recipe