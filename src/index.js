//This imports the React file to the React Section.

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './componets/search_bar';


//YouTube API Key

const API_KEY = 'AIzaSyD3SoQh3ttMZ51DLcOf_q31_vAyFjZPYbU';

// Create a new compenet. This component should produce some HTML

//The "=>" is the "fat arrow" which replaces the "function" keyword for a componet.

const App = () => {
    
    return (<div>
        <SearchBar /> 
        </div>
           
);
}
// Take these compenets and generate it on the page (in the DOM

ReactDOM.render(<App/>, document.querySelector('.container'));