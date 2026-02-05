"use client";
import { useState } from "react";
import NicePictures from "@/components/nice_pictures";
import Link from "next/link";
import { returnUserName } from "@/util/simulate_api";
import { nameList } from "@/util/test_functions";
export default function BowlerhatPage() {
  const [teddies, setTeddies] = useState<string[]>([]);
  const [teddy, setTeddy] = useState<string>("");

  const addNames = (e: React.FormEvent) => {
    e.preventDefault();
    setTeddies([...teddies, teddy]);
    setTeddy("");
  };

  const changeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeddy(e.target.value);
  };

  const mapOverNames = (array: string[]) => {
    const newArray: string[] = array.map((name) => name.toUpperCase());
    return newArray;
  };

  const curateNames = (array: string[]) => {
    const newArray: string[] = array.filter((name) => name.length > 10);
    return newArray;
  };

  const joinNames = (array: string[]) => {
    const newString: string = array.join(" - ");
    return newString;
  };

  const announceName = (name: string) => {
    alert(`Welcome ${name.toLowerCase()}`);
  };

  return (
    <div className="flex items-center justify-center w-full flex-col">
      <p className="text-2xl">Bowlerhat Teddy Bears</p>
      <div className="w-full p-2 flex flex-col sm:flex-row gap-2">
        <div className="flex items-center justify-center sm:justify-start w-1/2 sm:w-auto">
          <NicePictures />
        </div>

        <div className="border border-blue-700 rounded-lg flex grow p-2 flex-col">
          <p className="">Welcome {returnUserName()}</p>
          <div>
            {mapOverNames(teddies).map((name, i) => (
              <p key={i} onClick={() => announceName(name)}>
                {name}
              </p>
            ))}
          </div>
          {/* <div className="text-green">{joinNames(teddies)}</div> */}
          <div>
            <form className="flex flex-col gap-2" onSubmit={addNames}>
              {/* <label>Add a teddy bear name</label> */}
              <input
                type="text"
                name="Teddy name"
                value={teddy}
                onChange={changeValues}
                className="border border-b-cyan-800"
              />

              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}
