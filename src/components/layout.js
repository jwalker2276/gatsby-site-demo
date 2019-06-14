import React from "react";
import Header from "../components/header";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
