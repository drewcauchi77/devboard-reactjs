import { createSelector, createSlice } from '@reduxjs/toolkit';
import { I_TaskState, I_FilteredTasks } from '../../typings/interfaces';
import { RootState } from '../store';

const initialState: I_TaskState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
    }
});

export const getTasks = (state: RootState) => state.task.tasks;

export const getFilteredTasksByStatus = createSelector(
    [getTasks],
    (tasks) => {
        const filteredTasksByStatus: I_FilteredTasks = { new: [], active: [], resolved: [], onhold: [], closed: [] };

        tasks.forEach((task) => {
            if (!filteredTasksByStatus[task.status]) {
                filteredTasksByStatus[task.status] = [task];
            } else {
                filteredTasksByStatus[task.status].push(task);
            }
        });

        return filteredTasksByStatus;
    }
);

export const { setTasks, addTask } = taskSlice.actions;

export default taskSlice.reducer;