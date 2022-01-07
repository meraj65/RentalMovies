import React, { Component } from "react";
import { getMovies } from "../services/movieService";
// import Heart from "./heart";
import Pagination from "./Pagination";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    mvsPrPage: 4,
    currentPage: 1,
  };
  handleDelet = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  activeFunc = (clkdPageNo) => {
    console.log('clkd page',clkdPageNo)
    this.setState({ currentPage: clkdPageNo });
  };

  render() {
    const { length: count } = this.state.movies;
    console.log('curent pageeeee',this.state.currentPage)
    const indexFrom = (this.state.currentPage - 1) * this.state.mvsPrPage;
    console.log('index....',indexFrom);
    const remArrOfMvs = _.slice(this.state.movies, indexFrom);
    console.log('rem arr', remArrOfMvs);
    const showTheMovies = _.take(remArrOfMvs, this.state.mvsPrPage);
    console.log('taking from',showTheMovies);

    if (count === 0) return <p>There are no movies </p>;
    return (
      <React.Fragment>
        <p className="text-center bg-danger mb-0 p-2">
          Showing {count} Movies in Table.
        </p>
        <table className="table table-hover  ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {showTheMovies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title} </td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  {/* <p onClick="">{movie.liked ? "liked" : "disliked"}</p> */}
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelet(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalMvs={this.state.movies.length}
          mvsPrPage={this.state.mvsPrPage}
          currentPage={this.state.currentPage}
          pageChangeFunc={this.activeFunc}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
