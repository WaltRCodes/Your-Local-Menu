import React, { Component } from 'react';
import axios from 'axios'
import '../styles/Search.css'

class Search extends Component {

    //Im using props because they allow me to pass data from one component to another component, but since props are read-only I need to use state because it is what makes my React components interactive. This helps so that I can have conditional rendering in my react app.  Also, when my state changes, then the corresponding react component gets rendered again. 
    
       constructor(props){
           super(props)
           this.state = {
               query:'',
               loading: false
           };
       }
    
    //I used setState here because this is where the react app is being told that components and children of components need to be rerendered.  
    changeHandle = event => {
        this.setState({[event.target.name]:event.target.value})
    }
    //cite:https://reactjs.org/docs/forms.html 
    
    submitHandle = event => {
         event.preventdefault ()
         console.log(this.state)
         axios.post('https://api.yelp.com/v3/businesses/search', this.state)
         .then(response => {
             console.log(response)
         })
         .catch(error => {
             console.log(error)
         })
      
     }
    
    //I'm using render here because I want to render different types of HTML elements into the DOM once the logic has been implemented 
    //Once the state changes it is being passed down as props to the child component and making the app render itself agin
       render (){
          const {name} =this.state
          
         return(
          
            
            <div className="holder"> 
                  
              <form onSubmit={this.submitHandler}>
                  <div className="search-tag" htmlFor="search-input">
                      <input 
                      type= "text" 
                      name= "name" 
                      id ="search-input"
                      value= {name}
                      placeholder = "search"
                      onChange= {this.changeHandler}
                      />
    {/* Onchange lets me know that whenever a form field is changed, then this event needs to fire. React relies on the onchange events to handle what the user inputs in real time. I use value here to set the value of the component 
      
    cite: https://reactjs.org/docs/dom-elements.html
        
        */
    }
                   
                      
                      <hr/>
                      <button className="button" type="submit"> Submit</button>
    
    {/* Button is used to submit the request */}
                    
                  </div>
              </form>
            </div>
         )
       }
    }
    
    export default Search