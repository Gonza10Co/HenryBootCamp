import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions";
import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    //aca lo cambio
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          {this.props.movies.map((movie) => (
            <li key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
              <button
                onClick={() => this.props.addMovieFavorite(movie)}
                disabled={this.props.favs.find(
                  ({ imdbID }) => imdbID === movie.imdbID
                )}
              >
                FAV
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesLoaded,
  favs: state.moviesFavourites,
});

const mapDispatchToProps = {
  addMovieFavorite,
  getMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

// const mapDispatchToProps = (dispatch) => ({
//   addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
//   getMovies: (title) => dispatch(getMovies(title)),
// });