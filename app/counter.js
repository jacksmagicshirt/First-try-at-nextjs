'use client'
import React, { useState, useEffect} from "react";
import styles from './page.module.css';
export default function Counter(props) {
    const [count, setCount] = useState(0);

    function rollOverCount() {
        if (count > 10) {
            setCount(0);
        }
    }
    const buttonStyle = {
        backgroundColor: props.color,
        color: "white",
        padding: props.size + 'rem',
        borderRadius: '10px',
        // put button in center

    };
    useEffect(rollOverCount, [count]);
    return (
        <div className={styles.container}>
            <p>Count: {count}</p>
            <button className='center' onClick={() => setCount(count + 1 * props.mult)} style={buttonStyle}>{props.name}</button>
        </div>
    );



}