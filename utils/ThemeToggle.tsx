"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<button
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
		>
			{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
		</button>
	);
};

export default ThemeToggle;
