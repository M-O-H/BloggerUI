"use client"
import React from 'react';
import styles from './Comment.module.css';
import { likeComment } from '@/utils/FetchData';
import CommentIcon from '../article/Comment-icon';
import HeartIcon from '../article/heart-icon';

interface Iauthor {
	username: number,
}

interface commentProps {
	id: number,
	text: string,
	auhtorId: number,
	postId: number
	createdAt: string,
	updatedAt: string,
	author: Iauthor
	likes: []
}

const commentMoc = {
	id: '1',
	avatarSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb0e4b8a69a9c8499e109e377bd5834d859db9b035ed8c7deff00ee17dd39a15?placeholderIfAbsent=true&apiKey=8ac16ac69f6c435a89c4de7cb316c53d',
	author: 'Anya Petrova',
	timestamp: '3min.ago',
	content: 'I agree with statement "Javascript takes lifetime to learn", because they\'re different ways to do one thing. Great article btw :D.'
}

const handleLike = async (commentId: number) => {
	const isLiked = await likeComment(commentId, "comment")
	console.log(isLiked);
}

const Comment: React.FC<commentProps> = (comment) => {
	return (
		<div className={styles.comment}>
			<div className={styles.content}>
				<img
					loading="lazy"
					src={commentMoc.avatarSrc}
					alt={`${commentMoc.author}'s avatar`}
					className={styles.avatar}
				/>
				<div className={styles.content}>
					<div className={styles.header}>
						<div className={styles.author}>{comment.author.username}</div>
						<div className={styles.timestamp}>{comment.createdAt}</div>
					</div>
					<div className={styles.message}>{comment.text}</div>
				</div>
				<footer className={styles.footer}>
					<div className={styles.inline}>
						<a className={styles.icon} href='' onClick={() => handleLike(comment.id)} >
							<HeartIcon />
						</a>
						<span>{comment.likes.length || 0}</span>
					</div>
					<div className={styles.inline}>
						<a className={styles.icon} href='' onClick={() => handleLike(comment.id)} >
							<CommentIcon />
						</a>
						<span>{3}</span>
					</div>
				</footer>
			</div>
		</div >
	);
};

export default Comment;
