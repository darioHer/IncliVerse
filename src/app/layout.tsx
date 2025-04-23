
'use client';
import { usePathname } from 'next/navigation';
import Sidebar from '../components/layout/Sidebar';
import Navigation from '../components/layout/Navigation';
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLibraryPage = pathname.startsWith('/library');

  return (
    <html lang="es">
      <body>
        <Navigation />
        <div className="flex flex-col lg:flex-row gap-6 px-4 py-6">
          {isLibraryPage && <Sidebar />}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}