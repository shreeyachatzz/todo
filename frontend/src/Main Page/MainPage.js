import React from 'react'
import { useEffect, useState } from 'react';
import './MainPage.css';
import ToDo from './ToDo/ToDo';
import { addToDo, getAllToDo, updateToDo, deleteToDo } from '../utils/HandleApi';
import Giffy from './Giffyy.js';

const MainPage = () => {
    const [toDo, setToDo] =useState([])
  const [text, setText] = useState("")
  const [deadline, setDeadline] = useState("")
  const [subject, setSubject] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode = (_id, text,subject,deadline) => {
    setText(text)
    setDeadline(deadline)
    setSubject(subject)
    setIsUpdating(true)
    setToDoId(_id)
  }

  const sortedToDo = toDo.slice().sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  return (
    <div className='mainPage'> 
    <div className="container">
    
        <h1>TASKS</h1>
    <Giffy/>
    <div className="field">
    <div className='inputting'>
      <input 
      type="text" 
      className= "textt" 
      placeholder="Your Task ..."
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
      <div className='smin'>
      <input 
      type="date" 
      className= "textt2" 
      placeholder="Deadline"
        value={deadline}
        onChange={(e)=>setDeadline(e.target.value)}
      />
      <input 
      type="text" 
      className= "textt2" 
      placeholder="Subject"
        value={subject}
        onChange={(e)=>setSubject(e.target.value)}
      />
      </div>
      </div>
      <div className="addbut" 
      onClick={isUpdating? 
      ()=>updateToDo(toDoId, text ,subject, deadline, setText, setSubject, setDeadline, setToDo, setIsUpdating)  
      : ()=>addToDo(text, subject, deadline, setDeadline, setSubject, setText, setToDo)}>
      {isUpdating? "Update": 'Add'}
      </div>
    </div>
    <div className='ll'>
    <div className='list'>
      {sortedToDo.map((item)=> <ToDo 
          key={item._id} 
          text={item.text}
          subject={item.subject}
          deadline={item.deadline}
          updateMode={()=> updateMode(item._id, item.text, item.deadline, item.subject)}
          deleteToDo={()=> deleteToDo(item._id, setToDo)}
        />
        )}
    </div>
    </div>
  </div>
  </div>
  )
}

export default MainPage