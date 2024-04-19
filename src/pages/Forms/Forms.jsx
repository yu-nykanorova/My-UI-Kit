import "./Forms.scss"
import { ToggleButton } from "./components/ToggleButton/ToggleButton"
import { RadioButton } from "./components/RadioButton/RadioButton"
import { Input } from "./components/Input/Input"

export const Forms = () => {
  return (
    <div  className="forms-container">
      <h2 className="title">Toggle button</h2>
      <div className="items-container toggle-buttons">
        <ToggleButton />
        <ToggleButton disabled />
      </div>

      <h2 className="title">Radio button</h2>
      <div className="items-container radio-buttons">
        <RadioButton />
      </div>

      <h2 className="title">Input</h2>
      <div className="items-container input-item">
        <Input type="text" placeholder="Enter your email" />
        <Input type="text" placeholder="Enter your email" disabled="true" />
      </div>

    </div>
  )
}