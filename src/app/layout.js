import "../app/globals.css";  // Assurez-vous que ce chemin est correct
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: 'Bilal Boukhorissa',
  description: 'w/Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-white min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
