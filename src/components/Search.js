import React, { Component } from 'react';
import '../styles/Search.css';
import Call from './Call';

class Search extends Component {
        constructor (){
        super ();
        this.state ={
        search: '',
        renderReview:false,
        submitSearch:<div>Please submit a search</div>,
        };

        this.updateSearch = this.updateSearch.bind(this)
        this.makeSearch = this.makeSearch.bind(this);
        }
updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)})
}
makeSearch(event){
  event.preventDefault();
  console.log("This works");
  this.setState({renderReview:true,submitSearch:<Call term={this.state.search}/>});
}

   render (){

      
     return(
      
     
        <div className="holder"> 
        {/* <hr/> */}
        
          <form onSubmit={this.makeSearch}>
              <div className="search-tag" htmlFor="search-input">
                  <input 
                  type= "text" 
                  name= "name" 
                  id ="search-input"
                  placeholder = "search"
                  onChange= {this.state.search}
                  />
                  
                  {/* <hr/> */}
                  <button className="button" type="submit"> Submit</button>

                  {/* Button is used to submit the request */}
                  <h1 className="caption"> Search for a restaurant that delivers in San Francisco</h1>
              </div>
          </form>{/* move this back later this.state.renderReview==false*/ }
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
          {this.state.submitSearch}
          {/*this.state.renderReview ==true &&	<Call term="delis"/>*/}	          
          {/*this.state.renderReview ==true &&	<ReviewCall restuarant="prospect-san-francisco" />*/}
          
          </div>
        </div>
     )
     }
}

export default Search;