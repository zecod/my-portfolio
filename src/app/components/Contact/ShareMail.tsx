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
import { Check, Mail } from "lucide-react";

export function ShareMail() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsCopied(false), 1000);
  }, [isCopied]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-[140px] h-[50px] rounded-xl text-md flex items-center gap-2"
          variant={"outline"}
        >
          <Mail className="w-6 h-6"/>
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
            <Input id="email" defaultValue="yassine@verceli.dev" readOnly />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={() => {
              navigator.clipboard
                .writeText("yassine@verceli.dev")
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
