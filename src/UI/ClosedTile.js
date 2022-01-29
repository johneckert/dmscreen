import "./ComponentTile.css";
//TODO: dynamiclly load images

function ClosedTile(props) {

  return (
      <section className="component" onClick={props.clickHandler}>
        <header>{props.title}</header>
        <img src={props.image} alt={props.imageName} />
      </section>
  );
}

export default ClosedTile;
