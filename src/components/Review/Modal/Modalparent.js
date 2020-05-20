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


export default class Modal extends Component{
    constructor(props){
        super(props)
this.state={

    clsName :"none",
    show:false,
    expand:'modal-main',
  
    
   
}}

showModal = () => {
    this.setState({ show: true });
    this.setState({ clsName: "block" });
    this.setState({ expand: "modal-main" });
  };

hide=(e)=>{
    
this.setState({clsName: "none"});
}
    handleexpand=(e)=>{
        this.setState({show:false});  
        this.setState({expand:"modal"});  
    }


render(){

   
    return (
      
<div>
          
      <div className={this.state.expand} style={{display:this.state.clsName}}>
      {this.state.show==true && 
<div >
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
<img src={Bkg} />
</div>
<div>
<Router>
        <Switch >
        <Route exact path="/"><About/></Route>
        <Route exact path="/Search"><Search /></Route>
        <Route exact path="/Reviews"><ReviewCall restuarant="prospect-san-francisco" /></Route>
        </Switch>
        </Router>
        
        </div> 
        </div>  

        }
     
        </div>
        
      
<div>
    <img id="hambtn" src={hambtn} onClick={this.showModal} alt="img not found"/>
      
      </div>
       
       </div>
    );
    }}

    function About(){
        return(
        
            <div className="About">
        working on it
            </div>
        )
        }

  