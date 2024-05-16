import { useState } from "react";
import ChildForm from "./ChildForm";

function ParentForm() {
    const [childText, setChildText] = useState("");
    const [parentText, setParentText] = useState("");


    function handleDescription(childDescription: string) {
        setChildText(childDescription);
    }

   
    function handleParent() {
        handleDescription(parentText);
    }
    return (
        <>
            <div className="parent-container w-[700px] h-[300px] border ml-[350px] mt-[100px] flex flex-col items-center">
                <input 
                    type="text"  
                    onChange={(e) => setParentText(e.target.value)} 
                    placeholder="Enter Anything" 
                    className="w-[500px] mt-[50px] h-[40px] w-[500px] ml-[100px] border-solid-gray-400 oulined-none" 
                />
                <span id="parentText" className="mt-[50px]">{childText}</span>
                <button onClick={handleParent} className="mt-[50px]  border border-solid border-gray-400  w-[51px] flex  ">parent</button>
            </div>

            <ChildForm handleChildText={handleDescription} parentData = {parentText} />
        </>
    );
}

export default ParentForm;
