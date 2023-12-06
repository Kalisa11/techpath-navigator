"use client";

import { useEffect } from "react";
import { LoginDialog } from "@/components/LoginDialog";
import { loggedInUser } from "@/utils/currentUser";
import { User } from "@supabase/supabase-js";
import useUserStore from "@/store/user";

export default function AuthButton() {
  const { setUser, user } = useUserStore();

  useEffect(() => {
    async function getUser() {
      const user = await loggedInUser();
      setUser(user as User);
    }
    getUser();
  }, [setUser]);
  console.log({ user });

  return user ? (
    <div className="flex items-center gap-4 text-sm">
      <img
        src={
          user?.user_metadata.avatar_url ||
          "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
        }
        alt="profile"
        className="rounded-full w-10 h-10"
      />
    </div>
  ) : (
    <LoginDialog />
  );
}
