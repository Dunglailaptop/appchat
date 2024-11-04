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
