import React from "react";
import { BasicLayout } from "../../../components/layouts/BasicLayout";
import { Login } from "../../../components/templates/auth/login";

export default (props) => {
  return (
    <BasicLayout>
      <Login {...props} />
    </BasicLayout>
  );
};
