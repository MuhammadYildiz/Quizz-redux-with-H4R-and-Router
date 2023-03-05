import React, { useState } from 'react'
import { useQuiz, updateQuizzes } from '../../redux/reduce'
export default function UpdateQuiz() {
    const [showSelected, setshowSelected] = useState("")
    const [hideSelectQuestion, sethideSelectQuestion] = useState(false)
    const [alertCopy, setalertCopy] = useState("")
    const [quizTitle, setquizTitle] = useState("")
    const [alternative1, setalternative1] = useState("")
    const [alternative2, setalternative2] = useState("")
    const [alternative3, setalternative3] = useState("")
    const [correctAnswer, setcorrectAnswer] = useState("")
    const [disabled, setdisabled] = useState(false)
    const [updateBtn, setupdateBtn] = useState(false)
    const ID = Math.floor(Math.random() * 100)

    const handleUpdateQuizzes = (e) => {
        e.preventDefault()
        if (quizTitle && alternative1 && alternative2 && alternative3 && correctAnswer) {
            if (!disabled) {
                setquizTitle("")
                setalternative1("")
                setalternative2("")
                setalternative3("")
            }
            setdisabled(!disabled)
            /*  sethideSelectQuestion(!hideSelectQuestion) */
            const question = {
                id: ID,
                title: quizTitle,
                alternative1: alternative1,
                alternative2: alternative2,
                alternative3: alternative3,
                correctAnswer: correctAnswer
            }
            updateQuizzes(question)
        }
        else{
            alert("Please Complate All Input")
        }
    }
    return (
        <div className=' w-full '>

            {useQuiz().questions.map((question, index) => {
                return (
                    <div key={index} className="">
                        {!hideSelectQuestion &&
                            <div className='w-full m-auto  bg-cyan-700 p-3 sm:p-6 rounded-xl my-3' >
                                <h1 className=' bg-white p-2 font-bold text-red-500'>
                                    Select question number <span className='bg-black px-3 py-2 rounded-full text-white'>
                                        {index + 1}
                                    </span> to update
                                </h1>
                                <div className='flex items-center mt-4'>
                                    <p className='bg-black px-3 py-1 rounded-full text-white'>{index + 1}</p>
                                    <button
                                        className='bg-white w-full p-2 font-bold text-lg hover:bg-green-600 hover:text-white rounded-3xl'
                                        onClick={(e) => {
                                            setshowSelected(e.target.innerText)
                                            sethideSelectQuestion(!hideSelectQuestion)
                                            setupdateBtn(false)
                                            setdisabled(false)
                                        }}
                                    >
                                        {question.title}
                                    </button>
                                </div>
                            </div>
                        }
                        {showSelected === question.title && !updateBtn &&
                            <div className='shadow-2xl shadow-zinc-600 p-3 sm:p-6 rounded-2xl '>
                                <h1 className='text-3xl text-center my-2'>Please update the form of this question</h1>
                                <button onClick={() => {
                                    navigator.clipboard.writeText(question.title)
                                    setalertCopy("Question Title is Copied")
                                    setquizTitle("")
                                }}>
                                    <p className='bg-black text-white p-3 rounded-3xl hover:bg-green-700 shadow-lg shadow-yellow-50'>Click here to copy this question"
                                        <span className='text-xl  border-b-2 border-red-200 '> {question.title}</span>" and paste to
                                        <span className='text-xl'> Question Title</span>
                                    </p>
                                    <p className='text-red-600 m-3 text-lg font-bold h-8'>{alertCopy}</p>
                                </button>
                                {<form onSubmit={handleUpdateQuizzes}
                                    className="shadow-2xl shadow-zinc-700 border-2 border-cyan-700 rounded-2xl p-2 sm:p-6 w-full"
                                >
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
                                    <div className='w-full flex flex-col lg:flex-row'>
                                        <label className='bg-cyan-700 p-3 text-white w-full flex lg:flex-col justify-between'>
                                            <span className='font-bold'>Alternative1:</span>
                                            <input type="text"
                                                className='border-2 border-green-600 px-2 w-[80%] text-black '
                                                onChange={(e) => {
                                                    setalternative1(e.target.value)
                                                    setalertCopy("")
                                                }
                                                }
                                                value={alternative1}
                                                disabled={disabled}
                                                placeholder="Alternative1..."
                                            />
                                        </label>
                                        <label className='bg-cyan-700 p-3 text-white w-full flex lg:flex-col justify-between'>
                                            <span className='font-bold'>Alternative2:</span>
                                            <input type="text"
                                                className='border-2 border-green-600 px-2 w-[80%] text-black '
                                                onChange={(e) => setalternative2(e.target.value)}
                                                value={alternative2}
                                                disabled={disabled}
                                                placeholder="Alternative2..."
                                            />
                                        </label>
                                        <label className='bg-cyan-700 p-3 text-white w-full flex lg:flex-col justify-between'>
                                            <span className='font-bold '>Alternative3:</span>
                                            <input type="text"
                                                className='border-2 border-green-600 px-2  w-[80%]  text-black'
                                                onChange={(e) => setalternative3(e.target.value)}
                                                value={alternative3}
                                                disabled={disabled}
                                                placeholder="Alternative3..."
                                            />
                                        </label>
                                    </div>
                                    <label className='p-3 flex justify-between  bg-cyan-700 text-white'>
                                        <span className='font-bold'>Correct Answer:</span>
                                        <select
                                            className='text-black w-[80%] px-3 outline-none'
                                            onChange={(e) => setcorrectAnswer(e.target.value)}
                                        >
                                            <option >Select Correct Answe</option>
                                            <option value={alternative1}>{alternative1}</option>
                                            <option value={alternative2}>{alternative2}</option>
                                            <option value={alternative3}>{alternative3}</option>
                                        </select>
                                    </label>

                                    <button
                                        className='bg-cyan-700 text-white text-center text-xl p-3  rounded-md my-3 w-[200px] m-auto font-bold hover:bg-black flex justify-center items-center'
                                        type="submit"
                                    >
                                        {!disabled ? "Update Question" : "Question Updated"}
                                    </button>
                                </form>}

                            </div>}
                    </div>
                )
            })}
            {disabled && !updateBtn &&
                <button
                    className='bg-cyan-700 shadow-2xl shadow-zinc-700 text-white text-center text-xl p-3  rounded-md flex my-10 w-[250px] sm:w-[300px] m-auto font-bold hover:bg-black'
                    onClick={() => {
                        sethideSelectQuestion(!hideSelectQuestion)
                        setupdateBtn(!updateBtn)
                    }}
                >
                    Continue to update other questions.
                </button>}
        </div>
    )
}
