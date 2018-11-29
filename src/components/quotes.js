import React, {Component} from "react";
import auth from "../HOC/auth"

class Quotes extends Component {
    
    render(){
        
        return (
            <div>
                <h1 className="center">Movie Quote</h1>
                <h5>"Let off some steam, Benette"</h5>
               
            </div>
        )
    }
}



export default auth(Quotes)
