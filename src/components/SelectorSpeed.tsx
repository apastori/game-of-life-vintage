import { ISelectorSpeedProps } from '../interfaces/ISelectorSpeedProps'

export const SelectorSpeed: React.FC<ISelectorSpeedProps> = ({
  onChange,
  value,
}: ISelectorSpeedProps): JSX.Element => {
  return (
    <label className="vintage-btn flex items-center gap-2 cursor-pointer !py-1.5">
      <span className="text-brass-muted text-[0.65rem] tracking-widest">SPD</span>
      <select
        className="vintage-select"
        aria-label="speed selector"
        value={value}
        onChange={onChange}
      >
        <option value={1000}>Slow</option>
        <option value={500}>Medium</option>
        <option value={100}>Fast</option>
        <option value={50}>Lightning</option>
      </select>
    </label>
  )
}
