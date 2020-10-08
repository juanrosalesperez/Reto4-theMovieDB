import React, { Component } from "react";

import { connect } from "react-redux";

import SerieCard from "./SerieCard";

export class SeriesContainer extends Component {
  render() {
    const { series } = this.props;

    let content = "";
    content =
      series.page === 1
        ? series.results.map((serie, index) => (
            <SerieCard key={index} serie={serie} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

//Extraemos los datos
const mapStateToProps = (state) => ({
  series: state.series.series,
});

export default connect(mapStateToProps)(SeriesContainer);
