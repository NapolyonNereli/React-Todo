import React, { useState } from 'react'

function Form() {
  const [words, setWords] = useState("");

  // notesSelector.map((e) => {
  //   if (e.title === words) {
  //       console.log("eşitke: ",words.toLowerCase())
  //   }
  //   else {
  //     return
  //   }
  // });
   console.log(words)
  return (
    <form> 
        <input value={words} onChange={(e) => setWords(words)} className='search-item' placeholder='search' />        
    </form>
  )
}

export default Form