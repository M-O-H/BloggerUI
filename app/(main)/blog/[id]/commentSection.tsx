import Comment from '@/components/comment/comment';
import styles from './commentsSection.module.css'

interface Iauthor {
  id: number
  username: number,
  email: string,
  role: number,
  createdAt: string,
  updatedAt: string
}

interface icomment {
  id: number,
  text: string,
  auhtorId: number,
  postId: number
  createdAt: string,
  updatedAt: string
  author: Iauthor,
  likes: []
}

interface commentsprops {
  comments: icomment[],
}

const CommentSection: React.FC<commentsprops> = ({ comments }) => {
  return (
    <>
      <section className={styles.commentSection}>
        {
          comments ?
            comments.map(comment => <Comment key={comment.id} id={comment.id} auhtorId={comment.auhtorId} createdAt={comment.createdAt} updatedAt={comment.updatedAt} text={comment.text} postId={comment.postId} author={comment.author} likes={comment.likes} />)
            : ''
        }
      </section>
    </>
  )
}

export default CommentSection;
