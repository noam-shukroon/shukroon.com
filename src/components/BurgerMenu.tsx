import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './BurgerMenu.module.css'

const pages = [
  { label: 'Home', to: '/' },
  { label: 'NS', to: '/ns' },
  { label: 'Info', to: '/info' },
  { label: 'Cube', to: '/cube' },
  { label: 'Grid', to: '/grid' },
  { label: 'Sphere', to: '/sphere' },
]

export default function BurgerMenu() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const close = () => setOpen(false)

  return (
    <>
      <button
        className={`${styles.burger} ${open ? styles.open : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles.overlay} ${open ? styles.visible : ''}`}
        onClick={close}
      />

      <nav className={`${styles.drawer} ${open ? styles.open : ''}`}>
        <ul className={styles.nav} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {pages.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={styles.link}
                style={{ opacity: location.pathname === to ? 0.4 : undefined }}
                onClick={close}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
