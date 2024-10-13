import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  //it will call whenever we try to seacrh and update the value of seacrh state.
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //update the genre and
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearch = (movie, search) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;

      case "Good":
        return movie.rating >= 8;

      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;

      case "Bad":
        return movie.rating < 5;

      default:
        break;
    }
  };

  //Filters movies based on the search query entered by the user.
  //Filters movies by the selected genre from the drop down.
  //Filters movies by rating categories.
  const filterMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matchesSearch(movie, search) &&
      matchesRating(movie, rating)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Movie...."
        value={search}
        onChange={handleSearch}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genres</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenre}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Fantasy</option>
            <option>Drama</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRating}
          >
            <option>All</option>
            <option>Good</option>
            <option>Bad</option>
            <option>Ok</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filterMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}
