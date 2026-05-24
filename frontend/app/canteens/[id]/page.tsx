"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type Stall = {
  id: number;
  canteen_id: number;
  name: string;
  cuisine_type: string | null;
  halal_status: string | null;
  vegetarian_options: boolean;
  price_min: number | null;
  price_max: number | null;
  opening_hours_text: string | null;
};

export default function CanteenDetailPage() {
  const params = useParams<{ id: string }>();
  const [stalls, setStalls] = useState<Stall[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStalls() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/stalls?canteen_id=${params.id}`
      );
      const data = await response.json();

      setStalls(data);
      setLoading(false);
    }

    fetchStalls();
  }, [params.id]);

  if (loading) {
    return <main className="p-8">Loading stalls...</main>;
  }

  return (
    <main className="min-h-screen bg-zinc-50 p-8">
      <Link className="text-sm text-zinc-600" href="/canteens">
        Back to canteens
      </Link>

      <h1 className="mt-4 text-3xl font-semibold text-zinc-900">
        Stalls
      </h1>

      <div className="mt-6 space-y-4">
        {stalls.map((stall) => (
            <Link
                key={stall.id}
                href={`/canteens/${params.id}/stalls/${stall.id}`}
                className="block rounded-lg border bg-white p-4 transition hover:border-zinc-400 hover:shadow-sm"
            >
                <h2 className="text-xl font-medium text-zinc-900">{stall.name}</h2>
                <p className="text-zinc-600">{stall.cuisine_type}</p>
                <p className="text-zinc-600">Halal: {stall.halal_status}</p>
            </Link>
        ))}
      </div>
    </main>
  );
}
