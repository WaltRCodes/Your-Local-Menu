import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Modal.css'
import {  BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import '../Review.scss'
import Search from './../../Search'
import ReviewCall from './../../ReviewCall'
import { Redirect } from "react-router-dom";
import hambtn from './Assets/menu-icon.png'
import Bkg from './Assets/Bkg.jpg'
import menu from './Assets/Menu.jpg'
import chef from './Assets/chef.jpg'


export default class Modal extends Component{
    constructor(props){
        super(props)
this.state={

    clsName :"none",
    show:false,
    expand:'modal-main',
    restuarant:'',
    sideElement:<p>Please pick a restuarant from the search results</p>
  
    
   
}}

showModal = (e) => {
    e.preventDefault()
    if(this.state.show==false){
        this.setState({show:true});
        this.setState({ clsName: "block" });
    this.setState({ expand: "modal-main" });
   
    
    }
    
    else{
    this.setState({show:false})
    this.setState({clsName: "none"});}
}

hide=(e)=>{
    e.preventDefault()
    console.log("hiding")
this.setState({clsName: "none"});
}
    handleexpand=(e)=>{
        this.setState({show:false});  
        this.setState({expand:"modal"});
        console.log(e);  
    }
    routeToCustomReview=(element,title)=>{
        //console.log(e);
        this.setState({sideElement:element,restuarant:title});
        
    }


render(){

   
    return (
      
<div>
          
      <div className={this.state.expand} style={{display:this.state.clsName}}>
      {this.state.show==true && 
<div >
<img id="menu" src={menu} />
  <button id="close" onClick={this.hide} >X</button>
  <div className="links">
<Router>
        <Link to="/" className="link" onClick={this.handleexpand}>Home</Link>
        <Link to="/Search" className="link" onClick={this.handleexpand}>Search</Link>
        <Link to="/Reviews" className="link" onClick={this.handleexpand}>Reviews</Link>

</Router>
</div>
</div>}
{ this.state.expand=="modal" &&
<div>
<div>
{/* <img src={Bkg} /> */}
</div>
<div>
<Router >
        <Switch >
        <Route exact path="/"><About/></Route>
        <Route exact path="/Search"><Search capture={this.routeToCustomReview}/></Route>
        <Route exact path="/Reviews"><ReviewCall sideElement={this.state.sideElement} restuarant={this.state.restuarant} /></Route>
        </Switch>
        </Router>
        
        </div> 
        </div>  

        }
     
        </div>
        
      
<div>
    <img id="hambtn" src={chef} onClick={this.showModal} alt="img not found"/>
      
      </div>
       
       </div>
    );
    }}

    function About(){
        return(
        
            <div className="About">
                <h1 id="yelp">Yelp</h1>
                <img src={menu} />
                <div id="header">
                <h1> Yelp connects people with </h1>
                <h1>great local businesses</h1>
                </div>
     
            </div>
        )
        }

  