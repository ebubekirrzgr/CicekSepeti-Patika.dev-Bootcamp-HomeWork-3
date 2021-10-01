import React from 'react';
import './Modal.scss';
import ReactModal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import Star from 'card/Star';

function Modal(props) {
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
        <Star popi={props.data?.stars} />
        <div className="saveBtn">
          <button className="save">Save</button>
        </div>
      </ReactModal>
    </div>
  );
}

export default Modal;
