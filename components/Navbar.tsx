// import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { getGreeting } from "@/lib/utils";
import AuthButton from "./AuthButton";
import MyComponent from "./Search";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-10 top-0 flex items-center justify-between px-8 h-[70px] border-b-2">
      <div className="hidden md:flex flex-col">
        <div className="text-xs text-slate-500">{getGreeting()}</div>
        <div className="text-base font-semibold text-slate-600">
          Welcome Back!
        </div>
      </div>
      {/* <div className="min-w-[500px] relative">
        <Input
        type="text"
        placeholder="Search"
        className="rounded-lg focus:outline-none text-center w-full bg-slate-100"
        />
      </div> */}
      <MyComponent />
      <div className="flex items-center gap-4">
        <AuthButton />
      </div>
    </div>
  );
};

export default Navbar;
