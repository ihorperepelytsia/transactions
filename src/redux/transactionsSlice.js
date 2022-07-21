import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    filterStatus: "",
    filterType: "",
  },
  reducers: {
    addToAllTransactionsTable(state, action) {
      state.transactions = [...action.payload];
    },
    deleteTransactionStore(state, action) {
      state.transactions = [
        ...state.transactions.filter(
          ({ TransactionId }) => TransactionId !== action.payload
        ),
      ];
    },
    editTransaction(state, action) {
      state.transactions = [
        ...state.transactions.map((el) =>
          el.TransactionId === action.payload.id
            ? {
                ...el,
                Status: action.payload.selectValue,
              }
            : el
        ),
      ];
    },
    onChangeFilterStatusStore(state, action) {
      state.filterStatus = action.payload;
    },
    onChangeFilterTypeStore(state, action) {
      state.filterType = action.payload;
    },
  },
});

export const {
  onChangeFilterStatusStore,
  addToAllTransactionsTable,
  onChangeFilterTypeStore,
  addToAllTransactionsFilterTable,
  deleteTransactionStore,
  editTransaction,
} = transactionsSlice.actions;
