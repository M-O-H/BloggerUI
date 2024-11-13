import React from 'react';
import { NavigationItem } from './NavigationItem';
import styles from './Navigation.module.css';
import Link from 'next/link';

const navigationItems = ['Home', 'About', 'Blog', 'Write'];

const HamMenu = () => {
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
			<h1 className={styles.brand}>Smallium</h1>
			<nav className={styles.navbar}>
				<ul className={styles.navigationList}>
					{navigationItems.map((item) => (
						<NavigationItem key={item} text={item.toLowerCase()} />
					))}
				</ul>
			</nav>
			<div className={styles.ButtonWrapper}>
				<button className={styles.loginButton}>
					Login
				</button>

				<button className={styles.registerButton}>
					Register
				</button>
			</div>
		</header>
	);
};
