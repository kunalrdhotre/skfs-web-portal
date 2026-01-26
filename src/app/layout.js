import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Shree Krishna Furniture Store",
  description: "Crafted furniture for your home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
