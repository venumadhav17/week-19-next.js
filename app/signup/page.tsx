"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='border p-2'>
        <input
          className='bg-white border border-black text-black'
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='bg-white border border-black text-black'
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={async () => {
            await axios.post("http://localhost:3001/api/v1/signup", {
              username,
              password
            });
            router.push("/signin");
          }}
          className='bg-blue-500 px-2 ml-2'
          type='button'
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
