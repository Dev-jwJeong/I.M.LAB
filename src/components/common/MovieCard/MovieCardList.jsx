import React from 'react';
import LoadingMovieCard from './LoadingMovieCard';
import MovieCard from './MovieCard';

const MovieCardList = ({ MovieListValue }) => {
  const MovieList = MovieListValue;

  return (
    <>
      {MovieList ? (
        <>
          {MovieList.map(res => (
            <MovieCard CardData={res} key={`${res.id}-MovieCard`} />
          ))}
        </>
      ) : (
        <LoadingMovieCard />
      )}
    </>
  );
};

export default MovieCardList;
