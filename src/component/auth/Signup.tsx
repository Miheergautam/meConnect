"use client";

import { useState } from "react";
import TextInput from "./InputBox";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        email,
        password,
      });
      console.log(response.data);

      if (response) {
        router.push("/signin");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-5xl font-bold text-center mb-10">SignUp</h1>

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
        Sign Up
      </button>
    </form>
  );
}
