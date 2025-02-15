import styles from './Skeleton.module.css';

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ variant = 'text', width, height }: SkeletonProps) {
  return (
    <div 
      className={`${styles.skeleton} ${styles[variant]}`}
      style={{ width, height }}
    />
  );
}

export function ProfileSkeleton() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.profileHeader}>
          <Skeleton variant="circular" width={120} height={120} />
          <div className={styles.profileInfo}>
            <Skeleton width={200} height={24} />
            <Skeleton width="60%" height={16} />
          </div>
        </div>
        <nav className={styles.navigation}>
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={20} />
        </nav>
      </header>
      <div className={styles.content}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={styles.skeletonCard}>
            <div className={styles.cardHeader}>
              <div className={styles.authorInfo}>
                <Skeleton variant="circular" width={32} height={32} />
                <div className={styles.authorText}>
                  <Skeleton width={120} height={16} />
                  <Skeleton width={80} height={12} />
                </div>
              </div>
            </div>
            <Skeleton height={200} />
            <div className={styles.cardFooter}>
              <Skeleton width={120} height={16} />
              <div className={styles.stats}>
                <Skeleton width={40} height={16} />
                <Skeleton width={40} height={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 