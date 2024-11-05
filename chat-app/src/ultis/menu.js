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





