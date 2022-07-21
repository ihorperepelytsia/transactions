import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const FormFilter = styled(Form)`
  width: 320px;
  display: flex;
  justify-content: space-between;
`;
export const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
export const Select = styled(Form.Select)`
  width: 150px;
  display: block;
  cursor: pointer;
`;
export const Container = styled.div`
  max-width: 800px;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
`;
export const ButtonExport = styled(Button)`
  width: 120px;
`;
export const ButtonImport = styled(Button)`
  width: 120px;
  margin-right: 16px;
  position: relative;
  overflow: hidden;

  label {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  input[type="file"] {
    display: none;
  }
`;
export const SpanNameFile = styled.span`
  position: absolute;
  top: 30px;
  left: 33px;
  font-size: 14px;
`;
