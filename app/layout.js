import Header from "./components/Header/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
