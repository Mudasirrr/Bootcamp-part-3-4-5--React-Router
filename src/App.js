import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import {BrowserRouter, Route} from 'react-router-dom';
class  App extends  React.Component {
 
  render(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact  path='/' component={Home}/>
      <Route  path='/contact' component={Contact}/>
      <Route  path='/profile' component={Profile}/>
      
    </BrowserRouter>
  );
  }
}

export default App;
