
import Image from "next/image";

export default function Projets() {
  return (
    <main className="p-6 max-w-5xl mx-auto space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-4">Mes projets de rénovation</h1>
        <p className="mb-2">Voici un aperçu de plusieurs opérations que j’ai menées à Marseille, de l’état initial aux résultats après travaux.</p>
      </section>

      {/* Projet 1 : Cabinet dentaire transformé (Marseille 12e) */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">T3 – Ex-cabinet dentaire (Marseille 12e)</h2>
        <p className="mb-4">Ancien cabinet médical transformé en appartement lumineux et fonctionnel. Rénovation complète : démolition, refonte des volumes, cuisine, salle de bain, finitions. Belle plus-value réalisée.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Image src="/projets/cabinet-avant-1.jpg" width={800} height={600} alt="Avant rénovation" />
          <Image src="/projets/cabinet-avant-2.jpg" width={800} height={600} alt="Avant rénovation" />
          <Image src="/projets/cabinet-apres-1.jpg" width={800} height={600} alt="Après rénovation" />
          <Image src="/projets/cabinet-apres-2.jpg" width={800} height={600} alt="Après rénovation" />
        </div>
      </section>

      {/* Projet 2 : T4 La Rouvière */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">T4 La Rouvière – Marseille 9e</h2>
        <p className="mb-4">Appartement très chargé, rafraîchi proprement pour une revente rapide. Objectif : revalorisation à moindre coût.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Image src="/projets/rouviere-avant-1.jpg" width={800} height={600} alt="Avant travaux" />
          <Image src="/projets/rouviere-avant-2.jpg" width={800} height={600} alt="Avant travaux" />
          <Image src="/projets/rouviere-apres-1.jpg" width={800} height={600} alt="Après travaux" />
          <Image src="/projets/rouviere-apres-2.jpg" width={800} height={600} alt="Après travaux" />
        </div>
      </section>

      {/* Projet 3 : Boulevard du Jardin Zoologique */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">T3 – Bd Jardin Zoologique (Marseille 4e)</h2>
        <p className="mb-4">Rénovation complète avec refonte cuisine et salle de bain, ambiance moderne et chaleureuse, matériaux de qualité. Revente rapide avec marge confortable.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Image src="/projets/zoo-avant-1.jpg" width={800} height={600} alt="Avant travaux" />
          <Image src="/projets/zoo-avant-2.jpg" width={800} height={600} alt="Avant travaux" />
          <Image src="/projets/zoo-apres-1.jpg" width={800} height={600} alt="Après travaux" />
          <Image src="/projets/zoo-apres-2.jpg" width={800} height={600} alt="Après travaux" />
        </div>
      </section>
    </main>
  );
}
