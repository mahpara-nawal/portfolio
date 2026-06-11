import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahpara Nawal | AI Engineer",
  description:
    "AI Engineer building systems that save lives — medical imaging, NLP, autonomous safety. Portfolio of Mahpara Nawal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}