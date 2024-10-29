import icons from "./icons"


const {MdOutlineLibraryMusic,HiLibrary,HiMiniUserGroup,IoMdSettings,TbLogout2,FaPhotoVideo,IoIosImages  } = icons

export const siderbarMenu = [
  {
     path: "per",
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
    path: "Pu",
    text: "Cài đặt",  
    icons: <IoMdSettings size={24}/>
 },
 {
  path: "Login",
  text: "Quản lý video",  
  icons: <FaPhotoVideo size={24}/>
},
{
  path: "L3",
  text: "Quản lý Ảnh",  
  icons: <IoIosImages size={24}/>
}

];
