import icons from "./icons";

const {
  MdOutlineLibraryMusic,
  HiLibrary,
  HiMiniUserGroup,
  IoMdSettings,
  TbLogout2,
  FaPhotoVideo,
  IoIosImages,
  FaHospitalUser,
  FaClipboardList,
  MdLocalHospital
} = icons;

export const siderbarMenu = [
  {
    path: "REPORT",
    text: "BÁO CÁO DỮ LIỆU",
    icons: <HiLibrary size={24} />,
  },
  {
    path: "PATIENT",
    text: "BỆNH NHÂN",
    end: true,
    icons: <MdLocalHospital size={24} />,
  },
  {
    path: "PUBLICPRESCRIPTION",
    text: "ĐƠN THUỐC",
    icons: <MdLocalHospital size={24} />,
  },
  {
    path: "INVOICEOUTPATIENT",
    text: "HÓA ĐƠN NGOẠI TRÚ",
    icons: <MdLocalHospital size={24} />,
  },
  {
    path: "INVOICEINPATIENT",
    text: "HÓA ĐƠN NỘI TRÚ",
    icons: <MdLocalHospital size={24} />,
  },
];

export const MenuTop = [
  {
    path: "PRESCRIPTION",
    Name: "Toa thuốc"
  },
  {
    path: "PrescriptionDetail",
    Name: "Chi tiết toa thuốc"
  }
]

export const MenuTablePatient = [
  {
    Title: "",
    Name: "STT",
  },
  {
    Title: "",
    Name: "Mã bệnh nhân",
  },
  {
    Title: "",
    Name: "Tên bệnh nhân",
  },
  {
    Title: "",
    Name: "Ngày sinh",
  },
  {
    Title: "",
    Name: "Tên Bố",
  },
  {
    Title: "",
    Name: "Tên Mẹ",
  },
  {
    Title: "",
    Name: "SĐT Bố",
  },
  {
    Title: "",
    Name: "SĐT Mẹ",
  },
  {
    Title: "",
    Name: "Dân tộc",
  },
  {
    Title: "",
    Name: "Quốc tịch",
  },
  {
    Title: "",
    Name: "Giới tính",
  },
  {
    Title: "",
    Name: "Địa chỉ",
  },
];

