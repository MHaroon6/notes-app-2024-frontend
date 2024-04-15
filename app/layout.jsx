import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NotesProvider from "@/context/NotesContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
// import CustomProvider from "@/context/CustomProvider";

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
