import { useRef, useState, useEffect } from "react";
import BoxColor from "./BoxColor.jsx";

function MyForm() {
    const colors = ["red", "green", "pink", "yellow", "purple", "white", "blue", "aqua", "olive", "orange"];
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <>
            <input type="text" placeholder="Choose a colour" id="color" value={value} ref={inputRef} onChange={() => setValue(inputRef.current.value)} />
            <div className="container">
                {colors.map((color, index) => (
                    <BoxColor key={`${color}-${index}`} color={color} value={value} />
                ))}
            </div>
        </>
    );
}

export default MyForm;