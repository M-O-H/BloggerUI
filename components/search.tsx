'use client';
import styles from './search.module.css'
import { usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';


export default function Search({ placeholder }: { placeholder: string }) {
	const pathName = usePathname();
	const { replace } = useRouter();

	// Get the current search query from the URL
	const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
	const defaultQuery = searchParams.get('query') || '';

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(term)
		if (term)
			params.set('query', term);
		else params.delete('query')
		replace(`${pathName}?${params.toString()}`);
	}, 300);


	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				placeholder={placeholder}
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={defaultQuery}
			/>
		</div>
	);
}
