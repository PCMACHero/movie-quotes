import React, {Component} from "react";

export default class SignIn extends Component{
    state = {
        num : 1
    }

    render(){
        return (
            <div>
                <h1 className="center" onClick={()=> {this.setState({
                    num: this.state.num+=1
                })}}>Sign In {this.state.num}</h1>
            </div>
        )

    }
    
}