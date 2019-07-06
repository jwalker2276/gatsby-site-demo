import React from "react";
import Header from "./header";
import BottomNav from "./bottom-nav";
import Footer from "./footer";

// Normalize css
import "./layout.css";

const Layout = ({ children }) => (
  <main>
    <Header />
    {children}
    <BottomNav />
    <Footer />
  </main>
);

export default Layout;
