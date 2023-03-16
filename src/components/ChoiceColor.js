// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// // import { useDispatch } from 'react-redux';
// import '../App.css'
// import { addNote } from '../redux/notes/notesSlice';
// function ChoiceColor() {  
//     const dispatch = useDispatch();
//     const [colorss, setColor] = useState("red")
//     const handleClick = (i) => {
//         dispatch(addNote({color: colorss}))
//         setColor(colors[i]);
//     }
//     const colors = ["red", "green", "yellow", "blue", "grey"];
//   return (
//     <div style={{display:"flex"}}>
//         {colors.map((e,i) => (
//             <button key={i} onClick={() => handleClick(i)}
//                 style={{
//                     cursor: "pointer",
//                     background:`${e}`,
//                     margin:"30px", 
// 	                border:"solid 2px white",
// 	                borderRadius: "30px", 
// 	                width:"50px", 
// 	                height:"50px",
//                 }}  
//             />
//         ))}
//     </div>
//   )
// }

// export default ChoiceColor