import React, {useEffect, useState} from "react";

const UnmountTest = () => {
    useEffect(() => {
        console.log("mount");

        return () => {
            console.log("unmount");
        };
    }, []);

    return <div>Unmount testing Component</div>
}

const Lifecycle = () => {
    const [isVisible, setIsVisibile] = useState(false);
    const toggle = () => setIsVisibile(!isVisible);

    return (
    <div style={{padding:20}}>
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountTest/>}        
    </div>
    );
};

export default Lifecycle;