import React from "react";
import THREE_BARS from "../assets/three-bars-svgrepo-com.svg"
import File_Image from "../assets/file-image-svgrepo-com.svg"
import Reminder from "../assets/reminder-svgrepo-com.svg"
import Collabrator from "../assets/add-friend-svgrepo-com.svg"
import Background_color from "../assets/paint-tray-paint-pallette-paint-artist-tool-svgrepo-com.svg"
import Archive from "../assets/archive-box-bold-svgrepo-com.svg"
import More from "../assets/three-dots-vertical-svgrepo-com.svg"
import Undo from "../assets/undo-svgrepo-com.svg"
import Redo from "../assets/redo-svgrepo-com.svg"
import google_keep from  '../assets/googlekepp.png'
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamSharpIcon from '@mui/icons-material/ViewStreamSharp';
import {Settings, AppsRounded, Circle} from '@mui/icons-material';
function NavBar(){
    return(
        
        <div className="Fundoo-nav-bar h-[64px] border border-gray-400 flex  flex items-center font-sans ">
        <div className="Fundoo-nav-bar-container1 h-[48px] w-[255px] flex flex items-center">
           <div className="Fundoo-nav-bar-three-bar ml-[20px] h-[64px] w-[44px] flex flex items-center">
            <img src={THREE_BARS} alt="" className="three_bars_img h-[24px] w-[24px]" />
           </div>
           <div className="Fundoo-nav-bar-google-keep-image h-[64px] w-[44px] flex flex items-center">
            <img src={google_keep} alt=""  className="google_keep_img h-[40px] w-[44px]"/>
           </div>
           <div className="Fundoo-nav-bar-title w-[54px] h-[24px]">
           <span id="Fundoo-nav-bar-title-description" className="text-lg  text-[#000000] opacity-75">Keep</span>
           </div>
            </div>

            <div className="Fundoo-nav-bar-container2 flex flex items-center w-[695px] h-[48px] bg-[#F1F3F4] rounded-lg">
           <div className="Fundoo-nav-bar-search ml-[13px]">  <SearchIcon sx={{color:'#757575'}}/>
           </div>
           <input className="Fundoo-nav-bar-text-field h-full w-[650px] border-gray-300 bg-gray-100 ml-[20px]  outline-none placeholder-font-semibold" type="text" placeholder="Search" />
            </div>

            <div className="Fundoo-nav-bar-container3 flex flex items-center ml-[340px]">
                <div className="Fundoo-nav-bar-refresh"><RefreshIcon sx={{color:'#757575'}} className="xl:mr-[10px]"/></div>
           <div className="Fundoo-nav-bar-list-view"><ViewStreamSharpIcon sx={{color:'#757575'}} className="xl:mr-[10px]"/></div>
           <div className="Fundoo-nav-bar-"><Settings sx={{color:'#757575'}} className="xl:mr-[40px]" /></div>
           <div className="Fundoo-nav-bar-google-apps"> <AppsRounded sx={{color:'#757575'}} className="xl:mr-[10px]"/></div>
           <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-green-400 text-white font-semibold ">S</div>
        

               
                </div>

            
            </div>


        
        // <div className="navbar-container w-100 h-70">
        //     <span>This is NavBar</span>
        // </div>
 )
}

export default NavBar