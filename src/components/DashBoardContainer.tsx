import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Note from "./Note";

function DashBoardContainer(){
    return (
        <>
        <NavBar/>
        <SideBar/>
        <Note/>
        <Outlet/>
        </>
    )
}

export default DashBoardContainer