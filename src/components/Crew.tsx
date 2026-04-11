import { useState } from "react";
import { crew, type CrewMember } from "../data/data";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

export default function Crew() {
  const [currentCrewMember, setCurrentCrewMember] = useState<CrewMember>(
    crew[0],
  );

  return (
    <div className="flex flex-col flex-1 p-300 md:p-500 lg:py-0 lg:px-800">
      <div className="flex flex-1 flex-col w-full max-w-[1110px] gap-300 mx-auto lg:my-600">
        <SectionHeader number={2} sectionTitle={"meet your crew"} />
        <div className="flex flex-1 flex-col w-full gap-400 lg:flex-row">
          <div className="flex flex-1 flex-col w-full gap-300 pt-500 items-center md:flex-none lg:flex-1 lg:gap-500 lg:justify-center lg:pt-0 lg:min-w-[445px] lg:items-start">
            <div className="flex flex-1 flex-col w-full justify-center gap-300 text-center max-w-[640px] md:max-w-[512px] md:flex-none lg:flex-1 lg:max-w-none lg:text-start">
              <div className="flex flex-col text-preset-8 uppercase gap-100 md:gap-200">
                <div className="text-preset-4 uppercase text-white/50 md:text-preset-4-tablet lg:text-preset-4-desktop">
                  {currentCrewMember.role}
                </div>
                <div className="text-preset-3 uppercase md:text-preset-3-tablet lg:text-preset-3-desktop">
                  {currentCrewMember.name}
                </div>
              </div>
              <div className="flex flex-col gap-200">
                <div className="text-preset-9 text-blue-300 md:text-preset-9-tablet lg:text-preset-9-desktop">
                  {currentCrewMember.bio}
                </div>
              </div>
            </div>
            <div className="flex w-full gap-200 justify-center lg:gap-500 lg:mb-600 lg:justify-start">
              {crew.map((item) => (
                <Button
                  key={item.name}
                  variant="dotIndicator"
                  className={`${
                    item.name === currentCrewMember.name ? "!bg-white/100" : ""
                  }`}
                  onClick={() => setCurrentCrewMember(item)}
                ></Button>
              ))}
            </div>
          </div>

          <div className="flex flex-1 w-full items-center justify-center lg:flex-none lg:w-fit">
            <img
              src={currentCrewMember.image}
              alt={currentCrewMember.name}
              className="w-auto h-auto max-h-[340px] object-contain md:max-h-[560px] overflow-hidden lg:max-h-none lg:h-[676px] xl:w-[539px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(180deg, white 75%, transparent 100%)",
                maskImage:
                  "linear-gradient(180deg, white 75%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
