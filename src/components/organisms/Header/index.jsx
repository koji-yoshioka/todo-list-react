import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

export const Header = ({ props }) => {
  return (
    <header className={styles.module}>
      <Link to="/">
        <h1>plain-react</h1>
      </Link>
    </header>
  );
};
