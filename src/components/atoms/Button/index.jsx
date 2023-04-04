import { React, forwardRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export const Button = forwardRef(function Button(props, ref) {
  const { theme = "primary", ...restProps } = props;
  return (
    <button
      {...restProps}
      ref={ref}
      data-theme={theme}
      className={clsx(styles.module, restProps?.className)}
    >
      {restProps.children}
    </button>
  );
});
