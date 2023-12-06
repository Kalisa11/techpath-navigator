import supabase from "@/utils/supabase/supabaseClient";

const SkillCards = async () => {
  const { data, error } = await supabase.from("skills").select("*");
  return (
    <div className="px-8 py-2 flex items-center gap-2">
      <div className="rounded-md px-4 py-2 border text-sm cursor-pointer bg-white hover:bg-gray-100">
        All
      </div>
      {data?.slice(0, 5).map((skill) => (
        <div
          key={skill.id}
          className="rounded-md px-4 py-2 border text-sm cursor-pointer bg-white hover:bg-gray-100"
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
