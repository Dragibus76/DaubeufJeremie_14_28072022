import { createSlice } from '@reduxjs/toolkit';
import generateRandomEmployee from '../utils/generateRandomEmployee';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: Array.from({ length: 20 }, generateRandomEmployee),
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
