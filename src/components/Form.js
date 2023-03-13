import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from "../redux/todos/todosSlice" 



function Form() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault(); // submit olayında ekranın yenilenmesini engeller.
    setTitle("") // submit olduğunda input boşa geçmiş oluyor.
    dispatch(addTodo({id: nanoid(), title, completed: false}))
  }
  return (
    <form onSubmit={handleSubmit}>
        <input 
          className='new-todo'
          placeholder='Ne yapman gerekiyor'
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
    </form>
  )
}

export default Form