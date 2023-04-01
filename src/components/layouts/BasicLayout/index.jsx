import { Header } from "../../organisms/Header";
import { Footer } from "../../organisms/Footer";

export const BasicLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
