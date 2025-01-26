import styles from './blog.module.css';
import Article from "@/components/article/Article";
import ArticleSkeleton from '@/components/loadders/article-skeleton';
import { Pagination } from '@/components/pagination/pagination';
import Search from '@/components/search';
import { getPublicArtilces } from '@/utils/FetchData';
import { Suspense } from 'react';

const content = `Comparing the input latency of a modern PC to a system that’s 30–40 years old seems ridiculous on the face of it. Even if the computer on your desk or lap isn’t particularly new or very fast, it’s still clocked a thousand or more times faster than the cutting-edge technology of the 1980s, with multiple CPU cores, specialized decoder blocks, and support for video resolutions and detail levels on par with what science fiction of the era had dreamed up. In short, you’d think the comparison would be a one-sided blowout. In many cases, it is, but not with the winners you’d expect.

Engineer Dan Luu recently got curious about how various devices compare in terms of input latency and carried a high-speed camera around to measure input lag on some of them, because this is the sort of awesome thing engineers sometimes do. What he found is rather striking, as shown by the table below:`
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
              articleId={article.id}
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
