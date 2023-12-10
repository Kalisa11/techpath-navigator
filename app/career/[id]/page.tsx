import EmbedYT from "@/components/EmbedYT";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { supabaseClient } from "@/utils/supabase/supabaseClient";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const CareerPage = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await supabaseClient
    .from("careers")
    .select(`*, career_skills(skill_id)`)
    .eq("id", params.id);

  const careerData: any = data ? data[0] : null;
  const { data: career_skills } = await supabaseClient
    .from("skills")
    .select("name")
    .in(
      "id",
      careerData?.career_skills.map((skill: any) => skill.skill_id)
    );
  function extractJobTitles(job_title: string) {
    const jobTitles = job_title.split(",");
    return jobTitles;
  }

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <div className="bg-slate-100 min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-5/6">
        <Navbar />
        <div className="p-8 flex items-start justify-between gap-6">
          {/* left side */}
          <div className="flex flex-col items-start gap-4">
            {/* <Button variant={"outline"} size={"sm"}>
              <Link href="/" className="flex items-center gap-2">
                <FaArrowLeftLong />
                Back
              </Link>
            </Button> */}
            <img
              src={careerData?.image}
              alt="career img"
              className="rounded-md h-[250px] w-[576px] object-cover hover:scale-105 duration-300 cursor-pointer"
            />
            <div className="text-sm p-4 max-w-xl rounded-md border border-gray-300 shadow-md space-y-4">
              <div className="text-xl font-semibold">{careerData?.name}</div>
              <div className="text-sm">{careerData?.description}</div>
              <div className="text-sm flex items-center gap-2">
                <div className="font-semibold pr-2">Job Titles</div>
                {extractJobTitles(careerData?.job_title).map((title, index) => (
                  <div
                    key={index}
                    className="rounded-md border px-2 py-1 bg-white"
                  >
                    {title}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="font-semibold pr-2">Skills required</div>
                {career_skills?.slice(0, 3).map((skill, index) => (
                  <div
                    key={index}
                    className="rounded-md text-center border px-2 py-1 bg-white whitespace-nowrap"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="font-semibold pr-2">Demand</div>
                <div className="flex items-center">
                  {renderStars(careerData.demand)}
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-col items-start gap-4">
            <div className="border rounded-md p-6 text-secondary bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-900 via-sky-950 to-gray-900">
              <div className="mb-7">
                <h4 className="font-semibold text-xl mb-4 text-white">
                  Ready to kickstart your career?
                </h4>
                <p className="text-sm text-neutral-200 max-w-sm">
                  We have collected some free resources to get you started on
                  this career path.
                </p>
              </div>
              <Button
                className="flex items-center justify-center"
                variant={"outline"}
                type="button"
              >
                Mark as Favorite
              </Button>
            </div>
            {/* resources links */}
            <div className="flex flex-col items-center gap-3">
              {careerData?.resources &&
                careerData.resources.map((resource: string, index: number) => (
                  <EmbedYT key={index} link={resource} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
