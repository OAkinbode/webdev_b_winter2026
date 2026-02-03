"use client";

import { useState } from "react";

type TeddySearchParams = {
  height: number;
  color: string;
};

export default function Teddysearch() {
  const [searchparams, setsearchParams] = useState<TeddySearchParams>({
    height: 0,
    color: "",
  });
  const [teddyavailable, setTeddyAvailability] = useState<boolean>(false);

  const changeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setsearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    setTeddyAvailability(true);
  };

  return (
    <div className="flex flex-col gap-2">
      <p>Choose from one of our many wonderful bears</p>
      <form className="flex flex-col gap-2" onSubmit={submitForm}>
        <label>Enter height in inches</label>
        <input
          type="text"
          name="height"
          value={searchparams.height}
          onChange={changeValues}
          className="border border-b-cyan-800"
        />
        <label>Enter color</label>
        <input
          type="text"
          name="color"
          value={searchparams.color}
          onChange={changeValues}
          className="border border-b-cyan-800"
        />
        <button type="submit">Search</button>
      </form>
      <div className="text-2xl text-red-700">
        {/* {teddyavailable
          ? `Form is submitted: We have a ${searchparams.color} Teddy bear of ${searchparams.height} inches height`
          : ""} */}
        {teddyavailable &&
          `Form is submitted: We have a ${searchparams.color} Teddy bear of ${searchparams.height} inches height`}
      </div>
    </div>
  );
}
