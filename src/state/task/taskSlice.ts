import { createSlice } from '@reduxjs/toolkit';
import { I_TaskState } from '../../typings/interfaces';

const initialState: I_TaskState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        }
    }
});

export const { setTasks } = taskSlice.actions;

export default taskSlice.reducer;