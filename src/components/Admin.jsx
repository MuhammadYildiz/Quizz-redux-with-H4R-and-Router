
import React from 'react'
import { useQuiz } from '../redux/reduce'
import CreateQuiz from './adminComponents/CreateQuiz'
import DeleteQuiz from './adminComponents/DeleteQuiz'
import UpdateQuiz from './adminComponents/UpdateQuiz'

export default function Admin() {
    return (
        <div className='flex flex-col justify-center items-center w-[98%] sm:w-[80%] m-auto    '>
            <h1 className='text-3xl text-cyan-900 p-5'>Admin</h1>
            <CreateQuiz />
            {useQuiz().uppdateBtn && <UpdateQuiz />}
            <DeleteQuiz />
        </div>
    )
}
