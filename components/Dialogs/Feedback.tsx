import { Button } from "@/components/ui/button";
import { VscFeedback } from "react-icons/vsc";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RecommendationRating from "@/components/RecommendationRating";
import { DialogClose } from "@radix-ui/react-dialog";

export function Feedback() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 rounded-md hover:bg-gray-100 py-3 px-4 cursor-pointer w-full">
          <VscFeedback className="text-gray-800" size={18} />
          Feedback
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rate your experience</DialogTitle>
          <DialogDescription>
            Please take a moment to share your feedback with us.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <div className="text-sm text-gray-800">
            How likely are you to recommend TechPath Nav to your
            friends/colleagues?
          </div>
          <RecommendationRating />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" size={"sm"} variant={"outline"}>
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
