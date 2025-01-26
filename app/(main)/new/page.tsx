"use client"
import React, { useState } from 'react';
import styles from './ArticleEditor.module.css';
import { Button } from './Button';
import BlogEditor from '@/components/mdEditor/mdEditor';
import TagsInput from '@/components/tagInput/tagsInput';

const ArticleEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Save content to your backend/API here
    console.log("Markdown Content:", content);
  };

  return (
    <div className={styles.articleLayout}>
      <main className={styles.mainContent}>
        <div className={styles.header}>
          <input className={styles.title} placeholder='Title' />
        </div>

        <Button variant="secondary" className={styles.coverImageBtn}>
          Add a cover image
        </Button>

        <TagsInput />

        <form onSubmit={handleSubmit} className={styles.form}>
          <BlogEditor value={content} onChange={setContent} />
          <div>
            <Button variant="primary">Publish</Button>
          </div>
        </form>

      </main>
      <div className={styles.divider} />
    </div>
  );
};

export default ArticleEditor
