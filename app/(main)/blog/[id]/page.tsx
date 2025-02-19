import styles from './article.module.css'
import { getarticleById, getCommentsByPostId, getPosts } from "@/utils/FetchData"
import { MDXRemote } from 'next-mdx-remote/rsc'
import CommentSection from './commentSection'
import CommentEditor from '@/components/comment/editor'

interface Iauthor {
  id: number
  username: number,
  email: string,
  role: number,
  createdAt: string,
  updatedAt: string
}

interface Icomment {
  id: number,
  text: string,
  auhtorId: number,
  postId: number
  createdAt: string,
  updatedAt: string
  author: Iauthor,
  likes: []
}

interface Post {
  id: string
  title: string
  content: string
  cover: string
  comments: Icomment[]
}

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: Post) => ({
    id: String(post.id),
  }))
}

export default async function Page({ params }: { params: { id: string } }) {
  try {
    const post: Post = await getarticleById(params.id);
    const comments: Icomment[] = await getCommentsByPostId(parseInt(params.id, 10));

    if (!post) {
      return <div>Article not found</div>;
    }

    return (
      <main className={styles.articleLayout}>
        <article className={styles.articleContent}>
          <h1 className={styles.articleTitle}>
            Unveiling the Magic: A Look into the World of Programming
          </h1>

          <header className={styles.authorInfo}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6864b769eed976f80a7754ed3719aae341f4fd72423d748c29fbca19cbc6fd64?placeholderIfAbsent=true&apiKey=8ac16ac69f6c435a89c4de7cb316c53d"
              alt="Author avatar"
              className={styles.authorAvatar}
            />
            <div className={styles.authorMeta}>
              <h2 className={styles.authorName}>Anya Petrova</h2>
              <div className={styles.publishInfo}>
                <time className={styles.publishDate}>published on 24 jun</time>
                <span className={styles.readTime}>7 min read</span>
              </div>
            </div>
          </header>

          <section className={styles.articleMeta}>
            <div className={styles.tags}>
              <span className={styles.tagTechnology}>Technology</span>
              <span className={styles.tag}>#programming</span>
              <span className={styles.tag}>#computer</span>
              <span className={styles.tag}>#DSA</span>
            </div>

            <div className={styles.metrics}>
              <div className={styles.metricItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd2ea26d561c34c493c8a261919e0c96434cff97a91ca1d674d4f4c534dc8da4?placeholderIfAbsent=true&apiKey=8ac16ac69f6c435a89c4de7cb316c53d" alt="Likes" className={styles.metricIcon} />
                <span>55</span>
              </div>
              <div className={styles.metricItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16cf39b6f79504f8812064b98ffab7a543597160256e20e221fa1789ab27ae3?placeholderIfAbsent=true&apiKey=8ac16ac69f6c435a89c4de7cb316c53d" alt="Views" className={styles.metricIcon} />
                <span className={styles.metricSpan}>1,202</span>
              </div>
              <div className={styles.metricItem}>
                <button className={styles.shareButton}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e01dd30892dda5b3cb2610c28c0fa6a5df0a775f9b567a10bd5a1d0c86232281?placeholderIfAbsent=true&apiKey=8ac16ac69f6c435a89c4de7cb316c53d" alt="Share" className={styles.shareIcon} />
                </button>
                <span></span>
              </div>
            </div>
          </section>

          {post.cover && (
            <img
              src={post.cover}
              alt="Article featured image"
              className={styles.featuredImage}
            />
          )}

          <MDXRemote source={post.content} />

          <CommentEditor 
            postId={parseInt(post.id)} 
            CommentList={<CommentSection comments={comments} />} 
          />
        </article>
      </main>
    );
  } catch (error) {
    return <div>Error loading article</div>;
  }
}
