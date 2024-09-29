import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [message, setMessage] = useState('Waiting for message...');

    useEffect(() => {
        // const timeout = setTimeout(() => {
        //     setMessage('This message will be displayed after 3 seconds!');
        // }, 3000);

        const interval = setInterval(() => {
            setMessage('This message will be displayed from setInterval');
            console.log('This message will be displayed from setInterval');
        }, 1000);

        return () => {
            console.log("From unmount");
            // clearTimeout(timeout);
            clearInterval(interval);
        }
    }, [])


    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default TimerComponent;