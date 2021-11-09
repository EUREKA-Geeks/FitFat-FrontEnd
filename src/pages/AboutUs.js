import React from "react";
import Nav from "../components/Nav2";
// import Nav from "../components/Nav";
import BelowHeader from "../components/BelowHeader";
import Footer from "../components/Footer";
export default function Index() {
  return (
    <>
      <Nav />
      <main>
        <BelowHeader />
        <Footer />
      </main>
      {/* <footer>
        
      </footer> */}
    </>
  );
}
