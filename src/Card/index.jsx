import React from 'react';
import { CardContainer, Img, CardWrapper } from './style';
function Card({ name, id, published, author, rasm }) {
  return (
    <CardWrapper>
      <CardContainer>
        <Img src={rasm} />
        <h3>{name}</h3>
        <p>{published}</p>
        <p>{author}</p>
        <div>
          <button>edit</button>
          <button>delete</button>
        </div>
      </CardContainer>
    </CardWrapper>
  );
}

export default Card;
