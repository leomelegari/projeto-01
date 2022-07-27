import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

interface Props {
  id?: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
}

export const Post = ({ author, publishedAt, content }: Props) => {
  const [comment, setComment] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  const formattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateComment = () => {
    event?.preventDefault();
    setComment([...comment, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = () => {
    event?.target.setCustomValidity("");
    setNewCommentText(event?.target?.value);
  };

  const handleInvalid = () => {
    event?.target.setCustomValidity("campo obrigatório");
  };

  const deleteComment = (commentToDelete: any) => {
    const newCommentList = comment.filter((list) => list !== commentToDelete);

    setComment(newCommentList);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorinfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={formattedDate} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else {
            return (
              <p key={item.content}>
                <a href="">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          name="commentArea"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onInvalid={handleInvalid}
          required
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comment.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};
