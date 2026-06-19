import React from 'react'
import { ISeedButtonProps } from '../interfaces/ISeedButtonProps'

export const SeedRandomButton: React.FC<ISeedButtonProps> = ({
  onClick,
  children
}: ISeedButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="vintage-btn"
    >
      Random
      {children}
    </button>
  )
}
