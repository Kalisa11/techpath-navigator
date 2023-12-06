import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { getGreeting } from "@/lib/utils";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-10 top-0 flex items-center justify-between px-8 h-[70px] border-b-2">
      <div className="flex flex-col">
        <div className="text-xs text-slate-500">{getGreeting()}</div>
        <div className="text-base font-semibold text-slate-600">
          Welcome Back!
        </div>
      </div>
      <div className="min-w-[500px] relative">
        <FiSearch size={20} className="absolute inset-2 text-slate-500" />
        <Input
          type="text"
          placeholder="Search for tech skills/interests"
          className="rounded-lg focus:outline-none text-center w-full bg-slate-100"
        />
      </div>
      <div className="flex items-center gap-4">
       <AuthButton />
      </div>
    </div>
  );
};

export default Navbar;
