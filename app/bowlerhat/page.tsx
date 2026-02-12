"use client";
import { use, useState } from "react";
import NicePictures from "@/components/nice_pictures";
import Link from "next/link";
import { returnUserName } from "@/util/simulate_api";
import { useUserStore } from "@/util/store";
import TeddyDisplay from "@/components/teddy_display";
import TeddyForm from "@/components/teddy_form";

export default function BowlerhatPage() {
  const [teddies, setTeddies] = useState<string[]>([]);
  const [teddy, setTeddy] = useState<string>("");

  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex items-center justify-center w-full flex-col">
      <p className="text-2xl">Bowlerhat Teddy Bears</p>
      <div className="w-full p-2 flex flex-col sm:flex-row gap-2">
        <div className="flex items-center justify-center sm:justify-start w-1/2 sm:w-auto">
          <NicePictures />
        </div>

        <div className="border border-blue-700 rounded-lg flex grow p-2 flex-col">
          <p className="">Welcome {returnUserName()}</p>
          <TeddyDisplay teddies={teddies} />
          {/* <div className="text-green">{joinNames(teddies)}</div> */}
          <div>
            <TeddyForm
              teddies={teddies}
              teddy={teddy}
              setTeddy={setTeddy}
              setTeddies={setTeddies}
              setUser={setUser}
            />
          </div>
        </div>
      </div>
      <div>{user}</div>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}
