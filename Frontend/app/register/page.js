"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "../../lib/api";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await apiRequest("/auth/register", "POST", { email, password });
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center flex-col px-6 m-2">
      <h2 className=" text-4xl text-black m-3">Register</h2>
      <input className=" bg-gray-200 m-2 h-8 w-60 border rounded-full text-1xl placeholder-black focus:outline-0 text-left p-1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className=" bg-gray-200 m-2 h-8 w-60 border rounded-full text-1xl placeholder-black focus:outline-0 text-left p-1"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="rounded-full border-2 m-2 text-[20px] w-30 bg-blue-700 text-white cursor-pointer" onClick={handleRegister}>Register</button>
    </div>
  );
}