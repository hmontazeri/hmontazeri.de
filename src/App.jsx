import React, { Component } from 'react';
import 'typicons.font/src/font/typicons.css';
import Picture from './components/Picture';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Picture />
        <About />
      </div>
    );
  }
}

export default App;
