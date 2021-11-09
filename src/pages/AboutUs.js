import React from "react";
// import Nav from "../components/Nav2";
import Nav from "../components/Nav";
import BelowHeader from "../components/BelowHeader";
import Footer from "../components/Footer";
// import "../styles/navAbout.scss";
export default function Index() {
  return (
    <>
      <Nav id={"nav"} />
      <main>
        <BelowHeader />
        <Footer />
      </main>
      {/* <footer>
        
      </footer> */}
    </>
  );
}
