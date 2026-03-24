"use client";

import Link from "next/link";

export default function BowlerhatPage() {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      Hello there from red bowlerhat page
      <Link href="/bowlerhat">Go Back Home</Link>
    </div>
  );
}
