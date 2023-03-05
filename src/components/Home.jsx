import React,{useEffect, useState} from 'react'
import { initialState } from './../redux/reduce'
export default function Home() {
  const [questions, setQuestions] = useState(initialState)
  /* Save data In Local Srorage */
  useEffect(() => {
    localStorage.setItem("Questions", JSON.stringify(questions))
},)
/* Get data from Local Storage */
useEffect(() => {
   const Questions = localStorage.getItem("Questions")
  setQuestions(JSON.parse(Questions))
},[])
  return (
    <div className='flex justify-center w-full '>
      <h1 className='text-3xl text-cyan-900 p-5'>Home</h1>
    </div>
  )
}
