import React from "react";
import { Transactions } from "components/Transactions/Transactions";
import { Filter } from "components/Filter/Filter";
export const App = () => {
  return (
    <>
      <Filter />
      <Transactions />
    </>
  );
};
