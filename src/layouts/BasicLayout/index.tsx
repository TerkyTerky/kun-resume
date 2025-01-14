import React from "react";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import "./index.css";

const BasicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <GlobalHeader />
      <div className="content-container">
        <main className="content">{children}</main>
      </div>
      <GlobalFooter />
    </div>
  );
};

export default BasicLayout;
