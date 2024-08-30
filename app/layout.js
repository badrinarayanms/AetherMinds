import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AetherMinds",
  description: "Elevate learning and well-being to a higher plane, where academic success meets mental clarity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
