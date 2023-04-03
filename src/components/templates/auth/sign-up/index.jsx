import styles from "./styles.module.css";
import { TextBox } from "../../../atoms/TextBox";
import { CheckBox } from "../../../atoms/CheckBox";
import { Main } from "../../../organisms/Main";

export const SignUp = (props) => {
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
            <CheckBox />
          </li>
        </ul>
      </form>
    </Main>
  );
};
