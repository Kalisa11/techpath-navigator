"use client";

import {
  Compass,
  Computer,
  HelpCircle,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { supabaseClient } from "@/utils/supabase/supabaseClient";

const Sidebar = () => {
  const signOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
      return;
    }
    window.location.reload();
  };
  return (
    <div className="w-1/6 font-semibold border-r-2 text-slate-600 text-sm bg-white h-screen p-4 sticky left-0 inset-y-0">
      <div className="flex justify-center gap-3 pt-2">
        <Link href="/" className="cursor-pointer">
          <div className="text-primary font-bold text-xl">TechPath Nav</div>
        </Link>
        <Computer className="text-primary" />
      </div>
      <Separator orientation="horizontal" className="my-3 bg-gray-200" />
      <div className="space-y-2 flex flex-col items-center justify-center relative">
        <div className="flex items-center gap-4 rounded-md hover:bg-primary hover:text-white py-3 px-4 cursor-pointer w-full">
          <Compass />
          Browse
        </div>
        <div className="flex items-center gap-4 rounded-md hover:bg-primary hover:text-white py-3 px-4 cursor-pointer w-full">
          <LayoutDashboard />
          Dashboard
        </div>
      </div>
      {/* bottom div */}
      <div className="absolute flex flex-col items-center justify-center bottom-1 space-y-2">
        <div className="flex items-center gap-4 rounded-md hover:bg-primary hover:text-white py-3 px-4 cursor-pointer w-full">
          <HelpCircle />
          Help
        </div>
        <button
          onClick={signOut}
          className="flex items-center gap-4 rounded-md hover:bg-primary hover:text-white py-3 px-4 cursor-pointer w-full "
        >
          <LogOut />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
