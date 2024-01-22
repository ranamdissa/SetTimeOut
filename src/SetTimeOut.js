import {useEffect, useState} from "react";


export const SetTimeOut = () => {
    const [message, setMessage] = useState("");
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        const timeOutId = setTimeout(() => {
            console.log("useEffect is called!");
            setMessage(`Delayed Message after 2 seconds ${counter}`);
            setCounter(counter + 1);
        }, 2000);

        return () => clearTimeout(timeOutId);

    }, [counter]);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )

}