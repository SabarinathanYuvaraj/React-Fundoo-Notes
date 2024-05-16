import React from "react";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Drawer from '@mui/material/Drawer';
import { Link,  useNavigate } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function SideBar(){
  const navigate = useNavigate();
  const navigatetoNotes = () => {
    navigate("/dashboard/notes");
  }
  const navigatetoArchive = () => {
    navigate("/dashboard/archive");
  }
  const navigatetoTrash = () => {
    navigate("/dashboard/trash");
  }

 
  
  return(
    <div className="border-solid border-gray-400 w-[70px] flex flex-col" >
      <div className="flex items-center mt-5 ml-5  hover:bg-orange-200 p-3 rounded-md " onClick={navigatetoNotes} >
        <LightbulbOutlinedIcon className="hover:bg-orange-200 " sx={{color:'#757575'}}   />
      </div>
      <div className="flex items-center ml-5  hover:bg-orange-200 p-3 rounded-md" >
        <NotificationsIcon sx={{color:'#757575'}} />
      </div>
      <div className="flex items-center ml-5  hover:bg-orange-200 p-3 rounded-md">
        <ModeEditIcon sx={{color:'#757575'}} />
      </div>
      <div className="flex items-center ml-5 hover:bg-orange-200 p-3 rounded-md" onClick={navigatetoArchive}>
        <ArchiveOutlinedIcon sx={{color:'#757575'}}  />
      </div>
      <div className="flex items-center ml-5 hover:bg-orange-200 p-3 rounded-md" onClick={navigatetoTrash}>
        <DeleteOutlineIcon sx={{color:'#757575'}}/>
      </div>
    </div>
  )
}

export default SideBar;
