import React from 'react';
import './Card.scss';
import barney from 'assets/barney_stinson.jpg';

class Card extends React.Component {
  render() {
    return (
      <div className="card-list">
        <div className="card">
          <div className="character-info">
            <h2>Barney Stinson</h2>
            <span>Neil Patrick Harris</span>
          </div>
          <div className="card-img">
            <img src={barney} alt="barney_stinson" />
          </div>
          <ul className="stars">
            <li>
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
