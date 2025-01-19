import React from "react";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";

const BasicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <GlobalHeader />
      <div className="min-h-screen flex">
        <main className="flex-1">{children}</main>
      </div>
      <GlobalFooter />
    </div>
  );
};

export default BasicLayout;
