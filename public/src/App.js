// import logo from './logo.svg';
import './App.css';
import Playboard from './components/Playboard';
import Keyboard from './components/Keyboard';
import { createContext, useEffect, useState } from 'react';
import { boardDefault, generateWordset } from './Words';
import Gameover from './components/Gameover';
function App() {
  const [board, setboard] = useState(boardDefault);
  const [curAttempt, setcurAttempt] = useState({ attempt: 0, letter: 0 })
  const [wordSet, setwordSet] = useState(new Set());
  const [disabledLetters, setdisabledLetters] = useState([]);
  const [gameOver, setgameOver] = useState({ gameOver: false, gussedWord: false })
  const [correctword, setcorrectword] = useState("");
  // const correctword = "RIGHT";

  useEffect(() => {
    generateWordset().then((words) => {
      setwordSet(words.wordSet);
      setcorrectword(words.today);
    });
  }, []);



  const onSelect = (keyVal) => {
    if (curAttempt.letter > 4) return;
    const newboard = [...board];
    newboard[curAttempt.attempt][curAttempt.letter] = keyVal;
    setboard(newboard);
    setcurAttempt({ ...curAttempt, letter: curAttempt.letter + 1 })
  };
  const onDelete = () => {
    if (curAttempt.letter === 0) return;
    const newboard = [...board]
    newboard[curAttempt.attempt][curAttempt.letter - 1] = "";
    setboard(newboard);
    setcurAttempt({ ...curAttempt, letter: curAttempt.letter - 1 });
  }
  const onEnter = () => {
    if (curAttempt.letter !== 5) return;

    let curword = "";
    for (let i = 0; i < 5; ++i) {
      curword += board[curAttempt.attempt][i];
    }
    if (wordSet.has(curword.toLowerCase())) {
      setcurAttempt({ attempt: curAttempt.attempt + 1, letter: 0 });
    }
    else {
      alert("Word Not Found!!");
    }
    if (curword === correctword) {
      setgameOver({ gameOver: true, gussedWord: true });
      return;
    }
    if (curAttempt.attempt === 5) {
      setgameOver({ gameOver: true, gussedWord: false });
    }
  }
  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <AppContext.Provider value={{ board, setboard, curAttempt, setcurAttempt, onSelect, onEnter, onDelete, correctword, setdisabledLetters, disabledLetters, gameOver, setgameOver }}>
        <div className='game'>

          <Playboard />
          {gameOver.gameOver ? <Gameover /> : <Keyboard />}
        </div>

      </AppContext.Provider>
    </div>
  );
}
export const AppContext = createContext();

export default App;
