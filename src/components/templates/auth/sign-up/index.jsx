import { React, useId } from "react";
import { Button } from "@/components/atoms/Button";
import { CheckBox } from "@/components/atoms/CheckBox";
import { TextBox } from "@/components/atoms/TextBox";
import { Main } from "@/components/organisms/Main";
import styles from "./styles.module.css";

export const SignUp = (props) => {
  const autoLoginId = useId();
  return (
    <Main className={styles.container}>
      <form action="" className={styles.module}>
        <h2 className={styles.title}>ユーザ登録</h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            <TextBox type="mail" placeholder="ユーザID（メールアドレス）" />
          </li>
          <li className={styles.item}>
            <TextBox type="password" placeholder="パスワード" />
          </li>
          <li className={styles.item}>
            <label htmlFor={autoLoginId} className={styles.autoLogin}>
              <span>次回から自動ログイン</span>
              <CheckBox id={autoLoginId} />
            </label>
          </li>
        </ul>
        <div className={styles.buttonArea}>
          <Button theme="primary">登録する</Button>
        </div>
      </form>
    </Main>
  );
};
