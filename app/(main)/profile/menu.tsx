"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./profile.module.css"
import { NAVIGATION_LINKS } from '@/lib/config/constants';

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.menu}>
        {
          NAVIGATION_LINKS.map(({ label, link }, id) => {
            const isActive = pathname.includes(`/profile/${link}`);
            return (
              <li className={styles.menuItem} key={id}>
                <Link 
                  className={`${styles.menuLink} ${isActive ? styles.menuLinkActive : ''}`} 
                  href={`/profile/${link}`}
                >
                  {label}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}
