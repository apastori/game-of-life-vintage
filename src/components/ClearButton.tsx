import React from 'react'
import { IClearButtonProps } from '../interfaces/IClearButtonProps'

export const ClearButton: React.FC<IClearButtonProps> = ({
  onClick
}: IClearButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="vintage-btn"
    >
      Clear
    </button>
  )
}
