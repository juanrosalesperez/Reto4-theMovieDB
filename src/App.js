import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store";
import "./App.css";

import Navbar from "./components/Navbar";

import LandingMovies from "./components/LandingMovies";
import Movie from "./components/Movie";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={LandingMovies} />
            <Route exact path="/movies" component={LandingMovies} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
