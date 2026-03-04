import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NS from './pages/NS'
import Info from './pages/Info'
import Cube from './pages/Cube'
import Grid from './pages/Grid'
import Sphere from './pages/Sphere'
import BurgerMenu from './components/BurgerMenu'

export default function App() {
  return (
    <>
      <BurgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ns" element={<NS />} />
        <Route path="/info" element={<Info />} />
        <Route path="/cube" element={<Cube />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/sphere" element={<Sphere />} />
      </Routes>
    </>
  )
}
