
import { useRef, useEffect } from 'react'


const resizeCanvas = (canvas,context) => {
  const scale = window.devicePixelRatio
  canvas.width = window.innerWidth * scale
  canvas.height = window.innerHeight * scale
  context.scale(scale,scale)
}

const useCanvas = draw => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
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
  }, [draw])
  
  return canvasRef
}

export default useCanvas