import { Link } from "react-router-dom";
import logo from "./assets/reactjs-icon.svg";
import styles from "./styles.module.css";

export const Header = ({ props }) => {
  return (
    <header className={styles.module}>
      <Link to="/" className={styles.logoArea}>
        <img src={logo} alt="" className={styles.logoArea__logo} />
        <h1 className={styles.logoArea__title}>Plain-React</h1>
      </Link>
    </header>
  );
};
