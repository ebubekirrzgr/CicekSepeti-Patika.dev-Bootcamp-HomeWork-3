import React from 'react';
import './Star.scss';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function Star({ popi }) {
  const renderStars = (popi) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < popi) {
        stars.push(AiFillStar);
      } else {
        stars.push(AiOutlineStar);
      }
    }
    return stars.map((Component, index) => <Component key={index} />);
  };
  return <div className="stars">{renderStars(popi)}</div>;
}

export default Star;
