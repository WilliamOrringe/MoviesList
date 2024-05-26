import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomFooter from "@/components/ui/Footer";

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className="dark dark:bg-backgroundDark dark:text-textDark dark:accent-accentDark bg-backgroundLight text-textDark accent-accentLight m-12">
      <body>
        <main className="">{children}</main>
        <BottomFooter />
      </body>
    </html>
  );
};

export default Layout;
