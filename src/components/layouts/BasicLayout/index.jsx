import { Header } from "../../organisms/Header";

export const BasicLayout = ({ props, children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
