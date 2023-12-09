import { useCareerStore, useLoadingCareerStore } from "@/store/careers";
// import { supabaseClient } from "./supabase/supabaseClient";

export default function useFetchCareers() {
  const { setCareers } = useCareerStore();
  const { setLoading } = useLoadingCareerStore();

  const fetchCareers = async (skills: string[]) => {
    console.log({ skills });
    try {
      setLoading(true);
      const response = await fetch("/api/fetchCareers", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          skill_ids: skills,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("data uyttyui", data);
    } catch (error) {
      console.log("error in hook", error);
    } finally {
      setLoading(false);
    }
    // setCareers(data);
  };
  return { fetchCareers };
}
