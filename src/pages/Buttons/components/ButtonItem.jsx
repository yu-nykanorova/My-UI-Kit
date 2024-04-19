import "./ButtonItem.scss";

export const ButtonItem = ({ className, onClick, children }) => {
  return (
    <div>
      <button className={`btn button-item ${className}`} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}
