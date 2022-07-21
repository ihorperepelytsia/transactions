export const createCSVFile = (transactions) => {
  const csvContent =
    "TransactionId,Status,Type,ClientName,Amount\n" +
    transactions
      .map((e) => {
        const values = Object.values(e);

        return values.join(",");
      })
      .join("\n");

  const data = new Blob([csvContent], { type: "text/csv" });
  const csvURL = window.URL.createObjectURL(data);
  const tempLink = document.createElement("a");
  tempLink.href = csvURL;
  tempLink.setAttribute("download", "myCSVFile.csv");
  tempLink.click();
};
