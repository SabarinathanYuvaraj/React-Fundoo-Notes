import React, { useState } from "react";
import PIN_ICON from "../assets/pin-svgrepo-com.svg";
import File_Image from "../assets/file-image-svgrepo-com.svg";
import Reminder from "../assets/reminder-svgrepo-com.svg";
import Collaborator from "../assets/add-friend-svgrepo-com.svg";
import Background_color from "../assets/paint-tray-paint-pallette-paint-artist-tool-svgrepo-com.svg";
import Archive from "../assets/archive-box-bold-svgrepo-com.svg";
import More from "../assets/three-dots-vertical-svgrepo-com.svg";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

function NoteCard() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const colors = [
        { hex: "#FFFFFF", name: "Default", class: "col1" },
        { hex: "#FAAFA8", name: "Coral", class: "col2" },
        { hex: "#F39F76", name: "Peach", class: "col3" },
        { hex: "#FFF8B8", name: "Sand", class: "col4" },
        { hex: "#E2F6D3", name: "Mint", class: "col5" },
        { hex: "#B4DDD3", name: "Sage", class: "col6" },
        { hex: "#D4E4ED", name: "Fog", class: "col7" },
        { hex: "#AECCDC", name: "Storm", class: "col8" },
        { hex: "#D3BFDB", name: "Dusk", class: "col9" },
        { hex: "#F6E2DD", name: "Blossom", class: "col10" },
        { hex: "#E9E3D4", name: "Clay", class: "col11" },
        { hex: "#EFEFF1", name: "Chalk", class: "col12" }
    ];


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleColorSelect = (color: string) => {
        console.log("Color selected:", color);
        setAnchorEl(null);
    };

    return (
        <div className="container mt-[150px]  ml-[-250px]">
            <div className="note-card border-solid border border-gray-400 h-[100px] mx-auto w-[300px] mt-11 shadow-md rounded-lg flex flex-col">
                <div className="note-card-title-container h-41 ml-3  flex justify-between items-center">
                    <span className="note-card-title text-sm font-medium">My Note</span>
                    <span className="note-card-pin-field"><img src={PIN_ICON} alt="Pin" className="w-4 h-4 mr-[5px]" /></span>
                </div>
                <span className="note-card-description ml-3 h-36.5 flex items-center text-base mt-[8px]">Hello World!</span>
                <div className="note-card-footer mt-[21px] w-64 flex justify-between items-center ml-3">
                    <div className="note-card-footer-image"><img src={Reminder} alt="Reminder" className="w-4 h-4" /></div>
                    <div className="note-card-footer-image"><img src={Collaborator} alt="Collaborator" className="w-4 h-4" /></div>
                    <div className="note-card-footer-image">
                        <img src={Background_color} alt="Background Color" onClick={handleClick} className="cursor-pointer w-4 h-4" />
                    </div>
                    <div className="note-card-footer-image"><img src={File_Image} alt="File" className="w-4 h-4" /></div>
                    <div className="note-card-footer-image"><img src={Archive} alt="Archive" className="w-4 h-4" /></div>
                    <div className="note-card-footer-image">
                        <img src={More} alt="More options" className="cursor-pointer w-4 h-4" />
                    </div>
                </div>
            </div>
            <Menu id="color-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
    <MenuItem onClick={handleClose}>
      <div className="color-palette-container flex px-8 flex-wrap justify-between">
        {colors.map(color => (
          <Tooltip title={color.name} key={color.class}>
            <div
              className={`${color.class} w-8 h-8 m-1 rounded-full cursor-pointer`}
              style={{ backgroundColor: color.hex }} 
              onClick={() => handleColorSelect(color.hex)}
            ></div>
          </Tooltip>
        ))}
      </div>
    </MenuItem>
  </Menu>
        </div>
    );
}

export default NoteCard;
