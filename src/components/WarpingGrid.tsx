import { useEffect, useRef } from 'react'

export default function WarpingGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    let interactionStarted = false

    function resizeCanvas() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      interactionStarted = true
    }
    canvas.addEventListener('mousemove', handleMouseMove)

    function drawGrid() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      ctx!.strokeStyle = 'black'
      ctx!.lineWidth = 2.5

      const gridSize = 35
      const time = Date.now() * 0.001

      const verticalLines = Math.ceil(canvas!.width / gridSize) + 1
      const horizontalLines = Math.ceil(canvas!.height / gridSize) + 1

      for (let i = 0; i < verticalLines; i++) {
        ctx!.beginPath()
        for (let j = 0; j < horizontalLines; j++) {
          const x = i * gridSize
          const y = j * gridSize
          const dx = x - mouseX
          const dy = y - mouseY
          const distance = Math.sqrt(dx * dx + dy * dy)
          const influence = interactionStarted ? Math.max(0, 1 - distance / 200) : 0

          const nx = interactionStarted ? x + Math.sin((x + time) * 0.02 + dy * 0.01) * 20 * influence * Math.cos((y + time) * 0.01) : x
          const ny = interactionStarted ? y + Math.sin((y + time) * 0.03 + dx * 0.01) * 15 * influence * Math.cos((x + time) * 0.005) : y

          if (j === 0) {
            ctx!.moveTo(nx, ny)
          } else {
            ctx!.lineTo(nx, ny)
          }
        }
        ctx!.stroke()
      }

      for (let j = 0; j < horizontalLines; j++) {
        ctx!.beginPath()
        for (let i = 0; i < verticalLines; i++) {
          const x = i * gridSize
          const y = j * gridSize
          const dx = x - mouseX
          const dy = y - mouseY
          const distance = Math.sqrt(dx * dx + dy * dy)
          const influence = interactionStarted ? Math.max(0, 1 - distance / 200) : 0

          const nx = interactionStarted ? x + Math.sin((x + time) * 0.02 + dy * 0.01) * 20 * influence * Math.cos((y + time) * 0.01) : x
          const ny = interactionStarted ? y + Math.sin((y + time) * 0.03 + dx * 0.01) * 15 * influence * Math.cos((x + time) * 0.005) : y

          if (i === 0) {
            ctx!.moveTo(nx, ny)
          } else {
            ctx!.lineTo(nx, ny)
          }
        }
        ctx!.stroke()
      }

      animationId = requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ display: 'block' }} />
}
