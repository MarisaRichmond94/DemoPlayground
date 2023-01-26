import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AccountState {
  amount: number;
}

const initialState: AccountState = {
  amount: 0,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    withdraw: (state, action: PayloadAction<number>) => {
      state.amount -= action.payload;
    },
    deposit: (state, action: PayloadAction<number>) => {
      state.amount += action.payload;
    },
  },
});

export const { withdraw, deposit } = accountSlice.actions;

export const selectAmount = (state: RootState) => state.account.amount;

export const withdrawByAmount = (amount: number) => {
  return {
    type: 'account/withdraw',
    payload: amount,
  }
};

export const depositByAmount = (amount: number) => {
  return {
    type: 'account/deposit',
    payload: amount,
  }
};

export default accountSlice.reducer;
