import { React } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export const Main = (props) => {
  return (
    <main className={clsx(styles.module, props?.className)}>
      {props.children}
    </main>
  );
};
