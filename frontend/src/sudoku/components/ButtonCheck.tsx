
interface ButtonCheckProps {
  value: boolean;
  onChange: React.Dispatch<boolean>;
}

export default function ButtonCheck({ value, onChange }: ButtonCheckProps) {
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" defaultChecked={value} onChange={() => onChange(!value)} />
        <span className="slider round" />
      </label>
      <small>Solve asynchronously</small>
    </div>
  )
}
