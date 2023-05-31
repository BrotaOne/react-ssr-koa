import React, { FC, useState, useEffect } from 'react';

const Child: FC<{ count: number }> = ({ count }) => {
    useEffect(
        () => {
            console.log('mount');

            return () => {
                console.log('unmount');
            }
        },[]
    )
    return <div className="child">Count: {count}</div>
}

export default function App() {
    const [count, setCount] = useState(0);
    const add = () => setCount(v => v + 1);
    return <div>
        <div>App</div>
        <Child  count={count} />
        <button onClick={add}>+1</button>
    </div>;
}