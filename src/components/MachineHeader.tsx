import React from 'react'
import { SystemReadout } from './SystemReadout'

interface IMachineHeaderProps {
  isPlaying: boolean
  generation: number
}

export const MachineHeader: React.FC<IMachineHeaderProps> = ({
  isPlaying,
  generation,
}: IMachineHeaderProps): JSX.Element => {
  return (
    <header className="relative vintage-panel p-4 sm:p-6 mb-4">
      <span className="screw top-2 left-2" />
      <span className="screw top-2 right-2" />
      <span className="screw bottom-2 left-2" />
      <span className="screw bottom-2 right-2" />

      <div className="text-center">
        <p className="engraved-subtitle mb-2">Cellular Automata Research Console</p>
        <h1 className="engraved-title">GAME OF LIFE TOTO</h1>
        <p className="engraved-subtitle mt-2 opacity-70">Mk. IV — Laboratory Observation Unit</p>
      </div>

      <div className="instrument-separator mt-4" />

      <SystemReadout isPlaying={isPlaying} generation={generation} />

      <div className="flex justify-between mt-3 px-2">
        <span className="label-plate text-[0.6rem] opacity-50">SER. NO. CA-1970-Ω</span>
        <span className="label-plate text-[0.6rem] opacity-50">CAL. CERT. VALID</span>
      </div>
    </header>
  )
}
