import React, { useState } from "react";
import { Button, Modal } from "antd";
import "flowbite";
import { silderbarTopDetailPatient as Top } from "../../components";
import { Outlet } from "react-router";

const ModalDialog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        style={{ minWidth: 1000 }}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <h1 className="text-center">thông tin hành chánh</h1>
          <ul>
            <li className="flex">
              <h3>họ tên bệnh nhân:</h3>
              <h2 className="font-bold">Nguyen Xuan Tien DUng</h2>
            </li>
            <li className="flex">
              <h3>ngày sinh:</h3>
              <h2 className="font-bold">Nguyen Xuan Tien DUng</h2>
            </li>
            <li className="flex">
              <h3>giới tính:</h3>
              <h2 className="font-bold">Nguyen Xuan Tien DUng</h2>
            </li>
            <li className="flex">
              <h3>Địa chỉ:</h3>
              <h2 className="font-bold">Nguyen Xuan Tien DUng</h2>
            </li>
            <li className="flex">
              <h3>họ tên mẹ:</h3>
              <h2 className="font-bold">Nguyen Xuan Tien DUng</h2>
            </li>
            <li className="flex">
              <h3>SDT mẹ:</h3>
              <h2 className="font-bold">Nguyen Xuan Tien DUng</h2>
            </li>
            <li className="flex">
              <h3>họ tên bố:</h3>
              <h2 className="font-bold">Nguyen Xuan Tien DUng</h2>
            </li>
            <li className="flex">
              <h3>SDT bố:</h3>
              <h2 className="font-bold">Nguyen Xuan Tien DUng</h2>
            </li>
          </ul>
        </div>
        <div>
          <Top></Top>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </Modal>
    </>
  );
};

export default ModalDialog;
