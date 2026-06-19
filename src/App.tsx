import GameLife from './GameLife'
import { GridConfig } from './GridConfig'

const App = (): JSX.Element => {
  return (
    <div className="machine-chassis">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <GameLife gridConfig={GridConfig} />
      </div>
    </div>
  )
}

export default App
