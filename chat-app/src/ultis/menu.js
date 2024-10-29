import icons from "./icons"


const {MdOutlineLibraryMusic,HiLibrary,HiMiniUserGroup,IoMdSettings,TbLogout2,FaPhotoVideo,IoIosImages  } = icons

export const siderbarMenu = [
  {
     path: "ERROR",
     text: "Trang chủ",  
     icons: <HiLibrary size={24}/>
  },
  {
    path: "",
    text: "Quản lý người dùng",  
    end: true,
    icons: <HiMiniUserGroup size={24}/>
  },
  {
    path: "ER",
    text: "Cài đặt",  
    icons: <IoMdSettings size={24}/>
 },
 {
  path: "E",
  text: "Quản lý video",  
  icons: <FaPhotoVideo size={24}/>
},
{
  path: "EOO",
  text: "Quản lý Ảnh",  
  icons: <IoIosImages size={24}/>
}

];
