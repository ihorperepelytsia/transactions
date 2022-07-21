export const ReaderCVSFileAndMutaionsOnObj = (
  file,
  dispatch,
  addToAllTransactionsTable
) => {
  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = () => {
    let data = reader.result;
    const transactions = data
      .split("\n")
      .map((x) => x.split(","))
      .reduce((acc, el, index) => {
        if (index !== 0) {
          const createObjTransactions = {
            TransactionId: el[0],
            Status: el[1],
            Type: el[2],
            ClientName: el[3],
            Amount: el[4],
          };

          acc.push(createObjTransactions);
        }

        return acc;
      }, []);
    dispatch(addToAllTransactionsTable(transactions));
  };
  reader.onerror = () => {
    console.log(reader.error);
  };
};
