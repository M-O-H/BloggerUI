import React from 'react';
import styles from './skeleton.module.css';


const CardSkeleton = () => {
	return (
		<div className={styles.link}>
			<div className={`${styles.author} ${styles.skeleton}`}>
				<div className={`${styles.avatar} ${styles.skeleton}`}></div>
				<div className={`${styles.authorInfo} ${styles.skeleton}`}>
					<div className={`${styles.username} ${styles.skeleton}`}>
					</div>
					<div className={`${styles.postDate} ${styles.skeleton}`}>
					</div>

				</div>
			</div>
			<div className={`${styles.header} ${styles.skeleton}`}>
				<div className={`${styles.title} ${styles.skeleton}`}></div>
				<div className={`${styles.summary} ${styles.skeleton}`}></div>
				<div className={`${styles.lineStroke} ${styles.skeleton}`}></div>
			</div>
			<div className={`${styles.crayons} ${styles.skeleton}`}>
				<div className={`${styles.tag} ${styles.skeleton}`}></div>
				<div className={`${styles.tag} ${styles.skeleton}`}></div>
				<div className={`${styles.tag} ${styles.skeleton}`}></div>
				<div className={`${styles.tag} ${styles.skeleton}`}></div>
			</div>
			<div className={`${styles.cover} ${styles.skeleton}`}></div>
			<div className={`${styles.footer} ${styles.skeleton}`}>
				<div className={`${styles.heartIcon} ${styles.skeleton}`}></div>
				<div className={`${styles.commentsIcon} ${styles.skeleton}`}></div>
			</div>
		</div>
	);
}
const ArticleSkeleton = () => {
	return <>
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
	</>
}
export default ArticleSkeleton;
