"use client"
import { getUserProfile } from '@/utils/FetchData';
import styles from './profile.module.css';
import { useEffect, useState } from 'react';
import type { User, Post } from '@/types';
import { ProfileSkeleton } from '@/components/common/Skeleton';
import Link from 'next/link';
import Image from 'next/image';

export function UserProfile() {
  const [articles, setArticles] = useState<Post[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('Articles')

  useEffect(() => {
    (async () => {
      try {
        const user = await getUserProfile()
        setArticles(user.posts || []);
        setUser(user)
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [])

  if (loading) {
    return <ProfileSkeleton />
  }

  const tabs = ['Articles', 'Reading Lists', 'Comments', 'About']

  const renderContent = () => {
    switch (activeTab) {
      case 'Articles':
        return (
          <div className={styles.articleGrid}>
            {articles.length === 0 ? (
              <p>No articles found</p>
            ) : (
              articles.map((article) => (
                <Link href={`/blog/${article.id}`} key={article.id} style={{ textDecoration: 'none' }}>
                  <article key={article.id} className={styles.articleCard}>
                    <div className={styles.articleHeader}>
                      <div className={styles.articleMeta}>
                        <img src="/avatar.jpg" alt="" className={styles.authorAvatar} />
                        <div>
                          <span className={styles.authorName}>{user?.username}</span>
                          <span className={styles.articleDate}>24 jun(3 day ago) • 7 min read</span>
                        </div>
                      </div>
                    </div>


                    <div className={styles.articleContent}>
                      <h2 className={styles.articleTitle}>
                        {article.title.length > 50 ? `${article.title.substring(0, 58)}...` : article.title}
                      </h2>
                      <p className={styles.articleDescription}>{article.description}</p>
                    </div>

                    {article.cover && (
                      <div className={styles.articleImage}>
                        <img src={article.cover} alt={article.title} />
                      </div>
                    )}

                    <div className={styles.articleFooter}>
                      <div className={styles.tags}>
                        {/* {article.tags.split(',')?.map((tag) => (
                        <span key={tag} className={styles.tag}>#{tag}</span>
                      ))} */}
                      </div>
                      <div className={styles.metrics} style={{ justifyContent: 'flex-start', gap: '16px' }}>
                        <span>❤️ 300</span>
                        <span>💬 300</span>
                        <button className={styles.saveButton}>
                          <span>⋮</span>
                        </button>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            )}
          </div>
        )
      case 'Reading Lists':
        return <div className={styles.content}>Reading Lists Content</div>
      case 'Comments':
        return <div className={styles.content}>Comments Content</div>
      case 'About':
        return <div className={styles.content}>About Content</div>
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <div className={styles.profileInfo}>
          <Image
            src="/profile-circle-svgrepo-com.svg"
            alt="Profile avatar"
            width={100}
            height={100}
            className={styles.profileAvatar}
          />
          <h1 className={styles.profileName}>{user?.username}</h1>
          <p className={styles.profileBio}>
            Author Nameinceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum
          </p>
        </div>
        <button className={styles.followButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={styles.followIcon}>
            <path d="M12 4.5V19.5M19.5 12H4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Follow
        </button>
      </div>

      <nav className={styles.profileNav}>
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`${styles.navItem} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </nav>

      {renderContent()}
    </div>
  )
}
