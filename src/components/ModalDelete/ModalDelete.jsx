import {
  ButtonAction,
  CloseModal,
  Container,
  Modal,
  Overlay,
  Text,
} from "components/ModalEdit/ModalEdit.styled";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
import { deleteTransactionStore } from "redux/transactionsSlice";
import { useDispatch } from "react-redux";

export const ModalDelete = ({ setDeleteModalOpen, id, setId }) => {
  const dispatch = useDispatch();

  const closeDeleteModal = (e) => {
    if (e.code === "Escape") {
      setDeleteModalOpen(false);
      setId("");
    }
    if (
      e.target.tagName === "svg" ||
      e.target.tagName === "path" ||
      e.target.id === "overlay" ||
      e.target.id === "closeEditModal"
    ) {
      setDeleteModalOpen(false);
      setId("");
    }
    if (e.target.name === "no delete") {
      setDeleteModalOpen(false);
      setId("");
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", closeDeleteModal);

    return () => {
      window.removeEventListener("keydown", closeDeleteModal);
    };
  }, []);

  const deleteTr = () => {
    dispatch(deleteTransactionStore(id));
    setDeleteModalOpen(false);
    setId("");
  };
  return (
    <>
      <Overlay onClick={closeDeleteModal} id="overlay">
        <Modal>
          <CloseModal id="closeEditModal">
            <IoMdClose />
          </CloseModal>
          <Container>
            <Text>Are you sure you want to delete this transaction ?</Text>

            <ButtonAction variant="outline-success" onClick={deleteTr}>
              Yes, delete
            </ButtonAction>
            <ButtonAction
              variant="outline-secondary"
              name="no delete"
              onClick={closeDeleteModal}
            >
              No
            </ButtonAction>
          </Container>
        </Modal>
      </Overlay>
    </>
  );
};

ModalDelete.propTypes = {
  setDeleteModalOpen: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
