import React from "react";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type PropsType = {
  children: ReactNode;
};

export default function Layout(prop: PropsType) {
  return (
    <>
      <Header />
      {prop.children}
      <Footer />
    </>
  );
}
