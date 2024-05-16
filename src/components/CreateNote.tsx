import React, { useState } from "react";
import PIN_ICON from "../assets/pin-svgrepo-com.svg"
import New_List from "../assets/checklist-svgrepo-com.svg"
import Paint_Brush from "../assets/paint-brush-svgrepo-com.svg"
import File_Image from "../assets/file-image-svgrepo-com.svg"
import Reminder from "../assets/reminder-svgrepo-com.svg"
import Collabrator from "../assets/add-friend-svgrepo-com.svg"
import Background_color from "../assets/paint-tray-paint-pallette-paint-artist-tool-svgrepo-com.svg"
import Archive from "../assets/archive-box-bold-svgrepo-com.svg"
import More from "../assets/three-dots-vertical-svgrepo-com.svg"
import Undo from "../assets/undo-svgrepo-com.svg"
import Redo from "../assets/redo-svgrepo-com.svg"
import { addNote, getNotes } from "../utils/NotesService";

function Note(props : any){
   const {updateList} = props
    // let createNote :boolean = false;
    const [createNote, setCreateNote] = useState(false);
    
   const handleCreateNote = async () => {
        if(createNote){
            const noteData = {
                "title" : (document.getElementById("title") as HTMLInputElement).value,
                "description" : (document.getElementById("desc") as HTMLInputElement).value
            }
            if (noteData.title.trim() !== "" || noteData.description.trim() !== "")
            {
        
              const noteObject = await addNote(noteData)
            // console.log(noteObject);
                updateList(noteObject.status.details , "create")
            }
            
            // console.log(noteData);
        }
    setCreateNote(!createNote);
    console.log(createNote);
       
   }




   
    return(
        <>
        {!createNote ? 
<div className="taking-note mt-[-220px] ml-[430px] h-[48px] w-[598px] flex items-center justify-between border border-gray-400 rounded-lg shadow-md px-4 py-2" onClick={handleCreateNote}>
    <span className="taking-note-text-container w-[450px]">
        <input type="text" id="taking-note-text-field" placeholder="Take a note.." className="w-full h-9 border-none outline-none" />
    </span>
    <div className="taking-note-new-list ml-1 ">
        <img src={New_List} alt="" id="taking-note-new-list-field" className="w-5 cursor-pointer" />
    </div>
    <div className="taking-note-new-note-with-drawing ml-4">
        <img src={Paint_Brush} alt="" id="taking-note-paint-brush-field" className="w-5 cursor-pointer" />
    </div>
    <div className="taking-note-new-note-with-image ml-4 ">
        <img src={File_Image} alt="" id="taking-note-new-note-image-field" className="w-6 cursor-pointer" />
    </div>
</div>



            :
            <div className="taking-full-note h-[136px] w-[600px] border border-solid border-gray-400  mt-[-220px] ml-[430px] shadow-md rounded-lg flex flex-col">
            <div className="taking-full-note-title-container h-16 w-full flex items-center">
                <input type="text" id="title" placeholder="Title" className="h-full w-[400px] ml-[20px] border-none outline-none text-lg" />
                <span className="taking-full-note-pin-field"><img src={PIN_ICON} id="pin-field" alt="" className="w-6 h-6 cursor-pointer ml-[140px] " /></span>
            </div>
            <span className="taking-full-note-text-container h-16 w-full">
                <input type="text" id="desc" placeholder="Take a note.." className="h-full w-[560px] border-none outline-none text-lg" />
            </span>
            <div className="taking-full-note-footer ml-[8px] mt-3 h-8 flex items-center justify-between">
                <div className="taking-full-note-footer-images flex w-3/4 justify-between ml-2">
                    <div className="taking-full-note-footer-image"><img src={Reminder} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div className="taking-full-note-footer-image"><img src={Collabrator} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div className="taking-full-note-footer-image"><img src={Background_color} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div className="taking-full-note-footer-image"><img src={File_Image} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div className="taking-full-note-footer-image"><img src={Archive} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div className="taking-full-note-footer-image"><img src={More} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div className="taking-full-note-footer-image"><img src={Undo} alt="" className="w-5 h-5 cursor-pointer" /></div>
                    <div className="taking-full-note-footer-image"><img src={Redo} alt="" className="w-5 h-5 cursor-pointer" /></div>
                </div>
                <div className="taking-full-note-footer-close-button">
                    <button id="close-button" onClick={handleCreateNote} className="outline-none border-0 w-20 h-8 text-base font-normal cursor-pointer">Close</button>
                </div>
            </div>
        </div>
        
        }
        </>
       

    )
}

export default Note;
