"use client";

import { FcGoogle } from "react-icons/fc";
import supabase from "@/utils/supabase/supabaseClient";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full items-center px-8 sm:max-w-md justify-center gap-2">
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="border hover:bg-gray-100 flex items-center justify-center gap-2 rounded-md px-4 py-2">
          <FcGoogle />
          Continue with Google
        </button>
        <button className="bg-green-700 text-white rounded-md px-4 py-2 text-foreground mb-2" onClick={signIn}>
          Sign In
        </button>
      </form>
    </div>
  );
}
