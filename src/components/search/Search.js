import React from "react";

class Search extends React.Component
{
    // state={term: ''};
    
    constructor(props)
    {
        super(props);
        this.state={term: ''};
    }

    onInputChange = (event) =>
    {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) =>
    {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }


    render()
    {
        return(
            <div className="search-bar ui segment" style={{marginTop: "30px", marginBottom: "30px"}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Food Search: </label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;