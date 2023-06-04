import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import InstructionModal from './components/InstructionModal';
import StatModal from './components/StatModal';

function App() {
  const [words, setWords] = useState([]);
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
    var wordlist = randomWords({ exactly: 5, maxLength: 5, formatter: (word: string) => word.toUpperCase() });
    setWords(wordlist);
  }

  const changeShowModal = () => {
    setShowModal(!showModal);
  }
  const changeStatShowModal = () => {
    setStatShowModal(!statShowModal);
  }

  useEffect(() => {
    setShowModal(true);
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)

    const intervalID = setInterval(() => {
      getRandomWords();
    }, 5 * 1000);

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
      />
      <Home
        words={words}
        onInitModal={changeShowModal}
        onStatModal={changeStatShowModal}
        onChange={() => setDarkToggle(!darkToggle)}
        onSuccess={() => setSuccess(true)}
        onIncreaseVictor={() => setVictories(victories => victories + 1)}
        onIncreasePlay={() => setPlays(plays => plays + 1)}
      />
    </div>
  );
}

export default App;
