import React from "react";
import GlobalHeader from "../components/GlobalHeader";

const BasicLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <GlobalHeader />
      <main className="container">{children}</main>
    </div>
  );
};

export default BasicLayout;
