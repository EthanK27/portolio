import "@/app/globals.css";
import Header from "@/components/Header";
import CursorGlow from "@/components/CursorGlow";

export const metadata = {
  title: "Portfolio",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Header/>
        <CursorGlow/>
        <main>{children}</main>
      </body>
    </html>
  );
}
