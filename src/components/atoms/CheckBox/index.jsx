import styles from "./styles.module.css";
import { forwardRef } from "react";
import clsx from "clsx";

export const CheckBox = forwardRef(function CheckBox(props, ref) {
  return (
    <span className={clsx(styles.module, props?.className)}>
      <input type="checkbox" {...props} ref={ref} className={styles.element} />
      <span />
    </span>
  );
});
