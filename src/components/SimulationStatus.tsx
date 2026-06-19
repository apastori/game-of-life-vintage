import React from 'react'
import { ISimulationStatusProps } from '../interfaces/ISimulationStatusProps'

export const SimulationStatus: React.FC<ISimulationStatusProps> = ({
  isPlaying,
}: ISimulationStatusProps): JSX.Element => {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <span className="label-plate">Status</span>
      <div className="readout px-4 py-1.5 rounded-sm flex items-center gap-2 min-w-[140px] justify-center">
        <span className={`indicator-lamp ${isPlaying ? 'indicator-lamp--active' : 'indicator-lamp--inactive'}`} />
        <span className={isPlaying ? 'text-monitor font-mono text-sm tracking-widest' : 'text-brass-muted font-mono text-sm tracking-widest'}>
          {isPlaying ? 'RUNNING' : 'PAUSED'}
        </span>
      </div>
    </div>
  )
}
