export const metadata = {
  title: "George Capital — Dubai Real Estate",
  description: "Institutional-grade access to Dubai property investments.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-50 to-white">{children}</body>
    </html>
  );
}
