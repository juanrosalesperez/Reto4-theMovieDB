import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgDefault from "./../img/imgDefault.jpg";
import "./cards.scss";
import Moment from "react-moment";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    // Funcion para conseguir el imagen y si no  poner imagen por defecto
    let urlimg = "";
    if (movie.poster_path) {
      urlimg = `http://image.tmdb.org/t/p/w220_and_h330_face${
        movie.poster_path
      }`;
    } else if (movie.backdrop_path) {
      urlimg = `http://image.tmdb.org/t/p/w220_and_h330_face${
        movie.backdrop_path
      }`;
    } else if (!movie.backdrop_path && !movie.poster_path) {
      urlimg = imgDefault;
    }

    // Funcion para poner fecha por defecto si no tiene
    let dataDefault = "DD-MM-YYYY";
    if (movie.release_date) {
      dataDefault = <Moment format="DD/MM/YYYY">{movie.release_date}</Moment>;
    }

    // Funcion para poner sipnosis por defecto si no tiene
    let overview = "Sin datos conocidos";
    if (movie.overview) {
      overview = movie.overview;
    }

    return (
      <div className="row">
        <div className="card-trasparent card">
          <div className="wrapper">
            <img src={urlimg} alt="Movie Cover" />
            <div className="header">
              <div className="title">{movie.title}</div>
            </div>
            <div className="data">
              <div className="content">
                <span className="data-vote">
                  <i class="fa fa-heart" aria-hidden="true" />
                  <span>{movie.vote_average}</span>
                </span>
                <span className="data-vote">Fecha: {dataDefault}</span>
                <div className="overview">{overview}</div>
                <Link className="button" to={"/movie/" + movie.id}>
                  Más Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
