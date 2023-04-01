import { Login } from "../../../components/templates/auth/login";
import { BasicLayout } from "../../../components/layouts/BasicLayout";

export default (props) => {
  return (
    <BasicLayout>
      <Login {...props} />
    </BasicLayout>
  );
};
