import './App.css';
import Conditions from './components/Conditions.js'
import DCs from './components/DCs.js'
import Exhaustion from './components/Exhaustion.js'
import Obscurity from './components/Obscurity.js'

function App() {
  return (
    <div className="app-container">
      <header className="page-section header">DM Screen</header>
      <main className="page-section screen">
        <Conditions />
        <DCs />
        <Exhaustion />
        <Obscurity />
      </main>
      <footer className="page-section footer">Copyright 2021</footer>
    </div>
  );
}

export default App;
