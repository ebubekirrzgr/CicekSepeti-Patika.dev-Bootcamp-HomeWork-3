import React from 'react';
import './Card.scss';
import axios from 'axios';
import Modal from 'modal/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    this.setState({ showModal: true, modalData: data });
  };
  closeModal = () => {
    this.setState({ showModal: false, modalData: {} });
  };
  handleSave = (id, starCount) => {
    const filteredCharacter = this.state.characters.filter(
      (item) => item.id !== id
    );
    const editedCharacter = { ...this.state.modalData, stars: starCount };
    const newData = [...filteredCharacter, editedCharacter];
    this.setState({ characters: newData, showModal: false });
    toast('😎  Wow data edited!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  render() {
    return (
      <div className="card-list">
        {this.state.characters.map((data, index) => (
          <div key={index} className="card">
            <div className="character-info">
              <h2>{data.name}</h2>
            </div>
            <div className="card-img">
              <img src={data.img} alt={data.name} />
            </div>
            <div className="card-buttons">
              <button
                onClick={() => {
                  this.openModal(data);
                }}
                className="edit"
              >
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
          handleSave={this.handleSave}
        />
      </div>
    );
  }
}

export default Card;
