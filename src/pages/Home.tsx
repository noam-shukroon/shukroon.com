import { Link } from 'react-router-dom'
import nsLogo from '../assets/images/ns.svg'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className="content">
      <Link to="/ns">
        <img src={nsLogo} alt="SHUKROON" className={styles.logo} />
      </Link>
    </div>
  )
}
