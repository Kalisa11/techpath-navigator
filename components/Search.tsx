"use client";

import { useSelectSkillStore } from "@/store/selectedSkills";
import { Skills } from "@/utils/types";
import useFetchCareers from "@/utils/useFetchCareers";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ReactSelect from "react-select";

const MyComponent = () => {
  const [skills, setSkills] = useState<Skills>();
  const [loading, setLoading] = useState(false);
  const { selectedSkills, setSelectedSkills } = useSelectSkillStore();
  const { fetchCareers } = useFetchCareers();

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/skills", {
        cache: "no-store",
      });
      const skills = await response.json();
      setSkills(skills);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="relative">
      <ReactSelect
        onChange={(selectedOptions) => {
          const selectedValues = selectedOptions.map((option) => option.value);
          setSelectedSkills(selectedValues);
        }}
        isMulti
        placeholder="Search for skills"
        options={skills?.map((option) => ({
          label: option.name,
          value: option.id,
        }))}
        isOptionDisabled={() => loading || selectedSkills.length >= 2}
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        }}
        classNames={{
          control: () => "text-sm min-w-[400px]",
        }}
      />
      <button
        onClick={async () => await fetchCareers(selectedSkills)}
        className="p-1 absolute right-1 top-1 rounded-md cursor-pointer bg-white hover:bg-gray-100"
      >
        <FiSearch size={20} className=" text-slate-500" />
      </button>
    </div>
  );
};

export default MyComponent;
