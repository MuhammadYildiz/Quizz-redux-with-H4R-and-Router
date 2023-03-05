import React from 'react'
import { useQuiz } from '../../redux/reduce'
export default function ShowCorrentAnswer() {
    return (
        <div className='w-full'>
            <div className='w-full mb-10'>
                {useQuiz().questions.map((question, index) => {
                    return (
                        <div key={index}
                            className={` flex flex-col rounded-3xl bg-cyan-700 p-5 w-[98%] sm:w-[80%]  m-auto my-5 shadow-lg shadow-zinc-800  items-center`}
                        >
                            <div
                                className={` flex bg-cyan-700 p-5 w-[98%] sm:w-[80%]  m-auto shadow-lg shadow-zinc-800  items-center`}
                            >
                                <p className='bg-white px-4 py-2 rounded-full '>{index + 1}</p>
                                <p className='border-2 border-white text-white px-4 py-2 rounded-3xl w-full hover:bg-black text-lg'>{question.title}
                                </p>
                            </div>
                            <div key={index} className="bg-white w-[98%] sm:w-[80%] p-5 mx-auto ">
                                <p className='text-red-600 text-2xl text-center'>
                                    {question.correctAnswer}
                                </p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}
