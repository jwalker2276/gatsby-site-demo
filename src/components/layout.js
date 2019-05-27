import React from "react";
import Header from "../components/header";
import styled from "styled-components";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
