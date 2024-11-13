import React, { useState } from "react";
import { Button, Modal } from "antd";
import "flowbite";
import { silderbarTopDetailPatient as Top } from "../../components";
import { Outlet } from "react-router";
import {useSelector} from "react-redux";

const ModalDialog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const DataPatientDetail = useSelector((state) => state.app.PatientDetail || []);
  const requiredFields = ['patient_id', 'patient_code', 'p_name','gender','date_of_birth'];
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
        Show
      </Button>
      <Modal
        style={{ minWidth: 1000 }}
        title={DataPatientDetail.patient_code}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <h1 className="text-center">THÔNG TIN HÀNH CHÁNH</h1>
          <ul>
            <li className="flex">
              <h3>họ tên bệnh nhân:</h3>
              <h2 className="font-bold">{DataPatientDetail.p_name}</h2>
            </li>
            <li className="flex">
              <h3>ngày sinh:</h3>
              <h2 className="font-bold">{DataPatientDetail.date_of_birth}</h2>
            </li>
            <li className="flex">
              <h3>giới tính:</h3>
              <h2 className="font-bold">{DataPatientDetail.gender}</h2>
            </li>
            <li className="flex">
              <h3>Địa chỉ:</h3>
              <h2 className="font-bold">{DataPatientDetail.full_address}</h2>
            </li>
            <li className="flex">
              <h3>họ tên mẹ:</h3>
              <h2 className="font-bold">{DataPatientDetail.mother_name}</h2>
            </li>
            <li className="flex">
              <h3>SDT mẹ:</h3>
              <h2 className="font-bold">{DataPatientDetail.mother_phone}</h2>
            </li>
            <li className="flex">
              <h3>họ tên bố:</h3>
              <h2 className="font-bold">{DataPatientDetail.father_name}</h2>
            </li>
            <li className="flex">
              <h3>SDT bố:</h3>
              <h2 className="font-bold">{DataPatientDetail.father_phone}</h2>
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
