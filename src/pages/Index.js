import React from "react";
import Header from "../components/Header";
import Vision from "../components/Vision";
import Features from "../components/Features";
import Session from "../components/Session";
import Footer from "../components/Footer";
export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Vision />
        <Features />
        <Session />
        <div id="end" />
        <Footer />
      </main>
    </>
  );
}
