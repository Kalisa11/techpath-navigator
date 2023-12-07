"use client";

import { useEffect } from "react";
import { LoginDialog } from "@/components/LoginDialog";
import { loggedInUser } from "@/utils/currentUser";
import { User } from "@supabase/supabase-js";
import useUserStore from "@/store/user";
import { Profile } from "./UserProfile";

export default function AuthButton() {
  const { setUser, user } = useUserStore();

  useEffect(() => {
    async function getUser() {
      const user = await loggedInUser();
      setUser(user as User);
    }
    getUser();
  }, [setUser]);

return (
    <div>
      {user ? <Profile user={user} /> : <LoginDialog />}
    </div>
  );}
