import React, { useEffect, useState } from 'react'

interface ISystemReadoutProps {
  isPlaying: boolean
  generation: number
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '.')
}

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

export const SystemReadout: React.FC<ISystemReadoutProps> = ({
  isPlaying,
  generation,
}: ISystemReadoutProps): JSX.Element => {
  const [now, setNow] = useState<Date>(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-4">
      <div className="flex flex-col gap-1">
        <span className="label-plate">System Date</span>
        <div className="readout px-3 py-2 rounded-sm">{formatDate(now)}</div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="label-plate">System Time</span>
        <div className="readout px-3 py-2 rounded-sm animate-flicker">{formatTime(now)}</div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="label-plate">Generation Engine</span>
        <div className="readout px-3 py-2 rounded-sm">{generation.toString().padStart(6, '0')}</div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="label-plate">Cellular Automata</span>
        <div className="readout px-3 py-2 rounded-sm flex items-center gap-2">
          <span className={`indicator-lamp ${isPlaying ? 'indicator-lamp--active' : 'indicator-lamp--inactive'}`} />
          <span className="text-monitor text-xs sm:text-sm">
            {isPlaying ? 'ACTIVE' : 'STANDBY'}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="label-plate">Simulation Status</span>
        <div className="readout px-3 py-2 rounded-sm flex items-center gap-2">
          <span className={`indicator-lamp ${isPlaying ? 'indicator-lamp--active' : 'indicator-lamp--warning'}`} />
          <span className={isPlaying ? 'text-monitor' : 'text-brass-muted'}>
            {isPlaying ? 'RUNNING' : 'PAUSED'}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="label-plate">Simulation Active</span>
        <div className="readout px-3 py-2 rounded-sm flex items-center gap-2">
          <span className={`indicator-lamp ${isPlaying ? 'indicator-lamp--active' : 'indicator-lamp--inactive'}`} />
          <span className="text-xs sm:text-sm text-amber-dim">
            {isPlaying ? 'ENGAGED' : 'IDLE'}
          </span>
        </div>
      </div>
    </div>
  )
}
