"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function TestApiCall() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [apiData, setApiData] = useState<any>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) {
      console.log("Input value changed:", inputValue);
    }
  }, [inputValue]);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const callApi = async () => {
    try {
      const response = await fetch(
        `https://openlibrary.org/api/books?bibkeys=${inputValue},LCCN:93005405&format=json`,
      );
      const data = await response.json();
      setApiData(data);
      //   console.log("API Response:", data);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter ISBN"
        className="border border-amber-800 rounded-md p-2"
        value={inputValue}
        onChange={onChangeText}
      />
      {apiData && (
        <div>
          <Image
            src={apiData["ISBN:0201558025"]?.thumbnail_url}
            alt="Thumbnail"
            width={100}
            height={100}
          />{" "}
        </div>
      )}
      <button onClick={callApi}>Call Test API</button>
    </div>
  );
}
