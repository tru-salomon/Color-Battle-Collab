import './App.css';
import Header from './Components/Header.jsx';
import GameBoardCard from './Components/GameBoardCard.jsx';
function App() {

  const player1 = {
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
      <body>
     < GameBoardCard
      player={player1}
      player2={player2} />
      </body>
    </>
  );
}

export default App;
