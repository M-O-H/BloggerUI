import React from 'react';
import styles from './Navigation.module.css';
import Link from 'next/link';

type NavigationItemProps = {
	text: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ text }) => (
	<li className={styles.navigationItem}>
		<Link href={`/${text}`} className={styles.navigationLink}>
			{text}
		</Link>
	</li>
);
