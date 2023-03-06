import React, { useState } from 'react'
import { useQuiz, deletQuestion, changeDeleteBtn } from '../../redux/reduce'
export default function DeleteQuiz() {
    const [showSelected, setshowSelected] = useState("")
    const [alertCopy, setalertCopy] = useState("")
    const [quizTitle, setquizTitle] = useState("")
    const [disabled, setdisabled] = useState(false)
    const handledelet = (e) => {
        e.preventDefault()
        if (quizTitle) {
            deletQuestion(quizTitle)
        }
        else {
            alert("Please Complate Question Title Input")
        }
    }
    return (
        <div className='flex flex-col mb-14 w-full'>
            <a href="#btn"
                className='flex'
            >
                <button
                    className='bg-cyan-700 shadow-2xl shadow-zinc-700 text-white text-center text-xl p-3  rounded-md my-10 w-[250px] m-auto font-bold hover:bg-black'
                    onClick={() => {
                        setdisabled(!disabled);
                        changeDeleteBtn()
                    }}
                    disabled={disabled}
                >
                    {!disabled ? "Delete Questions" : "Select remove questions."}
                </button>
            </a>
            {useQuiz().questions.map((question, index) => {
                return (
                    <div key={index} className="w-full">
                        {disabled &&
                            <div className='w-full m-auto  bg-cyan-700 p-3 sm:p-6 rounded-xl my-3' >
                                <h1 className=' bg-white p-2 font-bold text-red-500 w-full'>
                                    Select question number <span className='bg-black px-3 py-2 rounded-full text-white'>
                                        {index + 1}
                                    </span> to Remove
                                </h1>
                                <div className='flex items-center mt-4 w-full '>
                                    <p className='bg-black px-3 py-1 rounded-full text-white'>{index + 1}</p>
                                    <button id='btn'
                                        className='bg-white w-full p-2 font-bold text-lg hover:bg-green-600 hover:text-white rounded-3xl '
                                        onClick={(e) => {
                                            setshowSelected(e.target.innerText)
                                            setdisabled(!disabled)
                                            setquizTitle("")
                                        }}
                                    >
                                        {question.title}
                                    </button>
                                </div>
                            </div>
                        }
                        {showSelected === question.title && !disabled &&
                            <div className='shadow-2xl shadow-zinc-600 p-3 sm:p-6 rounded-2xl w-full'>
                                <button
                                className='w-full'
                                    onClick={() => {
                                        navigator.clipboard.writeText(question.title)
                                        setalertCopy("Question Title is Copied")
                                        setquizTitle("")
                                    }}>
                                    <p className='bg-black text-white p-3 rounded-3xl hover:bg-green-700 shadow-lg shadow-yellow-50 w-full'>Click here to copy this question"
                                        <span className='text-xl  border-b-2 border-red-200 '> {question.title}</span>" and paste to
                                        <span className='text-xl'> Question Title</span>
                                    </p>
                                    <p className='text-red-600 m-3 text-lg font-bold h-8'>{alertCopy}</p>
                                </button>
                                <form onSubmit={handledelet}
                                    className="shadow-2xl shadow-zinc-700 border-2 border-cyan-700 rounded-2xl p-2 sm:p-6 w-full">
                                    <label
                                        className='bg-cyan-700 p-3 text-white w-full flex justify-center items-center flex-col sm:flex-row'
                                    >
                                        <span className='w-full sm:w-[20%] text-center sm:text-left font-bold'>Question Title:</span>
                                        <input type="text"
                                            className='border-2 border-green-600 px-2 outline-none text-black w-full sm:w-[80%] m-auto'
                                            onChange={(e) => {
                                                setquizTitle(e.target.value)
                                                if (question.title == e.target.value) {
                                                    setalertCopy("Question Title is Pasted.")
                                                }
                                                else {
                                                    setalertCopy("Please Copy and Paste Question Title!")
                                                }
                                            }}
                                            value={quizTitle}
                                            disabled={disabled}
                                            placeholder="Paste Question Title to here... "
                                        />
                                    </label>
                                    <button
                                        className='bg-cyan-700 text-white text-center text-xl p-3  rounded-md my-3 w-[200px] m-auto font-bold hover:bg-black flex justify-center items-center'
                                        type="submit"
                                    >
                                        Remove
                                    </button>
                                </form>
                            </div>}
                    </div>
                )
            }
            )}
        </div>
    )
}
