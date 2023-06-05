import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import InstructionModal from './components/InstructionModal';
import StatModal from './components/StatModal';

function App() {
  const [word, setWord] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [statShowModal, setStatShowModal] = useState(false);
  const [darkToggle, setDarkToggle] = useState(false)
  const [victories, setVictories] = useState(0);
  const [plays, setPlays] = useState(0);
  const [success, setSuccess] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [complete, setComplete] = useState(false);

  const getRandomWords = () => {
    var randomWords = require('../src/helpers/ramdom-words');
    var wordlist = randomWords({ exactly: 1, maxLength: 5, formatter: (word: string) => word.toUpperCase() });
    setWord(wordlist[0]);
  }

  const changeShowModal = () => {
    setShowModal(!showModal);
  }
  const changeStatShowModal = () => {
    setStatShowModal(!statShowModal);
  }
  const completeGame = (status: any) => {
    setSuccess(status);
    setStatShowModal(true);
    setPlays(plays => plays + 1);
    setSeconds(0);
    if (status) setVictories(victories => victories + 1);
  }

  useEffect(() => {
    // setShowModal(true);
    getRandomWords();
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)

    const intervalID = setInterval(() => {
      getRandomWords();
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(intervalID)
      clearInterval(interval)
    };
  }, [])

  return (
    <div className={`App ${darkToggle && 'dark'}`}>
      <InstructionModal showModal={showModal} onClose={changeShowModal} />
      <StatModal
        showModal={statShowModal}
        onClose={changeStatShowModal}
        victorNumber={victories}
        playNumber={plays}
        success={success}
        seconds={seconds}
        word={word}
      />
      <Home
        word={word}
        onInitModal={changeShowModal}
        onStatModal={changeStatShowModal}
        onChange={() => setDarkToggle(!darkToggle)}
        onComplete={completeGame}
      />
    </div>
  );
}

export default App;
