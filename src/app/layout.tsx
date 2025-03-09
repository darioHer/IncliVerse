import "../styles/globals.css";
import Navigation from "../components/layout/Navigation";
import Sidebar from "../components/layout/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navigation />
        <div className="container">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
