import { FaXmark } from "react-icons/fa6";

import "./Modal.scss";

const Modal = ({ title, hide, desc, children }) => {
  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <div className="modal-title">
              <h1>{title}</h1>
              <div onClick={hide} className="close-button">
                <FaXmark />
              </div>
            </div>
            <div className="modal-desc">
              <p>{desc}</p>
            </div>
          </div>

          <div className="divider"></div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
