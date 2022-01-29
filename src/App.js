import "./App.css";
import ComponentTile from "./UI/ComponentTile.js";

function App() {
  const tiles = [
    { title: "Conditions", imageName: "dragon", position: 0 },
    { title: "PlayerInfo", imageName: "dragon", position: 5 },
    { title: "DCs", imageName: "dragon", position: 2 },
    { title: "Exhaustion", imageName: "dragon", position: 1 },
    { title: "Obscurity", imageName: "dragon", postion: 4 },
    { title: "Random Name Generator", imageName: "dragon", position: 8 },
    { title: "PlayerInfo", imageName: "dragon", position: 6 },
    { title: "Spell Lookup", imageName: "dragon", position: 9 },
    { title: "Spell Slots", imageName: "dragon", position: 7 },
    { title: "TBD", imageName: "dragon", postion: 3 },
  ];

  const renderTiles = (userTiles) => {
    userTiles.sort((a,b) => a.position - b.position)
    return userTiles.map((x, i) => <ComponentTile title={x.title} key={i} imageName={x.imageName}/>);
  }
  
  console.log(renderTiles(tiles))
  return (
    <div className="app-container">
      <header className="page-section header">DM Screen</header>
      <main className="page-section screen">{renderTiles(tiles)}</main>
      <footer className="page-section footer">Copyright 2021</footer>
    </div>
  );
}

export default App;
