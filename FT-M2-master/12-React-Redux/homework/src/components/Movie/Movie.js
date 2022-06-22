import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovieDetail(id);
  }

  componentWillUnmount() {
    this.props.getMovieDetail();
  }

  render() {
    return (
      <div className="movie-detail">
        Detalle de la pelicula
        {this.props.movies === undefined ? (
          <>
            <h2>Cargando...</h2>
          </>
        ) : this.props.movies === null ? (
          <>
            <h2>No se encontro el titulo</h2>
          </>
        ) : (
          <>
            <h2>{`Titulo: ${this.props.movies.Title}`}</h2>
            <img src={this.props.movies.Poster} alt="Img not found" />
            <h4>{`Año: ${this.props.movies.Year}`}</h4>
            <h4>{`Duración: ${this.props.movies.Runtime}`}</h4>
            <h4>{`Elenco: ${this.props.movies.Actors}`}</h4>
            <h4>{`Director: ${this.props.movies.Director}`}</h4>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ movies: state.movieDetail });

const mapDispatchToProps = { getMovieDetail };

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
