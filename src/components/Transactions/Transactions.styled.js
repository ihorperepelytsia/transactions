import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Table from "react-bootstrap/Table";

export const ButtonAction = styled(Button)`
  padding: 0 8px;
  margin-right: 10px;
`;

export const TableTr = styled(Table)`
  max-width: 800px;
  margin: 0 auto 24px;
  th {
    text-align: center;
    background-color: grey;
  }
  td {
    text-align: center;
  }
`;
