import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { tailspin } from "ldrs";

import { useToast } from "@/components/ui/use-toast";
import { AlertDestructive } from "./Alert";

import { DialogClose } from "@radix-ui/react-dialog";
import { MessageCircle } from "lucide-react";

tailspin.register();

export const DialogContact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { toast } = useToast();
  useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [isOpen]);
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError(false);
      if (
        !nameRef.current?.value.trim() ||
        !emailRef.current?.value.trim() ||
        !msgRef.current?.value.trim()
      ) {
        throw new Error("Please provide all required fields");
      }

      const URL = "http://localhost:3000/api/contact";
      const req = await fetch(URL, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          message: msgRef.current?.value,
        }),
      });

      const res = await req.json();
      if (!res.success) {
        throw new Error(res.msg);
      }

      setIsOpen(false);
      toast({
        title: "Your message has been sent successfully!",
        description:
          "We will reply to you as soon as possible within 24 hours.",
      });
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-[140px] h-[50px] rounded-xl text-md flex items-center gap-2"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="w-6 h-6" />
          Chat Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Start a Chat</DialogTitle>
          <DialogDescription>
            Drop me a message below, and let's start our conversation.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full space-y-5">
          {error && <AlertDestructive />}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="email" id="name" placeholder="Name" ref={nameRef} />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" ref={emailRef} />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message-2">Your Message</Label>
            <Textarea
              placeholder="Type your message here."
              id="message-2"
              ref={msgRef}
            />
          </div>
        </div>
        <DialogFooter className="mt-5">
          <DialogClose asChild>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleSubmit}>
            {isLoading ? (
              <l-tailspin
                size="20"
                stroke="3"
                speed="0.9"
                color="white"
              ></l-tailspin>
            ) : (
              "Submit"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
