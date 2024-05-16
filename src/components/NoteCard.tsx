import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteForever from'@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { addArchive, addDelete, changeColor, deleteForeverNotes, updateNotes} from "../utils/NotesService";
import { Description, UnarchiveOutlined } from '@mui/icons-material';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PIN_ICON from "../assets/pin-svgrepo-com.svg"
import File_Image from "../assets/file-image-svgrepo-com.svg"
import Reminder from "../assets/reminder-svgrepo-com.svg"
import Collabrator from "../assets/add-friend-svgrepo-com.svg"
import Background_color from "../assets/paint-tray-paint-pallette-paint-artist-tool-svgrepo-com.svg"
import Archive from "../assets/archive-box-bold-svgrepo-com.svg"
import More from "../assets/three-dots-vertical-svgrepo-com.svg"
import Undo from "../assets/undo-svgrepo-com.svg"
import Redo from "../assets/redo-svgrepo-com.svg"
import { title } from 'process';


interface NoteCardProps {
        title: string;
        description: string;
        isPined: boolean;
        id:string;
        isArchived: boolean;
        color : string;
   
}


function NoteCardComponent({ data, updatedList }: {data:NoteCardProps, updatedList:Function}) {
    
    const route = useLocation().pathname;

    const [editTitle, setEditTitle] = useState(data.title || "")
    const [editDescription, setEditDescription] = useState(data.description || "")

    const [editNote, setEditNote] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open1 = Boolean(anchorEl);
    
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
    
    
    const handleColourClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    

    
    const [menu, setMenu] = useState(null); 
    const open = Boolean(menu); 
    const handleClick = (e:any) => { 
        setMenu(e.currentTarget); 
    };




    function handleEditNote(action : string){
        
        if(action == "open"){
            setEditNote(true)
        }
        else setEditNote(false)
    }

   

    const handleNotesIconsClick = async (action : string, val?: string ) => {
        if(action == "archive"){
            const noteId = data.id;
            const noteData = {
                "noteIdList":[`${noteId}`],
                "isArchived":true
                }
                addArchive(noteData);
                updatedList(data, "archive")

        }
        else if(action == "unarchive"){
            const noteId = data.id;
            const noteData = {
                "noteIdList":[`${noteId}`],
                "isArchived": false
                }
                addArchive(noteData);
            updatedList(data, "archive")
        }

        else if(action == "restore"){
            const noteId = data.id;
            const noteData = {
                "noteIdList":[`${noteId}`],
                "isDeleted":false
                }
                addDelete(noteData);
                updatedList(data, "Trash")
        }

        else if(action == "deleteForever"){
            const noteId = data.id;
            const noteData = {
                "noteIdList":[`${noteId}`]
                }
                deleteForeverNotes(noteData);
                updatedList(data, "remove")
        }

        else if(action == "trash"){
            const noteId = data.id;
            const noteData = {
                "noteIdList":[`${noteId}`],
                "isDeleted":true
                }
                console.log(noteData);
                addDelete(noteData);
                updatedList(data, "Trash")
        }
        else if(action =="color"){
             const noteId = data.id
            setAnchorEl(null);
            const noteData = {"noteIdList":[`${noteId}`], "color" :`${val}`}
            changeColor(noteData)
            updatedList({...data, color:val}, "color")
        }
        else if(action == "edit"){
            setEditNote(false)
            const noteId = data.id
            const noteData = {
                "noteIdList": [`${noteId}`],
                "title" : `${editTitle}`,
                "description": `${editDescription}`
            }
            // updateNotes(noteData)
            console.log(data);
            updatedList({...data, title:editTitle,description:editDescription},"edit")

        }

    }






    return (
        
<div className="!flex flex-col justify-between h-[180px] min-h[103px] max-h-[385.2px] w-[240px] border-gray-400 rounded-lg border-2 relative m-[10px] group " style={{backgroundColor : data.color }}>
        <div className='p-[10px]'>
        <div  id='fundoo-title' onClick={() => handleEditNote('open')}  className="text-base font-medium leading-6 pt-3; font-family: 'Google Sans', Roboto, Arial, sans-serif mb-[4px] outline-none  h-[40px]">{data.title} </div>
        <div  id='fundoo-description'  onClick={() => handleEditNote('open')} className="h-full w-full font-normal leading-5; font-family: Roboto, Arial, sans-serif resize-none outline-none ">{data.description}</div>
            </div>
            <div className="flex mb-[4px] flex group-hover justify-around">

        {
            route==="/dashboard/trash" ? <> <IconButton  title='deletePermanetly' onClick={()=>handleNotesIconsClick('deleteForever')}><DeleteForever/></IconButton> <IconButton><RestoreFromTrashOutlinedIcon onClick={()=>handleNotesIconsClick('restore')}/></IconButton></> :
            <>   
            <IconButton title='Remind me' className='!w-[35px] !min-w-0'><AddAlertOutlinedIcon /></IconButton>
                <IconButton title='Collaborator' className='!w-[35px] !min-w-0'><PersonAddAlt1OutlinedIcon/></IconButton>
                <IconButton title='Background options' onClick={handleColourClick} className='!w-[35px] !min-w-0'><ColorLensOutlinedIcon /></IconButton>
                <IconButton title='Add image' className='!w-[35px] !min-w-0'>  <AddPhotoAlternateOutlinedIcon /></IconButton>
      
              {route==="/dashboard/archive" ? 
                        <IconButton title='UnArchive' onClick={()=>handleNotesIconsClick('unarchive')} className='!w-[35px] !min-w-0'> <UnarchiveOutlined /></IconButton>
                        :  <IconButton title='Archive' onClick={()=>handleNotesIconsClick('archive')} className='!w-[35px] !min-w-0'> <ArchiveOutlinedIcon /></IconButton>
                }
                <IconButton title='More' onClick={handleClick} className='!w-[35px] !min-w-0'>
                    <MoreVertOutlinedIcon/>
                    </IconButton>
            </>
            }
                <Menu open={open} onClose={()=>setMenu(null)} anchorEl={menu}>
                <MenuItem onClick={()=>handleNotesIconsClick('trash')}>Delete Note</MenuItem>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Add Label</MenuItem>
              
                </Menu>
            </div>
            <IconButton title='Pin Note' className='!absolute top-2 right-2'><PushPinOutlinedIcon /></IconButton>
            <Menu id="color-menu" anchorEl={anchorEl} open={open1} onClose={handleClose} className='border rounded-lg '>
    <MenuItem onClick={handleClose} >
      <div className="color-palette-container flex px-8 flex-wrap justify-between border ">
        {colors.map(color => (
          <Tooltip title={color.name} key={color.class}>
            <div
              className={`${color.class} w-8 h-8 m-1 rounded-full cursor-pointer`}
              style={{ backgroundColor: color.hex }} 
              onClick={() => handleNotesIconsClick("color", color.hex)}
            >
            </div>
          </Tooltip>
        ))}
      </div>
    </MenuItem>
  </Menu>

 	 <Modal open={editNote} onClose={() => setEditNote(false)}>
  <div className="h-[136px] w-[600px] border border-solid border-gray-400  m-auto shadow-md rounded-lg flex flex-col bg-white mt-[190px] ">
            <div className=" h-16 w-full flex items-center">
                <input type="text" id="title"  onChange={(e) => setEditTitle(e.target.value)} value={editTitle} className="h-full w-[400px] ml-[20px] border-none outline-none text-lg" />
                <span className="taking-full-note-pin-field"><img src={PIN_ICON} id="pin-field" alt="" className="w-6 h-6 cursor-pointer ml-[140px] " /></span>
            </div>
            <span className=" h-16 w-full">
                <input type="text" id="desc"  value={editDescription} onChange={(e) => setEditDescription(e.target.value)}  className="h-full w-[560px] ml-[20px] border-none outline-none text-lg" />
            </span>
            <div className=" ml-[8px] mt-3 h-8 flex items-center justify-between">
                <div className=" flex w-3/4 justify-between ml-2">
                    <div ><img src={Reminder} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div ><img src={Collabrator} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div ><img src={Background_color} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div ><img src={File_Image} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div ><img src={Archive} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div ><img src={More} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div ><img src={Undo} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div ><img src={Redo} alt="" className="w-5 h-5 cursor-pointer" /></div>
                </div>
                <div className="edit-note-footer-close-button">
                    <button id="close-button"   onClick={() => { handleNotesIconsClick("edit")  }} className="outline-none border-0 w-20 h-8 text-base font-normal cursor-pointer">Close</button>
                </div>
            </div>
        </div>
</Modal>


        </div>
    )
}

export default NoteCardComponent;