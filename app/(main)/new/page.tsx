import { Suspense } from 'react';
import ArticleEditor from './articleEditer';
import styles from './ArticleEditor.module.css';

const NewPage: React.FC = () => {
  return (
    <div className={styles.articleLayout}>
      <main className={styles.mainContent}>
        <Suspense fallback={<h1>loadding..</h1>}>
          <ArticleEditor />
        </Suspense>
      </main>
    </div>
  );
};

export default NewPage;
