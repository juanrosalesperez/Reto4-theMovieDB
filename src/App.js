import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store";
import "./App.css";

import Navbar from "./components/Navbar";

import LandingMovies from "./components/LandingMovies";
import LandingSeries from "./components/LandingSeries";
import Movie from "./components/Movie";
import Serie from "./components/Serie";

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
            <Route exact path="/series" component={LandingSeries} />
            <Route exact path="/serie/:id" component={Serie} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
