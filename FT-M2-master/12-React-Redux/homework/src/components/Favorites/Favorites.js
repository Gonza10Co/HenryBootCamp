import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          {this.props.favs.map((movie) => (
            <li key={movie.imdbID}>
              {movie.Title}
              <button onClick={() => this.props.removeMovieFavorite(movie.imdbID)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favs: state.moviesFavourites,
});

const mapDispatchToProps = {
  removeMovieFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
