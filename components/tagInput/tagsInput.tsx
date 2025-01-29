"use client";
import { useState, useRef, KeyboardEvent } from 'react';
import styles from './TagsInput.module.css';

type ChildProps = {
	sendTagsToParent: (value: string[]) => void;
};
const TagsInput = ({ sendTagsToParent }: ChildProps) => {
	const [tags, setTags] = useState<string[]>([]);
	const [inputValue, setInputValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const handleAddTag = () => {
		const trimmedValue = inputValue.trim();
		if (trimmedValue && !tags.includes(trimmedValue)) {
			setTags(prev => [...prev, trimmedValue]);
			sendTagsToParent(tags)
			setInputValue('');
		}
	};

	const handleRemoveTag = (index: number) => {
		setTags(prev => prev.filter((_, i) => i !== index));
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		const { key } = e;
		const trimmedValue = inputValue.trim();

		if ((key === 'Enter' || key === ',') && trimmedValue) {
			e.preventDefault();
			handleAddTag();
		}

		if (key === 'Backspace' && !inputValue && tags.length > 0) {
			e.preventDefault();
			const lastTag = tags[tags.length - 1];
			setTags(tags.slice(0, -1));
			setInputValue(lastTag);
		}
	};

	return (
		<div className={styles.tagsContainer}>
			{tags.map((tag, index) => (
				<div
					key={index}
					className={styles.tag}
				>
					<span>{tag}</span>
					<button
						type="button"
						onClick={() => handleRemoveTag(index)}
						className={styles.closeButton}
					>
						×
					</button>
				</div>
			))}
			<input
				ref={inputRef}
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder="Add a tag..."
				className={styles.input}
			/>
		</div>
	);
};

export default TagsInput;
