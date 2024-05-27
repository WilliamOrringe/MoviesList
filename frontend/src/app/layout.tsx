import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className="dark">
      <body className="dark:bg-backgroundDark dark:text-textDark dark:accent-accentDark bg-backgroundLight text-textDark accent-accentLight m-12">
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
