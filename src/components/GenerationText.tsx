import React from 'react'
import { IGenerationTextProps } from '../interfaces/IGenerationTextProps'

export const GenerationText: React.FC<IGenerationTextProps> = ({ generation }: IGenerationTextProps): JSX.Element => {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <span className="label-plate">Generation</span>
      <div className="readout px-4 py-1.5 rounded-sm font-mono text-lg tracking-[0.3em] min-w-[100px] text-center">
        {generation.toString().padStart(4, '0')}
      </div>
    </div>
  )
}
