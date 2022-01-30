import Conditions from '../Components/Conditions'
import DCs from "../Components/DCs";
import Exhaustion from "../Components/Exhaustion";
import Obscurity from "../Components/Obscurity";
import PlayerInfo from "../Components/PlayerInfo";

import "./Modal.css";

const Modal = (props) => {
    const content = () => {
        switch (props.title) {
            case 'Conditions':
                return <Conditions />
            case 'DCs':
                return <DCs />
            case 'Exhaustion':
                return <Exhaustion/>
            case 'Obscurity':
                return <Obscurity/>
            case 'PlayerInfo':
                return <PlayerInfo/>

            default: 
                return <div />
        }
    }
  return (
    <div className="modal" onClick={props.clickHandler}>
      <header>
        <h1>{props.title}</h1>
      </header>
      <section>{content()}</section>
    </div>
  );
};

export default Modal;
