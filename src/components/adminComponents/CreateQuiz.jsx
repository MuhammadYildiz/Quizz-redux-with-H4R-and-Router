import React, { useState } from 'react'
import { useQuiz, addQuizzes, handleUpdateBtn } from '../../redux/reduce'
export default function CreateQuiz() {
    const [quizTitle, setquizTitle] = useState("")
    const [alternative1, setalternative1] = useState("")
    const [alternative2, setalternative2] = useState("")
    const [alternative3, setalternative3] = useState("")
    const [correctAnswer, setcorrectAnswer] = useState("")
    const [disabled, setdisabled] = useState(false)
    const [updateBtn, setupdateBtn] = useState(false)
    const ID = Math.floor(Math.random() * 100)
    const handleAddQuizzes = (e) => {
        e.preventDefault()
        if(quizTitle && alternative1 && alternative2 && alternative3 && correctAnswer ){
            if (disabled) {
                setquizTitle("")
                setalternative1("")
                setalternative2("")
                setalternative3("")
            }
            setdisabled(!disabled)
            const question = {
                id: ID,
                title: quizTitle,
                alternative1: alternative1,
                alternative2: alternative2,
                alternative3: alternative3,
                correctAnswer: correctAnswer
            }
            addQuizzes(question) 
        }
        else{
            alert("Please Complate All Input")
        }
    }
    return (
        <div className='flex flex-col justify-center items-center  w-full '>
            {!useQuiz().uppdateBtn &&
                <div className='flex flex-col justify-center items-center  w-full'>
                    <h1 className='text-3xl text-cyan-700 my-5 '>Create New Quizez</h1>
                    <form onSubmit={handleAddQuizzes}
                        className="shadow-2xl shadow-zinc-700 border-2 border-cyan-700 rounded-2xl p-2 sm:p-6 w-full"
                    >
                        <label
                            className='bg-cyan-700 p-3 text-white w-full flex justify-center items-center flex-col sm:flex-row'
                        >
                            <span className='w-full sm:w-[20%] text-center sm:text-left font-bold'>Question Title:</span>
                            <input type="text"
                                className='border-2 border-green-600 px-2 outline-none text-black w-full sm:w-[80%] m-auto'
                                onChange={(e) => setquizTitle(e.target.value)}
                                placeholder="Question Title..."
                                value={quizTitle}
                                disabled={disabled}
                            />
                        </label>
                        <div className='w-full flex flex-col lg:flex-row'>
                            <label className='bg-cyan-700 p-3 text-white w-full flex lg:flex-col justify-between'>
                                <span className='font-bold'>Alternative1:</span>
                                <input type="text"
                                    className='border-2 border-green-600 px-2 w-[80%] text-black '
                                    onChange={(e) => setalternative1(e.target.value)}
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
                            className='bg-cyan-700 text-white text-center text-xl p-3  rounded-md my-3 w-[250px] m-auto font-bold hover:bg-black flex justify-center items-center'
                            type="submit"
                        >
                            {!disabled ? "Add Question" : "Continue to create new question"}
                        </button>
                    </form>
                    {disabled &&
                        <div className='w-full'>
                            <div className='bg-cyan-700 w-full shadow-2xl shadow-zinc-700 rounded-2xl p-2 sm:p-6 my-5 '>
                                <div className='bg-white p-2 text-xl flex flex-col justify-center items-center my-2'>
                                    <h3>Question</h3>
                                    <p>{quizTitle}</p>
                                </div>
                                <div className='bg-white p-2 text-xl flex flex-col items-center my-2'>
                                    <h3>Alternative Answers</h3>
                                    <div className='flex flex-col sm:flex-row  justify-around'>
                                        <p className='mx-5'>{alternative1}</p>
                                        <p className='mx-5'>{alternative3}</p>
                                        <p className='mx-5'>{alternative3}</p>
                                    </div>
                                </div>
                                <div className='bg-white p-2 text-xl flex justify-around  items-center my-2'>
                                    <h3>Correct Answer</h3>
                                    <p>{correctAnswer}</p>
                                </div>
                            </div>
                        </div>}
                </div>}
            <button
                className='bg-cyan-700 shadow-2xl shadow-zinc-700 text-white text-center text-xl p-3  rounded-md my-10 w-[250px] m-auto font-bold hover:bg-black'
                onClick={() => {
                    handleUpdateBtn()
                    setupdateBtn(!updateBtn)
                }}
            >
                {!updateBtn ? "Update Questions" : "Create New Question"}
            </button>

        </div>
    )
}
