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

function Home({ word, onInitModal, onStatModal, onChange, onComplete }: any) {
  const [inputs, setInputs] = useState("");
  const [pressedKey, setPressedKey] = useState("");
  const [wordList, setWordList] = useState(DEFAULT_LIST);
  const [status, setStatus] = useState(false);
  const [findedWord, setFindedWord] = useState("-----");
  const [deletedLetter, setDeletedLetter] = useState("");

  useEffect(() => {
    validateInputsCharacter();
    if (inputs.length > 24) completePlay();
  }, [inputs])

  useEffect(() => {
    if (status) completePlay();
  }, [status])

  useEffect(() => {
    console.log('fined,', findedWord);
    if (findedWord == word) setStatus(true)
    else setStatus(false);
  }, [findedWord])

  useEffect(() => {
    console.log('deleted,,,', deletedLetter);
  }, [deletedLetter])

  const syncOriginWord = (index: any) => {
    if (pressedKey == "{back}") {
      if (deletedLetter == findedWord.substr(-1)) {
        setFindedWord(findedWord => findedWord.substr(0, findedWord.length - 1) + "-")
      }
    } else {
      let temp = findedWord.split("");
      console.log('temp', temp);
      temp[index] = pressedKey;
      setFindedWord(temp.join(""));
    }
  }

  const validateInputsCharacter = () => {
    let temp = wordList;
    var item = { value: "", class: DEFAULT_BG }

    let cIndex = (pressedKey == "{back}") ? inputs.length : inputs.length - 1;

    if (cIndex > -1) {
      let wIndex = cIndex % 5;
      if (word[wIndex] == pressedKey) {
        item = { value: pressedKey, class: GREEN }  //same
        if (findedWord[wIndex] != pressedKey) {
          syncOriginWord(wIndex)
        }
      } else if (word.lastIndexOf(pressedKey) > -1) {
        item = { value: pressedKey, class: YELLOW } //include
      } else {
        if (pressedKey != "{back}") {
          item = { value: pressedKey, class: GRAY } //never
        } else syncOriginWord(-1);
      }
      temp[cIndex] = item;
    }

    setWordList([...temp]);
  }

  const onKeyPress = (button: any) => {
    setPressedKey(button);
    if (button === "{enter}") {
      completePlay();
    } else {
      if (button === "{back}") {
        let deleted = inputs.substr(-1);
        setDeletedLetter(deleted);
        setInputs(inputs => inputs.substr(0, inputs.length - 1))
      } else {
        if (inputs.length < 25) {
          setInputs(inputs => inputs + button);
        }
      }
    }
  };

  const completePlay = () => {
    onComplete(status);
    setInputs("");
    setPressedKey("");
    setWordList([...DEFAULT_LIST]);
    setFindedWord("-----")
    setDeletedLetter("")
    setStatus(false);
  }
  const chunk = (arr: any, size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  return (
    <div className="h-screen w-full flex items-center justify-center bg-white-300 flex-col dark:bg-gray-900">
      <div className="w-638 flex justify-between rounded bg-gray-100 p-5 rounded-lg mt-4 text-white dark:bg-gray-500">
        <span className='cursor-pointer flex justify-center items-center' onClick={() => onInitModal()}>
          {/* <svg className="w-6 h-6 dark:text-white text-black" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
          </svg> */}

          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="dark:fill-white" d="M27 13.5C27 17.0804 25.5777 20.5142 23.0459 23.0459C20.5142 25.5777 17.0804 27 13.5 27C9.91958 27 6.4858 25.5777 3.95406 23.0459C1.42232 20.5142 0 17.0804 0 13.5C0 9.91958 1.42232 6.4858 3.95406 3.95406C6.4858 1.42232 9.91958 0 13.5 0C17.0804 0 20.5142 1.42232 23.0459 3.95406C25.5777 6.4858 27 9.91958 27 13.5ZM9.2745 10.1807H10.6667C10.8996 10.1807 11.0852 9.99 11.1156 9.75881C11.2674 8.65181 12.0268 7.84519 13.3802 7.84519C14.5378 7.84519 15.5976 8.424 15.5976 9.81619C15.5976 10.8877 14.9664 11.3805 13.9691 12.1298C12.8334 12.9549 11.934 13.9185 11.9981 15.4828L12.0032 15.849C12.005 15.9597 12.0502 16.0653 12.1291 16.143C12.208 16.2206 12.3143 16.2641 12.4251 16.2641H13.7936C13.9055 16.2641 14.0128 16.2197 14.0919 16.1406C14.1711 16.0614 14.2155 15.9541 14.2155 15.8422V15.6651C14.2155 14.4534 14.6762 14.1007 15.9199 13.1574C16.9476 12.3761 18.0191 11.5087 18.0191 9.68794C18.0191 7.13813 15.8659 5.90625 13.5084 5.90625C11.3704 5.90625 9.02812 6.90187 8.86781 9.76388C8.8655 9.81837 8.87436 9.87276 8.89385 9.92371C8.91334 9.97465 8.94305 10.0211 8.98114 10.0601C9.01923 10.0992 9.06491 10.13 9.11536 10.1507C9.1658 10.1715 9.21996 10.1817 9.2745 10.1807ZM13.1979 21.0532C14.2273 21.0532 14.9344 20.3884 14.9344 19.4889C14.9344 18.5574 14.2256 17.9027 13.1979 17.9027C12.2124 17.9027 11.4952 18.5574 11.4952 19.4889C11.4952 20.3884 12.2124 21.0532 13.1996 21.0532H13.1979Z" fill="#818181" />
          </svg>

        </span>
        <p className="font-semibold font-roboto text-gray-900 dark:text-gray-100 text-40">WORDLE</p>
        <div className='flex justify-center items-center'>
          <span className='cursor-pointer mr-3' onClick={() => onStatModal()}>
            {/* <svg className='w-6 h-6 dark:text-white text-black' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></path>
            </svg> */}
            <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4.93549" y="6" width="29.6129" height="24" rx="2" fill="#818181" className='dark:fill-white'/>
              <path className="dark:stroke-black" d="M13.1613 15L13.1613 24" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path className="dark:stroke-black" d="M19.7419 18V24" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path className="dark:stroke-black" d="M26.3226 12V24" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <label className="toggleDarkBtn">
            <input type="checkbox" onClick={onChange} />
            <span className="slideBtnTg round"></span>
          </label>
        </div>
      </div>
      <div className="w-478 p-5 m-10">
        {chunk(wordList, 5).map((item: any, k: any) => {
          return (
            <div className="flex justify-around mb-3" key={"row" + k}>
              {item.map((letter: any, key: any) => {
                return <div className={`w-76 h-75 bg-back rounded-5 flex justify-center items-center ${letter.class}`} key={"box" + key}>
                  <p className='text-28 font-bold text-white'>{letter.value}</p>
                </div>
              })}
            </div>
          );
        })}
      </div>
      <div className="w-638 text-gray-900 flex justify-center items-center">
        <Keyboard
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  )
}
export default Home