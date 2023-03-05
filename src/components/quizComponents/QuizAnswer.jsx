import React, { useState } from 'react'
import { useQuiz, nextQuestion, prevQuestion, chnageScore, showResult, alertAnswer } from '../../redux/reduce'
export default function QuizAnswer() {
    const answerLetter = ["A", "B", "C"]
    return (
        <div className=' w-full m-auto  '>
            {useQuiz().questions.map((question, index) => {
                if (useQuiz().currentQuestion == index) {
                    return (
                        <div key={index}
                            className="bg-cyan-700 sm:w-[80%] m-auto my-5 p-5 rounded-2xl shadow-lg shadow-zinc-900"
                        >
                            <div className="flex flex-col bg-white p-3 rounded-xl">
                                <h3 className='text-2xl text-center py-2'>
                                    Quaestion {useQuiz().currentQuestion + 1} of {useQuiz().questions.length}
                                </h3>
                                <p className='text-xl my-3'>{question.title} </p>
                            </div>
                            <div className='  text-xl mt-3 rounded-xl flex flex-col  sm:flex-row justify-between'>
                                <div className={`bg-white  min-w-[120px] my-2  flex items-center justify-center   `}>
                                    <span className='font-bold ml-3'>{answerLetter[0]}:</span>
                                    <button
                                        className='w-full py-2 px-2 hover:bg-yellow-700 hover:text-white '
                                        disabled={useQuiz().alertAnswer}
                                        onClick={(ev) => {
                                            if (ev.target.innerText == question.correctAnswer) {
                                                chnageScore(1)
                                            }
                                            alertAnswer()
                                        }}
                                    >
                                        {question.alternative1}
                                    </button>
                                </div>
                                <div className={`bg-white  min-w-[120px] my-2 flex items-center justify-center    `}>
                                    <span className='font-bold ml-3'>{answerLetter[1]}:</span>
                                    <button
                                        className='w-full py-2 px-2 hover:bg-yellow-700 hover:text-white '
                                        disabled={useQuiz().alertAnswer}
                                        onClick={(ev) => {
                                            if (ev.target.innerText == question.correctAnswer) {
                                                chnageScore(1)
                                            }
                                            alertAnswer()
                                        }}
                                    >
                                        {question.alternative2}
                                    </button>
                                </div>
                                <div className={`bg-white  min-w-[120px] my-2  flex items-center justify-center    `}>
                                    <span className='font-bold ml-3'>{answerLetter[1]}:</span>
                                    <button
                                        className='w-full py-2 px-2 hover:bg-yellow-700 hover:text-white '
                                        disabled={useQuiz().alertAnswer}
                                        onClick={(ev) => {
                                            if (ev.target.innerText == question.correctAnswer) {
                                                chnageScore(1)
                                            }
                                            alertAnswer()
                                        }}
                                    >
                                        {question.alternative3}
                                    </button>
                                </div>
                            </div>

                            <div className='bg-white text-center mt-3'>
                                <h3 className=' text-red-500 font-bold text-xl py-5'>
                                    {!useQuiz().alertAnswer ? "Select an answer" : "You have selected an answer"}
                                </h3>
                            </div>
                        </div>
                    )
                }
            })}

            <div className='flex justify-center my-5 '>
                {useQuiz().currentQuestion > 0 && <button
                    className='bg-black text-white mx-3 px-6 sm:px-10 py-2 font-bold py1 rounded-2xl hover:bg-green-500'
                    onClick={() => prevQuestion(1)}
                >
                    Prev
                </button>}

                {useQuiz().currentQuestion < useQuiz().questions.length - 1 &&
                    <button
                        className='bg-black text-white mx-3 px-6 sm:px-10 py-2 font-bold py1 rounded-2xl hover:bg-green-500'
                        onClick={() => nextQuestion(1)}
                    >
                        Next
                    </button>}
            </div>

            {useQuiz().currentQuestion + 1 == useQuiz().questions.length ?
                <div className='text-center my-10'>
                    <button
                        className='bg-cyan-700 text-white text-center text-xl p-3  rounded-md mb-3 w-[200px] m-auto font-bold hover:bg-black'
                        onClick={() => showResult()}
                    >
                        Show Result
                    </button>
                </div> : ""}
        </div>
    )
}
