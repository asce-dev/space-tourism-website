import { useState } from "react";
import { technology, type TechnologyItem } from "../data/data";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

export default function Technology() {
  const [currentTechnologyItem, setCurrentTechnologyItem] =
    useState<TechnologyItem>(technology[0]);

  return (
    <div className="flex flex-1 flex-col p-300 pb-600 md:p-500 lg:py-0 lg:pl-800 lg:pr-0 lg:py-600">
      <div className="flex flex-1 flex-col w-full max-w-[1275px] gap-300 ml-600 ml-auto h-full">
        <SectionHeader number={3} sectionTitle={"space launch 101"} />
        <div className="flex flex-1 flex-col-reverse items-center justify-center h-full gap-400 md:gap-500 lg:flex-row">
          <div className="flex flex-1 basis-0 flex-col w-full gap-500 items-center lg:flex-row lg:gap-800 lg:min-w-[635px]">
            <div className="flex flex-row items-center justify-center gap-200 lg:gap-400 lg:flex-col">
              {technology.map((item, index) => (
                <Button
                  key={item.name}
                  variant="numberIndicator"
                  className={`
                  ${item.name === currentTechnologyItem.name ? "bg-white !text-blue-900" : ""}
                `}
                  onClick={() => setCurrentTechnologyItem(item)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-200 text-center lg:text-start lg:gap-300 max-w-[514px]">
              <div className="flex flex-col uppercase gap-200">
                <div className="text-preset-4 uppercase text-white/50 uppercase md:text-preset-4-tablet lg:text-preset-4-desktop">
                  the terminology...
                </div>
                <div className="text-preset-3 uppercase md:text-preset-3-tablet lg:text-preset-3-desktop">
                  {currentTechnologyItem.name}
                </div>
              </div>

              <div className="flex flex-col gap-200">
                <div className="text-preset-9 text-blue-300 md:text-preset-9-tablet lg:text-preset-9-desktop">
                  {currentTechnologyItem.description}
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-1 basis-0 w-screen -mx-300 items-end overflow-hidden pt-800 md:-mx-500 lg:mx-0 lg:pt-0">
            <img
              src={currentTechnologyItem.images.portrait}
              alt={currentTechnologyItem.name}
              className="w-full h-full object-cover object-bottom md:object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
