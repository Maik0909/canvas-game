
import { useRef, useEffect, useContext } from 'react'
import { GameContext } from '../App'


const resizeCanvas = (canvas,context) => {
  const scale = window.devicePixelRatio
  canvas.width = window.innerWidth * scale
  canvas.height = window.innerHeight * scale
  context.scale(scale,scale)
}

const useCanvas = draw => {
  
  const globalState = useContext(GameContext)
  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    globalState.canvas2dContext = context

    let frameCount = 0
    let animationFrameId
    
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    resizeCanvas(canvas,context)
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return canvasRef
}

export default useCanvas