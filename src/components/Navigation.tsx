"use client"; // Necesario porque useRouter es un hook de cliente
import { useRouter } from "next/navigation";

export default function SomeComponent() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/login")}>Ir a Login</button>
  );
}
