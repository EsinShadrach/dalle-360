import React, { useState } from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';

Modal.setAppElement('#root');

const PromptModal = ({ isOpen, title, message, defaultValue, onSubmit, onCancel, placeholders }) => {
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCancel} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
        </div>
        <div className="modal-body">
          <p className="modal-message">{message}</p>
          <form onSubmit={handleSubmit}>
            <input
              className="modal-input"
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={placeholders}
            />
            <div className="modal-buttons">
              <button
                className={classNames('modal-button', 'modal-submit')}
                type="submit"
              >
                Submit
              </button>
              <button
                className={classNames('modal-button', 'modal-cancel')}
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default PromptModal;


