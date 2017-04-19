/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, { Component } from 'react';
import '../node_modules/prismjs/prism.js'
import '../node_modules/prismjs/themes/prism.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './components/pages/Home';
import Typography from './components/pages/Typography';
import GetStarted from './components/pages/GetStarted';
import Input from './components/pages/forms/Input';
import Button from './components/pages/forms/Button';
import Controls from './components/pages/forms/Controls';

import SideMenu from './components/SideMenu';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='bs-styleguide'>
          <Header/>
          <div className='bs-styleguide__body'>
            <SideMenu/>
            <div className='bs-styleguide__content'>
              <Route path="/" exact component={Home}/>
              <Route path="/getting-started" component={GetStarted}/>
              <Route path="/typography" component={Typography}/>
              <Route path="/input" component={Input}/>
              <Route path="/button" component={Button}/>
              <Route path="/controls" component={Controls}/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
