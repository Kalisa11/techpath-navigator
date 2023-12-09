import { NextResponse } from "next/server";

import supabase, { supabaseClient } from "@/utils/supabase/supabaseClient";
import { UUID } from "crypto";

const getCareers = async (skills: UUID[]) => {
  const { data, error } = await supabaseClient.rpc("getCareersbBySkills", {
    skill_ids: skills,
  });
  console.log("api data", { data });
  if (error) {
    console.log("error", error);
    return error;
  }
  return data;
};

export async function POST(request: Request) {
  const { skill_ids } = await request.json();
  console.log({ skill_ids });
  const resData = await getCareers(skill_ids);
  return NextResponse.json(resData);
}
