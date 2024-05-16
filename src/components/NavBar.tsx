import React, { useState } from "react";
import THREE_BARS from "../assets/three-bars-svgrepo-com.svg";
import google_keep from "../assets/googlekepp.png";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamSharpIcon from "@mui/icons-material/ViewStreamSharp";
import { Settings, AppsRounded } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
   
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/")
  }

  return (
    <div className="Fundoo-nav-bar h-[64px] border border-gray-400 flex wrap items-center font-sans">
      <div className="Fundoo-nav-bar-container1 h-[48px] w-[255px] flex items-center">
        <div className="Fundoo-nav-bar-three-bar ml-[20px] h-[64px] w-[44px] flex items-center">
          <img
            src={THREE_BARS}
            alt=""
            className="three_bars_img h-[24px] w-[24px]"
          />
        </div>
        <div className="Fundoo-nav-bar-google-keep-image h-[64px] w-[44px] flex items-center">
          <img
            src={google_keep}
            alt=""
            className="google_keep_img h-[40px] w-[44px]"
          />
        </div>
        <div className="Fundoo-nav-bar-title w-[54px] h-[24px]">
          <span
            id="Fundoo-nav-bar-title-description"
            className="text-lg text-[#000000] opacity-75"
          >
            Keep
          </span>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <div className="Fundoo-nav-bar-container2 flex items-center w-full max-w-[600px] h-12 bg-[#F1F3F4] rounded-lg">
          <div className="Fundoo-nav-bar-search ml-[13px]">
            <SearchIcon sx={{ color: "#757575" }} />
          </div>
          <input
            className="h-10 border-gray-300 w-full bg-gray-100 ml-4 outline-none placeholder-semibold"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="Fundoo-nav-bar-container3 flex items-center w-[500px] justify-end mr-[20px]">
          <div className="Fundoo-nav-bar-refresh">
            <RefreshIcon sx={{ color: "#757575" }} className="xl:mr-[10px]" />
          </div>
          <div className="Fundoo-nav-bar-list-view">
            <ViewStreamSharpIcon
              sx={{ color: "#757575" }}
              className="xl:mr-[10px]"
            />
          </div>
          <div className="Fundoo-nav-bar-">
            <Settings sx={{ color: "#757575" }} className="xl:mr-[40px]" />
          </div>
          <div className="Fundoo-nav-bar-google-apps">
            <AppsRounded sx={{ color: "#757575" }} className="xl:mr-[10px]" />
          </div>
          <div
            className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-green-400 text-white font-semibold cursor-pointer"
            onClick={handleClick}
          >
            S
          </div>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>{localStorage.getItem("userName")}</MenuItem>
            <MenuItem>{localStorage.getItem("userEmail")}</MenuItem>
            <MenuItem  onClick={navigateToLogin}>LogOut</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
