import React, { useContext } from 'react'
import { AppContext } from '../App';

const Gameover = () => {
    const { gameOver, correctword, setgameOver, curAttempt } = useContext(AppContext);
    return (
        <div className='gameOver'>
            <h3>
                {gameOver.gussedWord ? "You guessed it correct!!" : "You failed!!"}
            </h3>
            <h1>
                Correct Word : {correctword.toUpperCase()}
            </h1>
            {gameOver.gussedWord && (<h3>You guessed in {curAttempt.attempt} attempts </h3>)}
        </div>
    )
}

export default Gameover;