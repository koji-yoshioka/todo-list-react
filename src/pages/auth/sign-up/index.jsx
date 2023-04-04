import React from "react";
import { BasicLayout } from "@/components/layouts/BasicLayout";
import { SignUp } from "@/components/templates/auth/sign-up";

export default (props) => {
  return (
    <BasicLayout>
      <SignUp {...props} />
    </BasicLayout>
  );
};
