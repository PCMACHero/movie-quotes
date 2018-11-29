import React, {Component} from "react";
import {Link} from "react-router-dom";
import {userSignIn, userSignOut} from "../actions";
import {connect} from "react-redux";

class Nav extends Component{
    renderLinks(){
        const {auth, signIn, signOut} = this.props
        if(auth){
            return <button className="yellow btn" onClick={signOut}>Sign Out</button>
        }
        return <button className="blue btn" onClick={signIn}>Sign In</button>
    }
    render(){
        const navStyle = {
            padding: "0 8px",
            
        }

        console.log("USER AUTH: ", this.props.auth)

        return (
            
                <nav style={navStyle} className="cyan lighten-2">
                    <div className="nav-wrapper">
                
                <Link to="/" className="brand-logo">Movie Quotes</Link>
                <ul className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/public-list">Public List</Link>
                    </li>
                    <li>
                        <Link to="/secret-list">Secret List</Link>
                    </li>
                    <li>
                        <Link to="/quotes">Quotes</Link>
                    </li>
                    <li>
                        {/* <Link to="/sign-in">Sign In</Link> */}
                        {this.renderLinks()}
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                </ul>
            </div>
            </nav>
        );
    }
}

function mapStateToProps(state){

    console.log(arguments);
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {signIn:userSignIn, signOut:userSignOut})(Nav);