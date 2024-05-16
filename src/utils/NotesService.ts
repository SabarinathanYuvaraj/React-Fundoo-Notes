import axios from "axios";
import { error } from "console";
import { Navigate } from "react-router-dom";

const configForNotes =  {
    headers : {
        "Content-Type" : "application/json",
        Authorization : localStorage.getItem("accessToken")
    }
}

const configForEditNotes = {headers: {"Content-Type": "multipart/form-data" , Authorization : localStorage.getItem("accessToken")}}


export const addNote = async(noteObj: object) =>{
    try {
        const response = await axios.post(`https://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes`, noteObj, configForNotes);
        return response.data; 
    } catch (error) {
        console.error('Failed to add note:')
        throw error; 
    }
}

export const getNotes =  async() => {
   const res = await axios.get(`https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`,configForNotes);
    return res.data.data.data;
}


export const addArchive = async (noteObj: object) => {
    await axios.post('https://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes', noteObj, configForNotes )
}

export const getArchive = async () => {
    const res =  await axios.get(`https://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList`,configForNotes);
    return res.data.data.data;
}

export const addDelete = async (obj:Object) => {

    await axios.post(`https://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes`, obj, configForNotes);
}


export const getTrashNotesList = async () => {
    const res =  await axios.get(`https://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList`,configForNotes);
    return res.data.data.data;
}



export const deleteForeverNotes = async (obj:Object) => {

    await axios.post(`https://fundoonotes.incubation.bridgelabz.com/api/notes/deleteForeverNotes`, obj, configForNotes);
}


export const changeColor = async (obj : Object) => {
    await axios.post(`https://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes`, obj, configForNotes)
}


export const updateNotes = async (obj : Object) => {

    await axios.post(`https://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes`,obj, configForEditNotes)
}

