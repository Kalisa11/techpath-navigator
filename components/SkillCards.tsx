"use client";
import { toast } from "@/components/ui/use-toast";
import { Skills } from "@/utils/types";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import useFetchCareers from "@/utils/useFetchCareers";

const SkillCards = () => {
  const [data, setSkills] = useState<Skills>();
  const [loading, setLoading] = useState(false);
  const { fetchCareers, fetchAllCareers } = useFetchCareers();

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/skills", {
        cache: "no-store",
      });
      const skills = await response.json();
      setSkills(skills);
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

  useEffect(() => {
    fetchSkills();
  }, []);
  return (
    <div className="px-8 py-2 flex flex-wrap items-center gap-2">
      {!loading ? (
        <>
          <div
            className="rounded-md px-4 py-2 border text-sm cursor-pointer bg-white hover:bg-gray-100"
            onClick={fetchAllCareers}
          >
            All
          </div>
          {data?.slice(0, 5).map((skill) => (
            <div
              key={skill.id}
              onClick={async () => await fetchCareers([skill.id])}
              className="rounded-md px-4 py-2 border text-sm cursor-pointer bg-white hover:bg-gray-100 whitespace-nowrap"
            >
              {skill.name}
            </div>
          ))}
        </>
      ) : (
        Array.from({ length: 6 }, (_, index) => (
          <Skeleton key={index} className="h-8 w-28 rounded-md" />
        ))
      )}
    </div>
  );
};

export default SkillCards;
