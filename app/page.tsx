import styles from './page.module.css';
import ArticleComponent from "@/components/article/Article";
import ArticleSkeleton from '@/components/loadders/article-skeleton';
import { Pagination } from '@/components/pagination/pagination';
import Search from '@/components/search';
import { getPublicArtilces } from '@/utils/FetchData';
import { Suspense } from 'react';
import type { Article } from '@/types';

const ArticleList = async ({ query, currentPage }: { query: string, currentPage: number }) => {
  const articles = await getPublicArtilces({ query, currentPage });
  return (
    <>
      {
        articles ?
          articles.map((article: Article) => (
            <ArticleComponent
              key={article.id}
              articleId={parseInt(article.id)}
              authorName={article.author.username}
              postDate={article.createdAt}
              title={article.title}
              summary={article.content}
              imageUrl={article.cover}
              comments={Number(article.comments.length)}
              likes={Number(article.likes.length)}
            />
          ))
          : <h1>{query} Article not found</h1>
      }
    </>
  );
};

const Title = () => <h1 className={styles.title}>Browse ideas and stories</h1>

const BlogPost = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;


  return <>
    <header className={styles.header}>
      <Title />
      <Search placeholder='Search blog..' />
    </header>
    <main className={styles.content}>
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleList query={query} currentPage={currentPage} />
      </Suspense>
    </main>
    <Pagination />
  </>
};

export default BlogPost;
