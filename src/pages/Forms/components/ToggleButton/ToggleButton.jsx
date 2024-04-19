import { useState } from "react";
import "./ToggleButton.scss";

export const ToggleButton = ({disabled}) => {
  
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        if (!disabled) {
            setIsToggled(prevState => !prevState);
        }    
    };

    return (
    <div className="toggle-button-container">
        <label className={`toggle-button ${disabled ? "disabled" : ""}`}>
            <input type="checkbox" checked={isToggled} onChange={toggle} disabled={disabled} />
            <span className="slider"></span>
        </label>
        <p>{isToggled && !disabled ? "ON" : "OFF"} {disabled ? "(disabled)" : ""}</p>
    </div>
  )
}

