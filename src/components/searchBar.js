import React, {Component} from 'react';

class SearchBar extends Component{
    constructor (props) {
        super(props);
        this.state  = { term : ''};
        this.onInputChange = this.onInputChange.bind(this);
    };
    onInputChange (e) {
        console.log(e.target);
        this.setState({
            term: e.target.value
        });
    };
    render () {
        return (
            <input 
            value = {this.state.term}
            onChange={this.onInputChange}
            />
        );
    }
}

export default SearchBar;