import styles from '../profile.module.css'

export function ProfileSkeleton() {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.skeleton}`}>
        <div className={`${styles.avatar} ${styles.skeletonPulse}`} />
        <div className={`${styles.skeletonText} ${styles.skeletonPulse}`} style={{ width: '200px' }} />
        <div className={`${styles.skeletonText} ${styles.skeletonPulse}`} style={{ width: '80%', maxWidth: '600px' }} />
      </header>
      <nav>
        <ul className={styles.menu}>
          {[1, 2, 3, 4].map((item) => (
            <li key={item} className={styles.menuItem}>
              <div className={`${styles.skeletonText} ${styles.skeletonPulse}`} style={{ width: '100px' }} />
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.content}>
        {[1, 2, 3].map((item) => (
          <article key={item} className={`${styles.card} ${styles.skeletonCard}`}>
            <div className={styles.cardContent}>
              <div className={`${styles.skeletonText} ${styles.skeletonPulse}`} style={{ width: '80%' }} />
              <div className={`${styles.skeletonText} ${styles.skeletonPulse}`} style={{ width: '90%' }} />
              <div className={styles.tags}>
                {[1, 2, 3].map((tag) => (
                  <div key={tag} className={`${styles.tag} ${styles.skeletonPulse}`} />
                ))}
              </div>
            </div>
            <div className={`${styles.cardImage} ${styles.skeletonPulse}`} />
          </article>
        ))}
      </div>
    </div>
  )
} 