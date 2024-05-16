import React, { useEffect, useState } from "react";
import NoteCardComponent from  "./NoteCard"
import { getNotes } from "../utils/NotesService"
import CreateNewNoteComponent  from "./CreateNote"

interface NoteObj {
  title: string;
  description: string;
  isPined: boolean;
  isArchived: boolean;
  id: string;
  noteId: string;
  isColor: string;
}

function NotesContainer() {
  const [notesList, setNotesList] = useState<NoteObj[]>([]);


  
  useEffect(() => {
    fetchNotes();
  },[]);



  async function fetchNotes() {
    const result = await getNotes();
    const res = result.filter((ele: any) => !ele.isArchived && !ele.isDeleted);
    setNotesList(res);
    
  }

  const updateNotesList = (noteObj: NoteObj, action: string) => {
    if (action === "create") {
      setNotesList([...notesList, noteObj]);
    } else if (action === "archive") {
      let res = notesList.filter((ele) => ele.id !== noteObj.id)
      setNotesList(res);
    } else if (action === "Trash") {
      let res = notesList.filter((ele) => ele.id !== noteObj.id);
      setNotesList(res);
    }
    else if(action == "color" || action == "edit"){
      let res = notesList.map((ele) => 
      {
        if(ele.id == noteObj.id){
          return noteObj
        }
          return ele
      })
      console.log(res);
      setNotesList(res);
    }
  //   else if(action == "edit"){
  //     let res = notesList.map((ele) => {
  //       if(ele.id == noteObj.id){
  //         ele = noteObj
  //         return noteObj
  //       }
  //       return ele
  //     })
  //     setNotesList(res)
  //   }
  };

  return (
    <>
      <div className="flex flex-col mt-[300px] gap-[60px]">
      <CreateNewNoteComponent  updateList={updateNotesList} />
          <div className="grid grid-cols-3  ml-[230px] gap-[30px]">
            {notesList.map((val: any) => (
              <NoteCardComponent
                data={val}
                key={val.id}
                updatedList={updateNotesList}
              />
            ))}
          </div>
      </div>
    </>
  );
}

export default NotesContainer;

function setAnchorEl(currentTarget: EventTarget & HTMLElement) {
  throw new Error("Function not implemented.");
}
