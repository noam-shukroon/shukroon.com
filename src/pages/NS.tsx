import scopeImg from '../assets/images/scope.png'
import BackButton from '../components/BackButton'
import styles from './NS.module.css'

export default function NS() {
  return (
    <>
      <img src={scopeImg} alt="SHUKROON" className={styles.scopeImage} />
      <BackButton to="/" />
    </>
  )
}
