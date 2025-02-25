import React from 'react';
import styles from './Navigation.module.css';
import Link from 'next/link';

type NavigationItemProps = {
	text: string;
}

function formatLink(text: string) {
	return text === "browse" ? "/" : text
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ text }) => (
	<li className={styles.navigationItem}>
		<Link href={formatLink(text)} className={styles.navigationItem}>
			{text}
		</Link>
	</li>
);
