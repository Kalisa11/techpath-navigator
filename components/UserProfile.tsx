import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut } from "@/utils/signOut";
import { User } from "@supabase/supabase-js";
import { LogOut } from "lucide-react";

export function Profile({ user }: { user: User }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <img
          src={
            user?.user_metadata.avatar_url ||
            "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
          }
          alt="profile"
          className="rounded-full cursor-pointer hover:scale-105 w-10 h-10"
        />
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <div className="flex flex-col items-center gap-1">
          <div className="text-sm">{user.user_metadata.full_name}</div>
          <div className="text-xs text-gray-500">{user.email}</div>
          <Button
            variant="outline"
            size={"sm"}
            className="text-xs mt-2"
            onClick={signOut}
          >
            <LogOut size={15} className="text-gray-700 mr-1" />
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
