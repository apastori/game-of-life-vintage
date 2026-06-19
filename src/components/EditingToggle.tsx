import React from 'react'
import { IEditingToggleProps } from '../interfaces/IEditingToggleProps'

export const EditingToggle: React.FC<IEditingToggleProps> = ({
  label,
  checked,
  onChange,
}: IEditingToggleProps): JSX.Element => {
  return (
    <label className="mechanical-toggle gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => onChange(event.target.checked)}
      />
      <span className="mechanical-toggle-track">
        <span className="mechanical-toggle-thumb" />
      </span>
      <span className="label-plate text-xs">{label}</span>
    </label>
  )
}
