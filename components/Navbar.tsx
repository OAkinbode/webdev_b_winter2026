"use client";
import { useAuth } from "./AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "@/util/firebase";

export default function Navbar() {
  const { user } = useAuth();

  const handleLogout = async (): Promise<void> => {
    await signOut(auth);
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      {user ? (
        <>
          <span>Welcome, {user.displayName || user.email}</span>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
}
