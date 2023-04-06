import { createSlice } from "@reduxjs/toolkit";



const addToDoSlice= createSlice({
    name:'todos',
    initialState:[
        
    ],
    reducers:{
        addTodos: (state, action) => {
const newTodo= {
    id:Date.now(),
    title: action.payload.title,
    completed:false,
}
state.push(newTodo);
        },
        toggleComplete:(state, action)=>{
                const index = state.findIndex(
                    (todo) =>todo.id ===action.payload.id
                );
                state[index].completed= action.payload.completed
        },
        deleteTodo: (state,action)=>{
           return state.filter((todo)=>todo.id !== action.payload.id)
        }
    }
})

export const {addTodos, toggleComplete, deleteTodo} =addToDoSlice.actions
export default addToDoSlice.reducer