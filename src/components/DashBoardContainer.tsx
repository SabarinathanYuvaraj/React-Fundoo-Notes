import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Note from "./CreateNote";

function DashBoardContainer(){
    return (
        <>
        <div >
        <NavBar/>
            <div className="flex">
            <SideBar/>
            <Outlet/>
            </div>
        </div>
        </>
    )
}

export default DashBoardContainer