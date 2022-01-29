
import { Fragment } from "react";
import { createPortal } from "react-dom";
import React from "react";
import Modal from './Modal';
import BackDrop from './BackDrop';

import './Modal.css';

const ModalWrapper = (props) => {
    return (
      <Fragment>
        {createPortal(
          <Modal title={props.title} clickHandler={props.clickHandler} />,
          document.getElementById("overlay-root")
        )}
        {createPortal(
          <BackDrop clickHandler={props.clickHandler} />,
          document.getElementById("backdrop-root")
        )}
      </Fragment>
    );
}

export default ModalWrapper;