import React, { Component } from "react";
import { connect } from "react-redux";
import { searchSerie, fetchSeries } from "../actions";

export class SearchFormSeries extends Component {
  onChange = (e) => {
    this.props.searchSerie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchSeries(this.props.text);
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Busca tu serie...
          </h1>
          <form id="SearchFormSeries" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Busca tu serie..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-warning btn-bg mt-3">
              Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.series.text,
});

export default connect(mapStateToProps, { searchSerie, fetchSeries })(
  SearchFormSeries
);
