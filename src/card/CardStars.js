import React from 'react';
import './Star.scss';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function CardStars({ fakeStar }) {
  const renderStars = (fakeStar) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < fakeStar) {
        stars.push(AiFillStar);
      } else {
        stars.push(AiOutlineStar);
      }
    }
    return stars.map((Component, index) => <Component key={index} />);
  };
  return <div className="stars">{renderStars(fakeStar)}</div>;
}

export default CardStars;
