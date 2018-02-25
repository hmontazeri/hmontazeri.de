import React, { Component } from 'react';
import './App.css';
import Picture from './components/Picture';
import About from './components/About';

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
