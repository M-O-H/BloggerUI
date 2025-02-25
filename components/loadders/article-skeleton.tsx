import React from 'react';
import styles from './skeleton.module.css';

interface SkeletonProps {
	className: string;
}

const SkeletonElement: React.FC<SkeletonProps> = ({ className }) => <div className={`${className} ${styles.skeleton}`}></div>;

const CardSkeleton = () => (
	<div className={styles.link}>
		<div className={`${styles.author} ${styles.skeleton}`}>
			<SkeletonElement className={styles.avatar} />
			<div className={styles.authorInfo}>
				<SkeletonElement className={styles.username} />
				<SkeletonElement className={styles.postDate} />
			</div>
		</div>
		<div className={styles.header}>
			<SkeletonElement className={styles.title} />
			<SkeletonElement className={styles.summary} />
			<SkeletonElement className={styles.lineStroke} />
		</div>
		<div className={styles.crayons}>
			{Array(4).fill(undefined).map((_, index) => (
				<SkeletonElement key={index} className={styles.tag} />
			))}
		</div>
		<SkeletonElement className={styles.cover} />
		<div className={styles.footer}>
			<SkeletonElement className={styles.heartIcon} />
			<SkeletonElement className={styles.commentsIcon} />
		</div>
	</div>
);

const ArticleSkeleton = () => (
	<>
		{Array(6).fill(undefined).map((_, index) => (
			<CardSkeleton key={index} />
		))}
	</>
);

export default ArticleSkeleton;
