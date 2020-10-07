import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgDefault from "./../img/imgDefault.jpg";
import "./cards.scss";
import Moment from "react-moment";

export class SerieCard extends Component {
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
    // Funcion para poner sipnosis por defecto si no tiene
    let overview = "Sin datos conocidos";
    if (serie.overview) {
      overview = serie.overview;
    }

    return (
      <div className="row">
        <div className="card-trasparent card">
          <div className="wrapper">
            <img src={urlimg} alt="Movie Cover" />
            <div className="header">
              <div className="title">{serie.name}</div>
            </div>
            <div className="data">
              <div className="content">
                <span className="data-vote">
                  <i class="fa fa-heart" aria-hidden="true" />
                  <span>{serie.vote_average}</span>
                </span>
                <span className="data-vote">Fecha: {dataDefault}</span>
                <div className="overview">{overview}</div>
                <Link className="button" to={"/serie/" + serie.id}>
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

export default SerieCard;
