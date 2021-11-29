import './App.css';
import Game from './Game';
import {createContext} from 'react'
import useGame from './hooks/useGame';

export const GameContext = createContext()

function App() {

  const [gameState,dispatchGameActions] = useGame()

  const value = {
    gameState,
    dispatchGameActions,
    canvas2dContext: null
  }

  return(
    <GameContext.Provider value={value}>
      <Game/>
    </GameContext.Provider>
  )
}

export default App;
