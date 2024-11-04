import React, { useEffect,useState } from "react";
import "flowbite";
import ModalDialog from "../ModalDialog/ModalDialog";
import { datatest, MenuTablePatient } from "../../ultis/menu";
import icon from "../../ultis/icons";
import * as api from "../../Apis";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../../store/actions/actionTypes";
import * as action from "../../store/actions/ApiDataPatient";
import { FaSquareTwitter } from "react-icons/fa6";

const { FaAngleRight, FaAngleLeft, CiSearch } = icon;

const classNameTitleTable =
  "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left";
const classNameInfoTable =
  "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4";

const DataPatient = () => {
  const [countcheck, setCountcheck] = useState(0);
  const [work,setWork] = useState('');
  const dispatch = useDispatch();
  console.log(countcheck)
  // Lấy dữ liệu từ store, sẽ tự động cập nhật mỗi khi store thay đổi
  const Patientdata = useSelector((state) => state.app.banner || []);
  const countdata = useSelector((state) => state.app.countdata || []);
  useEffect(() => {
    // Gọi API và cập nhật store
    dispatch(action.getdata(countcheck,work));
  }, [dispatch]);
   const handlenext = () => {
      setCountcheck(prevCount => prevCount + 20);
      dispatch(action.getdata(countcheck,work))
   }
   const handleagain = () => {
    setCountcheck(prevCount => (prevCount > 0 ? prevCount - 20 : prevCount));
    dispatch(action.getdata(countcheck,work))
   }
   const sreach = () => {
    dispatch(action.getdata(countcheck,work))
   }
  

  return (
    <>
      <section class="py-1 bg-blueGray-50">
        <div class="w-full  mb-12 xl:mb-0 px-4 mx-auto mt-2">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700">
                    Danh sách bệnh nhân
                  </h3>
                </div>

                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <nav
                    aria-label="Pagination"
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      onClick={handleagain}
                    >
                      <span className="sr-only">Previous</span>
                      <FaAngleLeft></FaAngleLeft>
                    </a>
                    {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                    <a
                      href="#"
                      aria-current="page"
                      className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {countcheck}/{countdata}
                    </a>

                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      onClick={handlenext}
                    >
                      <span className="sr-only">Next</span>
                      <FaAngleRight></FaAngleRight>
                    </a>
                  </nav>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <label class="relative block">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                      <CiSearch 
                       onClick={sreach}
                      ></CiSearch>
                    </span>
                    <input
                      class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                      placeholder="Search for anything..."
                      type="text"
                      name="search"
                      value={work}
                      onChange={e => setWork(e.target.value)}
                    />
                  </label>
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
                  {Patientdata.map((patient, index) => (
                    <tr key={index}>
                        <td className={classNameInfoTable}>
                        {patient.stt}
                      </td>
                      <td className={classNameInfoTable}>
                        {patient.patient_code}
                      </td>
                      <td className={classNameInfoTable}>
                        {patient.p_name}
                      </td>
                      <td className={classNameInfoTable}>{patient.date_of_birth}</td>
                      <td className={classNameInfoTable}>{patient.father_name}</td>
                      <td className={classNameInfoTable}>{patient.mother_name}</td>
                      <td className={classNameInfoTable}>
                        {patient.father_phone}
                      </td>
                      <td className={classNameInfoTable}>
                        {patient.mother_phone}
                      </td>
                      <td className={classNameInfoTable}>
                        {patient.ethnic_vi_name}
                      </td>
                      <td className={classNameInfoTable}>
                        {patient.vi_nationality}
                      </td>
                      <td className={classNameInfoTable}>
                        {patient.gender}
                      </td>
                      <td className={classNameInfoTable}>
                        {patient.full_address}
                      </td>
                    </tr>
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
