import React, { useEffect, useState } from 'react';
import './Modal.scss';
import ReactModal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import Star from 'card/Star';

function Modal(props) {
  const { handleSave } = props;
  const [fakeStar, setFakeStar] = useState(props.data.stars);
  const saveBtn = (characterId) => {
    handleSave(characterId, fakeStar);
    props.closeModal();
  };
  useEffect(() => {
    setFakeStar(props.data.stars);
  }, [props.data.stars]);
  return (
    <div>
      <ReactModal
        ariaHideApp={false}
        isOpen={props.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={props.closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <button className="closeBtn" onClick={props.closeModal}>
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
        <Star fakeStar={fakeStar} setFakeStar={setFakeStar} />
        <div className="saveBtn">
          <button onClick={() => saveBtn(props.data.id)} className="save">
            Save
          </button>
        </div>
      </ReactModal>
    </div>
  );
}

export default Modal;
