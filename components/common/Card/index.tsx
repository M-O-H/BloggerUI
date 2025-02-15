import styles from './Card.module.css';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  style?: React.CSSProperties;
}

export function Card({ title, description, tags = [], imageUrl }: CardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.tags}>
          {Array.isArray(tags) && tags.map((tag, index) => (
            <span key={index} className={styles.tag}>#{tag}</span>
          ))}
        </div>
      </div>
      <Image 
        src={imageUrl} 
        alt={title}
        width={300}
        height={200}
        className={styles.cardImage}
      />
    </article>
  );
} 