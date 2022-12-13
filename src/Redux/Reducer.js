import { createSlice } from "@reduxjs/toolkit";


const TaskSlice = createSlice({
    name : "Tasks",
    initialState : {
        list : [
            {
            titre : "Reading",
            status : false
        },
        {
            titre : "Coding",
            status : false
        }
    ]
    },
    reducers :{
      
        add(state, action ){
            
           state.list = [...state.list, action.payload]
        },
        
        RemoveTask(state, action){

            state.list = [...state.list.filter(item => item.titre !== action.payload)]
            
        }

    }
})

export const {add, RemoveTask} = TaskSlice.actions

export default TaskSlice.reducer