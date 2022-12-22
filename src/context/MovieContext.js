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
      rasm: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/3r5K/image/SbJ4T7kRoUnAlDKdLVF_zEUIU94.jpg',
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
    {
      rasm: 'https://variety.com/wp-content/uploads/2022/12/Screen-Shot-2022-12-20-at-11.26.22-AM.png?w=681&h=383&crop=1',
      id: 5,
      name: 'Terminator',
      published: 1984,
      author: 'Gale Anne Hurd',
    },
    {
      rasm: 'https://m.media-amazon.com/images/I/51kfFS5-fnL._AC_SY780_.jpg',
      id: 6,
      name: 'lord of the rings',
      published: 1954,
      author: 'J. R. R. Tolkien',
    },
    {
      rasm: 'https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_FMjpg_UX1000_.jpg',
      id: 7,
      name: 'vampire diaries',
      published: 1991,
      author: 'L. J. Smith',
    },
    {
      rasm: 'https://ts2.mm.bing.net/th?q=Sumerki%205%20o%20zbek%20tilida%20skachat',
      id: 8,
      name: 'Aumerki',
      published: 2009,
      author: 'Heyne Verlag',
    },
  ]);
  return (
    <MovieContext.Provider value={[movie, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
