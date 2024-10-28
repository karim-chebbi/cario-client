import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteCar } from '../JS/Actions/CarActions';
import { useNavigate } from 'react-router-dom';

const DeleteCar = ({car}) => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

      const [isModalOpen, setIsModalOpen] = useState(false);
      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const handleDelete = () => {
        dispatch(deleteCar(car._id, navigate));
        handleCancel()
      }
  return (
    <>
      <Button
        type="primary"
        danger
        icon={<DeleteOutlined />}
        onClick={showModal}
      >
        Delete
      </Button>
      <Modal
        title="Delete Car"
        okType="danger"
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete this car ?</p>
      </Modal>
    </>
  );
}

export default DeleteCar