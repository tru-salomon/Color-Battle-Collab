import './App.css';
import Header from './components/Header.jsx';

function App() {

  const layer1 = {
    name: "Me",
    color: "orchid",
    hitpoints: 100,
    turn: true,
  };

  const player2 = {
    name: "You",
    color: "cornflowerblue",
    hitpoints: 100,
    turn: false,
  };

  let dice = 0;

  let player1Turn = true;


  return (
    <>
      <header className="App-header">
           <Header />
      </header>
      <>
        <section className='Player'>
          <h2>{player.name}</h2>
          <h3>Hitpoints: {player.hitpoints}</h3>
          <button> Attack! </button>
        </section>
      </>
    </>
  );
}

export default App;
