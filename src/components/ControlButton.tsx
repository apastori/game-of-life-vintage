import React from 'react'
import { IControlButtonProps } from '../interfaces/IControlButtonProps'

export const ControlButton: React.FC<IControlButtonProps> = ({
  label,
  onClick,
  disabled = false,
}: IControlButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="vintage-btn"
    >
      {label}
    </button>
  )
}
