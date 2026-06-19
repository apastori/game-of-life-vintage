import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IGridButtonProps } from '../interfaces/IGridButtonProps'

const GridButton: React.FC<IGridButtonProps> = ({
  rowIndex,
  colIndex,
  isActive,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
  toggleCellState,
}) => {
  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
      onClick={() => toggleCellState(rowIndex, colIndex)}
      className={twMerge(
        'grid-cell',
        isActive ? 'grid-cell--alive' : 'grid-cell--dead'
      )}
      aria-label={`Cell ${rowIndex}, ${colIndex}`}
    />
  )
}

export default GridButton
