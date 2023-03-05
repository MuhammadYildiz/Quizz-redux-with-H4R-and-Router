import React from 'react'
import { useQuiz, startQuiz } from '../../redux/reduce'
export default function StartQuiz() {
    return (
        <div className='flex flex-col  justify-center items-center mb-10'>
            {!useQuiz().quizStarted &&
                <div className='bg-cyan-700 p-5 flex flex-col justify-center items-center sm:w-full sm:px-44 shadow-lg shadow-zinc-800 rounded-b-3xl'>
                    <h1 className='text-white text-3xl'>Start the Qauestion</h1>
                    <h3 className=' text-3xl p-3 my-5 text-red-600 font-bold bg-white '>Good Luck!</h3>
                </div>
            }

            <button
                className='bg-cyan-700 text-white text-center text-xl p-3  rounded-md mb-3 w-[200px] m-auto font-bold hover:bg-black my-5'
                onClick={() => startQuiz(1)}
            >
                {!useQuiz().quizStarted ? "Start" : "Back"}
            </button>
        </div>
    )
}
