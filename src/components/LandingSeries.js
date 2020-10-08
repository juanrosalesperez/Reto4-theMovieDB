import React, { Component } from "react";
import SearchSeries from "./SearchSeries";
import SeriesContainer from "./SeriesContainer";

//Cargamos la landing de las series
export class LandingSeries extends Component {
  render() {
    return (
      <div className="container">
        <SearchSeries />
        <SeriesContainer />
      </div>
    );
  }
}

export default LandingSeries;
