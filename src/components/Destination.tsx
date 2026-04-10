import { useState } from "react";
import { destinations, type Destination } from "../data/data";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

export default function Destination() {
  const [currentDestination, setCurrentDestination] = useState<Destination>(
    destinations[0],
  );

  return (
    <div className="flex flex-1 flex-col p-300 w-full max-w-[1110px] gap-300 mx-auto md:p-500 lg:my-600 lg:p-0">
      <SectionHeader number={1} sectionTitle={"pick your destination"} />
      <div className="flex flex-col flex-1 w-full gap-400 lg:flex-row">
        <div className="flex flex-1 w-full items-center justify-center basis-0">
          <img
            src={currentDestination.image}
            alt={currentDestination.name}
            className="h-[150px] w-[150px] md:h-[300px] md:w-[300px] lg:h-[480px] lg:w-[480px]"
          />
        </div>
        <div className="flex flex-1 flex-col w-full items-center justify-center basis-0 md:min-w-[445px]">
          <div className="flex flex-col w-full md:max-w-[514px] lg:max-w-[445px] gap-300 lg:gap-500">
            <div className="flex justify-center text-preset-8 gap-400 lg:justify-start">
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
            <div className="flex flex-col text-center gap-200 lg:text-left">
              <div className="text-preset-2 uppercase md:text-preset-2-tablet">
                {currentDestination.name}
              </div>
              <div className="flex text-preset-9 text-blue-300 md:text-preset-9-tablet lg:text-preset-9-desktop">
                {currentDestination.description}
              </div>
            </div>
            <hr className="border-white/25" />
            <div className="flex flex-col w-full gap-300 uppercase text-center md:flex-row lg:text-left">
              <div className="flex flex-col gap-150 w-full">
                <div className="text-preset-7 text-preset-7-desktop text-blue-300">
                  Avg. Distance
                </div>
                <div className="text-preset-6 text-preset-6-desktop">
                  {currentDestination.distance}
                </div>
              </div>
              <div className="flex flex-col gap-150 w-full">
                <div className="text-preset-7 text-blue-300">
                  EST. Travel Time
                </div>
                <div className="text-preset-6 text-preset-6-desktop">
                  {currentDestination.travel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
