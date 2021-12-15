import React, {useState} from "react";

const Search = (props) =>
{
    const [term, setTerm] = useState('');

    const onInputChange = (event) =>
    {
        setTerm(event.target.value);
    }

    const onFormSubmit = (event) =>
    {
        event.preventDefault();
        props.onFormSubmit(term)
    }

    return(
        <div className="search-bar ui segment" style={{marginTop: "30px", marginBottom: "30px"}}>
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Food Search: </label>
                    <input 
                        type="text"
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )

}

export default Search;