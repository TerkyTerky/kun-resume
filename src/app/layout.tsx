import type { Metadata } from "next";
import "./globals.css";
import BasicLayout from "@/layouts/BasicLayout";

export const metadata: Metadata = {
  title: "Blog",
  description: "Only for best kunkun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <BasicLayout>{children}</BasicLayout>
      </body>
    </html>
  );
}
