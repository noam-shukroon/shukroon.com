import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NS from './pages/NS'
import Info from './pages/Info'
import Info2 from './pages/Info2'
import Cube from './pages/Cube'
import Grid from './pages/Grid'
import Sphere from './pages/Sphere'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ns" element={<NS />} />
      <Route path="/info" element={<Info />} />
      <Route path="/info2" element={<Info2 />} />
      <Route path="/cube" element={<Cube />} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/sphere" element={<Sphere />} />
    </Routes>
  )
}
