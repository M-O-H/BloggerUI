"use client";
import { usePathname, useRouter } from 'next/navigation';
import styles from './styles.module.css';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export const Pagination = () => {
	const [pageCount, setPageCount] = useState(1);
	const pathname = usePathname();
	const { replace } = useRouter();

	const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
	const defaultPageNum = searchParams.get('query') || 1;
	console.log(defaultPageNum);

	const handlePagination = useDebouncedCallback((increment: number) => {
		console.log('clicked')
		const newPage = pageCount + increment;
		if (newPage < 1) return; // Prevent going to pages below 1

		setPageCount(newPage);

		const params = new URLSearchParams();
		params.set('page', newPage.toString());
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className={styles.container}>
			<button className={styles.btn} onClick={() => handlePagination(1)}>Next</button>
			<button className={styles.btn} onClick={() => handlePagination(-1)}>Previous</button>
		</div>
	);
};
