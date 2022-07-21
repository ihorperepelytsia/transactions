import styled from "styled-components";
import Button from "react-bootstrap/Button";
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1200;
`;

export const Modal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 32px;
  padding: 10px;
  margin: 12px;
  color: whitesmoke;
`;

export const Container = styled.div`
  border: 1px solid rgb(53, 64, 95);
  border-radius: 15px;
  text-align: center;
  width: 700px;
  background-color: whitesmoke;
  margin: 0 auto 26px;
`;

export const Text = styled.h3`
  color: rgb(48, 48, 48);
  font-size: 30px;
  margin: 0;
  padding: 30px 0 30px;
`;

export const ButtonAction = styled(Button)`
  padding: 0 8px;
  margin: 20px;
`;
