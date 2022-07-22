import styles from "./Header.module.css";
import Logo from "../assets/images/ignite-logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logotipo ignite" />
    </header>
  );
};
