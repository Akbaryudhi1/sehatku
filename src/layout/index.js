import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
