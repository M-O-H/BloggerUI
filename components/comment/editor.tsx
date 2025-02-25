"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from './Comment.module.css';
import { createComment, getCommentsByPostId, getUserProfile } from '@/utils/FetchData';
import Link from 'next/link';
import CommentSection from '@/app/(main)/blog/[id]/commentSection';

// Add proper type definitions
interface Comment {
	id: number;
	text: string;
	auhtorId: number;
	postId: number;
	createdAt: string;
	updatedAt: string;
	author: {
		id: number;
		username: number;
		email: string;
		role: number;
		createdAt: string;
		updatedAt: string;
	};
	likes: [];
}

interface CommentProps {
	postId: number;
}

const CommentEditor: React.FC<CommentProps> = ({ postId }) => {
	const [auth, setAuth] = useState<boolean>(false);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [comments, setComments] = useState<Comment[]>([]);
	const editorRef = useRef<HTMLTextAreaElement>(null);

	// Separate data fetching logic
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [user, articleComments] = await Promise.allSettled([
					getUserProfile(),
					getCommentsByPostId(postId)
				]);

				setAuth(user.status === 'fulfilled' && !!user.value);
				if (articleComments.status === 'fulfilled') {
					setComments(articleComments.value);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [postId]);

	const handleSubmit = async () => {
		if (!auth || !editorRef.current?.value.trim()) return;

		try {
			setIsSubmitting(true);
			const result = await createComment(postId, editorRef.current.value);

			// Update comments locally for immediate feedback
			if (result) {
				// setComments(prevComments => [...prevComments, result]);
				editorRef.current.value = ''; // Clear input after successful submission
			}
		} catch (error) {
			console.error('Error submitting comment:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<textarea
				ref={editorRef}
				className={styles.editor}
				placeholder="Write comments..."
				id="w3review"
				name="w3review"
			/>
			<div>
				{auth ? (
					<button
						onClick={handleSubmit}
						className={styles.btn}
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Submitting...' : 'Add'}
					</button>
				) : (
					<Link href="/auth/signin" className={styles.btn}>
						Login
					</Link>
				)}
			</div>
			<CommentSection comments={comments} />
		</>
	);
};

export default CommentEditor;
