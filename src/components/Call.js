import React, { Component } from 'react';
import axios from 'axios';
import Restaurant from './Review/Restaurantdetail';

export default class Call extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [{}],
          img_clicked:{}
        }
  }

    componentDidMount() {
        {/* call the api on page load */}
        this.callApi();
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
        console.log(res.data.businesses);
        var data=JSON.parse(res.data.businesses)
        this.setState({data:data})
        this.img_onclick(1)
        })
        .catch((err) => {
        console.log ('error');
        })
        
      }
      img_onclick=(id)=>{
        var data=this.state.data[id]
        this.setState({img_clicked:data})
      }
  
  render() {
    return (
      <div>
       
       <Restaurant imgclicked={this.state.img_clicked} />
        
      </div>
      
    )
  }
}