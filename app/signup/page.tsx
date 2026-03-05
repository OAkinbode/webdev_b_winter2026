import SignUpForm from "@/components/SignupForm";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <SignUpForm />
      <p className="mt-4 text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 hover:underline font-medium"
        >
          Log In
        </Link>
      </p>
    </main>
  );
}
