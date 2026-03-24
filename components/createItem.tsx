"use client";

import { useState } from "react";

export default function PostItem() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    setLoading(true);

    try {
      const response = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(`Success! ID: ${result.id}`);
        setName(""); // Clear input
      } else {
        throw new Error("Failed to save item");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg max-w-sm">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-bold">
          Item Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter something..."
          className="border p-2 rounded text-black"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
        >
          {loading ? "Saving..." : "Add Item"}
        </button>
      </div>
    </form>
  );
}
