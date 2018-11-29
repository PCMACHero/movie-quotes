import React, {Component} from "react";
import {connect} from "react-redux";

export default function(WrappedComponent){
    class Auth extends Component{
        componentDidMount(){
            console.log("HOC AUTH: ", this.props)
            this.checkAuth();
        }
        componentDidUpdate(){
            this.checkAuth();
        }
        checkAuth(){
            if(!this.props.auth) {
                this.props.history.push("/sign-in")
            }
        }
        log(message){
            console.log(message)
        }
        render(){
            return (
                <WrappedComponent {...this.props}/>
            )
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.user.auth
        }
    }
    return connect(mapStateToProps)(Auth)
}