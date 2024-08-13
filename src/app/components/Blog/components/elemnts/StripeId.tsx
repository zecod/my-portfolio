import { Button } from "@/components/ui/button";
import { BsStripe } from "react-icons/bs";
import { SepaIcon } from "./StripeModal";

const StripeIdCard = () => {
  return (
    <div className="rounded-xl">
      <div className="flex items-center justify-between gap-5">
        <div className="flex gap-5 items-center w-full">
          <div className="h-[5px] bg-[#665CFF] rounded-full flex-1"></div>
          <div className="w-[120px] h-[5px] bg-[#665CFF] rounded-full  flex-1"></div>
          <div className="w-[120px] h-[5px] bg-gray-300 rounded-full dark:bg-zinc-700 flex-1"></div>
          <div className="w-[120px] h-[5px] bg-gray-300 dark:bg-zinc-700 rounded-full flex-1"></div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5 my-5">
          <SepaIcon size={30} />
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gray-200 rounded-full"></div>{" "}
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>{" "}
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
          <BsStripe
            size={30}
            className="text-[#665CFF] dark:bg-white rounded"
          />
        </div>
        <h2 className="text-xl font-extrabold">Enable SEPA Direct Debit</h2>
        <p className="text-muted-foreground sans-serif">
          Verification Required
        </p>
      </div>
      <div className="mt-5">
        <p className="font-light text-md">
          To use SEPA Direct Debit you will need to complete additional identity
          verification steps, which include presenting an ID document and a
          selfie. You will be prompted to complete this in the next step if you
          have not done so already. For more information on how Stripe Identity
          works please review the{" "}
          <span className="font-bold text-[#665CFF]">FAQ page</span>. If you
          require further assistance, please{" "}
          <span className="font-bold text-[#665CFF]">contact support</span>.
        </p>
      </div>
      <div className="w-full flex items-center mt-12 gap-5">
        <Button
          variant={"outline"}
          className="flex-1 font-semibold"
          size={"lg"}
        >
          Back
        </Button>
        <Button
          variant={"default"}
          className="bg-[#665CFF] flex-1 hover:bg-[#665CFF] dark:text-white font-semibold"
          size={"lg"}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StripeIdCard;
