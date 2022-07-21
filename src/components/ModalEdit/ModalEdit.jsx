import React, { useEffect, useState } from "react";
import {
  Overlay,
  Modal,
  CloseModal,
  ButtonAction,
  Container,
  Text,
} from "./ModalEdit.styled";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { editTransaction } from "redux/transactionsSlice";
import { Form } from "react-bootstrap";

export const ModalEdit = ({ setEditModalOpen, id, setId }) => {
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState("");

  const closeEditModal = (e) => {
    if (e.code === "Escape") {
      setEditModalOpen(false);
      setSelectValue("");
      setId("");
    }
    if (
      e.target.tagName === "svg" ||
      e.target.tagName === "path" ||
      e.target.id === "overlay" ||
      e.target.id === "closeEditModal"
    ) {
      setEditModalOpen(false);
      setSelectValue("");
      setId("");
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", closeEditModal);

    return () => {
      window.removeEventListener("keydown", closeEditModal);
    };
  }, []);
  const saveEdit = () => {
    dispatch(editTransaction({ id, selectValue }));
    setSelectValue("");
    setEditModalOpen(false);
    setId("");
  };
  const handleChangeSelect = ({ target }) => {
    setSelectValue(target.value);
  };
  return (
    <Overlay onClick={closeEditModal} id="overlay">
      <Modal>
        <CloseModal id="closeEditModal">
          <IoMdClose />
        </CloseModal>
        <Container>
          <Text>Change transactions status</Text>
          <div onChange={handleChangeSelect}>
            <Form.Check
              inline
              label="Completed"
              name="group1"
              type="radio"
              id={`inline-radio-1`}
              value="Completed"
            />
            <Form.Check
              inline
              label="Pending"
              name="group1"
              type="radio"
              value="Pending"
              id={`inline-radio-2`}
            />
            <Form.Check
              inline
              label="Cancelled"
              type="radio"
              name="group1"
              id={`inline-radio-3`}
              value="Cancelled"
            />
          </div>
          <div>
            <ButtonAction variant="outline-success" onClick={saveEdit}>
              Save edit
            </ButtonAction>
          </div>
        </Container>
      </Modal>
    </Overlay>
  );
};
ModalEdit.propTypes = {
  setEditModalOpen: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
