import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const CareerPage = async () => {
  return (
    <div className="bg-slate-100 min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-5/6">
        <Navbar />
        
      </div>
    </div>
  );
};

export default CareerPage;
