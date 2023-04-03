import styles from "./styles.module.css";
import clsx from "clsx";
import { forwardRef } from "react";

export const TextBox = forwardRef(function TextBox(props, ref) {
  return (
    <span className={clsx(styles.module, props?.className)}>
      <input {...props} ref={ref} className={styles.element} />
      <span data-placeholder={props.placeholder} />
    </span>
  );
});
