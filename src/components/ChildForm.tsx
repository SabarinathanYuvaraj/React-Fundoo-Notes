import { useEffect, useState } from "react";

function ChildForm(props: any) {
    const { handleChildText , parentData } = props;
    const [childText, setChildText] = useState("");

    useEffect(() => {
        handleChildText(childText);
    }, [childText, handleChildText]);

    function handleChild(){
        
    }
    
    return (
        <div className="child-container w-[700px] h-[300px] border ml-[350px] mt-[100px] flex flex-col items-center">
            <input 
                type="text" 
                onChange={(e) => setChildText(e.target.value)} 
                placeholder="Enter Anything" 
                className="w-[500px] mt-[50px] h-[40px] w-[500px] ml-[100px] border-solid-gray-400 oulined-none" 
            />
            <span id="childText" className="mt-[50px]">{parentData}</span>
            <button onClick={handleChild}className="mt-[50px]  border border-solid border-gray-400  w-[51px] flex  ">child</button>
        </div>
    );
}

export default ChildForm;
