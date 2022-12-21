import React, { useContext } from 'react';
import Card from '../Card';
import { MovieContext } from '../context/MovieContext';
import { Wrapper } from './style';

function Moviebody() {
  const [movie, setMovie] = useContext(MovieContext);
  return (
    <Wrapper>
      {movie.map((v) => {
        return <Card {...v} />;
      })}
    </Wrapper>
  );
}

export default Moviebody;
