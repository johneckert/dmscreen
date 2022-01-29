import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal" onClick={props.clickHandler}>
      <header>
        <h1>{props.title}</h1>
      </header>
      <section>{props.children}</section>
    </div>
  );
};

export default Modal;
