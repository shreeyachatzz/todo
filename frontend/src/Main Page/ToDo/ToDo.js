import React from 'react'

import {BiEdit} from 'react-icons/bi'
import {AiFillDelete } from 'react-icons/ai'

import './ToDo.css'

const ToDo = ({text, deadline, subject, updateMode, deleteToDo}) => {
  return (
    <div className='todocont'>
    <div className='todo'>
    <div className='info'>
      <div className='text'>
        {text}
      </div>
      <div className='more'>
        {deadline && (
          <div className='m1'>
          <div className='title'>Deadline:&nbsp;</div> {deadline}
          </div>
        )}
        {subject && (
          <div className='m1'>
            <div className='title'>Subject:&nbsp;</div> {subject}
          </div>
        )}
      </div>
    </div>
        
        <div className='icons'>
            <BiEdit className='icon1' onClick={updateMode}/>
            <AiFillDelete className='icon2' onClick={deleteToDo}/> 
        </div>
    </div>
    </div>
  )
}

export default ToDo