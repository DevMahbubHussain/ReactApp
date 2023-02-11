import { useEffect, useState } from "react";

function Mycomponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const addClick = () => setCount((prevcount) => prevcount + 1);
  const tick = () => {
    setDate(new Date());
  };

  //useeffect

  useEffect(() => {
    // console.log('Updating document title');
    document.title = `Clicked ${count} times`;
  }, [count]); //with dependency array

  useEffect(() => {
    setInterval(tick, 1000);
  }, []); //without dependency array

  return (
    <div className="wrapper">
      <p>Time : {date.toLocaleTimeString()} </p>
      <button type="button" onClick={addClick}>
        Click
      </button>
    </div>
  );
}

export default Mycomponent;