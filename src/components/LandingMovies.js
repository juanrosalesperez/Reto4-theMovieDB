import React, { Component } from "react";
import SearchMovie from "./SearchMovie";
import MoviesContainer from "./MoviesContainer";

//Cargamos la landing de las peliculas
export class LandingMovies extends Component {
  render() {
    return (
      <div className="container">
        <SearchMovie />
        <MoviesContainer />
      </div>
    );
  }
}

export default LandingMovies;
