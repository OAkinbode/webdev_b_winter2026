"use client";
import { GoogleAuthProvider, signInWithPopup, AuthError } from "firebase/auth";
import { auth } from "@/util/firebase";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/util/store";
import LoginForm from "@/components/email_login";

export default function LoginPage() {
  const router = useRouter();
  // const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const handleGoogleLogin = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user.displayName || result.user.email || "Unknown User");
      router.push("/");
    } catch (error) {
      const authError = error as AuthError;
      console.error("Login Error:", authError.message);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <LoginForm />
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </main>
  );
}
