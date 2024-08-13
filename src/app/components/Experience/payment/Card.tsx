import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { D3 } from "./3d";
import { lineSpinner } from "ldrs";
import Shoes from "../../../../assets/shoes-1.webp";

lineSpinner.register();

const Loading = () => {
  return (
    <div className="h-[350px] flex justify-center items-center">
      <l-line-spinner
        size="40"
        stroke="3"
        speed="1"
        color="gray"
      ></l-line-spinner>
    </div>
  );
};

export const Card = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowAuth(true);
    }, 2000);
  };

  return (
    <div className="stripe-font space-y-8">
      {isLoading ? (
        <Loading />
      ) : showAuth ? (
        <div className="duration-500 animate-fade-in">
          <D3 />
        </div>
      ) : (
        <div className="duration-500  animate-fade-in space-y-5">
          <div className="flex justify-center">
            <img src={Shoes} className="object-contain" />
          </div>
          <div className="text-zinc-500">
            <Label htmlFor="email" className="text-zinc-500">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={"mario.rossi@example.it"}
              readOnly
              className="rounded-xl h-10 outline-none"
            />
          </div>

          <div className="text-zinc-500">
            <Label htmlFor="email" className="text-zinc-500">
              Spedisci a
            </Label>
            <div className="border p-3 rounded-xl flex justify-between items-center">
              <div>
                <h3>Mario Rossi</h3>
                <p className="text-xs">Via tonale, 22</p>
                <p className="text-xs">Milano 20125</p>
              </div>
              <a className="text-blue-500 text-xs cursor-pointer">Cambia</a>
            </div>
          </div>
          <div className="text-zinc-500">
            <Label htmlFor="email" className="text-zinc-500">
              Pay with
            </Label>
            <div className="border p-3 rounded-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {" "}
                <img
                  src="https://static.bolt.eu/payment/icons/mastercard.png"
                  alt="mastercard logo"
                  className="w-10"
                />
                <div className="space-x-1 text-zinc-500">
                  <span>••••</span>
                  <span>4342</span>
                </div>
              </div>
              <a className="text-blue-500 text-xs cursor-pointer">Cambia</a>
            </div>
          </div>

          <Button className="w-full h-10 text-md" onClick={handlePayment}>
            Pay $279.97
          </Button>
        </div>
      )}
    </div>
  );
};
