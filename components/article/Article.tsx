import styles from './Article.module.css';
import HeartIcon from './heart-icon';
import CommentIcon from './Comment-icon';
import Link from 'next/link';

interface ArticlesProps {
	authorName: string,
	imageUrl: string,
	postDate: string,
	title: string,
	summary: string,
	comments: number,
	likes: number,
}

const Articles: React.FC<ArticlesProps> = ({ authorName, title, summary, imageUrl, postDate, comments, likes }) => {
	return (
		<Link className={styles.link} href='#'>
			<article className={styles.article}>

				<div className={styles.author}>
					<img className={styles.avatar}
						src="/wallhaven-o3lx3l.png"
						alt="Picture of the author"
						width={50}
						height={50}
					/>
					<div className={styles.authorInfo}>
						<p className={styles.authorName}>{authorName}</p>
						<p className={styles.postDate}>{postDate}</p>
					</div>
				</div>
				<header className={styles.header}>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.summary}>{summary.slice(0, 90)}...more</p>
				</header>
				<div className={styles.crayons}>
					<Link className={styles.tag} href='#'>#technology</Link>
					<Link className={styles.tag} href='#'>#programming</Link>
					<Link className={styles.tag} href='#'>#computer</Link>
					<Link className={styles.tag} href='#'>#DSA</Link>
				</div>
				<img className={styles.cover}
					src={imageUrl}
					alt="Picture of the author"
					width={70}
					height={70}
				/>
				<footer className={styles.footer}>
					<div className={styles.inline}>
						<HeartIcon />
						<span>{likes}</span>
					</div>
					<div className={styles.inline}>
						<CommentIcon />
						<span>{comments}</span>
					</div>
				</footer>
			</article>
		</Link>
	);
}

export default Articles;
