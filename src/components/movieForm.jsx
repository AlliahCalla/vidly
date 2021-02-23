import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie } from "./../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: null,
      rate: null,
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().min(0).max(500),
    rate: Joi.number().min(0).max(10),
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const data = { ...this.state.data };
    const movie = getMovie(id);
    if (id != "new") {
      data.title = movie.title;
      data.genre = movie.genre.name;
      data.numberInStock = movie.numberInStock;
      data.rate = movie.dailyRentalRate;
    }

    this.setState({ data });
  }

  doSubmit = () => {
    //Call the server

    console.log("Submitted");
    this.props.history.push("/movies");
    console.log(this.props.history);
  };
  render() {
    const genres = getGenres();
    const options = [""];
    genres.forEach((option) => {
      options.push(option.name);
    });

    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}

          {this.renderSelect("genre", "Genre", options)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
