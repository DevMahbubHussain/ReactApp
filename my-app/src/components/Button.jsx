import React from "react";
function Button({ handelclick, children }) {
  return (
    <div className="title">
      <button type="button" onClick={handelclick}>
        {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
