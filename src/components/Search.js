import React, { Component } from 'react';
import axios from 'axios'
import '../styles/Search.css'

class Search extends Component {

    
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
                      value= {{}}
                      placeholder = "search"
                      onChange= {this.changeHandler}
                      />
    {/* Onchange lets me know that whenever a form field is changed, then this event needs to fire. React relies on the onchange events to handle what the user inputs in real time. I use value here to set the value of the component 
      
    cite: https://reactjs.org/docs/dom-elements.html
        
        */
    }
                   
                      
                      {/* <hr/> */}
                      <button className="button" type="submit"> Submit</button>
    
    {/* Button is used to submit the request */}
        <h1 className="caption"> Search for a restaurant that delivers in New York</h1>
                  </div>
              </form>
            </div>
         )
       }
    }
    
    export default Search