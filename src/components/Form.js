import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { destroy } from '../redux/notes/notesSlice';

function Form() {
  const items = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();

  const [words, setWords] = useState("");
  const [popup, setPopup] = useState(null);

  const handleInputChange = (e) => {
    setWords(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.title.toLowerCase().includes(words.toLowerCase());
  });

  const openPopup = (i) => {
    setPopup(i);
  };

  const closePopup = () => {
    setPopup(null);
  };


  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={words}
        onChange={handleInputChange}
        className='search-item'
        placeholder='search'
      />
      
      {filteredItems.map((item,i) => (
        <div key={i}>
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              margin: "auto",
              marginTop: "30px",
              marginLeft: "50px",
              boxShadow: "0 2px 20px 2px grey",
              border: "solid 2px white",
              borderRadius: "10px",
              color: "white",
              width: "70%",
              background: `${item.color}`
            }}
          >
            <h2>{item.title}</h2>
            <button
              onClick={() => openPopup(i)}
              style={{
                float: "left",
                width: "30px",
                height: "30px"
              }}
            >
              Read
            </button>
            <button
              onClick={() => dispatch(destroy(item.id))}
              style={{
                width: "30px",
                height: "30px",
                float: "right"
              }}
            >
              X
            </button>
          </div>
          {popup === i && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  zIndex: 2
                }}
              >
                <h2 style={{textAlign:"center"}}>{item.title}</h2>
                <textarea
                  style={{
                    height:"300px",
                    width: "500px",
                  }}
                  value={item.notes}
                />
                <button
                  style={{
                    cursor: "pointer"
                  }}
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </form>
  );
}

export default Form;
