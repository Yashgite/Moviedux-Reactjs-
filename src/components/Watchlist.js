import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

//renders the movies that have been added to the watchlist by iterating
//through the watchlist array and displaying the corresponding movie cards.
export default function Watchlist({ watchlist, movies, toggleWatchlist }) {
  return (
    //watchlist.map() => using map function we iterate on each movie
    //movies.find()=> it looks for a movie object in movies array where matched with movies id with watchlist id
    // for each movie id it return MovieCard Component
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}
