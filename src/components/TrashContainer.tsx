import React, { useEffect, useState } from "react";
import NoteCardComponent from "./NoteCard"
import { getTrashNotesList } from  "../utils/NotesService"

interface NoteObj {
  title: string;
  description: string;
  id: string;
  isPined: Boolean;
  noteIdList: string;
  isArchived: Boolean;
}

function TrashContainer() {
  const [trashList, setTrashList] = useState<NoteObj[]>([]);

  useEffect(() => {
    fetchTrash();
  }, []);

  const fetchTrash = async () => {
    const result = await getTrashNotesList();
    setTrashList(result);
  };

  const updateNotesList = (noteObj: NoteObj, action: string) => {
    if (action === "remove") {
      setTrashList((prevList) =>
        prevList.filter((ele) => ele.id !== noteObj.id)
      );
    }
    else if(action == "color" || action == "edit"){
      let res = trashList.map((ele) => 
      {
        if(ele.id == noteObj.id){
          return noteObj
        }
          return ele
      })
      
      setTrashList(res);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 ml-[280px] mt-[100px]">
        {trashList.map((val: any) => (
          <NoteCardComponent
            data={val}
            key={val.id}
            updatedList={() => updateNotesList(val, "remove")}
          />
        ))}
      </div>
    </>
  );
}

export default TrashContainer;