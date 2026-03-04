import styles from './RotatingCube.module.css'

export default function RotatingCube() {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <div className={`${styles.face} ${styles.front}`} />
        <div className={`${styles.face} ${styles.back}`} />
        <div className={`${styles.face} ${styles.left}`} />
        <div className={`${styles.face} ${styles.right}`} />
        <div className={`${styles.face} ${styles.top}`} />
        <div className={`${styles.face} ${styles.bottom}`} />
      </div>
    </div>
  )
}
