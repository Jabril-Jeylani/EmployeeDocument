import { createSlice } from '@reduxjs/toolkit'
import { data } from './data'

let currentEmployee = {}

const initialState = {
    data,
    currentEmployee
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState, 
    reducers: {
        addEmployee: (state, action) => {
            // setEmployee([...employee, emp]);
            state.data.push(action.payload)
        },
        findEmployee: (state, action) => {
            state.currentEmployee = state.data.find( (person) => person.name === action.payload )
            console.log(state, "state -----------------")
        }
    }
})



export const { addEmployee, findEmployee } = employeeSlice.actions


export default employeeSlice.reducer