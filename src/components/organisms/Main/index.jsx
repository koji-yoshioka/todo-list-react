import styles from "./styles.module.css";
import clsx from "clsx";

export const Main = (props) => {
  return (
    <main className={clsx(styles.module, props?.className)}>
      {props.children}
    </main>
  );
};
