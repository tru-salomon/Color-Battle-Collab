import { useState } from "react"
import "../Components/GameBoardCard.css"

function GameBoardCard() {

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


  const [dice, setDice] = useState(0);

  const Attacking1 = () => {
    setDice(Math.floor(Math.random() * (50 - 1) + 1))
    player2.hitpoints = player2.hitpoints - dice

  }

  const Attacking2 = () => {
    setDice(Math.floor(Math.random() * (50 - 1) + 1))
    player1.hitpoints = player1.hitpoints - dice
  }

  return (<>
    <h3 className="dice">{dice}</h3>
    <br />
    <br />

    <div className="players">
      <section className='player1'>
        <h2>{player1.name}</h2>
        <h3>Hitpoints: {player1.hitpoints}</h3>
        <button onClick={Attacking1}> Attack! </button>
      </section>


      <section className='player2'>
        <h2>{player2.name}</h2>
        <h3>Hitpoints: {player2.hitpoints}</h3>
        <button onClick={Attacking2}> Attack! </button>
      </section>

    </div>
  </>)
}

export default GameBoardCard