import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getVisibleTransactions } from "redux/transactionsSelectors";
import { ModalEdit } from "components/ModalEdit/ModalEdit";
import { ModalDelete } from "components/ModalDelete/ModalDelete";
import { ButtonAction, TableTr } from "./Transactions.styled";
import { PaginationComponent } from "components/PaginationComponent/PaginationComponent";

export const Transactions = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currenPage, setCurrenPage] = useState(1);
  const [amountTransactions] = useState(10);
  const [id, setId] = useState("");
  const transactions = useSelector(getVisibleTransactions);
  const lastTransactionIndex = currenPage * amountTransactions;
  const firstTransactionIndex = lastTransactionIndex - amountTransactions;
  const currentTransactionIndex = transactions.slice(
    firstTransactionIndex,
    lastTransactionIndex
  );

  const handleOpenEditModal = (e) => {
    setId(e.target.name);
    setEditModalOpen(true);
  };
  const handleOpenDeleteModal = (e) => {
    setId(e.target.name);
    setDeleteModalOpen(true);
  };

  return (
    <>
      <TableTr striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Type</th>
            <th>Client Name</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            currentTransactionIndex.map((el) => (
              <tr key={el.TransactionId}>
                <td>{el.TransactionId}</td>
                <td>{el.Status}</td>
                <td>{el.Type}</td>
                <td>{el.ClientName} </td>
                <td>{el.Amount}</td>
                <td>
                  <ButtonAction
                    variant="outline-dark"
                    name={el.TransactionId}
                    onClick={handleOpenEditModal}
                  >
                    Edit
                  </ButtonAction>

                  <ButtonAction
                    variant="outline-dark"
                    name={el.TransactionId}
                    onClick={handleOpenDeleteModal}
                  >
                    Delite
                  </ButtonAction>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No transactions</td>
            </tr>
          )}
        </tbody>
      </TableTr>
      {editModalOpen && (
        <ModalEdit id={id} setEditModalOpen={setEditModalOpen} setId={setId} />
      )}
      {deleteModalOpen && (
        <ModalDelete
          id={id}
          setDeleteModalOpen={setDeleteModalOpen}
          setId={setId}
        />
      )}
      {transactions.length !== 0 && (
        <PaginationComponent
          amountTransactions={amountTransactions}
          totalTransactions={transactions.length}
          currenPage={currenPage}
          setCurrenPage={setCurrenPage}
        />
      )}
    </>
  );
};
