import "./ComponentTile.css";
import dragon from "./tileImages/dragon.png";
//TODO: dynamiclly load images

function ComponentTile(props) {

  return (
    <section className="component">
      <header>{props.title}</header>
      <img src={dragon} alt={props.imageName} />
    </section>
  );
}

export default ComponentTile;
