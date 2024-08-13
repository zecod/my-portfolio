import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "./Card";

export function PayCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"} className="text-sm h-10 px-5">
          Buy now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Card />
      </DialogContent>
    </Dialog>
  );
}
