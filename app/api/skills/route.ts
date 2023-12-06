import { NextResponse } from "next/server";

import supabase from "@/utils/supabase/supabaseClient";

const getSkills = async () => {
  const { data, error } = await supabase.from("skills").select("*");
  if (error) {
    console.log("error", error);
  }
  return data;
};
export async function GET(request: Request) {
  const resData = await getSkills();
  return NextResponse.json(resData);
}
