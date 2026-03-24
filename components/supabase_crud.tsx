"use client";
import { useState, useEffect, use } from "react";
import { supabase } from "@/util/supabase";

const SupabaseCrud = () => {
  const getTeddy = async () => {
    try {
      const { data, error } = await supabase
        .from("teddies-table")
        .select(`name, id, quantity, customer (visitor_name)`);
      if (error) {
        console.error("Error fetching teddies:", error);
      } else {
        console.log("Fetched teddies:", data);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    getTeddy();
  }, []);

  return (
    <div>
      <h1>Supabase CRUD Operations</h1>
      {/* Implement your CRUD operations here */}
    </div>
  );
};

export default SupabaseCrud;
