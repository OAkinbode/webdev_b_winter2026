"use client";

import { useState } from "react";
import { uploadPhoto } from "@/util/supabase_storage";
import { createData } from "@/util/firebase_crud"; // From your previous step

export default function AddTeddy() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    // 1. Upload to Supabase Storage
    const storageResult = await uploadPhoto("teddies-bucket", file);

    if (storageResult.success) {
      // 2. Save the resulting URL to your Firestore "teddies" collection
      await createData("teddies", {
        name: "New Teddy",
        imageUrl: storageResult.url,
        createdAt: new Date(),
      });
      alert("Teddy added with photo!");
    }

    setUploading(false);
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button
        onClick={handleUpload}
        disabled={uploading || !file}
        className="bg-green-600 text-white px-4 py-2 rounded mt-2"
      >
        {uploading ? "Uploading..." : "Upload & Save to Firestore"}
      </button>
    </div>
  );
}
