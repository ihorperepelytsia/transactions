import { configureStore } from "@reduxjs/toolkit";
import { transactionsSlice } from "./transactionsSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice.reducer,
  },
});
