import { useState } from "react";

function Todo() {
    
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const hadelInput = (e) => {
        const inputValue = e.target.value;
        const updateWarning = inputValue.includes('.js') ? 'Need Js' : null;

        setTodo(inputValue);
        setWarning(updateWarning);
    }

  
    return (

        <div className="wrapper">
            <p>{ todo}</p>
            <textarea name="todo" id="" cols="30" rows="10" value={todo} onChange={hadelInput}></textarea>
            <h2>{ warning || 'good choice' }</h2>
        </div>
    )

}

export default Todo;