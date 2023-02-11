import { useEffect, useRef } from "react";
import Input from "./Input";

function Form() {
    
   //const inputRef = const href = useHref()
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus(); 
    });

    return (
        <div className="wrapper">
            <h3>useRef Hooks : </h3>
            &nbsp;<Input ref={inputRef} type="text" name="" id="" />
        </div>
    )
}

export default Form;