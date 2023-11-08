import React, { useState } from 'react'

function Form(props) {

const [score,setScore] = useState("10")
const [comment,setComment] = useState('')
    const inputChange = (e)=>{
        props.setVal(e.target.value)
    }
    const inputChange2 = (e)=>{
        setScore(e.target.value)
    }
    const submitForm = (e)=>{
        e.preventDefault();
        if(comment.length<30){
            alert("Provide validd")
            return
        }
        console.log(`Form Submitted and Value of input is ${props.inputValue}`)
        setComment('')
        setScore('10')
        props.setVal('')
    }
  return (
    <form onSubmit={submitForm}>
        <fieldset>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder="Name" name='name' onChange={inputChange} value={props.inputValue}/>
            <label htmlFor="score">Score : {score}</label>
            <input type="range" id='score' name='range' max={10} min={0} onChange={inputChange2}/>
        </fieldset>
        <div className='commments'>
            <label htmlFor="comment">Comment:</label>
            <textarea name="comment" id="comment" cols="100" rows="10" onChange={(e)=>setComment(e.target.value)}></textarea>
        </div>
        <button disabled = {!props.inputValue} type='submit'>Submit</button>
    </form>
  )
}

export default Form