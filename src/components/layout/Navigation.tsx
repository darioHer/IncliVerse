import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/library">Biblioteca</Link></li>
        <li><Link href="/auth/login">Login</Link></li>
      </ul>
    </nav>
  );
}