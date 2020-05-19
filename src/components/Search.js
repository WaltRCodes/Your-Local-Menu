import React, { Component } from 'react';
import axios from 'axios'
import '../styles/Search.css'
import Call from './Call'

class Search extends Component {
        constructor (){
        super ();
        this.state ={
        search: ''
        };
        }
updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)})
}

   render (){

      
     return(
      
        
        <div className="holder"> 
        {/* <hr/> */}
          <form onSubmit={this.submitHandler}>
              <div className="search-tag" htmlFor="search-input">
                  <input 
                  type= "text" 
                  name= "name" 
                  id ="search-input"
                  value= {this.state.search}
                  placeholder = "search"
                  onChange= {this.updateSearch.bind(this)}
                  />


               
                  
                  {/* <hr/> */}
                  <button className="button" type="submit"> Submit</button>

{/* Button is used to submit the request */}
    <h1 className="caption"> Search for a restaurant that delivers in San Francisco</h1>
              </div>
          </form>
        </div>
     )
   }
}

export default Search