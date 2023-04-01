import styles from "./styles.module.css";
import clsx from "clsx";
import { forwardRef } from "react";

export const TextBox = forwardRef(function TextBox(props, ref) {
  return (
    <span className={styles.inputField}>
      <input
        {...props}
        ref={ref}
        className={clsx(styles.module, props?.className)}
      />
      <span data-placeholder={props?.placeholder}></span>
    </span>
  );
});
