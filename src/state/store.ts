import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './status/statusSlice';
import taskReducer from './task/taskSlice';

export const store = configureStore({
    reducer: {
        status: statusReducer,
        task: taskReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;