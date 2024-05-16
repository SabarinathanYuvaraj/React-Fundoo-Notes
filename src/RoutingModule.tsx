import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import NoteCard from "./components/NoteCard"
import DashBoardContainer from "./components/DashBoardContainer"
import Note from "./components/CreateNote"
import NotesContainer from "./components/NotesContainer"
import ArchiveContainer from "./components/ArchiveContainer"
import TrashContainer from "./components/TrashContainer"
import NavBar from "./components/NavBar"    
import SideBar from "./components/SideBar"
import NoteCardComponent from "./components/NoteCard"
import ParentForm from "./components/ParentForm"
import ChildForm from "./components/ChildForm"

function RoutingModule(){
    const AppRoutes = createBrowserRouter([
        {path : "/" , element :<Login/> },
        {path : "/signup" , element :<Signup/> },
        {path : "/note" , element : <Note/>},
        {path : "/sidebar" , element : <SideBar/>},

        {path : "/navbar" , element : <NavBar/>},

        {path : "/dashboard" , element : <DashBoardContainer/> , children : [
            {
            path : "notes", element : <NotesContainer/>
            },
            {
                path : "archive", element : <ArchiveContainer/>
            },
            {
                path : "trash", element : <TrashContainer/>
            }


        ]},
        {path : "/parent" , element : <ParentForm/>},
        {path : "/child" , element : <ChildForm/>}
    ])

    return <RouterProvider  router={AppRoutes} ></RouterProvider>
}

export default RoutingModule