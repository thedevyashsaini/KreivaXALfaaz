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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>

        <meta property="og:url" content="https://www.kreiva-x-alfaaz.co/">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Kreiva X Alfaaz">
        <meta property="og:description" content="">
        <meta property="og:image" content="https://i.imgur.com/hqLwAqY.png">

        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:domain" content="kreiva-x-alfaaz.co">
        <meta property="twitter:url" content="https://www.kreiva-x-alfaaz.co/">
        <meta name="twitter:title" content="Kreiva X Alfaaz">
        <meta name="twitter:description" content="">
        <meta name="twitter:image" content="https://i.imgur.com/hqLwAqY.png">

      </head>
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}