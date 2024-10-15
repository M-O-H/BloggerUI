import { Inter, Roboto_Mono, Roboto, Montserrat } from 'next/font/google'

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
})

export const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
});

export const montserrat = Montserrat({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
});
