import React, { useState } from 'react';
import { Wrapper, Input } from './style';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { data } from '../mock';
export const Navbar = () => {
  const [movie, setMovies] = useContext(MovieContext);

  const onChange = (e) => {
    console.log(e.target.value);
    setMovies(
      data.filter((v) => {
        return v.name.toLowerCase().includes(e.target.value);
      })
    );
  };

  return (
    <Wrapper>
      <h3>Movie star</h3>
      {movie.length}
      <Input type="search" onChange={onChange} placeholder="search" />
    </Wrapper>
  );
};
