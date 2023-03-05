import React from 'react'
import { NavLink } from "react-router-dom";
import { useQuiz, showCorrectAnswer } from '../../redux/reduce'
export default function ShowResult() {
	function result() {
		if (useQuiz().score == useQuiz().questions.length) {
			return (
				<h1 className='text-3xl bg-white p-3 text-red-600 mb-3'>
					Congratulations, you are super, you answered all of them correctly.
				</h1>
			)
		}
		else if (useQuiz().score > useQuiz().questions.length / 2) {
			return (
				<h1 className='text-3xl bg-white p-3 text-red-600 mb-3'>
					Congratulations, you answered more than half of them correctly.
				</h1>
			)
		}
		else if (useQuiz().score == useQuiz().questions.length / 2) {
			return (
				<h1 className='text-3xl bg-white p-3 text-red-600 mb-3'>
					Congratulations, you answered half of them correctly.
				</h1>
			)
		}
		else if(useQuiz().score >0 && useQuiz().score < useQuiz().questions.length / 2) {
			return (
				<h1 className='text-3xl bg-white p-3 text-red-600 mb-3'>
					You answered less than half correct.
				</h1>
			)
		}
		else if (useQuiz().score == 0) {
			return (
				<h1 className='text-3xl bg-white p-3 text-red-600 mb-3'>
					Unfortunately, you answered all wrong.
				</h1>
			)
		}
	}
	return (
		<div className='w-full'>
			<div className='flex flex-col justify-center items-center w-full'>
				<div className="bg-cyan-700 sm:w-[80%] text-center m-auto my-5 p-5 rounded-2xl shadow-lg shadow-zinc-900" >
					{result()}
					<p className='bg-white py-3 text-xl'>You have complated the Quiz.</p>
					<h3 className='text-2xl bg-white p-3'>
						You have got: <span className='text-red-500'>{useQuiz().score}</span> of {useQuiz().questions.length} right.
					</h3>
				</div>
			</div>
			<div className='flex flex-col'>
				<button
					className='bg-cyan-700 text-white  text-xl p-3  rounded-md my-3 w-[200px] m-auto font-bold hover:bg-black'
					onClick={() => { window.location = window.location.href }}
				>
					Try again
				</button>
				<button
					className='bg-cyan-700 text-white text-center text-xl p-3  rounded-md my-3 w-[250px] m-auto font-bold hover:bg-black'
					onClick={() => showCorrectAnswer()}
				>
					{useQuiz().showAllCorrectAnswer ? "Hide Correct Answers" : " Learn Correct Answers"}
				</button>
			</div>
		</div>
	)
}
