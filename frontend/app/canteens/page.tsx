"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Canteen = {
  id: number;
  name: string;
  location: string | null;
  description?: string | null;
};

export default function CanteensPage() {
  const [canteens, setCanteens] = useState<Canteen[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCanteens() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/canteens`);
      const data = await response.json();

      setCanteens(data);
      setLoading(false);
    }

    fetchCanteens();
  }, []);

  if (loading) {
    return <main className="p-8">Loading canteens...</main>;
  }

  return (
    <main className="min-h-screen bg-zinc-50 p-8">
      <h1 className="text-3xl font-semibold text-zinc-900">Canteens</h1>

      <div className="mt-6 space-y-4">
        {canteens.map((canteen) => (
            <Link
                key={canteen.id}
                href={`/canteens/${canteen.id}`}
                className="block rounded-lg border bg-white p-4"
            >
                <h2 className="text-xl font-medium text-zinc-900">{canteen.name}</h2>
                <p className="text-zinc-600">{canteen.location}</p>
            </Link>
        ))}
      </div>
    </main>
  );
}