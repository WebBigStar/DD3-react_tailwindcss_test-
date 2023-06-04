import { count } from 'console';
import { stat } from 'fs';
import React, { useState, useEffect } from 'react'
import Keyboard from '../components/keyboard';

const GREEN = "bg-green-500";
const YELLOW = "bg-yellow-500";
const GRAY = "bg-gray-500";
const DEFAULT_BG = "bg-gray-100";
const DEFAULT_LIST = [
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
  { value: "", class: DEFAULT_BG },
];

function Home({ words, onInitModal, onStatModal, onChange, onComplete }: any) {
  const [inputs, setInputs] = useState("");
  const [pressedKey, setPressedKey] = useState("");
  const [wordList, setWordList] = useState(DEFAULT_LIST);
  const [status, setStatus] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    validateInputsCharacter();
  }, [inputs])
  useEffect(() => {
    if (count > 4) {
      setStatus(true);
    }
  }, [count])
  useEffect(() => {
    if (status) completePlay();
  }, [status])
  const validateInputsCharacter = () => {
    let temp = wordList;
    let cIndex = (pressedKey == "{back}") ? inputs.length : inputs.length - 1;
    var item = { value: "", class: DEFAULT_BG }

    if (cIndex > -1) {
      var wIndex = cIndex % 5;
      if (words[0][wIndex] == pressedKey) {
        item = { value: pressedKey, class: GREEN }  //same
        setCount(count => count + 1)
      } else if (words[0].lastIndexOf(pressedKey) > -1) {
        if (count) setCount(count => count - 1);
        item = { value: pressedKey, class: YELLOW } //include
      } else {
        if (count) setCount(count => count - 1);
        if (pressedKey !== "{back}")
          item = { value: pressedKey, class: GRAY } //never
      }
      temp[cIndex] = item;
    }

    setWordList([...temp]);
  }
  const onKeyPress = (button: any) => {
    setPressedKey(button);
    if (button === "{enter}") {
      completePlay();
    } else if (button === "{back}") {
      setInputs(inputs => inputs.substring(0, inputs.length - 1))
    } else {
      if (inputs.length < 25) {
        setInputs(inputs => inputs + button);
      }
    }
  };
  const completePlay = () => {
    onComplete(status);
    setInputs("");
    setPressedKey("");
    setWordList([...DEFAULT_LIST]);
    setCount(0);
    setStatus(false);
  }
  const chunk = (arr: any, size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white-300 flex-col dark:bg-gray-900">
      <div className="w-1/3 flex justify-between rounded bg-gray-100 p-5 rounded-lg mt-4 text-white dark:bg-gray-500">
        <span className='cursor-pointer flex justify-center items-center' onClick={() => onInitModal()}>
          <svg className="w-6 h-6 dark:text-white text-black" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
          </svg>
        </span>
        <p className="font-semibold font-roboto text-gray-900 dark:text-gray-100 text-40">WORDLE</p>
        <div className='flex justify-center items-center'>
          <span className='cursor-pointer mr-3' onClick={() => onStatModal()}>
            <svg className='w-6 h-6 dark:text-white text-black' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></path>
            </svg>
          </span>
          <label className="toggleDarkBtn">
            <input type="checkbox" onClick={onChange} />
            <span className="slideBtnTg round"></span>
          </label>
        </div>
      </div>
      <div className="w-1/4 p-5 m-10">
        {chunk(wordList, 5).map((word: any, k: any) => {
          return (
            <div className="flex justify-around mb-3" key={"row" + k}>
              {word.map((letter: any, key: any) => {
                return <div className={`w-76 h-75 bg-back rounded-5 flex justify-center items-center ${letter.class}`} id={"box" + letter.id}>
                  <p className='text-28 font-bold text-white'>{letter.value}</p>
                </div>
              })}
            </div>
          );
        })}
      </div>
      <div className="w-1/3 text-gray-900 flex justify-center items-center">
        <Keyboard
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  )
}
export default Home