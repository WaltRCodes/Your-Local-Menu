import React,{Component} from 'react';
import axios from 'axios';
import './Review.scss'

export default class Review extends Component{
    constructor(props){
        super(props)

        this.state={
            reviewData:[],
            id:-1
        }

    }
    componentDidUpdate=(prevProps)=>{
        if(this.props.data!=prevProps.data)
        {
            this.reviewRender();
        }
        
    }

    componentDidMount=()=>{
         
        if(this.props.data.length>1)
        {
            this.reviewRender();
        }
    }
    reviewRender=()=>{
        this.setState({reviewData:this.props.data})
         
    }
    handletextChange=(e)=>{
    this.setState({id:e.target.id})
    var temp=this.state.reviewData
    temp[this.state.id].text=e.target.value;
    this.setState({reviewData:temp})
    }
    handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({id:-1})
    }
    delete=(e)=>{
    var del=this.state.reviewData
    delete del[e.target.id]
    this.setState({reviewData:del})
    }
    edit=(e)=>{
        e.preventDefault();
        this.setState({id:e.target.id})
    
    }
    render(){

        return(
        <div className="container">
        <h1>Reviews </h1>
        <div className="flexparent">
        {
        this.state.reviewData!=null &&
        this.state.reviewData.map((dt,i)=>(
        <div>
                <div className="flexchild">
                <div className='thumbnaildiv'>
                <img id="displaypic" src={dt.user.image_url}/>
                <p>{dt.user.name}</p>
                <div className="btn">
                <button type="submit" id={i} onClick={this.edit}>Update</button>
                <button type="submit" id={i} onClick={this.delete}>Delete</button>
                </div>
                </div>
                
                <div className="forflex">
                <span>Reviewed on {dt.time_created}</span>
                <span>{dt.rating} Stars</span>
                <textarea id={i} value={dt.text} autofocus onChange={this.handletextChange} disabled={this.state.id==i ?false:true} / >
                </div>
                <button type="submit" id={i} onClick={this.handleSubmit} hidden={this.state.id==i ?false:true}>Submit</button>
                <br />
                </div>
                <br />
                </div>
                 ))
        }
                        
        <br />
        <br />
        </div>

        </div>

         );
    }
}