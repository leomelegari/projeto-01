import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export const Sidebar = () => {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        />

        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/70903423?v=4"
          />
          <strong>Leo Melegari</strong>
          <span>React developer</span>
        </div>
        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
};
