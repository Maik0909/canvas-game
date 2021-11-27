import useCanvas from '../hooks/useCanvas'

// const _predraw = (context) => { context.restore() }

const Canvas = props => {
  const {draw,...rest} = props
  const canvasRef = useCanvas(draw)
  
  return <canvas style={ {width: window.innerWidth, height: window.innerHeight} } ref={canvasRef} {...rest}/>
}

export default Canvas