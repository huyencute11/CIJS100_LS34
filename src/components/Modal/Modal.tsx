import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ productDetail, hideMode }) => (
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hideMode}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p>
          {productDetail.name}
        </p>
      </div>
    </div>
  </>
);

export default Modal;
