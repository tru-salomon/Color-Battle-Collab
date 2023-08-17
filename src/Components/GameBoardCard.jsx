import "../Components/GameBoardCard.css"

function GameBoardCard({player, player2}){


return(<>
<div className="players">
        <section className='Player'>
          <h2>{player.name}</h2>
          <h3>Hitpoints: {player.hitpoints}</h3>
          <button> Attack! </button>
        </section>
        
       
        <section className='Player2'>
          <h2>{player2.name}</h2>
          <h3>Hitpoints: {player2.hitpoints}</h3>
          <button> Attack! </button>
        </section>

        </div>
</>)
}

export default GameBoardCard