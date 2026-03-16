import { useRef, useState, useEffect } from "react";

function BoxColor({ color, value }) {
    const [classList, setClassList] = useState("");
    const boxRef = useRef(null);
    const boxCSS = {
        backgroundColor: classList.value === `box ${value}` ? color : null,
        color: classList.value === `box ${value}` ? "black" : color,
        border: `2px solid ${color}`,
    };
    useEffect(() => {
        setClassList(boxRef.current.classList);
    }, [value]);
    return (
        <>
            <div className={`box ${color}`} style={boxCSS} ref={boxRef}>
                <h2>{value === color ? `Yes, I'm ${color} color` : `I'm not a ${value} color`}</h2>
            </div>
        </>
    );
}

export default BoxColor;