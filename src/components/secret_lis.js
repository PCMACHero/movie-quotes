import React from "react";
import auth from "../HOC/auth";

const SecretList = props => {
    
    
    return (
        
    <div>
        <h1 className="center">
        Secret Operatives List
        </h1>
        <ol>
            <li>Jimmy</li>
            <li>Joe</li>
            <li>Johnny</li>
            <li>Jim</li>
        </ol>
    </div>
    )
}

export default auth(SecretList)