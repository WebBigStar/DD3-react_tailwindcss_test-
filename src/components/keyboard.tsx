import React from "react";

function Keyboard({ onKeyPress }: any) {
    return (
        <div className="w-full p-2 bg-keyback rounded">
            <div className="flex justify-between mt-8 ml-43 mr-52">
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white "
                    onClick={() => onKeyPress("Q")}>
                    <p className="font-roboto font-semibold text-18">Q</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("W")}>
                    <p className="font-roboto font-semibold text-18">W</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("E")}>
                    <p className="font-roboto font-semibold text-18">E</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("R")}>
                    <p className="font-roboto font-semibold text-18">R</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("T")}>
                    <p className="font-roboto font-semibold text-18">T</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("Y")}>
                    <p className="font-roboto font-semibold text-18">Y</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("U")}>
                    <p className="font-roboto font-semibold text-18">U</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("I")}>
                    <p className="font-roboto font-semibold text-18">I</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("O")}>
                    <p className="font-roboto font-semibold text-18">O</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("P")}>
                    <p className="font-roboto font-semibold text-18">P</p>
                </button>
            </div>
            <div className="flex justify-between mt-8 ml-68 mr-36">
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("A")}>
                    <p className="font-roboto font-semibold text-18">A</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("S")}>
                    <p className="font-roboto font-semibold text-18">S</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("D")}>
                    <p className="font-roboto font-semibold text-18">D</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("F")}>
                    <p className="font-roboto font-semibold text-18">F</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("G")}>
                    <p className="font-roboto font-semibold text-18">G</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("H")}>
                    <p className="font-roboto font-semibold text-18">H</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("J")}>
                    <p className="font-roboto font-semibold text-18">J</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("K")}>
                    <p className="font-roboto font-semibold text-18">K</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("L")}>
                    <p className="font-roboto font-semibold text-18">L</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("Ñ")}>
                    <p className="font-roboto font-semibold text-18">Ñ</p>
                </button>
            </div>
            <div className="flex justify-between mt-8 ml-20 mr-83">
                <button className="w-71 h-51 rounded-5 dark:bg-gray-800 dark:text-white bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex justify-center items-center"
                    onClick={() => onKeyPress("{enter}")}>
                    <p className="font-roboto font-semibold text-15">
                        ENTER
                    </p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("Z")}>
                    <p className="font-roboto font-semibold text-18">Z</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("X")}>
                    <p className="font-roboto font-semibold text-18">X</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("C")}>
                    <p className="font-roboto font-semibold text-18">C</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("V")}>
                    <p className="font-roboto font-semibold text-18">V</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("B")}>
                    <p className="font-roboto font-semibold text-18">B</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("N")}>
                    <p className="font-roboto font-semibold text-18">N</p>
                </button>
                <button className="w-44 h-51 bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex items-center justify-center rounded-5 dark:bg-gray-800 dark:text-white"
                    onClick={() => onKeyPress("M")}>
                    <p className="font-roboto font-semibold text-18">M</p>
                </button>
                <button className="w-71 h-51 rounded-5 dark:bg-gray-800 dark:text-white bg-onekey active:bg-gray-500 shadow hover:shadow-lg outline-none focus:outline-none flex justify-center items-center"
                    onClick={() => onKeyPress("{back}")}>
                    <svg
                        width="23"
                        height="17"
                        viewBox="0 0 23 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.94968 4.31639L13.587 7.78047L17.2243 4.31639L18.3244 5.47152L14.7435 8.88191L18.3244 12.2923L17.2243 13.4474L13.587 9.98334L9.94968 13.4474L8.84955 12.2923L12.4305 8.88191L8.84955 5.47152L9.94968 4.31639Z"
                            fill="#56575E"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.68607 0.906006C6.39071 0.906006 6.1119 1.04237 5.93057 1.27551L0.47151 8.2943C0.202693 8.63992 0.202694 9.1239 0.47151 9.46952L5.93057 16.4883C6.1119 16.7215 6.39071 16.8578 6.68607 16.8578H21.6027C22.1313 16.8578 22.5599 16.4293 22.5599 15.9007V1.86311C22.5599 1.33451 22.1313 0.906006 21.6027 0.906006H6.68607ZM2.03536 8.88191L6.99814 2.50119H20.9647V15.2626H6.99814L2.03536 8.88191Z"
                            fill="#56575E"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
export default Keyboard;
