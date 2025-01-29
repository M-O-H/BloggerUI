"use client"
import React, { Suspense, useRef, useState } from 'react';
import styles from './ArticleEditor.module.css';
import { Button } from './Button';
import BlogEditor from '@/components/mdEditor/mdEditor';
import TagsInput from '@/components/tagInput/tagsInput';
import { image } from '@uiw/react-md-editor';
import { createPost } from '@/utils/FetchData';

const ArticleEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const titleRef = useRef<HTMLInputElement>(null); // TypeScript
  const imageRef = useRef<HTMLInputElement>(null); // TypeScript

  const handleTagSubmit = (data: string[]) => {
    setTags(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const title = titleRef.current?.value;
    const cover = imageRef.current?.value;

    if (!title) {
      console.log("please enter article title")
    }
    const article = {
      title,
      content,
      cover,
      tags,
      published: true
    }
    const createdArticle = await createPost(article);
    if (!createdArticle) {
      console.log("someting went wrong")
    }
    console.log(createdArticle)
  };

  return (
    <div className={styles.articleLayout}>
      <main className={styles.mainContent}>


        <form onSubmit={handleSubmit} className={styles.form}>

          <div className={styles.header}>
            <input className={styles.title} ref={titleRef} placeholder='Title' required />
          </div>

          <input
            placeholder='Add image cover'
            type="file"
            accept="image/*"
            ref={imageRef}
          />

          <TagsInput sendTagsToParent={handleTagSubmit} />

          <Suspense >
            <BlogEditor value={content} onChange={setContent} />
          </Suspense>

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
