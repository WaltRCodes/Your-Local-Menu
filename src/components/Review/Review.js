import React,{Component} from 'react';
import axios from 'axios';
import './Review.scss'

export default class Review extends Component{
    constructor(props){
        super(props)

        this.state={
userids:null
        }
    }
    componentDidUpdate=()=>{
        if(this.props.data.length>1)
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
    
       
   console.log() 
           
           if(this.state.userids==null)
           {
           this.setState({userids:this.props.data})
           
   // console.log(this.state.userids[0].name)
           }
   
   
}
    render(){

        return(
<div>

{
this.state.userids!=null &&
this.state.userids.map(dt=>(
           <div>
           <div className='thumbnaildiv'>
           <img id="displaypic" src={dt.user.image_url}/>
           <p>{dt.user.name}</p>
           </div>
           Reviewed on <p>{dt.time_created}</p> 
           <p>{dt.rating}</p>   
           <p>{dt.text}</p>

           </div>
                ))

                }


    
</div>

        );
    }
}