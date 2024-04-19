import "./Buttons.scss"
import { ButtonItem } from "./components/ButtonItem"

export const Buttons = () => {
  const handleClick = () => {
    alert("You clicked the button!");
  }
  
  return (
    <div className="buttons-container">
      <h2 className="title">Buttons</h2>
      <div className="items-container buttons">
        <ButtonItem className="button_1" onClick={handleClick}>Button text</ButtonItem>
        <ButtonItem className="button_2" onClick={handleClick}>Button text</ButtonItem>
        <ButtonItem className="button_3" onClick={handleClick}>Button text</ButtonItem>
        <ButtonItem className="button_4">Button text</ButtonItem>
        <ButtonItem className="button_5">Button text</ButtonItem>
        <ButtonItem className="button_6">Button text</ButtonItem>
      </div>
    </div>
  )
}