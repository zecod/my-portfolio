import { CopyIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export function ShareMail() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const time = setTimeout(() => setIsCopied(false), 1000);
      return () => clearTimeout(time);
    }
  }, [isCopied]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded-xl flex items-center gap-2 my-4"
          variant={"default"}
          size={"lg"}
        >
          Email Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Email</DialogTitle>
          <DialogDescription>
            This is my workspace email. Use it to reach me.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              defaultValue="yassineamine788@gmail.com"
              readOnly
            />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={() => {
              navigator.clipboard
                .writeText("yassineamine788@gmail.com")
                .then(() => {
                  setIsCopied(true);
                })
                .catch((error) => {
                  console.error("Failed to copy email address:", error);
                });
            }}
          >
            <span className="sr-only">Copy</span>
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
