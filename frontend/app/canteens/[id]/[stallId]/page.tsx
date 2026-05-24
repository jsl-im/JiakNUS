"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type MenuItem = {
  id: number;
  stall_id: number;
  name: string;
  description: string | null;
  price: number | null;
  calories_estimate: number | null;
  protein_estimate: number | null;
  carbs_estimate: number | null;
  fat_estimate: number | null;
};

export default function StallDetailPage() {
  const params = useParams<{ id: string; stallId: string }>();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenuItems() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/menu-items?stall_id=${params.stallId}`
      );

      const data = await response.json();

      setMenuItems(data);
      setLoading(false);
    }

    fetchMenuItems();
  }, [params.stallId]);

  if (loading) {
    return <main className="p-8">Loading menu items...</main>;
  }

  return (
    <main className="min-h-screen bg-zinc-50 p-8">
      <Link className="text-sm text-zinc-600" href={`/canteens/${params.id}`}>
        Back to stalls
      </Link>

      <h1 className="mt-4 text-3xl font-semibold text-zinc-900">
        Menu Items
      </h1>

      <div className="mt-6 space-y-4">
        {menuItems.map((item) => (
          <section key={item.id} className="rounded-lg border bg-white p-4">
            <h2 className="text-xl font-medium text-zinc-900">{item.name}</h2>

            {item.description && (
              <p className="mt-1 text-zinc-600">{item.description}</p>
            )}

            {item.price !== null && (
              <p className="mt-2 font-medium text-zinc-900">
                ${item.price.toFixed(2)}
              </p>
            )}

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-zinc-600">
              {item.calories_estimate !== null && (
                <p>Calories: {item.calories_estimate}</p>
              )}
              {item.protein_estimate !== null && (
                <p>Protein: {item.protein_estimate}g</p>
              )}
              {item.carbs_estimate !== null && (
                <p>Carbs: {item.carbs_estimate}g</p>
              )}
              {item.fat_estimate !== null && (
                <p>Fat: {item.fat_estimate}g</p>
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}