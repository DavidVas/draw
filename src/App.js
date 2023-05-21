import Canvas from './Canvas'
import resizeCanvas from './resizeCanvas'

function App() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    resizeCanvas(ctx.canvas)

    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 25, 0, 2*Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(250, 150, 25, (frameCount*0.005)*2*Math.PI, Math.PI+(frameCount*0.005)*2*Math.PI)
    ctx.fill()
  }
  
  return <Canvas draw={draw} style={{width: '100%', height: '100%'}}/>
}

export default App