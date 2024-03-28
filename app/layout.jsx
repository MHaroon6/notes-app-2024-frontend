import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
// import CustomProvider from "@/context/CustomProvider";
import NotesProvider from "@/context/NotesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notes App 2024",
  description: "A simple note keeping application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotesProvider>
          <Header />
          <div className="flex ">
            <Sidebar />
            {children}
          </div>
        </NotesProvider>
      </body>
    </html>
  );
}
