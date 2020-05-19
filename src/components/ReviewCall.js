import React, { Component } from 'react';
import axios from 'axios';
import LeaveReview from './LeaveReview';
import ReviewCell from './ReviewCell';
import Review from './Review/Review'


export default class Call extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [{}],
          name:'',
          rating:0,
          comment:'',
          reviews:['']

        }
        {/*this binds the functions*/}
        this.takeName = this.takeName.bind(this);
        this.takeRating = this.takeRating.bind(this);
        this.takeComment = this.takeComment.bind(this);
        this.createComment = this.createComment.bind(this);
  }

  takeName(event){
    {/* update the ymbol in state */}
    this.setState({name: event.target.value});
  }

  takeRating(event){
    {/* update the ymbol in state */}
    this.setState({rating: event.target.value});
  }

  takeComment(event){
    {/* update the quantity in state */}
    this.setState({comment: event.target.value});
  }

  createComment(){
    //   let newReviews = this.state.reviews;
    //   let newReviewHTML = <ReviewCell user={this.state.name} rating={this.state.rating} comment={this.state.comment}/>;
    //   newReviews.push(newReviewHTML);
    //  this.setState({reviews:newReviews});
    {/*this puts the data from the data fields into data*/}
    let currentReviews = this.state.data;
    let newReview =  {
        "id": "",
        "url": "",
        "text": this.state.comment,
        "rating": parseInt(this.state.rating),
        "time_created": new Date().toISOString().replace("T", " ").replace("Z", ""),
        "user": {
          "id": "",
          "profile_url": "",
          "image_url": "",
          "name": this.state.name
        }
      };
      currentReviews.unshift(newReview);
      this.setState({data:currentReviews});

  }

    componentDidMount() {
   
        {/* call the api on page load */}
        this.callApi();
    }
    async callApi() {
 
        {/*https://medium.com/@chaoyue_zhao/how-to-make-axios-api-calls-with-yelp-fusion-inside-react-js-10755d8485c5*/}
        {/*this calls the api and puts the response data into state*/}
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${this.props.restuarant}/reviews`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
        })
        .then((res) => {
  
          this.setState({data:res.data.reviews})
        
        })
        .catch((err) => {
        console.log ('error');
        })
        
      }
  
  render() {
    
    return (
      <div>

        
        <div>{this.state.reviews}</div>      
      <Review data={this.state.data} reviewButton={<LeaveReview takeName={this.takeName} takeRating={this.takeRating} takeComment={this.takeComment} createComment={this.createComment} />}/>

      </div>
      
    )
  }
}