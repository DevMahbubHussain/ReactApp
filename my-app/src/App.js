// import Todo from "./components/Todo";
// import Mycomponent from "./components/useeffecthook";
// import Title from "./components/Title";
// import Showcountresult from "./components/Showcountresult";
// import Button from "./components/Button";
// import { useCallback, useState } from "react";
// import Form from "./components/UseRefhook";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact'
import Error from './components/pages/Error'
import Navbar from './components/Navbar/Navbar';
import Blogs from './components/pages/Blogs';
import User from './components/pages/User';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import PrivateOutlet from './components/PrivateOutlet';
import Post from './components/pages/Post';

function App() {

  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  //const increment1 = () => setCount1((prevvount1) => prevvount1 + 1)
  //const increment2 = () => setCount2((prevvount2) => prevvount2 + 5);

  // const increment1 = useCallback(() => {
  //   setCount1((prevvount1) => prevvount1 + 1)
  // }, []);
  
  //   const increment2 = useCallback(() => {
  //     setCount2((prevvount2) => prevvount2 + 5);
  //   }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs/" element={<Blog />}></Route>
          <Route path="/blogs/:title" element={<Blogs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="*" element={<Error />}></Route>

          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="add-post" element={<Post />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Todo />
      <Mycomponent />
      <Title />
      <Showcountresult count1={count1} count2={count2} />
      <Button type="button" handelclick={increment1}>Increment by 1 </Button> 
      <Button type="button" handelclick={increment2}>Increment by 5</Button>
      <hr />
      <Form/> */}
    </div>
  );
}

export default App;
