import { Link } from 'react-router-dom'
import styles from './BackButton.module.css'

export default function BackButton({ to = '/' }: { to?: string }) {
  return (
    <Link to={to} className={styles.backButton}>
      <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,25 L40,5 L40,15 L90,15 L90,35 L40,35 L40,45 Z" stroke="black" fill="black" />
      </svg>
    </Link>
  )
}
