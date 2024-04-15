import "./globals.css"; // this affects all classes and all components
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "oriun",
  description: "manejo de convocatorias unal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <body className={inter.className}>{children}</body>
    </html>
  );
}
