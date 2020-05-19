import React, { Component } from 'react';
import axios from 'axios';

export default class Call extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [{}]
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
        })
        .catch((err) => {
        console.log ('error');
        })
        
      }
  
  render() {

    var {isLoaded, term } = this. state;
    if (!isLoaded) {
      return <div>LOADING...</div>;

    }

    else {
      return (
        <div className="Gallery">
          <ul>
            {term.map(term => (
              <li key={term.id}>
                Name: {term.name}
              </li>
            ))};
          </ul>
          
          
        </div>
        
      )
    }
  }

}

    