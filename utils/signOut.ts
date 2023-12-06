import { supabaseClient } from "./supabase/supabaseClient";

export const signOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
      return;
    }
    window.location.reload();
  };