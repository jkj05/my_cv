import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Navbar";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Layout />
      <main className="site-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* other pages will go here */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}
