import React from "react";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";

export const BasicLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
