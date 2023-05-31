import React, {useState} from 'react';

export default function App() {
    const [count, setCount] = useState(0);
    const add = () => setCount(v => v + 1);
    return <div>
        <div>App</div>
        <div>Count: {count}</div>
        <button onClick={add}>+1</button>
    </div>;
}