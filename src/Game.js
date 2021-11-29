import React, { useContext } from 'react'
import Canvas from './components/Canvas';
import {useCallback} from 'react'
import { GameContext } from './App';
import Popup from './components/Popup';

const Game = () => {

  const {gameState, dispatchGameActions} = useContext(GameContext)


  const draw = useCallback((ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  },[])



  return (
    <div className="App">
      <Popup/>
      <Canvas draw={draw}/>
    </div>
  );

}

export default Game
