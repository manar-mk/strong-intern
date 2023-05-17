import React from 'react';
import s from './Modal.module.css';
function Modal({ isOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={s.modalOverlay}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3jT_q7dt-cM"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Modal;
