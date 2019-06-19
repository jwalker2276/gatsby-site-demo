import React from "react";
import Header from "./header";
// Normalize css
import "./layout.css";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
