import { createContext, useState } from 'react';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movie, setMovie] = useState([
    {
      rasm: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
      id: 1,
      name: 'Harry Poter',
      published: 1999,
      author: 'J. K. Rowling',
    },
    {
      rasm: 'https://assets.reedpopcdn.com/Spidey-PC-SIte.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/Spidey-PC-SIte.jpg',
      id: 2,
      name: 'Avatar',
      published: 2009,
      author: 'Stephen Lang',
    },
    {
      rasm: 'http://hjchelmets.kr/wp-content/uploads/2020/06/HJC-CAPTAINAMERICA-PR-main-Fs-1030x666-1.jpg',
      id: 3,
      name: 'Capitan America',
      published: 1968,
      author: 'Steve Roges',
    },
    {
      rasm: 'https://assets.reedpopcdn.com/Spidey-PC-SIte.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/Spidey-PC-SIte.jpg',
      id: 4,
      name: 'Spider man',
      published: 2002,
      author: 'Peter Parker',
    },
  ]);
  return (
    <MovieContext.Provider value={[movie, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
