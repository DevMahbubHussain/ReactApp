import Todo from "./components/Todo";
import Mycomponent from "./components/useeffecthook";
import Title from "./components/Title";
import Showcountresult from "./components/Showcountresult";
import Button from "./components/Button";
import { useCallback, useState } from "react";
import Form from "./components/UseRefhook";

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //const increment1 = () => setCount1((prevvount1) => prevvount1 + 1)
  //const increment2 = () => setCount2((prevvount2) => prevvount2 + 5);

  const increment1 = useCallback(() => {
    setCount1((prevvount1) => prevvount1 + 1)
  }, []);
  
    const increment2 = useCallback(() => {
      setCount2((prevvount2) => prevvount2 + 5);
    }, []);


  return (
    <div className="App">
      <Todo />
      <Mycomponent />
      <Title />
      <Showcountresult count1={count1} count2={count2} />
      <Button type="button" handelclick={increment1}>Increment by 1 </Button> 
      <Button type="button" handelclick={increment2}>Increment by 5</Button>
      <hr />
      <Form/>
    </div>
  );
}

export default App;
