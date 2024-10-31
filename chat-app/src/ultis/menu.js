import icons from "./icons";

const {
  MdOutlineLibraryMusic,
  HiLibrary,
  HiMiniUserGroup,
  IoMdSettings,
  TbLogout2,
  FaPhotoVideo,
  IoIosImages,
} = icons;

export const siderbarMenu = [
  {
    path: "REPORT",
    text: "BÁO CÁO DỮ LIỆU",
    icons: <HiLibrary size={24} />,
  },
  {
    path: "PATIENT",
    text: "DỮ LIỆU BỆNH NHÂN",
    end: true,
    icons: <HiMiniUserGroup size={24} />,
  },
  {
    path: "PRESCRIPTION",
    text: "DỮ LIỆU ĐƠN THUỐC",
    icons: <IoMdSettings size={24} />,
  },
  {
    path: "INVOICEOUTPATIENT",
    text: "DỮ LIỆU HÓA ĐƠN NGOẠI TRÚ",
    icons: <FaPhotoVideo size={24} />,
  },
  {
    path: "INVOICEINPATIENT",
    text: "DỮ LIỆU HÓA ĐƠN NỘI TRÚ",
    icons: <IoIosImages size={24} />,
  },
];

export const MenuTablePatient = [
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
    TenBenhNhan: "",
    NgaySinh: "21022732",
    TenMe: "ru",
    TenBo: "tyu",
    SDTMe: "tyu",
    SDTBo: "yu",
    DanToc: "tyu",
    QuocTich: "tyu",
    GioiTinh: "tyu",
    DiaChi: "tyu"
  }
];
