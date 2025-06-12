"use client";

import { useState } from "react";
import TextInput from "./InputBox";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        router.push("/signin");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-black text-white rounded-l-xl p-6 md:p-8 shadow-lg"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow mb-4">
        Sign Up
      </h1>

      {/* Google Sign-up */}
      <button
        type="button"
        onClick={() => {}}
        className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium py-2 rounded-lg transition hover:bg-gray-100 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        <img src="/icons8-google.svg" alt="Google" className="w-5 h-5" />
        Sign up with Google
      </button>

      {/* Divider */}
      <div className="relative text-center text-gray-500 my-4">
        <span className="px-2 bg-black">or</span>
        <div className="absolute left-0 top-1/2 w-full h-px bg-gray-700 -z-10"></div>
      </div>

      <div className="space-y-4">
        <TextInput
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
      </div>

      <button
        type="submit"
        className="w-full bg-yellow text-black font-semibold py-2 rounded-lg transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2"
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>

      <div className="flex flex-col md:flex-row justify-between text-center text-sm text-gray-400 gap-2 pt-2">
        <a
          href="/signin"
          className="hover:text-yellow transition duration-300 hover:underline"
        >
          Already have an account?
        </a>
      </div>
    </form>
  );
}
