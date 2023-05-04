import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setVote }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setVote(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setVote(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">You have voted for a candidate</div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setVote(false)}>
                {" "}
                Delete
              </button>
              <button className="cancelBtn" onClick={() => setVote(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