export const MenuTablePrescription = [
  { Title: "Trạng thái", Name: "stt" },
  { Title: "ID hồ sơ y tế dự phòng", Name: "backup_medical_record_id" },
  { Title: "Cảnh báo hoạt chất", Name: "canh_bao_hoat_chat" },
  { Title: "Cảnh báo hoạt chất đặc biệt", Name: "canh_bao_hoat_chat_dac_biet" },
  { Title: "Cảnh báo quá liều", Name: "canh_bao_qua_lieu" },
  { Title: "Cảnh báo tháng tuổi chỉ định", Name: "canh_bao_thang_tuoi_chi_dinh" },
  { Title: "ID bản ghi nhập/xuất viện", Name: "check_in_out_hospital_record_id" },
  { Title: "Chi tiết ICD cảnh báo", Name: "chi_tiet_icd_canh_bao" },
  { Title: "Biểu hiện lâm sàng", Name: "clinical_mani" },
  { Title: "Mã", Name: "code" },
  { Title: "Ngày tạo", Name: "create_date" },
  { Title: "Thời gian tạo", Name: "created_time" },
  { Title: "Đã cấp", Name: "da_cap" },
  { Title: "Ngày", Name: "date" },
  { Title: "Ngày hết hạn", Name: "date_expired" },
  { Title: "Ngày phát hành", Name: "date_issued" },
  { Title: "Số ngày", Name: "day_num" },
  { Title: "Chẩn đoán", Name: "diagnosis" },
  { Title: "ID bác sĩ", Name: "doctor_id" },
  { Title: "Tên bác sĩ", Name: "doctor_name" },
  { Title: "Checksum đơn thuốc quốc gia", Name: "donthuocquocgia_checksum" },
  { Title: "Lỗi đơn thuốc quốc gia", Name: "donthuocquocgia_error" },
  { Title: "ID người sửa đổi đơn thuốc quốc gia", Name: "donthuocquocgia_modified_person_id" },
  { Title: "Thời gian sửa đổi đơn thuốc quốc gia", Name: "donthuocquocgia_modified_time" },
  { Title: "ID hóa đơn DST", Name: "dst_invoice_id" },
  { Title: "ID hóa đơn điện tử", Name: "e_invoice_id" },
  { Title: "Trạng thái hóa đơn điện tử", Name: "e_invoice_status" },
  { Title: "Loại khách hàng", Name: "enum_customer_type" },
  { Title: "ICD10 thứ 4", Name: "fourth_icd10" },
  { Title: "Mã ICD10 thứ 4", Name: "fourth_icd10_code" },
  { Title: "Ghi chú toa H", Name: "ghi_chu_toa_h" },
  { Title: "Ghi chú giám sát", Name: "giam_sat_note" },
  { Title: "Thời gian giám sát", Name: "giam_sat_time" },
  { Title: "ID người giám sát", Name: "giam_sat_user_id" },
  { Title: "ICD10", Name: "icd10" },
  { Title: "Ghi chú ICD10", Name: "icd10_note" },
  { Title: "In toa thuốc", Name: "in_toa_thuoc" },
  { Title: "Ngày nhập", Name: "input_date" },
  { Title: "Mã bảo hiểm", Name: "insurance_code" },
  { Title: "Giá bảo hiểm", Name: "insurance_price" },
  { Title: "Mã hóa đơn", Name: "invoice_code" },
  { Title: "Xác nhận ứng dụng", Name: "is_confirm_app" },
  { Title: "Là dịch vụ", Name: "is_service" },
  { Title: "Duyệt KHTH", Name: "khth_duyet" },
  { Title: "Thời gian duyệt KHTH", Name: "khth_tg_duyet" },
  { Title: "ID người dùng KHTH", Name: "khth_use_id" },
  { Title: "Đã khóa", Name: "_locked" },
  { Title: "ID hồ sơ y tế", Name: "medical_record_id" },
  { Title: "Ghi chú", Name: "note" },
  { Title: "Chiều cao bệnh nhân", Name: "patient_height" },
  { Title: "ID bệnh nhân", Name: "patient_id" },
  { Title: "Nhiệt độ bệnh nhân", Name: "patient_temp" },
  { Title: "Cân nặng bệnh nhân", Name: "patient_weight" },
  { Title: "Phần trăm", Name: "_percent" },
  { Title: "ID đơn thuốc", Name: "prescription_id" },
  { Title: "Loại đơn thuốc", Name: "prescription_type" },
  { Title: "ICD10 chính", Name: "primary_icd10" },
  { Title: "Mã ICD10 chính", Name: "primary_icd10_code" },
  { Title: "Đã xử lý", Name: "processed" },
  { Title: "Mã hàng đợi", Name: "queue_code" },
  { Title: "Tái khám", Name: "re_examine" },
  { Title: "Lý do từ chối", Name: "reason_decline" },
  { Title: "Ngày tái khám", Name: "reexam_date" },
  { Title: "ICD10 thứ 2", Name: "second_icd10" },
  { Title: "Mã ICD10 thứ 2", Name: "second_icd10_code" },
  { Title: "ID ca", Name: "shift_id" },
  { Title: "Ngày ký", Name: "sign_date" },
  { Title: "URL chữ ký", Name: "signature_url" },
  { Title: "Trạng thái", Name: "status" },
  { Title: "ICD10 thứ 3", Name: "third_icd10" },
  { Title: "Mã ICD10 thứ 3", Name: "third_icd10_code" },
  { Title: "ID vé", Name: "ticket_id" },
  { Title: "Thời gian từ chối", Name: "time_decline" },
  { Title: "Tổng giá", Name: "total_price" },
  { Title: "ID trạng thái giám sát toa", Name: "trang_thai_giam_sat_toa_id" },
  { Title: "Tương tác thuốc", Name: "tuong_tac_thuoc" },
  { Title: "Cập nhật lúc", Name: "updated_at" },
  { Title: "ID người dùng từ chối", Name: "user_id_decline" },
  { Title: "Mã khu vực", Name: "zone_code" }
];

export const datatest = [
  {
    MaBenhNhan: "79408",
    TenBenhNhan: "Nguyen xuan tien dung",
    NgaySinh: "21022732",
    TenMe: "ru",
    TenBo: "tyu",
    SDTMe: "tyu",
    SDTBo: "yu",
    DanToc: "tyu",
    QuocTich: "tyu",
    GioiTinh: "tyu",
    DiaChi: "tyu"
  },
  {
    MaBenhNhan: "79408",
    TenBenhNhan: "Nguyen xuan tien dung",
    NgaySinh: "21022732",
    TenMe: "ru",
    TenBo: "tyu",
    SDTMe: "tyu",
    SDTBo: "yu",
    DanToc: "tyu",
    QuocTich: "tyu",
    GioiTinh: "tyu",
    DiaChi: "tyu"
  },
  {
    MaBenhNhan: "79408",
    TenBenhNhan: "Nguyen xuan tien dung",
    NgaySinh: "21022732",
    TenMe: "ru",
    TenBo: "tyu",
    SDTMe: "tyu",
    SDTBo: "yu",
    DanToc: "tyu",
    QuocTich: "tyu",
    GioiTinh: "tyu",
    DiaChi: "tyu"
  },
  {
    MaBenhNhan: "79408",
    TenBenhNhan: "Nguyen xuan tien dung",
    NgaySinh: "21022732",
    TenMe: "ru",
    TenBo: "tyu",
    SDTMe: "tyu",
    SDTBo: "yu",
    DanToc: "tyu",
    QuocTich: "tyu",
    GioiTinh: "tyu",
    DiaChi: "tyu"
  },
];
