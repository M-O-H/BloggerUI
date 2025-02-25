"use client"
import React, { Suspense, useRef, useState } from 'react';
import styles from './ArticleEditor.module.css';
import { Button } from './Button';
import BlogEditor from '@/components/mdEditor/mdEditor';
import TagsInput from '@/components/tagInput/tagsInput';
import { createPost } from '@/utils/FetchData';
import { useRouter } from 'next/navigation';

const ArticleEditor = () => {

  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleTagSubmit = (data: string[]) => {
    setTags(data);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const title = titleRef.current?.value;
      const cover = imageRef.current?.value;

      if (!title) {
        setError("Please enter article title");
        return;
      }

      if (!content) {
        setError("Please add some content to your article");
        return;
      }

      const article = {
        title,
        content,
        cover: cover || undefined,
        tags,
        published: true
      }

      const createdArticle = await createPost(article);

      if (!createdArticle?.preview?.id) {
        throw new Error("Failed to create article");
      }

      router.replace(`/blog/${createdArticle.preview.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong while creating the article");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.header}>
        <input
          className={styles.title}
          ref={titleRef}
          placeholder='Title'
          required
        />
      </div>
      <div>
        <input
          type='text'
          placeholder="https://image.example.png"
          ref={imageRef}
          className={styles.coverImageBtn}
        />
      </div>
      <TagsInput sendTagsToParent={handleTagSubmit} />

      <Suspense fallback={<h1>loadding..</h1>}>
        <BlogEditor
          value={content}
          onChange={(value: string = '') => setContent(value)}
        />
      </Suspense>

      <div>
        <Button
          variant={isSubmitting ? "secondary" : "primary"}
        >
          {isSubmitting ? 'Publishing...' : 'Publish'}
        </Button>
      </div>
    </form>
  )
}

export default ArticleEditor;
