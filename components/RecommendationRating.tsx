import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "./ui/textarea";

export default function RecommendationRating() {
  const radioItems = Array.from({ length: 10 }, (_, index) => {
    const radioId = `r${index + 1}`;
    return (
      <div key={radioId} className="flex flex-col gap-2 text-center">
        <RadioGroupItem value={`rating-${index + 1}`} id={radioId} />
        <Label htmlFor={radioId}>{index + 1}</Label>
      </div>
    );
  });

  return (
    <RadioGroup defaultValue="rating-5">
      <div className="flex justify-between space-x-2">{radioItems}</div>
      <div className="flex justify-between">
        <Label className="text-gray-700" htmlFor="r1">
          Not likely
        </Label>
        <Label className="text-gray-700" htmlFor="r10">
          Very likely
        </Label>
      </div>
      <div className="flex flex-col gap-3 pt-4">
        <div className="text-sm text">Why do you feel that way? (Optional)</div>
        <Textarea />
      </div>
    </RadioGroup>
  );
}
