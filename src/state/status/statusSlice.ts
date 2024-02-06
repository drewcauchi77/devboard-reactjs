import { createSlice } from '@reduxjs/toolkit';
import { I_StatusState } from '../../typings/interfaces';

const initialState: I_StatusState = {
    isMenuCollapsed: true,
};

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        collapseMenu: (state, action) => {
            state.isMenuCollapsed = action.payload;
        }
    }
});

export const { collapseMenu } = statusSlice.actions;

export default statusSlice.reducer;