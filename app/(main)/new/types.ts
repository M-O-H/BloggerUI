export interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: 'primary' | 'secondary';
	className?: string;
}

export interface TabProps {
	label: string;
	isActive?: boolean;
	onClick?: () => void;
}
