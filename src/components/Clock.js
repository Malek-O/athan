import React, { useEffect } from 'react'

const Clock = () => {
    const [clockState, setClockState] = React.useState();
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, [])
    return (
        <h1>{clockState}</h1>
    )
}

export default Clock