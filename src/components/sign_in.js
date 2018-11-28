import React, {Component} from "react";

export default class SignIn extends Component{
    render(){
        return (
            <div>
                <h1 className="center" onClick={()=> {console.log("Cliecked")}}>Sign In</h1>
            </div>
        )

    }
    
}