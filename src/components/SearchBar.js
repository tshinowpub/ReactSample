import React, { Component } from 'react';

class SearchBar extends Component {

    constructor (props)
    {
        super(props);

        this.state = {
            'term': '',
        };
    }

    render() {

        const stylesSearchBar = {
            'margin': '2% 0',
        };

        const stylesSearchBarText = {
            'padding': '2%',
            'width': '100%',
        };

        return (
            <div className='row'>
                <div className='search-bar col-md-8' style={stylesSearchBar} >
                    <input
                        value={this.state.term}
                        onChange={(event) => this.onInputChange(event.target.value)}
                        style={stylesSearchBarText}
                    />
                </div>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;
