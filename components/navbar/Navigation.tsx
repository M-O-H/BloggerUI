import React from 'react';
import { NavigationItem } from './NavigationItem';
import styles from './Navigation.module.css';
import Link from 'next/link';
import UserAvatar from './UserAvatar';
import ThemeToggle from '@/utils/ThemeToggle';

const navigationItems = ['About', 'Blog', 'New', "Profile"];

const HamMenu = async () => {
	return <Link href="#" className={styles.hamMenu}>
		<span></span>
		<span></span>
		<span></span>
	</Link>
}
export const Navigation: React.FC = () => {
	return (
		<header className={styles.navigation}>
			<HamMenu />
			<h1 className={styles.brand}>DevShare</h1>
			<nav className={styles.navbar}>
				<ul className={styles.navigationList}>
					{navigationItems.map((item) => (
						<NavigationItem key={item} text={item.toLowerCase()} />
					))}
					<ThemeToggle />
				</ul>
			</nav>
			<UserAvatar />
		</header>
	);
};
