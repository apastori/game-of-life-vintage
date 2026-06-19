import { useCallback, useRef, useState } from 'react'
import { IGameLifeProps } from './interfaces/IGameLifeProps'
import type { Grid } from './types/GridType'
import { createEmptyGrid } from './utils/createEmptyGrid'
import { GenerationText } from './components/GenerationText'
import { SeedRandomButton } from './components/SeedRandomButton'
import { ClearButton } from './components/ClearButton'
import { assertIsInteger } from './utils/assertIsInteger'
import GridButton from './components/GridButton'
import { SelectorSpeed } from './components/SelectorSpeed'
import { ControlButton } from './components/ControlButton'
import { EditingToggle } from './components/EditingToggle'
import { SimulationStatus } from './components/SimulationStatus'
import { MachineHeader } from './components/MachineHeader'
import { computeNextGrid } from './computeNextGrid'
import { canEditGrid } from './canEditGrid'

const GameLife: React.FC<IGameLifeProps> = ({ gridConfig }: IGameLifeProps): JSX.Element => {
  const { rows, columns }: { rows: number; columns: number } = gridConfig
  const [grid, setGrid]: [Grid, React.Dispatch<React.SetStateAction<Grid>>] = useState<Grid>(createEmptyGrid(rows, columns))
  const [isPlaying, setIsPlaying]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [hasSimulationStarted, setHasSimulationStarted]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [allowEditingWhilePaused, setAllowEditingWhilePaused]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true)
  const [allowEditingWhileRunning, setAllowEditingWhileRunning]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [generation, setGeneration]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0)
  const [isMouseDown, setIsMouseDown]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [speed, setSpeed]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(100)

  const playingRef: React.MutableRefObject<boolean> = useRef(isPlaying)
  playingRef.current = isPlaying
  const speedRef: React.MutableRefObject<number> = useRef(speed)
  speedRef.current = speed

  const runGameOfLife = useCallback(() => {
    if (!playingRef.current) return
    setGrid((currentGrid) => computeNextGrid(currentGrid))
    setGeneration((prevGeneration: number) => {
      assertIsInteger(prevGeneration)
      return prevGeneration + 1
    })
    setTimeout(runGameOfLife, speedRef.current)
  }, [])

  const handleStart = (): void => {
    if (isPlaying) return
    setHasSimulationStarted(true)
    setIsPlaying(true)
    playingRef.current = true
    runGameOfLife()
  }

  const handlePause = (): void => {
    if (!isPlaying) return
    setIsPlaying(false)
    playingRef.current = false
  }

  const handleStep = (): void => {
    if (isPlaying) return
    setGrid((currentGrid) => computeNextGrid(currentGrid))
    setGeneration((prevGeneration: number) => {
      assertIsInteger(prevGeneration)
      return prevGeneration + 1
    })
  }

  const handleMouseDown = (): void => {
    setIsMouseDown(true)
  }

  const handleMouseUp = (): void => {
    setIsMouseDown(false)
  }

  const handleMouseEnter = (row: number, col: number): void => {
    if (isMouseDown) {
      toggleCellState(row, col)
    }
  }

  const toggleCellState = (rowToToggle: number, columnToToggle: number): void => {
    if (!canEditGrid(hasSimulationStarted, isPlaying, allowEditingWhilePaused, allowEditingWhileRunning)) {
      return
    }
    const newGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === rowToToggle && colIndex === columnToToggle
          ? cell
            ? 0
            : 1
          : cell
      )
    )
    setGrid(newGrid)
  }

  return (
    <div className="GameLife w-full">
      <MachineHeader isPlaying={isPlaying} generation={generation} />

      {/* Control Deck */}
      <section className="vintage-panel p-4 sm:p-5 mb-4 relative">
        <span className="screw top-2 left-2" />
        <span className="screw top-2 right-2" />
        <span className="screw bottom-2 left-2" />
        <span className="screw bottom-2 right-2" />

        <p className="label-plate text-center mb-3">Control Deck — Primary Operations</p>

        <div className="flex gap-2 sm:gap-3 items-center justify-center flex-wrap">
          <ControlButton label="Start" onClick={handleStart} disabled={isPlaying} />
          <ControlButton label="Pause" onClick={handlePause} disabled={!isPlaying} />
          <ControlButton label="Step" onClick={handleStep} disabled={isPlaying} />
          <ClearButton
            onClick={() => {
              setGrid(createEmptyGrid(rows, columns))
              setIsPlaying(false)
              playingRef.current = false
              setHasSimulationStarted(false)
              setGeneration(0)
            }}
          />
          <SeedRandomButton
            onClick={() => {
              const newGridRows: Grid = []
              for (let i: number = 0; i < rows; i++) {
                newGridRows.push(
                  Array.from(Array(columns), () => {
                    return Math.random() > 0.75 ? 1 : 0
                  })
                )
              }
              setGrid(newGridRows)
            }}
          />
          <SelectorSpeed
            value={speed}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setSpeed(parseInt(e.target.value))
            }}
          />
        </div>

        <div className="instrument-separator my-4" />

        <p className="label-plate text-center mb-3">Editing Configuration</p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <EditingToggle
            label="Allow Editing While Paused"
            checked={allowEditingWhilePaused}
            onChange={setAllowEditingWhilePaused}
          />
          <EditingToggle
            label="Allow Editing While Running"
            checked={allowEditingWhileRunning}
            onChange={setAllowEditingWhileRunning}
          />
        </div>
      </section>

      {/* Observation Chamber */}
      <section className="vintage-panel p-4 sm:p-5 relative">
        <span className="screw top-2 left-2" />
        <span className="screw top-2 right-2" />
        <span className="screw bottom-2 left-2" />
        <span className="screw bottom-2 right-2" />

        <p className="label-plate text-center mb-3">Observation Chamber — Cellular Matrix</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-3">
          <SimulationStatus isPlaying={isPlaying} />
          <GenerationText generation={generation} />
        </div>

        <div className="observation-chamber">
          <span className="screw top-1 left-1 !w-2 !h-2" />
          <span className="screw top-1 right-1 !w-2 !h-2" />
          <span className="screw bottom-1 left-1 !w-2 !h-2" />
          <span className="screw bottom-1 right-1 !w-2 !h-2" />

          <div className="observation-chamber-inner">
            <div
              className="grid-display inline-grid"
              style={{
                display: 'grid',
                gridTemplateRows: `repeat(${rows}, var(--cell-size))`,
                gridTemplateColumns: `repeat(${columns}, var(--cell-size))`,
              }}
            >
              {
                grid.map((rows, rowIndex) => (
                  rows.map((_col, colIndex) => (
                    <GridButton
                      key={`${rowIndex}-${colIndex}`}
                      rowIndex={rowIndex}
                      colIndex={colIndex}
                      isActive={grid[rowIndex][colIndex]}
                      handleMouseDown={handleMouseDown}
                      handleMouseUp={handleMouseUp}
                      handleMouseEnter={handleMouseEnter}
                      toggleCellState={toggleCellState}
                    />
                  ))
                ))
              }
            </div>
            <div className="glass-overlay" />
          </div>
        </div>

        <div className="flex justify-between mt-3 px-1">
          <span className="label-plate text-[0.55rem] opacity-40">GRID {columns}×{rows}</span>
          <span className="label-plate text-[0.55rem] opacity-40">OBSERVATION PORT Mk.IV</span>
        </div>
      </section>
    </div>
  )
}

export default GameLife
