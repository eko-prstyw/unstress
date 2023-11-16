import React from "react";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type PropsType = {
  children: ReactNode;
};

export default function Layout(prop: PropsType) {
  return (
    <>
      <Navbar />
      {prop.children}
      <Footer />
    </>
  );
}
