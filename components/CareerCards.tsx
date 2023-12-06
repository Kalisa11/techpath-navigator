"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { FaStar } from "react-icons/fa";

const CareerCards = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCareers() {
      try {
        const response = await fetch("/api/careers", {
          cache: "no-store",
        });
        const careersData = await response.json();
        setCareers(careersData);
      } catch (error) {
        console.error("Error fetching careers:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCareers();
  }, []);

  const renderSkeleton = (count: number) => {
    const skeletons = Array.from({ length: count }, (_, index) => (
      <div key={index} className="flex flex-col items-start gap-4 p-4">
        <Skeleton className="h-[120px] w-[200px] rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>
    ));
    return skeletons;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  const renderCareer = (career: any) => (
    <Link
      key={career.id}
      href={`/career/${career.id}`}
      className="rounded-md hover:bg-white cursor-pointer hover:scale-105 duration-200 p-4"
    >
      <div className="flex flex-col mb-2 gap-2 items-start">
        <img
          src={career.image}
          alt="career image"
          width={400}
          height={400}
          className="rounded-md"
        />
        <div className="text-base text-left font-semibold hover:text-primary">
          {career.name}
        </div>
      </div>
      <div className="text-xs text-gray-400 pb-1">
        <span className="font-semibold text-gray-800">Job Titles</span>:
        {career.job_title}
      </div>
      <div className="text-xs text-gray-400 flex items-center gap-1">
        <span className="font-semibold text-gray-800">Demand</span>
        {renderStars(career.demand)}
      </div>
    </Link>
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 py-5">
      {loading
        ? renderSkeleton(Math.max(8, careers.length))
        : careers.map(renderCareer)}
    </div>
  );
};

export default CareerCards;
