import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { destroy } from '../redux/notes/notesSlice';
function NoteList() {
    const items = useSelector((state) =>state.notes.items);
    const dispatch = useDispatch();
    let item = 0;

    const [text, setText] = useState(item.notes)
    const [popup, setPopup] = useState(null)
    
    const openPopup = (i) => {setPopup(i);};
    const closePopup = () => {setPopup(null)}
    
    return (
      <div>
      {items.map((item, i) => (
        <div key={i}>
          <div
            style={{
              textAlign:"center",
              padding:"30px",
              margin:"auto",
              marginTop:"30px",
              marginBottom:"30px",
              marginLeft:"50px",
              boxShadow: "0 2px 20px 2px grey",
              border: "solid 2px white",
              borderRadius: "10px",
              color:"white",
              width:"70%",
              background: `${item.color}`
            }}
          >
            <button 
            onClick={() => openPopup(i)}
            style={{
              float:"left",
              width: "30px",
              height: "30px",
            }}>Read</button>
            {item.title}
            <button  
              onClick={()=>dispatch(destroy(item.id))} 
              style={
                {
                  width:"30px", 
                  height:"30px",
                  float:"right"
                }
              }>
                X
              </button>
          </div>  
          {popup === i && (
            <div style={
                { 
                  position: "fixed", 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  zIndex: 1, 
                  bottom: 0, 
                  backgroundColor: "rgba(0, 0, 0, 0.5)", 
                }
                }>
              <div style={
                { 
                  position: "absolute",
                  top: "50%", 
                  left: "50%", 
                  transform: "translate(-50%, -50%)", 
                  backgroundColor: "white", 
                  padding: "20px", 
                  borderRadius: "10px", 
                  zIndex: 2 }
                }>
                <h1 style={{textAlign:"center"}}>{item.title}</h1>
                {/* <p>{item.notes}</p> */}
                
                <textarea style={{}} value={item.title} onChange = {(e) => setText(e.target.value)} />
                <button style={{
                  cursor:"pointer"
                }} onClick={closePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

//{popupIndex === i && (
  //             <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1 }}>
  //               <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: "20px", borderRadius: "10px", zIndex: 2 }}>
  //                 <h1>{item.title}</h1>
  //                 <p>{item.content}</p>
  //                 <button onClick={closePopup}>Close</button>
  //               </div>
  //             </div>


export default NoteList
