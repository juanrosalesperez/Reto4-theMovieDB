import React, { Component } from "react";
import { connect } from "react-redux";
import imgDefault from "./../img/imgDefault.jpg";
import { fetchSerie } from "../actions/searchActions";
import "./info.scss";
import Moment from "react-moment";

export class Serie extends Component {
  componentDidMount() {
    this.props.fetchSerie(this.props.match.params.id);
  }
  render() {
    const { serie } = this.props;

    // Funcion para conseguir el imagen y si no  poner imagen por defecto
    let urlimg = "";
    if (serie.poster_path) {
      urlimg = `http://image.tmdb.org/t/p/w220_and_h330_face${serie.poster_path}`;
    } else if (serie.backdrop_path) {
      urlimg = `http://image.tmdb.org/t/p/w220_and_h330_face${serie.backdrop_path}`;
    } else if (!serie.backdrop_path && !serie.poster_path) {
      urlimg = imgDefault;
    }

    // Funcion para poner fecha por defecto si no tiene

    let dataDefault = "DD-MM-YYYY";
    if (serie.first_air_date) {
      dataDefault = <Moment format="DD/MM/YYYY">{serie.first_air_date}</Moment>;
    }

    // Funcion para conseguir el genero
    let genre = serie.genres.map((x) => <li key={x.id}>{x.name}</li>);

    let serieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img className="img thumbnail" src={urlimg} alt="Poster" />
          </div>
          <div className="col-md-8">
            <h1 className="mb-4 title">{serie.name}</h1>
            <h4 className="mb-4">{serie.original_name}</h4>
            <div>
              <div className="date">
                <strong>Fecha de estreno:</strong> {dataDefault}
              </div>
              <div className="vote">
                <strong>
                  <i class="fa fa-heart" aria-hidden="true" />
                </strong>{" "}
                {serie.vote_average}
              </div>
              <div className="genre">
                <strong>Genero:</strong>
                <div> {genre}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card card-body my-5 text-light">
            <div className="col-md-12">
              <h3>Sobre la pelicula </h3>
              {serie.overview}
            </div>
          </div>
        </div>
      </div>
    );

    return <div>{serieInfo}</div>;
  }
}

const mapStateToProps = (state) => ({
  serie: state.series.serie,
});

export default connect(mapStateToProps, { fetchSerie })(Serie);
