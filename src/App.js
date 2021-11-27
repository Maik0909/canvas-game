import './App.css';
import Canvas from './components/Canvas';
import {useCallback} from 'react'

function App() {

  

  const draw = useCallback((ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  },[])

  return (
    <div className="App">
      <Canvas draw={draw}/>
    </div>
  );
}

export default App;
