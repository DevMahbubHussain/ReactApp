import React from "react";
function countResult({ count1, count2 }) {
  return (
    <div className="title">
      <h3>count Result for increment1 {count1}</h3>
      <h3>count Result for increment5 {count2}</h3>
    </div>
  );
}

export default  React.memo(countResult);
