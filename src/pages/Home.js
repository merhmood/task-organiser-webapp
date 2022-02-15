import React from "react";

import Modal from "../components/Modal";
import Form from "../components/Form";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [modal, toggleModal] = React.useState(false);

  if (localStorage.getItem("register") !== "false") {
    return <Navigate to="/account" />;
  }

  return (
    <div className="home">
      <h2>Welcome to Project Marathon Task Scheduler Web Application</h2>
      <div className="button-container">
        <button onClick={() => toggleModal((state) => !state)}>Join</button>
      </div>
      {modal && (
        <Modal>
          <div className="modal-wrapper">
            <div className="button-wrapper">
              <button onClick={() => toggleModal((state) => !state)}>X</button>
            </div>
            <Form />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;
