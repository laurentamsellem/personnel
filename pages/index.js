
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur le site de Laurent Amsellem</h1>
      <Link href="/projets" className="text-blue-600 underline">Voir les projets immobiliers</Link>
    </main>
  );
}
