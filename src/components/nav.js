import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import {userSignOut} from "../actions";
import {connect} from "react-redux";

class Nav extends Component{
    renderLinks(){
        const {auth, signOut} = this.props
        if(auth){
            return (<Fragment>
                    <li>
                        <Link to="/secret-list">Secret List</Link>
                    </li>
                    <li>
                        <Link to="/quotes">Quotes</Link>
                    </li>
                    <li>
                    <Link to="/sign-out">Sign Out</Link>
                    </li>
                </Fragment>)
        }
        return (
            <Fragment>
                <li>
                <Link to="sign-in">Sign In</Link>
                </li>
                
                <li>
                        <Link to="/sign-up">Sign Up</Link>
                </li>
                
            </Fragment>)
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
                    {this.renderLinks()}
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

export default connect(mapStateToProps, {signOut:userSignOut})(Nav);