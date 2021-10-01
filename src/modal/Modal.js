import React, { useState } from 'react';
import './Modal.scss';
import ReactModal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import Star from 'card/Star';

function Modal(props) {
  const { handleSave } = props;
  console.log(props.data);
  const [fakeStar, setFakeStar] = useState(props.data.stars);
  const saveBtn = (characterId, fakeStar) => {
    handleSave(characterId, fakeStar);
  };
  const handleStars = (id) => {
    return id;
  };
  return (
    <div>
      <ReactModal
        ariaHideApp={false}
        isOpen={props.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={props.toggleModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <button className="closeBtn" onClick={props.toggleModal}>
          <FaWindowClose />
        </button>
        <br />
        <input
          readOnly
          type="text"
          className="characterName"
          defaultValue={props.data?.name}
        />
        <br />
        <Star
          characterId={props.data.id}
          handleSave={handleSave}
          handleStars={handleStars}
          popi={props.data?.stars}
          saveBtn={saveBtn}
          fakeStar={fakeStar}
          setFakeStar={setFakeStar}
        />
        <div className="saveBtn">
          <button onClick={saveBtn} className="save">
            Save
          </button>
        </div>
      </ReactModal>
    </div>
  );
}

export default Modal;
