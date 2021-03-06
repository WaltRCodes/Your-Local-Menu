import React, { Component } from 'react';
import axios from 'axios';
import Restaurant from './Review/Restaurantdetail';
import {  BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

export default class Call extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [''],
          img_clicked:{},
          location:'',
          resHTML:[<div>Please make a search</div>]
        }
  }

    componentDidMount() {
        {/* call the api on page load */}
          this.callApi();
          //elements = this.state.data.map(resObj => <Restaurant imgclicked={resObj} location={resObj.location.display_address} />);
          //console.log(this.state.data[1]);
          // for(let resObj of this.state.data){
          //   console.log(resObj);
          // }
        
    }
    async callApi() {
        {/*https://medium.com/@chaoyue_zhao/how-to-make-axios-api-calls-with-yelp-fusion-inside-react-js-10755d8485c5*/}
        
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        params: {
            term: this.props.term,
            latitude: '40.730610',
            longitude: '-73.935242',
        }
        })
        .then((res) => {
        //console.log(res.data.businesses);
        //let 
        for(let resObj of res.data.businesses){
          console.log(resObj);
        }
        console.log(this.props.capture);
        let htmlArray = res.data.businesses.map(resObj => 
          
            <Link to="/Reviews" onClick={() => this.props.capture(<Restaurant imgclicked={resObj} location={resObj.location.display_address} />,resObj.alias)} >
              <Restaurant imgclicked={resObj} location={resObj.location.display_address} />
            </Link>
          
        );
        this.setState({data:res.data.businesses,resHTML:htmlArray});
        //this.setState({resHTML:elements});
        //this.img_onclick(1);
        //console.log(this.state.data[0].location.display_address);
        })
        .catch((err) => {
        console.log ('error');
        })
        
      }
      img_onclick=(id)=>{
        var data=this.state.data[id]
        this.setState({img_clicked:data})
        this.setState({location:this.state.data[0].location.display_address})
      }
  
  render() {
    return (
      <div id="Gridcontainer">
        
       {this.state.resHTML}
       
       {/*<Restaurant imgclicked={this.state.img_clicked} location={this.state.location} />*/}
        
      </div>
      
    )
  }
}