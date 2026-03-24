"use client";

import Image from "next/image";
import Header from "../components/header";
import { returnUserDetails } from "@/util/simulate_api";
import DisplayUserDetails from "@/components/displayUserDetails";
import { useUserStore } from "@/util/store";
import Teddysearch from "@/components/teddy_search";
import { useAuth } from "@/components/AuthProvider";
import { readAllData } from "@/util/firebase_crud";
import PostItem from "@/components/createItem";
import SupabaseCrud from "@/components/supabase_crud";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const user = useUserStore((state) => state.user);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [teddies, setTeddies] = useState<any[]>([]);

  async function fetchTeddies() {
    try {
      const teddies = await readAllData("teddies");
      // console.log("Fetched teddies:", teddies);
      setTeddies(teddies);
    } catch (error) {
      console.error("Error fetching teddies:", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await fetchTeddies();
    }
    fetchData();
  }, []);

  const capitalizer = (str: string) => {
    return str.toUpperCase();
  };

  return (
    <div className="flex min-h-screen items-center justify-start flex-col bg-gray-50 font-sans dark:bg-black w-full">
      <Header />
      <div className=" w-full p-2 px-4">
        <DisplayUserDetails
          name={user.length > 0 ? user : "Guest"}
          // name={"Guest"}
          appelation="Mr."
          capitalizer={capitalizer}
        />
      </div>

      <div className="py-12 bg-gray-100 flex flex-row items-center justify-center w-full gap-2">
        <Image
          className="dark:invert rounded-2xl shadow-lg border border-red-500"
          src="/teddy_bear.jpg"
          alt="Next.js logo"
          width={200}
          height={200}
          priority
        />
        <div className="text-2xl mt-4 text-black">
          View our bears:
          {teddies.length > 0 ? (
            <ul className="list-disc list-inside">
              {teddies.map((teddy) => (
                <li key={teddy.id} className="text-black text-sm">
                  {teddy.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No teddies available.</p>
          )}
        </div>
        {/* <Teddysearch /> */}
      </div>
      <div className="italic text-blue-500 text-3xl">
        <nav>
          <Link href="/newteddy">create a new teddy bear</Link>
        </nav>
      </div>
      <PostItem />
      <SupabaseCrud />
    </div>
  );
}
