import React, { useContext } from 'react';
import Card from '../Card';
import { MovieContext } from '../context/MovieContext';
import { Wrapper } from './style';

function Moviebody() {
  const [movie, setMovie] = useContext(MovieContext);
  return (
    <Wrapper>
      {movie.map((v, i) => {
        return <Card key={i} {...v} />;
      })}
    </Wrapper>
  );
}

export default Moviebody;
