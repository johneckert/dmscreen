import "./Modal.css";

const BackDrop = (props) => {
  return (
    <div className="overlay-background" onClick={props.clickHandler}></div>
  );
};

export default BackDrop;