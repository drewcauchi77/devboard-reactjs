import { createSlice } from '@reduxjs/toolkit';
import { I_TaskState } from '../../typings/interfaces';

const initialState: I_TaskState = {
    tasks: [],
    filteredTasks: {},
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        setFilteredTasksByStatus: (state, action) => {
            state.filteredTasks = action.payload;
        },
    }
});

export const { setTasks, setFilteredTasksByStatus } = taskSlice.actions;

export default taskSlice.reducer;