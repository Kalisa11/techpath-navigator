import { toast } from "@/components/ui/use-toast";
import { useCareerStore, useLoadingCareerStore } from "@/store/careers";

export default function useFetchCareers() {
  const { setCareers } = useCareerStore();
  const { setLoading } = useLoadingCareerStore();

  const fetchCareers = async (skills: string[]) => {
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
      setCareers(data);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  async function fetchAllCareers() {
    try {
      setLoading(true);
      const response = await fetch("/api/careers");
      const careersData = await response.json();
      setCareers(careersData);
    } catch (error: any) {
      console.error("Error fetching careers:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  }
  return { fetchCareers, fetchAllCareers };
}
