import { BsBank } from "react-icons/bs";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FiCopy } from "react-icons/fi";

export const D3 = () => {
  const { toast } = useToast();

  function generateRandomSixDigitNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  const handleSonner = () => {
    const randomSixDigitNumber = generateRandomSixDigitNumber();

    const copyToClipboard = () => {
      navigator.clipboard
        .writeText(randomSixDigitNumber.toString())
        .then(() => {
          toast({
            title: "Copied to clipboard",
            description: `OTP code ${randomSixDigitNumber} has been copied to your clipboard.`,
          });
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    };

    toast({
      title: `Your OTP Code: ${randomSixDigitNumber}`,
      description: "Here is your Stripe OTP code. Do not share it with anyone.",
      action: (
        <Button variant={"ghost"} size={"sm"} onClick={copyToClipboard}>
          <FiCopy className="w-4 h-4" />
        </Button>
      ),
    });
  };

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <BsBank size={30} />
        <img
          src="https://www.mastercard.it/content/dam/public/mastercardcom/it/it/icons/mc-logo-52.svg"
          alt="mastercard"
          className="w-[40px]"
        />
      </div>

      <div className="mt-10 space-y-2">
        <h2 className="text-xl text-black dark:text-white">
          Purchase Authentication
        </h2>
        <p className="text-md text-zinc-500">
          We've sent you a text messgae to your registred mobile number ending
          in 2329
        </p>
      </div>

      <div className="mt-8 space-y-2 ">
        <Label htmlFor="email" className="text-md text-zinc-500">
          Confirmation code
        </Label>
        <Input type="email" id="email" className="h-10" />
      </div>

      <div className="mt-10 space-y-2 flex flex-col">
        <Button variant={"default"} size={"lg"} className="h-10 text-md">
          Confirm payment
        </Button>
        <Button variant={"ghost"} className="h-10" onClick={handleSonner}>
          Resend code
        </Button>
      </div>
    </div>
  );
};
