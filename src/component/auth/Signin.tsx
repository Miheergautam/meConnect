"use client";
import { useState } from "react";
import TextInput from "./InputBox";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) router.push("/");
    else alert("Invalid credentials");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-5xl font-bold text-center mb-10">SignIn</h1>
      <TextInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Sign In
      </button>
    </form>
  );
}
