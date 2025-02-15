export interface User {
  id: string;
  username: string;
  name: string;
  bio: string;
  avatarUrl: string;
  posts: Post[];
}

export interface Post {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  cover: string;
  author: Author;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
}

export interface Article {
  id: string;
  author: {
    username: string;
  };
  createdAt: string;
  title: string;
  content: string;
  cover: string;
  comments: any[];
  likes: any[];
}

interface Author {
  name: string;
  avatar: string;
} 