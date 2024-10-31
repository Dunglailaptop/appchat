import React from "react";
import "flowbite";
import ModalDialog from "../ModalDialog/ModalDialog";
import { datatest, MenuTablePatient } from "../../ultis/menu";

const classNameTitleTable =
  "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left";
const classNameInfoTable =
  "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4";

const DataPatient = () => {
  return (
    <>
      <section class="py-1 bg-blueGray-50">
        <div class="w-full  mb-12 xl:mb-0 px-4 mx-auto mt-2">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700">
                    Danh sách tài khoản
                  </h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    data-modal-target="crud-modal"
                    data-modal-toggle="crud-modal"
                    class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Tạo mới tài khoản
                  </button>
                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    {MenuTablePatient.map((item) => (
                      <th className={classNameTitleTable}>{item.Name}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {datatest.map((item) => (
                    <>
                      <tr>
                        <td className={classNameInfoTable}>
                          {item.MaBenhNhan}
                        </td>

                        <td className={classNameInfoTable}>
                          {item.TenBenhNhan}
                        </td>

                        <td className={classNameInfoTable}>{item.DiaChi}</td>

                        <td className={classNameInfoTable}>{item.GioiTinh}</td>

                        <td className={classNameInfoTable}>{item.TenBo}</td>

                        <td className={classNameInfoTable}>{item.TenMe}</td>

                        <td className={classNameInfoTable}>{item.SDTMe}</td>

                        <td className={classNameInfoTable}>{item.SDTBo}</td>

                        <td className={classNameInfoTable}>{item.NgaySinh}</td>

                        <td className={classNameInfoTable}>{item.DiaChi}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <ModalDialog></ModalDialog>
    </>
  );
};

export default DataPatient;
