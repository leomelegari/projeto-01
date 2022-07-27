import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface Props {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export const Comment = ({ content, onDeleteComment }: Props) => {
  const [likeCount, setLikeCount] = useState<number>(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  // sempre que for utilizar o valor anterior para realizar a alteração de um estado,
  // o ideial é fazer da forma abaixo
  const handleLikeAdd = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/leomelegari.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leo Melegari</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeAdd}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
