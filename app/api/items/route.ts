import { NextResponse } from "next/server";
import { db } from "@/util/firebase";
// CHANGE: Import from 'firebase/firestore', NOT 'firebase/database'
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function GET() {
  const querySnapshot = await getDocs(collection(db, "items"));
  const items = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  console.log("Received POST request to /api/items");
  const body = await request.json();
  // collection() is the Firestore equivalent of ref()
  console.log("Adding item to Firestore:", body);
  const docRef = await addDoc(collection(db, "items"), body);

  return NextResponse.json({ id: docRef.id }, { status: 201 });
}
