import "./DropdownMenu.scss";
import { useState } from "react";

export const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="dropdown">
        <h2 className="title">Dropdown Menu</h2>
        <div className="dropdown-toggle" onClick={toggleDropdown}>
            <p>Dropdown</p>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" fill="#505050"/></svg></span>
        </div>
        {isOpen && (
            <ul className="dropdown-menu">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            </ul>
        )}
    </div>
  )
}

