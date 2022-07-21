export const getFilterStatus = (state) => state.transactions.filterStatus;
export const getFilterType = (state) => state.transactions.filterType;
export const getTransactions = (state) => state.transactions.transactions;

export const getVisibleTransactions = (state) => {
  const allTransctions = getTransactions(state);
  const filterStatus = getFilterStatus(state);
  const filterType = getFilterType(state);
  return allTransctions
    .filter(({ Status }) => Status.includes(filterStatus))
    .filter(({ Type }) => Type.includes(filterType));
};
