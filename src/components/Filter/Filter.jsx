import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleTransactions } from "redux/transactionsSelectors";
import {
  onChangeFilterStatusStore,
  addToAllTransactionsTable,
  onChangeFilterTypeStore,
} from "redux/transactionsSlice";
import { createCSVFile } from "utils/createCSVFile";
import { ReaderCVSFileAndMutaionsOnObj } from "utils/ReaderCVSFileAndMutaionsOnObj";
import {
  FormFilter,
  Container,
  Select,
  Div,
  ButtonExport,
  ButtonImport,
  SpanNameFile,
} from "./Filter.styled";

export const Filter = () => {
  const [nameFile, setNameFile] = useState("");
  const visibleTransactions = useSelector(getVisibleTransactions);
  const dispatch = useDispatch();

  const handleChangeSelect = ({ target }) => {
    if (target.id === "status") {
      return dispatch(onChangeFilterStatusStore(target.value));
    }
    if (target.id === "type") {
      return dispatch(onChangeFilterTypeStore(target.value));
    }
  };
  const readerFile = (e) => {
    const file = e.target.files[0];
    setNameFile(file.name);
    ReaderCVSFileAndMutaionsOnObj(file, dispatch, addToAllTransactionsTable);
  };
  const handleExportFile = (e) => {
    e.preventDefault();
    createCSVFile(visibleTransactions);
  };
  return (
    <>
      <Container>
        <FormFilter>
          <Select
            id="status"
            onChange={handleChangeSelect}
            size="sm"
            width="50px"
          >
            <option hidden>Status</option>
            <option value="">All status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </Select>
          <Select id="type" onChange={handleChangeSelect} size="sm">
            <option hidden>Type</option>
            <option value="">All type</option>
            <option value="Refill">Refill</option>
            <option value="Withdrawal">Withdrawal</option>
          </Select>
        </FormFilter>
        <Div>
          {nameFile.length > 0 && <SpanNameFile>{nameFile}</SpanNameFile>}
          <ButtonImport variant="outline-dark" size="sm">
            Import
            <label>
              <input
                type="file"
                name="import"
                multiple
                id="import"
                accept="text/csv"
                onChange={readerFile}
              />
            </label>
          </ButtonImport>

          <ButtonExport
            variant="outline-dark"
            size="sm"
            onClick={handleExportFile}
          >
            Export
          </ButtonExport>
        </Div>
      </Container>
    </>
  );
};
