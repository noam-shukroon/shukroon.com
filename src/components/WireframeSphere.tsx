import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function WireframeSphere() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xE6E2D6)

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    const sphereRadius = 5
    const latitudeLines = 15
    const longitudeLines = 20
    const tubeRadius = 0.02
    const radialSegments = 10
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 })

    function createTube(pathPoints: THREE.Vector3[]) {
      const curve = new THREE.CatmullRomCurve3(pathPoints)
      const tubeGeometry = new THREE.TubeGeometry(curve, 75, tubeRadius, radialSegments, false)
      const tube = new THREE.Mesh(tubeGeometry, material)
      scene.add(tube)
    }

    // Latitude tubes
    for (let i = 1; i < latitudeLines; i++) {
      const latitudeAngle = (i / latitudeLines) * Math.PI - Math.PI / 2
      const pathPoints: THREE.Vector3[] = []
      for (let j = 0; j <= 100; j++) {
        const longitudeAngle = (j / 100) * 2 * Math.PI
        pathPoints.push(new THREE.Vector3(
          sphereRadius * Math.cos(latitudeAngle) * Math.cos(longitudeAngle),
          sphereRadius * Math.sin(latitudeAngle),
          sphereRadius * Math.cos(latitudeAngle) * Math.sin(longitudeAngle),
        ))
      }
      createTube(pathPoints)
    }

    // Longitude tubes
    for (let i = 0; i < longitudeLines; i++) {
      const longitudeAngle = (i / longitudeLines) * 2 * Math.PI
      const pathPoints: THREE.Vector3[] = []
      for (let j = 0; j <= 100; j++) {
        const latitudeAngle = (j / 100) * Math.PI - Math.PI / 2
        pathPoints.push(new THREE.Vector3(
          sphereRadius * Math.cos(latitudeAngle) * Math.cos(longitudeAngle),
          sphereRadius * Math.sin(latitudeAngle),
          sphereRadius * Math.cos(latitudeAngle) * Math.sin(longitudeAngle),
        ))
      }
      createTube(pathPoints)
    }

    const rotationSpeedX = Math.random() * 0.006 - 0.003
    const rotationSpeedY = Math.random() * 0.006 - 0.003

    let animationId: number
    function animate() {
      scene.rotation.y += rotationSpeedY
      scene.rotation.x += rotationSpeedX
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />
}
