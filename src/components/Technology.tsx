import { useState } from "react";
import { technology, type TechnologyItem } from "../data/data";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

export default function Technology() {
  const [currentTechnologyItem, setCurrentTechnologyItem] =
    useState<TechnologyItem>(technology[0]);

  return (
    <div className="flex flex-1 flex-col p-300 pb-600 md:p-500 lg:py-0 lg:px-800">
      <div className="flex flex-1 flex-col w-full max-w-[1275px] gap-300 ml-600 ml-auto h-full lg:my-600">
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
            <div className="flex flex-col gap-200 text-center lg:text-start lg:gap-300">
              <div className="flex flex-col text-preset-8 uppercase gap-200">
                <div className="text-preset-4 uppercase text-white/50 uppercase">
                  the terminology...
                </div>
                <div className="text-preset-3 uppercase">
                  {currentTechnologyItem.name}
                </div>
              </div>

              <div className="flex flex-col gap-200">
                <div className="text-preset-9 text-blue-300">
                  {currentTechnologyItem.description}
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-1 basis-0 w-screen -mx-300 md:-mx-500 items-end overflow-hidden">
            <img
              src={currentTechnologyItem.images.portrait}
              alt={currentTechnologyItem.name}
              className="w-full h-full object-cover object-bottom max-h-[258px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
