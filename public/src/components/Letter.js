import React, { useContext, useEffect } from 'react';
// import Playboard from './Playboard';
import { AppContext } from '../App';

const Letter = ({ pos, attemptno }) => {
    const { board, correctword, curAttempt, disabledLetters, setdisabledLetters } = useContext(AppContext);
    const letter = board[attemptno][pos];

    const correct = correctword.toUpperCase()[pos] === letter;
    const almost = !correct && letter !== "" && correctword.toUpperCase().includes(letter)
    const letterState =
        curAttempt.attempt > attemptno &&
        (correct ? "correct" : almost ? "almost" : "error");
    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setdisabledLetters((prev) => [...prev, letter]);
        }
    }, [curAttempt.attempt]);
    return (
        <div className='letter' id={letterState}>{letter}</div>
    )
}

export default Letter