import React, { useEffect, useState } from "react";
import NoteCardComponent from "./NoteCard"
import { getArchive } from "../utils/NotesService"

interface NoteObj {
  title: string;
  description: string;
  id: string;
  isPined: Boolean;
  noteIdList: string;
  isArchived: Boolean;
  isDeleted: Boolean;
}

function ArchiveContainer() {
  const [archiveList, setArchiveList] = useState<NoteObj[]>([]);

  useEffect(() => {
    fetchArchives();
  }, []);

  const fetchArchives = async () => {
    const result = await getArchive();
    const res = result.filter((ele: any) => ele.isArchived && !ele.isDeleted===true);
    setArchiveList(res);
  };

  const updateNotesList = (noteObj: NoteObj, action: string) => {
    if (action === "create") {
      setArchiveList([...archiveList, noteObj]);
    } 
    else if (action === "archive") {
      let res = archiveList.filter((ele) => ele.id !== noteObj.id);
      setArchiveList(res);
    }
     else if (action === "Trash") {
        const res = archiveList.filter((ele) => ele.id !== noteObj.id);
        setArchiveList(res);   
    }
    else if(action == "color" || action == "edit"){
      let res = archiveList.map((ele) => 
      {
        if(ele.id == noteObj.id){
          return noteObj
        }
          return ele
      })
      
      setArchiveList(res);
    }
    
  };
  

  return (
    <>
      <div className="grid grid-cols-3 mt-[100px] ml-[250px] gap-[20px]">
        {archiveList.map((val: any) => (
          <NoteCardComponent
            data={val}
            key={val.id}
            updatedList={() => updateNotesList(val, "archive")} 
          />
        ))}
      </div>
    </>
  );
}

export default ArchiveContainer;