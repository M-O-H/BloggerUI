"use client"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState, ReactNode } from 'react';

interface ThemeProviderProps {
	children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<NextThemesProvider attribute="class">
			{children}
		</NextThemesProvider>
	);
};

export default ThemeProvider;
