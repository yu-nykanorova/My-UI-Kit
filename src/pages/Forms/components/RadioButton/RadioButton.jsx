import "./RadioButton.scss";
import { useState } from "react";

export const RadioButton = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
    <div className="radio-container">
        <label className="radio-label">
            <input
                className="radio-input"
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
            />
            <div className="custom-radio-button">
                <div className="custom-radio-circle"></div>
            </div>
            <p>Option 1</p>
        </label>
        <label className="radio-label">
            <input
                className="radio-input"
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
            />
            <div className="custom-radio-button">
                <div className="custom-radio-circle"></div>
            </div>
            <p>Option 2</p>
        </label>
        <label className="radio-label">
            <input
                className="radio-input"
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
                disabled
            />
            <div className="custom-radio-button">
                <div className="custom-radio-circle"></div>
            </div>
            <p>Option 3</p>
        </label>
    </div>
)
}

