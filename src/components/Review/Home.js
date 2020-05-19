import React,{Component} from 'react';

import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";

import Search from '../Search'
import ReviewCall from '../ReviewCall'

export default function Home(){
    
return(
     <div>
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

function About(){
return(

    <div>
working on it
    </div>
)
}