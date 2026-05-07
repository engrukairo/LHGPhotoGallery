"use client";

import { useAuthStore } from "@/store/auth-store";

export default function LoginToggle() {
  const { isLoggedIn, toggleLogin } = useAuthStore();

  return (
    <button
      onClick={toggleLogin}
      className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 cursor-pointer"
    >
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}
