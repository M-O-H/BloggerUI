import { Navigation } from '@/components/navbar/Navigation';
import ThemeToggle from '@/utils/ThemeToggle';
import styles from './Layout.module.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navigation />
        <ThemeToggle />
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
} 