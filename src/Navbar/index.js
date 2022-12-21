import React from 'react';
import { Wrapper } from './style';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
export const Navbar = () => {
  const [movie] = useContext(MovieContext);

  return (
    <Wrapper>
      <h3>Movie star</h3>
      <h3>Movie Count: {movie.length} </h3>
    </Wrapper>
  );
};
