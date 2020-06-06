import { hot } from "react-hot-loader";
import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Tracker from "./pages/Tracker"
import About from "./pages/About";
import "./App.css";

// TODO Implement a theme selector coolors.com
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={About} />
          <Route path="/tracker" component={Tracker} />
        </div>
      </Router>
    </>
  );
}

export default hot(module)(App);
