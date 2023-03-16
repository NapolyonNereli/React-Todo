import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
           
        ]
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: ({ notes, title, color }) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        notes,
                        color,
                    }
                }    
            }   
        },  
        destroy: (state, action) => {
            const id = action.payload
            const filtred = state.items.filter((item) => item.id !== id)
            state.items = filtred;
        },
        listFilter: (state, action) => {
            const title = action.payload
            const filtred = state.items.filter((item) => item.title.toLowerCase() === title)
            state.items = filtred;
        }
    }
})


export const {addNote, destroy, listFilter} = notesSlice.actions;
export default notesSlice.reducer;