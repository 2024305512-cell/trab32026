import "./globals.css";

export const metadata = {
  title: "301 INFO - Kauê, Vinícius - Salus",
  description: "301 INFO - Kauê, Vinícius - Salus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
