import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { addNote } from '../redux/notes/notesSlice';

function NotesArea() {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState("");
  const [title, setTitle] = useState("isimsiz ");
  const [color, setColor] = useState("black");

  
  const colorFul = () => {
    const redColor = Math.floor(Math.random() * 256)
    const greenColor = Math.floor(Math.random() * 256)
    const blueColor = Math.floor(Math.random() * 256)
    setColor(`rgba(${redColor}, ${greenColor}, ${blueColor}, 0.5)`)
  }

  const notesTitle = () => {
    let enterTitle = prompt("title: ");
    if(!enterTitle) enterTitle = title; 
    setTitle(enterTitle)   
    dispatch(addNote({ notes, title: enterTitle, color: color}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!notes) return;
    colorFul();
    setNotes(""); 
    notesTitle();
  }


  return (
    <form style={{textAlign:"center"}} >
      <textarea 
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className='search-item' 
        style={{height: "100px"}} 
        placeholder="notes" 
      />
      <button onClick={handleSubmit}
      style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "100px",
          paddingRight:"100px",
          background:"#af5b5e",
          borderRadius: "15px",
          cursor:"pointer",
          color:"white",
          fontSize:"20px",
        }} 
      >
        Add Note
      </button> 
    </form>
  )
}

export default NotesArea


// submit'e tıklandığında pop'up açılıp uygulamanın title'ını alıp devam edilsin.....