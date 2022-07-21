import styled from "styled-components";
import Pagination from "react-bootstrap/Pagination";
export const PaginationContainer = styled(Pagination)`
  justify-content: center;

  span,
  a {
    color: black;
  }

  .active .page-link {
    background-color: lightgrey;
    border-color: lightgrey;
  }
`;
