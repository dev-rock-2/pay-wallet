import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
};

const balanceSlice = createSlice({
    name: "balance",
    initialState,
    reducers: {
        setBalance(state, action: PayloadAction<number>) {
            state.balance = action.payload;
        },
        incrementBalance(state, action: PayloadAction<number>) {
            state.balance += action.payload;
        },
        decrementBalance(state, action: PayloadAction<number>) {
            state.balance -= action.payload;
        },
    },
});

export const { setBalance, incrementBalance, decrementBalance } = balanceSlice.actions;

export default balanceSlice.reducer;