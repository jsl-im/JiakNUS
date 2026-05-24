"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function signUp() {
    setMessage("Creating account...");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Account created. Check Supabase Auth users.");
  }

    async function logIn() {
    setMessage("Logging in...");

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        setMessage(error.message);
        return;
    }

    setMessage("Logged in successfully.");
    router.push("/canteens");
    }

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50 px-6">
      <section className="w-full max-w-sm rounded-lg border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-zinc-900">JiakNUS Login</h1>

        <div className="mt-6 space-y-4">
          <input
            className="w-full rounded-md border px-3 py-2 text-zinc-900"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className="w-full rounded-md border px-3 py-2 text-zinc-900"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            className="w-full rounded-md bg-zinc-900 px-4 py-2 font-medium text-white"
            onClick={logIn}
          >
            Log in
          </button>

          <button
            className="w-full rounded-md border px-4 py-2 font-medium text-zinc-900"
            onClick={signUp}
          >
            Register
          </button>

          {message && <p className="text-sm text-zinc-600">{message}</p>}
        </div>
      </section>
    </main>
  );
}