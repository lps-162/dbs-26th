import { useEffect, useState } from "react";

function CounterHook(props) {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(29)

    const increment = () => {
        setCount(count + 1)
        setAge(age + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    
    return (
        <div>
        <h3>Counter demo with Hooks</h3>
        <p>Count Value : 
            <span id="countSpan">{count}</span>
        </p>
        <p>Count Value : 
            <span id="countSpan222">{count}</span>
        </p>
        <p>Count Value : 
            <span id="countSpan333">{count}</span>
        </p>
        <p>Age is : {age} </p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
    )
}

export default CounterHook;