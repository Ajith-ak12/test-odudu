import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odudu Dao",
  description:
    "Odudu Dao Web Application",
  authors: [{ name: "Odudu Dao Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
