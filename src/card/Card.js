import React from 'react';
import './Card.scss';
import axios from 'axios';
import Modal from 'modal/Modal';
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters: [], showModal: false, modalData: {} };
  }
  componentDidMount() {
    axios
      .get('https://61563acee039a0001725a94b.mockapi.io/himym/characters')
      .then((response) => {
        this.setState({ characters: response.data });
      });
  }
  openModal = (data) => {
    this.setState({ showModal: !this.state.showModal, modalData: data });
  };
  closeModal = () => {
    this.setState({ showModal: false, modalData: {} });
  };

  render() {
    return (
      <div className="card-list">
        {this.state.characters.map((data) => (
          <div key={data.id} className="card">
            <div className="character-info">
              <h2>{data.name}</h2>
            </div>
            <div className="card-img">
              <img src={data.img} alt={data.name} />
            </div>
            <div className="card-buttons">
              <button onClick={() => this.openModal(data)} className="edit">
                Edit
              </button>
              <button className="delete">Delete</button>
            </div>
          </div>
        ))}
        <Modal
          showModal={this.state.showModal}
          data={this.state.modalData}
          toggleModal={this.closeModal}
        />
      </div>
    );
  }
}

export default Card;
