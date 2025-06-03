'use client';

import "../styles/globals.css";
import Navigation from '../components/layout/Navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navigation />

        <div className="flex flex-col lg:flex-row gap-6 px-4 py-6">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
