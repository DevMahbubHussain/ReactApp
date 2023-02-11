import React from "react";

function Input({type,placeholder},ref) {
  //const inputRef = const href = useHref()
  return <input ref={ref} type={type} placeholder={placeholder} name="" id="" />
  
}

export default React.forwardRef(Input);
