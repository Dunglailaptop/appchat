import React, { useEffect, useState } from "react";
import "flowbite";
import ModalDialog from "../ModalDialog/ModalDialog";
import { MenuTablePrescriptionDetail } from "../../ultis/Model/PrescriptionDetail";
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

const DataPrescriptionDetail = () => {
    const [countcheck, setCountcheck] = useState(0);
    const [work, setWork] = useState("");
    const dispatch = useDispatch();
    console.log(countcheck);
    // Lấy dữ liệu từ store, sẽ tự động cập nhật mỗi khi store thay đổi
    const Patientdata = useSelector((state) => state.app.banner || []);
    const countdata = useSelector((state) => state.app.countdata || []);
    useEffect(() => {
        // Gọi API và cập nhật store
        dispatch(action.getListPrescriptionDetail(countcheck, work));
    }, [dispatch]);
    const handlenext = () => {
        setCountcheck((prevCount) => prevCount + 20);
        dispatch(action.getListPrescriptionDetail(countcheck, work));
    };
    const handleagain = () => {
        setCountcheck((prevCount) => (prevCount > 0 ? prevCount - 20 : prevCount));
        dispatch(action.getListPrescriptionDetail(countcheck, work));
    };
    const sreach = () => {
        dispatch(action.getListPrescriptionDetail(countcheck, work));
    };

    return (
        <>
            <section class="py-1 bg-blueGray-50">
                <div class="w-full  mb-12 xl:mb-0 px-4 mx-auto mt-2">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 class="font-semibold text-base text-blueGray-700">
                                        Danh sách chi tiết toa thuốc
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
                                            <CiSearch onClick={sreach}></CiSearch>
                                        </span>
                                        <input
                                            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                            placeholder="Search for anything..."
                                            type="text"
                                            name="search"
                                            value={work}
                                            onChange={(e) => setWork(e.target.value)}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="block w-full overflow-x-auto">
                            <table class="items-center bg-transparent w-full border-collapse">
                                <thead>
                                    <tr>
                                        {MenuTablePrescriptionDetail.map((item) => (
                                            <th className={classNameTitleTable}>{item.Name}</th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {Patientdata.map((prescription, index) => (
                                        <tr key={index}>
                                            <td className={classNameInfoTable}>{prescription.stt}</td>
                                            <td className={classNameInfoTable}>
                                                {prescription.drug_material_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.ma_hoat_chat_ax}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.duong_dung_ax}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_so_dk_gpnk}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_ham_luong}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.code}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.code_insurance}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.enum_insurance_type}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.proprietary_name}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.insurance_name}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.ten_thuongmai}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.drug_original_name_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.original_names}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.default_usage_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.enum_usage}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.enum_unit_import_sell}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.unit_usage_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.allow_auto_cal}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.num_of_day}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.max_usage}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.num_of_time}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.unit_volume_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.volume_value}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.disable}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.made_in}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.country_name}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.include_children}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.insurance_support}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.cancer_drug}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.price}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.ham_luong}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.dong_goi}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.tac_dung}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.chi_dinh}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.chong_chi_dinh}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.tac_dung_phu}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.lieu_luong}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.poison_type_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.pharmacology_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.manufacturer_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.ten_hang_sx}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.renumeration_price}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.renumeration_price}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.so_dk_gpnk}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.price_bv}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.price_qd}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.latest_import_price_vat}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.latest_import_price}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_bhyt_in_surgery}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.stt_tt}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bv_ap_thau}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.stt_dmt}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_effect_date}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_exp_effect_date}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.ngay_hieu_luc_hop_dong}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.goi_thau_bhyt}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.phan_nhom_bhyt}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.insurance_drug_material_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_loai_thuoc}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_loai_thau}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_nha_thau}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_nha_thau_bak}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_quyet_dinh}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_so_luong}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhxh_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.creator_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.created_at}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.modifier_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.updated_at}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhxh_pay_percent}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.service_group_cost_code}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.ma_thuoc_dqg}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.khu_dieu_tri}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.note}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.dang_bao_che}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.locked}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.code_atc}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.co_han_dung}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.t_trantt}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bk_enum_item_type}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_control}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.nhom_thuoc}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.nhom_duoc_ly}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.phan_nhom_thuoc_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.dst_price}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.im_price}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_special_dept}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.thang_tuoi_chi_dinh}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.max_one_times}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.max_one_times_by_weight}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.min_one_times_by_weight}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.max_one_day}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.max_one_day_by_weight}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.min_one_day_by_weight}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.thuoc_ra_le}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.gia_temp}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_inventory}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.loai_thuan_hop}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.khong_thanh_toan_rieng}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_used_event}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_nha_thau_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_nha_thau_code}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.so_luong_cho_nhap}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.so_luong_da_nhan}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_used_event_idm}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.dose_quantity}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.dose_unit}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.thoi_gian_bao_quan}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.ten_theo_thau}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.prescription_item_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.prescription_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.medicine_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.usage_title}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.usage_num}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.dosage}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.time}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.quantity_num}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.confirm_sell_num}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.quantity_title}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.dosage_title}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.morning}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.noon}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.afternoon}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.evening}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.paid}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_bhyt}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_pay_percent}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_bhbl}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhbl_percent}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.insurance_company_id}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhbl_amount}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhbl_must_buy_full}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.status}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.num_per_time}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_deleted}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.solan_ngay}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_max_one_times}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_max_one_times_by_weight}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_max_one_day}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_max_one_day_by_weight}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_min_one_day_by_weight}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_min_one_times_by_weight}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.is_duply_original_name}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.warning_note_doctor}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.bhyt_store}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.canh_bao_thang_tuoi_chi_dinh}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.loai_ke_toa}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.buoi_uong}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.da_cap}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.quantity_use}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.quantity_remain}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.ngay_dung_thuoc}
                                            </td>
                                            <td className={classNameInfoTable}>
                                                {prescription.order_by}
                                            </td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DataPrescriptionDetail;
