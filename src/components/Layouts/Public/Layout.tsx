import React from "react";
import Header from "../private/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div> 
    </div>
  );
};

export default Layout;