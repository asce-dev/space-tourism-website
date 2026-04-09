import { useState } from "react";
import { destinations, type Destination } from "../data/data";
import Button from "./ui/Button";

export default function Destination() {
  const [currentDestination, setCurrentDestination] = useState<Destination>(
    destinations[0],
  );

  return (
    <div className="flex flex-col w-full max-w-[1110px] gap-300 my-600 mx-auto h-full">
      <div className="flex gap-300">
        <div className="text-preset-5 text-white/25 uppercase font-bold">
          01
        </div>
        <div className="text-preset-5 uppercase">PICK YOUR DESTINATION</div>
      </div>
      <div className="flex w-full h-full gap-400">
        <div className="flex w-full h-full items-center justify-center">
          <img src={currentDestination.image} alt={currentDestination.name} />
        </div>
        <div className="flex w-full h-full items-center justify-center min-w-[445px]">
          <div className="flex flex-col w-full max-w-[445px] gap-500">
            <div className="flex text-preset-8 gap-400">
              {destinations.map((item) => (
                <Button
                  key={item.name}
                  variant="primary"
                  className={`
                    h-400 text-blue-300 hover:text-white 
                    ${
                      item.name === currentDestination.name
                        ? "!text-white !border-white/100"
                        : ""
                    }
                  `}
                  onClick={() => setCurrentDestination(item)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-200">
              <div className="text-preset-2 uppercase">
                {currentDestination.name}
              </div>
              <div className="text-preset-9 text-blue-300">
                {currentDestination.description}
              </div>
            </div>
            <hr className="border-white/25" />
            <div className="flex w-full gap-300 uppercase">
              <div className="flex flex-col gap-150 w-full">
                <div className="text-preset-7 text-blue-300">Avg. Distance</div>
                <div className="text-preset-6">
                  {currentDestination.distance}
                </div>
              </div>
              <div className="flex flex-col gap-150 w-full">
                <div className="text-preset-7 text-blue-300">
                  EST. Travel Time
                </div>
                <div className="text-preset-6">{currentDestination.travel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
