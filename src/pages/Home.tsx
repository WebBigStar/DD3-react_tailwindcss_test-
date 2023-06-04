import React, { useState, useEffect } from 'react'
import Keyboard from '../components/keyboard';

const GREEN = "bg-green-500";
const YELLOW = "bg-yellow-500";
const GRAY = "bg-gray-500";
const DEFAULT_BG = "bg-gray-100";
const DEFAULT_LIST = [
  { id: 0, value: "", class: DEFAULT_BG },
  { id: 1, value: "", class: DEFAULT_BG },
  { id: 2, value: "", class: DEFAULT_BG },
  { id: 3, value: "", class: DEFAULT_BG },
  { id: 4, value: "", class: DEFAULT_BG },
  { id: 5, value: "", class: DEFAULT_BG },
  { id: 6, value: "", class: DEFAULT_BG },
  { id: 7, value: "", class: DEFAULT_BG },
  { id: 8, value: "", class: DEFAULT_BG },
  { id: 9, value: "", class: DEFAULT_BG },
  { id: 10, value: "", class: DEFAULT_BG },
  { id: 11, value: "", class: DEFAULT_BG },
  { id: 12, value: "", class: DEFAULT_BG },
  { id: 13, value: "", class: DEFAULT_BG },
  { id: 14, value: "", class: DEFAULT_BG },
  { id: 15, value: "", class: DEFAULT_BG },
  { id: 16, value: "", class: DEFAULT_BG },
  { id: 17, value: "", class: DEFAULT_BG },
  { id: 18, value: "", class: DEFAULT_BG },
  { id: 19, value: "", class: DEFAULT_BG },
  { id: 20, value: "", class: DEFAULT_BG },
  { id: 21, value: "", class: DEFAULT_BG },
  { id: 22, value: "", class: DEFAULT_BG },
  { id: 23, value: "", class: DEFAULT_BG },
  { id: 24, value: "", class: DEFAULT_BG },
];

function Home({ words, onInitModal, onStatModal, onChange }: any) {
  const [input, setInput] = useState("");
  const [pressedKey, setPressedKey] = useState("");
  const [wordList, setWordList] = useState(DEFAULT_LIST);
  const defaultTemper: any[] = []
  const [temper, setTemper] = useState(defaultTemper);

  useEffect(() => {
    if (!(input == ""))
      validateInputCharacter();
  }, [input])

  useEffect(() => {
    console.log("word list changed")
  }, [wordList])

  const validateInputCharacter = async () => {
    console.log("wordList", wordList);
    let originText = words.join('');
    let cIndex = input.lastIndexOf(pressedKey);

    if (cIndex > -1) {
      var wIndex = Math.floor(cIndex / 5);
      var item = { id: cIndex, value: "", class: DEFAULT_BG }

      if (originText[cIndex] == pressedKey) {
        item = { id: cIndex, value: pressedKey, class: GREEN }  //same
      } else if (words[wIndex].lastIndexOf(pressedKey) > -1) {
        item = { id: cIndex, value: pressedKey, class: YELLOW } //include
      } else {
        item = { id: cIndex, value: pressedKey, class: GRAY } //never
      }
    }
  }
  const validate = () => {
    let letters = input.split("");
    let list = { ...DEFAULT_LIST, ...letters }.values();
    console.log(list);
  }
  const onKeyPress = (button: any) => {
    setPressedKey(button);
    console.log("Button pressed", button);
    if (button === "{enter}") console.log("enter key pressed");
    else if (button === "{back}") {
      setInput(input => input.substring(0, input.length))
    } else {
      setInput(input => input + button);
    }
  };
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
        <div className="flex justify-around mb-3">
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
        </div>
        <div className="flex justify-around mb-3">
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
        </div>
        <div className="flex justify-around mb-3">
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
        </div>
        <div className="flex justify-around mb-3">
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
        </div>
        <div className="flex justify-around mb-3">
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
          <div className="w-76 h-75 bg-back rounded-5">
          </div>
        </div>
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