import React, { useState } from "react";
import "flowbite";
import { Button, Modal } from "antd";
import ModelDialogPrescription from "../ModalDialog/ModelDialogPrescription";

const DataInvoiceOutPatient = () => {
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
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      
      >
        <div className="max-w-4xl mx-auto bg-white p-8 font-sans">
          {/* Header */}
          <div className="grid grid-cols-3 text-center mb-8">
            <div className="text-sm">
              <div>SỞ Y TẾ TP. HỒ CHÍ MINH</div>
              <div className="font-bold">BỆNH VIỆN NHI ĐỒNG 2</div>
              <div>------------------</div>
              <div className="font-bold">Khoa Khám Bệnh</div>
              <div>Phòng: 320ND - Ca: 2</div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-xl">ĐƠN THUỐC</h4>
            </div>

            <div className="text-right">
              <img
                src="http://192.168.0.63/bqrcode/?bcid=code39&text=79408210169807&scale=1&includetext&guardwhitespace&height=12"
                alt="Barcode"
                className="ml-auto mb-4"
              />
            </div>
          </div>

          {/* Patient Info */}
          <div className="space-y-2 mb-6">
            <div className="grid grid-cols-2">
              <div>
                Họ tên: <span className="font-bold pl-2">PHẠM THIÊN DUYÊN</span>
              </div>
              <div>
                Giới tính: <span className="pl-2">Nữ</span>{" "}
                <span className="pl-4">Tuổi: 4 tuổi 0 tháng</span>
              </div>
            </div>
            <div>
              Địa chỉ:{" "}
              <span>
                14d Ụ Ghe, P.Tam Phú, Thành Phố Thủ Đức, TP. Hồ Chí Minh
              </span>
            </div>
            <div>
              Cha mẹ/người giám hộ:{" "}
              <span className="font-bold uppercase">Phạm Nguyễn Minh Thảo</span>
            </div>
            <div>
              Biểu hiện lâm sàng: <span>ho, sổ mũi</span>
            </div>
            <div>Cân nặng: 8Kg Chiều cao: 75Cm</div>
            <div>
              Chẩn đoán: <span className="font-bold">J02 - Viêm họng cấp</span>
            </div>
          </div>

          {/* Medications */}
          <div className="mb-6">
            <div className="font-bold mb-2">- Chỉ định dùng thuốc:</div>

            <div className="space-y-4 pl-3">
              {/* Medication 1 */}
              <div>
                <div className="flex justify-between">
                  <div>
                    <span className="font-bold pr-2">1</span> Prednisolon (
                    <span className="font-bold uppercase text-sm">
                      SOREDON NN 5mg (VIÊN)
                    </span>
                    )
                  </div>
                  <div className="font-bold">5 Viên</div>
                </div>
                <div className="pl-8">Viên hòa tan uống sau ăn</div>
                <div className="pl-8">
                  <span className="font-bold">Uống</span> mỗi ngày 1 lần, mỗi
                  lần 1 Viên
                  <div className="text-sm">Buổi: Sáng</div>
                </div>
              </div>

              {/* Medication 2 */}
              <div>
                <div className="flex justify-between">
                  <div>
                    <span className="font-bold pr-2">2</span> Cao khô lá thường
                    xuân (
                    <span className="font-bold uppercase text-sm">
                      IVYTUS 35mg/5ml - 200ml (CHAI)
                    </span>
                    )
                  </div>
                  <div className="font-bold">1 Chai</div>
                </div>
                <div className="pl-8">
                  <span className="font-bold">Uống</span> mỗi ngày 3 lần, mỗi
                  lần 2.5 ml
                  <div className="text-sm">Buổi: Sáng, trưa, chiều</div>
                </div>
              </div>

              {/* Medication 3 */}
              <div>
                <div className="flex justify-between">
                  <div>
                    <span className="font-bold pr-2">3</span> Natri clorid (
                    <span className="font-bold uppercase text-sm">
                      NATRI CLORID 0,9% - 10ml (LỌ)
                    </span>
                    )
                  </div>
                  <div className="font-bold">1 Lọ</div>
                </div>
                <div className="pl-8">
                  <span className="font-bold">Nhỏ mũi</span> mỗi ngày 4 lần, mỗi
                  lần 5 giọt
                  <div className="text-sm">Buổi: Sáng, trưa, chiều, tối</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="grid grid-cols-2 mt-8">
            <div>
              <div className="font-bold mb-2">
                TÁI KHÁM: <span>21/09/2022</span>
              </div>
              <div className="text-sm space-y-1">
                <div>
                  *Lau mát khi sốt{" "}
                  <span className="pl-3">*Uống nhiều nước</span>
                </div>
                <div className="font-bold">Tái khám ngay khi:</div>
                <div>
                  *Sốt cao không giảm <span className="px-3">*Tím tái</span>
                  *Khát nước
                </div>
                <div>
                  *Thở bất thường <span className="px-3">*Ói nhiều</span>
                  *Tiêu máu
                </div>
                <div>
                  *Bệnh nặng hơn <span className="px-3">*Bỏ ăn uống</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm mb-2">
                11 giờ 16 phút, Ngày 18 tháng 09 năm 2022
              </div>
              <div>BÁC SĨ KHÁM BỆNH</div>
              <div className="mt-16 font-bold">BS. TRẦN CÔNG VINH</div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DataInvoiceOutPatient;
