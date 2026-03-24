import { NextResponse } from "next/server";
import { db } from "@/util/firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const body = await request.json();
  // doc() points to a specific document in a collection
  const itemRef = doc(db, "items", id);

  await updateDoc(itemRef, body);
  return NextResponse.json({ success: true });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const itemRef = doc(db, "items", id);

  await deleteDoc(itemRef);
  return NextResponse.json({ message: "Deleted" });
}
