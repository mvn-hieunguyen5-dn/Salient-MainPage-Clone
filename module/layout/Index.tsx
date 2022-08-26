import Header from "./Header";
import Footer from "./Footer";
import React from "react";
interface Props {
  children?: React.ReactNode; 
}

export default function Index({ children }:Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
