import "./Input.scss";

export const Input = ({ type, placeholder, value, onChange, disabled }) => {
  return (
    <div>
        <label className="input-label">
            Label
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} />
        </label>
    </div>
  )
}

