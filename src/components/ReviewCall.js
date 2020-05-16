import React, { Component } from 'react';
import axios from 'axios';
import Review from './Review/Review'


export default class Call extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [{}],
          flag:false
        }
  }
// componentDidUpdate(){
//   console.log("Are u comin here")
//   if(this.props.restuarant!=null){
// this.setState({flag:true})
// this.callApi();
//   }
// }

    componentDidMount() {
   
        {/* call the api on page load */}
        if(this.props.restuarant!=null)
        this.callApi();
    }
    async callApi() {
 
        {/*https://medium.com/@chaoyue_zhao/how-to-make-axios-api-calls-with-yelp-fusion-inside-react-js-10755d8485c5*/}
        
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${this.props.restuarant}/reviews`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
        })
        .then((res) => {
          this.setState({flag:true})
          this.setState({data:res.data.reviews})
        console.log(res.data.reviews);
        })
        .catch((err) => {
        console.log ('error');
        })
        
      }
  
  render() {
    
    return (
      <div>
        {/* {this.state.flag==true && */}
      <Review data={this.state.data} />
        
      </div>
      
    )
  }
}