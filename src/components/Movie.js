import React, { Component } from "react";
import { connect } from "react-redux";
import imgDefault from "./../img/imgDefault.jpg";
import { fetchMovie } from "../actions/searchActions";
import "./info.scss";
import Moment from "react-moment";

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }
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

    // Funcion para conseguir el genero
    let genre = movie.genres.map((x) => <li key={x.id}>{x.name}</li>);

    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img className="img thumbnail" src={urlimg} alt="Poster" />
          </div>
          <div className="col-md-8">
            <h1 className="mb-4 title">{movie.title}</h1>
            <h4 className="mb-4">{movie.original_title}</h4>
            <div>
              <div className="date">
                <strong>Fecha de estreno:</strong> {dataDefault}
              </div>
              <div className="vote">
                <strong>
                  <i class="fa fa-heart" aria-hidden="true" />
                </strong>{" "}
                {movie.vote_average}
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
              <h3>Sipnosis </h3>
              {movie.overview}
            </div>
          </div>
        </div>
      </div>
    );

    return <div>{movieInfo}</div>;
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
});

export default connect(
  mapStateToProps,
  { fetchMovie }
)(Movie);
