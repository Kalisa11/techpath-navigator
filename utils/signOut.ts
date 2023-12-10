import { supabaseClient } from "./supabase/supabaseClient";
import { toast } from "@/components/ui/use-toast";

export const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: error.message,
    });
    return;
  }
  window.location.reload();
};
