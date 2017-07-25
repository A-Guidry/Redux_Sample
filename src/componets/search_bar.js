import React from 'react';

class SearchBar extends React.Component {
     render(){
         // onChange is protected React element
         return <input onChange={(event) => console.log(event.target.value)} />; 
         //above is the same as writing an event function like- 
//        onInputChange(event){
//        console.log(event.target.value);
//    }
     }
    
}
    
export default SearchBar;
    