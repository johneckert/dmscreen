import { useState, Fragment } from 'react';
import ClosedTile from './ClosedTile'
import ModalWrapper from './ModalWrapper';
import "./ComponentTile.css";
import dragon from "./tileImages/dragon.png";
//TODO: dynamiclly load images

function ComponentTile(props) {
  const [isActive, setIsActive] = useState(false);
  
  const clickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <Fragment>
      {isActive ? (
        <ModalWrapper title={props.title} clickHandler={clickHandler} />
      ) : (
        <ClosedTile title={props.title} image={dragon} imageName={'dragon'} clickHandler={clickHandler}/>
      )}
    </Fragment>
  );
}

export default ComponentTile;
