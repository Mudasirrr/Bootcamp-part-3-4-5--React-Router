import React , {Component}from 'react';

class Profile extends  Component{
    

    render(){
        // setTimeout(()=>{
        //     this.props.history.push('/')
        // },3000);
        return(
            <div>
            <h1> Profile Component</h1>
            <button onClick={()=>{this.props.history.push('/')}}>Go Back To Home</button>
            </div>
        )
    }
}
export default Profile;
