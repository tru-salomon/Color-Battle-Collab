import './App.css';
import Header from './Components/Header.jsx';
import GameBoardCard from './Components/GameBoardCard.jsx';


function App() {

  return (
    <>
      <header className="App-header">
        <Header />
      </header>
      <body className='board-container'>
        < GameBoardCard />
      </body>
    </>
  );
}

export default App;
