import React, {Component} from 'react';

class SearchBar extends Component{
    constructor (props) {
        super(props);
        this.state = {
            term : 'Search for a video!'
        }
        // onInputChage = this.onInputChage.bind(this); 
    }
   
    onInputChange = term => {
        this.setState({
            term
        })
        this.props.onSearchTermChange(term);
    }
    render() {
        
        return (
            <div className="search-bar">
            {/* onChange = event Listener , onInputChange = event Handler */}
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}
                />
                
            </div>

        );
    }   
}

export default SearchBar;