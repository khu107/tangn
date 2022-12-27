import { createContext, useState } from 'react';
import { data } from '../mock';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movie, setMovie] = useState(data);
  return (
    <MovieContext.Provider value={[movie, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
