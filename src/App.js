import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css/dist/js/materialize"
import About from "./components/about"
import Home from "./components/home"
import Nav from "./components/nav"
import Quotes from "./components/quotes"
import SignIn from "./components/sign_in"
import SignUp from "./components/sign_up"
import React, { Component } from 'react';
import {Route} from "react-router-dom"
import SecretList from "./components/secret_lis"
import PublicList from "./components/public_list"


import logo from './logo.svg';
import './App.css';

const App = ()=> (
  <div>
    <Nav/>
    <div className="container">
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/public-list" component={PublicList}/>
      <Route path="/secret-list" component={SecretList}/>
      <Route path="/quotes" component={Quotes}/>
      <Route path="/sign-in" component={SignIn}/>
      <Route path="/sign-up" component={SignUp}/>
      <Route path="/nav" component={Nav}/>
      
    </div>
  </div>
)
  


export default App;
