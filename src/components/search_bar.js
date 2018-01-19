import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term : ''
        };
    }

    render() {
        
        return (
            <div>
                <input 
                value = {this.state.term}
                onChange={event => this.handleInputChange(event.target.value)} />
            </div>
        )

    }

    handleInputChange(term) {
        this.setState({term: term});
        this.props.handleSearch(term);
    }
}

export default SearchBar;