import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "react-bootstrap/Pagination";
import { PaginationContainer } from "./PaginationComponent.styled";
import { useSelector } from "react-redux";
import { getFilterStatus, getFilterType } from "redux/transactionsSelectors";

export const PaginationComponent = ({
  amountTransactions,
  totalTransactions,
  setCurrenPage,
  currenPage,
}) => {
  const followTheFilterStatus = useSelector(getFilterStatus);
  const followTheFilterType = useSelector(getFilterType);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalTransactions / amountTransactions); i++) {
    pageNumber.push(i);
  }

  useEffect(() => {
    if (followTheFilterStatus || followTheFilterType !== "") {
      setCurrenPage(1);
    }
  }, [followTheFilterStatus, followTheFilterType]);

  const nextPage = () => setCurrenPage((prev) => prev + 1);
  const prevPage = () => setCurrenPage((prev) => prev - 1);

  return (
    <>
      <PaginationContainer>
        <Pagination.First
          onClick={() => setCurrenPage(1)}
          disabled={currenPage === 1}
        />
        <Pagination.Prev onClick={prevPage} disabled={currenPage === 1} />
        {pageNumber.map((number) => (
          <Pagination.Item
            key={number}
            onClick={() => setCurrenPage(number)}
            active={currenPage === number}
          >
            {number}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={nextPage}
          disabled={currenPage === pageNumber.length}
        />
        <Pagination.Last
          onClick={() => setCurrenPage(pageNumber.length)}
          disabled={currenPage === pageNumber.length}
        />
      </PaginationContainer>
    </>
  );
};
PaginationComponent.propTypes = {
  amountTransactions: PropTypes.number.isRequired,
  totalTransactions: PropTypes.number.isRequired,
  currenPage: PropTypes.number.isRequired,
  setCurrenPage: PropTypes.func.isRequired,
};
