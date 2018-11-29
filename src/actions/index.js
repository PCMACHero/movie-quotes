import types from './types';
import axios from "axios";

export function userSignIn (){
    console.log("SIGN IN CALLED")
    return{
        type: types.SIGN_IN
    }
}

export function userSignOut (){
    return{
        type: types.SIGN_OUT
    }
}

export function userSignUp (){
    return{
        type: types.SIGN_UP
    }
}