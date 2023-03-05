import React from 'react'
import { useQuiz, setSeeQuiz, } from '../../redux/reduce'

export default function SeeQuiz() {

    return (
        <div className={`flex flex-col w-[95%] md:w-[80%]  ${useQuiz().showResult ? "hidden" : ""} `}>
            <button
                onClick={() => setSeeQuiz()}
                className='bg-cyan-700 text-white text-center text-xl p-3  rounded-md mb-3 w-[200px] m-auto font-bold hover:bg-black'
            >
                {!useQuiz().seeQuiz ? " See all quizzes" : "Hide all quizzes"}
            </button>

            {useQuiz().questions.map((question, index) => {
                if (useQuiz().seeQuiz)
                    return (
                        <div key={index}
                            className={` flex bg-cyan-700 p-5 sm:w-full  shadow-lg shadow-zinc-800  items-center`}
                        >
                            <p className='bg-white px-4 py-2 rounded-full '>{index + 1}</p>
                            <p className='border-2 border-white text-white px-4 py-2 rounded-3xl w-full hover:bg-black text-lg'>{question.title}
                            </p>
                        </div>
                    )
            })}
        </div>
    )
}
