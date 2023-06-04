import React, { useState } from "react";
const InstructionModal = ({ showModal, onClose }: any) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="box-border w-546 bg-modalbg rounded-15 border-solid border border-black p-10 dark:border-white dark:bg-gray-900 dark:text-white">
                <p className="font-roboto font-extrabold text-35 mb-5">
                  Cómo jugar
                </p>
                <div className="font-roboto w-478 text-17">
                  <p className="text-left mb-2">
                    Adivina la palabra oculta en cinco intentos.
                  </p>
                  <p className="text-left mb-2">
                    Cada intento debe ser una palabra válida de 5 letras.
                  </p>
                  <p className="text-left ">
                    Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
                  </p>
                </div>
                <div className="mt-5">
                  <p className="font-roboto font-bold text-17 text-left mb-5">
                    Ejemplos
                  </p>
                  <div className="flex justify-around">
                    <div className="border border-solid border-black rounded-5 w-75 h-76 flex justify-center items-center bg-green-500">
                      <p className="text-28 font-bold">G</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76  flex justify-center items-center ">
                      <p className="text-28 font-bold">A</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76  flex justify-center items-center ">
                      <p className="text-28 font-bold">T</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76  flex justify-center items-center ">
                      <p className="text-28 font-bold">O</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76  flex justify-center items-center ">
                      <p className="text-28 font-bold">S</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="font-roboto font-normal text-17 text-left mb-5">
                    La letra <b>G</b> está en la palabra y en la posición correcta.
                  </p>
                  <div className="flex justify-around">
                    <div className="border border-solid border-black rounded-5 w-75 h-76 flex justify-center items-center">
                      <p className="text-28 font-bold">V</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76  flex justify-center items-center">
                      <p className="text-28 font-bold">O</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76  flex justify-center items-center bg-yellow-500">
                      <p className="text-28 font-bold">C</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76  flex justify-center items-center">
                      <p className="text-28 font-bold">A</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76  flex justify-center items-center">
                      <p className="text-28 font-bold">L</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="font-roboto font-normal text-17 text-left mb-5">
                    La letra <b>C</b> está en la palabra pero en la posición incorrecta.
                  </p>
                  <div className="flex justify-around">
                    <div className="border border-solid border-black rounded-5 w-75 h-76 flex justify-center items-center">
                      <p className="text-28 font-bold">C</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76 flex justify-center items-center">
                      <p className="text-28 font-bold">A</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76 flex justify-center items-center">
                      <p className="text-28 font-bold">N</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76 flex justify-center items-center">
                      <p className="text-28 font-bold">T</p>
                    </div>
                    <div className="border border-solid border-black rounded-5 w-75 h-76 flex justify-center items-center bg-gray-500">
                      <p className="text-28 font-bold">O</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <p className="font-roboto text-17 text-left mb-5">
                    La letra <b>O</b> no está en la palabra.
                  </p>
                  <p className="font-roboto text-17 text-left">
                    Puede haber letras repetidas. Las pistas son independientes para cada
                    letra.
                  </p>
                </div>
                <p className="font-roboto text-17 mb-5" >
                  ¡Una palabra nueva cada 5 minutos!
                </p>
                <button
                  className="font-roboto font-extrabold text-28 leading-33 text-white bg-green-500 active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={onClose}>
                  !JUGAR¡
                </button>
              </div>
            </div>
          </div> 
        </>
      ) : null}
    </>
  );
};

export default InstructionModal;
