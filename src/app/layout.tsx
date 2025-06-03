'use client';

import "../styles/globals.css";
import { usePathname } from 'next/navigation';
import Navigation from '../components/layout/Navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="es">
      <body>
        {/* Navigation ahora internamente decide si mostrar Sidebar */}
        <Navigation />

        <div className="flex flex-col lg:flex-row gap-6 px-4 py-6">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
