import {hot} from 'react-hot-loader'
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import About from './pages/About'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </>
  );
}

export default hot(module)(App);