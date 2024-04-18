import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kreiva X Alfaaz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oldenburg&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap"></link>
      </head>
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}