import React from 'react'
import { useQuiz } from '../redux/reduce'
import SeeQuiz from './quizComponents/SeeQuiz'
import StartQuiz from './quizComponents/StartQuiz'
import QuizAnswer from './quizComponents/QuizAnswer'
import ShowResult from './quizComponents/ShowResult/'
import ShowCorrectAnswer from './quizComponents/ShowCorrectAnswer'
export default function Quizz() {

    return (
        <div className='flex flex-col items-center w-full '>
            <h1 className='text-3xl text-cyan-900 p-5 mb-4'>Quiz App</h1>
            {!useQuiz().quizStarted &&  <SeeQuiz />}
            {!useQuiz().showResult &&<StartQuiz />}
            {useQuiz().quizStarted && <QuizAnswer />}
            {useQuiz().showResult && <ShowResult />}
            {useQuiz().showAllCorrectAnswer && <ShowCorrectAnswer/>}
        </div>
    )
}
