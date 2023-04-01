import { SignUp } from "../../../components/templates/auth/sign-up";
import { BasicLayout } from "../../../components/layouts/BasicLayout";

export default (props) => {
  return (
    <BasicLayout>
      <SignUp {...props} />
    </BasicLayout>
  );
};
