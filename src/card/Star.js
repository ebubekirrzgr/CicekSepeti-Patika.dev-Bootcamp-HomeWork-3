import React, { useState } from 'react';
import './Star.scss';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function Star({
  popi,
  handleStars,
  handleSave,
  characterId,
  saveBtn,
  setFakeStar,
  fakeStar,
}) {
  const handleClick = (starCount) => {
    setFakeStar(starCount);
    console.log(fakeStar);
    console.log('ercu');
  };

  const renderStars = (fakeStar) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < fakeStar) {
        stars.push(AiFillStar);
      } else {
        stars.push(AiOutlineStar);
      }
    }
    return stars.map((Component, index) => (
      <Component onClick={() => handleClick(index + 1)} key={index} />
    ));
  };
  return <div className="stars">{renderStars(fakeStar)}</div>;
}

export default Star;
