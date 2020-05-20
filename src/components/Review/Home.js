import React, { Component } from 'react';

import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import './Review.scss'
import Search from '../Search'
import ReviewCall from '../ReviewCall'


  export default class Home extends Component   {

    constructor(props) {
      super(props);
      this.state = {
        resturatantDiv:<div></div>,
        resturantName:''

      }
      {/*this binds the functions*/}
      //this.takeDivandName = this.takeDivandName.bind(this);
}


    render() {
return(
     <div className="RouteC">
    <Router>
    <div className="Route">
    <Link to="/" > About</Link>
  <Link to="/Search">Search</Link>
   <Link to="/Reviews">Reviews</Link>

     {/* <ul classname="linklist">
    <li><Link to="/Active" > Active Vintage</Link></li>
    <li> <Link to="/Featured">Featured Vintage</Link></li>
    <li> <Link to="/Trending">Trending Vintage</Link></li>
    </ul>  */}
    </div>
    <Switch>
 
    <Route exact path="/"> <About/></Route>  
    <Route exact path="/Search"><Search /></Route>  
    <Route exact path="/Reviews"><ReviewCall restuarant="prospect-san-francisco" /></Route>  
      
      
    </Switch>
    </Router> 
  </div>  
)
}
  }
function About(){
return(

    <div className="About">
working on it
    </div>
)
}