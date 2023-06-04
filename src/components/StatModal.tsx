import React, { useState } from "react";
const StatModal = ({ showModal, onClose, seconds, victorNumber, playNumber, success, word }: any) => {
    const formatTime = (time: any) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    return (
        <>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="box-border w-546 bg-modalbg rounded-15 border-solid border border-black p-10 dark:border-white dark:bg-gray-900 dark:text-white">
                                <div className='flex justify-center mt-59'>
                                    <p className='font-extrabold text-35'>Estadísticas</p>
                                </div>
                                <div className='mt-44 flex justify-around'>
                                    <div>
                                        <p className='text-35 font-extrabold mt-16'>{playNumber}</p>
                                        <p className='text-21'>Jugadas</p>
                                    </div>
                                    <div>
                                        <p className='text-35 font-extrabold mt-16'>{victorNumber}</p>
                                        <p className='text-21'>Victorias</p>
                                    </div>
                                </div>
                                {!success && <p className='text-19 mt-36'> La palabra era: {word}</p>}
                                <p className='text-19 mt-16'>SIGUIENTE PALABRA</p>
                                <p className='text-24 font-bold mt-3 mb-5'>{formatTime(seconds)}</p>
                                <button
                                    className="font-roboto font-extrabold text-40 text-white bg-green-500 active:bg-green-700 font-bold  text-lg px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={onClose}>
                                    Aceptar
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default StatModal;
