import styles from './blog.module.css';
import Article from "@/components/article/Article";
import ArticleSkeleton from '@/components/loadders/article-skeleton';
import { Pagination } from '@/components/pagination/pagination';
import Search from '@/components/search';
import { getPublicArtilces } from '@/utils/FetchData';
import { Suspense } from 'react';


const ArticleList = async ({ query, currentPage }: { query: string, currentPage: number }) => {
  console.log('art', query, currentPage);
  const articles = await getPublicArtilces({ query, currentPage });
  return (
    <>
      {
        articles ?
          articles.map(article => (
            <Article
              key={article.id}
              authorName={article.author.username}
              postDate={article.createdAt}
              title={article.title}
              summary={article.content}
              imageUrl={article.cover}
              comments={article.comments.length}
              likes={article.likes.length}
            />
          ))
          : <h1>Not found</h1>
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
