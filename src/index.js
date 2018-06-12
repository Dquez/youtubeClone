import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar'
const API_KEY = 'AIzaSyBUa-LbfOSVSJ5Dc0-8RKIuUyCtwm_FhKo';


const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('.container'));

