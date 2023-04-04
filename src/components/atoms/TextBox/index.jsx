import { React, forwardRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export const TextBox = forwardRef(function TextBox(props, ref) {
  return (
    <span className={clsx(styles.module, props?.className)}>
      <input {...props} ref={ref} className={styles.element} />
      <span data-placeholder={props.placeholder} />
    </span>
  );
});
