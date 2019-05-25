import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './container/Home/';
import Header from "./components/Header";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header></Header>
        <Route path="/" component={Home}></Route>
        <Route path="/discoverMusic" component={Home}></Route>
        
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
