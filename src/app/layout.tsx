import "./globals.css";
import { Roboto } from "@next/font/google";

import Header from "@components/header";
import Providers from "@components/providers";

const font = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900", "1000"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`antialiased ${font.className}`}>
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body className="dark:bg-zinc-900">
        <Providers>
          <div>
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
