import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
interface Props {
  children?: React.ReactNode; 
}

export default function Index({ children }:Props) {
  const [isHideHeader, setHideHeader] = useState(false);
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;      
      if (prevScrollpos > currentScrollPos) {
        setHideHeader(false);
      } else {
        setHideHeader(true);
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);
  return (
    <>
      <Header isHideHeader={isHideHeader}/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
