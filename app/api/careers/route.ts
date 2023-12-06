import { NextResponse } from "next/server";

import supabase from "@/utils/supabase/supabaseClient";

const getCareers = async () => {
  const { data, error } = await supabase
    .from("careers")
    .select("*")
    .order("name", { ascending: true });
  if (error) {
    console.log("error", error);
  }
  return data;
};
export async function GET(request: Request) {
  const resData = await getCareers();
  return NextResponse.json(resData);
}
