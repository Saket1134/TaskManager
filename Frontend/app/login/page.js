"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login response:", data); // For debugging

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // IMPORTANT: backend returns access_token
      localStorage.setItem("token", data.access_token);

      router.push("/dashboard");

    } catch (err) {
      setError("Something went wrong");
      console.error(err);
    }
  };


  return (
    <div className="flex justify-center items-center flex-col px-6 m-2">
      <h2 className=" text-4xl text-black m-3">Login</h2>
      <input className=" bg-gray-200 m-2 h-8 w-60 border rounded-full text-1xl placeholder-black focus:outline-0 text-left p-1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className=" bg-gray-200 m-2 h-8 w-60 border rounded-full text-1xl placeholder-black focus:outline-0 text-left p-1"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="rounded-full border-2 m-2 text-[20px] w-30 bg-green-700 text-white cursor-pointer" onClick={handleLogin}>Login</button>
    </div>
  );
}