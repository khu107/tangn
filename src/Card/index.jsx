import React, { useContext, useState } from 'react';
import { CardContainer, Img, CardWrapper, Btn } from './style';
import { MovieContext } from '../context/MovieContext';

function Card({ name, id, published, author, rasm }) {
  const [movie, setMovie] = useContext(MovieContext);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    name: name,
    published: published,
    author: author,
    rasm: rasm,
  });

  return (
    <CardWrapper>
      <CardContainer>
        <Img src={rasm} />
        {show ? (
          <input
            style={{
              marginBottom: '5px',
              marginTop: '5px',
              marginLeft: '5px',
              background: 'white',
            }}
            value={data.name}
            onChange={(e) => {
              setData({
                ...data,
                name: e.target.value,
              });
            }}
            type="text"
          />
        ) : (
          <h3>{name}</h3>
        )}
        {show ? (
          <input
            style={{
              marginBottom: '5px',
              marginTop: '5px',
              marginLeft: '5px',
              background: 'white',
            }}
            value={data.published}
            onChange={(e) => {
              setData({
                ...data,
                published: e.target.value,
              });
            }}
            type="text"
          />
        ) : (
          <p>{published}</p>
        )}
        {show ? (
          <input
            style={{
              marginBottom: '5px',
              marginTop: '5px',
              marginLeft: '5px',
              background: 'white',
            }}
            value={data.author}
            onChange={(e) => {
              setData({
                ...data,
                author: e.target.value,
              });
            }}
            type="text"
          />
        ) : (
          <p>{author}</p>
        )}

        <div>
          {show ? (
            <Btn
              onClick={() => {
                setShow(false);
                setMovie(
                  movie.map((v) => {
                    return v.id === id ? data : v;
                  })
                );
              }}
            >
              save
            </Btn>
          ) : (
            <Btn onClick={() => setShow(true)}>edit</Btn>
          )}

          <Btn
            onClick={() => {
              setMovie(movie.filter((v) => v.id !== id));
            }}
          >
            delete
          </Btn>
        </div>
      </CardContainer>
    </CardWrapper>
  );
}

export default Card;
