import icons from "./icons";
import path from "./path";

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
    path: "PUBLICPRESCRIPTION/PRESCRIPTION",
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
export const MenuTopPrescriptionDetail = [
  {
    path: "TabInvoiceOuTPatient",
    Name: "Hóa đơn ngoại trú"
  },
  {
    path: "TabInvoiceInPatient",
    Name: "Hóa đơn nội trú"
  },
  {
    path: "TabPrescription",
    Name: "Toa thuốc"
  }

]

export const PrescriptionInPatient = [
  {
     Name: "MÃ TOA"
  },
  {
    Name:"TG KÊ ĐƠN"
  },
  {
    Name:"NGÀY ĐƠN THUỐC"
  },
  {
    Name:"LOẠI TOA"
  },
  {
    Name:"CHUẪN ĐOÁN"
  },
  {
    Name:"BÁC SĨ"
  },
  {
    Name:"HÓA ĐƠN"
  },
  {
    Name:"NGÀY BÁN THUỐC"
  } 
]





